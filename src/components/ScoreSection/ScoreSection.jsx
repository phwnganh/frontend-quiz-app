import ScoreTitle from "./ScoreTitle.jsx";
import ScoreContent from "./ScoreContent.jsx";

const ScoreSection = ({quiz, score, total}) => {
    return (
        <main className={"mt-8 sm:mt-12 md:mt-21.25 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-36"}>
            <ScoreTitle/>
            <ScoreContent quiz={quiz} score={score} total={total}/>
        </main>
    );
};

export default ScoreSection;