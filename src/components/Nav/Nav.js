import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <>
    <div className="nav">
      <Link to="/home">
      <i className="fas fa-home"></i>
      <FontAwesomeIcon icon={faHome} style={{color:'white'}} size="4x"/>
        <Typography className="nav-title leafy" variant='h2' style={{fontFamily: 'leafy'}}> The Green Neighbor</Typography>
      </Link>
      <div className="nav-right">
        {/* Always show this link since the about page is not protected */}
        <a className="nav-link" target="_blank"  href='https://www.greenneighborchallenge.com/about/'>About</a>
        {props.store.user.id &&
        <a className="nav-link" target="_blank" onClick={() => props.dispatch({ type: 'LOGOUT' })}>Logout</a>
        }
        </div>
    </div>
    </>
  );
};

export default connect(mapStoreToProps)(Nav);
