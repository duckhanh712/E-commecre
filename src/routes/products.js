import express from 'express';
import knex from '../../datase';

const router = express.Router();

//get produts all
router.get('/produtcs', async (req, res) => {
  const products = await getProducts()
})

export default router;

