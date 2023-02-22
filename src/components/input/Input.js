import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
    input: {
        marginBottom: '1%',
        height: '70%',
        width: '100%',
    }
}));

function Input({ type, placeholder, onChange, label, value,}) {
    const classes = getStyles();

    return (
        <OutlinedInput
            autoFocus={true}
            className={classes.input}
            type={type}
            name={label}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            size='small'
        />
    )
}

export default Input