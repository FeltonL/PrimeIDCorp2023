import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardContent, Typography } from "@mui/material";
import "./prime.css";
import Primevector1 from "../../../assets/primevector1.png";
import Primevector2 from "../../../assets/primevector2.png";
import { Box } from "@mui/system";
import Primeidtext from "./Primeidtext";

const data = [{
  id: 1,
  img1: Primevector1,
  img2: Primevector2,
  headText1: " No Dominant ID Standard",
  headTextcolor1: "Web3",
  headText2: "A Trusted Verified Network for ",
  headTextcolor2: "",
  para1: "",
  para2: "",
}]

const Prime = () => {
  return (
    <>
      <Primeidtext />
      <Row className="">
        {data.map(() => {
          return (
            <>
              <Col xs="12" sm="12" md="6" lg="6">
                <Box className="card_back card_back1 ">
                  <img src={Primevector1} alt="" className="primevector_img" />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="card_content_text"
                    >
                      No Dominant ID Standard <br />
                      {/* in{" "}
                      <span style={{ color: "#47CFDF" }}> Web3</span> */}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="card_content_text2"
                    >
                      A lack of verifiable identities in business ecosystems
                      enable bad actors' cybercrimes, including social
                      engineering, fraud, catfishing and cyber bullying. <br />{' '}
                      <br /> Currently, there is no simple method for businesses
                      and teams to verify identities and create a trusted
                      network of authenticated connections.
                    </Typography>
                  </CardContent>
                </Box>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6">
                <Box className="card_back">
                  <img src={Primevector2} alt="" className="primevector_img" />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="card_content_text"
                    >
                      A Trusted Verified Network for <br /> Individuals{' '}
                      <span style={{ color: '#47CFDF' }}>Online</span>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="card_content_text2"
                    >
                      The PrimeID™ acts as a Know Your Customer (KYC) for the
                      online user by confirming the identity of an individual
                      via our patent pending process and technology. <br />{' '}
                      <br /> PrimeID™ instantaneously confirms the identity of
                      the individual thereby indicating a pass or fail, while
                      only storing a minimum of data from the customer. We don’t
                      just verify an email address or phone number; we confirm
                      the identity of the individual. <br /> <br /> As a result,
                      we are creating a trusted, verified network for
                      individuals online.
                    </Typography>
                  </CardContent>
                </Box>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
};
export default Prime;