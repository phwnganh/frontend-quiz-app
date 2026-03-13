import MenuStartedTitle from "./MenuStartedTitle.jsx";
import MenuStartedList from "./MenuStartedList.jsx";
const MenuStartedSection = () => {
    return (
        <main className={"mt-24.75 flex gap-32"}>
            <MenuStartedTitle/>
            <MenuStartedList/>
        </main>
    );
};

export default MenuStartedSection;