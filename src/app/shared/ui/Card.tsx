import { HTMLAttributes } from 'react';
import './Card.css';

export function Card({
                         children,
                         className = '',
                         ...rest
                     }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest} className={`card ${className}`.trim()}>
            {children}
        </div>
    );
}
