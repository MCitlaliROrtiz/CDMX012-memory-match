//Funcion para barajar la data
export function shuffle(data) {                          
    let i = data.length, j, temp;                        
    while(--i!= 0){                                     
        j = Math.floor(Math.random()*(i+1));           
        temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
      return data;
    }                                                             
                                                                
                                               
                                                        
   
  

                                                                             

                                                                            