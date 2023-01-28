import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PaidModal(props) {
  return (
    <div>
      <Modal show={props.visible} onHide={props.handleX}>
        <Modal.Header closeButton>
          <Modal.Title>Payment successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congratulations, your booking is now confirmed!</Modal.Body>
        <Modal.Footer>
          <Button variant="search" onClick={props.handleX}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PaidModal;
