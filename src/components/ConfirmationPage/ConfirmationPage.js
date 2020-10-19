import React from 'react';
import { connect } from 'react-redux';
import './ConfirmationPage.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { ShareButtonCircle, ShareBlockStandard } from "react-custom-share";
import gnIcon from './greenNeighbor3.jpg';
import { Typography, makeStyles  } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        fontSize: 48, 
        fontFamily: 'leafy', 
        color: 'black',
        margin: '0 0 1em 0'
    },
    subheader: {
        fontSize: 14,
        margin: '-3em 0 3em 0'
    },
    subSubheader: {
        fontSize: 25, 
        fontFamily: 'leafy', 
        color: 'black',
        margin: '0 0 0 0'
    },
    shareButtons: {
        float: 'left'
    },
    text: {
        margin: '1em 0 0 0'
    },
    confirmationBtnHome: {
        float: 'right'
    },
    root: {
        margin: '3em 0 10em 0',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '32em',
        height: '18em',
        padding: '2em',
        textAlign: 'center',
        margin: '2em 0 0 0',
        background: 'rgba(255,255,255, .85)',
    },
    photo : {
        height: '40%',
        width: '45%',
        borderRadius: "4em",
        margin: '.5em 0 -.7em 0'
    },
    share: {
        margin: '.1em 0 .2em 0',
        fontSize: 26, 
        fontFamily: 'leafy', 
    }
});

const ConfirmationPage = () => {
    const { root, header, subheader, subSubheader, share, text, shareButtons, confirmationBtnHome, photo, card} = useStyles();

    const shareBlockProps = {
        url: "https://www.greenneighborchallenge.com/",
        button: ShareButtonCircle,
        buttons: [
          { network: "Facebook", icon: FacebookIcon },
          { network: "Twitter", icon: TwitterIcon },
        ],
        text: "Join the movement",
        longtext:
          "I just used Green Neighbor Challenge’s Letter Builder to contact my state representatives to advocate for stronger green energy policies!  Click this link to build and customize your own letter and contact your reps today.."
      };

      
    return (
        <div className={root}>
            <div className={card}>
                <h1 className={header}>Success!</h1>
                <Typography className={subheader} color="textSecondary" variant='body1'> 
                    Thank you for taking the time to contact your state officials.
                    You will recieve an email copy of your letter for your records.
                    </Typography>
                <div className="confirmBtns">
                    <div className={shareButtons}>
                        <h3 className={share}>Share</h3>
                        <ShareBlockStandard {...shareBlockProps} />
                        <h5  className={text}>Challenge your friends!</h5>
                    </div>
                    <a className="unstyled" href="https://www.greenneighborchallenge.com/">
                        <div className={confirmationBtnHome}>
                            <h3 className={subSubheader}>Green Neighbor Home</h3>
                            <img alt="green neighbor icon" className={photo} src={gnIcon} />
                            <h5>Find more ways to get involved!</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (reduxState) => {
    return {
        letter: reduxState.letter,
    };
};

export default connect(mapStoreToProps)(ConfirmationPage);