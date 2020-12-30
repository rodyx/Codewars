/** 
 * Kata - https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 * Profile - https://www.codewars.com/users/RedondoX;
*/

snail = function(arr) {
    if (arr[0].length == 0) return [];
    let res = [],
        answer = [];
    
    for (let i = 0; arr.length > 1; i++) {
       res.push(arr[0]);
       arr.splice(0,1);
       
       
       for (let j = 0; j < arr.length; j++) {
          res.push(arr[j][arr[j].length-1]);
          arr[j].splice(arr[j].length-1,1);
       }
  
       res.push(arr[arr.length-1].reverse());
       arr.splice(arr.length-1,1);
  
       for (let k = arr.length-1; k >= 0; k--) {
          res.push(arr[k][0]);
          arr[k].splice(0,1);
       }
       
        
   }
       for (let n = 0; n < res.length; n++) {
        if (Array.isArray(res[n])) {
           res[n].forEach(item => answer.push(item))
             continue;
        }
              answer.push(res[n])
      }
  
  
       if (arr.length > 0) answer.push(arr[0][0]);      
  
       return answer;  
  }