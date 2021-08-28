import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    TBclass: {
        px: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    Text: {
    }
    
}));



export default function Navbar() {
    
    const dispatch = useDispatch();
    const { openDrawer } = bindActionCreators(actionCreators, dispatch);
    const classes = useStyles();

    return (
        <AppBar dir="rtl" className={classes.root}>
            <Box>
                <Toolbar className={classes.TBclass}>
                    <IconButton color="inherit"
                        aria-label="open drawer"
                        onClick={() => openDrawer()}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                    <Box mx={4}>
                        <Typography variant="h3" className={classes.Text}>
                            עד מ"צי?
                        </Typography>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
        
    );
}
