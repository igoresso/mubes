import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Header, Footer, Main, Membership, Committee, Contacts, Subjects, Faq, Guests } from './components';

import './App.scss';

export default () => {
  const [committee, setCommittee] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [faq, setFaq] = useState(null);
  const [guests, setGuests] = useState(null);

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
          <Route exact path="/guests">
            <Guests guests={ guests } setGuests={ setGuests }/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}
