import React from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';

function JobForm(props) {
  return (
    <Modal scrollable={true} show={props.show} onHide={props.close} className='job-form'>
      <Modal.Header closeButton>
        <Modal.Title>Application Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your name and surname'
              name='fullname'
            />
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
        <Button variant='primary' type='submit' onClick={props.close}>
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
