const ws = new WeakSet();

const obj = {
    name:'Abdul Jabir Khan',
    add:'padari'
}

ws.add({name:'Abdul Kadir Khan',address:'gorakhpur uttarpradesh'});
ws.add(obj);

console.log('ws...',ws);
console.log('ws...',ws.has(obj));