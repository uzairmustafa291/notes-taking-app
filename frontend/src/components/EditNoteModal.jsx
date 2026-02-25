import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useToast } from './ToastNotification';
import { notesAPI } from '../api/api';

const EditNoteModal = ({ show, handleClose, note, onNoteUpdated }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  React.useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      showToast('Please fill in all fields', 'danger');
      return;
    }

    setLoading(true);
    try {
      const response = await notesAPI.updateNote(note._id, { title, content });
      showToast('Note updated successfully', 'success');
      handleClose();
      onNoteUpdated(response.data.note);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to update note', 'danger');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Note</Modal.Title>
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
              {loading ? 'Updating...' : 'Update Note'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditNoteModal;
