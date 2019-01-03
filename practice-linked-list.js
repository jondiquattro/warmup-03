'use strict';

console.log('hooked up')
class Node {
    constructor(value){

        this.value = value;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
    }
    add(value){
        let node = new Node(value);

        if(!this.head){
        this.head = node;
        return;
        }

        let current = this.head;
        while(current.next){
            //do stuff
            current = current.next;
        }
        current.next = node;
    }
    insert(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        }

    includes(target){

        let current = this.head;
         while(current.next){
           if(target = current.value){
             break
           }
           current = current.next}
        if(target = current.value){
          return true;
        } else {
          return false;
        }
    }

    print(){
        let current = this.head;
        while(current.next){
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value)
    }

    append(value){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        let newNode = new Node(value)
        current.next = newNode;
        newNode.next = null;

    }
    insertAfter(value, newValue){
        let current = this.head;
        while(current.next){
          
            if(current.value === value){
            //   console.log('entered')
                break;
            }
            current = current.next;
        }
        if(current.next ===null){
            console.log('value not found')
        }
        else{
            let newNode = new Node(newValue);
            newNode.next = current.next;
            current.next = newNode;
        }

    }
    insertBefore(value, newValue){
        let current = this.head;
        while(current.next){
          
            if(current.next.value === value){
              console.log('entered')
                break;
            }
            current = current.next;
        }
        if(current.next ===null){
                console.log('value not found')
            }
            else{
                let newNode = new Node(newValue);
                newNode.next = current.next;
                current.next = newNode;
            }
    }

}

let l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);
l1.add(6);
l1.add(7);
l1.add(8);
l1.add(9);


let current = l1.head;
while(current.next){
    console.log(current.value)
    current = current.next;
}
console.log(current.value);
