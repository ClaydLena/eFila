import React, { useEffect, useState } from "react";
import { Paper, Box } from "@material-ui/core";
import { Footer, Header } from "../components/layout/DashboardLayout";
import { panelStyles } from "./Styles";
import apiService from "../api/apiService";

function Card({ codigo_caixa, codigo_senha }) {
    const styles = {
        padding: '5vh 1vw 0 1vw',
        width: '13vw',
        fontSize: '17px',
        height: '8vh'

    }
    return (
        <Paper style={styles} elevation={8}>
            <h5>Senha {codigo_senha} - Caixa {codigo_caixa}</h5>
        </Paper>
    )
}

function Panel() {
    const classes = panelStyles()
    const [data, setData] = useState()
    const [upData, setUpData] = useState()
    const [saveData, setSaveData] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const obj = await apiService.fetchData('senhas')
                setData(obj)
            } catch (error) {
                console.log(error)
            }
        }

        const update = async () => {
            try {
                const obj = await apiService.fetchData('update')
                setUpData(obj)
            } catch (error) {
                console.log(error)
            }
        }

        const save = async () => {
            try {
                const obj = await apiService.fetchData('saveAtt')
                setSaveData(obj)
            } catch (error) {
                console.log(error)
            }
            getData()
        }
        const timeOut = []
        timeOut.push(setTimeout(getData(), 20000))

        const timeOutUp = []
        timeOutUp.push(setTimeout(update(), 20000))

        // const timeSave = []
        // timeSave.push(setTimeout(save(), 20))
    }, [])


    // useEffect(() => {
    //     function executarComAtrasoAleatorio() {
    //         var tempoEspera = Math.floor(Math.random() * 100000) + 10;

    //         setTimeout(async function () {
    //             try {
    //                 const obj = await apiService.updateData('upadate', null, null)
    //                 setUpData(obj)
    //             } catch (error) {
    //                 console.log(error)
    //             }
    //             executarComAtrasoAleatorio();
    //         }, tempoEspera);
    //     }

    //     executarComAtrasoAleatorio();
    // }, [])

    return (
        <React.Fragment>
            <Header />
            <Box className={classes.container}>
                <div className={classes.gridItem}>
                    <h4 className={classes.title}>Depósitos</h4>
                    <div className={classes.cardList}>
                        {
                            data?.map((obj) => {
                                return (
                                    <>
                                        {
                                            obj.codigo_servico == 0 &&
                                            <Card codigo_caixa={obj.codigo_caixa} codigo_senha={obj.codigo_senha} />
                                        }
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
                <hr></hr>
                <div className={classes.gridItem}>
                    <h4 className={classes.title}>Atendimento</h4>
                    <div className={classes.cardList}>
                        {
                            data?.map((obj) => {
                                return (
                                    <>
                                        {
                                            obj.codigo_servico == 1 &&
                                            <Card codigo_caixa={obj.codigo_caixa} codigo_senha={obj.codigo_senha} />
                                        }
                                    </>

                                )
                            })
                        }
                    </div>
                </div>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Panel