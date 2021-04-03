import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganizationRequest } from '../actions/OrganizationAction';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { OrgEditableTable } from '../components/OrgEditableTable';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(3),
    },
    mainGrid: {
        margin: theme.spacing(0, 12),
    },
}));

export const OrganizationInfo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const org = useSelector((state) => state.org);

    useEffect(() => {
        dispatch(getOrganizationRequest());
    }, [dispatch]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar className={classes.title} title="Legendary Tacos" />
                <main>
                    <div className={classes.title}>
                        <Typography variant="h4" component="h4">
                            Account Settings
                        </Typography>
                    </div>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        <OrgEditableTable org={org} />
                    </Grid>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </React.Fragment>
    );
};
