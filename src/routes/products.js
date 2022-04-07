import express from 'express';
import DB from '../../database.js';

const router = express.Router();

//get products all
router.get('/products', async (req, res) => {
  // const user = await DB('users').where('id', 7996)
  return res.send("user");
})

export default router;

