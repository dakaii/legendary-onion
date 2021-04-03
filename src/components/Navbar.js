import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
    },
    toolbarTitle: {
        flex: 1,
    },
}));

export const Navbar = (props) => {
    const classes = useStyles();
    const { title } = props;

    return (
        <React.Fragment>
            <AppBar color="default" position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {title}
                    </Typography>
                    {/* <Button
                        size="small"
                        component={Link}
                        to="/login"
                        color="primary"
                    >
                        Log In
                    </Button>
                    <Button
                        size="small"
                        component={Link}
                        to="/signup"
                        variant="outlined"
                        color="primary"
                    >
                        Sign Up
                    </Button> */}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
};
