const { validationResult } = require('express-validator');
const Note = require('../models/Note');

// Create a note
exports.createNote = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const userId = req.userId;

    const note = new Note({
      title,
      content,
      userId,
    });

    await note.save();

    res.status(201).json({
      message: 'Note created successfully',
      note,
    });
  } catch (error) {
    next(error);
  }
};

// Get all notes of logged-in user
exports.getNotes = async (req, res, next) => {
  try {
    const userId = req.userId;

    const notes = await Note.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json({
      message: 'Notes retrieved successfully',
      count: notes.length,
      notes,
    });
  } catch (error) {
    next(error);
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if note belongs to user
    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to access this note' });
    }

    res.status(200).json({
      message: 'Note retrieved successfully',
      note,
    });
  } catch (error) {
    next(error);
  }
};

// Update a note
exports.updateNote = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.userId;

    let note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if note belongs to user
    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this note' });
    }

    // Update note
    note.title = title || note.title;
    note.content = content || note.content;

    await note.save();

    res.status(200).json({
      message: 'Note updated successfully',
      note,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a note
exports.deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Check if note belongs to user
    if (note.userId.toString() !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this note' });
    }

    await Note.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Note deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
