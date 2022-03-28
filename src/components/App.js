
import data from '../data/webdev/webdev.js';
import { shuffle } from '../logic.js';

const webData=data.items
const duplicateData=webData.concat(webData);

let random=shuffle(duplicateData);
  
 
const App = () => {
  const el = document.createElement('section');

  el.className = 'App';
  el.textContent = '';

  return el;
};

export default App;
