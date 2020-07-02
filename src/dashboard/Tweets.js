import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import twitter from '../twitter';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';

import CardIcon from './CardIcon';

const styles = {
    main: {
        flex: '1',
        marginRight: '1em', marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52,
    },
};

const Tweets = ({ value, translate, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={twitter.icon} bgColor="#1da1f2" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                {"Remaining Annotations"}
            </Typography>
            <Typography variant="headline" component="h2">
                {value}
            </Typography>
        </Card>
    </div>
);

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(Tweets);
