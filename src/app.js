import express from "express";

const app = express();
app.use(express.json()); // Isto é um Middleware --> utilizado para ter acesso a requisições e adicionar algumas coisas nelas

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"    
    },
];

function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros); // 200 --> OK
});

app.get("/livros/:id", (req, res) => {

});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso"); // 201 --> Registro criado
});


export default app;