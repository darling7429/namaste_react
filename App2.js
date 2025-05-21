import React from "react";
import ReactDOM from "react-dom/client";
// const header = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", { id: "h1" }, "I am from h1"),
//   React.createElement("h1", { id: "h1" }, "I am from h1"),
//   React.createElement("h1", { id: "h1" }, "I am from h1"),
// ]);

const Header =()=> (
  <>

  <div className="header">
<div className="logo">
    Logo here
    
</div>
<div className="searchbox">
    <input type="text" placeholder="Enter Your Text"/>
    <button>Search me</button>

</div>
<div className="profile_user">

    icon_here

</div>
  </div>
    
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
