const comprarcontenido = document.getElementById("comprarcontenido");

const productos = [
    {
        id:1,
        nombre: "cocina",
        precio: 25000,
        descrip: "Ideal para comprender la organización y funcionalidad de todo eso indispensable en la cocina.",
        compra: "lo quiero",
        img: "https://ar.pinterest.com/pin/152418768630285423/",
    },
    {
        id:2,
        nombre: "Baño",
        precio: 15000,
        descrip: "Los mejores tips para la comodidad tuya y de tus invitados.",
        compra: "lo quiero",
    },
    {
        id:3,
        nombre: "Lavadero",
        precio: 18000,
        descrip: "Nada mas importante que un espacio motivador y ordenado para mantener la limpieza siempre.",
        compra: "lo quiero",
    },
    {
        id:4,
        nombre: "Living",
        precio: 35000,
        descrip: "El uso del living crea uniones mas fuerte con familia y amigos, aprovechemoslo!",
        compra: "lo quiero",
    },
    {
        id:5,
        nombre: "Exterior",
        precio: 22000,
        descrip: "Conectar con nuestra naturaleza es fundamental para nuestro bien estar.",
        compra: "lo quiero",
    },
    {
        id:6,
        nombre: "Puerta",
        precio: 15000,
        descrip: "There´s nothing like home, hagamos que la llegada a casa sea placentera.",
        compra: "lo quiero",
    },
    ]


const precio1 = 25000
const precio2 = 15000
const precio3 = 18000
const precio4 = 35000
const precio5 = 22000
const precio6 = 15000
const descu1 = 20

let preciofinal1 = precio1*(descu1/100)
console.log(precio1-preciofinal1)
let preciofinal2 = precio2*(descu1/100)
console.log(precio2-preciofinal2)
let preciofinal3 = precio3*(descu1/100)
console.log(precio3-preciofinal3)
let preciofinal4 = precio4*(descu1/100)
console.log(precio4-preciofinal4)
let preciofinal5 = precio5*(descu1/100)
console.log(precio5-preciofinal5)
let preciofinal6 = precio6*(descu1/100)
console.log(precio6-preciofinal6)

let carrito=[]

productos.forEach((items)=>{

    const comprar = document.createElement("button");
    comprar.classList.add('compra', 'comprar') 
    comprar.textcontent="lo quiero"
    comprar.addEventListener("click",agregar)
    
})









// function guardar(){

//     let valor=5000
//     let valor2=7200
//     valor=document.getElementById("value").value  
//     localStorage.setItem("valor_curso", valor)
//     localStorage.setItem("valor_curso", valor2)
//     localStorage.getItem("valor_curso", valor)
//     console.log(valor)
    
    
//     }
    
    
//     document.getElementById("guardar").addEventListener("click",guardar)
    
//     localStorage.clear()
//     localStorage.removeItem("valor_curso")