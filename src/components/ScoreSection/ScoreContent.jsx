import ScoreResult from "./ScoreResult.jsx";
import {useNavigate} from "react-router-dom";
import CustomButton from "../uis/CustomButton.jsx";

const ScoreContent = ({quiz, score, total}) => {
    const navigate = useNavigate()
    return (
        <div className={"flex flex-col gap-4 sm:gap-8 max-w-141 w-full"}>
            <ScoreResult quiz={quiz} score={score} total={total}/>
            <CustomButton type={"reset"} onClick={() => navigate("/")} content={"Play Again"} />
        </div>
    );
};

export default ScoreContent;