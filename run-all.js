const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const readline = require('readline');

// Function to recursively get all .js files
function getAllJsFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && item.name !== '.git') {
        files = files.concat(getAllJsFiles(fullPath));
      }
    } else if (path.extname(item.name) === '.js') {
      files.push(fullPath);
    }
  }
  return files;
}

// Get all JS files
const jsFiles = getAllJsFiles('.');

// Run each file sequentially to avoid output mixup
async function runAll() {
  console.log(`🚀 Running ${jsFiles.length} JS files...\n`);
  
  for (const filePath of jsFiles) {
    const relativePath = path.relative('.', filePath);
    console.log(`\n📄 ${relativePath}`);
    console.log('='.repeat(50));
    
    await new Promise((resolve) => {
      const child = spawn('node', [filePath], { stdio: 'pipe' });
      
      const rl = readline.createInterface({
        input: child.stdout,
        output: process.stdout,
        terminal: false
      });
      
      rl.on('line', (line) => {
        console.log(`   ${line}`);
      });
      
      child.stderr.on('data', (data) => {
        console.error(`   ERROR: ${data}`);
      });
      
      child.on('close', (code) => {
        if (code !== 0) {
          console.log(`   ❌ Exit code: ${code}`);
        }
        rl.close();
        resolve();
      });
    });
  }
  
  console.log(`\n✅ All files completed!`);
}

runAll().catch(console.error);

