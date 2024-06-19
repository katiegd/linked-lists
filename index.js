function createNode(data = null, nextNode = null) {
  return {
    value: data,
    nextNode: nextNode,
  };
}
function createLinkedList() {
  return {
    head: null,

    // Add new node to end of list
    append(data) {
      let newNode = createNode(data);

      // Writes data for head node if it is currently null
      if (this.head === null) {
        this.head = newNode;
      }
      // Tail = head if there is only one node. If tail.next is not null (aka the very end), keep going until it is the last, and then append newNode, which is the end.
      else {
        let tail = this.head;
        while (tail.nextNode != null) {
          tail = tail.nextNode;
        }
        tail.nextNode = newNode;
      }
    },

    // Add new node to head of list
    prepend(data) {
      // New node contains data and pointer to head, making it the new head
      let newFirstNode = Node(data, this.head);

      this.head = newFirstNode;
    },

    // Counts number of nodes in list
    size() {
      let count = 0;
      let current = this.head;
      while (current != null) {
        count++;
        current = current.nextNode;
      }
      return count;
    },

    // Returns the first node in the list
    findHead() {
      return this.head;
    },

    // Returns the last node in the list
    findTail() {
      // Start search at head of list
      let node = this.head;
      // While nextNode does not equal null, keep going until it does, then return that node.
      while (node.nextNode != null) {
        node = node.nextNode;
      }
      return node;
    },

    // Return the node at a given index
    findNodeAtIndex(index) {
      // Set current index to 0 and start at head
      let currentIndex = 0;
      let current = this.head;

      // While current is not null and the current index is less than the index, move on and increase current index by 1;
      while (current !== null && currentIndex < index) {
        current = current.nextNode;
        currentIndex++;
      }
      return currentIndex === index ? current : null;
    },

    // Removes the last element from the list
    pop() {
      // Start at the head node
      let current = this.head;

      // While there are 2 nodes in front of the current, keep moving
      while (current.nextNode.nextNode) {
        current = current.nextNode;
      }
      // Erase the last node by declaring current (second to last node) to have a "next" of null.
      current.nextNode = null;
      return current;
    },

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
      let current = this.head;

      // Iterate through if current isn't null and the value isn't found
      while (current != null && current.value != value) {
        current = current.nextNode;
      }

      // Return true if current is not null and value is found, return false if current is null because that means it's reached the end without finding the value.
      return current !== null;
    },

    // Returns the index of the node containing value, or null if not found
    findAValue(value) {
      let current = this.head;
      let currentIndex = 0;

      while (current != null && current.value !== value) {
        current = current.nextNode;
        currentIndex++;
      }
      if (current != null && current.value === value) {
        return currentIndex;
      } else {
        return null;
      }
    },

    // Represents linked list objects as strings to view in console: ( value ) -> ( value ) -> ( value ) -> null
    toString() {
      let current = this.head;
      let result = "";

      // While current node is not null, add value to result string and keep going
      while (current != null) {
        result += `(${current.value.toString()}) -> `;
        current = current.nextNode;
      }
      // Append null to end of string to signify end of list
      result += null;
      return result;
    },

    //EXTRA CREDIT!!!

    insertAt(value, index) {
      // Create a newNode variable and newNode passing in the value
      let newNode = createNode(value);
      let current = this.head;
      let currentIndex = 0;

      // While current is not null and current index is less than index minus 1 because we want to target the node before the index in order to insert it after that node.
      while (current !== null && currentIndex < index - 1) {
        current = current.nextNode;
        currentIndex++;
      }
      // If we get there, set newNode.nextNode to current(at index -1).nextNode and current(at index - 1).nextNode to newNode...
      if (currentIndex === index - 1) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
      }
    },

    removeAt(index) {
      let current = this.head;
      let previous = null; // We need a previous node for this function, set to null for now
      let currentIndex = 0;

      // Iterate through until we get to the specified index
      while (current !== null && currentIndex < index) {
        previous = current;
        current = current.nextNode;
        currentIndex++;
      }
      if (currentIndex === index && current !== null) {
        if (previous === null) {
          // If we are at the head, we overwrite it by setting the current node's next node to this.head.
          this.head = current.nextNode;
        } else {
          // Otherwise get rid of current node at index by setting previous's next node equal to current's next node.
          previous.nextNode = current.nextNode;
        }
      }
    },
  };
}

let list = createLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);
list.append(10);
list.insertAt("boop", 5);
list.removeAt(5);

console.log(list.toString());
console.log(list.contains(2));
console.log(list.contains(4));
