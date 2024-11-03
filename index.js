let imagenes=["atanagildo", "ataulfo", "ervigio", "leogivildo", "recesvinto", "sisebuto", "teodorico"];
let incognito="incognito";
let credito=100;
let premio=0;

for (let j=0; j<4; j++){
    let div=document.createElement("div");
    div.classList.add("linea" + j);
    tabla1.appendChild(div);
    for (let i=0; i<3; i++){
        document.querySelector(".linea" + j).insertAdjacentHTML("beforeend", `<img src="img/rey_${imagenes[j]}.png">`);
    }
    document.querySelector(".linea" + j).insertAdjacentHTML("beforeend", `<p class="cantidad">${(j+1)*100}</p>`);
    document.querySelector(".linea" + j).style.display="flex";
}
for (let j=4; j<imagenes.length; j++){
    let div=document.createElement("div");
    div.classList.add("linea" + j);
    tabla2.appendChild(div);
    for (let i=0; i<3; i++){
        document.querySelector(".linea" + j).insertAdjacentHTML("beforeend", `<img src="img/rey_${imagenes[j]}.png">`);
    }
    document.querySelector(".linea" + j).insertAdjacentHTML("beforeend", `<p class="cantidad">${(j+1)*100}</p>`);
    document.querySelector(".linea" + j).style.display="flex";
}
document.querySelector("#tabla2").insertAdjacentHTML("beforeend",`<div id="credito">Crédito ${credito}</div>`);
document.querySelector("#tabla2").insertAdjacentHTML("beforeend",`<div id="premio">Premio ${premio}</div>`);
document.querySelector("#botonJugar").addEventListener("click", jugar);

document.querySelector("#ventana1").innerHTML=`<img src="img/rey_${incognito}.png">`;
document.querySelector("#ventana2").innerHTML=`<img src="img/rey_${incognito}.png">`;
document.querySelector("#ventana3").innerHTML=`<img src="img/rey_${incognito}.png">`;

function jugar(){
    let imagen1=Math.floor(Math.random()*imagenes.length);
    let imagen2=Math.floor(Math.random()*imagenes.length);
    let imagen3=Math.floor(Math.random()*imagenes.length);
    if(imagen1 == imagen2 && imagen2 == imagen3){
        switch (imagen1){
            case 0:premio=100
            break;
            case 1:premio=200
            break
            case 2:premio=300
            break
            case 3:premio=400
            break
            case 4:premio=500
            break
            case 5:premio=600
            break
            case 6:premio=700
            break
            default: premio=0;
        };
        credito=credito+premio;
    }else{
        premio=0;
    }
    credito--;
    
    mostrar(credito, premio);
    
    document.querySelector("#ventana1").innerHTML=`<img src="img/rey_${imagenes[imagen1]}.png">`;
    document.querySelector("#ventana2").innerHTML=`<img src="img/rey_${imagenes[imagen2]}.png">`;
    document.querySelector("#ventana3").innerHTML=`<img src="img/rey_${imagenes[imagen3]}.png">`;
}
function mostrar(credito, premio){
    document.querySelector("#credito").innerHTML=`<div>Crédito ${credito}</div>`;
    document.querySelector("#premio").innerHTML=`<div>Premio ${premio}</div>`;
}