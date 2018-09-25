import React from 'react'

const Header = ({ isLogged, showLoginBarFunc }) => {
  
  return (
    <header className="header">
      <h2>FreeCodeCamp Project - Voting App</h2>
      <a href='https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-voting-app/' 
        target='_blank'>Link to the challenge</a>
      <a className='btn btnHeader' href={isLogged ? '/api/logout' : null} onClick={() => {isLogged ? null : showLoginBarFunc()}}
>
          {isLogged ? 'Logout' : 'Login'}
      </a>
    </header>
  )
}

export default Header