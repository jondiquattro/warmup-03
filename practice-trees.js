'use strict';



class Node {
    constructor(value){
        this.value =value;
        this.right = null;
        this.left = null;
        
    }
}


class TreeClass{
    constructor(){
        this.root = null;//sets root to null
    }

    preOrder(){
    let nodes = [];

    let _walk = (node) =>{

    nodes.push(node.value);
    
    if(node.left){_walk(node.left)}  //if there is a node.left walk left
    if(node.right){_walk(node.right)}//if there is a node.right walk right
    };

    _walk(this.root);
    return nodes;
    }

    postOrder(){
        let nodes = [];
        
        let _walk = (node)=>{
            if(node.left){_walk(node.left)};
            if(node.right){_walk(node.right)};
            nodes.push(node.value);

        };


        _walk(this.root);//calls the walk function so that it runs
        return nodes;  //returns node array
    }

    inOrder(){
        let nodes = [];
    
        let _walk = (node) =>{
    
        
        if(node.left){_walk(node.left)}  //if there is a node.left walk left
        nodes.push(node.value);

        if(node.right){_walk(node.right)}//if there is a node.right walk right
        };
    
        _walk(this.root);
        return nodes;
        }

    findMaximumValue(){
    
        if(!this.route){return;}

        let max = this.root.value;

        let queue = [];

        queue.push(this.root);

        while(queue.length){

            let node = queue.shift();

            if (max<node.value){
                max = node.value
            }

            if(node.left){queue.push(node.left);
            if(node.right){queue.push(node.right)}}
        }
        return max;
    }
}


class BinaryTreeClass{
    constructor(){
        this.root = null;//sets root to null
    }

    breadthFirst(tree){

        let queue = [];
        queue.push(tree.root);

        while(queue.length){
            console.log(queue[queue.length]);
            let current =queue.shift();
            if(current.left){
            queue.push(current.left);

            }
            if(current.right){
                queue.push(current.right);

            }
        }
    }
}

class BinarySearchTree{
    constructor(value){
    this.root = null;
    this.value = null;
    }

    add(value){
        //create a node with the value
        this.value = value;
        // console.log(value);

        // find the next logical place for the node
        let _walk = (node) =>{
            // console.log(node);
        if(node === null){
            console.log('end');
        }

        if(this.value<node.value ){_walk(node.left)}  //if there is a node.left walk left
        if(this.value > node.value){_walk(node.right)}//if there is a node.right walk right
        // console.log(node.value);
        };
        // console.log(this.root.value)
        _walk(this.root);
        
        }

    }
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);
// let e = new Node('5');
let f = new Node(5);
let g = new Node(6);

a.left = b;
a.right = c;
b.left =d;``
// b.right =e;
c.left =f;

let tree =new BinarySearchTree(); //this.root is equal to null.
tree.root = a; //sets this.root equal to node a.

tree.add(11);