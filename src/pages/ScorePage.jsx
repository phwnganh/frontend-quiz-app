import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import React from "react";
import data from "../data/data.json";
import {useLocation} from "react-router-dom";
import ScoreSection from "../components/ScoreSection/ScoreSection.jsx";

const ScorePage = () => {
    const location = useLocation()
    const {title, score, total} = location.state || {}
    const quiz = data.quizzes.find(q => q.title.toLowerCase() === title.toLowerCase())
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
            <ScoreSection quiz={quiz} score={score} total={total}/>
        </>
    );
};

export default ScorePage;