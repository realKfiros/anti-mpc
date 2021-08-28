import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";


export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className="top"
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box px={3} py={2} > 
                <Grid container
                    spacing={3} 
                    direction="row-reverse"
                    justifyContent="space-around"
                    alignItems="center">
                    <Grid item xs>
                        <Button color="secondary" variant="contained" m={5}>HIIII</Button>
                    </Grid>
                    <Grid item>
                        <Button color="secondary" variant="contained" m={5}>HIIII</Button>
                    </Grid>
                </Grid>
            </Box>

        </div>
    );

    return (
        <div>
            {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                    color="primary"
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
