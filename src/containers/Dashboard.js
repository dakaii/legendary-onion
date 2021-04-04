import { gql, useLazyQuery } from '@apollo/client';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { default as React, useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { FormDialog } from '../components/FormDialog';
import { MapContainer } from '../components/MapContainer';
import { Navbar } from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
    mainContent: {
        padding: theme.spacing(10),
    },
}));

const LOCATE_SCOOTERS = gql`
    query RootQuery($lat: Float!, $lng: Float!, $limit: Int!, $distance: Int!) {
        scooter(lat: $lat, lng: $lng, limit: $limit, distance: $distance) {
            title
            lat
            lng
        }
    }
`;

export const Dashboard = () => {
    const classes = useStyles();
    const [lat, setLat] = useState(1.30816);
    const [lng, setLng] = useState(103.856938);
    const [limit, setLimit] = useState(20);
    const [distance, setDistance] = useState(5000);

    const [getScooters, { error, loading, data }] = useLazyQuery(
        LOCATE_SCOOTERS
    );

    useEffect(() => {
        getScooters({
            variables: { lat, lng, limit, distance },
        });
    }, [getScooters, lat, lng, limit, distance]);

    const handleSubmit = (values) => {
        setLat(values.lat);
        setLng(values.lng);
        setLimit(values.limit);
        setDistance(values.distance);
    };

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
                        points={data?.scooter ?? []}
                    ></MapContainer>
                    <div>
                        <FormDialog
                            className={classes.formDialog}
                            lat={lat}
                            lng={lng}
                            limit={limit}
                            distance={distance}
                            onSubmit={(values) => handleSubmit(values)}
                        />
                    </div>
                </main>
            </Container>
            <Footer
                title=""
                description=""
            />
        </>
    );
};
