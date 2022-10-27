import React,{useState}from "react";
import AddIcon from '@mui/icons-material/Add';
import "./Input.css";





function Input(props){

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value}=event.target;

        setNote(prev=>{
            return{
                ...prev,
                [name]:value
            }
        })

    }
    function handleClick(){
        // through error if input field is empty

        // 
       props.onAdd(note);
       setNote({
        title:"",
        content:""
       })
    }


    return <div className="input-container">
        <input onChange={handleChange} value={note.title} type="text" name="title" placeholder="Title"/>
        <textarea onChange={handleChange} value={note.content} type="text" name="content" placeholder="Content..."/>
        <button onClick={handleClick}><AddIcon className="add-icon"/></button>
    </div>
}

export default Input;