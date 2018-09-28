import React from 'react'

const LoginBar = ({ showLoginBarFunc }) => (
  <div className='loginbar' onClick={() => {showLoginBarFunc()}}>
    <div className='loginbar-btns' onClick={(e) => e.stopPropagation()}>
      <div><a className='btn btnLogin'><span>Login</span></a></div>
      <div><a className='btn btnRegister'><span>Register</span></a></div>
      <div><a className='btn btnLoginGit' href='/auth/github'><span>Login with Github</span></a></div>
    </div>
  </div>
)

export default LoginBar