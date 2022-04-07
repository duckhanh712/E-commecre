import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';
//config
const port = 3003
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config
import knex from 'knex'

let connection = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'mauFJcuf5dhRMQrjj',
  database: 'webshop',
  charset: 'utf8',

}

const queryBuilder = knex({
  connection,
  client: 'mysql'
})

// routes
import productsRoute from './routes/products.js';
app.use('/webshop', productsRoute);

app.get('/w', (req, res) =>{
  res.send('s')
})

app.post('/contacts',async (req, res) => {
  console.log(40,req.body)
  const name = req.body.name
  
  const phone = req.body.phone
  const email = req.body.email
  const content = req.body.content
  try{

  }catch (e){
    console.log(e);
  }
  

  return res.send("oke")
})



server.listen(port, () => {
  console.log(`E-commecre app listening on port ${port}`)
})