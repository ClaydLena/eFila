import React from "react";
import Layout from "../components/layout/Layout";
import Buttons from "../components/button/Button"
import { services } from "../utils/variables";
import { getStyles } from "./Styles";
import { situations } from "../utils/variables";
import Checkbox from "../components/check/Check";
import { useNavigate } from "react-router-dom";

function Service() {
    const classes = getStyles()
    const navigate = useNavigate()
    const [service, setService] = React.useState()
    const [special, setSpecial] = React.useState(0)
    const [needs, setNeeds] = React.useState()
    const [clickedBtn, setClickedBtn] = React.useState()
    const [clickedServiceBtn, setClickedServiceBtn] = React.useState()

    function handleChange() {
        setNeeds(null)
        setClickedBtn(null)
        setSpecial(!special)
    }

    function handleContinue() {
        let senha = {
            'service': service.service_id,
            'need': needs ? needs.id : 5
        }
        localStorage.setItem('senha', JSON.stringify(senha))
        navigate('/senha')
    }

    return (
        <React.Fragment>
            <Layout>
                <div className={classes.btnsGridLayout}>
                    <h2>Selecione o serviço</h2>
                    {
                        services.map((service) =>
                            <Buttons
                                color='primary'
                                size='large'
                                variant={service.service_id == clickedServiceBtn ? 'contained' : 'outlined'}
                                label={service.service_name}
                                key={service.service_id}
                                onClick={() => { setService(service); setClickedServiceBtn(service.service_id) }}
                            />
                        )
                    }
                    {
                        service &&
                        <div className={classes.btnsGridLayout}>
                            <Checkbox
                                value={special}
                                onChange={() => handleChange()}
                                label="Tem alguma necessidade especial?"
                            />
                            {
                                special ?
                                    situations.map((value) =>
                                        <Buttons
                                            color='primary'
                                            size='small'
                                            variant={value.id == clickedBtn ? 'contained' : 'outlined'}
                                            label={value.label}
                                            key={value.id}
                                            onClick={() => { setNeeds(value); setClickedBtn(value.id) }}
                                        />
                                    )
                                    : null
                            }
                            {
                                service &&
                                <Buttons
                                    color='primary'
                                    size='small'
                                    variant='contained'
                                    label='Continuar'
                                    onClick={() => { handleContinue() }}
                                />
                            }
                        </div>

                    }
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Service