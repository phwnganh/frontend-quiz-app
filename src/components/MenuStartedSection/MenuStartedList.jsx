import React from 'react';
import data from '../../data/data.json'
import MenuStartedItem from "./MenuStartedItem.jsx";

const MenuStartedList = () => {
    return (
        <div role={"list"} className={"pt-8 sm:pt-0 sm:px-0 flex flex-col gap-4 sm:gap-6 md:gap-4 max-w-141 w-full"}>
            {data.quizzes.map((quiz, index) =>
                <MenuStartedItem key={index} item={quiz} />)
            }
        </div>
    );
};

export default MenuStartedList;