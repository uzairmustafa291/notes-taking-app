const express = require('express');
const { body } = require('express-validator');
const noteController = require('../controllers/noteController');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// All note routes require authentication
router.use(authenticate);

// Create note
router.post(
  '/',
  [
    body('title', 'Title is required').trim().notEmpty(),
    body('content', 'Content is required').trim().notEmpty(),
  ],
  noteController.createNote
);

// Get all notes
router.get('/', noteController.getNotes);

// Get single note
router.get('/:id', noteController.getNoteById);

// Update note
router.put(
  '/:id',
  [
    body('title', 'Title is required').trim().notEmpty(),
    body('content', 'Content is required').trim().notEmpty(),
  ],
  noteController.updateNote
);

// Delete note
router.delete('/:id', noteController.deleteNote);

module.exports = router;
