const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

function depthFirstTraversal(start){
    const stack = [start];
    const visited = new Set();

    while (stack.length) {
        let curr = stack.pop();

        if(!visited.has(curr)) {
            visited.add(curr);
            console.log(node);
            for(let neighbor of adjList[curr]) stack.push(neighbor)
        }

    }
}
