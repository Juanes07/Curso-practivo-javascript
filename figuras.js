// codigo cuadrado
    console.group("Cuadrados");

    function perimetroCuadrado(lado) {
    return lado * 4;
} 
    function areaCuadrado (lado) {
    return lado * lado;
} 
    console.groupEnd();
// codigo triangulo
    console.group("Triangulos");

    function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
    function areaTriangulo (base, altura){
    return (base * altura)/2;
}

  console.groupEnd();

  // COdigo del circulo
  console.group("Circulos");
  // radio
    const radioCirculo = 4;
    console.log("El radio del circulo es: " + radioCirculo + "cm");
  // diametro
    function diametroCirculo (radio){
        return radio *2;
    } 

  // PI
    const PI = Math.PI;
    console.log("Pi es " + PI + "cm");
  //Circunferencia
    function perimetroCirculo (radio){
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
  //Area
    function areaCirculo(radio){
      return (radio * radio) * PI;

  }  
  console.groupEnd();

// Aqui interactamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriandulo(){
    const input = document.getElementById("inputTriangulo");
    const value = input.value;
    const perimetroT =perimetroTriangulo(value,value,value);
    alert(perimetroT);
}

function calcularAreaTriangulo(){
<<<<<<< HEAD
    const inputAltura = document.getElementById("inputTrianguloAltura");
    const inputBase = duocument.getElementById("inputTrianguloBase");
    const valueAl = input.valueAl;
    const valueBa = input.valueBa;
    const areaC = areaCirculo(value);
    alert(areaC);
}

function validarTriangulo(lado1,lado2,base){
  if(lado1 == lado2){
      console.log("si es un triangulo isoceles");
      return console.log(Math.sqrt((lado1*lado2)/((base*base)/4))); 
  } else {
    console.log("eso no es un isoceles");
  }
=======
  const input = document.getElementById("inputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert("el perimetro del circulo es: " + perimetro);
>>>>>>> 0760bcb9830d5ae676ee3aa7081d106baafb143d
}
