const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {

  constructor() {
    this.rootfirst = null;
  }

  root() {
  return this.rootfirst;
  }

  add(data) {
  this.rootfirst = addElem(this.rootfirst, data);
  function addElem(node, data) {
    if (!node) {
    	return new Node(data);
    }
    if (node.data === data) {
    	return node;
    }
    if (data < node.data) {
    	node.left = addElem(node.left, data);
    }else {
    	node.right = addElem(node.right, data)
    }
    return node;
  }
  }

  has(data) {
    return search(this.rootfirst, data);

    function search(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data)
      }
    }
  }

  find(data) {
    return search(this.rootfirst, data);

    function search(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return search(node.left, data);
      } else {
        return search(node.right, data)
      }
    }
  }

  remove(data) {
    this.rootfirst = removeData( this.rootfirst, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minChild = node.right;
        while (minChild.left) {
          minChild = minChild.left
        }

        node.data = minChild.data;

        node.right = removeData(node.right, minChild.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootfirst) {
      return null
    }

    let minChild = this.rootfirst;
    while(minChild.left) {
      minChild = minChild.left;
    }
    return minChild.data
  }

  max() {
    if (!this.rootfirst) {
      return null
    }

    let maxChild = this.rootfirst;
    while(maxChild.right) {
      maxChild = maxChild.right;
    }
    return maxChild.data
  }
}

module.exports = {
  BinarySearchTree
};