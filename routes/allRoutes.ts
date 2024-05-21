
import express, { Request, Response } from 'express';
const controller = require('../controller/controller')
const routes = express.Router()


routes.get('/',(req:Request,res:Response)=>{
    res.render('index')
})
routes.post('/post',controller.passCrip)

module.exports = routes