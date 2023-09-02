import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import { Form, FormikProvider } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import FilterListIcon from '@mui/icons-material/FilterList';
// material
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
//
import Scrollbar from '../../Scrollbar';
import ColorManyPicker from '../../ColorManyPicker';

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
	{ value: 'featured', label: 'Featured' },
	{ value: 'newest', label: 'Newest' },
	{ value: 'priceDesc', label: 'Price: High-Low' },
	{ value: 'priceAsc', label: 'Price: Low-High' },
];
export const FILTER_GENDER_OPTIONS = ['Men', 'Women', 'Kids'];
export const FILTER_CATEGORY_OPTIONS = ['All', 'Shose', 'Apparel', 'Accessories'];
export const FILTER_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];
export const FILTER_PRICE_OPTIONS = [
	{ value: 'below', label: 'Below $25' },
	{ value: 'between', label: 'Between $25 - $75' },
	{ value: 'above', label: 'Above $75' },
];
export const FILTER_COLOR_OPTIONS = [
	'#00AB55',
	'#000000',
	'#FFFFFF',
	'#FFC0CB',
	'#FF4842',
	'#1890FF',
	'#94D82D',
	'#FFC107',
];

// ----------------------------------------------------------------------

ShopFilterSidebar.propTypes = {
	isOpenFilter: PropTypes.bool,
	onResetFilter: PropTypes.func,
	onOpenFilter: PropTypes.func,
	onCloseFilter: PropTypes.func,
	formik: PropTypes.object,
};

export default function ShopFilterSidebar({
	isOpenFilter,
	onResetFilter,
	onOpenFilter,
	onCloseFilter,
	formik,
}) {
	const { values, getFieldProps, handleChange } = formik;

	return (
		<>
			<Button
				disableRipple
				color="inherit"
				endIcon={<Icon icon={FilterListIcon} />}
				onClick={onOpenFilter}
			>
				Filters&nbsp;
			</Button>

			<FormikProvider value={formik}>
				<Form autoComplete="off" noValidate>
					<Drawer
						anchor="right"
						open={isOpenFilter}
						onClose={onCloseFilter}
						PaperProps={{
							sx: { width: 280, border: 'none', overflow: 'hidden' },
						}}
					>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							sx={{ px: 1, py: 2 }}
						>
							<Typography variant="subtitle1" sx={{ ml: 1 }}>
								Filters
							</Typography>
							<IconButton onClick={onCloseFilter}>
								<Icon icon={CloseIcon} width={20} height={20} />
							</IconButton>
						</Stack>

						<Divider />

						<Scrollbar>
							<Stack spacing={3} sx={{ p: 3 }}>
								<div>
									<Typography variant="subtitle1" gutterBottom>
										Gender
									</Typography>
									<FormGroup>
										{FILTER_GENDER_OPTIONS.map((item) => (
											<FormControlLabel
												key={item}
												control={
													<Checkbox
														{...getFieldProps('gender')}
														value={item}
														checked={values.gender.includes(item)}
													/>
												}
												label={item}
											/>
										))}
									</FormGroup>
								</div>

								<div>
									<Typography variant="subtitle1" gutterBottom>
										Category
									</Typography>
									<RadioGroup {...getFieldProps('category')}>
										{FILTER_CATEGORY_OPTIONS.map((item) => (
											<FormControlLabel
												key={item}
												value={item}
												control={<Radio />}
												label={item}
											/>
										))}
									</RadioGroup>
								</div>

								<div>
									<Typography variant="subtitle1" gutterBottom>
										Colour
									</Typography>
									<ColorManyPicker
										name="colors"
										colors={FILTER_COLOR_OPTIONS}
										onChange={handleChange}
										onChecked={(color) => values.colors.includes(color)}
										sx={{ maxWidth: 36 * 4 }}
									/>
								</div>

								<div>
									<Typography variant="subtitle1" gutterBottom>
										Price
									</Typography>
									<RadioGroup {...getFieldProps('priceRange')}>
										{FILTER_PRICE_OPTIONS.map((item) => (
											<FormControlLabel
												key={item.value}
												value={item.value}
												control={<Radio />}
												label={item.label}
											/>
										))}
									</RadioGroup>
								</div>

								<div>
									<Typography variant="subtitle1" gutterBottom>
										Rating
									</Typography>
									<RadioGroup {...getFieldProps('rating')}>
										{FILTER_RATING_OPTIONS.map((item, index) => (
											<FormControlLabel
												key={item}
												value={item}
												control={
													<Radio
														disableRipple
														color="default"
														icon={<Rating readOnly value={4 - index} />}
														checkedIcon={
															<Rating readOnly value={4 - index} />
														}
													/>
												}
												label="& Up"
												sx={{
													my: 0.5,
													borderRadius: 1,
													'& > :first-of-type': { py: 0.5 },
													'&:hover': {
														opacity: 0.48,
														'& > *': { bgcolor: 'transparent' },
													},
													...(values.rating.includes(item) && {
														bgcolor: 'background.neutral',
													}),
												}}
											/>
										))}
									</RadioGroup>
								</div>
							</Stack>
						</Scrollbar>

						<Box sx={{ p: 3 }}>
							<Button
								fullWidth
								size="large"
								type="submit"
								color="inherit"
								variant="outlined"
								onClick={onResetFilter}
								startIcon={<Icon icon={ClearAllIcon} />}
							>
								Clear All
							</Button>
						</Box>
					</Drawer>
				</Form>
			</FormikProvider>
		</>
	);
}
