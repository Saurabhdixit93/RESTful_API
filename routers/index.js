// express importing
const express = require('express');
const router = express.Router();

// home controller importing
const homePageController = require('../controller/homeController');
// homepage router
router.get('/' , homePageController.homepage);

// ------------------All Task Router requests -----------------------------

// import task controller
const taskController = require('../controller/taskContoller');

// get request to fetch all task list
router.get('/tasks' , taskController.allTask);
// get request to fecth signle tasl via id
router.get('/tasks/:id' ,taskController.singleTaskWithId);
// post request to create new task
router.post('/tasks', taskController.createNewTask);
// put request to update the task via given id
router.put('/tasks/:id' , taskController.updateGivenTask);
// delete request to delete the task via given id
router.delete('/tasks/:id' , taskController.deleteTask);


// router expororting to globle access
module.exports = router;