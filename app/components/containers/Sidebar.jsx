import React from 'react'

const Sidebar = () => (
  <div className='sidebar'>
    <button className='btn btnLogin'>Login</button>
    <button className='btn btnRegister'>Register</button>
    <a href='/auth/github'><button className='btn btnLoginGit'>Login Github</button></a>
  </div>
)

export default Sidebar