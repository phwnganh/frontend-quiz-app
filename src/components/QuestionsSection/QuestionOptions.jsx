import React from 'react';

const QuestionOptions = ({option, onSelectOption, letter}) => {
    return (
        <div role={"button"} onClick={onSelectOption} className={"bg-white rounded-3xl shadow-sm p-6 flex items-center gap-8 min-w-141 cursor-pointer hover:outline-3 hover:outline-purple-600"}>
            <div className={`flex justify-center items-center w-14 h-14 shrink-0 rounded-xl bg-grey-50`}>
                <h1 className={"text-grey-500 text-preset-4 leading-preset-4 font-preset-4"}>{letter}</h1>
            </div>
            <h4 className={"text-preset-4 leading-preset-4 font-preset-4 text-blue-900"}>{option}</h4>
        </div>
    );
};

export default QuestionOptions;