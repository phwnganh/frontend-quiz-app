import React from 'react';

const QuestionsTitle = ({quiz, question, currentQuestionIndex}) => {
    const currentQuestionNumber = currentQuestionIndex;
    const totalQuestions = quiz.questions.length;

    const progressPercent = (currentQuestionNumber / totalQuestions) * 100;
    return (
        <div className={"flex flex-col gap-4 sm:gap-10 md:gap-46"}>
            <div className={"flex flex-col gap-6"}>
                <p className={"text-grey-500 italic text-preset-5-mobile sm:text-preset-6 leading-preset-5 sm:leading-preset-6"}>Question {currentQuestionNumber} of {totalQuestions}</p>
                <h2 className={"text-preset-3-mobile sm:text-preset-3 text-blue-900 leading-preset-3 font-preset-3"}>{question.question}</h2>
            </div>

            <div className={"rounded-[999px] bg-white p-1 min-w-116.25 h-4"}>
                <div className={"h-2 bg-purple-600 rounded-[104px]"} style={{width: `${progressPercent}%`}}></div>
            </div>
        </div>
    );
};

export default QuestionsTitle;