import React from "react";
import Buttons from "../components/button/Button";
import Layout from "../components/layout/Layout";
import { getStyles } from "./Styles";
import { useNavigate } from "react-router-dom";

function Senha() {
    const classes = getStyles()
    const navigate = useNavigate()
    const [confirmed, setConfirmed] = React.useState(false)

    function handleCancel(){
        navigate('/')
    }

    return (
        <React.Fragment>
            <Layout>
                {
                    confirmed ?
                        <React.Fragment>
                            <div>
                                <p>Senha gerada com sucesso, memorize-a e fique atento à chamada.</p>
                                <p>O teu código é</p>
                                <h3>D0003</h3>
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div>
                                <div className={classes.senhaTxt}>
                                    <p>Pessoas na fila antes de você:</p>
                                    <strong>30min</strong>
                                </div>
                                <div className={classes.senhaTxt}>
                                    <p>Hora de atendimento prevista:</p>
                                    <strong>30min</strong>
                                </div>
                                <div className={classes.senhaTxt}>
                                    <p>Tempo de espera estimado:</p>
                                    <strong>30min</strong>
                                </div>

                                <div className={classes.btnsGridLayout}>
                                    <Buttons
                                        label='Gerar Senha'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => setConfirmed(true)}
                                    />
                                    <Buttons
                                        label='Cancelar'
                                        variant='contained'
                                        color='secondary'
                                        onClick={() => handleCancel()}
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                }
            </Layout>
        </React.Fragment>
    )
}

export default Senha