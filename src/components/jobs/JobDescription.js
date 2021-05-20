import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './JobDescription.css';

function JobDescription(props) {
  const { job } = props;
  return (
    <Modal
      scrollable={true}
      show={props.show}
      onHide={props.close}
      dialogClassName='modal-900w'>
      <Modal.Header closeButton>
        <Modal.Title>
          <div>
            {job.title}
            <h5 className='mt-2'>
              {' '}
              {job.type}, {job.location}
            </h5>
            <h6> Annual Salary: ${job.salary.toLocaleString()}</h6>
            <h6> {job.datePosted.toDateString()}</h6>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h6>Job Description</h6>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem
          quis et repellat eaque autem fuga numquam id asperiores, officiis quod
          reprehenderit! Neque iure perspiciatis non unde, consectetur quos rem. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem quis et
          repellat eaque autem fuga numquam id asperiores, officiis quod reprehenderit!
          Neque iure perspiciatis non unde, consectetur quos rem. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Illum exercitationem quis et repellat eaque
          autem fuga numquam id asperiores, officiis quod reprehenderit! Neque iure
          perspiciatis non unde, consectetur quos rem.
          <h6 className='mt-4'>Job Requirements</h6>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem
          quis et repellat eaque autem fuga numquam id asperiores, officiis quod
          reprehenderit! Neque iure perspiciatis non unde, consectetur quos rem. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem quis et
          repellat eaque autem fuga numquam id asperiores, officiis quod reprehenderit!
          Neque iure perspiciatis non unde, consectetur quos rem. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Illum exercitationem quis et repellat eaque
          autem fuga numquam id asperiores, officiis quod reprehenderit! Neque iure
          perspiciatis non unde, consectetur quos rem. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Illum exercitationem quis et repellat eaque autem
          fuga numquam id asperiores, officiis quod reprehenderit! Neque iure perspiciatis
          non unde, consectetur quos rem. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Illum exercitationem quis et repellat eaque autem fuga numquam
          id asperiores, officiis quod reprehenderit! Neque iure perspiciatis non unde,
          consectetur quos rem.
          <h6 className='mt-4'>Responsibilities</h6>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem
          quis et repellat eaque autem fuga numquam id asperiores, officiis quod
          reprehenderit! Neque iure perspiciatis non unde, consectetur quos rem. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Illum exercitationem quis et
          repellat eaque autem fuga numquam id asperiores, officiis quod reprehenderit!
          Neque iure perspiciatis non unde, consectetur quos rem. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Illum exercitationem quis et repellat eaque
          autem fuga numquam id asperiores, officiis quod reprehenderit! Neque iure
          perspiciatis non unde, consectetur quos rem. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Illum exercitationem quis et repellat eaque autem
          fuga numquam id asperiores, officiis quod reprehenderit! Neque iure perspiciatis
          non unde, consectetur quos rem. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Illum exercitationem quis et repellat eaque autem fuga numquam
          id asperiores, officiis quod reprehenderit! Neque iure perspiciatis non unde,
          consectetur quos rem.
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={props.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobDescription;
