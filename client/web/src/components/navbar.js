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
        px: 10
    },
    Text: {
    }
}));



export default function Navbar() {

    const amount = useSelector((state) => state.home);

    const dispatch = useDispatch();

    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <AppBar dir="rtl" className={classes.root}>
            <Box>
                <Toolbar className={classes.TBclass}>
                    <IconButton color="inherit"
                        aria-label="open drawer"
                        onClick={() => depositMoney(1000)}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}>
                        <MenuIcon />
                    </IconButton>
                    <Box mx={4}>
                        <Typography variant="h3" className={classes.Text}>
                            עד מ"צי? {amount}
                        </Typography>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
        
    );
}
