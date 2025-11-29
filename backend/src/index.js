import express from 'express'
import cors from 'cors'
import router from './router/users.js';
import database from './config/database.js'

const app = express();

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173', // allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you use cookies/auth headers
}));
app.use('/api/v1', router)
const port = 5432 // ou 3001 ou 9090 ou 9091 ou 9000

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(port, () => {
            console.info("Servidor rodando na porta "+port)
        })
    })
    .catch((e)=> {
        console.log("não conectou com o banco"+ e)
    })

