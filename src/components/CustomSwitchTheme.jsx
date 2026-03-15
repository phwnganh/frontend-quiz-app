import SunDarkIcon from '../assets/icon-sun-dark.svg'
import MoonDarkIcon from '../assets/icon-moon-dark.svg'
import SunLightIcon from '../assets/icon-sun-light.svg'
import MoonLightIcon from '../assets/icon-moon-light.svg'
import CustomSwitch from "./uis/CustomSwitch.jsx";
const CustomSwitchTheme = () => {
    return (
        <section className={"flex justify-end items-center gap-2 sm:gap-4"}>
            <div className={"flex justify-center items-center w-4 h-4 sm:w-6 sm:h-6 shrink-0"}>
                <img className={"dark:hidden"} src={SunDarkIcon} alt={"Sun dark"} />
                <img className={"hidden dark:block"} src={SunLightIcon} alt={"Sun light"} />
            </div>
            <CustomSwitch/>
            <div className={"flex justify-center items-center w-4 h-4 sm:w-6 sm:h-6 shrink-0"}>
                <img className={"dark:hidden"} src={MoonDarkIcon} alt={"Moon dark"} />
                <img className={"hidden dark:block"} src={MoonLightIcon} alt={"Moon light"} />
            </div>
        </section>
    );
};

export default CustomSwitchTheme;