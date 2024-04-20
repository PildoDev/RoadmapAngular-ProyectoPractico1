// alert("SCRIPT EJECUTANDOSE");
// console.log("SCRIPT EJECUTANDOSE");

let personas = [
    {nombre:"Juan", edad: 27, sexo: "Hombre", ciudad: "Manizales",profesion: "Ingeniero"},
    {nombre:"Maria", edad: 25, sexo: "Mujer", ciudad: "Bogotá",profesion: "Abogada"},
    {nombre:"Pedro", edad: 30, sexo: "Hombre", ciudad: "Manizales",profesion: "Ingeniero"},
    {nombre:"Luisa", edad: 35, sexo: "Mujer", ciudad: "Medellin",profesion: "Especialista"},
]

// for (let persona of personas) {
//     console.log(persona);
// }

{/*
<tr>
    <td>Elemento 1</td>
    <td>Elemento 2</td>
    <td>Elemento 3</td>
    <td>Elemento 4</td>
    <td>Elemento 5</td>
</tr>
*/}

function mostrarPersonas() {
    let tabla = document.getElementById("tabla-personas");
    console.log(tabla);
    let tbody = tabla.getElementsByTagName("tbody")[0];
    console.log(tbody);

    tbody.innerHTML = "";
    for (let persona of personas) {
        console.log(persona);
        let fila = "<tr>";
        fila += "<td>"+persona.nombre+"</td>";
        fila += "<td>"+persona.edad+"</td>";
        fila += "<td>"+persona.sexo+"</td>";
        fila += "<td>"+persona.ciudad+"</td>";
        fila += "<td>"+persona.profesion+"</td>";
        fila += "</tr>";
        tbody.innerHTML += fila;
    }
}

mostrarPersonas();