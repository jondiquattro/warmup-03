let LQClass = require('./stacks-queues');
let stack = new LQClass.StackClass();
let queue = new LQClass.QueueClass();


for(let i = 0; i<10; i++){
stack.push(i);
queue.queue(i);
}

console.log('\n')
console.log('Stack')
for(let i = 0; i<10; i++){
    stack.peak();
    stack.pop();
}
console.log('\n')
console.log('Queue')
for(let i = 0; i<10; i++){
    queue.peak();
    queue.dequeue();
}