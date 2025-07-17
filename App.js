import React from "react";
import ReactDOM from "react-dom/client";

const parent= React.createElement("div",{id:"parent"},[
    React.createElement(
    "div",
    {id:"child1"},
    [React.createElement("h1",{},"I m h1 tag"),
    React.createElement("h2",{},"I m h2 tag"),
    ]),
    React.createElement(
    "div",
    {id:"child2"},
    [React.createElement("h1",{},"I m h1 tag"),
    React.createElement("h2",{},"I m h2 tag"),
    ]),
]);



const heading= React.createElement(
    "h1",
    {id:"heading", xyz: "abc"},
    "Hello World from React!"); /*create object that root.render convets into html tag */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
