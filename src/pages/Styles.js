import { makeStyles } from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
    btnsGridLayout: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px'
    },
    isSpecial: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: '10px'
    },
    feedbackLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

export const panelStyles = makeStyles(() => ({
    container: {
        display: 'grid',
        gridTemplateColumns: '49% 2% 49%',
        width: '100%',
        height: '90vh'
    },
    gridItem: {
        textAlign: 'center !important',
    },
    title: {
        fontSize: '28px'
    },
    cardList: {
        padding: '1%',
        display: 'flex',
        gap: '1%',
        flexWrap: 'wrap',
    }
}));

export const dashboardStyles = makeStyles(() => ({
    container: {
      
    },
    
}));

export const loginStyles = makeStyles(() => ({
    login: {
        height: '100vh',
        display: 'flex',
        placeContent: 'center',
        backgroundColor: '#bdbdbd',
        width: '100%',
    },
    card: {
        height: '450px',
        marginTop: '50px',
        width: '400px',
        textalign: 'center !important',
        alignItems:'center',
        borderRadius: '50%',
        display:'flex',
        flexDirection:'column',
        '& media screen and (max-width:667px)': {
            width: '80%',
            margin: 'auto'
        }
    },
    text: {
        marginTop: '20px',
    },
    inputs: {
        rowGap: '15px',
        padding: '8% 8% 8% 8%',
        display: 'grid',
    },
    reco: {
        float: 'right',
        paddingRight: ' 5%',
        marginTop: '20px ',
    }
}));