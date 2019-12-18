function Node(data) {
    this.data = data
    this.left = null
    this.right = null
}

Node.prototype.addNode = function(node) {
    if(node.data < this.data) {
        if(this.left === null) {
            this.left = node
        }else {
            this.left.addNode(node)
        }
    }else if(node.data > this.data) {
        if(this.right === null) {
            this.right = node
        }else {
            this.right.addNode(node)
        }
    }else {
        console.log('try different number')
    }
}

Node.prototype.visit = function() {
    console.log(this.data)
    if(this.left !== null) {
        this.left.visit()
    }
    if(this.right !== null) {
        this.right.visit()
    }
}

Node.prototype.search = function(data) {
    if(this.data === data) {
        return this
    }else if(data < this.data && this.left !== null) {
        return this.left.search(data)
    }else if(data > this.data && this.right !== null) {
        return this.right.search(data)
    }
    return null
}

-------------------------------------------------------------------------------------------------------------------------

function BinaryTree() {
    this.root = null
}

BinaryTree.prototype.insert = function(data) {
    var node = new Node(data)
    if(this.root === null) {
        this.root = node
    }else {
        this.root.addNode(node)
    }
}

BinaryTree.prototype.traverse = function() {
    this.root.visit()
}

BinaryTree.prototype.search = function(data) {
    var node = this.root.search(data)
    return node
}


var bt = new BinaryTree()

var nodes = [3,5,6,7]

nodes.forEach(node => bt.addValue(node))

console.log(bt, bt.traverse())
console.log(bt.search(5))

