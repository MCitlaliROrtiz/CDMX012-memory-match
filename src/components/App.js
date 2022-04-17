
import data from '../data/webdev/webdev.js';
import { shuffle } from '../logic.js';

  const App = () => {

    const el = document.createElement('section');
    const webData=data.items
const duplicateData=webData.concat(webData);
let counter=0;
let score=0;
let firstCard=null;
let secondCard=null;
let random=shuffle(duplicateData);
console.log();
/*function rotateCard() {
  console.log("funciona?");
}*/
  
 //crear un nodo por cada item
function createNode(item) {
  let container=document.createElement("section");
  container.className="container";
  
  //creacion de nodo card y sus elementos
  let card=document.createElement("section");
   card.style.backgroundColor=item.bgColor;
   //console.log(card.style);
   card.className="cardStyle"
   let image=document.createElement("img");
   image.src=item.image;
   let name=document.createElement("p");
   name.textContent=item.id;
   card.appendChild(name);
   card.appendChild(image);
   //creacion del nodo reverse y sus elementos
   let reverse=document.createElement("section");
   reverse.className="cardReverse";
   //insercion de nodos card y reverse en nodo el
   container.appendChild(card);
   container.appendChild(reverse);
    //evento a para girar tarjetas
   container.addEventListener("click",function() {
     /* necesito que  solo se puedan dar 2 clicks por turno
     que se guarde el item.id en una variable por cada click
     luego comparar si son iguales(match)
     si son iguales mantener visibility de reverse card en  hidden
     si no lo son aplicar visible
     e independiente a esto restablecer counter en 0 para el siguiente turno
     crear  una variable score que aumente uno cada vez que el match ocurra y 
     cuando score sea igual a 10   mostrar un aviso al jugador de que ha ganado
     tener en cuenta limpiar las variables de second y first card(igual que counter) */
     counter++;
    if(counter===1&&counter===2) {
     
      firstCard=item.id;
      secondCard=item.id;
     if(firstCard===secondCard){
       score++
       reverse.style.visibility="hidden";
     }
     else{
      reverse.style.visibility="visible";
     }
                                                          
     } 
    
      
    /*  ;
     }){
     
       score++;
       console.log("sirve");

     }e
      
     }
   else if(counter>2){
    reverse.style.visibility="visible";}
  })*/
  
   el.appendChild(container);
}

 random.forEach(createNode);

 

  el.className = 'App';
  

  return el;
};

export default App;
