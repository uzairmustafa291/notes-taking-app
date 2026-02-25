import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useToast } from './ToastNotification';
import { notesAPI } from '../api/api';

const AddNoteModal = ({ show, handleClose, onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      showToast('Please fill in all fields', 'danger');
      return;
    }

    setLoading(true);
    try {
      const response = await notesAPI.createNote({ title, content });
      showToast('Note created successfully', 'success');
      setTitle('');
      setContent('');
      handleClose();
      onNoteAdded(response.data.note);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to create note', 'danger');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter note content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
            />
          </Form.Group>

          <div className="d-flex gap-2">
            <Button
              variant="secondary"
              onClick={handleClose}
              disabled={loading}
              className="ms-auto"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Note'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteModal;
