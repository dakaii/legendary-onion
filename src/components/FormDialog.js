import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';

export const FormDialog = (props) => {
    const { setLat, setLng, setLimit, setDistance } = props;
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        lat: props.lat,
        lng: props.lng,
        limit: props.limit,
        distance: props.distance,
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setLat(values.lat);
        setLng(values.lng);
        setLimit(values.limit);
        setDistance(values.distance);
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
                <DialogContent>
                    <DialogContentText>
                        To search the scooters nearby, please enter the parameters
                        here and click Submit.
                    </DialogContentText>
                    <FormControl fullWidth>
                        <InputLabel>latitude</InputLabel>
                        <Input
                            value={values.lat}
                            onChange={handleChange}
                            name="latitude"
                            id="latitude-input"
                            type='number'
                            step="0.1"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>longitude</InputLabel>
                        <Input
                            value={values.lng}
                            onChange={handleChange}
                            name="longitude"
                            id="longitude-input"
                            type='number'
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>limit</InputLabel>
                        <Input
                            value={values.limit}
                            onChange={handleChange}
                            name="limit"
                            id="limit-input"
                            type='number'
                            step="1"
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>distance</InputLabel>
                        <Input
                            value={values.distance}
                            onChange={handleChange}
                            name="distance"
                            id="distance-input"
                            type='number'
                            step="1"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
