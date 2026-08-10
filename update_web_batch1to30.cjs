const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\PC\\.gemini\\antigravity\\brain\\8e1823e5-0e70-4d10-9d72-7b98434e5d3c';
const DEPARTURES_PATH = path.join(__dirname, 'departures_data.js');

const batchFiles = [
  path.join(ARTIFACT_DIR, 'streamline_batch1_lessons1to10.md'),
  path.join(ARTIFACT_DIR, 'streamline_batch2_lessons11to20.md'),
  path.join(ARTIFACT_DIR, 'streamline_batch3_lessons21to30.md')
];

function parseBatchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lessons = [];

  const unitBlocks = content.split(/## 📖 BÀI /g).slice(1);

  unitBlocks.forEach(block => {
    const matchUnitNum = block.match(/^(\d+): ([^\n\r]+)/);
    if (!matchUnitNum) return;
    const unitNum = parseInt(matchUnitNum[1], 10);
    const unitTitleRaw = matchUnitNum[2].replace(/[✅⚠️]/g, '').trim();

    const rightColMatch = block.match(/### 💻 [^\n\r]+[\s\S]*?<\/td>/);
    if (!rightColMatch) return;

    const rightColText = rightColMatch[0];

    const lines = [];
    const lineRegex = /\*\*([^*]+):\*\*\s*([^\n\r]+)[\s\S]*?\*\(([^)]+)\)\*/g;
    let lineMatch;

    let speakerToggle = 'A';
    while ((lineMatch = lineRegex.exec(rightColText)) !== null) {
      const speakerName = lineMatch[1].trim();
      const en = lineMatch[2].trim().replace(/\s\s+$/, '');
      const vi = lineMatch[3].trim();

      lines.push({
        speaker: speakerToggle,
        name: speakerName,
        en: en,
        vi: vi
      });

      speakerToggle = speakerToggle === 'A' ? 'B' : 'A';
    }

    const patterns = [];
    const patternRegex = /- `([^`]+)`(?: — ([^\n\r]+))?/g;
    let patMatch;
    while ((patMatch = patternRegex.exec(block)) !== null) {
      patterns.push({
        en: patMatch[1],
        vi: patMatch[2] || patMatch[1]
      });
    }

    lessons.push({
      unitNum,
      unitTitleRaw,
      dialogue: lines,
      patterns
    });
  });

  return lessons;
}

let allParsedLessons = [];
batchFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const parsed = parseBatchFile(f);
    allParsedLessons = allParsedLessons.concat(parsed);
    console.log(`Parsed ${parsed.length} lessons from ${path.basename(f)}`);
  }
});

console.log(`Total parsed lessons: ${allParsedLessons.length}`);

let departuresCode = fs.readFileSync(DEPARTURES_PATH, 'utf8');

const dataStr = departuresCode.replace('export const DEPARTURES_LESSONS =', 'module.exports =');
const tempFile = path.join(__dirname, 'temp_departures.cjs');
fs.writeFileSync(tempFile, dataStr);

const departuresData = require(tempFile);
fs.unlinkSync(tempFile);

allParsedLessons.forEach(parsed => {
  const idx = parsed.unitNum - 1;
  if (departuresData[idx]) {
    departuresData[idx].title = `${parsed.unitNum}. ${parsed.unitTitleRaw}`;
    departuresData[idx].subtitle = `Bài ${parsed.unitNum} SE: ${parsed.unitTitleRaw}`;
    departuresData[idx].topic = `${parsed.unitTitleRaw} (GenZ 2025)`;
    if (parsed.dialogue.length > 0) {
      departuresData[idx].dialogue = parsed.dialogue;
    }
    if (parsed.patterns.length > 0) {
      departuresData[idx].patterns = parsed.patterns;
    }
  }
});

const updatedCode = `export const DEPARTURES_LESSONS = ${JSON.stringify(departuresData, null, 2)};\n`;
fs.writeFileSync(DEPARTURES_PATH, updatedCode);

console.log('Successfully updated departures_data.js with Lessons 1-30!');
