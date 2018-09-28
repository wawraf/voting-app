import React from 'react'
import { Link } from 'react-router-dom'

const disableButton = (e) => {
  if (e.target.href == location.href) return
  
  // Removing previous active link and make active clicked one
  const parent = document.getElementsByClassName('homeCard');
  [...parent].forEach((homeCard) => homeCard.classList.remove('current'))
  document.getElementById(e.target.id).parentElement.classList.add('current')
  
  // Disabling buttons for polls animation time (from CSS_Slide)
  const links = document.getElementsByClassName('sidebarLink');
  [...links].forEach((link) => link.classList.add('disabledCursor'))
  
  setTimeout(() => [...links].forEach((link) => link.classList.remove('disabledCursor')), 
             1000);
}

const Sidebar = ({ isLogged }) => 
  (
    <ul className='sidebar snip1189'>
      <li className='homeCard'>
        <Link id='pollsLink' className='sidebarLink' to='/polls' onClick={ (e) => disableButton(e) }>ALL POLLS</Link>
      </li>

      {isLogged ?
      <li className='homeCard'>
        <Link id='mypollsLink' className='sidebarLink' to='/mypolls' onClick={ (e) => disableButton(e) }>MY POLLS</Link>
      </li>
      : null }

      {isLogged ?
      <li className='homeCard'>
        <Link id='createpollLink' className='sidebarLink' to='/' onClick={ (e) => disableButton(e) }>CREATE POLL</Link>
      </li>
      : null }
    </ul>
  )


export default Sidebar