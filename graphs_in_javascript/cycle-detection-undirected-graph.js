/**
 * Tested on GeeksForGeeks
 */
class Solution {
    // Function to detect cycle in an undirected graph.
isCycle(adj) {
        let visited = {}; // Keeps track of visited nodes

        function dfs(node, parent) {
            visited[node] = true;
            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    if (dfs(neighbor, node)) {
                        return true; // Cycle detected in the DFS
                    }
                } else if (neighbor != parent) {
                    return true; // Cycle found (visited neighbor is not the parent)
                }
            }
            return false; // No cycle found in this path
        }

        for (let node of Object.keys(adj)) {
            if (!visited[node]) {
                if (dfs(node,null)) {
                    return true; // Cycle detected in any component
                }
            }
        }
        return false; // No cycle in the graph
    }
}