import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
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
    test: {
        display: "flex",
        flexDirection: "column",
    }
});

function LetterBuilder({history}) {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POLICIES' });
    }, [dispatch])

    const directToAddress = () => {
        history.push('/address')
    }
    const directBack = () => {
        history.push('/zip')
    }
    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <div className={classes.test}>
                    <CardActions>
                            <LetterItems directToAddress={directToAddress}/>
                    </CardActions>
                </div>
                <div>
                    <CardContent>
                    </CardContent>
                    <CardActions  >
                    <Button variant="outlined" onClick={directBack}>Back</Button>
                </CardActions>
                </div>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(LetterBuilder)