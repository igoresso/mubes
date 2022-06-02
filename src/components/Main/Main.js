import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import './Main.scss';

function Main() {
  return (
    <>
      <Helmet>
        <title>MUBES - Melbourne University Biomedical Engineering Society</title>
        <meta
          name='description'
          content='We encourage and support Biomedical Engineering students and those interested in the field'
        />
      </Helmet>

      <Carousel className='mb-4' indicators={false}>
        <Carousel.Item interval={5000}>
          <img className='d-block w-100' src='img/engineering.jpg' alt='Welcome slide' />
          <Carousel.Caption className='text-start'>
            <Card className='carousel-card'>
              <Card.Body>
                <Card.Title as='h1'>
                  Welcome to the Melbourne University Biomedical Engineering Society!
                </Card.Title>
                <Card.Text className='lead mb-6'>
                  We encourage and support Biomedical Engineering students and those interested in
                  the field
                </Card.Text>
                <Link to='/membership' className='btn btn-primary btn-lg text-white' role='button'>
                  Join now
                </Link>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src='img/bbq.jpg' alt='BBQ slide' />
          <Carousel.Caption className='text-start'>
            <Card className='carousel-card'>
              <Card.Body>
                <Card.Title as='h2' className='h1'>
                  Start/End of Semester BBQ
                </Card.Title>
                <Card.Text className='lead mb-6'>Socialize with like-minded people</Card.Text>
                <Link to='/membership' className='btn btn-primary btn-lg text-white' role='button'>
                  Join now
                </Link>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src='img/trivia.jpg' alt='Trivia slide' />
          <Carousel.Caption className='text-start'>
            <Card className='carousel-card'>
              <Card.Body className='card-body'>
                <Card.Title as='h2' className='h1'>
                  Join us on our Trivia Night
                </Card.Title>
                <Card.Text className='lead mb-6'>Win amazing prizes</Card.Text>
                <Link to='/membership' className='btn btn-primary btn-lg text-white' role='button'>
                  Join now
                </Link>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className='d-block w-100' src='img/lecture.jpg' alt='Lecture slide' />
          <Carousel.Caption className='text-start'>
            <Card className='carousel-card'>
              <Card.Body className='card-body'>
                <Card.Title as='h2' className='h1'>
                  Take part in our Makerthon
                </Card.Title>
                <Card.Text className='lead mb-6'>Challenge yourselves</Card.Text>
                <Link to='/membership' className='btn btn-primary btn-lg' role='button'>
                  Join now
                </Link>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section>
        <h2 className='page-title mb-4 p-2 text-center'>
          What can I do after finishing Biomedical Engineering major?
        </h2>
        <Container>
          <Row className='py-4'>
            <Col md={4} className='p-5 p-md-3 text-center'>
              <img
                className='responsive'
                src='img/rocket.svg'
                width='208'
                height='208'
                alt='Rocket'
              />
            </Col>
            <Col md={8} className='ps-md-5 d-md-flex flex-column justify-content-center'>
              <h3 className='text-center text-md-start'>Launch your own biomedical startup</h3>
              <p className='lead text-center text-md-start'>
                {' '}
                Masters of Biomedical Engineering has more subjects where you are given a chance to
                build your own devices. Check out{' '}
                <a
                  rel='noopener noreferrer'
                  href='https://endeavour.unimelb.edu.au/success-stories/navi-technologies'
                  target='_blank'
                >
                  Navi Technologies
                </a>{' '}
                and{' '}
                <a
                  rel='noopener noreferrer'
                  href='https://eng.unimelb.edu.au/ingenium/graduate-success-stories/biomedical-engineering-startup-stelect-wins-medtechs-got-talent'
                  target='_blank'
                >
                  Stelect
                </a>{' '}
                startups co-founded by our alumni!
              </p>
            </Col>
          </Row>
        </Container>
        <div className='bg-light'>
          <Container>
            <Row className='py-4 flex-md-row-reverse'>
              <Col md={4} className='p-5 p-md-3 text-center'>
                <img
                  className='responsive'
                  src='img/blood.svg'
                  width='208'
                  height='208'
                  alt='Blood cells'
                />
              </Col>
              <Col md={8} className='pe-md-5 d-md-flex flex-column justify-content-center'>
                <h3 className='text-center text-md-end'>Deep dive into research</h3>
                <p className='lead text-center text-md-end'>
                  Start with an honours year in a lab of your choice - both academic and research
                  institutes. Get involved in research internships.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className='py-4'>
            <Col md={4} className='p-5 p-md-3 text-center'>
              <img className='responsive' src='img/team.svg' width='208' height='208' alt='Team' />
            </Col>
            <Col md={8} className='ps-md-5 d-md-flex flex-column justify-content-center'>
              <h3 className='text-center text-md-start'>Join industry as an engineer</h3>
              <p className='lead text-center text-md-start'>
                You are doing an engineering degree accredited by the Engineers Australia. The
                program gives you problem solving and interpersonal skills which are in high demand
                and can be used in any engineering field.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;
