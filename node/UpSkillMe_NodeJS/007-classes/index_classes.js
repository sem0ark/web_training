
class Task {
    constructor(name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTask(id) {
        return this.tasks[id];
    }

    createTask() {
        throw new Error('method \'createTask\' is not defined');
    }

    changeType() {
        throw new Error('method \'changeType\' is not defined');
    }

}

class User extends Guest{
    constructor(tasks, getTask) {
        super(tasks, getTask);
    }

    createTask(task) {
        this.tasks.push(task);
    }

    changeType() {
        throw new Error('method \'changeType\' is not defined');
    }
}

class Admin {
    constructor(people) {
        this.people = people;
    }

    changeType(id) {
        if(this.people[id] instanceof User) {
            this.people[id] = new Guest(this.people[id].tasks);
        } else if(this.people[id] instanceof Guest) {
            this.people[id] = new User(this.people[id].tasks);
        }
    }

    getArray() {
        return this.people;
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;
