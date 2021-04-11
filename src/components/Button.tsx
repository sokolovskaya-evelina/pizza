import React from 'react';
import classNames from 'classnames'

type PropsType = {
    className?: string
    outline?: boolean
    onClick?: () => void
}

const Button: React.FC<PropsType> = ({className, outline, children, onClick}) => {
    return (
        <button onClick={onClick} className={classNames('button', className,
            {
                'button--outline': outline
            }
        )}>
            {children}
        </button>
    );
};

export default Button;