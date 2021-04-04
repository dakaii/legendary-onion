import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

export const FormDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    const { lat, lng, limit, distance } = props;
    const formik = useFormik({
        initialValues: {
            lat,
            lng,
            limit,
            distance,
        },
        validationSchema,
        onSubmit: (values) => {
            props.onSubmit(values);
            handleClose();
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Change Location
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Query Parameters
                </DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                    <DialogContent>
                        <DialogContentText>
                            To search the scooters nearby, please enter the
                            parameters here and click Submit.
                        </DialogContentText>
                        <TextField
                            fullWidth
                            label="latitude"
                            name="lat"
                            id="lat-input"
                            value={formik.values.lat}
                            onChange={formik.handleChange}
                            type="number"
                            errors={formik.touched.lat && formik.errors.lat}
                            helperText={formik.errors.lat}
                        />
                        <TextField
                            fullWidth
                            label="longitude"
                            name="lng"
                            id="lng-input"
                            value={formik.values.lng}
                            onChange={formik.handleChange}
                            type="number"
                            errors={formik.touched.lng && formik.errors.lng}
                            helperText={formik.errors.lng}
                        />
                        <TextField
                            fullWidth
                            label="limit"
                            name="limit"
                            id="limit-input"
                            value={formik.values.limit}
                            onChange={formik.handleChange}
                            type="number"
                            errors={formik.touched.limit && formik.errors.limit}
                            helperText={formik.errors.limit}
                        />
                        <TextField
                            fullWidth
                            label="distance"
                            name="distance"
                            id="distance-input"
                            value={formik.values.distance}
                            onChange={formik.handleChange}
                            type="number"
                            errors={
                                formik.touched.distance &&
                                formik.errors.distance
                            }
                            helperText={formik.errors.distance}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={!formik.isValid}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};

const LAT_MIN = -90;
const LAT_MAX = 90;
const LNG_MIN = -180;
const LNG_MAX = 180;
const LIMIT_MIN = 1;
const LIMIT_MAX = 300;
const DIST_MIN = 10;
const DIST_MAX = 10000;

const validationSchema = yup.object({
    lat: yup
        .number('Enter the latitude')
        .min(LAT_MIN, `Minimum is ${LAT_MIN}`)
        .max(LAT_MAX, `Maximum is ${LAT_MAX}`)
        .required('Latitude is required'),
    lng: yup
        .number('Enter the longitude')
        .min(LNG_MIN, `Minimum is ${LNG_MIN}`)
        .max(LNG_MAX, `Maximum is ${LNG_MAX}`)
        .required('Longitude is required'),
    limit: yup
        .number('Enter the number of scooters you want to get the locations of')
        .min(LIMIT_MIN, `Minimum is ${LIMIT_MIN}`)
        .max(LIMIT_MAX, `Maximum is ${LIMIT_MAX}`)
        .required('Limit is required'),
    distance: yup
        .number('Enter the search radius')
        .min(DIST_MIN, `Minimum is ${DIST_MIN}`)
        .max(DIST_MAX, `Maximum is ${DIST_MAX}`)
        .required('Distance is required'),
});
