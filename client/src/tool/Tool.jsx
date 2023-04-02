export function orderMax(array){
    return array.map(e=>e).sort(function (a, b) {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        
        return 0;
      })

}
export function orderMin(array){
    return array.map(e=>e).sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        
        return 0;
      })

}
export function orderFuerzaMax(array){
    return array.map(e=>e).sort(function (a, b) {
            
        if (a.stats[1]['value'] < b.stats[1]['value'] ) {
          
          
          return -1;
        }
        if (a.stats[1]['value']  > b.stats[1]['value'] ) {
          return 1;
        }
        
        return 0;
      })

}
export function orderFuerzaMin(array){
    return array.map(e=>e).sort(function (a, b) {
          
        if (a.stats[1]['value'] > b.stats[1]['value'] ) {
          
          
          return -1;
        }
        if (a.stats[1]['value']  < b.stats[1]['value'] ) {
          return 1;
        }
        
        return 0;
      })

}
export function searchName(array ,name){
  const serach = array.filter(pokemon => pokemon.name===name)
  if(serach){return serach}
  else{alert(`no se encuentra con el nombre: ${name}  `)}
 
        

}