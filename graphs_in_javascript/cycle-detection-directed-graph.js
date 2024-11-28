/**
 * @param {number} V - The number of vertices in the graph
 * @param {number[][]} adj - Adjacency list representation of the graph
 * @returns {boolean} - Returns true if the graph contains a cycle, otherwise false
 */
class Solution {
    // Function to detect a cycle in a directed graph.
    isCyclic(V, adj) {
        // Objects to keep track of visited nodes and nodes in the recursion stack
        let visited = {}; // Tracks whether a node has been visited
        let recStack = {}; // Tracks whether a node is currently in the recursion stack

        // Depth-First Search (DFS) helper function to detect a cycle
        function dfs(node) {
            // Mark the current node as visited and add it to the recursion stack
            visited[node] = true;
            recStack[node] = true;

            // Iterate through all the neighbors of the current node
            for (let neighbor of adj[node]) {
                // If the neighbor has not been visited, recursively call dfs
                if (!visited[neighbor]) {
                    if (dfs(neighbor)) {
                        return true; // Cycle detected
                    }
                }
                // If the neighbor is already in the recursion stack, a cycle exists
                else if (recStack[neighbor] === true) {
                    return true;
                }
            }

            // Remove the current node from the recursion stack as we're done exploring it
            recStack[node] = false;
            return false;
        }

        // Iterate through all the nodes of the graph
        for (let node of Object.keys(adj)) {
            // If the node has not been visited, start a DFS from that node
            if (!visited[node]) {
                if (dfs(node)) {
                    return true; // Cycle detected
                }
            }
        }

        // If no cycle was detected, return false
        return false;
    }
}
