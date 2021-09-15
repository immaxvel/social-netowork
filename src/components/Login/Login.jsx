import React from 'react'
import styles from './Login.module.css'

const Login = (props) => {
    return (
        <div className={styles.login}>
            <h1> Please LOG IN! </h1>
            <LoginForm/>
        </div>
    )
}


const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>
            <div>
                <input type={"Checkbox"}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}

export default Login;