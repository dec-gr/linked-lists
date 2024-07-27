import { LinkedList } from './linkedList.js';

export class HashMap {
  constructor(numberOfBuckets = 16) {
    this.numberOfBuckets = numberOfBuckets;
    this.hashArry = new Array(numberOfBuckets);
    for (let i = 0; i < numberOfBuckets; i++) {
      this.hashArry[i] = new LinkedList();
    }
    this.maxCapacity = numberOfBuckets;
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.numberOfBuckets;
    }
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const bucket = this.hashArry[hashCode];

    //bucket.append({ [key]: value });

    // Check if key already exists.
    let currentNode = bucket.head;
    while (currentNode != null) {
      let currentKey = Object.keys(currentNode.value)[0];
      //console.log(currentKey);
      //console.log(key);
      //console.log(currentKey === key);
      if (currentKey === key) {
        //console.log('found');
        currentNode.value[key] = value;
        return;
      }
      currentNode = currentNode.next;
    }

    bucket.append({ [key]: value });

    this.checkLoad();
  }

  get(key) {
    const hashCode = this.hash(key);
    const bucket = this.hashArry[hashCode];

    let currentNode = bucket.head;

    while (currentNode != null) {
      let currentKey = Object.keys(currentNode.value)[0];
      if (currentKey === key) {
        return currentNode.value[key];
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  has(key) {
    const hashCode = this.hash(key);
    const bucket = this.hashArry[hashCode];
    let currentNode = bucket.head;

    while (currentNode != null) {
      let currentKey = Object.keys(currentNode.value)[0];
      if (currentKey === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  remove(key) {
    const hashCode = this.hash(key);
    const bucket = this.hashArry[hashCode];

    let index = 0;

    let currentNode = bucket.head;

    while (currentNode != null) {
      let currentKey = Object.keys(currentNode.value)[0];
      if (currentKey === key) {
        bucket.removeAt(index);
        return true;
      }

      currentNode = currentNode.next;
      index++;
    }
    return false;
  }

  length() {
    let keyTotal = 0;
    this.hashArry.forEach((list) => {
      keyTotal = keyTotal + list.size();
      //console.log(keyTotal);
    });
    return keyTotal;
  }

  clear() {
    for (let i = 0; i < this.hashArry.length; i++) {
      this.hashArry[i] = new LinkedList();
    }
  }

  keys() {
    const keyArray = [];
    for (let i = 0; i < this.hashArry.length; i++) {
      const bucket = this.hashArry[i];
      let currentNode = bucket.head;

      while (currentNode != null) {
        keyArray.push(Object.keys(currentNode.value)[0]);
        currentNode = currentNode.next;
      }
    }
    return keyArray;
  }

  values() {
    const valueArray = [];
    for (let i = 0; i < this.hashArry.length; i++) {
      const bucket = this.hashArry[i];
      let currentNode = bucket.head;

      while (currentNode != null) {
        let currentKey = Object.keys(currentNode.value)[0];
        valueArray.push(currentNode.value[currentKey]);
        currentNode = currentNode.next;
      }
    }
    return valueArray;
  }

  entries() {
    const keyValueArray = [];
    for (let i = 0; i < this.hashArry.length; i++) {
      const bucket = this.hashArry[i];
      let currentNode = bucket.head;

      while (currentNode != null) {
        let currentKey = Object.keys(currentNode.value)[0];
        keyValueArray.push([currentKey, currentNode.value[currentKey]]);
        currentNode = currentNode.next;
      }
    }
    return keyValueArray;
  }

  checkLoad() {
    const capacity = this.length();
    if (capacity > this.loadFactor * this.numberOfBuckets) {
      //console.log(capacity);
      //console.log(this.numberOfBuckets);
      this.expandBuckets(this.numberOfBuckets + 16);
    }
  }

  expandBuckets(newBuckets) {
    this.numberOfBuckets = newBuckets;
    this.maxCapacity = newBuckets;

    const keyValueArrays = this.entries();

    this.hashArry = new Array(this.numberOfBuckets);
    for (let i = 0; i < this.numberOfBuckets; i++) {
      this.hashArry[i] = new LinkedList();
    }

    // this.numberOfBuckets = numberOfBuckets;
    // this.hashArry = new Array(numberOfBuckets);
    // for (let i = 0; i < numberOfBuckets; i++) {
    //   this.hashArry[i] = new LinkedList();
    // }
    // this.maxCapacity = numberOfBuckets;
    // this.loadFactor = 0.75;

    keyValueArrays.forEach((array) => {
      this.set(array[0], array[1]);
    });
  }
}
