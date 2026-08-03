const fs = require('fs');
const path = require('path');
const https = require('https');

const ARPABET_TO_IPA = {
  'AA': 'ɑː', 'AE': 'æ', 'AH': 'ʌ', 'AO': 'ɔː', 'AW': 'aʊ', 'AY': 'aɪ',
  'EH': 'e', 'ER': 'ɜːr', 'EY': 'eɪ', 'IH': 'ɪ', 'IY': 'iː', 'OW': 'oʊ',
  'OY': 'ɔɪ', 'UH': 'ʊ', 'UW': 'uː',
  'B': 'b', 'CH': 'tʃ', 'D': 'd', 'DH': 'ð', 'F': 'f', 'G': 'g', 'HH': 'h',
  'JH': 'dʒ', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'NG': 'ŋ', 'P': 'p',
  'R': 'r', 'S': 's', 'SH': 'ʃ', 'T': 't', 'TH': 'θ', 'V': 'v', 'W': 'w',
  'Y': 'j', 'Z': 'z', 'ZH': 'ʒ'
};

function toIPAArray(arpabetStr) {
  return arpabetStr.split(' ')
    .map(p => p.replace(/[0-9]/g, ''))
    .map(p => ARPABET_TO_IPA[p] || p);
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', (e) => resolve(null));
  });
}

function translateText(text) {
  return new Promise((resolve, reject) => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&q=${encodeURIComponent(text)}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          let fullTranslation = '';
          if (json && json[0]) {
            for (let k = 0; k < json[0].length; k++) {
              if (json[0][k][0]) fullTranslation += json[0][k][0];
            }
          }
          resolve(fullTranslation);
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', (e) => resolve(null));
  });
}

async function build() {
  console.log('Fetching Oxford 5000 with CEFR levels...');
  const fullWordsData = await fetchJson('https://raw.githubusercontent.com/tyypgzl/Oxford-5000-words/main/full-word.json');
  
  const levelMap = {};
  if (fullWordsData && Array.isArray(fullWordsData)) {
    fullWordsData.forEach(item => {
      if (item && item.value && item.value.word) {
        const w = item.value.word.toLowerCase().trim();
        const lvl = (item.value.level || 'B1').toUpperCase().trim();
        levelMap[w] = lvl;
      }
    });
  }
  console.log(`Loaded CEFR levels for ${Object.keys(levelMap).length} words.`);

  const csvPath = path.join(__dirname, 'oxford3000.csv');
  const csvData = fs.readFileSync(csvPath, 'utf8');
  
  const words = csvData.split('\n')
    .slice(1)
    .map(line => {
      const match = line.match(/^"?([^,"]+)"?,/);
      if (match) return match[1].toLowerCase().trim();
      return line.split(',')[0].replace(/"/g, '').trim().toLowerCase();
    })
    .filter(w => w.length > 0 && /^[a-z]+$/.test(w));
    
  const uniqueWords = [...new Set([...words, ...Object.keys(levelMap)])].filter(w => /^[a-z]+$/.test(w));
  console.log(`Total words to process: ${uniqueWords.length}`);
  
  const cmuPath = path.join(__dirname, 'public', 'dictionary.json');
  const cmuDict = JSON.parse(fs.readFileSync(cmuPath, 'utf8'));
  
  const finalDict = {};
  
  console.log('Building dictionary and translating...');
  
  const batchSize = 100;
  for (let i = 0; i < uniqueWords.length; i += batchSize) {
    const batch = uniqueWords.slice(i, i + batchSize);
    const batchStr = batch.join('\n');
    const translatedStr = await translateText(batchStr);
    
    if (translatedStr) {
      const translations = translatedStr.split('\n').map(t => t.trim().toLowerCase());
      
      for (let j = 0; j < batch.length; j++) {
        const word = batch[j];
        if (cmuDict[word]) {
          finalDict[word] = {
            ipa: cmuDict[word].map(pronunciation => toIPAArray(pronunciation)),
            mean: translations[j] || '',
            cefr: levelMap[word] || 'B1'
          };
        }
      }
    }
    
    if (i % 500 === 0) console.log(`Processed ${i}/${uniqueWords.length} words...`);
    await new Promise(r => setTimeout(r, 300));
  }
  
  const outPath = path.join(__dirname, 'public', 'dictionary_oxford.json');
  fs.writeFileSync(outPath, JSON.stringify(finalDict, null, 2));
  console.log(`Successfully built dictionary_oxford.json with ${Object.keys(finalDict).length} words!`);
}

build();
