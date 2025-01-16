import express from 'express';
import Task from '../models/Task';

const router = express.Router();

// Route to get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to create a new task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to get a specific task by ID
router.get('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) throw Error('Task not found');
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Route to update a task by ID
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedTask) throw Error('Task not found');
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// Route to delete a task by ID
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) throw Error('Task not found');
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

export default router;
