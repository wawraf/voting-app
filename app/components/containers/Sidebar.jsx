import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ isLogged }) =>
 (
    <div className='sidebar'>
      <div className='homeCard'>
        <Link to='/polls'>ALL POLLS</Link>
      </div>

      {isLogged ?
      <div className='homeCard'>
        <Link to='/mypolls'>MY POLLS</Link>
      </div>
      : null }

      {isLogged ?
      <div className='homeCard'>
        <Link to='#'>CREATE POLL</Link>
      </div>
      : null }
    </div>
  )


export default Sidebar