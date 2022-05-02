const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this;
  }

  add(data) {
    
    if (data) checkElement(this, data);

    function checkElement(list, data) {
      if (list.data === undefined || list.data === null) {
        list.data = data;
        list.left = null;
        list.right = null;
      } else {
        addElement(list, data);
      }
    }

    function addElement(list, data) {
      if (!list) {
        return list = new Node(data);
      }

      if (data > list.data) {
        return (list.right === null) ? list.right = addElement(list.right, data) : addElement(list.right, data);
      } else {
        return (list.left === null) ? list.left = addElement(list.left, data) : addElement(list.left, data);
      } 
    }
  }

  has(data) {
    return searchElement(this, data);

    function searchElement(list, data) {
      if (list === null) {
        return false;
      }

      if (list.data === data) {
        return true;
      }

      return (data > list.data) ? searchElement(list.right, data) : searchElement(list.left, data);
    }
  }

  find(data) {
    return searchElement(this, data);

    function searchElement(list, data) {
      if (list === null) {
        return null;
      }

      if (list.data === data) {
        return list;
      }

      return (data > list.data) ? searchElement(list.right, data) : searchElement(list.left, data);
    }
  }

  remove(data) {
    let parent = null;
    let child = null;
    let node = (data) ? removehElement(this, data) : null;

    function removehElement(list, data, parentEl = null, childEl = null) {
      if (list === null) {
        return null;
      }

      if (list.data === data) {
        parent = parentEl;
        child = childEl;
        return list;
      }

      return (data > list.data) ? removehElement(list.right, data, list, 'right') : removehElement(list.left, data, list, 'left');
    }

    if (node === null) return;

    if (node.left === null && node.right === null) {
      parent[child] = null;
      return;
    }

    if (node.left === null) {
      let right = node.right.right;
      let left = node.right.left;
      node.data = node.right.data;
      node.right = right;
      node.left = left;
      return;
    }

    if (node.right === null) {
      let left = node.left.left;
      let right = node.left.right;
      node.data = node.left.data;
      node.right = right;
      node.left = left;
      return;
    }

    let minRightElement = minRight(node.right);
    function minRight(node) {
      return (node.left === null) ? node : minRight(node.left);
    }

    node.data = minRightElement.data;

    if (minRightElement.right) {
      let right = minRightElement.right.right;
      let left = minRightElement.right.left;
      let newName = minRightElement.right.data;
      minRightElement.data = newName;
      minRightElement.left = left;
      minRightElement.right = right;
    } else {
      node.right = null;
    }


    return;
  }

  min() {
    return (this === null) ? null : minElement(this);

    function minElement(list) {
      return (list.left === null) ? list.data : minElement(list.left);
    }
  }

  max() {
    return (this === null) ? null : maxElement(this);

    function maxElement(list) {
      return (list.right === null) ? list.data : maxElement(list.right); 
    }
  }
}


module.exports = {
  BinarySearchTree
};