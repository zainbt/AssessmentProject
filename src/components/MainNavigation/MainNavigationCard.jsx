import React from "react";
import { Card, CardMedia, Typography, Box } from "@mui/material";
import { MainNavigationBar } from "./MainNavigationBar";
import { NavigationCardWrapper } from "../StyledComponents";
import { SearchTabs } from "./SearchTabs/SearchTabs";

export const MainNavigationCard = () => {
    return (
        <NavigationCardWrapper>
            <MainNavigationBar />
            <SearchTabs />
        </NavigationCardWrapper>);
};
