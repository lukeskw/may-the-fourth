const express = require('express');

const app = express();

//app.use(express.static('public'));
//app.use(express.staticProvider(__dirname + '/public'));

app.set("view options", { layout: false });
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html');
});
app.listen(3000, () => console.log('Aplicação executando na porta 3000!'));