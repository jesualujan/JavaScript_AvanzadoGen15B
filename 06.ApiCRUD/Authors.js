//! Goodreads API -- TRABAJAR NUESTRO C.R.U.D DE LA API 
//* DOCUMENTACIÓN: https://goodreads-devf-aaron.herokuapp.com/docs/
//* URI DE LA API: https://goodreads-devf-aaron.herokuapp.com/api/v1/

// TRAER A LOS PAQUETES QUE ACABAMOS DE INSTALAR
const request = require ('request')

//TENER NUESTRO ENDPOINT
const URI = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/'

//? LISTA A TODOS LOS AUTORES (AUTHORS)
    const listAuthors = () => {
        request.get(URI, (error,response, body) => {
            if(response.statusCode === 200){
                const authors = JSON.parse(body)
                console.log(authors)
            }else {
                console.log(response.statusCode , response.statusMessages )
                          //  404              ,      NOT FOUND
            }
        })
    }


//? LISTAR UN AUTOR POR SU ID 
    const getAuthor = (id) => {
        request.get(URI+id+'/', (error, response, body) => {
            if(response.statusCode === 200){
                const author = JSON.parse(body)
                console.log(author)
            }else{
                console.log("ID NO VALIDO: ", response.statusCode , response.statusMessage)
            }                                   //  404           ,      NOT FOUND
        })
    }
    //getAuthor(14567)

//? CREAR UN AUTOR - USAMOS UN OBJETO CON INFORMACIÓN A CREAR Y PARA ELLO NECESITAMOS USAR UN FORMATO JSON  
    const createAuthor = (jsonData) => {
        const objConfig = {
            url: URI, //APARTADO PARA CREAR EL AUTOR /api/v1/authors/
            form: jsonData // ESTA ES MI DATA EN FORMATO JSON
        }

        request.post(objConfig, (error,response,body) => {
            if(response.statusCode === 201 ){
                const author = JSON.parse(body)
                console.log("AUTOR CREADO EXITOSAMENTE: " , author )
            }else{
                console.log(response.statusCode, response.statusMessage)
            }
        })
    }      

//? PARTIAL UPDATE 
    const patchAuthor = (id, jsonData) => {
        const objConfig = {
            url: URI+id+'/',
            form: jsonData
        } 

        request.patch(objConfig, (error,response,body) => {
            if(response.statusCode === 200){
                const author = JSON.parse(body)
                console.log(author)
            }else {
                console.log(response.statusCode , response.statusMessage)
                             //  404            ,      NOT FOUND
            }
        })

    }








module.exports = {
    listAuthors,
    getAuthor,
    createAuthor,
    patchAuthor
    }