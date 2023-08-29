import React from 'react'
import './NavBar.css'
import logo from '../../Assets/pngwing.com.png'

function NavBar() {
  return (
    <div className='navBar'>
      <img className='logo' src= {logo} alt="logo"/>
      <img className='avatar' src=" https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
    </div>
  )
}

export default NavBar
