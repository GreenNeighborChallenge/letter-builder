import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LetterItems from './LetterItems.js'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '60em', 
        maxHeight: '62em',
        background: 'rgb(255,255,255, .85)',
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
});

function LetterBuilder({history, dispatch}) {
    const classes = useStyles();

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
                    <CardContent>
                            <LetterItems directToAddress={directToAddress} directBack={directBack}/>
                    </CardContent>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(LetterBuilder)