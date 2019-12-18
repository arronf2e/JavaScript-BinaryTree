class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
    addNode(node) {
        if(node.data < this.data) {
            if(this.left == null) {
                this.left = node
            }else {
                this.left.addNode(node)
            }
        }else if(node.data > this.data) {
            if(this.right == null) {
                this.right = node
            }else {
                this.right.addNode(node)
            }
        }else {
            console.log('Try different data')
        }
    }
    visit() {
        if(this.left !== null) {
            this.left.visit()
        }
        if(this.right !== null) {
            this.right.visit()
        }
    }
    search(data) {
        if(this.data == data) {
            console.log(`${data} found!`)
            return this
        }else if(data < this.data && this.left != null) {
            return this.left.search(data)
        }else if(data > this.data && this.right != null){
            return this.right.search(data)
        }
        return null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    addValue(data) {
        let node = new Node(data)
        if(this.root == null) {    
            this.root = node
        }else {
            this.root.addNode(node)
        }
    }
    // 遍历
    traverse() {
        this.root.visit()
    }
    // 搜索
    search(data) {
        let found = this.root.search(data)
        return found
    }
}

let bt = new BinaryTree()

let nodes = [3,5,6,7]

nodes.forEach(node => bt.addValue(node))

console.log(bt, bt.traverse())
console.log(bt.search(5))
