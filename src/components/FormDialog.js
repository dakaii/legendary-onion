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
    const formik = useFormik({
        initialValues: {
            lat: props.lat,
            lng: props.lng,
            limit: props.limit,
            distance: props.distance,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // const handleSubmit = () => {
    //     setLat(values.lat);
    //     setLng(values.lng);
    //     setLimit(values.limit);
    //     setDistance(values.distance);
    //     setOpen(false);
    // };

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
                            name="latitude"
                            id="latitude-input"
                            value={formik.values.lat}
                            onChange={formik.handleChange}
                            type="number"
                            errors={formik.touched.lat && formik.errors.lat}
                            helperText={formik.touched.lat && formik.errors.lat}
                        />
                        <TextField
                            fullWidth
                            label="longitude"
                            name="longitude"
                            id="longitude-input"
                            value={formik.values.lng}
                            onChange={formik.handleChange}
                            type="number"
                            errors={formik.touched.lng && formik.errors.lng}
                            helperText={formik.touched.lng && formik.errors.lng}
                        />
                        <TextField
                            fullWidth
                            label="limit"
                            name="limit"
                            id="limit-input"
                            value={formik.values.limit}
                            onChange={formik.handleChange}
                            type="number"
                            step="1"
                            errors={formik.touched.limit && formik.errors.limit}
                            helperText={
                                formik.touched.limit && formik.errors.limit
                            }
                        />
                        <TextField
                            fullWidth
                            label="distance"
                            name="distance"
                            id="distance-input"
                            value={formik.values.distance}
                            onChange={formik.handleChange}
                            type="number"
                            step="1"
                            errors={
                                formik.touched.distance &&
                                formik.errors.distance
                            }
                            helperText={
                                formik.touched.distance &&
                                formik.errors.distance
                            }
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
};


const validationSchema = yup.object({
    lat: yup
        .number('Enter the latitude')
        .min(-90, 'Password should be of minimum 8 characters length')
        .max(90, 'Password should be of minimum 8 characters length')
        .required('Latitude is required'),
    lng: yup
        .number('Enter the longitude')
        .min(-180, 'Password should be of minimum 8 characters length')
        .max(180, 'Password should be of minimum 8 characters length')
        .required('Longitude is required'),
    limit: yup
        .number('Enter the number of scooters you want to get the locations of')
        .min(5, 'Minimum is 5')
        .max(300, 'Maximum is 300 ')
        .required('Limit is required'),
    distance: yup
        .number('Enter the search radius')
        .min(10, 'Minimum is 10')
        .max(10000, 'Maximum is 10000')
        .required('Distance is required'),
});
