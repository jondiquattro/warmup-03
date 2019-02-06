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

function preOrder(root){
const result = [];

function _walk(node){
    result.push(node.value)

    if(node.left){_walk(node.left)};

    if(node.right){_walk(node.right)}

}
_walk(root);

return result;
}

console.log(preOrder(a));

function postOrder(root){

    const postResult = [];

    function _walk(node){
        if(node.left){_walk(node.left)};
        if(node.right){_walk(node.right)};
        postResult.push(node.value);
        
    }
    _walk(root);
    return postResult;
}

console.log(postOrder(a))


function inLine(root){
    const inResult = [];

    function _walk(node){
        if(node.left){_walk(node.left)};
        inResult.push(node.value);
        if(node.right){_walk(node.right)};

    }

    _walk(root);
    return inResult;
}

console.log(inLine(a));