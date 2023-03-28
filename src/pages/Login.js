import React from "react";
import { Paper } from "@mui/material";
import Input from "../components/input/Input";
import Buttons from "../components/button/Button";
import { useState } from "react";
import { loginStyles } from "./Styles";

const campos = [
    { "key": "username", "label": "Email", "valueType": "email" },
    { "key": "login", "label": "Senha", "valueType": "password" }
]

function Login() {
    const styles = loginStyles();
    const [loginData, setLoginData] = useState({})
 

    const onChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    return (
        <div className={styles.login}>
            <Paper className={styles.card}>
                <div className={styles.text}>
                    <h2>Login</h2>
                    <p>Entre com suas credenciais</p>
                </div>
                <div className={styles.inputs}>
                    {
                        campos.map((campos) => {
                            return <Input key={campos.key} type={campos.valueType} label={campos.label} onChange={onChange} value={loginData[campos.label]} />
                        })
                    }
                </div>
                <Buttons onClick={() => {  }} label='Entrar' variant='contained' color='primary' size='large' />
                <div className={styles.reco}>
                    <Buttons onClick={() => {  }} label='Esqueci a palavra passe' variant='text' color='secondary' size='small' />
                </div>
            </Paper>
        </div>
    )
}

export default Login;