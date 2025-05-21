import React from "react";
import ReactDOM from "react-dom/client"

const  Heading=()=>(
    <>
    <Title/>
    {ele1}
    {ele2}
<h1>hi am from functional component</h1>
</>

)

const ele1=(
    
    <h1>i am from element 1</h1>
)

const ele2=(
    <>
    <h1>hi i am from h2</h1>
    
    </>
)




const Title=()=>
(
    <h1>hi iam from title component</h1>
)
const root = ReactDOM.createRoot(document.getElementById("root")); //creates root element to make changes using react

root.render(<Heading/>); // it converts the created react elements in to html elements and puts in container .
