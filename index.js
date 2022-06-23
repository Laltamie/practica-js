
let saludoInicial = alert("Bienvenido! Gracias por visitar Gemini!")
prompt(seleccionProducto());
prompt(calcularTotal());
let saludosFinal = alert("Muchas gracias por comprar en Gemini!!");





function seleccionProducto(){
    let seleccionProducto = prompt('Los prodcutos disponibles son los siguientes: Calza (codigo 0) Top (codigo 1) buzo (codigo 2) Ingrese el codigo del producto que desea adquirir. Presione ESC para salir');
    return seleccionProducto;
}

function calcularTotal(){
    let opcionSeleccionada = seleccionProducto();
    while(opcionSeleccionada !== "ESC"){ 
        if(!isNaN(opcionSeleccionada !== "")){ 
            let productoCantidad = parseInt(prompt("Ingrese la cantidad de producto"));
                switch(opcionSeleccionada){
                    case 0: 
                        const PRECIO0 = 3500;
                        let total0 = PRECIO0 * productoCantidad;
                        break;
                    case 1:
                        const PRECIO1 = 2000;
                        let total1 = PRECIO1 * productoCantidad;
                        break;
                    case 2:
                        const PRECIO2 = 5200; 
                        let total2 = PRECIO2 * productoCantidad;
                        break;
                    default:
                        alert('Opción no válida');
                        break;
                }
                        
            }else{
                alert('Seleccione una opción válida');
            }
            opcionSeleccionada = calcularTotal();
            alert(calcularTotal());  
    }      
}












