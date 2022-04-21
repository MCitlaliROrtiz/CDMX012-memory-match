
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
let styleFirstCard=null;
console.log();

  
 //crear un nodo por cada item
function createNode(item) {
  let cardContainer=document.createElement("section");
  cardContainer.className="cardContainer";
  
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
   cardContainer.appendChild(card);
   cardContainer.appendChild(reverse);
    //evento a para girar tarjetas
    
   cardContainer.addEventListener("click",function() {
     /* necesito que  solo se puedan dar 2 clicks por turno
     que se guarde el item.id en una variable por cada click
     luego comparar si son iguales(match)
     si son iguales mantener visibility de reverse card en  hidden
     si no lo son aplicar visible
     e independiente a esto restablecer counter en 0 para el siguiente turno
     crear  una variable score que aumente uno cada vez que el match ocurra y 
     cuando score sea igual a 10   mostrar un aviso al jugador de que ha ganado
     tener en cuenta limpiar las variables de second y first card(igual que counter) */
    //empezar a contar clicks
    counter++;
    //primer click
    if(counter===1) {
     reverse.style.visibility="hidden";
     firstCard=item.id;
     styleFirstCard=reverse;
     console.log(styleFirstCard);
    
     } //segundo click
     else if (counter===2) {
       reverse.style.visibility="hidden";
      secondCard=item.id;
      console.log(firstCard);
   
        //match de id
      if(firstCard===secondCard){
         score++
         console.log("score",score);
        }
      //id no hacen match
      if(firstCard!==secondCard){
        reverse.style.visibility="hidden";
        styleFirstCard.style="visibility:hidden";
        setTimeout(()=>{reverse.style.visibility="visible"},2000);
        setTimeout(()=>{styleFirstCard.style.visibility="visible"},2000);
        }
        counter=0;
        if(score===10){
          console.log("si se ejecuta");
          let oldNodo=el.removeChild(cardContainer);
          console.log(oldNodo);
          let congratulatios=document.createElement("section");
          congratulatios.className="winner";
          let mensage=document.createElement("p");
          mensage.textContent="congratulations you win!!";
          congratulatios.appendChild(mensage);
          el.appendChild(congratulatios);
        }
      }
    
     
       
   
      
   
   });

   el.appendChild(cardContainer)
}

 random.forEach(createNode);
 

  el.className = 'App';
  

  return el;
};

export default App;
