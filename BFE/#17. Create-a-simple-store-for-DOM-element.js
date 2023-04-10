class NodeStore {
  static VALUE__KEY = '__index';
  nodeList = [];
  valueList = [];
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node[NodeStore.VALUE__KEY] = this.nodeList.length;
    this.nodeList.push(node);
    this.valueList.push(value);
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    if (NodeStore.VALUE__KEY in node) {
      return this.valueList[node[NodeStore.VALUE__KEY]]
    }
    return undefined;
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return NodeStore.VALUE__KEY in node;
  }
}

// testing

const store = new NodeStore();

const node1 = document.createElement('p');
const node2 = document.createElement('a');
const node3 = document.createElement('div');
const node4 = document.createElement('div');

console.log({node4});

store.set(node2, 2);
store.set(node1, 1);
store.set(node3, 3);
store.set(node4, 4);

console.log({node4});
console.log('store get:', store.get(node4));
console.log(store);