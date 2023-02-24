import React from "react";
import Buttons from "../components/button/Button";
import Layout from "../components/layout/Layout";
import { getStyles } from "./Styles";

function showInfo(moment) {
    const classes = getStyles()

    switch (moment) {
        case "confirm":
            return (
                <React.Fragment>
                    <div>
                        <p>Será antendido dentro de <strong>30min</strong></p>
                        <div className={classes.btnsGridLayout}>
                            <Buttons
                                label='Gerar Senha'
                                variant='contained'
                                color='primary'
                                onClick={() => console.log(0)}
                            />
                            <Buttons
                                label='Cancelar'
                                variant='contained'
                                color='secondary'
                                onClick={() => console.log(0)}
                            />
                        </div>
                    </div>
                </React.Fragment>
            );
        case "show_feedback":
            return (
                <React.Fragment>
                    <div>
                        <p>Senha gerada com sucesso, memorize-a e fique atento à chamada.</p>
                        <p>O teu código é</p>
                        <h3>D0003</h3>
                    </div>
                </React.Fragment>
            )
        case "show_call":
            return (
                <React.Fragment>
                    <div>
                        <p>Atenção! Dirija-se à caixa</p>
                        <h3>Caixa 3</h3>
                        <Buttons
                            label='Sim'
                            variant='contained'
                            color='secondary'
                            onClick={() => console.log(0)}
                        />
                        <p>00:59</p>
                    </div>
                </React.Fragment>
            )
    }
}


function Service() {
    const classes = getStyles()

    return (
        <React.Fragment>
            <Layout>
                {showInfo("show_call")}
            </Layout>
        </React.Fragment>
    )
}

export default Service