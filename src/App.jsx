import React from "react";
import Header from "./components/Header/header.jsx";
import Input from "./components/Input/Input.jsx";
import Card from "./components/cards/Cards.jsx"

import "./App.css"

function App(){
   return <div className="main-app-container">
     <Header/>
     <Input/>
     <div className="card-element-section" >
        {/* {[1,2,3,4,5].map((curr)=><Card/>)} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

     </div>
    
    
   </div>

}


export default App 