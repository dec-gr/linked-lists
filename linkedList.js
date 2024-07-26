export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    const newNode = new Node(value);

    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 1;
    let currentNode = this.head;
    while (currentNode.next != null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode.next.next != null) {
      currentNode = currentNode.next;
    }
    const finalNode = currentNode.next;
    currentNode.next = null;
    return finalNode;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode.next != null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode.next != null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }

  toString() {
    let stringOut = '';
    let currentNode = this.head;

    while (currentNode.next != null) {
      stringOut = stringOut + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }

    stringOut = stringOut + `( ${currentNode.value} ) -> null`;
    return stringOut;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const nextNode = currentNode.next;
    const newNode = new Node(value, nextNode);
    currentNode.next = newNode;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index - 1) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    currentNode.next = currentNode.next.next;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

// const three = new Node('three');
// const two = new Node('two', three);
// const one = new Node('one', two);
// const zero = new Node('zero', one);

// const list = new LinkedList(zero);

// console.log(list.head.next.next.next);

// list.append('four');

// console.log(list.head.next.next.next.next);

// list.prepend('minus1');

// console.log(list.head);

// console.log(list.size());

// console.log(list.getHead());

// console.log(list.tail());

// console.log(list.at(2));

// console.log(list.pop());

// console.log(list.contains('two'));

// console.log(list.find('two'));

// console.log(list.toString());

// console.log(list.insertAt('beep', 2));

// console.log(list.toString());

// console.log(list.removeAt(1));

// console.log(list.toString());
