const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const pacienteController = require('./controller/carro.controller')
const hostname = 'localhost'
const PORT = 3000
//------middleware-----
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//--------rotas--------------

app.post('/carro', pacienteController.cadastrar)
app.get('/carro', pacienteController.listar)
app.get('/carro/:id', pacienteController.consultar)
app.delete('/carro/:id', pacienteController.apagar)

app.get('/',(req,res)=>{
    res.status(200).json({Message: 'aplicação rodando'})
})

//-----------------server----------------
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('erro de conexão com o banco de dados')
})