import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
  layout: {
    width:'35%',
    height:'95vh',
    padding:'3vh 0 0 0',
    color:'#333333 !important',
  },
  children:{
    padding:'3vh 0 0 0',
    display:'flex',
    height:'80vh',
    placeContent:'center',
  },
  text:{
    color:'#219ebc',
    fontWeight:'600px'
  }
}));


function Layout({ children }) {
    const classes = getStyles();

    return (
        <React.Fragment>
            <div className={classes.layout}>
                <h2 className={classes.text}>Agência Bancária XYZ</h2>
                <div className={classes.children}>
                    {children}
                </div>
                <p className={classes.text}>
                    Termos e condições aplicáveis - 2023 
                </p>
            </div>
        </React.Fragment>
    )
}

export default Layout