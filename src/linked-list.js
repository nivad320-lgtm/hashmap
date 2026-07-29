class LinkedList {
  constructor() {
    this._head = null;
  }

  append(value) {
    // value is a string
    // Create new Node
    // Node value = value
    // if list is empty, create new node with _head
    // new Node (value, '_head')
    // this.list.append(new Node(value, '_head'))
    if (this._head === null) {
      this.no_headAppend(value);
    } else {
      //traversing
      let temp = this._head; //_head
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new Node(value);
    }

    // if list is not empty and have a node
    // tmp.next = new Node(value)
    // append it to this.list
  }

  prepend(value) {
    if (this._head === null) {
      this.no_headAppend(value);
    }
    this._head = new Node(value, this._head);
  }

  no_headAppend(value) {
    this._head = new Node(value);
  }

  size() {
    // return the total number of nodes
    //traverse
    if (this._head === null) {
      return undefined;
    }
    let temp = this._head;
    let size = 1;
    while (temp.next !== null) {
      temp = temp.next;
      size++;
    }
    return size;
  }
  head() {
    if (this._head === null) {
      return undefined;
    }
    return this._head.value;
  }

  tail() {
    if (this._head === null) {
      return undefined;
    }
    let temp = this._head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp.value;
  }
  _at(index) {
    if (index === 0 && this._head !== null) {
      return this._head;
    }

    if (this._head === null || index < 0 || !this.at(index - 1)) {
      return undefined;
    }

    return this.at(index - 1).next;
  }

  pop() {
    if (this._head === null) {
      return undefined;
    }
    let temp = this._head;
    this._head = temp.next;
    return temp;
  }

  contains(key) {
    if (this._head === null) {
      return false;
    }
    let temp = this._head;
    while (temp !== null) {
      if (temp.key === key) {
        return true;
      }
      temp = temp.next;
    }

    return false;
  }
  _findIndex(key) {
    let temp = this._head;
    let index = 0;
    while (temp !== null) {
      if (temp.key === key) {
        return index;
      }
      temp = temp.next;
      index++;
    }
    return -1;
  }
  toString() {
    let myString = "";
    if (this._head === null) {
      return myString;
    }
    let temp = this._head;
    while (temp !== null) {
      myString += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    myString += `null`;
    return myString;
  }
  insertAt(index, ...values) {
    // Quite Spaghetti but still works.
    // console.log(this.at(indexx))
    if (index < 0 || index > this.size()) {
      throw RangeError;
    }
    if (index === 0) {
      let originalHead = this._head;
      this._head = new Node(values[0]);
      let temp = this._head;
      for (const element of values) {
        let currentIndex = values.indexOf(element);
        if (currentIndex !== 0 && currentIndex < values.length - 1) {
          temp = temp.next;
          temp.next = new Node(element);
        } else if (currentIndex === values.length - 1) {
          temp.next = new Node(element, originalHead);
        }
      }
    } else {
      let temp = this.at(index - 1);
      let originalNext = temp.next;
      for (const element of values) {
        let currentIndex = values.indexOf(element);
        if (currentIndex === 0) {
          temp.next = new Node(element);
        } else if (currentIndex < values.length - 1) {
          temp = temp.next;
          temp.next = new Node(element);
        } else {
          temp = temp.next;
          temp.next = new Node(element, originalNext);
        }
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index > this.size()) {
      throw RangeError;
    }
    if (index === 0) {
        this._head = this.at(index+1)
    } else {
        this.at(index);
        let temp = this.at(index-1);
        temp.next = this.at(index+1);

    }
  }
}

class Node {
  constructor([...arr], next) {
    this.key = arr[0]
    this.value = arr[1];
    this.next = next || null;
  }
}

export default LinkedList;
