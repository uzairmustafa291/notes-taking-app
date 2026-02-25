import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { formatDistanceToNow } from 'date-fns';
import '../styles/NoteCard.css';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <Card className="note-card h-100 shadow-sm hover-card">
      <Card.Body>
        <Card.Title className="note-title">{note.title}</Card.Title>
        <Card.Text className="note-content">{note.content.substring(0, 100)}...</Card.Text>
        <div className="note-meta">
          <small className="text-muted">
            {formatDistanceToNow(new Date(note.createdAt), { addSuffix: true })}
          </small>
        </div>
      </Card.Body>
      <Card.Footer className="note-footer border-top-0">
        <ButtonGroup className="w-100">
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => onEdit(note)}
            className="flex-grow-1"
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDelete(note._id)}
            className="flex-grow-1"
          >
            Delete
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
};

export default NoteCard;
