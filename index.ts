import express, { Request, Response } from 'express';
const app = express();
app.use(express.json())
const allRoutes = require('./routes/allRoutes')
const exphbs = require('express-handlebars')
require('dotenv').config
const port =  process.env.PORT || 5000
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


app.get('/',(req:Request,res:Response)=>{
    res.render('index')
})
app.use('/pass',allRoutes)

app.listen(port,()=>{
    console.log('servidor rodando na porta ' + port)
})