import React from 'react';
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
        <div className={"min-h-screen bg-[url(./assets/pattern-background-desktop-light.svg)] bg-grey-50 bg-no-repeat bg-top"}>
            <div className={"pt-4 sm:pt-24.25 max-w-290 mx-auto"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;