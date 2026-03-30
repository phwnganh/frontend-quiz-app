import React from 'react';
import {useNavigate} from 'react-router-dom';
const MenuStartedItem = ({item}) => {
    const navigate = useNavigate();
    return (
        <button type={"button"} onClick={() => navigate(`${item.title}`)} className={"bg-white dark:bg-blue-850 rounded-3xl shadow-sm p-4 md:p-6 flex items-center gap-4 sm:gap-8 cursor-pointer"}>
            <div aria-hidden={"true"} className={`flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl ${item.bgColor}`}>
                <img aria-hidden={"true"} src={item.icon} alt={item.title} />
            </div>
            <p className={"text-preset-4-mobile sm:text-preset-4 leading-preset-4 font-preset-4 text-blue-900 dark:text-white"}>{item.title}</p>
        </button>
    );
};

export default MenuStartedItem;