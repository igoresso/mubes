import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Membership from './components/Membership';
import Committee from './components/Committee';
import Contacts from './components/Contacts';
import Subjects from './components/Subjects';
import Faq from './components/Faq';

import './App.scss';

export default () => {
  return (
    <Router>
      <Header/>
      <main>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/membership">
            <Membership />
          </Route>
          <Route exact path="/committee">
            <Committee />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/subjects">
            <Subjects />
          </Route>
          <Route exact path="/faq">
            <Faq />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
