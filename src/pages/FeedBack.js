import React from "react";
import Buttons from "../components/button/Button";
import Layout from "../components/layout/Layout";
import HoverRating from "../components/rating/Rating";
import { getStyles } from "./Styles";

function showInfo(moment) {
    const classes = getStyles()

    switch (moment) {
        case "confirm":
            return (
                <React.Fragment>
                    
                </React.Fragment>
            );
        case "show_feedback":
            return (
                <React.Fragment>
                   
                </React.Fragment>
            )
        case "show_call":
            return (
                <React.Fragment>
                    
                </React.Fragment>
            )
    }
}


function Feedback() {
    const classes = getStyles()

    return (
        <React.Fragment>
            <Layout>
                <div className={classes.feedbackLayout}>
                    <p>Classifique o atendimento</p>
                    <HoverRating/>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default Feedback