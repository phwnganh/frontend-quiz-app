import ScoreResult from "./ScoreResult.jsx";
import {useNavigate} from "react-router-dom";

const ScoreContent = ({quiz, score, total}) => {
    const navigate = useNavigate()
    return (
        <div className={"flex flex-col gap-8"}>
            <ScoreResult quiz={quiz} score={score} total={total}/>
            <button type={"reset"} onClick={() => navigate("/")} className={"flex justify-center items-center text-white text-preset-4 font-preset-4 leading-preset-4 bg-purple-600 p-8 rounded-3xl"}>Play Again</button>
        </div>
    );
};

export default ScoreContent;