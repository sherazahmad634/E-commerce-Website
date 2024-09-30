import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import shirt from "../../../Images/shirt2.jpg";

const HomeSectionCard = () => {
  return (
    <Box width="200px" className="border">
      <Card sx={{boxShadow:3}}>
        <Box p={2}>
          <CardMedia
            component="img"
            image={shirt}
            alt="Shirt pic"
            style={{ height: "auto", maxHeight: "100px", objectFit: "contain" }}
          ></CardMedia>
        </Box>
          
        <CardContent>
          <Typography gutterBottom className="text-md font-bold">
            Classic Shirt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            New Arrival Summer Deals flat 50%
          </Typography>
        </CardContent>
        
      </Card>
    </Box>
  );
};

export default HomeSectionCard;
