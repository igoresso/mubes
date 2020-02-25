import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
