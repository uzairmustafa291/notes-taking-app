import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, Spinner, Alert } from 'react-bootstrap';
import AddNoteModal from '../components/AddNoteModal';
import EditNoteModal from '../components/EditNoteModal';
import DeleteConfirmation from '../components/DeleteConfirmation';
import NoteCard from '../components/NoteCard';
import { notesAPI } from '../api/api';
import { useToast } from '../components/ToastNotification';
import '../styles/Dashboard.css';

const DashboardPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { showToast } = useToast();

  // Fetch notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await notesAPI.getNotes();
      setNotes(response.data.notes);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to fetch notes', 'danger');
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
    setShowAddModal(false);
  };

  const handleEditNote = (note) => {
    setSelectedNote(note);
    setShowEditModal(true);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note._id === updatedNote._id ? updatedNote : note))
    );
    setShowEditModal(false);
    setSelectedNote(null);
  };

  const handleDeleteClick = (noteId) => {
    setSelectedNote({ _id: noteId });
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      setDeleteLoading(true);
      await notesAPI.deleteNote(selectedNote._id);
      setNotes((prev) => prev.filter((note) => note._id !== selectedNote._id));
      showToast('Note deleted successfully', 'success');
      setShowDeleteModal(false);
      setSelectedNote(null);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to delete note', 'danger');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <Container className="dashboard-container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>My Notes</h1>
        <Button
          variant="primary"
          onClick={() => setShowAddModal(true)}
          className="btn-lg"
        >
          + Add Note
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-3">Loading your notes...</p>
        </div>
      ) : notes.length === 0 ? (
        <Alert variant="info" className="text-center">
          <h4>No notes yet</h4>
          <p>Create your first note by clicking the "Add Note" button</p>
        </Alert>
      ) : (
        <Row className="g-4">
          {notes.map((note) => (
            <Col key={note._id} md={6} lg={4} className="note-col">
              <NoteCard
                note={note}
                onEdit={handleEditNote}
                onDelete={handleDeleteClick}
              />
            </Col>
          ))}
        </Row>
      )}

      {/* Modals */}
      <AddNoteModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
        onNoteAdded={handleAddNote}
      />

      <EditNoteModal
        show={showEditModal}
        handleClose={() => {
          setShowEditModal(false);
          setSelectedNote(null);
        }}
        note={selectedNote}
        onNoteUpdated={handleUpdateNote}
      />

      <DeleteConfirmation
        show={showDeleteModal}
        handleClose={() => {
          setShowDeleteModal(false);
          setSelectedNote(null);
        }}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
      />
    </Container>
  );
};

export default DashboardPage;
