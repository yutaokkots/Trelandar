const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// getAll() -> retrieves all task categories for a given user
// find the userid of the user that is logged in
// get the tasks
async function getCategories(req, res){
    try {
        const allCategories = await prisma.TaskCategory.findMany({
            where: {
                userId: 2
            }
        })
        res.json(allCategories)
    } catch(error) {
        console.log(error)
        res.status(400).json('Could not process')
    }
}

async function getTasks(req, res) {
    try {
        const allTasks = await prisma.Task.findMany({
            where: {
                tasktypeId: 1
            }
        })
        res.json(allTasks)
    } catch(error) {
        console.log(error)
        res.status(400).json('Could not process for tasks')
    }
}


// createTaskCategory() -> creates a task-category for a user by:
// (1) finding the user id of the user that is logged in
// (2) creating a taskCategory based on the information provided
// what will the req.body look like? 
async function createTaskCategory(req, res) {
    const userId = await prisma.user.findUnique({
        where: {
            user: req.body.user
        }
    })
    const taskCategory = await prisma.TaskCategory.create({
        data: {
            name: req.body.name,
            detail: req.body.detail,
            color: req.body.color,
            user: userId,
        }    
    })
}

// Drag and drop feature, on front end:
// (1) drag
// (2) drop
// (3) execute function to prompt user to enter information
// (4) after submitting, request sent to backend


// createTask() -> creates a new task based on the id of the
// task category. 
async function createTask(req, res){
    try{
        const newTask = await prisma.task.create({
            data: {
                notes: req.body.notes,
                tasktype: req.body.tasktype,
                startTime: req.body.startTime,
                endTime: req.body.endTime
            }
        }) 
        // return 
        res.status(201).json('Added new task')
    }catch(error){
        console.log(error)
        res.status(400).json('Could not process')
    }
}


// editTask() -> creates a new task based on the id of the
// task category. 
async function editTask(req, res){
    try{
        await prisma.task.findUnique({
            where: {
                id: req.params.id
            }
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    createTaskCategory,
    getCategories,
    getTasks,
    createTask,
    editTask
}