class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString() {
        return `${this.value}`;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedListNode(value)

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    calcLength() {
        let length = 0;

        let currentNode = this.head;

        while (currentNode) {
            length += 1;
            currentNode = currentNode.next;
        }

        return length;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }
        let deleteNode = null;

        while (this.head && this.head.value === value) {
            deleteNode = this.head;

            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail?.value) {
            this.tail = currentNode;
        }

        return deleteNode;
    }

    insertAfter(value, prevNode) {
        if (prevNode === null) return this;

        const newNode = new LinkedListNode(value);

        newNode.next = prevNode.next;
        prevNode.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }

        return this;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString() {
        return this.toArray().map(node => node.toString()).toString();
    }
}

const list = new LinkedList();

list.append('a').append('b').append('d').append('dс');
console.log('length', list.calcLength());
