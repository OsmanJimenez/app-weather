import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export const Feed = () => {
    const classes = useStyles();
    return (
            <Grid container spacing={3}>
            <Grid item xs={10}>
                <Button variant="text" color="default">
                    Hola
                </Button>
                <Button variant="text" color="default">
                    Hola
                </Button>
            </Grid>
            <Grid item xs={2}>
                
                <Button variant="text" color="default">
                    Hola
                </Button>
                <Button variant="text" color="default">
                    Hola
                </Button>
            </Grid>
      </Grid>
        
    )
}
