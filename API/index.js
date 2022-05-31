const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3005;

const books = [{ "isbn":"1234","title":"Faust"},{ "isbn":"2953","title":"Harry Potter"}];

app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    let id = req.params.id;
    console.log("id:" + id);
    res.send(books[id]);
});

app.post('/books', (req, res) => {
    let body = req.body;
    books.push(body);
    //console.log("body" + JSON.stringify(body));
    res.send("ok");
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

