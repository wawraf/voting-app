import React from 'react'

const Footer = () => (
  <header className="footer">
    <h2>Made by <a href='https://www.freecodecamp.org/wawraf' target='_blank'>Rafał</a></h2>
    <a className='upButton' onClick={() => window.scrollTo(0, 0)}> &#8682;</a>
  </header>
)

export default Footer