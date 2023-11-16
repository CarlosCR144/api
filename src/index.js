import express from 'express';

const app = express();
let port = 3000

// Datos
const infoImages = [
    {
        "id": 1,
        "nombre": "patos nadando",
        "categoria": "naturaleza"
    },
    {
        "id": 2,
        "nombre": "camino incierto",
        "categoria": "paisaje"
    }
]


// routes
app.get('/images', (req, res) => {
    res.json(infoImages)

    console.log(infoImages)
})

app.get('/images/:id', (req, res) => {
    console.log(req.params.id)

    const foundInfoImages = infoImages.find(infoImages => infoImages.id === parseInt(req.params.id)
    )

    if (!foundInfoImages) return res.status(404).send('Not Found')

    res.json(foundInfoImages)
})

app.listen(port)
console.log(`Server listening on ${port}`)