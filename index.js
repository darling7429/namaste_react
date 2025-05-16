import React from "react";
import ReactDOM from "react-dom/client"

const h1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am from h1 with 🚀🚀🚀"),
    React.createElement("h1", {}, "iam from heading 2 with h1 tag ")
  ])
], React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am from h1"),
    React.createElement("h1", {}, "iam from heading 2 with h1 tag ")
  ])); // creates a plain javascript element as react element

const root = ReactDOM.createRoot(document.getElementById("root")); //creates root element to make changes using react

root.render(h1); // it converts the created react elements in to html elements and puts in container .
