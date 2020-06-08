import React from 'react';
import './style.scss';

type InputProps = JSX.IntrinsicElements['input'];

export const Input = ({ className, ...props }: InputProps) => (
    <input className={`${className} shell--input`} {...props} />
);
