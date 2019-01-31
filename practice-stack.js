let LQClass = require('./stacks-queues');
let stack = new LQClass.StackClass();
let queue = new LQClass.QueueClass();


for(let i = 0; i<10; i++){
stack.push(i);
queue.queue(i);
}

console.log('\n')
console.log('Stack')

while(stack.length){
    console.log(stack.pop().value);
}


console.log('\n')
console.log('Queue')


//-------PUT QUEUES HERE-------//

while(queue.length){

    console.log(queue.dequeue().value);
}