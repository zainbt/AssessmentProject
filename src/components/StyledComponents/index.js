import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Button,
  TextField,
  IconButton,
  Dialog,
  Chip,
} from "@mui/material";
import styled from "@emotion/styled";
import mainImage from "../../assets/images/mainNavigationImage.jpg";
import { emphasize } from "@mui/material/styles";

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
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  height: "100%",
  width: '193px'
}));

export const AuthWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row',
  maxWidth: '100%',
  gap: '0.6rem',
}));

export const SearchBarSellWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: "50%",
  gap: "0.8rem",
  alignItems: "center",
  paddingTop: "10px",
}));

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialog-paper': {
    borderRadius: 0,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  maxWidth: '400px',
  margin: 'auto',
}));

export const ButtonDefaultWrapper = styled(Button)(({ theme }) => ({
  backgroundColor: "#c82021",
  color: "white",
  borderRadius: "0px",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  height: "100%",
  pt: "0.5rem",
}));

export const ButtonOauthWrapper = styled(Button)(({ theme }) => ({
  color: "black",
  display: "flex",
  gap: "0.5rem",
  borderRadius: "0px",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
  height: "100%",
  pt: "0.5rem",
}));


export const StyledTab = styled(Chip)(({ theme }) => ({
  // const backgroundColor = theme.palette.secondary.main;

  height: "30px",
  borderRadius: "15px",

  // color: theme.palette.text.primary,
  // fontWeight: theme.typography.fontWeightRegular,
  // "&:hover, &:focus": {
  //   backgroundColor: emphasize(backgroundColor, 0.06),
  // },
  // "&:active": {
  //   boxShadow: theme.shadows[1],
  //   backgroundColor: emphasize(backgroundColor, 0.12),
  // },
}));
