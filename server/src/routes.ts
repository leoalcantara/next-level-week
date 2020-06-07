import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializeditems = items.map(item =>{
      return{
        title: item.name,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      }
    })

    return response.json(serializeditems);
  });

  export default routes;
  