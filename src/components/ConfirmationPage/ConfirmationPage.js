import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './ConfirmationPage.css';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { ShareButton } from "react-custom-share";

const useStyles = makeStyles({
    header: {
        fontSize: 48, 
        fontFamily: 'leafy', 
        color: 'black'
    },
    subheader: {
        fontSize: 25, 
        fontFamily: 'leafy', 
        color: 'black',
        margin: '0 0 0 0'
    },
  
    shareButtons: {
        float: 'left'
    },
    text: {
        margin: '0 0 0 0'
    }
});

const ConfirmationPage = () => {
    const { header, subheader, text, shareButtons} = useStyles();

    const facebookProps = {
        url: "https://www.greenneighborchallenge.com/",
        network: "Facebook",
        text: "Join the movement",
        longtext:
            `The Green Neighbor Challenge is a web tool and social media campaign to help anyone with a utility bill (including renters) find and sign up for green energy in the US. Together, we can create a cleaner future for all!.`
    };
    const twitterProps = {
        url: "https://www.greenneighborchallenge.com/",
        network: "Twitter",
        text: "Join the movement",
        longtext:
            `The Green Neighbor Challenge is a web tool and social media campaign to help anyone with a utility bill (including renters) find and sign up for green energy in the US. Together, we can create a cleaner future for all!.`
    };

    return (
        <div className="confirmationBody">
            <div className="confirmation">
                <h1 className={header}>Success!</h1>
                <h4>
                    Thank you for taking the time to contact your state officials.
                    You will recieve an email copy of your letter for your records.
                    </h4>
                <div className="confirmBtns">
                    <div className={shareButtons}>
                        <h3 className={subheader}>Share</h3>
                        <ShareButton {...facebookProps}>
                            <FacebookIcon />
                        </ShareButton>
                        <ShareButton {...twitterProps}>
                            <TwitterIcon />
                        </ShareButton>
                        <h5  className={text}>Challenge your friends!</h5>
                    </div>
                    <a className="unstyled" href="https://www.greenneighborchallenge.com/">
                        <div className="confirmationBtnHome">
                            <h3 className={subheader}>Green Neighbor Home</h3>
                            <h5>Find more ways to get involved!</h5>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStoreToProps)(ConfirmationPage);