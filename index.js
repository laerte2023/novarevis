const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')//requisitou o modulo sequelize
//configuração do handlebars como principal
app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
//conexão com o bd usando o sequelize
const sequelize = new Sequelize('test','root','123456',{
    host: "localhost",//local do bd
    dialect: 'mysql'//informar que estamos usando o mysql
})
app.get('/cad', function(req, res){//EXIBIR O FORMULARIO
    res.render('formulario')
})
app.post('/add', function(req,res){
    res.send("recebido no baguio!")
})

app.listen(8081, function(){
    console.log('servidor rodando no baguuio!')
})