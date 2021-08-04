const request = require("request");
const express = require("express");
const app = express();

const port = 8000;

app.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const limit = 1;
    request.get("https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + pokemonId, (err, result, body) => {
        const response = JSON.parse(result.body);
        const pokemon = response.results[0].name;
        // console.log(pokemon)
        res.send(pokemon);
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})