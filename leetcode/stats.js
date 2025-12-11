const fs = require('fs').promises;

(async () => {
  const filterGitkeep = (files) => files.filter(f => f !== '.gitkeep');

  // Helper function to safely read directory (returns empty array if doesn't exist)
  const safeReadDir = async (path) => {
    try {
      return filterGitkeep(await fs.readdir(path));
    } catch (err) {
      return [];
    }
  };

  // Solved problems
  const easyJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/easy'));
  const mediumJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/medium'));
  const hardJSFiles = filterGitkeep(await fs.readdir('./javascript/solved/hard'));

  const easyPyFiles = filterGitkeep(await fs.readdir('./python/solved/easy'));
  const mediumPyFiles = filterGitkeep(await fs.readdir('./python/solved/medium'));
  const hardPyFiles = filterGitkeep(await fs.readdir('./python/solved/hard'));

  // Attempted problems
  const easyJSAttempted = await safeReadDir('./javascript/attempted/easy');
  const mediumJSAttempted = await safeReadDir('./javascript/attempted/medium');
  const hardJSAttempted = await safeReadDir('./javascript/attempted/hard');

  const easyPyAttempted = await safeReadDir('./python/attempted/easy');
  const mediumPyAttempted = await safeReadDir('./python/attempted/medium');
  const hardPyAttempted = await safeReadDir('./python/attempted/hard');

  // Calculate totals
  const jsTotal = easyJSFiles.length + mediumJSFiles.length + hardJSFiles.length;
  const pyTotal = easyPyFiles.length + mediumPyFiles.length + hardPyFiles.length;
  const grandTotal = jsTotal + pyTotal;

  const jsAttemptedTotal = easyJSAttempted.length + mediumJSAttempted.length + hardJSAttempted.length;
  const pyAttemptedTotal = easyPyAttempted.length + mediumPyAttempted.length + hardPyAttempted.length;
  const grandAttemptedTotal = jsAttemptedTotal + pyAttemptedTotal;

  const data = `# Data Structures and Algorithms

A collection of data structures and algorithm solutions, primarily focused on LeetCode problems.

## LeetCode Solutions

| Language | Easy | Medium | Hard | Solved | Attempted |
|----------|------|--------|------|--------|-----------|
| JavaScript | ${easyJSFiles.length} | ${mediumJSFiles.length} | ${hardJSFiles.length} | ${jsTotal} | ${jsAttemptedTotal} |
| Python | ${easyPyFiles.length} | ${mediumPyFiles.length} | ${hardPyFiles.length} | ${pyTotal} | ${pyAttemptedTotal} |
| **Total** | **${easyJSFiles.length + easyPyFiles.length}** | **${mediumJSFiles.length + mediumPyFiles.length}** | **${hardJSFiles.length + hardPyFiles.length}** | **${grandTotal}** | **${grandAttemptedTotal}** |

---

_Stats automatically updated by GitHub Actions_
`;

  await fs.writeFile('../README.md', data, 'utf-8');

  console.log('Stats updated successfully!');
  console.log(`Total problems solved: ${grandTotal}`);
  console.log(`Total problems attempted: ${grandAttemptedTotal}`);
})();
