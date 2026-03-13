import SunDarkIcon from '../assets/icon-sun-dark.svg'
import MoonDarkIcon from '../assets/icon-moon-dark.svg'
import CustomSwitch from "./uis/CustomSwitch.jsx";
const CustomSwitchTheme = () => {
    return (
        <section className={"flex justify-end items-center gap-4"}>
            <div className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                <img src={SunDarkIcon} alt={"Sun dark"} />
            </div>
            <CustomSwitch/>
            <div className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                <img src={MoonDarkIcon} alt={"Moon dark"} />
            </div>
        </section>
    );
};

export default CustomSwitchTheme;