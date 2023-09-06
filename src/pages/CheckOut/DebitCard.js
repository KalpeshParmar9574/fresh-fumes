import { Card, FormControl, FormControlLabel, InputAdornment, Radio, TextField } from '@mui/material';
import React from 'react'

function DebitCard() {
  return (
    <Card
      sx={{
        width: "470px",
        height: "229px",
        backgroundColor: "rgba(0, 0, 0, 1)",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <FormControl sx={{ color: "white" }}>
        <FormControlLabel
          value="Credit or Debit Card"
          control={<Radio />}
          label="Credit or Debit Card"
        />
      </FormControl>
      <TextField
        id="outlined-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <AccountCircleIcon /> */}
            </InputAdornment>
          ),
        }}
      />
    </Card>
  );
}

export default DebitCard
