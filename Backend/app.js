import { config } from 'dotenv'
config()
import express from 'express'
import setupRoutes from './src/routes/index.routes.js'
import cors from 'cors'

const app = express()
app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE'
}));

app.use(express.json())
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})

setupRoutes(app)

export default app