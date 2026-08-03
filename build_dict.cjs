const fs = require('fs');
const path = require('path');

const cmuPath = path.join(__dirname, 'cmudict.txt');
const outPath = path.join(__dirname, 'public', 'dictionary.json');

const data = fs.readFileSync(cmuPath, 'utf8');
const lines = data.split('\n');

const dict = Object.create(null);

for (const line of lines) {
  if (line.startsWith(';;;') || !line.trim()) continue;
  
  const parts = line.split('  ');
  if (parts.length === 2) {
    let rawWord = parts[0].trim().toLowerCase();
    const phones = parts[1].trim();
    
    // Remove (1), (2), etc.
    rawWord = rawWord.replace(/\(\d+\)$/, '');
    
    // Only take clean words
    if (/^[a-z]+$/.test(rawWord)) {
      if (!dict[rawWord]) {
        dict[rawWord] = [];
      }
      // Add pronunciation to array
      if (!dict[rawWord].includes(phones)) {
        dict[rawWord].push(phones);
      }
    }
  }
}

fs.writeFileSync(outPath, JSON.stringify(dict));
console.log(`Generated dictionary.json with ${Object.keys(dict).length} words.`);
