import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {
  Header,
  Footer,
  Main,
  Membership,
  Committee,
  Events,
  Contacts,
  Subjects,
  Faq,
  Guests,
} from './components';

import './App.scss';

export default function () {
  const [committee, setCommittee] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [faq, setFaq] = useState(null);
  const [guests, setGuests] = useState(null);
  const [events, setEvents] = useState(null);

  return (
    <Router>
      <Helmet>
        <title>MUBES - Melbourne University Biomedical Engineering Society</title>
        <meta
          name='description'
          content='Melbourne University Biomedical Engineering Society is a student club that aims to connect students with alumni, faculty, industry, and each other.'
        />
      </Helmet>

      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/membership' element={<Membership />} />
          <Route
            path='/committee'
            element={<Committee committee={committee} setCommittee={setCommittee} />}
          />
          <Route path='/events' element={<Events events={events} setEvents={setEvents} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route
            path='/subjects'
            element={<Subjects subjects={subjects} setSubjects={setSubjects} />}
          />
          <Route path='/faq' element={<Faq faq={faq} setFaq={setFaq} />} />
          <Route path='/guests' element={<Guests guests={guests} setGuests={setGuests} />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
