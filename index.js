const express = require("express"); // importa o módulo express neste arquivo
const app = express(); // iniciando o express

/* Localhost:3000 */
app.get("/", function(req, res) {
    res.send("<h1>Bem vindo ao meu site do trabalho!</h1>");
});

/* Localhost:3000/produtos */
app.get("/produtos", function(req, res) {
    const produtos = [
        "Counter-Strike 2",
        "Dota 2",
        "PUBG: Battlegrounds",
        "League of Legends",
        "Fortnite",
        "Free Fire",
        "Genshin Impact",
        "Valorant",
        "Grand Theft Auto V (GTA V)",
        "Among Us"
    ];
const listaProdutos = produtos
.map((produto, index) => `<p>${index + 1}. ${produto}</p>`)
.join("");

res.send("<h1>Lista de Produtos!</h1>" + listaProdutos);
});

/* Localhost:3000/consulta/PlayStation5 */
app.get("/consulta/:parametro", function(req, res) {
    res.send("retorno consulta: " + req.params.parametro);
});

/* Localhost:3000/cadastro/Xbox serie 5 */
app.get("/cadastro/:produto?", function(req, res) {
    const produto = req.params.produto;
    if (produto) {
        res.send("<h1>Produto " + produto + " criado!</h1>");
    } else {
        res.send("Produto criado!");
    }
});


app.listen(process.env.PORT ?? 3000, function(erro) {  // Localhost:3000
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado acesse a porta localhost:3000");
    }
});
