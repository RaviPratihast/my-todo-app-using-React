import React,{useState} from "react";
import Header from "./components/Header/header.jsx";
import Input from "./components/Input/Input.jsx";
import Card from "./components/cards/Cards.jsx"

import "./App.css"

function App(){

   const [notes,setNotes]=useState([])

   function addNotes(newNote){
      // this function is gonna receive the note object and it will get inserted inside the array.
      // console.log(newNote);
      setNotes(prev=>{
         return [
            ...prev,newNote
         ];
      })
   }


   function deleteNote(id){
   //   console.log(`delete request of id:${id}`);
    setNotes(prevNotes=>{
      return prevNotes.filter((note,index)=>{
         return index!==id;
      })
    })

   }

   return <div className="main-app-container">
     <Header/>
     <Input onAdd={addNotes}/>
     <div className="card-element-section" >
        {/* {[1,2,3,4,5].map((curr)=><Card/>)} */}
       {
         notes.map((item,index)=>{
            return <Card onDelete={deleteNote} key={index} id={index} title={item.title} content={item.content}/>
         })
       }

     </div>
    
    
   </div>

}


export default App 