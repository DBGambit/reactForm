import React from 'react';
import styles from './Input.module.css';

import InputError from '../inputError/inputError';

const Input = ({label, typeHTML, onChanging, type, error, resetting}) => {
    let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null
    return (
            <>
            <div className={styles.InputWrapper}>
                <label className={styles.lab}>{label}</label>
                <input className={styles.Input} type={typeHTML}
                    onChange={(e) => onChanging(e,type)}
                    onClick={(e) => resetting(e,type)}
                    placeholder={data ? data[type] : ''}
                 />
            </div>
            {
                error ?
                <InputError txt='Wrong Input' />
                : null
            }
            </>
        )
}

export default Input;
