import React from 'react'
import { Link } from 'react-router-dom'

const disableButton = (e) => {
  if (e.target.href == location.href) return
  
  const links = document.getElementsByClassName('sidebarLink');
  [...links].forEach((link) => link.classList.add('disabledCursor'))
  
  setTimeout(() => [...links].forEach((link) => link.classList.remove('disabledCursor')), 
             1000);
}

const Sidebar = ({ isLogged }) =>
 (
    <div className='sidebar'>
      <div className='homeCard'>
        <Link className='sidebarLink' to='/polls' onClick={ (e) => disableButton(e) }>ALL POLLS</Link>
      </div>

      {isLogged ?
      <div className='homeCard'>
        <Link className='sidebarLink' to='/mypolls' onClick={ (e) => disableButton(e) }>MY POLLS</Link>
      </div>
      : null }

      {isLogged ?
      <div className='homeCard'>
        <Link className='sidebarLink' to='/' onClick={ (e) => disableButton(e) }>CREATE POLL</Link>
      </div>
      : null }
    </div>
  )


export default Sidebar