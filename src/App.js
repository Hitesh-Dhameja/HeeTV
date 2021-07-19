import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import SignIn from './components/Login/login.jsx';
import SignUp from './components/SignUp/SignUp';
import EachMovie from './components/EachMovie/EachMovie';
import Search from './components/Search/Search';
import Pricing from './components/Pricing/Pricing';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')
  const checkLogged = (emailId) => {
    setEmail(emailId)
    console.log(emailId)
  }
  const logOut = () => {
    setEmail('')
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/HeeTV/' exact >
            <Navbar menu='true' email={email} logOut={logOut} />
            <Home />
            <Movie />
            <About />
            <Footer />
          </Route>
          <Route name="login" path='/HeeTV/login/'>
            <SignIn checkLogged={checkLogged} />
          </Route>
          <Route name="signup" path='/HeeTV/signup/'>
            <SignUp checkLogged={checkLogged} />
          </Route>
          <Route name="each" path='/HeeTV/each/'>
            <EachMovie />
          </Route>
          <Route path='/HeeTV/search/'>
            <Search />
          </Route>
          <Route name="pricing" path='/HeeTV/pricing/'>
            <Pricing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
