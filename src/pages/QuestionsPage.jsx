import React, {useState} from 'react';
import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import {useNavigate, useParams} from 'react-router-dom'
import data from '../data/data.json'
import QuestionSection from "../components/QuestionsSection/index.jsx";
import QuestionsHeader from "../layouts/questions-header.layout.jsx";
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
            <QuestionsHeader quiz={quiz} title={title}/>
                <QuestionSection currentQuestionIndex={currentQuestionIndex} quiz={quiz} question={currentQuestion} onSelectOption={handleSelectOption} onSubmit={handleSubmitAnswer} selectedOption={selectedOption}
                isSubmitted={isSubmitted} onNextQuestion={handleNextQuestion}/>
        </>
    );
};

export default QuestionsPage;