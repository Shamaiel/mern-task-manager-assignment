import axios from 'axios'

const baseUrl = "https://shiny-puce-bass.cyclic.app/"

const getAllToDo = (setToDo) => {
    
    axios
        .get(baseUrl)
        .then(({ data }) => {
            // console.log(data);
            setToDo(data)
    })


}


const addToDo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

 }

const deleteToDo = (_id, setToDo) => {
    console.log(_id);
    console.log(setToDo);

   axios 
        .delete(`${baseUrl}/delete/${_id}`)
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}



export { getAllToDo, addToDo, updateToDo, deleteToDo }