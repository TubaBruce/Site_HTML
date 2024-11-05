require('colors');
let http=require('http');
let express=require('express');

let app=express();
app.use(express.static('./public'));
app.set('view engine', 'ejs')
app.set('views', './views');

var bodyParser = require("body-parser"); // pra usar o post
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.redirect('projeto.html');
});

app.post("/cadastra", function(req, res){
    let nome = req.body.cadastra_nome;
    let nasc = req.body.cadastra_nascimento;
    let login = req.body.cadastra_login;
    let senha = req.body.cadastra_senha;
    console.log(nome, nasc, login, senha);

    if(nome == "Bruno" || nome == "bruno"){
        console.log(login, senha);
        res.render('resposta.ejs', {resposta: 'Sucesso', mensagem:"Você é o Bruno"} );
    }else{
        console.log(login, senha);
        res.render('resposta.ejs', {resposta: 'Falhou', mensagem:"Você não é o Bruno"} ); 
    }
});

app.post("/login", function(req, res){
    let login = req.body.cadastra_login;
    let senha = req.body.cadastra_senha;
    if(senha == "tuba"){
        console.log(login, senha);
        res.render('resposta.ejs', {resposta: 'Sucesso', mensagem:"Usuario cadastrado com sucesso"} );
    }else{
        console.log(login, senha);
        res.render('resposta.ejs', {resposta: 'Erro', mensagem:"Senha errada"} ); 
    }
});
let server = http.createServer(app);
server.listen(80);


console.log('Servidor rodando...'.rainbow); 
