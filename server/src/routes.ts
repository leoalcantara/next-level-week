import express, { request, response } from 'express';
import knex from './database/connection';

import PointController from './controllers/PointsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    const serializeditems = items.map(item =>{
      return{
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
      }
    })

    return response.json(serializeditems);
  });

routes.post('/points', pointsController.create); 

  export default routes;
  