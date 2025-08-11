import type { FC } from "react";
import type { ButtonProps } from "../../type/ButtonProps";

const Button: FC<ButtonProps> = ({
    label,
    bgColor,
    textColor,
    shadowColor,
    width,
}) => {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
                width: width,
            }}
            className={`group flex items-center justify-between px-12.5 py-5.5 text-2xl font-bold rounded-full transition-shadow duration-100 hover:border border border-transparent hover:border-black hover:shadow-[8px_8px_0_${shadowColor}]`}
        >
            <span>{label}</span>
            <img
                src="/img/icons/east.svg"
                alt="icon"
                className="transition-transform duration-300 group-hover:rotate-90"
            />
        </button>
    );
};

export default Button;
