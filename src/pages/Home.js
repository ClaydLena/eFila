import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import Buttons from "../components/button/Button";
import { useNavigate } from "react-router-dom";
import apiService from "../api/apiService";

function HomeContainer(props) {
    const navigate = useNavigate()
    const { data } = props
    return (
        <React.Fragment>
            <Layout>
                <div>
                    <h2>Bem-vindo</h2>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'290px', margin:' 10px 0 0 0'}}>
                        <p>Tamanho da Fila de Depósito:</p><strong>{data?.deposito}</strong>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'290px', margin:' 10px 0 0 0'}}>
                        <p>Tamanho da Fila de Atendimento:</p><strong>{data?.atendimento}</strong>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'290px', margin:' 10px 0 0 0'}}>
                        <p>Tamanho Depósito Especial:</p><strong>{data?.depositoEsp}</strong>
                    </div>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'290px', margin:' 10px 0 0 0'}}>
                        <p>Tamanho Atendimento Especial:</p><strong>{data?.atendimentoEsp}</strong>
                    </div>
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

function Home() {
    const [data, setData] = useState()

    useEffect(() => {
        const getData = async () => {
            try {
                const obj = await apiService.fetchData('tamanho')
                setData(obj)
            } catch (error) {
                console.log(error)
            }
        }

        getData();
    }, [])

    return <HomeContainer data = {data} />
}

export default Home