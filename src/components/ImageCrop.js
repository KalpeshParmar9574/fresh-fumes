import React, { useState, useEffect, useRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ReactCrop, {
	centerCrop,
	makeAspectCrop,
	Crop,
	PixelCrop,
} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

const TO_RADIANS = Math.PI / 180;

export async function canvasPreview(
	image,
	canvas,
	crop,
	scale = 1,
	rotate = 0,
) {
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		throw new Error("No 2d context");
	}

	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	// devicePixelRatio slightly increases sharpness on retina devices
	// at the expense of slightly slower render times and needing to
	// size the image back down if you want to download/upload and be
	// true to the images natural size.
	const pixelRatio = window.devicePixelRatio;
	// const pixelRatio = 1

	canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
	canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

	ctx.scale(pixelRatio, pixelRatio);
	ctx.imageSmoothingQuality = "high";

	const cropX = crop.x * scaleX;
	const cropY = crop.y * scaleY;

	const rotateRads = rotate * TO_RADIANS;
	const centerX = image.naturalWidth / 2;
	const centerY = image.naturalHeight / 2;

	ctx.save();

	// 5) Move the crop origin to the canvas origin (0,0)
	ctx.translate(-cropX, -cropY);
	// 4) Move the origin to the center of the original position
	ctx.translate(centerX, centerY);
	// 3) Rotate around the origin
	ctx.rotate(rotateRads);
	// 2) Scale the image
	ctx.scale(scale, scale);
	// 1) Move the center of the image to the origin (0,0)
	ctx.translate(-centerX, -centerY);
	ctx.drawImage(
		image,
		0,
		0,
		image.naturalWidth,
		image.naturalHeight,
		0,
		0,
		image.naturalWidth,
		image.naturalHeight,
	);

	ctx.restore();
}

function toBlob(canvas) {
	return new Promise((resolve) => {
		canvas.toBlob(resolve);
	});
}

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
	return centerCrop(
		makeAspectCrop(
			{
				unit: "%",
				width: 90,
			},
			aspect,
			mediaWidth,
			mediaHeight,
		),
		mediaWidth,
		mediaHeight,
	);
}

function useDebounceEffect(fn, waitTime, deps) {
	useEffect(() => {
		const t = setTimeout(() => {
			fn.apply(undefined, deps);
		}, waitTime);

		return () => {
			clearTimeout(t);
		};
	}, deps);
}

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ImageCropModal = NiceModal.create(({ image }) => {
	const modal = useModal();
	const [imgSrc, setImgSrc] = useState(image);
	const previewCanvasRef = useRef(null);
	const imgRef = useRef(null);
	const [crop, setCrop] = useState();
	const [completedCrop, setCompletedCrop] = useState();
	const [scale, setScale] = useState(1);
	const [rotate, setRotate] = useState(0);
	const [aspect, setAspect] = useState(1 / 1);

	const onImageLoad = (e) => {
		if (aspect) {
			const { width, height } = e.currentTarget;
			setCrop(centerAspectCrop(width, height, aspect));
		}
	};

	useDebounceEffect(
		async () => {
			if (
				completedCrop?.width &&
				completedCrop?.height &&
				imgRef.current &&
				previewCanvasRef.current
			) {
				// We use canvasPreview as it's much faster than imgPreview.
				canvasPreview(
					imgRef.current,
					previewCanvasRef.current,
					completedCrop,
					scale,
					rotate,
				);
			}
		},
		100,
		[completedCrop, scale, rotate],
	);

	const handleToggleAspectClick = () => {
		if (aspect) {
			setAspect(undefined);
		} else if (imgRef.current) {
			const { width, height } = imgRef.current;
			setAspect(16 / 9);
			setCrop(centerAspectCrop(width, height, 16 / 9));
		}
	};

	const getCroppedImg = async (
		image,
		canvas,
		crop,
		scale = 1,
		rotate = 0,
		fileName,
	) => {
		const ctx = canvas.getContext("2d");

		if (!ctx) {
			throw new Error("No 2d context");
		}

		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		// devicePixelRatio slightly increases sharpness on retina devices
		// at the expense of slightly slower render times and needing to
		// size the image back down if you want to download/upload and be
		// true to the images natural size.
		const pixelRatio = window.devicePixelRatio;
		// const pixelRatio = 1

		canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
		canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

		ctx.scale(pixelRatio, pixelRatio);
		ctx.imageSmoothingQuality = "high";

		const cropX = crop.x * scaleX;
		const cropY = crop.y * scaleY;

		const rotateRads = rotate * TO_RADIANS;
		const centerX = image.naturalWidth / 2;
		const centerY = image.naturalHeight / 2;

		ctx.save();

		// 5) Move the crop origin to the canvas origin (0,0)
		ctx.translate(-cropX, -cropY);
		// 4) Move the origin to the center of the original position
		ctx.translate(centerX, centerY);
		// 3) Rotate around the origin
		ctx.rotate(rotateRads);
		// 2) Scale the image
		ctx.scale(scale, scale);
		// 1) Move the center of the image to the origin (0,0)
		ctx.translate(-centerX, -centerY);
		ctx.drawImage(
			image,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight,
		);

		ctx.restore();

		//Preview URL

		const previewUrl = canvas.toDataURL("image/jpeg").split(";base64,")[1];

		// As a blob
		modal.resolve({
			image: await new Promise((resolve, reject) => {
				canvas.toBlob((file) => {
					file.name = fileName;
					resolve(file);
				}, "image/jpeg");
			}),
			previewUrl,
		});
		return modal.hide();
	};

	return (
		<Dialog
			TransitionComponent={Transition}
			open={modal.visible}
			onClose={() => modal.hide()}
			TransitionProps={{
				onExited: () => modal.remove(),
			}}
			fullWidth
		>
			<DialogTitle>Crop Image</DialogTitle>
			<DialogContent>
				{!!imgSrc && (
					<ReactCrop
						crop={crop}
						onChange={(_, percentCrop) => setCrop(percentCrop)}
						onComplete={(c) => setCompletedCrop(c)}
						aspect={aspect}
					>
						<img
							ref={imgRef}
							alt="Crop me"
							src={imgSrc}
							style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
							onLoad={onImageLoad}
						/>
					</ReactCrop>
				)}
			</DialogContent>

			<DialogContent>
				{!!completedCrop && (
					<canvas
						ref={previewCanvasRef}
						style={{
							border: "1px solid black",
							objectFit: "contain",
							width: completedCrop.width,
							height: completedCrop.height,
						}}
					/>
				)}
			</DialogContent>

			<DialogActions>
				<Button color="error" variant="contained" onClick={() => modal.hide()}>
					Close
				</Button>
				<Button
					variant="contained"
					onClick={() =>
						getCroppedImg(
							imgRef.current,
							previewCanvasRef.current,
							completedCrop,
							scale,
							rotate,
							"newImage",
						)
					}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
});

export default ImageCropModal;
