import React, { useState } from "react";
import { Box } from "@mui/material";
import "./contact.css";
import { Col, Row } from "antd";
import { Typography } from "antd";
import { Input } from "antd";
import CommonBtn from "../../../components/common/CommonBtn";
const { TextArea } = Input;
const { Text } = Typography;

const Contact = () => {
  const [inputVal, setInputVal] = useState("");
  const manageInput = (key, val) => [setInputVal({ ...inputVal, [key]: val })];

  return (
    <>
      <Row gutter={[0, 0]} className="mx-5 m-5">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <Box className="main_text">
            <Typography className="contact_text">
              Contact <span style={{ color: "#47CFDF" }}>Information</span>
            </Typography>
            <Typography className="contact_text_address">
              PrimeID, Inc <br /> 6363 Christine Ave #2704 <br /> Emeryville, CA
              94608
            </Typography><br />
            <Text className="contact_text_address" strong>+1 (415) 226-9532</Text><br />
            <Text className="contact_text_address" strong>info@primeid.io</Text>
          </Box>
        </Col>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Typography className="contact_text">
            <center> Send an Inquiry or Request</center>
          </Typography>
          <Typography className="contact_text_address">
            <center >
              Please use the form below to contact us about your inquiry or
              request
            </center>
          </Typography>
          <Row gutter={[20, 30]} className="my-3">
            <Col xs={24} sm={24} md={12} lg={12}>
              <Input
                placeholder="Name*"
                className="contact_input"
                value={inputVal?.name}
                onChange={(e) => manageInput("name", e.target.value)}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Input
                placeholder="Email*"
                className="contact_input"
                value={inputVal?.email}
                onChange={(e) => manageInput("email", e.target.value)}
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24}>
              <TextArea
                placeholder="Message*"
                allowClear
                className="contact_message"
                value={inputVal?.message}
                onChange={(e) => manageInput("message", e.target.value)}
              />
            </Col>
          </Row>
          <CommonBtn />
        </Col>
      </Row>
    </>
  );
};
export default Contact;