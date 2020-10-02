import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import LetterItems from './LetterItems.js'


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    cardItem: {
        
    },
    test: {
        display: "flex",
        flexDirection: "column",
    }
});

function LetterBuilder(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POLICIES' });
    }, [dispatch])



    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <div className={classes.test}>
                    <CardActions>
                            <LetterItems />
                    </CardActions>
                </div>
                <div>
                    <CardContent>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(LetterBuilder)