/** 
 * Kata - https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0
 * Profile - https://www.codewars.com/users/RedondoX;
*/


function whoIsNext(names, r)  {
  if (r < 6) return (names[r-1]);
  let count = 1;

  for (let x = 1; x < r; ) {
    x = x + count * names.length;
    count *= 2;
        
    if (x <= r && x + count * names.length > r) {
            
      for (let i = 0; i < names.length; i++) {
        if (x + count < r) {
          x += count;
          continue;
        }
        
        if (x + count > r) return names[i]
        if (x == r) return names[i]
        if (x + count == r) return names[i+1]
            
      }
    }
  }
}
  