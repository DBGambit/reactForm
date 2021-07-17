let data = localStorage.getItem('data') ?
JSON.parse(localStorage.getItem('data')) : null

const initialState = {
    name: data ? data['name'] : '',
    surname: data ? data['surname'] : '',
    age: data ? data['age'] : '',
    email: data ? data['email'] : '',
    hobby : data ? data['hobby'] : ''
}

export default initialState;
