import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import Rolend from "../../../assets/rolendbro.png";
import Felton from "../../../assets/feltonbro.png";
import Vishal from "../../../assets/vishalvr.png";
import Nita from "../../../assets/nita.png";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Carousel = () => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]
  };
  const teamCard = [{
    id: "1",
    img: Rolend,
    title: "ROLAND OWENS​",
    subtitle: "CEO",
    description: "Consultant to Global 2000 firms for enterprise and SaaS applications and advisory experience with major consulting  firms and business software companies. Roland has an MBA from the University of Chicago.",
  }, {
    id: "2",
    img: Felton,
    title: "FELTON LOUIS",
    subtitle: "CTO",
    description: "Enterprise applications, consulting and large-scale development experience with Oracle, KPMG and start-ups. Felton has a BS in Management Information Systems from The University of New Orleans.",
  }, {
    id: "4",
    img: Vishal,
    title: "VISHAL VERMA​",
    subtitle: "CHAIRMAN",
    description: "Serial Entrepreneur, Sr. Advisor to Chertoff Group, Gephardt, Westly Group, Darwin Ventures. Vishal has an MBA from the University of Chicago.",
  }, {
    id: "5",
    img: Nita,
    title: "NITA OWENS​",
    subtitle: "COO",
    description: "Over 20 years of extensive Program Management experience in the areas of Data, Application and Network Security. Nita has worked extensively with CISOs, executive management, architects and engineering teams to assess, determine solutions, best practices, and identify and onboard 3rd party implementation partners.",
  }]

  return (
    <>
      <div className="content">
        <Box style={{ textAlign: "right" }}>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            style={{
              padding: "1rem",
              fontSize: "20px",
              lineHeight: "1rem",
              color: "#747474",
              border: "none",
              boxShadow: "0px 5px 15px #00000017",
              background: "#fff",
              margin: "1rem",
            }}>
            <LeftOutlined />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            style={{
              padding: "1rem",
              fontSize: "20px",
              lineHeight: "1rem",
              color: "#747474",
              border: "none",
              boxShadow: "0px 5px 15px #00000017",
              background: "#fff",
            }}>
            <RightOutlined />
          </button>
        </Box>
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          className="carousel_slider">
          {teamCard.map((card, index) => (
            <Card className="carousel_card" key={index}>
              <CardActionArea>
                <CardMedia
                  className="card_media_img"
                  component="img"
                  image={card.img}
                  alt="Rolend"
                />
                <CardContent className="content_align">
                  <Typography
                    gutterBottom
                    component="div"
                    className="carousel_card_title">
                    {card.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    className="carousel_card_subtitle">
                    {card.subtitle}
                  </Typography>
                  <Typography
                    className="carousel_card_desc">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Carousel;