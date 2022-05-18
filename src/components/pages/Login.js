import { Axios } from 'axios'
import React from 'react'

const authentication = e => {
  e.preventDefault()
  const form = e.target

  const data = {
    "email": form.email.value,
    "password": form.password.value
  }

  Axios.post("https://api-edteam.alejogs4.now.sh/login", data)
  .then(r => {
    localStorage.setItem('token', r.data.token)
    window.location = "/"
  })
  .catch(e => {
    alert("Error in login user")
  })
}

const Login = () => {
  return (
    <div className='ed-grid'>
      <div className='l-block'></div>
      <div className='m-to-center m-60 lg-30'>
        <h1 className='s-to-center center'>Login</h1>
        <form onSubmit={authentication.bind()}>
          <div className='form__item'>
            <label htmlFor='email'>
              Email
              <input type="email" name="email" id="email" placeholder='Introduce your email' required />
            </label>
          </div>
          <div className='form_item'>
            <label htmlFor='password'>
              Password
              <input type="password" name="email" id="password" placeholder='Introduce your password' required/>
            </label>
          </div>
          <div className='form_item'>
            <input type="submit" className='button full' value="Login" />
          </div> 
        </form>
        <div className="center">
        <p>Don't have an account? <Link to="/registro">Create account</Link> </p>
      </div>
      </div>
    </div>
  )
}

export default Login;
