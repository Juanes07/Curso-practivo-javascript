let descuento;

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100);
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const cupones =["code10","code20","code30"];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon  = document.getElementById("InputCoupon");
    const couponValue  = inputCoupon.value;
    let descuento;

    switch(couponValue){
        case "code10":
            descuento =10;
            break;
        case "code20":
            descuento = 20;
            break;
        case "code30":
            descuento =30;
            break;
        default:
            descuento = 0;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue,couponValue);
    const resultP = document.getElementById("ResultP");

    resultP.innerHTML ="El precio con descuento es: $" + precioConDescuento;
    
    

}








// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });