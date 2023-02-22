import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
  layout: {
    width:'35%',
    height:'70vh',
  },
  children:{
    margin:'10vh 0 30vh 0'
  }
}));


function Layout({ children }) {
    const classes = getStyles();

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <h2>Banco 123</h2>
                <div className={classes.children}>
                    {children}
                </div>
                <p>
                    Termos e condições aplicáveis - 2023 
                </p>
            </div>
        </React.Fragment>
    )
}

export default Layout