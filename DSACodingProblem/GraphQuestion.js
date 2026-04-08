function findCircleNum(isConnected) {
  const n = isConnected.length;       // number of cities
  const visited = new Array(n).fill(false);
  let provinces = 0;

  function dfs(city) {
    for (let i = 0; i < n; i++) {
      // If connected and not visited
      if (isConnected[city][i] === 1 && !visited[i]) {
        visited[i] = true;   // mark visited
        dfs(i);              // visit connected cities
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      provinces++;           // new province found
      visited[i] = true;
      dfs(i);
    }
  }

  return provinces;
}


// Example usage
const isConnected = [
  [1,1,0],
  [1,1,0],
  [0,0,1]
];

console.log(findCircleNum(isConnected)); // Output: 2