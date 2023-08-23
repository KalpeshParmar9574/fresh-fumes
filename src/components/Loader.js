import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Loader(){
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="loader-component">
        <CircularProgress />
      </Box>
    );
}


export default Loader