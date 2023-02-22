import React from "react";
import Layout from "../components/layout/Layout";
import Input from '../components/input/Input';
import Buttons from "../components/button/Button";

function Home() {
    return (
        <React.Fragment>
            <Layout>
                <div>
                    <p>Introduza o código da agência </p>
                    <Input
                        type='text'
                        placeholder='Código da agência'
                        onChange={(e) => console.log(e.target.value)}

                    />
                    <Buttons
                        label='Entrar'
                        color='primary'
                        variant='contained'
                        onClick={() => console.log('clicked')}
                    />
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Home