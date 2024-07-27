import { LinkedList } from './linkedList.js';
import { HashMap } from './hashMaps.js';
const newList = new LinkedList();

// Linked List Tests:
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());

// Hash Map Tests:

const test = new HashMap(16); // or HashMap() if using a factory

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.hashArry);

test.set('lion', 'red');
test.set('elephant', 'pink');

console.log(test.hashArry);

test.set('moon', 'silver');

console.log(test.hashArry);

test.set('elephant', 'green');
