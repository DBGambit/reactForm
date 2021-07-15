import React from 'react';
import styles from './button.module.css';

const Button = ({type, label, submitting}) => {
    return (
            <button
                onClick={submitting}
            >
                {label}
            </button>
        )
}

export default Button;
