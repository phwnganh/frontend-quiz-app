import React from 'react';
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
        <div className={"min-h-screen dark:bg-[url(./assets/pattern-background-mobile-dark.svg)] bg-[url(./assets/pattern-background-mobile-light.svg)] sm:dark:bg-[url(./assets/pattern-background-tablet-dark.svg)] sm:bg-[url(./assets/pattern-background-tablet-light.svg)] md:dark:bg-[url(./assets/pattern-background-desktop-dark.svg)] md:bg-[url(./assets/pattern-background-desktop-light.svg)] bg-grey-50 dark:bg-blue-900 bg-no-repeat bg-top"}>
            <div className={"pt-4 sm:pt-24.25 max-w-290 mx-auto"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;