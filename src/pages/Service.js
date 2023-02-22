import React from "react";
import Layout from "../components/layout/Layout";
import Buttons from "../components/button/Button"
import { services } from "../utils/services";
import { makeStyles } from '@material-ui/core/styles';


const getStyles = makeStyles(() => ({
  layout: {
   display:'flex',
   flexDirection:'column',
   rowGap:'10px'
  },
}));

function Service (){
    const classes = getStyles()
    const [service, setService] = React.useState({})

    return(
        <React.Fragment>
            <Layout>
                <div className={classes.layout}>
                    <p>Selecione o serviço</p>
                    {
                        services.map((service)=> 
                        <Buttons 
                        color='primary'
                        size='large'
                        variant='contained'
                        label={service.service_name} 
                        key={service.service_id}
                        onClick={()=> setService(service)}
                        />
                        )
                    }
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Service