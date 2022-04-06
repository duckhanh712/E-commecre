import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

//config
const port = 3003
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes





server.listen(port, () => {
  console.log(`E-commecre app listening on port ${port}`)
})