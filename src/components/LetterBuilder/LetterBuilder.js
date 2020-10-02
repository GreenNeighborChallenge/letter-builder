import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';


const useStyles = makeStyles({
    root: {
        maxWidth: "50%",
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
    }
});

function LetterBuilder(props) {
    const classes = useStyles();

    function getPolicies(){
        props.dispatch({ type: 'FETCH_POLICIES' })
    }

    useEffect(() => {
        getPolicies()
    })

    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <div>
                    <CardContent>
                        <Typography>hello</Typography>
                    </CardContent>
                </div>
                <div>
                    <CardContent>
                        <Typography variant="h5" component="h2"> Your Letter
                    </Typography>
                   Subject:<input value="Energy Policy in YOUR STATE HERE"></input>
                        < br />
                        <textarea value="To Whom it May Concern:

                            As a resident of [STATE], I think our state could be doing more to make our air cleaner and healthier, mitigate climate change, and increase citizen control over our energy system. Energy use impacts all of us, but as consumers we don't have a lot of power to make the changes that are urgently needed. I am writing to recommend policy changes that are important to me and to our state."></textarea>
                        <br />
                        <textarea></textarea>
                        <br />
                        <textarea value="Thank you for taking the time to read my letter. Energy policy is important to [STATE] residents, and we need to act quickly to ensure a safe, healthy, democratic future. I look forward to hearing back from you, and learning how you plan to act on these recommendations."></textarea>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
}

export default connect()(LetterBuilder)