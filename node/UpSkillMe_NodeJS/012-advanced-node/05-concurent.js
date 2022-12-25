/**
 * Notes on the course
 * UpSkillMe_Node.js. Node.js: Essential Training
 * Completed by Arkadii Semenov on 2022.12.25
 * 
 * If we need to run multiple and complicated sets of Promises in parallel,
 * we can use/implement something like Queue for Promises.
 * 
 * Further reading:
 * So, the run function is actually bugged.
 * We have no guarantee that the Promise
 * that was the first one in the array of running Promises
 * is the one that needs to be moved to the array of completed Promises
 * as completed.
 * 
 * Imagine that we have delay(2) and delay(1).
 * Delay(2) lands in the running list, then delay(1)
 * lands in the running list. running = [delay(2), delay(1)];
 * delay(1) executes faster and we call 'this.running.shift()'
 * and removed delay(2) from the list, though it has not completed yet.
 * 
 * (2022-12-25 Arkadii)
 * I fixed the bug by changing the running list to a Map.
 * */

var delay = (seconds) => new Promise((resolves) => {
  setTimeout(() => {resolves()}, seconds*1000);
});



class PromiseQueue {
  constructor(promises=[], concurrentCount=1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = new Map();
    this.complete = [];
    this.counter = 0;
  }

/**
 * Example:
 * let user = {
 *   name: "John",
 *   surname: "Smith",
 *   get fullName() {
 *     return `${this.name} ${this.surname}`;
 *   }
 * };
 * alert(user.fullName); // John Smith
 * 
 * Getters and setters would actually replace
 * the standard functionality of variables with functions
 */
  get runAnother() {
    return (this.running.size < this.concurrent) && this.todo.length;
  }

  graphTasks() {
    const { todo, running, complete } = this;
    console.log(`
todo:     [${'X'.repeat(todo.length)}]
running:  [${'X'.repeat(running.size)}]
complete: [${'X'.repeat(complete.length)}]
    `);
  }

  run() {
    while (this.runAnother) {
      const promise = this.todo.shift();
      const cur_index = this.counter++;

      promise.then(() => {
        this.complete.push(this.running.get(cur_index));
        this.running.delete(cur_index);
        this.graphTasks();
        this.run();
      })
      this.running.set(cur_index, promise);
    }
  }
}

function main_tasks() {
  var tasks = [
    delay(4),
    delay(6),
    delay(4),
    delay(3),
    delay(5),
    delay(7),
    delay(9),
    delay(10),
    delay(3),
    delay(5)
  ];
  const q = new PromiseQueue(tasks, 2);
  q.run();
}

main_tasks();