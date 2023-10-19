import React from 'react'
import { Box, Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <>
      <Box style={{ height: "100vh", display: "grid", placeItems: "center", textAlign: "center" }}>
        <Typography style={{
          font: "normal normal bold 60px/80px Raleway",
        }}>
          404<br />
          <span style={{
            font: "normal normal bold 50px Raleway",
          }}>
            Page Not <span style={{ color: "#47CFDF" }}> Found!</span>
          </span>
        </Typography>
      </Box>
    </>
  )
}

export default ErrorPage