import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Col, Row } from "antd";
import Rolend from "../assets/rolendbro.png";
import Felton from "../assets/feltonbro.png";
// import Leslie from "../assets/leslie.png";
import Vishal from "../assets/vishalvr.png";
import Nita from "../assets/nita.png";
import primelogo from "../assets/mainlogo.png"
import "./about.css";

const teamCard = [
  {
    id: "1",
    img: Rolend,
    title: "ROLAND OWENS​",
    subtitle: "CEO",
    description:
      "Consultant to Global 2000 firms for enterprise and SaaS applications and advisory experience with major consulting  firms and business software companies. Roland has an MBA from the University of Chicago.",
  },
  {
    id: "2",
    img: Felton,
    title: "FELTON LOUIS",
    subtitle: "CTO",
    description:
      "Enterprise applications, consulting and large-scale development experience with Oracle, KPMG and start-ups. Felton has a BS in Management Information Systems from The University of New Orleans.",
  },
  // {
  //   id: "3",
  //   img: Leslie,
  //   title: "LESLIE LICHTENSTEIN​",
  //   subtitle: "CFO​",
  //   description:
  //     "Over 20 years of experience in finance, strategy, fundraising with global institutions including University of Chicago, Dow Jones & Co. and Citigroup. Leslie has a BA/MBA from the University of Chicago.​",
  // },
  {
    id: "4",
    img: Vishal,
    title: "VISHAL VERMA​",
    subtitle: "CHAIRMAN",
    description:
      "Consultant to Global 2000 firms for enterprise and SaaS applications and advisory experience with major consulting firms and business software companies. Roland has an MBA from the University of Chicago.",
  },
  {
    id: "5",
    img: Nita,
    alt:"nitaimage",
    title: "NITA OWENS​",
    subtitle: "COO",
    description:
      "Over 20 years of extensive Program Management experience in the areas of Data, Application and Network Security. Nita has worked extensively with CISOs, executive management, architects and engineering teams to assess, determine solutions, best practices, and identify and onboard 3rd party implementation partners.",
  },
];

const About = () => {
  return (
    <>
      <Typography className="primeid_text">
        The Team
        <br />
        <span className="ourteam_text">
          Meet Our Team
        </span>
      </Typography>

      <Row gutter={[40, 0]} className="mx-5 my-5">
        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <Typography
            gutterBottom
            style={{
              font: "normal normal bold 25px/28px Raleway",
              color: "#747474",
            }}
          >
            MANAGEMENT TEAM
          </Typography>
        </Col> */}
          
        
        {teamCard.map((card, index) => (
              <Col xs={24} sm={12} md={12} lg={6}>
            <Card className="about_card" key={index}>
              <CardActionArea>
                <CardMedia
                  className="about_img"
                  component="img"
                  image={card.img}
                  alt={card.alt}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="about_card_title"
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    // variant="h6"
                    component="div"
                    className="about_card_subtitle"
                  >
                   {card.subtitle}
                  </Typography>
                  <Typography
                    // variant="body2"
                  className="about_card_desc"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Col>
          ))}
      </Row>
     <Row  className="mx-5">
      <Col> <img src={primelogo} alt="primelogo" width="25%"/></Col>
     </Row>
     {/* <Box className="text-center">
     <img src={primelogo} alt="primelogo" width="20%"/>
     </Box> */}
    </>
  );
};

export default About;
