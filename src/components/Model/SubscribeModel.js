// import React from "react";
// import NiceModal, { useModal } from "@ebay/nice-modal-react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";

// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import Slide from "@mui/material/Slide";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import LoadingButton from "@mui/lab/LoadingButton";
// import { useFormik } from "formik";
// import subscribeSchema from "../../validations/subscribeSchema";
// import { Typography } from "@mui/material";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// const SubscribeModel = NiceModal.create(() => {
//   const modal = useModal();
//   const dispatch = useDispatch();

//   const initialValues = {
//     email: "",
//   };

//   const formik = useFormik({
//     initialValues,
//     validationSchema: subscribeSchema,
//     onSubmit: async (values) => {
//       try {
//         // const response = await dispatch(insertCollege(values)).unwrap();
//         // if (response.status === 200) {
//         //   dispatch(getCollege());
//         //   modal.resolve({ ...response.data });
//         //   return modal.hide();
//         // }
//       } catch (error) {
//         toast.error(error.message);
//       }
//     },
//   });

//   return (
//     <Dialog
//       TransitionComponent={Transition}
//       open={modal.visible}
//       onClose={() => modal.hide()}
//       TransitionProps={{
//         onExited: () => modal.remove(),
//       }}
//       fullWidth
//     >
//       <Grid container spacing={0}>
//         <Grid item xs={12} sm={6}>
//           <div style={{ padding: "20px" }}>
//             <Typography variant="h6" style={{ textAlign: "center" }}>
//               Subscribe
//             </Typography>
//             <Typography
//               variant="body2"
//               style={{
//                 textAlign: "center",
//                 marginTop: "10px",
//                 marginBottom: "10px",
//               }}
//             >
//               for the latest updates
//             </Typography>
//             <Typography
//               variant="caption"
//               style={{
//                 textAlign: "center",
//                 marginTop: "10px",
//                 marginBottom: "10px",
//               }}
//             >
//               Lorem ipsum dolor sit amet consectetur. Faucibus et quis enim
//               pellentesque sit ac enim sed vitae. In consectetur integer aliquam
//               ac
//             </Typography>
//             <form onSubmit={formik.handleSubmit}>
//               <DialogContent>
//                 <TextField
//                   fullWidth
//                   label="Email Address"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   variant="outlined"
//                   error={Boolean(formik.touched.email && formik.errors.email)}
//                   helperText={formik.touched.email && formik.errors.email}
//                 />
//               </DialogContent>
//               <DialogActions>
//                 <LoadingButton
//                   loading={formik.loading}
//                   type="submit"
//                   variant="contained"
//                   sx={{ marginLeft: "auto", marginRight: "auto" }}
//                 >
//                   Subscribe
//                 </LoadingButton>
//               </DialogActions>
//             </form>
//           </div>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <div style={{ textAlign: "center" }}>
//             <img
//               src="/assets/images/subscribe/subscribe.png"
//               alt=""
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//           </div>
//         </Grid>
//       </Grid>
//     </Dialog>
//   );
// });

// export default SubscribeModel;


import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import subscribeSchema from "../../validations/subscribeSchema";
import { Typography } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SubscribeModel = NiceModal.create(() => {
  const modal = useModal();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: subscribeSchema,
    onSubmit: async (values) => {
      try {
        // const response = await dispatch(insertCollege(values)).unwrap();
        // if (response.status === 200) {
        //   dispatch(getCollege());
        //   modal.resolve({ ...response.data });
        //   return modal.hide();
        // }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Dialog
      TransitionComponent={Transition}
      open={modal.visible}
      onClose={() => modal.hide()}
      TransitionProps={{
        onExited: () => modal.remove(),
      }}
      fullWidth
      maxWidth="sm" // Set maximum width for the dialog
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h6" style={{ textAlign: "center" }}>
              Subscribe
            </Typography>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              For the latest updates
            </Typography>
            <Typography
              variant="caption"
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Faucibus et quis enim
              pellentesque sit ac enim sed vitae. In consectetur integer aliquam
              ac
            </Typography>
            <form onSubmit={formik.handleSubmit} style={{ marginTop: "10px" }}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <LoadingButton
                loading={formik.loading}
                type="submit"
                variant="contained"
                sx={{
                  marginTop: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Subscribe
              </LoadingButton>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <img
              src="/assets/images/subscribe/subscribe.png"
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>
    </Dialog>
  );
});

export default SubscribeModel;
