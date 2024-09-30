import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCaroselData } from "./MainCaroselData";
import "./MainCarosel.css";
import { Box } from "@mui/material";

const MainCarosel = () => {
  const items = mainCaroselData.map((item, index) => (
    <img
      key={index}
      className="carousel-img" // Apply the CSS class
      role="presentation"
      src={item.image}
      alt={`Carousel item ${index + 1}`}
    />
  ));

  return (
    <Box className="carousel-container "> {/* Apply the CSS class */}
      <AliceCarousel
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        items={items}
        infinite
      />
    </Box>
  );
};

export default MainCarosel;
