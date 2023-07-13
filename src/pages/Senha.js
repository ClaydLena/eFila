import React, { useState, useEffect } from "react";
import Buttons from "../components/button/Button";
import Layout from "../components/layout/Layout";
import { getStyles } from "./Styles";
import { useNavigate } from "react-router-dom";
import apiService from '../api/apiService.js'
import { converterTempo } from "../utils/formatTime";

function Senha() {
    const classes = getStyles()
    const navigate = useNavigate()
    const [confirmed, setConfirmed] = React.useState(false)
    const senha = JSON.parse(localStorage.getItem('senha'))
    const [data, setData] = useState()
    const [post, setpost] = useState()


    useEffect(() => {
        const getData = async () => {
            try {
                const obj = await apiService.fetchData('gerarSenha')
                setData(obj)
            } catch (error) {
                console.log(error)
            }
        }

        getData();
    }, [])

    function handleCancel() {
        navigate('/')
        localStorage.clear()
    }

    async function handleConfirm() {
        let teste = await apiService.postData('senha', 
        {codigo_servico:senha.service, codigo_situacao:senha.need, atendida:0, criada_em: new Date(), actualizada_em:new Date()})
        setConfirmed(true)
        setpost(teste)
        // localStorage.clear()
    }

    function handleCreate() {
        navigate('/')


    }
    console.log(post)

    function returnData(param) {
        if (param == 'tempo' && senha.need !== 0 && senha.service == 0)
            return converterTempo(data.depTempoEsperaEsp)
        if (param == 'tempo' && senha.need == 0 && senha.service == 0)
            return converterTempo(data.depTempoEspera)
        if (param == 'tempo' && senha.need !== 0 && senha.service == 1)
            return converterTempo(data.atTempoEsperaEsp)
        if (param == 'tempo' && senha.need == 0 && senha.service == 1)
            return converterTempo(data.atTempoEspera)

        if (param == 'tamanho' && senha.need !== 0 && senha.service == 0)
            return data.depTamanhoEsp
        if (param == 'tamanho' && senha.need == 0 && senha.service == 0)
            return data.depTamanho
        if (param == 'tamanho' && senha.need !== 0 && senha.service == 1)
            return data.atTamanhoEsp
        if (param == 'tamanho' && senha.need == 0 && senha.service == 1)
            return data.atTamanho
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
                                <h3>{post.id}</h3>##
                                <br /><br />
                                <Buttons
                                    label='Ok'
                                    variant='contained'
                                    color='secondary'
                                    onClick={() => handleCreate()}
                                />
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div>
                                {data &&
                                    <>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '280px' }}>
                                            <p>Pessoas na fila antes de você:</p><strong>{returnData('tamanho')}</strong>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '280px' }}>
                                            <p>Tempo de espera estimado:</p><strong>{returnData('tempo')}</strong>
                                        </div>

                                        <div className={classes.btnsGridLayout}>
                                            <Buttons
                                                label='Gerar Senha'
                                                variant='contained'
                                                color='primary'
                                                onClick={() => handleConfirm()}
                                            />
                                            <Buttons
                                                label='Cancelar'
                                                variant='contained'
                                                color='secondary'
                                                onClick={() => handleCancel()}
                                            />
                                        </div>
                                    </>
                                }
                            </div>
                        </React.Fragment>
                }
            </Layout>
        </React.Fragment>
    )
}

export default Senha
