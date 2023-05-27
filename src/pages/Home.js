import React from "react";
import Layout from "../components/layout/Layout";
import Input from '../components/input/Input';
import Buttons from "../components/button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Layout>
                <div>
                    <h2>Bem-vindo</h2>
                    <p>Número de pessoas na fila de depósito:123</p>
                    <p>Número de pessoas na fila de Levantamento:123</p>
                    <Buttons
                        label='Entrar'
                        color='primary'
                        variant='contained'
                        size='large'
                        onClick={() => navigate('service')}
                    />
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Home