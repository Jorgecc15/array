nombres=["francisco","Sergio","juana","mariana","jose","juan daniel","daniela","Mateo","Samuel","Ana","jorge","Nicolas","Gabriela","Daniel","Jacobo","Tomas","Sofia"]
edades=[]
for(let i=0;i<17;i++){
    do
    {
        edad=Number(prompt("ingrese la edad de  " + nombres[i]))
    }
    while( isNaN(edad) || edad<10 || edad>17)

}
suma= suma+edad[i]
promedio=suma/17
let contenido=document.querySelector("#informacion")
informacion.innerHTML= "el Promedio de las notas es "+ promedio