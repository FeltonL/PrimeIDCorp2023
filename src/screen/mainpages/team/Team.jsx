import React from "react";
import { Col, Row } from "antd";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import CarouselCard from "./Carousel";
import "./team.css";

const Team = () => {
  return (
    <>
      <Box className="team_back">
        <Row className="mx-5 display_setting">
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Box className="main_team_text">
              <Typography
                className="meet_text"
                style={{
                  font: "normal normal 900 47px Raleway",
                  color: "#474A54",
                }}>
                Meet
              </Typography>
              <Typography
                className="meet_text2"
                style={{
                  font: "normal normal bold 47px Raleway",
                  color: "#47CFDF",
                }}>
                The Team
              </Typography>
              <Typography
                className="manage_text"
                style={{
                  font: "normal normal 600 20px/28px Raleway",
                  color: "#747474",
                  marginTop: "1rem"
                }}>
                MANAGEMENT TEAM
              </Typography>
            </Box>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <CarouselCard />
          </Col>
        </Row>
      </Box>
    </>
  );
};

export default Team;
