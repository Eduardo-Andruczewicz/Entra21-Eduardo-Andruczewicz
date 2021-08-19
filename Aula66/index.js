const express = require("express");
const app = express();
const porta = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/usuarios", (req, res) => {
    res.send("endpoint usuarios");
});

app.post("/", (req, res) => {
    res.send("post endpoint");
});

app.put("/", (req, res) => {
    res.send("put endpoint");
});

app.delete("/", (req, res) => {
    res.send("delete endpoint");
});

app.listen(porta, () => {
    console.log(`Servidor está rodando em http://localhost:${porta}`)

});