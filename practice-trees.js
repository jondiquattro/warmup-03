'use strict';



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


function preOrder(root){
    // console.log(root);
    const result = [];
    let _walk =(node)=>{

        result.push(node.value);

        if(node.left){_walk(node.left)}

        if(node.right){_walk(node.right)}
    }
    _walk(root);
    // return result;
    console.log('pre order ',result);
}

//   console.log(root);

preOrder(a);


function postOrder(root){

    const postResult=[];

    let _walk =(node)=>{

        if(node.left){_walk(node.left)};

        if(node.right){_walk(node.right)};

        postResult.push(node.value);

    }

    _walk(root);

    console.log('post order ', postResult);
}



postOrder(a);




function inLine(root){

    const inResult = [];

    let _walk=(node)=>{
        if(node.left){_walk(node.left)}
        inResult.push(node.value);

        if(node.right){_walk(node.right)};
    }

    _walk(root);

    console.log('inline ', inResult);
}


inLine(a);