import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
} from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { useSelector } from "react-redux";

const CustomCard = ({ address, price, imageUrl, bath, bed, area, count }) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const { properties } = useSelector((state) => state.properties);
  console.log("🚀 ~ file: Card.jsx:15 ~ CustomCard ~ properties:", properties);

  return (
    <Box m="1.5rem 2.5rem">
      {properties.data || !properties.isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="30px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {properties.map((property) => (
            <Card sx={{ maxWidth: 400, boxShadow: 3, borderRadius: "8px" }}>
              <CardMedia
                component="img"
                height="250"
                image={property.image_url}
                alt={"Image"}
              />
              <CardContent>
                <Box
                  width="100%"
                  display="inline-flex"
                  justifyContent="space-between"
                >
                  <Typography variant="h5" gutterBottom>
                    ${property.price}
                  </Typography>
                  <Box display="inline-flex" alignItems="center" gap={1}>
                    <IconButton color="primary" variant="contained">
                      <ThumbUp />
                    </IconButton>
                    <Typography variant="body1">
                      {property.upvotes || 0}
                    </Typography>
                    <IconButton color="error" variant="contained">
                      <ThumbDown />
                    </IconButton>
                    <Typography variant="body1">
                      {property.downvotes || 0}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" textAlign="left" gutterBottom>
                  {`${property.beds || "-"} Bed ${property.baths || "-"} Bath ${
                    property.square_feet || "-"
                  } Sq.Ft.`}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="left"
                  color="text.secondary"
                >
                  {property.address}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default CustomCard;
