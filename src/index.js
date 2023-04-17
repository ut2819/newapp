import React from "react";
import ReactDOM from "react-dom";


const myName="Utkarsh ";
const lastName="Chaudhary";

const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
console.log(`My Name is ${myName}`);
ReactDOM.render(
   <>
   <h1> I'M {myName+lastName}</h1>
   <p>My lucky number is {Math.random()}</p>
   <p>Current Date={currDate}</p>
   <p>Current Time={currTime}</p>
   </>,
   document.getElementById("root")
);
