import type { FC } from "react";
import type { ButtonProps } from "../../type/ButtonProps";

const Button: FC<ButtonProps> = ({
    disabled,
    label,
    bgColor,
    textColor,
    shadowColor,
    onclick
}) => {

    return (
        <button
            disabled={disabled}
            onClick={onclick}
            style={{
                '--disabled': disabled ? '0.5' : '1',
                '--cursor': disabled ? 'not-allowed' : 'pointer',
                '--bg-color': bgColor,
                '--text-color': textColor,
                '--shadow-color': shadowColor,
            } as React.CSSProperties}
            className="bg-[var(--bg-color)] opacity-[var(--disabled)] cursor-[var(--cursor)] text-[var(--text-color)] 2xl:w-87.5 md:w-75 w-full group flex items-center justify-between 2xl:px-12.5 lg:px-10 px-7.5 2xl:py-5.5 lg:py-3 py-3.5 xl:text-2xl lg:text-xl text-lg  font-bold rounded-full transition-all duration-300 border border-transparent hover:border-[var(--shadow-color)] hover:shadow-[8px_8px_0_var(--shadow-color)]"
        >
            <span>{label}</span>
            <svg className="transition-transform duration-300 group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                <path d="M16.75 0.269531L14.9922 2.02734L20.7344 7.76953H0.519531V10.2305H20.7344L14.9922 15.9727L16.75 17.7305L25.4805 9L16.75 0.269531Z" fill={textColor} />
            </svg>
        </button>
    );
};

export default Button;
