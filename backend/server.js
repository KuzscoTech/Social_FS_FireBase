import express from 'express';
import data from './data.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api/products', (req,res) => {
    res.send(data.products);
})

app.get('/', (req,res) => {
    res.send('Server is ready')
});

app.listen(8080, () => {
    console.log(`Server at PORT: ${PORT}`);
})