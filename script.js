let inpNombre = document.getElementById('nom');
let inpCel = document.getElementById('cel');
let inpBus = document.getElementById('buscador');
let btnMostrar = document.getElementById('btnMostrar');
let btnAgregar = document.getElementById('btnAgregar');
let list = document.getElementById('lista');
let contactos = [];

btnAgregar.addEventListener('click', function(){
    let nombreV = inpNombre.value;
    let celularV = inpCel.value;
    
    if (nombreV !== '' && celularV !== '') {
        let nuevoContacto = {
            nombre: nombreV,
            telefono: celularV
        };
        contactos.push(nuevoContacto);
        localStorage.setItem("contactos", JSON.stringify(contactos));
        inpNombre.value = '';
        inpCel.value = '';
    } else {
        alert('Debe llenar todos los campos');
    }
    
});

btnMostrar.addEventListener('click', function(){
    list.innerHTML = '';

    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || []; 

    contactosGuardados.forEach(contacto => {
        /* */
        let contactoAgregado = document.createElement('div'); 
        contactoAgregado.classList.add("contacto");
        contactoAgregado.setAttribute("id", "idContacto");
        /* */
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add("botonEliminar");
        botonEliminar.setAttribute("id", "btnEliminar");
        /* */
        let botonModificarNombre = document.createElement('button');
        botonModificarNombre.textContent = 'Modificar Nombre';
        botonModificarNombre.classList.add("botonModificar");
        botonModificarNombre.setAttribute("id", "btnModificarNom");
        /* */
        let botonModificarCelular = document.createElement('button');
        botonModificarCelular.textContent = 'Modificar Celular';
        botonModificarCelular.classList.add("botonModificar");
        botonModificarCelular.setAttribute("id", "btnModificarCel");
        /* */

        contactoAgregado.innerHTML = `
                    <p>
                        Nombre: <span class="nombreSpan">${contacto.nombre}</span>
                        <br>
                        Celular: <span class="celularSpan">${contacto.telefono}</span>
                    </p>
        `;
        contactoAgregado.appendChild(botonEliminar);
        contactoAgregado.appendChild(botonModificarNombre);
        contactoAgregado.appendChild(botonModificarCelular);
        list.appendChild(contactoAgregado);

        botonEliminar.addEventListener('click', function(e){
            let contactoAEliminar = e.target.parentElement;
            let nombreAEliminar = contacto.nombre;
            
            contactos = contactos.filter(function(contacto) {
                return contacto.nombre !== nombreAEliminar;
            });
            localStorage.setItem("contactos", JSON.stringify(contactos));
            list.removeChild(contactoAEliminar);
        })

        botonModificarNombre.addEventListener('click', function(){
            let nuevonombre = prompt(`Nombre a modificar: ${contacto.nombre}`);

            if (nuevonombre !== null) {
                contacto.nombre = nuevonombre;
        
                /* */
                contactoAgregado.innerHTML = `
                        <p>
                            Nombre: <span class="nombreSpan">${contacto.nombre}</span>
                            <br>
                            Celular: <span class="celularSpan">${contacto.telefono}</span>
                        </p>
                `;
                contactoAgregado.appendChild(botonEliminar);
                contactoAgregado.appendChild(botonModificarNombre);
                contactoAgregado.appendChild(botonModificarCelular);
                list.appendChild(contactoAgregado);
                /* */
                localStorage.setItem("contactos", JSON.stringify(contacto));
                /* */
            }
        })

        botonModificarCelular.addEventListener('click', function(){
            let nuevocelular = prompt(`Celular a modificar: ${contacto.telefono}`);

            if (nuevocelular !== null) {
                contacto.telefono = nuevocelular;
            
                /* */
                contactoAgregado.innerHTML = `
                    <p>
                        Nombre: <span class="nombreSpan">${contacto.nombre}</span>
                        <br>
                        Celular: <span class="celularSpan">${contacto.telefono}</span>
                    </p>
                `;
                contactoAgregado.appendChild(botonEliminar);
                contactoAgregado.appendChild(botonModificarNombre);
                contactoAgregado.appendChild(botonModificarCelular);
                list.appendChild(contactoAgregado);
                /* */
                localStorage.setItem("contactos", JSON.stringify(contacto));
                /* */
                }
        })
    })
});
