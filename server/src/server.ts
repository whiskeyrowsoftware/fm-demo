import express from 'express';
//import { getHomePage, getAboutPage } from './src/api-endpoints';

const app = express();
const port = 3000;

//app.get('/', getHomePage);
//app.get('/about', getAboutPage);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
