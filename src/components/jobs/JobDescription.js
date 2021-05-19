import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function JobDescription(props) {
  const { job } = props;
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobDescription;
