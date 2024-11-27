class Solution {
    // Function to detect cycle in an undirected graph using Stack.
    isCycle(adj) {
        let visited = {}, // To keep track of visited nodes
            stack = [];   // Explicit stack for iterative DFS traversal
        
        function dfs(node) {
            // Push the starting node onto the stack with a null parent
            stack.push({ nodeValue: node, parent: null });
            visited[node] = true; // Mark the starting node as visited
            
            // Perform iterative DFS using the stack
            while (stack.length > 0) {
                const element = stack.pop(); // Pop the top element from the stack
                const nodeValue = element.nodeValue; // Current node being processed
                const parent = element.parent;       // Parent of the current node
                
                // Traverse all neighbors of the current node
                for (let neighbor of adj[nodeValue]) {
                    if (!visited[neighbor]) {
                        // If the neighbor is not visited, push it to the stack with the current node as parent
                        stack.push({ nodeValue: neighbor, parent: nodeValue });
                        visited[neighbor] = true; // Mark the neighbor as visited
                    } else if (neighbor != parent) {
                        // If the neighbor is visited and is NOT the parent, a cycle exists
                        return true;
                    }
                }
            }
            // Return false if no cycle is detected
            return false;
        }

        // Iterate through all nodes to ensure disconnected components are also checked
        for (let node of Object.keys(adj)) {
            if (!visited[node]) {
                // If a component contains a cycle, return true
                if (dfs(node)) {
                    return true;
                }
            }
        }

        // Return false if no cycle is found in any component
        return false;
    }
}
