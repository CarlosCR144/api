import images from './data/info.json' assert { type: 'json' };
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
let port = 3000

// routes
app.get('/images', (req, res) => {
    res.json(images)
});

app.get('/images/:id', (req, res) => {
    const foundInfoImages = images.find(infoImages => infoImages.id === parseInt(req.params.id));

    if (!foundInfoImages) return res.status(404).send('Not Found');

    res.json(foundInfoImages);
});


app.listen(port)
console.log(`Server listening on ${port}`)