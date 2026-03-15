import CustomSwitchTheme from "../components/CustomSwitchTheme.jsx";
import MenuStartedSection from "../components/MenuStartedSection/index.jsx";

const MainPage = () => {
    return (
        <>
            <div className={"px-6 pb-4"}>
                <CustomSwitchTheme/>
            </div>
            <MenuStartedSection/>
        </>
    );
};

export default MainPage;