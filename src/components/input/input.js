import React from 'react';
import styles from './Input.module.css';

import InputError from '../inputError/inputError';

const Input = ({label, typeHTML, onChanging, type, error, resetting, saved}) => {
    return (
            <>
            <div className={styles.InputWrapper}>
                <label className={styles.lab}>{label}</label>
                <input className={styles.Input} type={typeHTML}
                    onChange={(e) => onChanging(e,type)}
                    onClick={(e) => resetting(e,type)}
                    value={saved}
                 />
            </div>
            {
                error ?
                <InputError txt={`Wrong ${type} Input`} />
                : null
            }
            </>
        )
}

export default Input;
