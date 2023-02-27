import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
    header: {
        color:'white',
        height: '10vh',
        width:'90%',
        padding:'0 5% !important',
        position:'absolute',
        top:'0',
        display:'flex',
        justifyContent:'space-between',
        backgroundColor: '#219ebc !important',
    },
    headerText:{
        fontSize:'25px',
        margin: '1% 0 0 0'
    },
    footer: {
        color:'white',
        height: '5vh',
        width:'100%',
        position:'absolute',
        bottom:'0',
        backgroundColor: '#219ebc !important',
    },
    footerText:{
        margin:0
    }
}));


export function Header({ }) {
    const classes = getStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <h4 className={classes.headerText}>Banco 123</h4>
                <h4 className={classes.headerText}>203876</h4>
            </div>
        </React.Fragment>
    )
}

export function Footer({ }) {
    const classes = getStyles();

    return (
        <React.Fragment>
            <div className={classes.footer}>
                <p className={classes.footerText}>
                    Desenvolvido por ClaydLena - 2023
                </p>
            </div>
        </React.Fragment>
    )
}