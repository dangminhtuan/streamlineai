let dictionary = {};
let knownWords = new Set();
let wordLookupStats = {};
let encounteredAdvancedWords = [];

let currentTab = 'ALL';
let currentSearchQuery = '';
let currentCefr = 'ALL';
let currentSort = 'MOST_LOOKED_UP';

const SYNONYMS_3000 = {
  'confront': { synWord: 'face', ipa: 'feɪs', level: 'A2' },
  'confronts': { synWord: 'face', ipa: 'feɪs', level: 'A2' },
  'confronted': { synWord: 'face', ipa: 'feɪs', level: 'A2' },
  'confronting': { synWord: 'face', ipa: 'feɪs', level: 'A2' },
  'resume': { synWord: 'profile', ipa: 'ˈproʊ.faɪl', level: 'A2' },
  'resumes': { synWord: 'continue', ipa: 'kənˈtɪn.juː', level: 'A2' },
  'resumed': { synWord: 'continue', ipa: 'kənˈtɪn.juː', level: 'A2' },
  'resuming': { synWord: 'continue', ipa: 'kənˈtɪn.juː', level: 'A2' },
  'surge': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'surges': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'surging': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'surged': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'soar': { synWord: 'rise', ipa: 'raɪz', level: 'A2' },
  'soars': { synWord: 'rise', ipa: 'raɪz', level: 'A2' },
  'soared': { synWord: 'rise', ipa: 'raɪz', level: 'A2' },
  'boost': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'boosts': { synWord: 'increase', ipa: 'ɪnˈkriːs', level: 'A2' },
  'plummet': { synWord: 'fall', ipa: 'fɔːl', level: 'A2' },
  'plunge': { synWord: 'fall', ipa: 'fɔːl', level: 'A2' },
  'rescind': { synWord: 'cancel', ipa: 'ˈkæn.səl', level: 'A2' },
  'rescinds': { synWord: 'cancel', ipa: 'ˈkæn.səl', level: 'A2' },
  'rescinded': { synWord: 'cancel', ipa: 'ˈkæn.səl', level: 'A2' },
  'rescinding': { synWord: 'cancel', ipa: 'ˈkæn.səl', level: 'A2' },
  'attorney': { synWord: 'lawyer', ipa: 'ˈlɔː.jər', level: 'A2' },
  'attorneys': { synWord: 'lawyer', ipa: 'ˈlɔː.jər', level: 'A2' },
  'physician': { synWord: 'doctor', ipa: 'ˈdɒk.tər', level: 'A1' },
  'physicians': { synWord: 'doctor', ipa: 'ˈdɒk.tər', level: 'A1' },
  'commence': { synWord: 'start', ipa: 'stɑːrt', level: 'A1' },
  'commenced': { synWord: 'start', ipa: 'stɑːrt', level: 'A1' },
  'purchase': { synWord: 'buy', ipa: 'baɪ', level: 'A1' },
  'purchased': { synWord: 'buy', ipa: 'baɪ', level: 'A1' },
  'terminate': { synWord: 'end', ipa: 'end', level: 'A1' },
  'terminated': { synWord: 'end', ipa: 'end', level: 'A1' },
  'hurdle': { synWord: 'problem', ipa: 'ˈprɒb.ləm', level: 'A1' },
  'hurdles': { synWord: 'problem', ipa: 'ˈprɒb.ləm', level: 'A1' },
  'nominee': { synWord: 'candidate', ipa: 'ˈkæn.dɪ.dət', level: 'B1' },
  'nominees': { synWord: 'candidate', ipa: 'ˈkæn.dɪ.dət', level: 'B1' },
  'confirmation': { synWord: 'agreement', ipa: 'əˈɡriː.mənt', level: 'B1' },
  'enormous': { synWord: 'big', ipa: 'bɪɡ', level: 'A1' },
  'immense': { synWord: 'large', ipa: 'lɑːrdʒ', level: 'A1' },
  'assistance': { synWord: 'help', ipa: 'help', level: 'A1' },
  'inquire': { synWord: 'ask', ipa: 'æsk', level: 'A1' },
  'utilize': { synWord: 'use', ipa: 'juːz', level: 'A1' },
  'obtain': { synWord: 'get', ipa: 'ɡet', level: 'A1' },
  'obtained': { synWord: 'get', ipa: 'ɡet', level: 'A1' },
  'apparel': { synWord: 'clothes', ipa: 'kloʊðz', level: 'A1' },
  'residence': { synWord: 'house', ipa: 'haʊs', level: 'A1' },
  'depart': { synWord: 'leave', ipa: 'liːv', level: 'A1' },
  'comprehend': { synWord: 'understand', ipa: 'ˌʌn.dəˈstænd', level: 'A1' },
  'difficult': { synWord: 'hard', ipa: 'hɑːrd', level: 'A1' },
  'annual': { synWord: 'yearly', ipa: 'ˈjɪr.li', level: 'B1' },
  'sufficient': { synWord: 'enough', ipa: 'ɪˈnʌf', level: 'A2' },
  'require': { synWord: 'need', ipa: 'niːd', level: 'A1' },
  'weaponization': { synWord: 'protection', ipa: 'prəˈtek.ʃən', level: 'B1' },
  // New Synonyms
  'smash': { synWord: 'break', ipa: 'breɪk', level: 'A1' },
  'smashes': { synWord: 'break', ipa: 'breɪk', level: 'A1' },
  'humble': { synWord: 'simple', ipa: 'ˈsɪm.pəl', level: 'A2' },
  'top': { synWord: 'best', ipa: 'best', level: 'A1' },
  'widen': { synWord: 'grow', ipa: 'ɡroʊ', level: 'A2' },
  'widening': { synWord: 'grow', ipa: 'ɡroʊ', level: 'A2' },
  'aftermath': { synWord: 'result', ipa: 'rɪˈzʌlt', level: 'A1' },
  'collision': { synWord: 'crash', ipa: 'kræʃ', level: 'B2' },
  'presidency': { synWord: 'president', ipa: 'ˈprez.ɪ.dənt', level: 'B1' },
  'động': { synWord: 'engine', ipa: 'ˈen.dʒɪn', level: 'A2' },
  'hoạt động': { synWord: 'activity', ipa: 'ækˈtɪv.ə.t̬i', level: 'A2' },
  'lương thực': { synWord: 'food', ipa: 'fuːd', level: 'A1' }
};

function getBaseStem(word) {
  if (!word) return '';
  let w = word.toLowerCase().replace(/['’]s$/, '');
  if (dictionary[w]) return w;
  if (w.endsWith('s') && dictionary[w.slice(0, -1)]) return w.slice(0, -1);
  if (w.endsWith('es') && dictionary[w.slice(0, -2)]) return w.slice(0, -2);
  if (w.endsWith('ies') && dictionary[w.slice(0, -3) + 'y']) return w.slice(0, -3) + 'y';
  if (w.endsWith('ed') && dictionary[w.slice(0, -2)]) return w.slice(0, -2);
  if (w.endsWith('ed') && dictionary[w.slice(0, -1)]) return w.slice(0, -1);
  if (w.endsWith('ing') && dictionary[w.slice(0, -3)]) return w.slice(0, -3);
  if (w.endsWith('ing') && dictionary[w.slice(0, -3) + 'e']) return w.slice(0, -3) + 'e';
  return w;
}

async function initVaultData() {
  // 1. Fetch Oxford Dictionary
  try {
    let dictUrl = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) ? chrome.runtime.getURL('dictionary_oxford.json') : '/dictionary_oxford.json';
    let res = await fetch(dictUrl).catch(() => null);
    if (!res || !res.ok) {
      dictUrl = (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) ? chrome.runtime.getURL('public/dictionary_oxford.json') : '/public/dictionary_oxford.json';
      res = await fetch(dictUrl).catch(() => null);
    }
    if (!res || !res.ok) {
      res = await fetch('./dictionary_oxford.json');
    }
    dictionary = await res.json();
  } catch (e) {
    console.error('Error loading dictionary in vault:', e);
  }

  // 2. Load storage data AFTER dictionary is loaded
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['knownWords', 'wordLookupStats', 'encounteredAdvancedWords'], (res) => {
      knownWords = new Set(res.knownWords || []);
      wordLookupStats = res.wordLookupStats || {};
      encounteredAdvancedWords = res.encounteredAdvancedWords || [];
      renderVaultTable();
    });

    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local') {
        if (changes.knownWords) knownWords = new Set(changes.knownWords.newValue || []);
        if (changes.wordLookupStats) wordLookupStats = changes.wordLookupStats.newValue || {};
        if (changes.encounteredAdvancedWords) encounteredAdvancedWords = changes.encounteredAdvancedWords.newValue || [];
        renderVaultTable();
      }
    });
  } else {
    knownWords = new Set(JSON.parse(localStorage.getItem('knownWords') || '[]'));
    wordLookupStats = JSON.parse(localStorage.getItem('wordLookupStats') || '{}');
    encounteredAdvancedWords = JSON.parse(localStorage.getItem('encounteredAdvancedWords') || '[]');
    renderVaultTable();
  }
}

function processAllItems() {
  const itemMap = new Map();

  // A. Process encountered advanced words (with sentence & domain)
  encounteredAdvancedWords.forEach(adv => {
    const key = (adv.word || adv.stem || '').toLowerCase();
    if (!key) return;

    const stemKey = getBaseStem(key);
    const dictData = dictionary[key] || dictionary[stemKey];
    const isOut3k = !dictData;

    itemMap.set(key, {
      word: adv.word || key,
      stem: adv.stem || stemKey || key,
      ipa: adv.ipa || (dictData && dictData.ipa[0] ? dictData.ipa[0].join('') : ''),
      mean: adv.mean || (dictData ? dictData.mean : ''),
      cefr: adv.cefr || (dictData ? dictData.cefr : 'C2'),
      synonym3k: adv.synonym3k || null,
      sentence: adv.sentence || '',
      domain: adv.domain || 'web',
      count: (wordLookupStats[key] && wordLookupStats[key].count) ? wordLookupStats[key].count : 1,
      isOut3k: isOut3k,
      lastLookedUp: adv.timestamp || Date.now()
    });
  });

  // B. Process lookup stats (all words looked up on web pages)
  Object.keys(wordLookupStats).forEach(key => {
    const stat = wordLookupStats[key];
    const stemKey = getBaseStem(key);
    const dictData = dictionary[key] || dictionary[stemKey];
    const isOut3k = !dictData;

    if (!itemMap.has(key)) {
      const topDomain = Object.keys(stat.domains || {})[0] || 'web';
      itemMap.set(key, {
        word: stat.displayWord || key,
        stem: stemKey || key,
        ipa: stat.ipa || (dictData && dictData.ipa[0] ? dictData.ipa[0].join('') : ''),
        mean: stat.mean || (dictData ? dictData.mean : ''),
        cefr: stat.cefr || (dictData ? dictData.cefr : 'A1'),
        synonym3k: null,
        sentence: '',
        domain: topDomain,
        count: stat.count || 1,
        isOut3k: isOut3k,
        lastLookedUp: stat.lastLookedUp || Date.now()
      });
    }
  });

  // C. Process known words
  knownWords.forEach(word => {
    const key = word.toLowerCase();
    const stemKey = getBaseStem(key);
    const dictData = dictionary[key] || dictionary[stemKey];
    const isOut3k = !dictData;

    if (!itemMap.has(key) && dictData) {
      itemMap.set(key, {
        word: key,
        stem: stemKey || key,
        ipa: dictData.ipa && dictData.ipa[0] ? dictData.ipa[0].join('') : '',
        mean: dictData.mean,
        cefr: dictData.cefr || 'A1',
        synonym3k: null,
        sentence: '',
        domain: 'app',
        count: 1,
        isOut3k: isOut3k,
        lastLookedUp: Date.now()
      });
    }
  });

  return Array.from(itemMap.values());
}

function renderVaultTable() {
  const allItems = processAllItems();

  // Summary counts
  const core3kCount = allItems.filter(i => !i.isOut3k).length;
  const advancedCount = allItems.filter(i => i.isOut3k).length;
  const totalLookups = allItems.reduce((acc, i) => acc + (i.count || 1), 0);
  const masteredCount = knownWords.size;

  document.getElementById('cntCore3k').textContent = core3kCount;
  document.getElementById('cntAdvanced').textContent = advancedCount;
  document.getElementById('cntTotalLookups').textContent = totalLookups;
  document.getElementById('cntMastered').textContent = masteredCount;

  document.getElementById('badgeAll').textContent = allItems.length;
  document.getElementById('badge3k').textContent = core3kCount;
  document.getElementById('badgeOut').textContent = advancedCount;
  document.getElementById('badgeMastered').textContent = allItems.filter(i => knownWords.has(i.stem)).length;

  // Filter items
  let filtered = allItems.filter(item => {
    // 1. Tab filter
    if (currentTab === 'CORE_3K' && item.isOut3k) return false;
    if (currentTab === 'OUT_3K' && !item.isOut3k) return false;
    if (currentTab === 'MASTERED' && !knownWords.has(item.stem)) return false;

    // 2. CEFR filter
    if (currentCefr !== 'ALL' && item.cefr !== currentCefr) return false;

    // 3. Search query filter
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      const matchWord = item.word.toLowerCase().includes(q);
      const matchMean = item.mean.toLowerCase().includes(q);
      if (!matchWord && !matchMean) return false;
    }

    return true;
  });

  // Sort items
  if (currentSort === 'MOST_LOOKED_UP') {
    filtered.sort((a, b) => (b.count || 1) - (a.count || 1));
  } else if (currentSort === 'NEWEST') {
    filtered.sort((a, b) => (b.lastLookedUp || 0) - (a.lastLookedUp || 0));
  } else if (currentSort === 'WORD_ASC') {
    filtered.sort((a, b) => a.word.localeCompare(b.word));
  }

  // Render Table Body
  const tbody = document.getElementById('vaultTableBody');
  const emptyMsg = document.getElementById('emptyVaultMsg');

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    emptyMsg.classList.remove('hidden');
    return;
  }

  emptyMsg.classList.add('hidden');

  tbody.innerHTML = filtered.map(item => {
    const isKnown = knownWords.has(item.stem);
    const catClass = item.isOut3k ? 'cat-out' : 'cat-3k';
    const catLabel = item.isOut3k ? '🟡 Ngoài 3000 từ' : '🔴 Bộ 3000 từ';
    const cefrTagClass = item.isOut3k ? 'cefr-tag gold' : 'cefr-tag';
    
    const btnText = isKnown ? `✅ Đã biết` : `✔️ Tôi biết`;
    const btnClass = isKnown ? 'btn-action-know is-known' : 'btn-action-know';

    let synHtml = '<span style="color:#64748b;">—</span>';
    let displayWord = item.stem;
    let displayIpa = item.ipa ? '/' + item.ipa + '/' : '';
    let displayMean = item.mean;
    let displayCatLabel = catLabel;
    let displayCefr = item.cefr;

    if (item.synonym3k) {
      synHtml = `<span class="syn-tag">≈ ${item.synonym3k}</span>`;
    } else {
      const synData = SYNONYMS_3000[item.stem];
      if (synData) {
        if (item.mean === 'Không có trong từ điển' || item.mean === 'Chưa có trong từ điển' || !item.mean) {
          // This was a Vietnamese word that has now been resolved by AI
          displayWord = synData.synWord;
          displayIpa = '/' + synData.ipa + '/';
          displayMean = item.stem; // The Vietnamese word becomes the meaning
          displayCefr = synData.level;
          displayCatLabel = '🔴 Bộ 3000 từ';
          synHtml = `<span style="color:#10b981; font-weight:600; font-size:0.75rem;">✅ Đã quy đổi</span>`;
        } else {
          // Normal C1/C2 word getting mapped to a simpler 3000 word
          synHtml = `
            <div style="font-weight:600; color:#c084fc; margin-bottom:0.2rem;">${synData.synWord}</div>
            <div style="font-size:0.75rem; color:#facc15; font-family:monospace; margin-bottom:0.2rem;">/${synData.ipa}/</div>
            <div class="cefr-tag" style="font-size:0.6rem;">${synData.level}</div>
          `;
        }
      } else {
        if (item.mean === 'Không có trong từ điển' || item.mean === 'Chưa có trong từ điển' || !item.mean) {
          // Still waiting for AI
          displayWord = '⏳ Waiting...';
          displayIpa = '';
          displayMean = item.stem;
        }
      }
    }

    return `
      <tr>
        <td>
          <span class="w-name">${displayWord}</span>
          <span class="w-ipa">${displayIpa}</span>
        </td>
        <td>
          <span class="${catClass}">${displayCatLabel}</span>
          <span class="${cefrTagClass}">${displayCefr}</span>
        </td>
        <td><b>${displayMean}</b></td>
        <td style="text-align:center;">${synHtml}</td>
        <td><span class="lookup-badge">👁️ ${item.count} lần</span></td>
        <td>
          ${item.sentence ? `<div class="sentence-quote" title="${item.sentence}">"${item.sentence}"</div>` : ''}
          <span class="domain-tag">${item.domain || 'web'}</span>
        </td>
        <td style="text-align: center;">
          <button class="${btnClass}" onclick="toggleKnownInVault('${item.stem}')">${btnText}</button>
        </td>
      </tr>
    `;
  }).join('');
}

window.toggleKnownInVault = function(stem) {
  if (knownWords.has(stem)) {
    knownWords.delete(stem);
  } else {
    knownWords.add(stem);
  }

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ knownWords: [...knownWords] });
  } else {
    localStorage.setItem('knownWords', JSON.stringify([...knownWords]));
  }

  renderVaultTable();
};

document.addEventListener('DOMContentLoaded', () => {
  initVaultData();

  // Tab listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      currentTab = target.getAttribute('data-tab');
      renderVaultTable();
    });
  });

  // Search input
  const searchInput = document.getElementById('vSearchInput');
  let debounceTimer;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearchQuery = e.target.value.trim();
        renderVaultTable();
      }, 250);
    });
  }

  // CEFR select
  const cefrSelect = document.getElementById('vCefrSelect');
  if (cefrSelect) {
    cefrSelect.addEventListener('change', (e) => {
      currentCefr = e.target.value;
      renderVaultTable();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('vSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderVaultTable();
    });
  }

  // Extract AI functionality
  const btnExtractAI = document.getElementById('btnExtractAI');
  if (btnExtractAI) {
    btnExtractAI.addEventListener('click', () => {
      const allItems = processAllItems();
      const needsSync = allItems.filter(item => {
        // Cần xử lý nếu là từ Ngoài 3000, hoặc là từ C1/C2 (quá khó)
        const isAdvanced = item.isOut3k || item.cefr === 'C1' || item.cefr === 'C2';
        if (!isAdvanced) return false; // Từ A1-B2 thì không cần quy đổi
        if (item.synonym3k) return false; // Đã có nghĩa ghim thủ công
        if (SYNONYMS_3000[item.stem]) return false; // Đã được AI map trong hệ thống
        return true;
      });

      if (needsSync.length === 0) {
        const ogText = btnExtractAI.innerHTML;
        btnExtractAI.innerHTML = '✨ Đã hoàn hảo, không có lỗi!';
        setTimeout(() => btnExtractAI.innerHTML = ogText, 2500);
        return;
      }

      const payload = needsSync.map(item => ({
        word: item.stem,
        meaning: item.mean,
        cefr: item.cefr,
        context: item.sentence || item.domain
      }));

      const payloadStr = JSON.stringify(payload, null, 2);
      
      navigator.clipboard.writeText(payloadStr).then(() => {
        const ogText = btnExtractAI.innerHTML;
        btnExtractAI.innerHTML = '✅ Đã Copy Dữ Liệu! Hãy dán vào chat';
        btnExtractAI.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))';
        btnExtractAI.style.borderColor = 'rgba(34, 197, 94, 0.5)';
        btnExtractAI.style.color = '#4ade80';

        setTimeout(() => {
          btnExtractAI.innerHTML = ogText;
          btnExtractAI.style.background = '';
          btnExtractAI.style.borderColor = '';
          btnExtractAI.style.color = '';
        }, 3000);
      });
    });
  }
});
