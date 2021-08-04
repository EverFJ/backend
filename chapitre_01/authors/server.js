const express = require("express");
const app = express();

const port = 8000;

const authors = [{
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("Authors API")
})

app.get("/authors/:id", (req, res) => {
    const index = req.params.id - 1;
    res.send(`${authors[index].name}, ${authors[index].nationality}`)
})

app.get("/authors/:id/books/", (req, res) => {
    const index = req.params.id - 1;
    const bookArray = authors[index].books;
    // console.log("bookArray : ", bookArray);
    let bookString = "";

    for (let i = 0; i < bookArray.length; i++) {
        bookString = bookString + bookArray[i] + ", ";
        // console.log("bookArray : ", bookArray)
    }
    // console.log("bookString : ", bookString)
    res.send(bookString)
})

app.get("/json/authors/:id", (req, res) => {
    const index = req.params.id - 1;
    let authorObject = {};
    authorObject.name = authors[index].name;
    authorObject.nationality = authors[index].nationality;
    res.send(authorObject);
})

app.get("/json/authors/:id/books", (req, res) => {
    const index = req.params.id - 1;
    let bookObject = {};
    bookObject.books = authors[index].books;
    res.send(bookObject);
})