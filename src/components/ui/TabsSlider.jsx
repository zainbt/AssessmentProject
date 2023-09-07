import React, { useCallback, useState } from "react";
import { Typography, IconButton, Box, Tabs } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StyledTab } from "../StyledComponents";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { filteredProperties } from "../../store/filteredProperties";

const TabsSlider = () => {
  const [property, setProperty] = useState([]);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const { properties } = useSelector((state) => state.properties);

  React.useEffect(() => {
    let newPropertyList = [];
    properties?.forEach((property) => {
      if (newPropertyList.indexOf(property.property_type) === -1) {
        newPropertyList.push(property.property_type);
      }
    });
    setProperty(newPropertyList);
  }, [properties]);

  const handleTabClick = useCallback(
    (e) => {
      if (e) {
        const filteredProp = [
          ...properties?.filter((property) => property?.property_type === e),
        ];
        // Dispatch action to update filteredProperties state in Redux
        dispatch(filteredProperties([...filteredProp]));
      }
    },
    [properties, dispatch]
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480, lg: 1200 },
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="black">
        Feed
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Tabs
          key={property._id}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable auto tabs example"
          sx={{ alignItems: "center", color: "black" }}
        >
          {property?.map((property) => (
            <StyledTab
              label={property}
              onClick={() => {
                handleTabClick(property);
              }}
              key={property._id}
              style={{
                textTransform: "capitalize",
                marginInline: "4px",
              }}
            />
          ))}
        </Tabs>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TabsSlider;
