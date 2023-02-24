import React from "react";
import Layout from "../components/layout/Layout";
import { getStyles } from "./Styles";
import { isSpecial } from "../utils/variables";
import { situations } from "../utils/variables";
import Buttons from "../components/button/Button";

function SpecialNeeds() {
    const classes = getStyles()
    const [special, setSpecial] = React.useState(0)
    const [needs, setNeeds] = React.useState()
    const [done, setDone] = React.useState(false)
    const [clickedBtn, setClickedBtn] = React.useState()

    return (
        <React.Fragment>
            <Layout>
                <div className={classes.btnsGridLayout}>
                    <p>Tem alguma necessidade especial?</p>
                    <div className={classes.isSpecial}>
                        {
                            isSpecial.map((value) =>
                                <Buttons
                                    color={value.color}
                                    size='small'
                                    variant='contained'
                                    label={value.label}
                                    key={value.id}
                                    onClick={() => setSpecial(value.id)}
                                />
                            )
                        }
                    </div>
                    {
                        special ?
                            situations.map((value) =>
                                <Buttons
                                    color='primary'
                                    size='small'
                                    variant={value.id == clickedBtn ? 'contained': 'outlined'}
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

            </Layout>
        </React.Fragment>
    )
}

export default SpecialNeeds