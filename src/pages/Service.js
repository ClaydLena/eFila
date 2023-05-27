import React from "react";
import Layout from "../components/layout/Layout";
import Buttons from "../components/button/Button"
import { services } from "../utils/variables";
import { getStyles } from "./Styles";
import { situations } from "../utils/variables";
import Checkbox from "../components/check/Check";

function Service() {
    const classes = getStyles()
    const [service, setService] = React.useState({})
    const [special, setSpecial] = React.useState(0)
    const [needs, setNeeds] = React.useState()
    const [done, setDone] = React.useState(false)
    const [clickedBtn, setClickedBtn] = React.useState()

    console.log(needs, special)

    function handleChange() {
        setNeeds(null)
        setClickedBtn(null)
        setSpecial(!special)
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
                                variant='contained'
                                label={service.service_name}
                                key={service.service_id}
                                onClick={() => setService(service)}
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
                                            onClick={() => { setNeeds(value); setDone(true); setClickedBtn(value.id) }}
                                        />
                                    )
                                    : null
                            }
                            {
                                done ?
                                    <Buttons
                                        color='primary'
                                        size='small'
                                        variant='contained'
                                        label='Continuar'
                                        onClick={() => { console.log() }}
                                    />
                                    : null
                            }
                        </div>

                    }
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Service