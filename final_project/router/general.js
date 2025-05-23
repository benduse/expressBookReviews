const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  if(isValid(req.body.username)){
  return res.status(300).json({message: "Error: Username already exists!"});
  }
  else 
  {
    let user ={
      username: req.body.username,
      password: req.body.password
    }
    users.push(user);
    return res.status(200).json({message: "Registration successful!"})
  }
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Retrieving the books
  res.send(JSON.stringify(books))
  return res.status(300).json({message: "Books retrieved successfully!"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
