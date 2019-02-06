let LQClass = require('./stacks-queues');
let stack = new LQClass.StackClass();
let queue = new LQClass.QueueClass();


//-----------premade queue/stack----------//

for(let i = 0; i<10; i++){
stack.push(i);
queue.queue(i);
}
//-----------premade queue/stack----------//

console.log('\n')
console.log('Stack')


while(stack.length){
    console.log(stack.pop().value);
}

console.log('\n')
console.log('Queue')


//-------PUT QUEUES HERE-------//
const qResult =[];
while(queue.length){
    qResult.push(queue.dequeue().value)
}

console.log(qResult)