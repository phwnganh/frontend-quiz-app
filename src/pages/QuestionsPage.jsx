import React, {useState} from 'react';
import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import {useNavigate, useParams} from 'react-router-dom'
import data from '../data/data.json'
import QuestionSection from "../components/QuestionsSection/index.jsx";
const QuestionsPage = () => {
    const {title} = useParams()
    const quiz = data.quizzes.find(q => q.title.toLowerCase() === title.toLowerCase())
    console.log("quiz", quiz)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const currentQuestion = quiz.questions[currentQuestionIndex]
    const [score, setScore] = useState(0)
    const navigate = useNavigate()
    const handleSelectOption = (option) => {
        setSelectedOption(option)
    }

    const handleSubmitAnswer = () => {
        setIsSubmitted(true)
        if(selectedOption === currentQuestion.answer){
            setScore(prev => prev + 1)
        }
    }

    const handleNextQuestion = () => {
        if(currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1)
            setSelectedOption(null)
            setIsSubmitted(false)
        }else{
            navigate("/score", {state: {
                title: title,
                    score: score,
                    total: quiz.questions.length
                }})
        }
    }
    if (!quiz) return;
    return (
        <>
            <div className={"flex justify-between items-center"}>
                <div className={"flex items-center gap-6"}>
                    <div className={`flex justify-center items-center w-14 h-14 shrink-0 rounded-xl ${quiz.bgColor}`}>
                        <img src={quiz.icon} alt={quiz.title}/>
                    </div>
                    <h3 className={"text-preset-4 leading-preset-4 font-preset-4 text-blue-900"}>{title}</h3>
                </div>
                <CustomSwitchTheme/>
            </div>
                <QuestionSection currentQuestionIndex={currentQuestionIndex} quiz={quiz} question={currentQuestion} onSelectOption={handleSelectOption} onSubmit={handleSubmitAnswer} selectedOption={selectedOption}
                isSubmitted={isSubmitted} onNextQuestion={handleNextQuestion}/>
        </>
    );
};

export default QuestionsPage;