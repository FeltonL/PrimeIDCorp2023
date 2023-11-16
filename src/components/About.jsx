import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Col, Row } from 'antd';
import Rolend from '../assets/Picture2.png';
import Felton from '../assets/Picture4.png';
// import Leslie from "../assets/leslie.png";
import Vishal from '../assets/Picture3.jpg';
import Nita from '../assets/Picture6.png';
import Vignesh from '../assets/Picture5.jpg';
import primelogo from '../assets/mainlogo.png';
import './about.css';
import Picture7 from '../assets/Picture7.png';
import Picture8 from '../assets/Picture8.png';
import Picture9 from '../assets/Picture9.png';
import Picture10 from '../assets/Picture10.png';
import Picture11 from '../assets/Picture11.png';
import Picture12 from '../assets/Picture12.png';
import Picture13 from '../assets/Picture13.png';
import Picture14 from '../assets/Picture14.png';
import Picture15 from '../assets/Picture15.png';
import Picture16 from '../assets/Picture16.png';
import Picture17 from '../assets/Picture17.png';
import Picture18 from '../assets/Picture18.png';
import Picture19 from '../assets/Picture19.png';
import Picture20 from '../assets/Picture20.png';
import Picture21 from '../assets/Picture21.png';
import Picture22 from '../assets/Picture22.png';

const teamCard = [
  {
    id: '1',
    img: Rolend,
    title: 'ROLAND OWENS​',
    subtitle: 'CEO',
    description:
      'Consultant to Global 2000 firms for enterprise and SaaS applications and advisory experience with major consulting  firms and business software companies. Roland has an MBA from the University of Chicago.',
  },
  {
    id: '2',
    img: Vishal,
    title: 'VISHAL VERMA​',
    subtitle: 'CHAIRMAN',
    description:
      'Consultant to Global 2000 firms for enterprise and SaaS applications and advisory experience with major consulting firms and business software companies. Roland has an MBA from the University of Chicago.',
  },
  {
    id: '3',
    img: Felton,
    title: 'FELTON LOUIS',
    subtitle: 'CTO',
    description:
      'Enterprise applications, consulting and large-scale development experience with Oracle, KPMG and start-ups. Felton has a BS in Management Information Systems from The University of New Orleans.',
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
    id: '4',
    img: Vignesh,
    alt: 'Vignesh Mani',
    title: 'Vignesh Mani',
    subtitle: 'COO',
    description: '',
  },
  {
    id: '5',
    img: Nita,
    alt: 'nitaimage',
    title: 'NITA OWENS​',
    subtitle: 'Operations Manager',
    description:
      'Over 20 years of extensive Program Management experience in the areas of Data, Application and Network Security. Nita has worked extensively with CISOs, executive management, architects and engineering teams to assess, determine solutions, best practices, and identify and onboard 3rd party implementation partners.',
  },
];

const logos = [
  Picture7,
  Picture8,
  Picture9,
  Picture10,
  Picture11,
  Picture12,
  Picture13,
  Picture14,
  Picture15,
  Picture16,
  Picture17,
  Picture18,
  Picture19,
  Picture20,
  Picture21,
  Picture22,
];

const About = () => {
  return (
    <>
      <Typography className="primeid_text">
        The PrimeID Team
        {/* <br /> */}
        {/* <span className="ourteam_text">
          Meet Our Team
        </span> */}
        <Typography className="sub_subitle">
          <div
            style={{
              // maxWidth: '30px !important',
              padding: '0 15%',
              color: 'black',
              marginTop: '10px'
            }}
          >
            We have extensive experience with Enterprise Resource
            Planning (ERP) technology, IT Security Policies and Security Audits,
            which are crucial for ensuring PrimeID’s success. Our founding team
            has occupational, consulting, and educational experience with the
            organizations represented below.
          </div>
        </Typography>
      </Typography>

      <Row
        gutter={[40, 0]}
        className="mx-5 my-5"
        style={{
          justifyContent: 'center',
          gap: '40px',
        }}
      >
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
          // <Col xs={24} sm={12} md={12} lg={4} >
          <Card
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CardMedia
              className="about_img"
              component="img"
              image={card.img}
              alt={card.alt}
            />
            <CardContent
              style={{
                textAlign: 'center',
              }}
            >
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
              {/* <Typography
                    // variant="body2"
                    className="about_card_desc"
                  >
                    {card.description}
                  </Typography> */}
            </CardContent>
            {/* <CardActionArea>
              </CardActionArea> */}
          </Card>
          // </Col>
        ))}
      </Row>

      <Row style={{ margin: '0 48px', marginBottom: '48px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            width: '100%',
            flexWrap: 'wrap',
            padding: "0 10%"
          }}
        >
          {logos.map((logo) => (
            <img src={logo} alt="logo" />
          ))}
        </div>
      </Row>

      <Row className="mx-5">
        <Col>
          {' '}
          <img src={primelogo} alt="primelogo" width="25%" />
        </Col>
      </Row>
      {/* <Box className="text-center">
     <img src={primelogo} alt="primelogo" width="20%"/>
     </Box> */}
    </>
  );
};

export default About;
