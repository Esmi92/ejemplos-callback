// console.info("info");
// console.error("error");
// console.warn("warn");
// console.log("log");

//1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

function showInfo(x){
x()
}

showInfo(() => {
    console.log('literal lo que hizo Raul')
})