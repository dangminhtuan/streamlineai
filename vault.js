let dictionary = {};
let knownWords = new Set();
let wordLookupStats = {};
let customDictionary = {};
let encounteredAdvancedWords = [];

let currentTab = 'ALL';
let currentSearchQuery = '';
let currentCefr = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
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
    chrome.storage.local.get(['knownWords', 'wordLookupStats', 'encounteredAdvancedWords', 'customDictionary'], async (data) => {
      knownWords = new Set(data.knownWords || []);
      wordLookupStats = data.wordLookupStats || {};
      customDictionary = data.customDictionary || {};
      encounteredAdvancedWords = data.encounteredAdvancedWords || [];
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
    const customData = customDictionary[key] || customDictionary[stemKey];
    const isOut3k = !dictData;

    if (!itemMap.has(key)) {
      itemMap.set(key, {
        word: adv.word || key,
        stem: adv.stem || stemKey || key,
        ipa: (customData && customData.ipa && customData.ipa[0]) ? customData.ipa[0].join(', ') : (adv.ipa || (dictData && dictData.ipa[0] ? dictData.ipa[0].join('') : '')),
        mean: (customData && customData.mean) ? customData.mean : (adv.mean || (dictData ? dictData.mean : '')),
        cefr: (customData && customData.cefr) ? customData.cefr : (adv.cefr || (dictData ? dictData.cefr : 'C2')),
        synonym3k: (customData && customData.synonym3k) ? customData.synonym3k : (adv.synonym3k || null),
        contexts: [],
        domain: adv.domain || 'web',
        count: (wordLookupStats[key] && wordLookupStats[key].count) ? wordLookupStats[key].count : 1,
        isOut3k: isOut3k,
        lastLookedUp: adv.timestamp || Date.now()
      });
    }
    
    const item = itemMap.get(key);
    if (adv.sentence && !item.contexts.some(c => c.text === adv.sentence)) {
      item.contexts.push({ text: adv.sentence, domain: adv.domain || 'web' });
    }
  });

  // B. Process lookup stats (all words looked up on web pages)
  Object.keys(wordLookupStats).forEach(key => {
    const stat = wordLookupStats[key];
    const stemKey = getBaseStem(key);
    const dictData = dictionary[key] || dictionary[stemKey];
    const customData = customDictionary[key] || customDictionary[stemKey];
    const isOut3k = !dictData;

    if (!itemMap.has(key)) {
      const topDomain = Object.keys(stat.domains || {})[0] || 'web';
      itemMap.set(key, {
        word: stat.displayWord || key,
        stem: stemKey || key,
        ipa: (customData && customData.ipa && customData.ipa[0]) ? customData.ipa[0].join(', ') : (stat.ipa || (dictData && dictData.ipa[0] ? dictData.ipa[0].join('') : '')),
        mean: (customData && customData.mean) ? customData.mean : (stat.mean || (dictData ? dictData.mean : '')),
        cefr: (customData && customData.cefr) ? customData.cefr : (stat.cefr || (dictData ? dictData.cefr : 'A1')),
        cefr: (customData && customData.cefr) ? customData.cefr : (stat.cefr || (dictData ? dictData.cefr : 'A1')),
        synonym3k: (customData && customData.synonym3k) ? customData.synonym3k : (stat.synonym3k || null),
        contexts: [],
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
        cefr: dictData.cefr || 'A1',
        synonym3k: null,
        contexts: [],
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

  const errorItems = allItems.filter(item => item.mean && item.mean.startsWith('Lỗi:'));
  const badgeError = document.getElementById('badgeError');
  if (badgeError) badgeError.textContent = errorItems.length;

  const btnDeleteAllErrors = document.getElementById('btnDeleteAllErrors');
  if (btnDeleteAllErrors) {
    btnDeleteAllErrors.style.display = (currentTab === 'ERROR' && errorItems.length > 0) ? 'inline-flex' : 'none';
  }

  // Filter items
  let filtered = allItems.filter(item => {
    // 1. Tab filter
    if (currentTab === 'CORE_3K' && item.isOut3k) return false;
    if (currentTab === 'OUT_3K' && !item.isOut3k) return false;
    if (currentTab === 'MASTERED' && !knownWords.has(item.stem)) return false;
    if (currentTab === 'ERROR' && !(item.mean && item.mean.startsWith('Lỗi:'))) return false;

    // 2. CEFR filter
    if (!currentCefr.has(item.cefr)) return false;

    // 3. Search query filter
    if (currentSearchQuery) {
      const q = currentSearchQuery.toLowerCase();
      const matchWord = item.word.toLowerCase().includes(q);
      const matchMean = item.mean.toLowerCase().includes(q);
      if (!matchWord && !matchMean) return false;
    }

    return true;
  });

  // Helper to clean words for sorting
  const getSortKey = (w) => (w || '').toString().replace(/^[^a-zA-Z0-9]+/, '').toLowerCase();

  // Sort items
  if (currentSort === 'MOST_LOOKED_UP') {
    filtered.sort((a, b) => (b.count || 1) - (a.count || 1));
  } else if (currentSort === 'NEWEST') {
    filtered.sort((a, b) => (b.lastLookedUp || 0) - (a.lastLookedUp || 0));
  } else if (currentSort === 'WORD_ASC') {
    filtered.sort((a, b) => getSortKey(a.word).localeCompare(getSortKey(b.word)));
  } else if (currentSort === 'WORD_DESC') {
    filtered.sort((a, b) => getSortKey(b.word).localeCompare(getSortKey(a.word)));
  } else if (currentSort === 'COUNT_DESC') {
    filtered.sort((a, b) => (b.count || 1) - (a.count || 1));
  } else if (currentSort === 'COUNT_ASC') {
    filtered.sort((a, b) => (a.count || 1) - (b.count || 1));
  } else if (currentSort === 'TIME_DESC') {
    filtered.sort((a, b) => (b.lastLookedUp || 0) - (a.lastLookedUp || 0));
  } else if (currentSort === 'TIME_ASC') {
    filtered.sort((a, b) => (a.lastLookedUp || 0) - (b.lastLookedUp || 0));
  } else if (currentSort === 'GROUP_ASC' || currentSort === 'GROUP_DESC') {
    filtered.sort((a, b) => {
      const gA = a.isOut3k ? 1 : 0;
      const gB = b.isOut3k ? 1 : 0;
      if (gA !== gB) return currentSort === 'GROUP_ASC' ? gA - gB : gB - gA;
      return getSortKey(a.word).localeCompare(getSortKey(b.word));
    });
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
    
    let actionButtons = '';
    if (item.mean && item.mean.startsWith('Lỗi:')) {
      displayMean = `<span style="color:#ef4444; font-weight:bold;">⚠️ ${item.mean}</span>`;
      actionButtons = `
        <select class="error-label-select" data-stem="${item.stem}" style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); color: #3b82f6; padding: 0.25rem; border-radius: 4px; font-size: 0.75rem; cursor: pointer; outline: none; max-width: 100px;">
          <option value="" disabled selected>✏️ Gán nhãn</option>
          <option value="= Tên riêng">= Tên riêng</option>
          <option value="= Lỗi: Ký tự đơn">= Lỗi: Ký tự đơn</option>
          <option value="= Lỗi: Tiếng Việt">= Lỗi: Tiếng Việt</option>
          <option value="= Lỗi: Vô nghĩa">= Lỗi: Vô nghĩa / Khác</option>
          <option value="Chưa rõ nghĩa (Cần cập nhật AI)">↩️ Khôi phục (Chờ AI)</option>
        </select>
        <button class="dva-tt-btn-mark delete-vault-btn" data-stem="${item.stem}" style="background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: #f87171; padding: 0.25rem 0.5rem; display: flex; align-items: center; justify-content: center;" title="Xóa vĩnh viễn từ này khỏi bộ nhớ">🗑️</button>
      `;
    } else {
      actionButtons = `
        <button class="${btnClass} toggle-known-btn" data-stem="${item.stem}" style="display: flex; align-items: center; justify-content: center;">${btnText}</button>
        <button class="dva-tt-btn-mark delete-vault-btn" data-stem="${item.stem}" style="background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: #f87171; padding: 0.25rem 0.5rem; display: flex; align-items: center; justify-content: center;" title="Xóa vĩnh viễn từ này khỏi bộ nhớ">🗑️</button>
      `;
    }
    
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
          displayMean = 'Chưa rõ nghĩa (Cần cập nhật AI)';
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
          ${item.contexts && item.contexts.length > 0 ? (() => {
            const firstCtx = item.contexts[0];
            let tooltipHtml = '';
            item.contexts.forEach((ctx, idx) => {
              let safeCtx = ctx.text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
              try {
                const regex = new RegExp('(' + (item.word || item.stem) + ')', 'gi');
                safeCtx = safeCtx.replace(regex, '<b style="color: #60a5fa; font-weight: 800; background: rgba(96,165,250,0.15); padding: 0 2px; border-radius: 2px;">$1</b>');
              } catch(e) {}
              
              tooltipHtml += `
                <div style="margin-bottom: 0.5rem; padding-bottom: 0.5rem; ${idx < item.contexts.length - 1 ? 'border-bottom: 1px solid #334155;' : ''}">
                  <span style="color: #94a3b8; font-size: 0.7rem; font-weight: 600; font-style: normal; display: block; margin-bottom: 0.2rem;">${idx + 1}. Nguồn: ${ctx.domain}</span>
                  "${safeCtx}"
                </div>
              `;
            });

            return `
              <div class="sentence-container">
                <div class="sentence-quote">"${firstCtx.text}" ${item.contexts.length > 1 ? `<span style="color: #3b82f6; font-size: 0.7rem; font-weight: bold; font-style: normal; margin-left: 4px;">[+${item.contexts.length - 1}]</span>` : ''}</div>
                <div class="sentence-tooltip">
                  ${tooltipHtml}
                </div>
              </div>
            `;
          })() : ''}
          <span class="domain-tag">${item.domain || 'web'}</span>
        </td>
        <td style="text-align: center;">
          <div style="display: flex; gap: 0.5rem; justify-content: center; align-items: stretch;">
            ${actionButtons}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Event Delegation for table actions (to bypass Extension CSP on inline handlers)
document.getElementById('vaultTableBody').addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('.toggle-known-btn');
  if (toggleBtn) {
    toggleKnownInVault(toggleBtn.getAttribute('data-stem'));
    return;
  }
  
  const deleteBtn = e.target.closest('.delete-vault-btn');
  if (deleteBtn) {
    deleteWordFromVault(deleteBtn.getAttribute('data-stem'));
    return;
  }
});

document.getElementById('vaultTableBody').addEventListener('change', (e) => {
  if (e.target.classList.contains('error-label-select')) {
    assignErrorLabel(e.target.getAttribute('data-stem'), e.target.value);
  }
});

function assignErrorLabel(stem, value) {
  if (!value) return;
  if (!customDictionary[stem]) customDictionary[stem] = {};
  customDictionary[stem].mean = value;
  
  if (wordLookupStats[stem]) {
    wordLookupStats[stem].mean = value;
  }
  
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ 
      customDictionary: customDictionary,
      wordLookupStats: wordLookupStats
    }, () => {
      renderVaultTable();
    });
  } else {
    renderVaultTable();
  }
}

function toggleKnownInVault(stem) {
  if (knownWords.has(stem)) {
    knownWords.delete(stem);
  } else {
    knownWords.add(stem);
  }

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({ knownWords: [...knownWords] }, () => renderVaultTable());
  } else {
    localStorage.setItem('knownWords', JSON.stringify([...knownWords]));
    renderVaultTable();
  }
}

function deleteWordFromVault(stem) {
  if (confirm(`Bạn có chắc chắn muốn xóa từ "${stem}" khỏi lịch sử?`)) {
    let updated = false;
    
    if (wordLookupStats[stem]) {
      delete wordLookupStats[stem];
      updated = true;
    }
    
    if (customDictionary[stem]) {
      delete customDictionary[stem];
      updated = true;
    }
    
    if (knownWords.has(stem)) {
      knownWords.delete(stem);
      updated = true;
    }
    
    const initialLen = encounteredAdvancedWords.length;
    encounteredAdvancedWords = encounteredAdvancedWords.filter(w => 
      (w.stem || '').toLowerCase() !== stem.toLowerCase() && 
      (w.word || '').toLowerCase() !== stem.toLowerCase()
    );
    if (encounteredAdvancedWords.length !== initialLen) {
      updated = true;
    }

    if (updated && typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ 
        wordLookupStats: wordLookupStats,
        customDictionary: customDictionary,
        knownWords: [...knownWords],
        encounteredAdvancedWords: encounteredAdvancedWords
      }, () => {
        renderVaultTable();
      });
    } else {
      renderVaultTable();
    }
  }
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

  // CEFR multi-select filters
  document.querySelectorAll('.cefr-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const cefr = target.getAttribute('data-cefr');
      if (currentCefr.has(cefr)) {
        currentCefr.delete(cefr);
        target.classList.remove('active');
      } else {
        currentCefr.add(cefr);
        target.classList.add('active');
      }
      renderVaultTable();
    });
  });

  // Sort headers
  document.querySelectorAll('th[data-sort-col]').forEach(th => {
    th.addEventListener('click', (e) => {
      const col = th.getAttribute('data-sort-col').toUpperCase();
      if (currentSort === col + '_DESC') {
        currentSort = col + '_ASC';
      } else {
        currentSort = col + '_DESC'; // Default to desc on first click
      }
      renderVaultTable();
    });
  });

  // Delete All Errors logic
  const btnDeleteAllErrors = document.getElementById('btnDeleteAllErrors');
  if (btnDeleteAllErrors) {
    btnDeleteAllErrors.addEventListener('click', () => {
      const errorItems = processAllItems().filter(item => item.mean && item.mean.startsWith('Lỗi:'));
      if (errorItems.length === 0) return;
      if (confirm(`Bạn có chắc muốn xóa vĩnh viễn ${errorItems.length} từ bị lỗi?`)) {
        let updated = false;
        const errorStems = new Set(errorItems.map(item => item.stem));
        
        errorItems.forEach(item => {
          const stem = item.stem;
          if (wordLookupStats[stem]) {
            delete wordLookupStats[stem];
            updated = true;
          }
          if (customDictionary[stem]) {
            delete customDictionary[stem];
            updated = true;
          }
          if (knownWords.has(stem)) {
            knownWords.delete(stem);
            updated = true;
          }
        });
        
        const initialLen = encounteredAdvancedWords.length;
        encounteredAdvancedWords = encounteredAdvancedWords.filter(w => 
          !errorStems.has((w.stem || '').toLowerCase()) && 
          !errorStems.has((w.word || '').toLowerCase())
        );
        if (encounteredAdvancedWords.length !== initialLen) {
          updated = true;
        }

        if (updated && typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set({ 
            wordLookupStats: wordLookupStats,
            customDictionary: customDictionary,
            knownWords: [...knownWords],
            encounteredAdvancedWords: encounteredAdvancedWords
          }, () => {
            renderVaultTable();
          });
        } else if (updated) {
          renderVaultTable();
        }
      }
    });
  }

  // Extract AI functionality
  const btnExtractAI = document.getElementById('btnExtractAI');
  if (btnExtractAI) {
    btnExtractAI.addEventListener('click', () => {
      const allItems = processAllItems();
      // Filter words that need AI: Not in dict, or currently marked as error, or explicitly needing update
      const needsSync = allItems.filter(item => {
        return (item.isOut3k && !customDictionary[item.stem]) || 
               item.mean === 'Chưa rõ nghĩa (Cần cập nhật AI)' || 
               item.mean.startsWith('Lỗi:');
      }).slice(0, 50); // Batch of 50 words to avoid ChatGPT truncation

      if (needsSync.length === 0) {
        const ogText = btnExtractAI.innerHTML;
        btnExtractAI.innerHTML = '✨ Không có từ nào cần AI cập nhật!';
        setTimeout(() => btnExtractAI.innerHTML = ogText, 2500);
        return;
      }

      const wordsList = needsSync.map(item => `"${item.stem}"`).join(', ');
      
      const promptText = `Tôi có danh sách các từ vựng tiếng Anh (hoặc tiếng Việt) sau. Xin lưu ý, trong danh sách có thể có những từ bị bắt lỗi do sai sót của bộ lọc (chỉ là 1-2 ký tự vô nghĩa, hoặc tiếng Việt bị cắt vụn...). 

Nhiệm vụ của bạn:
1. Với các từ HỢP LỆ: dịch nghĩa sát với ngữ cảnh thực tế, cung cấp phiên âm IPA, và trình độ CEFR (A1-C2). Nếu là từ Nâng cao (B2-C2) hoặc ngoài 3000 từ thông dụng, hãy cung cấp 1 từ đồng nghĩa phổ biến thuộc mức (A1-B1) vào trường "synonym" (Nếu từ đã thông dụng sẵn thì để rỗng).
2. Với các từ VÔ NGHĨA / BỊ LỖI: gán "mean" là một trong các phân loại sau (BẮT BUỘC bắt đầu bằng "Lỗi:"):
   - "Lỗi: Ký tự đơn" (ví dụ: c, h, b...)
   - "Lỗi: Tiếng Việt" (ví dụ: khoa, học, việt...)
   - "Lỗi: Vô nghĩa / Khác"
   (Các trường "ipa", "cefr", "synonym" để trống).

Vui lòng trả về kết quả DƯỚI DẠNG MỘT KHỐI JSON DUY NHẤT theo định dạng sau (chỉ trả về JSON, không giải thích thêm):
{
  "từ_hợp_lệ": { "mean": "nghĩa tiếng việt", "ipa": "phiên âm", "cefr": "C2", "synonym": "từ đồng nghĩa A1-B1" },
  "c": { "mean": "Lỗi: Ký tự đơn", "ipa": "", "cefr": "", "synonym": "" }
}

Danh sách từ:
[ ${wordsList} ]`;
      
      navigator.clipboard.writeText(promptText).then(() => {
        const ogText = btnExtractAI.innerHTML;
        btnExtractAI.innerHTML = '✅ Đã Copy Prompt! Hãy dán vào AI';
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

  // Import AI functionality
  const btnImportAI = document.getElementById('btnImportAI');
  if (btnImportAI) {
    btnImportAI.addEventListener('click', () => {
      const input = prompt('Hãy dán khối JSON do AI trả về vào đây:');
      if (!input) return;

      try {
        // Handle markdown code blocks if the user copied them
        let cleanInput = input.trim();
        if (cleanInput.startsWith('\`\`\`')) {
          cleanInput = cleanInput.replace(/^\`\`\`(json)?/, '').replace(/\`\`\`$/, '').trim();
        }

        const data = JSON.parse(cleanInput);
        let updatedCount = 0;

        for (const [key, value] of Object.entries(data)) {
          const stemKey = getBaseStem(key.toLowerCase());
          
          if (value.mean) {
            customDictionary[stemKey] = {
              mean: value.mean,
              ipa: value.ipa ? [[value.ipa]] : [],
              cefr: value.cefr || 'A1',
              isAdvanced: true,
              synonym3k: value.synonym || null
            };
            
            // Also update wordLookupStats if it exists
            if (wordLookupStats[stemKey]) {
              wordLookupStats[stemKey].mean = value.mean;
              if (value.ipa) wordLookupStats[stemKey].ipa = value.ipa;
              if (value.cefr) wordLookupStats[stemKey].cefr = value.cefr;
              if (value.synonym) wordLookupStats[stemKey].synonym3k = value.synonym;
            }
            
            updatedCount++;
          }
        }

        if (updatedCount > 0 && typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set({ 
            customDictionary: customDictionary,
            wordLookupStats: wordLookupStats
          }, () => {
            alert(`✅ Đã cập nhật thành công ${updatedCount} từ vựng từ AI!`);
            renderVaultTable();
          });
        } else {
          if (updatedCount > 0) renderVaultTable(); // For local dev without chrome extension API
        }

      } catch (e) {
        alert('❌ Lỗi: Dữ liệu bạn dán vào không phải là một JSON hợp lệ. Vui lòng kiểm tra lại!');
        console.error(e);
      }
    });
  }
});
