const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function breadthFirstTraverse(start){
    const queue = [start];
    const visited = new Set();

    while(queue.length) {
        let node = queue.shift();

        if(visited.has(node)) continue;
        visited.add(node);
        console.log(node);

        for(let neighbor of adjList[node]) {
            queue.push(neighbor)
        }

    }
}
