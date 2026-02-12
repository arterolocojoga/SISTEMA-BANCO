const express = require('express');
const Routes = require('./config/routes');
const PORT = 8000;

let app = express();
let routes = new Routes(app);

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});