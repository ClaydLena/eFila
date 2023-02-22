import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
  },
}));

function Buttons({ variant, color, label, onClick, size, disabled }) {
  const classes = getStyles();

  return (
      <Button
        variant={variant}
        disabled={disabled}
        color={color}
        onClick={onClick}
        size={size}
        className={classes.button}
      >
        {label}
      </Button>
  );
}

export default Buttons;