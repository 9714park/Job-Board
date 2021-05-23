import React, { useContext, useState } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import ApplicationContext from '../ctx/application-context';
import ProfileContext from '../ctx/profile-context';

function JobForm(props) {
  const applicationCtx = useContext(ApplicationContext);
  const profileCtx = useContext(ProfileContext);

  const [name, setName] = useState(`${profileCtx.firstName} ${profileCtx.middleName} ${profileCtx.lastName}`);
  const [email, setEmail] = useState(profileCtx.email);
  const [address, setAddress] = useState(profileCtx.address);
  const [phone, setPhone] = useState(profileCtx.phone);

  const inputList = [name, email, address, phone];

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const addressInputHandler = (event) => {
    setAddress(event.target.value);
  };

  const phoneInputHandler = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = () => {
    let formValid = true;
    inputList.forEach((input) => {
      if (input == '') {
        formValid = false;
      }
    });

    if (formValid) {
      const id = `#APL-${applicationCtx.length + 1}`;
      applicationCtx.push({
        id: id,
        date: 'June 1, 2021, 10:23PM',
        position: props.job.title,
        type: props.job.type,
        status: 'Candidate',
      });
      alert('Form submitted successfully');
      props.close();
    } else {
      alert('Please fill out all information');
    }
  };

  const isEmailValid = (email) => {
    alert();
    console.log(email);
    const emailRegex = new RegExp('^[w-.]+@([w-]+.)+[w-]{2,4}$');
    return true;
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
            <Form.Control
              type='text'
              placeholder='Enter your name and surname'
              name='fullname'
              onChange={nameInputHandler}
              value={name}
              isInvalid={name == ''}
            />
            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter your email address'
              onChange={emailInputHandler}
              value={email}
              isInvalid={email == ''}
            />
            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='1234 Main St'
              onChange={addressInputHandler}
              value={address}
            />
            <Form.Control.Feedback type='invalid'>Required Field</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='tel'
              placeholder='+ 1 222 333 9999'
              onChange={phoneInputHandler}
              value={phone}
            />
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
