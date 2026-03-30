import {useEffect, useState} from "react";
import {getSavedTheme, setTheme} from "../../utils/theme.js";

const CustomSwitch = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const saved = getSavedTheme()
        setIsDark(saved)
        setTheme(saved)
    }, []);

    const handleToggleTheme = () => {
        const newTheme = !isDark
        setIsDark(newTheme)
        setTheme(newTheme)
    }


    return (
        <label htmlFor={"toggle-theme"} className={"h-5 sm:h-7 w-8 sm:w-12 relative inline-block"}>
            <input id={"switch-mode"} aria-label={"enable theme switch"} type={"checkbox"} checked={isDark} onChange={handleToggleTheme} className={"sr-only peer "}/>
            <div className={"w-full h-full rounded-full bg-purple-600 peer-checked:bg-purple transition-colors"}></div>
            <div className={"absolute top-0.75 left-0.75 h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-white peer-checked:translate-x-full"}></div>
        </label>
    );
};

export default CustomSwitch;