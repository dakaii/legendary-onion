import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Copyright } from '../components/Copyright';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: 'auto',
        // marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));

export const Footer = (props) => {
    const classes = useStyles();
    const { description, title } = props;

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        component="p"
                    >
                        {description}
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};
