import React from 'react';

const CustomButton = ({className, type, onClick, content, ...props}) => {
    return (
        <button {...props} type={type} onClick={onClick} className={`flex justify-center items-center text-white text-preset-4-mobile sm:text-preset-4 font-preset-4 leading-preset-4 bg-purple-600 p-4 sm:p-8 rounded-xl sm:rounded-3xl ${className}`}>{content}</button>

    );
};

export default CustomButton;