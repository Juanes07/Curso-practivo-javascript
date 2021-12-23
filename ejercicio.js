// crear una herramienta para calcular cuanto sera el valor a pagar total de un prestamo a x cuotas con un intereses mensual simple
function calcularPago(prestamo,interes,plazo){
    prestamo = parseInt(prestamo);
    plazo = parseInt(plazo);
    const interesMensual = prestamo * (interes/100); 
    const pagoTotal =  prestamo + (interesMensual * plazo);
    return pagoTotal;
}
function mostrarPagoTotal(){
    const inputPrestamo = document.getElementById("inputPrestamo");
    const valuePrestamo = inputPrestamo.value;

    const inputInteres = document.getElementById("inputInteres");
    const valueInteres = inputInteres.value;

    const inputPlazo = document.getElementById("inputPlazo");
    const valuePlazo = inputPlazo.value;

    const pagareTotal = calcularPago(valuePrestamo,valueInteres,valuePlazo);
    const resultPrestamo = document.getElementById("resultPrestamo");

    resultPrestamo.innerHTML = `Este es el valor a pagar al final del plazo mas los interes: $    ${pagareTotal}`;
}


