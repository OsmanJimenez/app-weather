import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export const Navbar = () => {
    return (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              App News
            </Typography>
          </Toolbar>
        </AppBar>
        
    )
}
