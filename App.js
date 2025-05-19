import React from "react";
import ReactDOM from "react-dom/client"





const Title=()=>
(
    <h1>hi iam from title component</h1>
)


const  Heading=()=>(
    <>
    <Title/>
<h1>hi am from functional component</h1>
</>
    


)
const root = ReactDOM.createRoot(document.getElementById("root")); //creates root element to make changes using react

root.render(<Heading/>); // it converts the created react elements in to html elements and puts in container .
