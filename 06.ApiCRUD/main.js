// NUESTRO INDEX PRINCIPAL
const goodReadsCrud = require ('./Authors.js')

//* LISTA DE MIS AUTORES 
// goodReadsCrud.listAuthors()

//* LISTA DE UN AUTOR POR SU ID 
// goodReadsCrud.getAuthor(14737)

//* CREAMOS UN AUTOR
// const jsonSend = {
// 	name: "Ana",
// 	last_name: "Fernanda",
// 	nacionalidad: "MX",
// 	biography: "programmer",
// 	gender: "F",
// 	age: 25,
// 	is_alive: true
// }
// goodReadsCrud.createAuthor(jsonSend)

//* PATCH A UN AUTOR
// const updateData = {
//     name: "Maria",
// 	last_name: "Fernanda",
// 	biography: "Writter"
// }
// goodReadsCrud.patchAuthor(14737,updateData)

//*ELIMINAR UN AUTOR
goodReadsCrud.deleteAuthor(14568) 