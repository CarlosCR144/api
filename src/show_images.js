const imagesContainer = document.getElementById('images');

async function showImages() {
    try {
        // Se usa la dependencia CORS para llamar una api de otra dirección 
        const response = await fetch('http://localhost:3000/images');
        const images = await response.json();

        images.forEach(image => {
            const div = document.createElement('div');
            div.innerHTML = `<h4>${image.nombre}</h4> <h5>${image.categoria}</h5>`;
            
            const img = document.createElement('img');
            img.src = image.imagen;
            img.width = "400"
            div.appendChild(img);
            imagesContainer.appendChild(div);
        });
    } catch (error) {
        console.log(error);
    }
}

showImages();