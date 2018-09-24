import React from 'react'

const Header = ({ isLogged, showSidebarFunc }) => {
  
  return (
    <header className="header">
      <h2>FreeCodeCamp Project - Voting App</h2>
      <a href='https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-voting-app/' 
        target='_blank'>Link to the challenge</a>
      <a href={isLogged ? '/api/logout' : null}>
        <button className='btn btnHeader' onClick={() => {isLogged ? null : showSidebarFunc()}}>
          {isLogged ? 'Logout' : 'Login'}
        </button>
      </a>
    </header>
  )
}

export default Header