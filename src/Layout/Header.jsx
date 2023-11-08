import React from 'react'
import './styles/Header.css';
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
      <div className="left-column">
        <img className='hamburger' src={hamburger}
        />
        <img className='logo' src={logo}
        />
      </div>
      <div className="middle-column">
        <input className='searchBar' type='text' placeholder='Search' />
        <button className='searchButton'>
          <img className='searchIcon' src={search} />
        </button>
        <button className='voiceButton'>
          <img className='voiceIcon' src={voice} />
        </button>
      </div>
      <div className="right-column">
        <img src={upload} className='uploadIcon' />
        <img src={apps} className='ytApps' />
        <img src={notifications} className='notify' />
        <img src="https://supersimple.dev/public/img/exercises/youtube/channel-profile-pics/my-channel.jpeg" className='channelIcon' />
      </div>
    </div>
  )
}

export default Header