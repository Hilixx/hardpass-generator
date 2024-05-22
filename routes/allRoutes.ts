
import express, { Request, Response } from 'express';
const controller = require('../controller/controller')
const routes = express.Router()



routes.post('/post',controller.passCrip)

module.exports = routes