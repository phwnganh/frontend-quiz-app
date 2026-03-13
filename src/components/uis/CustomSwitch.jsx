
const CustomSwitch = () => {
    return (
        <label className={"h-7 w-12 relative inline-block"}>
            <input type={"checkbox"} className={"sr-only peer "}/>
            <div className={"w-full h-full rounded-full bg-purple-600 peer-checked:bg-purple transition-colors"}></div>
            <div className={"absolute top-0.75 left-0.75 h-5 w-5 rounded-full bg-white peer-checked:translate-x-full"}></div>
        </label>
    );
};

export default CustomSwitch;