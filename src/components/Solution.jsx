import React from 'react'
import { Box, CardContent, Typography } from '@mui/material'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProblemImg from "../assets/problem.png"
import SolutionImg from "../assets/solution.png"
import PrimePdf from "../assets/primepager.pdf"
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const data = [
  {
    id:1,
    img1:ProblemImg,
    img2:SolutionImg,
    headText1:" No Dominant ID Standard", 
    headTextcolor1:"Web3", 
    headText2:"A Trusted Verified Network for ",
    headTextcolor2:"",
    para1:"",
    para2:"",
  }
]
const Solution = () => {
  return (
   <>
   <Typography className="primeid_text">
       Our Solution
      </Typography>
      <Typography style={{ color: "#47CFDF",textAlign:"center", font: "normal normal 600 1.5rem Raleway", cursor:"pointer"}}>
      <Link to={PrimePdf}  target="_blank" ><Button className='solution_btn'>READ OUR ONE PAGER</Button></Link>
      </Typography>
      <Row className="">
        {data.map(({id,img1,img2,headText1,headText2,para1,para2})=>{
          return(
            <>
            <Col xs="12" sm="12" md="6" lg="6">
          <Box className="card_back card_back1 ">
            <img
              src={ProblemImg}
              alt=""
              // width="250"
              className="primevector_img"
            />
            <CardContent
              style={
                {
                  // height: "100%",
                  // display: "flex",
                  // alignItems: "center",
                  // flexDirection: "column",
                }
              }
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card_content_text"
              >
               Problem
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card_content_text2"
              >
               <b>Identity Fraud is a $16.9 billion problem and becoming worse</b> due to the increasing popularity of Web3 and social media applications and multi-channel account access.
               <br />
               <br />
               <b> Criminals targeting smaller numbers of victims but inflicting greater losses </b> through more complex and varied approaches.
               <br />
               <br />
               <b>Current identity fraud detection solutions are reactive by design</b> and don't protect consumers and businesses from criminals.
              </Typography>
            </CardContent>
          </Box>
        </Col>

        <Col xs="12" sm="12" md="6" lg="6">
          <Box className="card_back">
            <img
              src={SolutionImg}
              alt=""
              // width="300"
              className="primevector_img"
            />
            <CardContent
              style={
                {
                  // height: "100%",
                  // display: "flex",
                  // alignItems: "center",
                  // flexDirection: "column",
                }
              }
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="card_content_text"
              >
                Solution
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="card_content_text2"
              >
              <b> PrimeID Platform is industry’s first online trusted ecosystem</b> of Web3 Project Founders and Team Members.
               <br />
               <br />
              <b> Infuses trust and confidence</b> in multi-party online communications and transactions across various platforms, anytime, anywhere.
               <br />
               <br />
               <b>Market Leading Ecosystem</b> with unmatched breadth and depth of partnerships.
               <br />
               Web3 and Social Media Leaders, Digital Communication Leaders, Leading Consumer Organizations 
               Unique, Secure, Scalable, Seamless
              </Typography>
            </CardContent>
          </Box>
        </Col>
            </>
          )
        })}
      </Row>
   </>
  )
}

export default Solution