import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LetterItems from './LetterItems.js'

const useStyles = makeStyles({
    root: {
        width: '58em', 
        maxHeight: '58em',
        background: 'rgb(255,255,255, .85)',
    },
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
});

function LetterBuilder({history, dispatch}) {
    const {container, root} = useStyles();

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
        <div className={container}>
            <Card className={root}>
                    <CardContent>
                            <LetterItems directToAddress={directToAddress} directBack={directBack}/>
                    </CardContent>
            </Card>
        </div>
    );
}

export default connect(mapStoreToProps)(LetterBuilder)