//imprime en pantalla
console.log("Hola mundo, este dialogo se mostrara en la terminal de Nodejs");
//Operacion matematica
console.log(2*5);
//Esta linea nos dara error al ser un comando de frontend
//console.log(window);
//Imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global);
//Realizamos una funcion para imprimir cada segundo 'Hola nodejs'
setInterval(function() {
    console.log('hola nodejs');
},1000);