import express from 'express';
import uploads from './uploads';
const routers = express();

routers.use('/uploads', uploads);
// GET home page
routers.get('/', (_, res) => {
  res.json({
    status: 'ok',
  });
});

export default routers;
