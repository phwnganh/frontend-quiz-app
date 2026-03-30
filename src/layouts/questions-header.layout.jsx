import React from "react";
import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";

const QuestionsHeader = ({quiz, title}) => {
    return (
        <div className={"px-6 pb-4 flex justify-between items-center"}>
            <div className={"flex items-center gap-4 sm:gap-6"}>
                <div className={`flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl ${quiz.bgColor}`}>
                    <img src={quiz.icon} alt={quiz.title}/>
                </div>
                <h1 className={"text-preset-4-mobile sm:text-preset-4 leading-preset-4 font-preset-4 text-blue-900 dark:text-white"}>{title}</h1>
            </div>
            <CustomSwitchTheme/>
        </div>
    );
};

export default QuestionsHeader;