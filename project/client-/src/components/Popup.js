import React,{useState} from 'react'
import { Button,Modal,Form } from 'react-bootstrap';
export default function Popup({buttonName,heading},props) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      console.log(props.children)
      return (
        <>
          <Button variant="primary" onClick={handleShow}>
            {buttonName}
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Project Name</Form.Label>
                <Form.Control type="email" placeholder="Project 1" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Project Details</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }    
