stack = [1,2,3,4,5,6,7,8,9];

console.log('lilo')

for( let i = stack.length; i>0; i--){
console.log(stack.pop())
}
console.log('fifo')

stack2 = [1,2,3,4,5,6,7,8,9];

let stop = stack2.length;
for(let i =0; i<stop; i ++){
    console.log(stack2.shift())
}