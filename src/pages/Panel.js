import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Footer, Header } from "../components/layout/DashboardLayout";
import { panelStyles } from "./Styles";

function Card() {
    const styles = {
        padding:'1%',
        width:'18%',
        fontSize:'20px',
        height:'18vh'
    
    }
    return (
        <Paper style={styles} elevation={5}>
            <h4>Caixa 123 - D003</h4>
        </Paper>
    )
}

function Panel() {
    const classes = panelStyles()

    return (
        <React.Fragment>
            <Header/>
            <Box className={classes.container}>
                <div className={classes.gridItem}>
                    <h4 className={classes.title}>Depósitos</h4>
                    <div className={classes.cardList}>
                       
                    </div>
                </div>
                <hr></hr>
                <div className={classes.gridItem}>
                    <h4 className={classes.title}>Atendimento</h4>
                    <div className={classes.cardList}>

                    </div>
                </div>
            </Box>
            <Footer/>
        </React.Fragment>
    )
}

export default Panel