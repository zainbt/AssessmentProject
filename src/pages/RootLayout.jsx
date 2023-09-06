import React from "react";

import { Outlet } from "react-router-dom";
import { MainNavigationCard } from "../components/MainNavigation/MainNavigationCard";


export const RootLayout = () => {
    return (
        <>
            <MainNavigationCard />
            <main>
                <Outlet />
            </main>
        </>
    );
}