import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./mainhome.css";
import { Box } from "@mui/system";
import { Typography } from "antd";
import Secureweb from "../../../assets/secureweb.png";
import HomeVector from "../../../assets/homevector.png";
import YoutubeVideo from "../../../components/YoutubeVideo";

const MainHome = () => {
  return (
    <>
      <Container fluid className="home_top">
        <Row className="mx-5">
          <Col xs="12" sm="12" md="6" lg="6">
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                height: '100%',
              }}
            >
              {/* <img src={Secureweb} alt="Secureweb" style={{ width: '60%' }} /> */}
              <h1
                style={{
                  fontSize: '70px',
                  fontWeight: 900,
                  color: '#474A54',
                  lineHeight: '70px',
                  fontFamily: 'sans-serif',
                }}
              >
                The Future of{' '}
                <span style={{ color: '#35C8D6' }}>
                  Virtual ID
                </span>
              </h1>
              <Box>
                <Typography variant="" className="home_text">
                  {/* <b>PrimeID™</b>  is your trusted online identity */}
                  <b>PrimeID™</b> is the ideal solution for verification of new
                  people being onboarded into businesses, applications or teams.
                </Typography>
                <Typography className="home_text2">
                  The <b>PrimeID™ </b> also serves as an authentication method
                  for returning user to those entities and applications.
                </Typography>
                <br />
              </Box>
            </Box>
          </Col>
          <Col xs="12" sm="12" md="6" lg="6">
            <Box className="dcenter">
              <img src={HomeVector} alt="HomeVector" className="home_vector" />
              {/* <YoutubeVideo /> */}
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainHome;