import React from 'react'

const LoginBar = ({ showLoginBarFunc }) => (
  <div className='loginbar' onClick={() => {showLoginBarFunc()}}>
    <div className='loginbar-btns' onClick={(e) => e.stopPropagation()}>
      <a className='btn btnLogin'>Login</a>
      <a className='btn btnRegister'>Register</a>
      <a className='btn btnLoginGit' href='/auth/github'>Login with Github</a>
    </div>
  </div>
)

export default LoginBar