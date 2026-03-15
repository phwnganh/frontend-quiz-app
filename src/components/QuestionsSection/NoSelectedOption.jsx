import React from 'react';
import ErrorIcon from '../../assets/icon-error.svg'

const NoSelectedOption = () => {
    return (
        <div className={"flex items-center gap-2 justify-center"}>
            <div className={"flex items-center justify-center w-10 h-10 shrink-0"}>
                <img src={ErrorIcon} alt={"error-icon"}/>
            </div>
            <p className={"text-red-500 dark:text-grey-50 text-preset-5 leading-preset-5"}>Please select an answer</p>
        </div>
    );
};

export default NoSelectedOption;