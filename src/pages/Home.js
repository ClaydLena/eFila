import React from "react";
import Layout from "../components/layout/Layout";
import Input from '../components/input/Input';
import Buttons from "../components/button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const [code, setCode] = React.useState()
    const navigate = useNavigate()

    return (
        <React.Fragment>
            <Layout>
                <div>
                    <p>Introduza o código da agência </p>
                    <Input
                        type='text'
                        placeholder='Código da agência'
                        onChange={(e) => setCode(e.target.value)}

                    />
                    <Buttons
                        label='Entrar'
                        color='primary'
                        variant='contained'
                        size='large'
                        onClick={() => navigate('panel')}
                    />
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Home