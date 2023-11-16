import React from 'react';
import { Box, Typography } from '@mui/material';
import Contact from './Contact';
// import SignupText from "../../../assets/signup-text.png";

const Signup = () => {
  return (
    <>
      <Box className="signup_text" style={{ marginTop: '18px' }}>
        {/* <img src={SignupText} alt="SignupText" width="50%" /> */}
        <Typography className="contacthead_text">Contact Us</Typography>
      </Box>
      <Contact />
    </>
  );
};

export default Signup;
