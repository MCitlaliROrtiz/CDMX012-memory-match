
import data from '../data/webdev/webdev.js';
import { shuffle } from '../logic.js';

  const App = () => {

    const el = document.createElement('section');
    const webData=data.items
const duplicateData=webData.concat(webData);
let counter=0;
let random=shuffle(duplicateData);

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
     counter++;
     if(counter===1) {
      reverse.style.visibility="hidden";
      let firstCard=item.id;
     } 
    if(counter===2){
      reverse.style.visibility="hidden";
      let secondCard=item.id;
     }
   if(counter>2){
    reverse.style.visibility="visible";}
  })
   el.appendChild(container);
}

 random.forEach(createNode);

 

  el.className = 'App';
  

  return el;
};

export default App;
