import { gql, useQuery } from '@apollo/client';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as React, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        padding: theme.spacing(10),
    },
    mainGrid: {
        margin: theme.spacing(0, 2),
    },
}));

const LOCATE_SCOOTERS = gql`
    query RootQuery ($latitude: Float!, $longitude: Float!, $limit: Int!, $distance: Int!) {
        scooter(
            latitude: $latitude
            longitude: $longitude
            limit: $limit
            distance: $distance
        ) {
            title
            latitude
            longitude
        }
    }
`;

export const Dashboard = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [latitude, setLatitude] = useState(1.3081602076594168);
    const [longitude, setLongitude] = useState(103.85693886754095);
    const [limit, setLimit] = useState(20);
    const [distance, setDistance] = useState(5000);

    const { loading, error, data } = useQuery(LOCATE_SCOOTERS, {
        variables: { latitude, longitude, limit, distance },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar title="Scooter Locator!" />
                <main className={classes.mainContent}>
                    <Typography variant="h4" component="h4">
                        {t('scooter-map')}
                    </Typography>
                    <Grid container spacing={1} className={classes.mainGrid}>
                        {/* {accountInfoItems.map((item) => (
                            <AccountInfoItem key={item.title} item={item} />
                        ))} */}
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
