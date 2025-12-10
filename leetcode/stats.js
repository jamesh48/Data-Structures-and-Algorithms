const fs = require('fs').promises;

(async () => {
  const filterGitkeep = (files) => files.filter(f => f !== '.gitkeep');

  const easyJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/easy'));
  const mediumJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/medium'));
  const hardJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/hard'));

  const easyPyFiles = filterGitkeep(await fs.readdir('./python/solved/easy'));
  const mediumPyFiles = filterGitkeep(await fs.readdir('./python/solved/medium'));
  const hardPyFiles = filterGitkeep(await fs.readdir('./python/solved/hard'));

  const jsTotal = easyJSFiles.length + mediumJSFiles.length + hardJSFiles.length;
  const pyTotal = easyPyFiles.length + mediumPyFiles.length + hardPyFiles.length;
  const grandTotal = jsTotal + pyTotal;

  const data = `# Data Structures and Algorithms

A collection of data structures and algorithm solutions, primarily focused on LeetCode problems.

## LeetCode Solutions

| Language | Easy | Medium | Hard | Total |
|----------|------|--------|------|-------|
| JavaScript | ${easyJSFiles.length} | ${mediumJSFiles.length} | ${hardJSFiles.length} | ${jsTotal} |
| Python | ${easyPyFiles.length} | ${mediumPyFiles.length} | ${hardPyFiles.length} | ${pyTotal} |
| **Total** | **${easyJSFiles.length + easyPyFiles.length}** | **${mediumJSFiles.length + mediumPyFiles.length}** | **${hardJSFiles.length + hardPyFiles.length}** | **${grandTotal}** |

---

_Stats automatically updated by GitHub Actions_
`;

  await fs.writeFile('../README.md', data, 'utf-8');

  console.log('Stats updated successfully!');
  console.log(`Total problems solved: ${grandTotal}`);
})();
