import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const registration = e => {
  e.preventDefault()
  const form = e.target

  const data = {
    "email": form.email.value,
    "name": form.fullname.value,
    "password": form.password.value
  }

  Axios.post(`https://api-edteam.alejogs4.now.sh/signup`, data)
    .then(() => {
      alert("User created")
      window.location = "/login"
    })
    .catch(() => alert("Error creating user"))
}

const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={registration.bind()} >
      <div className="form__item">
          <label htmlFor="fullname">
            Full name
            <input type="text" name="fullname" id="fullname" placeholder="Introduce your name" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" placeholder="Introduce your e-mail" required/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" placeholder="Introduce your password" required/>
          </label>
        </div>
        <div className="form_item">
          <input type="submit" className="button full" value="Login"/>
        </div>
      </form>
      <div className="center">
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </div>
    </div>
  </div>
)

export default Register
