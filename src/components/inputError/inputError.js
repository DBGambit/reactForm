import React from 'react';
import styles from './InputError.module.css';

const InputError = ({txt}) => {
    return <p className={styles.ErrorTxt}>{txt}</p>
}

export default InputError;
