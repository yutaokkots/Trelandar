const express = require('express');
const router = express.Router();
const tasksCtrl = require('../controllers/tasks.js');

//server.js app.use is referencing /api/tasks

////////// Task Categories
// GET
// api/tasks/getAll

// -> get all task categories
// -> this function will retreive all of the user's task categories
// ane make sure it is refreshed via a state change
router.get('getcategories', tasksCtrl.getCategories)


// POST
// api/tasks/create
// -> creation of new task category
// when a user adds a new task category (left-hand side of the dashboard)
// after pressing a button, the user is prompted to enter information for
// a new task category. 
router.post('/create', tasksCtrl.createTaskCategory)


////////// Tasks 
// POST
// api/tasks/:id/task/create
// -> creation of new task
// a user can drag a task category from the left-hand side
// to anywhere on the calendar, which prompts the user to create
// a new task. 

router.post('/:id/task/create', tasksCtrl.createTask)


// PUT
// api/tasks/:id/task/edit
// -> editing a task
// a user can edit the task, for exampole, the notes, task-type, 
// the start time, and end time, as well as whether the
// task is completed or not
router.put('/:id/task/edit', tasksCtrl.editTask)
