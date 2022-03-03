import React from 'react'
import './Header.css';



import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
function Header() {
  
    return (
      <div className='head'>
        <IconButton>
        <PersonIcon fontSize="large" className="header-logo"/>
        </IconButton>

        <img className='Header_logo' src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
        alt=''/>
        <IconButton>
        <ForumIcon fontSize="large" className='header_icon'/>
        </IconButton>
        
      </div>
    );
  
}

export default Header
