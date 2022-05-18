import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Protected from './Routes/Protected';
import Public from './Routes/Public';
import Specialties from './pages/Specialties'
import Specialty from './pages/Specialty'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Fragment from './pages/Fragment'
import Login from './pages/Login'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import Header from './organism/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Protected path="/" exact render={Home} />
        <Protected path="/specialties" exact render={Specialties} />
        <Protected path="/specialties/:id" exact render={Specialty} />
        <Protected path="/courses" exact render={Courses} />
        <Protected path="/courses/:id" exact render={Course} />
        <Protected path="/teachers" exact render={Teachers} />
        <Protected path="/class/:id" exact render={Fragment} />

        <Public path="/login" exact component={Login} />
        <Public path="/register" exact component={Register} />

        <Route component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;
