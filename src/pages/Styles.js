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