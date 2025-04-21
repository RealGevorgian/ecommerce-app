import { ButtonHTMLAttributes } from 'react';
import './Button.css';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
};

export function Button({ fullWidth, children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={`btn ${fullWidth ? 'btn--full' : ''}`.trim()}
        >
            {children}
        </button>
    );
}
