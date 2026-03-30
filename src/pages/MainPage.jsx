import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import MenuStartedSection from "../components/MenuStartedSection/index.jsx";

const MainPage = () => {
    return (
        <>
            <header className={"px-6 pb-4"}>
                <CustomSwitchTheme/>
            </header>
            <MenuStartedSection/>
        </>
    );
};

export default MainPage;