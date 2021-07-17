import React from 'react';
import styles from './Form.module.css';

import Input from './../input/input';
import Button from '../button/button';

const Form = ({inputsHandler, errors, submitting, resetting, saved}) => {
    return (
            <div className={styles.Form}>
                <Input label='Name' typeHTML='text' type='name' onChanging={inputsHandler} error={errors.name}
                    resetting={resetting}
                    saved={saved.name}
                />
                <Input label='Surname' typeHTML='text' type='surname' onChanging={inputsHandler} error={errors.surname}
                    resetting={resetting}
                    saved={saved.surname}
                 />
                <Input label='Age' typeHTML='number' type='age' onChanging={inputsHandler} error={errors.age}
                    resetting={resetting}
                    saved={saved.age}
                />
                <Input label='Email' typeHTML='email' type='email' onChanging={inputsHandler} error={errors.email}
                    resetting={resetting}
                    saved={saved.email}
                />
                <Input label='Hobby' typeHTML='text' type='hobby' onChanging={inputsHandler} error={errors.hobby}
                    resetting={resetting}
                    saved={saved.hobby}
                />
                <Button label='Submit' submitting={submitting} />
            </div>
        )
}

export default Form;
