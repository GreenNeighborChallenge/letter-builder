import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import StepConnector from '@material-ui/core/StepConnector';

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg, #81865b 0%, #696D4A 50%, #002E2C 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg, #81865b 0%, #696D4A 50%, #002E2C 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#C0C3C4',
        borderRadius: 1,
    },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ABAFB0',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, #81865b 0%, #696D4A 50%, #3A3D29 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, #81865b 0%, #696D4A 50%, #3A3D29 100%)',
    },
});

function ColorlibStepIcon(props) {

    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <CreateIcon />,
        2: <HomeIcon />,
        3: <GroupAddIcon />,
        4: <FindInPageIcon />,
        5: <MailOutlineIcon />
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '35em',
        background: 'rgb(255,255,255, .01)',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Build Letter', 'Enter Information', 'Select Reps', 'Preview Letter', 'Send and Share'];
}

export default function CustomizedSteppers({ step }) {
    const classes = useStyles();
    const [activeStep] = useState(step);
    const steps = getSteps();

    useEffect(() => {
    }, [step]);

    return (
        <div >
            <div className={classes.root}>
                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} style={{ backgroundColor: 'rgb(255,255,255, .01)' }}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </div>
    );
}