/** 
 * Kata - https://www.codewars.com/kata/5296bc77afba8baa690002d7
 * Profile - https://www.codewars.com/users/RedondoX;
*/

function sudoku(puzzle) {   
    let square = [];                                                           // Квадрат 3x3 на поле
    let map = new Map();                                                       // Сохраняет в себе возможные для ячейки значения
    let count = 0;                                                             // Счетчик цикла пробега по полю
    let end = false;                            
      
    function res(resolvePuzzle) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) { 
          if ([0,3,6].includes(j))  {
              if ([0,3,6].includes(i)) {
                square = resolvePuzzle[i].slice(j,j+3).concat(resolvePuzzle[i+1].slice(j,j+3))
                                                      .concat(resolvePuzzle[i+2].slice(j,j+3));
              } else if ([1,4,7].includes(i)) {
                square = resolvePuzzle[i-1].slice(j,j+3).concat(resolvePuzzle[i].slice(j,j+3))
                                                        .concat(resolvePuzzle[i+1].slice(j,j+3));
              } else if ([2,5,8].includes(i)) {
                square = resolvePuzzle[i-2].slice(j,j+3).concat(resolvePuzzle[i-1].slice(j,j+3))
                                                        .concat(resolvePuzzle[i].slice(j,j+3));
              }
          }
  
          if (resolvePuzzle[i][j] !== 0) continue;
  
          let verticaline = resolvePuzzle.map(el => el[j])                     // ряд ячеек по вертикали
          
          // поиск нужного значения для записи в ячейку
          for (let k = 1; k < 10; k++) {
              
              if (square.includes(k) || resolvePuzzle[i].includes(k) || verticaline.includes(k)) continue; 
  
              if (!map.has(`${i}${j}`)) map.set(`${i}${j}`,[k]);
              else {
                  for (let h = 0; h < map.get(`${i}${j}`).length; h++) {
                      let el = map.get(`${i}${j}`)[h];
                      
                      if (square.includes(el) || resolvePuzzle[i].includes(el) || verticaline.includes(el)) {
                        map.get(`${i}${j}`).splice(h,1);
                        h--;
                      } 
  
                  } 
                  
             }
  
             if (count > 1 && map.get(`${i}${j}`).length == 1) {     
               resolvePuzzle[i][j] = map.get(`${i}${j}`)[0];                   //   Записываем цифру в ячейку, если больше нет других возможных значений для этой ячейки   
               square.push(map.get(`${i}${j}`)[0]);
             } else {
               if (!map.get(`${i}${j}`).includes(k)) map.get(`${i}${j}`).push(k);
             }             
          }
        }
      }
      return resolvePuzzle;
    }
  
    let result = res(puzzle);
   
    // повторяем проход по полю, пока не останется пустых ячеек
    while (!end) {
        count++;
        result = res(result)
        if (result.every(item => item.every(el => el !== 0))) end = true;
    }
    return result;
  }