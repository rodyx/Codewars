/** 
 * Kata - https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7
 * Profile - https://www.codewars.com/users/RedondoX;
*/


function check_ships(field) {
    let shipsarr = [];

   for (let i = 0; i < field.length; i++) {
      nextPrime: for (let j = 0; j < field.length; j++) {
         if (field[i][j] == 0) continue;

         if (field[i][j+1] == 1) {
         let ship = 1;
         for (let k = j; k < field.length; k++) {
             if (field[i][k + 1] == 1) {
               ship++ ;
               field[i][k] = 0;
             }
             else {
                    shipsarr.push(ship);
                    continue nextPrime;
                  }
          }
        }
      }
    }
   return shipsarr;
}

function validateBattlefield(field) {
   let sum = 0; 
   let rightfield = [];

   for (let i = 0; i < field.length; i++) {
      let arr = [];
      for (let j = 0; j < field.length; j++) {
         arr.push(field[j][i]);
         sum += field[j][i];  
      }
     rightfield.push(arr);
   }

   if (sum != 20) return false;

   for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < 8; j++) {
          if (field[i][j] == 0) continue;
   
             if (field[i-1] != undefined) {
          if (field[i-1][j-1] == 1) return false;
          if (field[i-1][j+1] == 1) return false;
             }

             if (field[i+1] != undefined) {
          if (field[i+1][j-1] == 1) return false;
          if (field[i+1][j+1] == 1) return false;
             }
      }
   }
   let shipscount = check_ships(rightfield).concat(check_ships(field));
   shipscount.sort((a,b) => a > b ? 1: -1)
   return shipscount.join("") == '222334'
}