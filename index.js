"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const allRoutes = require('./routes/allRoutes');
const exphbs = require('express-handlebars');
require('dotenv').config;
const port = process.env.PORT || 5000;
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/pass', allRoutes);
app.listen(port, () => {
    console.log('servidor rodando na porta ' + port);
});
