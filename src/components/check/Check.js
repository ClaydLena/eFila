import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function FormControlLabelPosition( props ) {
    const {label, value, onChange} = props

    return (
        <FormControl component="fieldset">
            <FormControlLabel
                value={value}
                control={<Checkbox onChange={onChange} />}
                label={label}
                labelPlacement="start"
            />
        </FormControl>
    );
}
