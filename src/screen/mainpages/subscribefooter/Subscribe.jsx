import { Box } from "@mui/material";
import { Typography } from "antd";
import { Button, Input } from "antd";
import { Col, Row } from "antd";
import React from "react";
import Footer from "./Footer";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <>
      <Box className="subscribe_back">
        <Box className="mt-5 mx-4">
          <Typography
            className="subs_text">
            Subscribe for Updates
          </Typography>
          <Typography
            className="sub_subitle">
            Stay up to date with development, updates, announcements and more.
          </Typography>
        </Box>
        <Box>
          <Row
            className="mx-4 subs_input"
            gutter={[0, 10]}>
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <Input placeholder="Full Name*" className="subscibe_input" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} xl={10}>
              <Input placeholder="Email address*" className="subscibe_input sec_input" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={4} xl={4}>
              <Button className="subscibe_button">
                Submit
              </Button>
            </Col>
          </Row>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default Subscribe;