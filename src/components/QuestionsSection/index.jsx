import QuestionsTitle from "./QuestionsTitle.jsx";
import QuestionOptions from "./QuestionOptions.jsx";
import NoSelectedOption from "./NoSelectedOption.jsx";
import CustomButton from "../uis/CustomButton.jsx";
const QuestionSection = ({quiz, question, onSelectOption, currentQuestionIndex, onSubmit, selectedOption, onNextQuestion, isSubmitted}) => {
    const letterOptions = ['A', 'B', 'C', 'D']
    return (
        <main className={"mt-8 sm:mt-12 md:mt-21.25 flex flex-col md:flex-row gap-10 md:gap-32"}>
            <QuestionsTitle quiz={quiz} question={question} currentQuestionIndex={currentQuestionIndex}/>
            <div className={"flex flex-col gap-8 max-w-141 w-full"}>
                <div className={"flex flex-col gap-6 md:gap-4"}>
                    {question.options.map((option, index) =>
                        <QuestionOptions key={index} option={option} letter={letterOptions[index]} onSelectOption={() => onSelectOption(option)} selectedOption={selectedOption} isSubmitted={isSubmitted} correctAnswer={question.answer}/>)}
                </div>
                <CustomButton type={"submit"} disabled={!selectedOption} onClick={isSubmitted ? onNextQuestion : onSubmit} className={"disabled:opacity-50 disabled:cursor-not-allowed"} content={isSubmitted ? 'Next Question' : 'Submit Answer'}/>
                {selectedOption === null && <NoSelectedOption/>}

            </div>


        </main>
    );
};

export default QuestionSection;