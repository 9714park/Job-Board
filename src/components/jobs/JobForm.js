import React, { useContext } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import ApplicationContext from '../ctx/application-context';

function JobForm(props) {
  const applicationCtx = useContext(ApplicationContext);
  const submitHandler = () => {
    const id = `#APL-${applicationCtx.length + 1}`;
    applicationCtx.push({
      id: id,
      date: 'June 1, 2021, 10:23PM',
      position: props.job.title,
      type: props.job.type,
      status: 'Candidate',
    });
    props.close();
  };

  return (
    <Modal scrollable={true} show={props.show} onHide={props.close} className='job-form'>
      <Modal.Header closeButton>
        <Modal.Title>Application Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your name and surname' name='fullname' />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter your email address' />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Address</Form.Label>
            <Form.Control type='text' placeholder='1234 Main St' />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='tel' placeholder='1234 Main St' />
          </Form.Group>

          <Form.File id='formcheck-api-regular'>
            <Form.File.Label>Resume/CV</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' type='submit' onClick={submitHandler}>
          Submit
        </Button>
        <Button variant='danger' onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobForm;
