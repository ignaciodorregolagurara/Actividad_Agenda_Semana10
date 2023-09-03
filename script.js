let inpNombre = document.getElementById('nom');
let inpCel = document.getElementById('cel');

let contacto = [];

let btnAgregar = document.getElementById('btnAgregar');

btnAgregar.addEventListener('click', function(){
    let nombreV = inpNombre.value;
    let celularV = inpCel.value;
    let nuevoContacto = {
        nombre: nombreV,
        telefono: celularV
    };
    contacto.push(nuevoContacto);
    localStorage.setItem("contactos", JSON.stringify(contacto));

    inpNombre.value = '';
    inpCel.value = '';
});

let btnMostrar = document.getElementById('btnMostrar');
let list = document.getElementById('lista');



btnMostrar.addEventListener('click', function(){
    list.innerHTML = '';

    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || []; 

    contactosGuardados.forEach(contacto => {
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';

        list.innerHTML += `<li>${contacto.nombre}, ${contacto.telefono}/li>`;
        list.appendChild(botonEliminar);
        list.classList.add("estiloContacto");
    });
});

let btnEliminar = document.getElementById('btnEliminar');

btnEliminar.addEventListener('click', function(){
    
})