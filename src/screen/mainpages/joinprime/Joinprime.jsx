import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Row from "react-bootstrap/Row";
import "./joinprime.css"

import BitmapImg from '../../../assets/mainbitmap.png'

const Joinprime = () => {
  return (
    <>
    <Box>
    <Typography className="primeid_text">
        Joining Prime<span style={{ color: "#47CFDF" }}>ID</span>
      </Typography>

         
        <Row className="mx-5">
          <Box className="join_prime_img">
            <img src={BitmapImg} alt="" width="80%"/>
          </Box>
        </Row>

    </Box>
    </>
  )
}

export default Joinprime