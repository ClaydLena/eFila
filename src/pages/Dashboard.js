import React from "react";
import { Paper, Box } from "@material-ui/core";
import { Footer, Header } from "../components/layout/DashboardLayout";
import { dashboardStyles } from "./Styles";

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

function Dashboard() {
    const classes = dashboardStyles()

    return (
        <React.Fragment>
            <Header/>
            <Box className={classes.container}>
                
            </Box>
            <Footer/>
        </React.Fragment>
    )
}

export default Dashboard