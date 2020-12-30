/** 
 * Kata - https://www.codewars.com/kata/51fda2d95d6efda45e00004e
 * Profile - https://www.codewars.com/users/RedondoX;
*/

const user_ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];

class User {
   constructor() {
     this.rank = user_ranks[0];
     this.progress = 0;
   }

   incProgress(task_level) {
     if (!(user_ranks.includes(task_level))) throw new error;
     let lvlup = 0;
     let points = 0;
     
     if (this.rank < task_level) { 
        points = Math.abs(Math.abs(user_ranks.indexOf(this.rank)) - Math.abs(user_ranks.indexOf(task_level)));
        points = points**2 * 10;
        this.progress += points;
     } else if (user_ranks.indexOf(this.rank) == user_ranks.indexOf(task_level)) {
        points += 3;
        if (this.rank < 8) this.progress += points;
     } else if (user_ranks.indexOf(this.rank) == user_ranks.indexOf(task_level) + 1) {
        points += 1;
        if (this.rank < 8) this.progress += points;
     }

     if (this.progress >= 100) {
        lvlup = Math.floor(this.progress / 100);
        
        this.rank = user_ranks[user_ranks.indexOf(this.rank) + lvlup] || user_ranks[15];

        this.rank < 8  ? this.progress %= 100: this.progress = 0;
     }
   }
}