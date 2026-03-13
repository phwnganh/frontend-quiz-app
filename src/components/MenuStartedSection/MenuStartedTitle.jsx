import React from 'react';

const MenuStartedTitle = () => {
    return (
        <div className={"flex flex-col gap-12"}>
            <div className={"flex flex-col gap-2"}>
                <h1 className={"text-preset-2-light leading-preset-2 font-preset-2-light text-blue-900"}>Welcome to the</h1>
                <span className={"text-preset-2-mediun leading-preset-2 font-preset-2-medium text-blue-900"}>Frontend Quiz!</span>
            </div>
            <h2 className={"italic text-grey-500 text-preset-6 leading-preset-6"}>Pick a subject to get started.</h2>
        </div>
    );
};

export default MenuStartedTitle;