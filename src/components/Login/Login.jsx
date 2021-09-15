import React from 'react'
import styles from './Login.module.css'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={"Checkbox"} name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className={styles.login}>
            <h1> Please LOG IN! </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;