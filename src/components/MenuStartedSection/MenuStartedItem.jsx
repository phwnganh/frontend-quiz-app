import React from 'react';
import {useNavigate} from 'react-router-dom';
const MenuStartedItem = ({item}) => {
    const navigate = useNavigate();
    return (
        <div role={"button"} onClick={() => navigate(`${item.title}`)} className={"bg-white rounded-3xl shadow-sm p-4 md:p-6 flex items-center gap-4 sm:gap-8 min-w-141 cursor-pointer"}>
            <div className={`flex justify-center items-center w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-xl ${item.bgColor}`}>
                <img src={item.icon} alt={item.title} />
            </div>
            <h4 className={"text-preset-4-mobile sm:text-preset-4 leading-preset-4 font-preset-4 text-blue-900"}>{item.title}</h4>
        </div>
    );
};

export default MenuStartedItem;