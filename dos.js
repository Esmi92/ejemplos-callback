// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y
//      un callback. La función debe retornar como
//       resultado, mediante el callback, 
//       cual es el tipo de dato de la
//        variable ingresada e imprimir su contenido.

function dos(callback,x){
callback(x)
}

dos((x)=>{
console.log(typeof x)
console.log(x)
},'pato')




