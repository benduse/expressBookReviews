const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
  // Check if the username already exists in users array
  return users.some(user => user.username === username);
}

const authenticatedUser = (username,password)=>{ //returns boolean
  // Check if username and password match any user in users array
  return users.some(user => user.username === username && user.password === password);
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({message: "Username and password are required!"});
  }
  if (!authenticatedUser(username, password)) {
    return res.status(401).json({message: "Invalid username or password!"});
  }
  // Generate JWT and save in session
  let accessToken = jwt.sign({ username: username }, 'access', { expiresIn: 60 * 60 });
  req.session.authorization = { accessToken, username };
  return res.status(200).json({message: "Login successful!", token: accessToken});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
