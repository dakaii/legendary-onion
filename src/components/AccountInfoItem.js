import { IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import i18n from 'i18next';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
});

export const AccountInfoItem = (props) => {
    const classes = useStyles();
    const { item } = props;

    console.log(i18n.language);

    return (
        <Grid item sm={12} md={4}>
            <CardActionArea component="a" href={item.url}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {item.title}
                                <IconButton disabled={true}>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
};

AccountInfoItem.propTypes = {
    item: PropTypes.object,
};
