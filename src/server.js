const express = require("express");
const dataBase = require("./dataBase");
const bodyParser = require("body-parser");

const app = express();

const port = 3003;
const bataBase = require("./dataBase");

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/products", (req, res, next) => {
    res.send(dataBase.getProducts());
});

app.get("/products/:id", (req, res, next) => {
    res.send(dataBase.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
    const product = dataBase.saveProduct({
        nome: req.body.nome,
        preco: req.body.preco
    });
    console.log(product);
    res.send(product);
});

app.put("/products/:id", (req, res, next) => {
    const product = dataBase.saveProduct({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    });
    console.log(product);
    res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
    const product = dataBase.deleteProduct(req.params.id);
    res.send(product);
});

app.listen(port, () => {
    console.log("Servidor executando na porta " + port);
});