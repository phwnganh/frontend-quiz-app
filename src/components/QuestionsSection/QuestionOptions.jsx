import React from 'react';
import correctIcon from '../../assets/icon-correct.svg'
import wrongIcon from '../../assets/icon-incorrect.svg'
const QuestionOptions = ({option, onSelectOption, letter, selectedOption, isSubmitted, correctAnswer}) => {
    const isSelectedOption = selectedOption === option
    const isCorrectAnswer = option === correctAnswer
    const isWrongAnswer = isSubmitted && isSelectedOption && !isCorrectAnswer
    let outlineAnswer = ""
    if(!isSubmitted && isSelectedOption){
        outlineAnswer = "outline-3 outline-purple-600"
    }else if(isSubmitted && isCorrectAnswer){
        outlineAnswer = "outline-3 outline-green-500"
    }else if(isSubmitted && isWrongAnswer){
        outlineAnswer = "outline-3 outline-red-500"
    }

    const isCorrectIcon = isSubmitted && isCorrectAnswer
    const isWrongIcon = isSubmitted && isWrongAnswer
    return (
        <div role={"button"} onClick={!isSubmitted ? onSelectOption : undefined} className={`bg-white rounded-3xl shadow-sm p-4 md:p-6 flex items-center justify-between gap-8 cursor-pointer hover:outline-3 hover:outline-purple-600 ${outlineAnswer}`}>
            <div className={"flex items-center gap-8"}>
                <div className={`flex justify-center items-center w-14 h-14 shrink-0 rounded-xl bg-grey-50`}>
                    <h1 className={"text-grey-500 text-preset-4 leading-preset-4 font-preset-4"}>{letter}</h1>
                </div>
                <h4 className={"text-preset-4 leading-preset-4 font-preset-4 text-blue-900"}>{option}</h4>
            </div>
            {isCorrectIcon && <img src={correctIcon} alt="Correct-Answer" />}
            {isWrongIcon && <img src={wrongIcon} alt="Wrong Answer" />}
        </div>
    );
};

export default QuestionOptions;