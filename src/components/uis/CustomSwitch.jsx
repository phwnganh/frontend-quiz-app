
const CustomSwitch = () => {
    return (
        <label className={"h-5 sm:h-7 w-8 sm:w-12 relative inline-block"}>
            <input type={"checkbox"} className={"sr-only peer "}/>
            <div className={"w-full h-full rounded-full bg-purple-600 peer-checked:bg-purple transition-colors"}></div>
            <div className={"absolute top-0.75 left-0.75 h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-white peer-checked:translate-x-full"}></div>
        </label>
    );
};

export default CustomSwitch;