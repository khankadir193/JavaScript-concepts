class Queue{
    constructor (){
        this.items = [];
        this.front = 0;
        this.back = 0;
    }

    enqueue(element){
        if(this.items.length >= 5) return 'Queue is overfull.';
        this.items.push(element)
        return this.items;
    };

    dequeue(){
        if(this.items.length === 0) return 'Queue is empty.';
        return this.items.shift();
    };

    peek(){
        return this.items[0];
    };

    size(){
        return this.items.length;
    }


}

const queue = new Queue();
console.log(queue.enqueue(10));
console.log(queue.enqueue(20));
console.log(queue.enqueue(30));
console.log(queue.enqueue(40));
console.log(queue.enqueue(50));
// console.log(queue.enqueue(60));
console.log('peek element---',queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.size());