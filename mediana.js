function calcularMediaAritmetica (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento; 
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// const lista1 = [
//     100,
//     200,
//     300,
//     40000000,
// ];




// const mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numero){
//     if(numero % 2 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }  
// }

// let mediana;

// if(esPar(lista1.length)){
//     const elemento1 = lista1[mitadLista1 -1];
//     const elemento2 = lista1[mitadLista1];
//      const promedioElemento1y2 = calcularMediaAritmetica([
//          elemento1,
//          elemento2,
//      ]);
//      mediana = promedioElemento1y2;

// } else {
//     mediana = lista1[mitadLista1];
// }

function calcularMediana (lista){


    const linstaOrdenada = lista.sort(function(a, b){return a - b});
   
    const mitadDeLALista = linstaOrdenada.length /2;
    

    if (linstaOrdenada.length % 2 === 0){
        //La base de datos tiene un punto central
        const valor1 = linstaOrdenada[mitadDeLALista-1];//(2
        const valor2 = linstaOrdenada[mitadDeLALista];
        let mediana = (valor1+valor2)/2;//(2

        return console.log(mediana);
    }else{
        //La base de datos no tiene mitad
        let mediana = linstaOrdenada[parseInt(mitadDeLALista)];//(2
        return console.log(mediana);
    }
}