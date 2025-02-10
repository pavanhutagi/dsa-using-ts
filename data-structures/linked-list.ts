// Node class represents each element in the linked list
// Contains the element's value and a reference to the next node
class ListNode {
  element: any;
  next: ListNode | null;

  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// LinkedList class implements a singly linked list data structure
// Maintains a reference to the head node and tracks the size
class LinkedList {
  head: ListNode | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Adds a new element to the end of the linked list
  // Time complexity: O(n) where n is the number of nodes
  add(element) {
    const newListNode = new ListNode(element);
    let currentListNode;

    // If list is empty, set new node as head
    if (this.head == null) {
      this.head = newListNode;
    } else {
      // Traverse to the last node
      currentListNode = this.head;
      while (currentListNode.next) {
        currentListNode = currentListNode.next;
      }
      // Add new node at the end
      currentListNode.next = newListNode;
    }

    this.size++;
  }

  // Prints all elements in the linked list along with their next element
  // Useful for debugging and visualization
  printList() {
    let currentListNode = this.head;

    if (currentListNode == null) {
      console.log("List is empty");
    } else {
      while (currentListNode) {
        console.log("Element: ", currentListNode.element);
        console.log(
          "Next element: ",
          currentListNode.next == null ? "null" : currentListNode.next.element
        );
        currentListNode = currentListNode.next;
      }
    }
  }
}

// Example usage of the LinkedList class
const linkedList = new LinkedList();

console.log("LinkedList before adding elements", linkedList);
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log("LinkedList after adding elements", linkedList);

// Print all elements in the linked list
linkedList.printList();
