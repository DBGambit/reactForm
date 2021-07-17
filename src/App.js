import React, {Component} from 'react';
import styles from './App.module.css';

import Form from './components/form/form';
import initialInputs from './getDataFromLS';

class App extends Component {
    state = {
        ...initialInputs,
        nameError: false,
        surnameError: false,
        ageError: false,
        emailError: false,
        hobbyError: false
    }

    componentDidMount() {
        console.log('mount',this.state)
    }

    inputsHandler = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    submitHandler = (e) => {
        let {
                nameError, surnameError, ageError, emailError, hobbyError,
                name, surname, age, email, hobby
            } = this.state
        if (!(/^[a-zA-Z]{2,}$/.test(name))) {
            nameError = true
        }
        if (!(/^[a-zA-Z]{2,}$/.test(surname))) {
            surnameError = true
        }
        if (!(/^\d{1,2}$/.test(age))) {
            ageError = true
        }
        if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))) {
            emailError = true
        }
        if (!hobby.length) {
            hobbyError = true
        }

        if ([nameError, surnameError, ageError, emailError, hobbyError].every(err => !err)) {
            localStorage.setItem('data', JSON.stringify({name, surname, age, email, hobby}))
            alert('SAVED')
            return
        }

        this.setState({
            nameError,
            surnameError,
            ageError,
            emailError,
            hobbyError
        })
    }

    resetInputHandler = (e,type) => {
        if (this.state[type+'Error']) {
            e.target.value = ''
            this.setState({[type]: '', [type+'Error']: false})
        }
    }

    render() {
        const {nameError, surnameError, ageError, emailError, hobbyError} = this.state
        const {name, surname, age, email, hobby} = this.state
        return (
            <>
                <h3 className={styles.Header}>Dummy Form )</h3>
                <div className={styles.App}>
                    <Form inputsHandler={this.inputsHandler}
                        errors={{
                            name: nameError,
                            surname: surnameError,
                            age: ageError,
                            email: emailError,
                            hobby: hobbyError
                        }}
                        saved={{name, surname, age, email, hobby}}
                        submitting={this.submitHandler}
                        resetting={this.resetInputHandler}
                     />
                </div>
            </>
          )
    }
}

export default App;
