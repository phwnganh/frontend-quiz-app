import MenuStartedTitle from "./MenuStartedTitle.jsx";
import MenuStartedList from "./MenuStartedList.jsx";
const MenuStartedSection = () => {
    return (
        <main className={"px-6 sm:px-16 md:px-0 sm:mt-11.75 md:mt-24.75 flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-32"}>
            <MenuStartedTitle/>
            <MenuStartedList/>
        </main>
    );
};

export default MenuStartedSection;