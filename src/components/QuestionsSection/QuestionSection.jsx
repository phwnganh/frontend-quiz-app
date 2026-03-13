import QuestionsTitle from "./QuestionsTitle.jsx";
import QuestionOptions from "./QuestionOptions.jsx";

const QuestionSection = ({quiz, question, onSelectOption, currentQuestionIndex}) => {
    const letterOptions = ['A', 'B', 'C', 'D']

    return (
        <main className={"mt-21.25 flex gap-32"}>
            <QuestionsTitle quiz={quiz} question={question} currentQuestionIndex={currentQuestionIndex}/>
            <div className={"flex flex-col gap-8"}>
                <div className={"flex flex-col gap-4"}>
                    {question.options.map((option, index) =>
                        <QuestionOptions key={index} option={option} letter={letterOptions[index]} onSelectOption={() => onSelectOption(option)}/>)}
                </div>
                <button type={"submit"} className={"p-8 rounded-3xl bg-purple-600 text-white text-preset-4 font-preset-4 leading-preset-4 disabled:opacity-50 disabled:cursor-not-allowed"}>Submit Answer</button>
            </div>


        </main>
    );
};

export default QuestionSection;