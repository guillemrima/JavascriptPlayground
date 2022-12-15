//PROYECTO EFECTO CAMBIO DE COLOR DE FONDO
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
        clickCount = colores.length -1;
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

//PROYECTO REGISTRO DE PROYECTOS
const formulario = document.getElementById("form-register");
let arrayProductos = new Array();
var productCount = 0;
const inputProducto = document.getElementById("producto");
const inputCantidad = document.getElementById("cantidad");
class nuevoProductoAñadido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;

    }
}

const enviarProducto = (event) =>{
    event.preventDefault();
    if(event.target.producto.value == '' || event.target.cantidad.value == ''){
        inputProducto.style.borderColor = "red";
        inputCantidad.style.borderColor = "red";
    }
    else{
        inputProducto.style.borderColor = "#24303c";
        inputCantidad.style.borderColor = "#24303c";
    productCount++;
    var producto = new nuevoProductoAñadido(event.target.producto.value,event.target.cantidad.value);                                      
    arrayProductos.push(producto);
    formulario.reset();
    añadirProducto();
}
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




//PROYECTO DE CALCULADORA

const boton0 = document.getElementById("boton0");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const botonSumar = document.getElementById("boton+");
const botonRestar = document.getElementById("boton-");
const botonMultiplicar = document.getElementById("botonX");
const botonDividir = document.getElementById("boton÷");
const botonPorcentaje = document.getElementById("boton%");
const botonPunto = document.getElementById("boton.");
const botonRestart = document.getElementById("botonAC");
const BotonAbrirParentesis = document.getElementById("boton(");
const botonCerrarParentesis = document.getElementById("boton)");
const botonResultado = document.getElementById("boton=");
let pantallaCalculadora = document.getElementById("pantallaCalculadora");
let PantallaOperacion = document.getElementById("numeroPantallaCalculadora");
let PantallaResultado = document.createElement("p");
let arrayCalculo = new Array();
let contador = 0;
var operacion ="";
const RecopilarVariables = (evento) => {
   if(evento.target.value != "AC")
   {
        arrayCalculo.push(evento.target.value);
        operacion = arrayCalculo.join("");
        var operacionPantalla = document.createTextNode(arrayCalculo[contador]); 
        PantallaOperacion.appendChild(operacionPantalla);
        console.log(operacion)
        contador++
    }
   else{
    //HAY QUE ARREGLAR EL BOTON AC
    arrayCalculo = new Array();
   }
}
const RealizarCalculo = () =>{
    var resultado = document.createTextNode(eval(operacion));
    PantallaResultado.appendChild(resultado);
    pantallaCalculadora.replaceChild(PantallaResultado,PantallaOperacion)
}

boton0.addEventListener("click",RecopilarVariables);
boton1.addEventListener("click",RecopilarVariables);
boton2.addEventListener("click",RecopilarVariables);
boton3.addEventListener("click",RecopilarVariables);
boton4.addEventListener("click",RecopilarVariables);
boton5.addEventListener("click",RecopilarVariables);
boton6.addEventListener("click",RecopilarVariables);
boton7.addEventListener("click",RecopilarVariables);
boton8.addEventListener("click",RecopilarVariables);
boton9.addEventListener("click",RecopilarVariables);
botonSumar.addEventListener("click",RecopilarVariables);
botonRestar.addEventListener("click",RecopilarVariables);
botonMultiplicar.addEventListener("click",RecopilarVariables);
botonDividir.addEventListener("click",RecopilarVariables);
botonPorcentaje.addEventListener("click",RecopilarVariables);
botonPunto.addEventListener("click",RecopilarVariables);
botonRestart.addEventListener("click",RecopilarVariables);
BotonAbrirParentesis.addEventListener("click",RecopilarVariables);
botonCerrarParentesis.addEventListener("click",RecopilarVariables);
botonResultado.addEventListener("click",RealizarCalculo);



//PROYECTO DEL JUEGO PIEDRA, PAPEL O TIJERAS

//DEFINIMOS LAS VARIABLES
let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijeras = document.getElementById("tijeras");
let imagenObjetoIA = document.getElementById("imagenObjetoIA");
let imagenObjetoJugador = document.getElementById("imagenObjetoJugador");
let mensajeGanador = document.getElementById("mensajeResultadoGanador");
let mensajePerdedor = document.getElementById("mensajeResultadoPerdedor");
let mensajeEmpate = document.getElementById("mensajeResultadoEmpate");
let eleccionJugador ="";
let arrayEleccionIA = ["piedra","papel","tijeras"];
let numeroAleatorioEleccionIA = Number;
let eleccionIA = "";
let puntuacionIA = document.getElementById("puntuacionIA");
let puntuacionJugador = document.getElementById("puntuacionJugador");
let puntosIA = document.createTextNode("0");
let puntosJugador = (document.createTextNode("0"));
puntuacionIA.appendChild(puntosIA);
console.log(puntosIA);
puntuacionJugador.appendChild(puntosJugador);
//DEFINIMOS LA FUNCION PARA ELEGIR LA ELECCION DEL JUGADOR
const funcionEleccionJugador = (event) =>{
    eleccionJugador = event.target.value;
    imagenObjetoJugador.src = "./img/PiedraPapelTijera/"+eleccionJugador+".png";

    funcionEleccionIA();
}
const funcionEleccionIA = () =>{
    numeroAleatorioEleccionIA = Math.floor(Math.random() * (3 - 0) + 0);
    eleccionIA = arrayEleccionIA[numeroAleatorioEleccionIA];
    imagenObjetoIA.src = "./img/PiedraPapelTijera/"+eleccionIA+".png";

    funcionResultado();
}
const funcionResultado = () => {
    if(eleccionJugador == eleccionIA){console.log("¡Empate!"); mensajeEmpate.style.display = "flex"; mensajePerdedor.style.display = "none"; mensajeGanador.style.display = "flex"}
    else if(eleccionJugador == "tijeras" && eleccionIA == "piedra"){console.log("¡Has perdido!"); mensajePerdedor.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajeGanador.style.display = "none"}
    else if(eleccionJugador == "tijeras" && eleccionIA == "papel"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "tijeras" && eleccionJugador == "piedra"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "tijeras" && eleccionJugador == "papel"){console.log("¡Has perdido!"); mensajePerdedor.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajeGanador.style.display = "none"}
    else if(eleccionJugador == "papel" && eleccionIA == "piedra"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionJugador == "papel" && eleccionIA == "tijeras"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "papel" && eleccionJugador == "tijeras"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "papel" && eleccionJugador == "piedra"){console.log("¡Has perdido!"); mensajePerdedor.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajeGanador.style.display = "none"}
    else if(eleccionJugador == "piedra" && eleccionIA == "papel"){console.log("¡Has perdido!"); mensajePerdedor.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajeGanador.style.display = "none"}
    else if(eleccionJugador == "piedra" && eleccionIA == "tijeras"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "piedra" && eleccionJugador == "papel"){console.log("¡Has ganado!"); mensajeGanador.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajePerdedor.style.display = "none"}
    else if(eleccionIA == "piedra" && eleccionJugador == "tijeras"){console.log("¡Has perdido!"); mensajePerdedor.style.display = "flex"; mensajeEmpate.style.display = "none"; mensajeGanador.style.display = "none"}
}
//DECLARAMOS LOS EVENT LISTENERS
piedra.addEventListener("click",funcionEleccionJugador);
papel.addEventListener("click",funcionEleccionJugador);
tijeras.addEventListener("click",funcionEleccionJugador);

