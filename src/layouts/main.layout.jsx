import React from 'react';
import {Outlet} from "react-router-dom";
const MainLayout = () => {
    return (
        <div className={"bg-[url(./assets/pattern-background-desktop-light.svg)] bg-grey-50"}>
            <div className={"pt-24.25 max-w-290 mx-auto"}>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;