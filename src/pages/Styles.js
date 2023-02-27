import { makeStyles } from '@material-ui/core/styles';

export const getStyles = makeStyles(() => ({
    btnsGridLayout: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px'
    },
    isSpecial: {
        display:'grid',
        gridTemplateColumns:'auto auto',
        columnGap:'10px'
    },
    feedbackLayout:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    }
}));

export const panelStyles = makeStyles(() => ({
    container: {
        display: 'grid',
        gridTemplateColumns:'49% 2% 49%',
        width:'100%',
        height:'90vh'
    },
    gridItem: {
        textAlign:'center !important',
    }, 
    title:{
       fontSize:'28px'
    },
    cardList:{
        padding:'1%',
        display:'flex',
        gap:'1%',
        flexWrap:'wrap',
    }
}));