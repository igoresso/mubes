import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
  const [committee, setCommittee] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [faq, setFaq] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  })

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
            <Committee committee={ committee } setCommittee={ setCommittee } />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/subjects">
            <Subjects subjects={ subjects } setSubjects={ setSubjects } />
          </Route>
          <Route exact path="/faq">
            <Faq faq={ faq } setFaq={ setFaq }/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
