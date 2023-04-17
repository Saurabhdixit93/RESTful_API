// importing required files

const Task = require('../model/taskModels');


// for fetching all list of tasks function

module.exports.allTask = async (req ,res) => {
    try{
        const tasks = await Task.find({});
        if(tasks.length === 0){
            return res.status(404).json({
                message: "No Task Availble , Please create new task"
            });
        }
        return res.status(200).json({
            message: "All Task Fetched Succcessfully",
            tasks
        });

    }catch(error){
        return res.status(400).json({
            message: "Error When Fetching All Task !!",
            error
        });
    }
}

// for single task function

module.exports.singleTaskWithId = async (req , res) =>{
    try{
        const task = await Task.findById(req.params.id);
        // check if task availbe or not
        if(!task){
            return res.status(404).json({
                message: "Error , Task Not Found"
            });
        }
        return res.status(200).json({
            message: "task found with given id Succcessfully",
            task
        });

    }catch(error){
        return res.status(400).json({
            message: "Error When Fetching Task with given id !!",
            error
        });
    }
};


// for creating new task function

module.exports.createNewTask = async (req , res) =>{
    const task  = new Task(req.body);

    try{
        await task.save();
        return res.status(201).json({
            message: "New Task Created Successfully",
            task
        })
        
    }catch(error){
        return res.status(400).json({
            message: "Error When Creating New task",
            error
        });
    }
};


// update given task via given id fucntion

module.exports.updateGivenTask = async (req ,res) => {
    const updates = Object.keys(req.body);
    const allowUpdates = ['title' , 'description' , 'status'];
    const isValidOperation = updates.every((update) => allowUpdates.includes(update));

    // check operation is valid or not

    if(!isValidOperation){
        return res.status(400).json({
            message: 'Error When Try To Update Or Invalid Update'
        });
    }

    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({
                message: 'Task Not Found'
            });
        }

        updates.forEach((update) =>task[update] = req.body[update]);
        await task.save();

        return res.status(200).json({
            message: "Task Updated Successfully",
            task
        });

    }catch(error){
        return res.status(400).json({
            message: "Error When Try To Updated task",
            error
        });
    }
};

// delete task via id function

module.exports.deleteTask = async (req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({
                message: 'Task Not Found'
            });
        }
        return res.status(200).json({
            message: 'Task Deleted Successfully',
            task
        });

    }catch(error){
        return res.status(400).json({
            message: "Error When Deleting Task",
            error
        });
    }
};