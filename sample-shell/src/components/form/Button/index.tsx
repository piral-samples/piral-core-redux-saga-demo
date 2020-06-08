import React from 'react';
import './style.scss';

export interface ButtonExtraProps {
    text?: string;
}

type ButtonProps = ButtonExtraProps & JSX.IntrinsicElements['button'];

export const Button = ({ text, className, children, type = 'button', ...props }: ButtonProps) => (
    <button {...props} className={`${className} shell--button`} type={type}>
        {text || children}
    </button>
);
