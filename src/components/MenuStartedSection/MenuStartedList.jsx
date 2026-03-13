import React from 'react';
import data from '../../data/data.json'
import MenuStartedItem from "./MenuStartedItem.jsx";

const MenuStartedList = () => {
    return (
        <div className={"flex flex-col gap-4"}>
            {data.quizzes.map((quiz, index) =>
                <MenuStartedItem key={index} item={quiz} />)
            }
        </div>
    );
};

export default MenuStartedList;