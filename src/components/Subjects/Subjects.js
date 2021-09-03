import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import { Helmet } from 'react-helmet';
import {
  Container,
  Spinner,
  Form,
  InputGroup,
  ToggleButtonGroup,
  ToggleButton,
  Card,
} from 'react-bootstrap';

import './Subjects.scss';

const Subjects = props => {
  const { subjects, setSubjects } = props;

  const [levelFilter, setLevelFilter] = useState('all');
  const [codeFilter, setCodeFilter] = useState('');

  const onLevelChange = value => {
    setLevelFilter(value);
    setCodeFilter('');
  };

  const onSubjectChange = event => {
    const { value } = event.target;
    setCodeFilter(value);
    setLevelFilter('all');
  };

  const fetchSubjectList = new Promise((resolve, reject) => {
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQMRU3Uo0Uxqa-VpBoyFrdohpCuRogd6izhY0AOrQvcIkclp40cvWdzO-_sLivUZPhpqZleoV91iJOb/pub?output=csv',
      {
        download: true,
        header: true,
        complete: results => {
          resolve(results.data);
        },
        error: reject,
      }
    );
  });

  const fetchReviews = () => {
    fetchSubjectList.then(subjectList => {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjyEy58f_T6uD0OmNhaz7jIZfuNYrwNjCR0HZm9scAi5hb5SOP-iBKCmVEj2xLZhYdOZC72sPFNlpO/pub?output=csv',
        {
          download: true,
          header: true,
          complete: results => {
            const reviewsRaw = results.data;
            setSubjects(
              subjectList.map((subject, index) => {
                const reviews = reviewsRaw
                  .filter(review => review.subjectCode === subject.code)
                  .sort((a, b) => b.year - a.year);
                return { ...subjectList[index], reviews };
              })
            );
          },
        }
      );
    });
  };

  useEffect(() => {
    if (subjects === null) {
      fetchReviews();
    }
  });

  return (
    <Container as='section'>
      <Helmet>
        <title>MUBES - Subjects</title>
        <meta
          name='description'
          content='MUBES is delighted to present you reviews for Biomedical Engineering major subjects. We hope this information will help you to make an informed choice.'
        />
      </Helmet>

      <h1 className='page-title mb-5 pt-2 text-center'>Subjects</h1>
      <p>
        Melbourne University Biomedical Engineering Society is delighted to present you reviews for
        Biomedical Engineering major subjects. We hope this will help you to make an informed
        choice. Subject structure including all assessments can be found in the Handbook. If you
        have any subject specific questions feel free to <Link to='/contacts'>contact us</Link>{' '}
        directly.
      </p>
      {subjects === null ? (
        <div className='text-center m-5'>
          <Spinner animation='grow' role='status' variant='primary'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Form className='mb-3'>
            <InputGroup>
              <InputGroup.Prepend
                as={ToggleButtonGroup}
                type='radio'
                name='options'
                value={levelFilter}
                onChange={onLevelChange}
              >
                <ToggleButton value='all'>All</ToggleButton>
                <ToggleButton value='undergrad'>Undergrad</ToggleButton>
                <ToggleButton value='postgrad'>Postgrad</ToggleButton>
              </InputGroup.Prepend>
              <Form.Control as='select' value={codeFilter} onChange={onSubjectChange}>
                <option value=''>Select subject</option>
                {subjects
                  .filter(subject => subject.reviews.length > 0)
                  .map(subject => (
                    <option
                      value={subject.code}
                      key={subject.id}
                    >{`${subject.code} - ${subject.name}`}</option>
                  ))}
              </Form.Control>
            </InputGroup>
          </Form>
          {subjects
            .filter(
              subject =>
                (levelFilter === 'all' && codeFilter === '') ||
                (levelFilter === 'all' && subject.code === codeFilter) ||
                (codeFilter === '' && subject.level === levelFilter)
            )
            .filter(subject => subject.reviews.length > 0)
            .map(subject => (
              <Card className='mb-4' key={subject.id}>
                <Card.Header>
                  <h2 className='h4 m-0'>{`${subject.code} - ${subject.name}`}</h2>
                  <a rel='noopener noreferrer' href={subject.handbooklink} target='_blank'>
                    Handbook
                  </a>
                </Card.Header>
                <Card.Body>
                  <h3 className='h5'>Reviews</h3>
                  {subject.reviews.map(review => (
                    <blockquote className='blockquote mb-5' key={review.id}>
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(review.text) }} />
                      <footer className='blockquote-footer'>
                        <cite title={review.author}>
                          {review.author} ({review.year})
                        </cite>
                      </footer>
                    </blockquote>
                  ))}
                </Card.Body>
              </Card>
            ))}
        </>
      )}
    </Container>
  );
};

Subjects.propTypes = {
  subjects: PropTypes.arrayOf(PropTypes.object),
  setSubjects: PropTypes.func.isRequired,
};

Subjects.defaultProps = {
  subjects: null,
};

export default Subjects;
