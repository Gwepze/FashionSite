import React from 'react';
import './App.css';
import { Home, About, Navbar, Contact, Faq, SignIn, SignUp } from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contactus" component={Contact}/>
        <Route path="/faq" component={Faq}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
      </Switch>
    </Router>
</>
  )
}

export default App

