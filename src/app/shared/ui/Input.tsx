import { InputHTMLAttributes } from 'react';
import './Input.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
};

export function Input({ label, error, ...rest }: Props) {
    return (
        <label className="input">
            <span>{label}</span>
            <input {...rest} />
            {error && <small className="input__error">{error}</small>}
        </label>
    );
}
