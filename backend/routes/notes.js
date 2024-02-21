const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes using GET "/api/notes/fetchallnotes".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
    // res.json([{ myname: "abhishek" }]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 2: Add a new note using POST "/api/notes/addnotes".Login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      //If there are errors return bad request and the errors
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
      }
      let { title, description, tag } = req.body;
      const notes = new Notes({ title, description, tag, user: req.user.id });
      const saveNotes = await notes.save();
      res.json(saveNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3: Update an existing note using PUT "/api/notes/updatenotes".Login required
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    //Create a newObject
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the note to be updated and update it
    let notes = await Notes.findById(req.params.id);
    if (!notes) {
      return res.status(404).send("Not Found");
    }
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    notes = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ notes });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 4: Delete an existing note using DELETE "/api/notes/deletenotes". Login Required
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  try {
    //Find a note to be deleted and delete it
    let notes = await Notes.findById(req.params.id);
    if (!notes) {
      return res.status(404).send("Note Not Found");
    }
    //Allow deletion only if the user owns the note
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    notes = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", notes: notes });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
