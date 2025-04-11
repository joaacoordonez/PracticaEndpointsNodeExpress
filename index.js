import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Bienvenido a mi servidor");
})

app.get('/saludo', (req, res) => {
    res.send("¡Hola, mundo!");
})

app.get('/numero', (req, res) => {
    res.send("42");
})

let usuario = {"nombre": "Ana", "edad": 25};
app.get('/usuario', (req, res) => {
    res.json(usuario);
})

let productos = ["Mouse", "Teclado", "Monitor"];
app.get('/productos', (req, res) => {
    res.json(productos);
})

let materias = [ { "nombre": "Matemática" }, { "nombre": "Lengua" } ];
app.get('/materias', (req, res) => {
    res.json(materias);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})