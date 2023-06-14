const precio1= 28000
const precio2=300000
const descu1=20
const descu2=15

let preciofinal1= precio1*(descu1/100)
console.log(precio1-preciofinal1)
let preciofinal2= precio2*(descu2/100)
console.log(precio2-preciofinal2)
let preciofinal3= precio1*(descu2/100)
console.log(precio1-preciofinal3)
let preciofinal4= precio2*(descu1/100)
console.log(precio2-preciofinal4)


function guardar(){

    let valor=5000
    let valor2=7200
    valor=document.getElementById("value").value  
    localStorage.setItem("valor_curso", valor)
    localStorage.setItem("valor_curso", valor2)
    localStorage.getItem("valor_curso", valor)
    console.log(valor)
    
    
    }
    
    
    document.getElementById("guardar").addEventListener("click",guardar)
    
    localStorage.clear()
    localStorage.removeItem("valor_curso")