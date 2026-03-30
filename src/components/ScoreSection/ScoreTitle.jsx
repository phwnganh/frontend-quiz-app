
const ScoreTitle = () => {
    return (
        <div className={"flex flex-col gap-2"}>
            <p className={"text-preset-2-mobile-light sm:text-preset-2-light leading-preset-2 font-preset-2-light text-blue-900 dark:text-white"}>Quiz completed</p>
            <span className={"text-preset-2-mobile-medium sm:text-preset-2-mediun leading-preset-2 font-preset-2-medium text-blue-900 dark:text-white"}>You scored...</span>
        </div>
    );
};

export default ScoreTitle;