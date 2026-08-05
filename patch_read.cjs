const fs = require('fs');

const contentJs = fs.readFileSync('content.js', 'utf8');
const readJs = fs.readFileSync('read.js', 'utf8');

// Extract from content.js
const regexClear = /function clearHighlights\(\) \{[\s\S]*?\n  \}/;
const regexScan = /function scanAndHighlightAPI\(forceScan = false\) \{[\s\S]*?\n  \}/;
const regexRadar = /let lastHoveredWord = null;[\s\S]*?function initRadarInspector\(\) \{[\s\S]*?\n  \}/;

const clearMatch = contentJs.match(regexClear);
const scanMatch = contentJs.match(regexScan);
const radarMatch = contentJs.match(regexRadar);

if (!clearMatch || !scanMatch || !radarMatch) {
    console.error("Failed to extract functions from content.js");
    process.exit(1);
}

const newFunctions = `
  ${clearMatch[0]}

  ${scanMatch[0]}

  ${radarMatch[0]}
`;

// In read.js, find scanAndHighlight
const regexScanDOM = /function scanAndHighlight\(\) \{[\s\S]*?\n  \}/;
if (!regexScanDOM.test(readJs)) {
    console.error("Failed to find scanAndHighlight in read.js");
    process.exit(1);
}

let newReadJs = readJs.replace(regexScanDOM, newFunctions);

// In read.js, change scanAndHighlight() to scanAndHighlightAPI()
newReadJs = newReadJs.replace(/scanAndHighlight\(\)/g, 'scanAndHighlightAPI()');

// Add initRadarInspector() after initStudyPage completes or inside it.
// We'll just call it right before createTooltip() in initStudyPage().
newReadJs = newReadJs.replace(/createTooltip\(\);/, "createTooltip();\n    initRadarInspector();");

fs.writeFileSync('read.js', newReadJs);
console.log("Successfully migrated to CSS Highlights and Radar Click System in read.js!");
