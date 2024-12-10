
// Javascript para la noticia del inicio
      
// Cargar el archivo JSON de noticias

const contenedor = document.getElementById("noticiasContainer")

fetch('../data/rolexnoticias.json')
   .then(response => response.json())
   .then(data => {
   data.forEach(noticia => {
    contenedor.innerHTML += `
        <p><strong>${noticia.titulo}</strong></p>
        <p>${noticia.descripcion}</p>
    `
   })
   })
