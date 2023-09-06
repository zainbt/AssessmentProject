import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
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

export const SearchBarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "45%",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingTop: "10px",
}));

export const SearchTextWrapper = styled(TextField)(({ theme }) => ({
  mt: 2,
  mb: 2,
  backgroundColor: "white",
}));

export const SearchButtonWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#c82021",
  borderRadius: "0px",
}));

export const BarButtonsWrapper = styled(Button)(({ theme }) => ({
  backgroundColor: "#c82021",
  color: "white",
  borderRadius: "0px",
  gap: '1rem',
  textTransform: "none"
}));

export const AuthWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row',
  maxWidth: '100%',
  gap: '0.6rem',
}));