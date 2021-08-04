const express = require("express")
const app = express();
const countries = require("./variables");

const port = 8000;

// console.log(countries)

app.get("/all/", (req, res) => {
    res.send(countries);
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})