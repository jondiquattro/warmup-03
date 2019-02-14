'use strict';


//---------Premade Trees---------//
class Node {
    constructor(value){
        this.value =value;
        this.right = null;
        this.left = null;
        
    }
}


let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
let e = new Node(6);
let f = new Node(5);
// let g = new Node(6);

a.left = b;
a.right = c;
b.left =d;
b.right =e;
c.left =f;


//--------Premade Trees---------------//

function preOrder(tree){

    const preResult = [];

    let _walk =(node)=>{

        preResult.push(node.value);

        if(node.right){_walk(node.right);}
        if(node.left){_walk(node.left);}

    }
    _walk(tree)
    return preResult;
}


let inOrder=(root)=>{
const inLineResult =[];
    let _walk =(node)=>{
        
        if(node.right)_walk(node.right);
        inLineResult.push(node.value);
        if(node.left)_walk(node.left);
    }

    _walk(root);

    return inLineResult;
}

let postOrder =(root)=>{
    const postResult = [];

    const _walk =(node)=>{
        if(node.right)_walk(node.right);
        if(node.left)_walk(node.left);
        postResult.push(node.value);
    }

    _walk(root);
    return postResult;
}


console.log(postOrder(a));
console.log(inOrder(a));
console.log(preOrder(a));

