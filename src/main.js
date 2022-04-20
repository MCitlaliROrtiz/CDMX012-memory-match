import App from './components/App.js';

const button=document.getElementById('start');
let container=document.getElementById('root');
const appView=App();

button.addEventListener('click',function(){
    container.appendChild(appView);
    button.style.display="none";
})