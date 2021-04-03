import { gql, useQuery } from '@apollo/client';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { default as React, useState } from 'react';
import { Footer } from '../components/Footer';
import { MapContainer } from '../components/MapContainer';
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
    query RootQuery($lat: Float!, $lng: Float!, $limit: Int!, $distance: Int!) {
        scooter(
            latitude: $lat
            longitude: $lng
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
    const [lat, setLat] = useState(1.3081602076594168);
    const [lng, setLng] = useState(103.85693886754095);
    const [limit, setLimit] = useState(20);
    const [distance, setDistance] = useState(5000);

    const { loading, error, data } = useQuery(LOCATE_SCOOTERS, {
        variables: { lat, lng, limit, distance },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar title="Scooter Locator!" />
                <main className={classes.mainContent}>
                    <MapContainer
                        center={{ lat, lng }}
                        zoom={11}
                        points={data.scooter}
                    ></MapContainer>
                </main>
            </Container>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </>
    );
};
