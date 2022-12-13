//EFECTO CAMBIO DE COLOR DE FONDO
//DECLARAMOS LAS VARIABLES Y SUS EVENT LISTENERS NECESARIOS PARA LA FUNCIÓN:

let colores = ["#00A8DA","#DA006A","#03DA00","#DAB900","#DA00B2","#DA0000"];
let clickCount = 0;

let selectorIzquierda = document.getElementById("selectorIzquierda");
    selectorIzquierda.addEventListener("click",cambiarColorIzquierda);
let selectorDerecha = document.getElementById("selectorDerecha");
    selectorDerecha.addEventListener("click", cambiarColorDerecha);
let body = document.getElementById("principal");


function cambiarColorIzquierda(){
    clickCount--;
    if(clickCount < 0){
        clickCount = colores.length;
    }
    body.style.background = colores[clickCount];
}
function cambiarColorDerecha(){
    clickCount++;
    if(clickCount >= colores.length){
        clickCount = 0;
    }
    body.style.background = colores[clickCount];
}

//CESTA DE LA COMPRA
//PRIMERO CREAMOS UN EVENT LISTENER PARA EL FORMULARIO

const formulario = document.getElementById("form-register");
let arrayProductos = new Array();
var productCount = 0;
const inputProducto = document.getElementsByClassName("controls");
function nuevoProductoAñadido(producto,cantidad){
    this.producto = producto;
    this.cantidad = cantidad;

}

const enviarProducto = (event) =>{
    event.preventDefault();
   
    productCount++;
    var producto = new nuevoProductoAñadido(event.target.producto.value,event.target.cantidad.value);                                      
    arrayProductos.push(producto);
    formulario.reset();
    return arrayProductos;
    return productCount;
}

let lista = document.getElementById("listaCompra");

function añadirProducto(){
let NuevaCasilla = document.createElement("tr");
    NuevaCasilla.classList.add("Productos");
let CasillaProducto = document.createElement("th");
let CasillaCantidad = document.createElement("th");
let newProduct = document.createTextNode(arrayProductos[productCount-1].producto);
let newCantidad = document.createTextNode(arrayProductos[productCount-1].cantidad);

CasillaProducto.appendChild(newProduct);
CasillaCantidad.appendChild(newCantidad);

NuevaCasilla.appendChild(CasillaProducto);
NuevaCasilla.appendChild(CasillaCantidad);
lista.appendChild(NuevaCasilla);
};

formulario.addEventListener("submit",enviarProducto);
formulario.addEventListener("submit",añadirProducto);




