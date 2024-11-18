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

    client.db("FDB").collection("usuarios").insertOne(
        { db_nome: nome, db_nasc: nasc, db_login: login, db_senha: senha }, function (err) {
        if (err) {
          res.render('resposta', {mensagem: "Erro ao cadastrar usuário!", resposta: "Falhou"})
        }else {
          res.render('resposta', {mensagem: "Usuário cadastrado com sucesso!", resposta: "Sucesso"})       
        };
      });
    
    console.log(nome, nasc, login, senha);
});

app.post("/login", function(req, res){
    let login = req.body.cadastra_login;
    let senha = req.body.cadastra_senha;

    client.db("FDB").collection("usuarios").find(
        {db_login: login, db_senha: senha }).toArray(function(err, items) {
          console.log(items);
          if (items.length == 0) {
            res.render('resposta', {mensagem: "Usuário/senha não encontrado!", resposta: "Falha"})
          }else if (err) {
            res.render('resposta', {mensagem: "Erro ao logar usuário!", resposta: "Falhou"})
          }else {
            res.render('resposta', {mensagem: "Usuário logado com sucesso!", resposta: "Sucesso"})       
          };
        });
   
});

app.post('/criar_post', async (req, res) => {
  const newPost = {
      titulo: req.body.post_titulo,
      resumo: req.body.post_resumo,
      conteudo: req.body.post_conteudo,
  };
  client.db("FDB").collection("Posts_Blog").insertOne(
      { db_titulo: newPost.titulo, db_resumo: newPost.resumo, db_conteudo: newPost.conteudo }, function (err) {
      if (err) {
        res.render('resposta_post.ejs', {resposta: "erro", mensagem: "Erro ao cadastrar"});
      }else {
        res.render('resposta_post.ejs', {resposta: "sucesso", mensagem: "Post cadastrado com sucesso"});
            
      };
    });
});

app.get('/obter_posts', async (req, res) => {
  client.db("FDB").collection("Posts_Blog").find({}).toArray(function(err, items) {
      if (err) {
          console.log(err);
          res.render('resposta.ejs', { resposta: "erro", mensagem: "Erro ao obter posts" });
      } else {
          console.log(items);
          res.render('blog.ejs', { posts: items });
      }
  });
});

let server = http.createServer(app);
server.listen(80);


console.log('Servidor rodando...'.rainbow); 

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = 'mongodb+srv://uniebgarcia:21062001@fdb.glmrq.mongodb.net/?retryWrites=true&w=majority&appName=FDB';

const client = new MongoClient(uri, { useNewUrlParser: true }); 
