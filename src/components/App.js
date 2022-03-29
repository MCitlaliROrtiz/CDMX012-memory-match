
import data from '../data/webdev/webdev.js';
import { shuffle } from '../logic.js';

  const App = () => {

    const el = document.createElement('section');
    const webData=data.items

const duplicateData=webData.concat(webData);

let random=shuffle(duplicateData);
  
 //crear un nodo por cada item
function createNode(item) {
  let card=document.createElement("section");
  //console.log(item);
  card.className="cardStyle"
   let image=document.createElement("img");
   image.src=item.image;
   card.appendChild(image);
   el.appendChild(card);
}

 random.forEach(createNode);

 

  el.className = 'App';
  

  return el;
};

export default App;
