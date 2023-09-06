import { Box, AppBar, Tabs, Tab, Button } from "@mui/material";
import styled from "@emotion/styled";
import mainImage from "../../assets/images/mainNavigationImage.jpg";

export const NavigationCardWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50vh",
  backgroundSize: "cover",
  backgroundPositionY: "center",
  backgroundImage: `url(${mainImage})`,
  marginTop: "0px",
}));

export const NavigationWrapper = styled(AppBar)(({ theme }) => ({
  background: "transparent",
  display: "flex",
  // justifyContent: "end",
  width: "100%",
  paddingInline: "20px",
}));

export const SearchTabsWrapper = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#ffffff",
  },
  "& .Mui-selected": {
    color: "#ffffff",
  },
  
});

export const SearchTabWrapper = styled(Tab)(({ theme }) => ({
  fontWeight: 700,
  color: "white",
  textDecoration: "none",
  textTransform: "none",
}));

export const AuthButtons = styled(Button)(({ theme }) => ({
  borderColor: "white",
  color: "white",
  borderRadius: "2px",
  textTransform: "none",
}));
