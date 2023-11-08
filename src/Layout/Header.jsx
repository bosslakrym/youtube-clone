import React from 'react'
import './Header.css';
import logo from "../assets/youtube-logo.svg";
import hamburger from "../assets/hamburger-menu.svg";
import notifications from "../assets/notifications.svg";
import search from "../assets/search.svg";
import upload from "../assets/upload.svg";
import voice from "../assets/voice-search-icon.svg";
import apps from "../assets/youtube-apps.svg";

const Header = () => {
  return (
    <div className='header'>
      <div className="right-column">
        <img className='harmBurger' src={hamburger} />
        <img className='logo' src={logo} />

      </div>
      <div className="middle-column">
        <input className='search' placeholder='Search' type='text' />
        <button className='searchBtn'>
          <img className='searchIcon' src={search} />
        </button>
        <button className='voice-btn'>
          <img className='voiceIcon' src={voice} />
        </button>
      </div>
      <div className="left-column">
        <img className='upload' src={upload} />
        <img className='ytApps' src={apps} />
        <img className='notify' src={notifications} />
        <img className='profilePic' src='https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/my-channel.jpeg' />
      </div>

    </div>
  )
}

export default Header