//ARRAYS
//implement a function which takes an array as its input and remove all even elements from a given array

function removeEven(arr) {
    let odds = []
    for (let number of arr) {
        if (number % 2 != 0)
            odds.push(number)
    }
  return odds
}
console.log(removeEven([3, 2, 41, 3, 34]));


//using filter method
function removeEvenNumber(arr) {
    return arr.filter((value => (value % 2) != 0))
}
console.log(removeEvenNumber([3,2,41,3,34]));



//QUEUES
//Queues process elements in the order they were entered
//First In First Out
class Queue {
    constructor() {
      this.items = [];
    }
  
    addToQueue(element) {
      this.items.push(element);
    }
  
    removeFromQueue() {
      if (this.isEmpty()) {
        return "No elements";
      }
      return this.items.shift();
    }
  
    firstElementInQueue() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length == 0;
    }
  
    printQueue() {
      let str = "";
      for (var i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }

  function findBin(n) {
    let queue = new Queue();
    let binArr = [];
  
    for (let i = 1; i <= n; i++) {
      queue.addToQueue(i);
    }
  
    while (!queue.isEmpty()) {
      let num = queue.removeFromQueue();
      binArr.push(num.toString(2));
    }
  
    return binArr.join(", ");
  }

  console.log(findBin(5)); 

//   let testarr = [5, 'string', 6, true];
//   console.log(testarr);

  
  