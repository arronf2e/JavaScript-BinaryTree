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

function Tree() {
    this.root = null
}

Tree.prototype.insert = function(data) {
    var node = new Node(data)
    if(this.root === null) {
        this.root = node
    }else {
        this.root.addNode(node)
    }
}

Tree.prototype.traverse = function() {
    this.root.visit()
}

Tree.prototype.search = function(data) {
    var node = this.root.search(data)
    return node
}
