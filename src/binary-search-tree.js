const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return (this.data === null || this.data === undefined) ? null : this;
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
    removeNode(this, data);

    function removeNode(list, data) {
      if (!list) {
        return null;
      }

      if (data < list.data) {
        list.left = removeNode(list.left, data);
        return list;
      } else if (list.data < data) {
        list.right = removeNode(list.right, data);
        return list;
      } else {
        if (!list.left && !list.right) {
          return null;
        }

        if (!list.left) {
          list = list.right;
          return list;
        }

        if (!list.right) {
          list = list.left;
          return list;
        }

        let minFromRight = list.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        list.data = minFromRight.data;

        list.right = removeNode(list.right, minFromRight.data);
        return list;
      }
    }
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