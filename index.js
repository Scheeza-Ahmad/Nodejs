// aik browser hota hai aur aik server hota hai aur in dono main communication hota hai by using Express
//iss file ko create karna hai by using npm init aur phir aga sara kar daina "start":"node index.js"yeh dalna hai aur phir npm run dev

//js ko run karna ka liya package.json main script main
//express ko install karna ka liya npm install express
console.log("Chai aur code");

// const express = require('express')
import express from "express";
const app = express(); //aik variable ka andar sari express ko lai aai
const port = 3000; //server kaheen na kaheen listen kara ga toh uska liya usa port ki zarorat hogi

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get("/twitter", (req, res) => {
  res.send("scheezaahmad117");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// kai bar aesa hota hai ka koi bhi error na ho tab bhi page reload nhi hota iska hal hai ka restart karlo 
