import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import React from "react";
import data from "../data/data.json";
import {useLocation} from "react-router-dom";
import ScoreSection from "../components/ScoreSection/ScoreSection.jsx";
import QuestionsHeader from "../layouts/questions-header.layout.jsx";

const ScorePage = () => {
    const location = useLocation()
    const {title, score, total} = location.state || {}
    const quiz = data.quizzes.find(q => q.title.toLowerCase() === title.toLowerCase())
    return (
        <>
            <QuestionsHeader quiz={quiz} title={title}/>
            <ScoreSection quiz={quiz} score={score} total={total}/>
        </>
    );
};

export default ScorePage;