import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

import FooterImg from "../../../assets/footerimg.png"
import {  Typography } from 'antd'

const Footer = () => {
  return (
    <>
       <Box className="footer_back">
         <Box className='footer_text'>
            <Link to="/">Home</Link>
            <Link to="/solution">Solution</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
         </Box>
         <a href='/' style={{paddingTop:"2rem"}}><img src={FooterImg} alt="FooterImg" className='footer_img'/></a>
        </Box> 
        <Box className="main_footer">
           <Typography style={{color:"white",display:"flex", justifyContent:"center", alignItems:"center"}}><strong style={{fontSize:"25px",margin:"0 5px"}}> &copy; </strong>PrimeID- 2022</Typography>
        </Box>
    </>
  )
}

export default Footer