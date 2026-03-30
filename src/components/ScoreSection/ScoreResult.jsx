import React from 'react';

const ScoreResult = ({quiz, score, total}) => {
    return (
        <div className={"flex flex-col gap-10 p-12 rounded-3xl bg-white dark:bg-blue-850 justify-center items-center"}>
            <div className={"flex items-center gap-4 sm:gap-6"}>
                <div className={`flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14 ${quiz.bgColor} shrink-0 rounded-xl`}>
                    <img src={quiz.icon} alt={quiz.title}/>
                </div>
                <p className={"text-preset-4-mobile sm:text-preset-4 leading-preset-4 font-preset-4 text-blue-900 dark:text-white"}>{quiz.title}</p>
            </div>

            <div className={"flex flex-col gap-4"}>
                <p className={"text-preset-1-mobile sm:text-preset-1 leading-preset-1 font-preset-1 text-blue-900 dark:text-white"}>{score}</p>
                <span className={"text-grey-500 dark:text-blue-300 text-preset-4-mobile sm:text-preset-5-medium leading-preset-4 sm:leading-preset-5"}>out of {total}</span>
            </div>
        </div>
    );
};

export default ScoreResult;