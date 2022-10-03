import React from 'react';

import "../App.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const User = (props) => {
  console.log(props)

  return (
    <Box width="35%" className='formContainer'>
      <h1 style={{ color: "white" }}>Their Username</h1>
      <Button>Change Username</Button>
      <h1 style={{ color: "white" }}>Their Password</h1>
      <Button>Change Password</Button>
    </Box>
  )
}

export default User