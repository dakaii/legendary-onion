import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

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
                        {t('scooter-map')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
};
