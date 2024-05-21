const express = require('express')
const app = express();
app.use(express.json())
const allRoutes = require('./routes/allRoutes')
const exphbs = require('express-handlebars')

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/pass',allRoutes)

app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})