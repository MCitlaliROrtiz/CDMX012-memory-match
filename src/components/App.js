
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
    //empezar a contar clicks
    counter++;
    //primer click
    if(counter===1) {
     reverse.style.visibility="hidden";
     firstCard=item.id;
     styleFirstCard=reverse;
    
    
     } //segundo click
     else if (counter===2) {
       reverse.style.visibility="hidden";
      secondCard=item.id;
      
   
        //match de id
      if(firstCard===secondCard){
         score++
         
        }
      //id no hacen match
      if(firstCard!==secondCard){
        reverse.style.visibility="hidden";
        styleFirstCard.style="visibility:hidden";
        setTimeout(()=>{reverse.style.visibility="visible"},1000);
        setTimeout(()=>{styleFirstCard.style.visibility="visible"},1000);
        }
        counter=0;
        if(score===10){
          
          el.removeChild(cardContainer);
         
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