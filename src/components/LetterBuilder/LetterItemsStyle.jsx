import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    resize: {
        fontSize: 14,
        minHeight: '9em',
    },
    resizeSubject: {
        fontSize: 14,
        margin: '.4em 0 0 0'
    },
    textField: {
        width: 450,
        height: '10.5em',
        overflowX: 'auto',
        margin: '.5em 1em 1.5em -1em'
    },
    body: {
        width: 450,
        overflowX: 'auto',
        maxHeight: '14em',
        margin: '-1em 1em .25em -1em'
    },
    email: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '.5em',
    },
    policy: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1em 0 0 1em',
    },
    stepper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-2.5em'
    },
    cardActions: {
        marginTop: '-2em'
    },
    title: {
        fontSize: 48,
        fontFamily: 'leafy',
        color: 'black',
        margin: '-.2em 0 -.25em 0'
    },
    label: {
        margin: '0 0 -2.45em -1em',
        fontSize: 14,
    },
    subject: {
        minWidth: '25ch',
        margin: '.455em 0 -.6em 3em'
    },

    back: {
        color: 'black'
    },
    next: {
        float: 'right',
        color: 'black'
    },
    policyHeader: {
        margin: '.3em 0 .5em .2em',
        fontFamily: 'leafy',
        color: 'black',
        fontSize: 40,
    },
    policyLabel: {
        margin: '-2em 0 .5em .5em',
    },
    error: {
        margin: '-0em 0 0em -1em'
    },
    about: {
        float: 'right',
        marginRight: ''
    }
})


export default useStyles