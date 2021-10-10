/** 
 * Kata - https://www.codewars.com/kata/52cf02cd825aef67070008fa
 * Profile - https://www.codewars.com/users/RedondoX;
*/


const base = "~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? "

device.decode = function(w) {
  let result = '';

  outerPrime: for (let i = 0; i < w.length; i++) {
    if ('!@#$%^&*()_+-'.includes(w[i])) {
       result += w[i];
       continue;
    }

    let deviation = 2 * (2 ** i)

    for (let j = 1; j < base.length; j++) {
      let index = j * deviation

      if (index > base.length) {
        index = index % base.length
      } 

      if (index === base.length) {
        index = 1;
      }

      if (base[index] === w[i]) {
        result += base[j]
        continue outerPrime
      }
    }
  }

   return result
}
