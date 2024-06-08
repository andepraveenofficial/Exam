// Stack

/*
Data Structure : Stack -> FILO

Methods:
    * push() -> Add an item to the top of the stack
    * display() 
    * size()
    * isEmpty()
    * peek() -> Peeks at the top item of the stack without removing it
    * pop() -> Removes at the top element of the stack
*/


class Stack{
    constructor(){
        this.items = []
    }

    push(item){
        this.items.push(item)
    }

    display(){
        return this.items
    }

    size(){
        return this.items.length
    }

    isEmpty(){
        return this.size() ===  0
    }

    peek(){
        // Return the top item without removing it
        if (this.isEmpty()){
            return null
        }
        else{
            const topItem = this.items[this.size()-1]
            return topItem;
        }
    }

    pop(){
        if (this.isEmpty()){
            return null
        }
        else{
            let poppedItem = this.items.pop()
            return poppedItem
        }
    }
}


// Instance
const stack = new Stack();
console.log(stack)

stack.push("data1")
console.log(stack.display())

stack.push("data2")
stack.push("data3")
stack.push("data4")

console.log(stack.display())

console.log(stack.isEmpty())

console.log(stack.size())

console.log(stack.peek())

console.log(stack.pop())

console.log(stack.size())

console.log(stack.display())