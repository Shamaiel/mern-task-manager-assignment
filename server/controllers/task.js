const { taskModel } = require('../models/taskModel');


const getTask = async (req,res)=>{
    try{
        const task = await taskModel.find();
        res.send(task);
    }
    catch(err){
        console.log(err);
        res.status(500).send('internal server error')
    }
}


 const saveTask = async (req, res)=>{
    try {
       const {text} =  req.body;
       const data = await taskModel.create({text})
      
       res.send(data);
       console.log('Added Successfully')
 
    } catch (error) {

        console.log(error)
        res.status(500).send('Internal server error: ' + error.message)
        
    }

} 


const deleteTask = async (req,res)=>{
    try{
        const { _id } = req.params;
        await taskModel.findByIdAndDelete(_id)
        res.status(201).send('deleted successfully')
    }
    catch(err){
        console.log(err)
        res.status(500).send(' internal error')
    }
}

const updateTask = async (req, res) => {
    try {
        const { _id, text } = req.body;

        await taskModel.findByIdAndUpdate(_id, { text });
        res.status(201).send("Updated Successfully...");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};


module.exports={
    saveTask,
    getTask,
    deleteTask,
    updateTask 
}