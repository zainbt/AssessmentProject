import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { useSelector } from "react-redux";

const CustomCard = () => {
  const { properties } = useSelector((state) => state.properties);

  return (
    <Box mt={2}>
      {properties.data || !properties.isLoading ? (
        <Grid container spacing={3}>
          {properties.map((property) => (
            <Grid item key={property._id} xs={12} sm={6} md={4}>
              <Card
                key={property._id}
                sx={{ boxShadow: 3, borderRadius: "5px" }}
              >
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
                    <Box display="inline-flex" alignItems="center"  >
                      <IconButton color="secondary" variant="contained">
                        <ThumbUp />
                      </IconButton>
                      <Typography variant="body1">
                        {property.upvotes || 0}
                      </Typography>
                      <IconButton color="primary" variant="contained">
                        <ThumbDown />
                      </IconButton>
                      <Typography variant="body1">
                        {property.downvotes || 0}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {`${property.beds || "-"} Bed ${
                      property.baths || "-"
                    } Bath ${property.square_feet || "-"} Sq.Ft.`}
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
            </Grid>
          ))}
        </Grid>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default CustomCard;
