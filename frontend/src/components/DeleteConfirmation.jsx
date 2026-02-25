import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmation = ({ show, handleClose, onConfirm, loading }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this note? This action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={onConfirm}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmation;
