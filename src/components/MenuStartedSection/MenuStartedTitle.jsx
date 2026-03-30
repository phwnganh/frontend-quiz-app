import React from 'react';

const MenuStartedTitle = () => {
    return (
        <div className={"flex flex-col gap-4 md:gap-12"}>
            <div className={"flex flex-col gap-2"}>
                <h1 className={"text-preset-2-mobile-light sm:text-preset-2-light leading-preset-2 font-preset-2-light text-blue-900 dark:text-white"}>Welcome to the</h1>
                <span className={"text-preset-2-mobile-medium sm:text-preset-2-mediun leading-preset-2 font-preset-2-medium text-blue-900 dark:text-white"}>Frontend Quiz!</span>
            </div>
            <span className={"italic text-grey-500 dark:text-blue-300 text-preset-5-medium sm:text-preset-6 leading-preset-5 sm:leading-preset-6"}>Pick a subject to get started.</span>
        </div>
    );
};

export default MenuStartedTitle;