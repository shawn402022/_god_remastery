/**
 * Simple Breadth-First Traversal
Write a function called printBreadthFirst that will traverse the given graph breadth-first, printing each node when visited exactly once, on a newline.
 */

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}


function printBreadthFirst(start) {
// your code here
    // create queue and enqueue the starting node
    const queue = [start];
    // create a set to store visited nodes.
    const visited = new Set();
    // while queue is not empty:



    while(queue.length) {
        // 1. dequeue the first node
        let node = queue.shift();
        // 2. do what you need to do to the dequeued node
        if (visited.has(node)) continue;
        visited.add(node);
        console.log(node)
         // 3. for each unvisited neighbor, add it to the visited nodes nad to the back of the queue
        for ( let neighbor of adjList[node]) {
            queue.push(neighbor)

        }
    }
}

console.log("First Test:")
console.log(printBreadthFirst(3)); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
console.log(printBreadthFirst(6)); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
console.log(printBreadthFirst(4)); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 3, 5, 6, 2, 1
