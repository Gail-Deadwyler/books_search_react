# Google Books Search

This project creates a React-based Google Books Search app that displays books based on user searches and saves books to review or purchase later. 

## Overview
From the terminal, ran create-react-app . Required node modules, package.json files and boiler plate code was created as a result. Created a `.gitignore` file to exclude: `node_modules and .DS_Store`. Created components for Header, NavBar, Wrapper,Form and Results. Connected to a MongoDB database named googlebooks using the mongoose npm package. Using mongoose, created a Book schema that had the following fields:  

title - Title of the book from the Google Books API 
authors - The books's author(s) as returned from the Google Books API 
description - The book's description as returned from the Google Books API
image - The Book's thumbnail image as returned from the Google Books API
link - The Book's information link as returned from the Google Books API  

Added the following Express routes:  
/api/books (get) - Returns all saved books as JSON. 
/api/books (post) - Will be used to save a new book to the database. 
/api/books/:id (delete) - Used to delete a book from the database by Mongo _id.

## How to use the app
When the page opens (https://books-search-gd.herokuapp.com/), the user can search for any book and view more details about the book on Google Books.  The user can also save the books for later viewing.  

## Technologies used: 
React  
Express  
Mongoose  
Heroku  
Node  
MongoDB  
JavaScript ES6  

## My role in app development
According to the project specifications and using classroom exercises, online tutorials and online code snippets as examples, I was able to create the code and test the functionality of this application.

## Deployment  
GitHub - https://github.com/Gail-Deadwyler/books_search_react.git  
Heroku - https://books-search-gd.herokuapp.com/
