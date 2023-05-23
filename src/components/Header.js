import React from 'react'
import {Link} from 'react-router-dom'
const Header = (props) => {
  return (
    <nav className="nav">
        <Link to="/">
            <div>Disney Sorcerer's Arena Tracker</div>
        </Link>
        <Link to="/about">
            <div>About</div>
        </Link>
        <Link to="/news">
          <div>News</div>
        </Link>
        <Link to="/character">
          <div>Characters</div>
        </Link>
        <Link to="/spells">
          <div>Spells</div>
        </Link>
        <Link to="/club">
          <div>Clubs</div>
        </Link>
        <Link to="/event">
          <div>Events</div>
        </Link>
        <Link to="/signup">
          <div>Sign Up</div>
        </Link>
        <Link to="/login">
          <div>Log In</div>
        </Link>
    </nav>
  )
}

export default Header