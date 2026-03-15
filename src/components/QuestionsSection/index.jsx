import QuestionsTitle from "./QuestionsTitle.jsx";
import QuestionOptions from "./QuestionOptions.jsx";
import NoSelectedOption from "./NoSelectedOption.jsx";
const QuestionSection = ({quiz, question, onSelectOption, currentQuestionIndex, onSubmit, selectedOption, onNextQuestion, isSubmitted}) => {
    const letterOptions = ['A', 'B', 'C', 'D']
    return (
        <main className={"mt-21.25 flex gap-32"}>
            <QuestionsTitle quiz={quiz} question={question} currentQuestionIndex={currentQuestionIndex}/>
            <div className={"flex flex-col gap-8"}>
                <div className={"flex flex-col gap-4"}>
                    {question.options.map((option, index) =>
                        <QuestionOptions key={index} option={option} letter={letterOptions[index]} onSelectOption={() => onSelectOption(option)} selectedOption={selectedOption} isSubmitted={isSubmitted} correctAnswer={question.answer}/>)}
                </div>
                <button type={"submit"} onClick={isSubmitted ? onNextQuestion : onSubmit} disabled={!selectedOption} className={"p-8 rounded-3xl bg-purple-600 text-white text-preset-4 font-preset-4 leading-preset-4 disabled:opacity-50 disabled:cursor-not-allowed"}>{isSubmitted ? 'Next Question' : 'Submit Answer'}</button>
                {selectedOption === null && <NoSelectedOption/>}

            </div>


        </main>
    );
};

export default QuestionSection;