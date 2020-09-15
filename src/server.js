const express = require("express");
const dataBase = require("./dataBase");

const app = express();

const port = 3003;
const bataBase = require("./dataBase");

app.get("/products", (req, res, next) => {
    res.send(dataBase.getProducts());
});

app.get("/products/:id", (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
    const product = dataBase.saveProduct({
        nome: req.body.name,
        preco: req.body.preco
    });
    res.send(product);
});

app.listen(port, () => {
    console.log("Servidor executando na porta " + port);
});