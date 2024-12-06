/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
 // Establecer los estilos de la página usando JavaScript
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#f4f4f4";

// Estilos del encabezado
const header = document.querySelector('header');
header.style.backgroundColor = "red";
header.style.color = "#fff";
header.style.padding = "20px 0";
header.style.textAlign = "center";

// Estilos de la galería
const galeria = document.querySelector('.galeria');
galeria.style.display = "grid";
galeria.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))"; // Responsividad
galeria.style.gap = "20px";
galeria.style.padding = "20px";

// Estilos de cada artículo (item)
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.style.backgroundColor = "#fff";
    item.style.borderRadius = "5px";
    item.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    item.style.display = "flex";
    item.style.flexDirection = "column";
});

// Estilos de las imágenes dentro de cada artículo
const images = document.querySelectorAll('.item img');
images.forEach(image => {
    image.style.maxWidth = "100%";
    image.style.borderTopLeftRadius = "5px";
    image.style.borderTopRightRadius = "5px";
});

// Estilos de la información de cada artículo
const info = document.querySelectorAll('.info');
info.forEach(element => {
    element.style.padding = "15px";
});

// Estilos del título de la información
const titles = document.querySelectorAll('.info h3');
titles.forEach(title => {
    title.style.margin = "0 0 10px";
});
