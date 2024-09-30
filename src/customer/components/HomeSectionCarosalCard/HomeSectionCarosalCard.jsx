import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const HomeSectionCarosalCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 2 },
    720: { items: 4 },
    1024: { items: 6 },
  };

  // const slidePrev = () => {
  //   activeIndex===0?(
  //     setActiveIndex(items.length-1)):
  //   setActiveIndex(activeIndex - 2);
  //           };

  // const slideNext = () => {
  //   activeIndex===items.length-1?(
  //     setActiveIndex(0))
  //       : setActiveIndex(activeIndex + 2)

  // };
  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard />
  ));
  return (
    <div className="border">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />

        {activeIndex !== items.length - 6 && (
          <Button
            variant="contained"
            className="z-50"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: " rotate(90deg) ",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowBackIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: " rotate(90deg) ",
            bgcolor: "white",
          }}
          aria-label="Prev"
        >
          <ArrowBackIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosalCard;
