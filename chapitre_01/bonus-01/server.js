const express = require("express")
const app = express();
const countries = require("./variables")

const port = 8000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

console.log(countries)