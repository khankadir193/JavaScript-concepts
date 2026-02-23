class Stack {
    constructor(){
        this.items = [];
    }
    push(element){
        if(this.items.length >= 5) return 'Stack is overflow.';
        this.items.unshift(element);
        return this.items;
    }

    pop(){
        if(this.items.length === 0) return 'Stack is Empty.';
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    size(){
        return this.items.length;
    }
};

const stack = new Stack();
console.log(stack.push(10))
console.log(stack.push(20))
console.log(stack.push(30))
console.log(stack.push(40))
console.log(stack.push(50));
console.log(stack.push(60));
console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());
console.log('get first element:-',stack.peek());