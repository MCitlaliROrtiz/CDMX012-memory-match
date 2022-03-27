/*export function shuffle(arr) {   
    var i,                                                                                              
        j,                                                    //En esta asignacion j representa a el numero aleatorio que se usa para barajar el array
        temp;                                                 //Temp representa un valor temporal de la posicion de indices,eso evita que tome ese numero
    for (i = arr.length - 1; i > 0; i--) {                    //como un indice elegible
        j = Math.floor(Math.random() * (i + 1));           //Math.random solo entrega un numero entero entre 0 y 1 por lo cual la expresion
        temp = arr[i];                                     //(Math.random() * (i + 1)) se refiere a que ese 0 o ese 1
        arr[i] = arr[j];                                   // se va a multiplicar por el numero de indice en el que este mas 1(esto debido a que 
        arr[j] = temp;                                     //en un array el primer indice  es 0
    }
    return arr;    
};*/                                                     //en esta funcion tambien se guarda como parte de la variable para el indice la longitud del array
export function shuffle(arr) {                          //en este punto de la funcion la variable i=20,pero de sus valores internos arr.length inicia con un valor de 20,
    let i = arr.length, j, temp;                        //j inicia con un valor undefined,temp tambien es undefined         
    while(--i!= 0){                                    //el ciclo se va a ejecutar mientras el indice sea mayor a 0 para ese momento todas las posiciones deben estar mezcladas 
        j = Math.floor(Math.random()*(i+1));             //en la primera vuelta de ciclo i= 19,arr.length=20,j=5;temp= object(al ser una variable temporal solo );
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
      return arr;
    }                                                             
                                                                
                                               
                                                        
   
  

                                                                             

                                                                            