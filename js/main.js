import { data } from "./data.js"

var temporal = "Des"
const container = document.querySelector(".container");
const contEncabezados = document.createElement("div")
const contfilas = document.createElement("div")
const tabla = document.createElement("table");
const tr = document.createElement("tr");

const thNombre = document.createElement("th")
const thApellido = document.createElement("th")
const thEdad = document.createElement("th")
const thEmail = document.createElement("th")
const thTelefono = document.createElement("th")

thNombre.textContent = "Nombre";
thApellido.textContent = "Apellido";
thEdad.textContent = "Edad";
thEmail.textContent = "Email";
thTelefono.textContent = "Telefono";

tabla.append(tr)
tr.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
container.appendChild(tabla);

function ordenamiento(seccion){
    seccion.addEventListener('click', async (e) => {
        if (temporal == "Des") {
            ordenarAsc();
        }else if(temporal == "Asc"){
            Default();
        }else if(temporal == "Default"){
            ordenarDes();
        }
    })
}

ordenamiento(thNombre);
ordenamiento(thApellido);
ordenamiento(thEdad);
ordenamiento(thEmail);
ordenamiento(thTelefono);

function Default(){
    temporal = "Default" 
    tabla.innerHTML = "";
    tabla.append(tr)
    tr.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
    mostrarDatos();
}

function ordenarAsc() {
    temporal = "Asc"
    data.sort(sortArrayAsc);
    tabla.innerHTML = "";
    tabla.append(tr)
    tr.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
    mostrarDatos();

}

function ordenarDes() {
    temporal = "Des"

    data.sort(sortArrayDes);
    tabla.innerHTML = "";
    tabla.append(tr)
    tr.append(thNombre, thApellido, thEdad, thEmail, thTelefono)
    mostrarDatos();

}

mostrarDatos();


function mostrarDatos() {
    data.map((dato) => {
        const trCont = document.createElement("tr");
        for (const key in dato) {
            const td = document.createElement("td");
            td.textContent = dato[key];
            trCont.append(td);
        }

        tabla.append(trCont);

    })
}


function sortArrayAsc(x, y) {
    return x.nombre.localeCompare(y.nombre);
}

function sortArrayDes(x, y) {
    return y.nombre.localeCompare(x.nombre);
}