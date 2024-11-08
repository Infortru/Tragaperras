let imagenes=["atanagildo", "ataulfo", "ervigio", "leogivildo", "recesvinto", "sisebuto", "teodorico"];
let incognito="incognito";
let credito=100;
let premio=0;
let avances=0;
let imagen1, imagen2, imagen3;
let ventana1=document.querySelector("#ventana1");
let ventana2=document.querySelector("#ventana2");
let ventana3=document.querySelector("#ventana3");

/*****Creación de las tabla de premios y displays*****/
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
document.querySelector("#tabla2").insertAdjacentHTML("beforeend",`<div id="avances">Avances ${avances}</div>`);
document.querySelector("#botonJugar").addEventListener("click", jugar);

ventana1.innerHTML=`<img src="img/rey_${incognito}.png">`;
ventana2.innerHTML=`<img src="img/rey_${incognito}.png">`;
ventana3.innerHTML=`<img src="img/rey_${incognito}.png">`;

/*****Estas funciones realizan el juego de avances*****/
function avance1(){
    
    avances--;
    if(avances>=0){     //Comprueba que el número de avances es mayor que 0
        document.querySelector("#boton1").addEventListener("click", avance1);
        document.querySelector("#avances").innerHTML=`Avances ${avances}`;
        if(imagen1==6){
            imagen1=0    
            }else{
                imagen1=imagen1+1;
        }       
        ventana1.innerHTML=`<img src="img/rey_${imagenes[imagen1]}.png">`;  //Cambia la imagen de la ventana
        imagen2=imagen2; imagen3=imagen3;
    }
    premios();
}
function avance2(){

    avances--;
    if(avances>=0){     //Comprueba que el número de avances es mayor que 0
        document.querySelector("#boton2").addEventListener("click", avance2);
        document.querySelector("#avances").innerHTML=`<div>Avances ${avances}</div>`;
        if(imagen2==6){
            imagen2=0 
        }else{
            imagen2=imagen2+1;
        }       
        ventana2.innerHTML=`<img src="img/rey_${imagenes[imagen2]}.png">`;  //Cambia la imagen de la ventana
        imagen1=imagen1; imagen3=imagen3;
    }
    premios();
}
function avance3(){

    avances--;
    if(avances>=0){     //Comprueba que el número de avances es mayor que 0
        document.querySelector("#boton3").addEventListener("click", avance3);
        document.querySelector("#avances").innerHTML=`<div>Avances ${avances}</div>`;
        if(imagen3==6){
            imagen3=0
            
        }else{
            imagen3=imagen3+1;
        }
    }
    ventana3.innerHTML=`<img src="img/rey_${imagenes[imagen3]}.png">`;  //Cambia la imagen de la ventana
    imagen2=imagen2; imagen1=imagen1;
    premios();
}

/*****Función del juego principal*****/
function jugar(){
    imagen1=Math.floor(Math.random()*imagenes.length);
    imagen2=Math.floor(Math.random()*imagenes.length);
    imagen3=Math.floor(Math.random()*imagenes.length);
    //Muestra las imágenes en las ventanas
    ventana1.innerHTML=`<img src="img/rey_${imagenes[imagen1]}.png">`;
    ventana2.innerHTML=`<img src="img/rey_${imagenes[imagen2]}.png">`;
    ventana3.innerHTML=`<img src="img/rey_${imagenes[imagen3]}.png">`;
    //Resta los créditos
    credito--;
    //Llama a la función que gestiona los premios
    premios();
    //Genera los avances
    let aleatorio=Math.floor(Math.random()*5);
    avances=Math.floor(Math.random()*5);
    if(aleatorio==avances){
        avance1(); avance2(); avance3();
    } 
}
function premios(){
    //Si las 3 imágenes son iguales ñade el premio correspondiente al crédito restante
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
    mostrar(credito, premio);
}
function mostrar(credito, premio){
    document.querySelector("#credito").innerHTML=`Crédito ${credito}`;
    document.querySelector("#premio").innerHTML=`Premio ${premio}`;
}

