let dictionary = {};
let knownWords = new Set();
let knownRules = new Set();
let groupLimits = {};
let currentQuery = '';
let isShowingHeteronyms = false;
let currentGroups = {};
let currentModalGroupKey = '';
let currentModalWords = [];
let currentReportWord = '';

// Time Tracking & Study Log
let lastActivityTime = Date.now();
let studyLog = {}; // { 'YYYY-MM-DD': seconds }

// Filter States
let selectedLevel = 'ALL';
let selectedModalCefrLevel = 'ALL';

const IPA_VOWELS = new Set([
  'ɑː', 'æ', 'ʌ', 'ɔː', 'aʊ', 'aɪ', 'e', 'ɜːr', 'eɪ', 
  'ɪ', 'iː', 'oʊ', 'ɔɪ', 'ʊ', 'uː', 'ə'
]);

const CONSONANT_DIGRAMS = ['tch', 'ch', 'sh', 'th', 'ph', 'wh', 'ck', 'ng', 'gh', 'qu', 'wr', 'kn', 'dg'];

const GRAPHEME_POSSIBLE_PHONEMES = {
  // Consonants & Digrams
  'ch': new Set(['tʃ', 'k', 'ʃ']),
  'tch': new Set(['tʃ']),
  'sh': new Set(['ʃ']),
  'th': new Set(['θ', 'ð']),
  'ph': new Set(['f']),
  'wh': new Set(['w', 'h']),
  'ck': new Set(['k']),
  'ng': new Set(['ŋ', 'n']),
  'gh': new Set(['f', 'g']),
  'qu': new Set(['k', 'w']),
  'wr': new Set(['r']),
  'kn': new Set(['n']),
  'b': new Set(['b']),
  'c': new Set(['k', 's', 'ʃ', 'tʃ']),
  'd': new Set(['d', 'dʒ', 't']),
  'f': new Set(['f', 'v']),
  'g': new Set(['g', 'dʒ', 'ʒ']),
  'h': new Set(['h']),
  'j': new Set(['dʒ']),
  'k': new Set(['k']),
  'l': new Set(['l']),
  'm': new Set(['m']),
  'n': new Set(['n', 'ŋ']),
  'p': new Set(['p', 'f']),
  'r': new Set(['r', 'ɜːr']),
  's': new Set(['s', 'z', 'ʃ', 'ʒ']),
  't': new Set(['t', 'ʃ', 'tʃ', 'θ']),
  'v': new Set(['v']),
  'w': new Set(['w']),
  'x': new Set(['k', 's', 'z']),
  'z': new Set(['z', 'ʒ']),
  
  // Vowels & Digrams
  'a': new Set(['æ', 'eɪ', 'ɑː', 'ɔː', 'ə', 'e', 'ɪ']),
  'e': new Set(['e', 'iː', 'ə', 'ɪ']),
  'i': new Set(['ɪ', 'aɪ', 'iː', 'ə']),
  'o': new Set(['ɒ', 'ɑː', 'oʊ', 'ʌ', 'uː', 'ʊ', 'ə', 'ɔː']),
  'u': new Set(['ʌ', 'juː', 'uː', 'ʊ', 'ə', 'ɜːr']),
  'oo': new Set(['ʊ', 'uː', 'ʌ', 'ɔː', 'oʊ']),
  'ea': new Set(['iː', 'e', 'eɪ', 'ɜːr', 'ɪ', 'æ']),
  'ee': new Set(['iː', 'ɪ']),
  'oa': new Set(['oʊ', 'ɔː']),
  'ou': new Set(['aʊ', 'ʌ', 'uː', 'ʊ', 'oʊ']),
  'ow': new Set(['aʊ', 'oʊ']),
  'ai': new Set(['eɪ', 'e', 'ɪ']),
  'ay': new Set(['eɪ']),
  'ie': new Set(['aɪ', 'iː', 'e']),
  'ei': new Set(['eɪ', 'iː', 'aɪ']),
  'ey': new Set(['eɪ', 'iː']),
  'au': new Set(['ɔː', 'ɑː']),
  'aw': new Set(['ɔː']),
  'oi': new Set(['ɔɪ']),
  'oy': new Set(['ɔɪ']),
  'ui': new Set(['uː', 'ɪ']),
  
  // R-Controlled Vowels
  'er': new Set(['ɜːr', 'ər', 'e', 'ɪ', 'ə']),
  'ar': new Set(['ɑːr', 'ɔː', 'ər', 'æ', 'ɑː']),
  'or': new Set(['ɔː', 'ɜːr', 'ər', 'ɑː']),
  'ur': new Set(['ɜːr', 'ʊ', 'ər']),
  'ir': new Set(['ɜːr', 'aɪ']),
  'air': new Set(['eər']),
  'ear': new Set(['ɪər', 'eər', 'ɜːr', 'ɑːr']),
  'eer': new Set(['ɪər']),
  'oor': new Set(['ɔː', 'ʊər']),
  'our': new Set(['aʊər', 'ɔː', 'ɜːr']),
  'are': new Set(['eər']),
  'ore': new Set(['ɔː'])
};

const VOWEL_GRAPHEMES = new Set([
  'a', 'e', 'i', 'o', 'u', 'y',
  'oo', 'ea', 'ee', 'oa', 'ou', 'ow', 'ai', 'ay', 'ie', 'ei', 'ey', 'au', 'aw', 'oi', 'oy', 'ui',
  'er', 'ar', 'or', 'ur', 'ir', 'air', 'ear', 'eer', 'oor', 'our', 'are', 'ore'
]);

const DEFAULT_FEED_GRAPHEMES = [
  'oo', 'ea', 'ch', 'th', 'sh', 'ee', 'ou', 'ai', 'er', 'ar', 'or', 'ur', 'ir'
];

function normalizeVietnamese(str) {
  if (!str) return '';
  return str.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'd');
}

function matchesWordOrMeaning(word, mean, query) {
  const qRaw = query.toLowerCase().trim();
  const qNorm = normalizeVietnamese(qRaw);
  
  // 1. English word match
  if (word.toLowerCase().includes(qRaw)) return true;
  
  // 2. Vietnamese meaning match
  const meanNorm = normalizeVietnamese(mean);
  if (qNorm.length >= 3) {
    if (meanNorm.includes(qNorm)) return true;
  } else {
    // For short 1-2 char queries, require whole-word match in Vietnamese to prevent 'e' matching 'trên'
    const wordsInMean = meanNorm.split(/[\s,./\(\)]+/);
    if (wordsInMean.includes(qNorm)) return true;
  }
  return false;
}

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function loadStudyLog() {
  const stored = localStorage.getItem('studyLog');
  if (stored) {
    try {
      studyLog = JSON.parse(stored);
    } catch (e) {
      studyLog = {};
    }
  }
}

function recordActivity() {
  lastActivityTime = Date.now();
}

function initActiveTimer() {
  ['mousemove', 'scroll', 'click', 'keydown', 'touchstart'].forEach(evt => {
    window.addEventListener(evt, recordActivity, { passive: true });
  });
  
  setInterval(() => {
    const now = Date.now();
    if (now - lastActivityTime <= 15000) {
      const todayKey = getTodayKey();
      studyLog[todayKey] = (studyLog[todayKey] || 0) + 1;
      localStorage.setItem('studyLog', JSON.stringify(studyLog));
      updateTimeDisplay();
    }
  }, 1000);
}

function calculateStreak() {
  let streak = 0;
  const now = new Date();
  
  for (let i = 0; i < 365; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    
    const seconds = studyLog[key] || 0;
    if (seconds >= 60) {
      streak++;
    } else if (i === 0) {
      continue;
    } else {
      break;
    }
  }
  return streak;
}

function updateTimeDisplay() {
  const todayKey = getTodayKey();
  const todaySecs = studyLog[todayKey] || 0;
  const todayMins = Math.floor(todaySecs / 60);
  
  const scoreTodayEl = document.getElementById('scoreTodayTime');
  if (scoreTodayEl) scoreTodayEl.textContent = todayMins;
  
  const streak = calculateStreak();
  const scoreStreakEl = document.getElementById('scoreStreak');
  if (scoreStreakEl) scoreStreakEl.textContent = streak;
}

window.openStatsModal = function() {
  const modal = document.getElementById('statsModal');
  if (!modal) return;
  
  const todayKey = getTodayKey();
  const todaySecs = studyLog[todayKey] || 0;
  const todayMins = Math.floor(todaySecs / 60);
  
  const now = new Date();
  const dayOfWeek = (now.getDay() + 6) % 7;
  let weekSecs = 0;
  const weekDaysData = [];
  const dayNames = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
  
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - dayOfWeek + i);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const secs = studyLog[key] || 0;
    const mins = Math.floor(secs / 60);
    weekSecs += secs;
    weekDaysData.push({ dayName: dayNames[i], mins, isToday: i === dayOfWeek });
  }
  
  const currentYearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  let monthSecs = 0;
  Object.keys(studyLog).forEach(k => {
    if (k.startsWith(currentYearMonth)) {
      monthSecs += studyLog[k];
    }
  });
  
  document.getElementById('statsStreak').textContent = calculateStreak();
  document.getElementById('statsToday').textContent = todayMins;
  document.getElementById('statsWeek').textContent = Math.floor(weekSecs / 60);
  document.getElementById('statsMonth').textContent = (monthSecs / 3600).toFixed(1);
  
  const chartContainer = document.getElementById('weeklyChart');
  const maxMins = Math.max(...weekDaysData.map(d => d.mins), 15);
  
  chartContainer.innerHTML = weekDaysData.map(d => {
    const heightPercent = Math.min(100, Math.max(5, (d.mins / maxMins) * 100));
    return `
      <div class="chart-bar-container">
        <span class="chart-val">${d.mins > 0 ? d.mins + 'm' : ''}</span>
        <div class="chart-bar ${d.isToday ? 'today' : ''}" style="height: ${heightPercent}%;"></div>
        <span class="chart-label">${d.dayName}</span>
      </div>
    `;
  }).join('');
  
  modal.classList.remove('hidden');
}

window.closeStatsModal = function() {
  document.getElementById('statsModal').classList.add('hidden');
}

// Known Words CEFR Breakdown Modal
window.openKnownWordsModal = function() {
  const modal = document.getElementById('knownWordsModal');
  if (!modal) return;
  
  selectedModalCefrLevel = 'ALL';
  const knownArr = Array.from(knownWords);
  document.getElementById('kwTotalCount').textContent = knownArr.length;
  
  const cefrCounts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, UNK: 0 };
  const masteredList = [];
  
  knownArr.forEach(word => {
    const data = dictionary[word];
    if (data) {
      const level = data.cefr || 'UNK';
      if (cefrCounts[level] !== undefined) cefrCounts[level]++;
      else cefrCounts.UNK++;
      masteredList.push({ word, data });
    }
  });
  
  masteredList.sort((a, b) => a.word.localeCompare(b.word));
  
  window._currentMasteredList = masteredList;
  window._currentCefrCounts = cefrCounts;
  window._currentCefrTotal = knownArr.length || 1;
  
  renderCefrBars();
  renderMasteredWordsList(masteredList);
  
  document.getElementById('filterMasteredInput').value = '';
  modal.classList.remove('hidden');
}

function renderCefrBars() {
  const cefrCounts = window._currentCefrCounts || {};
  const total = window._currentCefrTotal || 1;
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const barsContainer = document.getElementById('cefrBarsContainer');
  if (!barsContainer) return;
  
  barsContainer.innerHTML = levels.map(lvl => {
    const count = cefrCounts[lvl] || 0;
    const percent = Math.round((count / total) * 100);
    const isActive = selectedModalCefrLevel === lvl;
    return `
      <div class="cefr-row ${isActive ? 'active' : ''}" title="Bấm để lọc xem danh sách từ trình độ ${lvl}" onclick="filterMasteredByCefr('${lvl}')">
        <span class="cefr-label">${lvl}</span>
        <div class="cefr-track">
          <div class="cefr-fill ${lvl.toLowerCase()}" style="width: ${percent}%;"></div>
        </div>
        <span class="cefr-stat-text">${count} từ (${percent}%)</span>
      </div>
    `;
  }).join('');
}

window.filterMasteredByCefr = function(lvl) {
  if (selectedModalCefrLevel === lvl) {
    selectedModalCefrLevel = 'ALL';
  } else {
    selectedModalCefrLevel = lvl;
  }
  
  renderCefrBars();
  applyMasteredFilter();
}

function applyMasteredFilter() {
  const list = window._currentMasteredList || [];
  const searchQ = (document.getElementById('filterMasteredInput')?.value || '').toLowerCase().trim();
  
  const filtered = list.filter(item => {
    const matchLevel = (selectedModalCefrLevel === 'ALL' || item.data.cefr === selectedModalCefrLevel);
    const matchSearch = (!searchQ || matchesWordOrMeaning(item.word, item.data.mean, searchQ));
    return matchLevel && matchSearch;
  });
  
  renderMasteredWordsList(filtered);
}

window.closeKnownWordsModal = function() {
  document.getElementById('knownWordsModal').classList.add('hidden');
}

window.openContextVaultModal = function() {
  const modal = document.getElementById('contextVaultModal');
  const container = document.getElementById('contextVaultList');
  if (!modal || !container) return;

  const renderVault = (list, lookupStats = {}) => {
    const vaultCountEl = document.getElementById('vaultCount');
    if (vaultCountEl) vaultCountEl.textContent = list.length;
    
    if (list.length === 0) {
      container.innerHTML = `<p style="color:#64748b; font-size:0.85rem; font-style:italic;">Chưa có từ nâng cao nào được lưu từ việc đọc báo.</p>`;
      return;
    }

    container.innerHTML = list.map(item => {
      const key = (item.word || item.stem || '').toLowerCase();
      const statInfo = lookupStats[key];
      const countText = statInfo ? `👁️ Tra ${statInfo.count} lần` : `👁️ Tra 1 lần`;

      return `
        <div class="mastered-word-card" style="display: flex; flex-direction: column; gap: 0.3rem;">
          <div class="mw-top">
            <span class="mw-word" style="color: #fbbf24;">${item.word} <span style="font-size: 0.75rem; font-weight: normal; color: #93c5fd; background: rgba(96, 165, 250, 0.2); padding: 0.1rem 0.4rem; border-radius: 0.3rem;">${countText}</span></span>
            <span class="cefr-badge" style="background: #f59e0b; color: #000;">${item.cefr || 'C2'}</span>
          </div>
          <div class="mw-details">
            <span style="color: #cbd5e1;"><b>${item.mean}</b></span>
            ${item.synonym3k ? `<span style="color: #c084fc; display: block; margin-top: 0.15rem;">≈ từ gốc 3000: <b>${item.synonym3k}</b></span>` : ''}
            <div style="margin-top: 0.4rem; padding: 0.4rem 0.6rem; background: rgba(255,255,255,0.05); border-left: 3px solid #f59e0b; font-style: italic; font-size: 0.8rem; color: #94a3b8; border-radius: 0.3rem;">
              "${item.sentence}"
            </div>
            <div style="font-size: 0.7rem; color: #64748b; margin-top: 0.2rem; text-align: right;">
              Nguồn: <b>${item.domain || 'web'}</b>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['encounteredAdvancedWords', 'wordLookupStats'], (res) => {
      renderVault(res.encounteredAdvancedWords || [], res.wordLookupStats || {});
    });
  } else {
    renderVault([], {});
  }

  modal.classList.remove('hidden');
}

window.closeContextVaultModal = function() {
  document.getElementById('contextVaultModal').classList.add('hidden');
}

function renderMasteredWordsList(list) {
  const container = document.getElementById('masteredWordsList');
  if (!container) return;
  if (list.length === 0) {
    const levelText = selectedModalCefrLevel !== 'ALL' ? ` ở trình độ ${selectedModalCefrLevel}` : '';
    container.innerHTML = `<p style="color:#64748b; font-size:0.85rem; font-style:italic; grid-column: 1/-1;">Chưa có từ nào${levelText}</p>`;
    return;
  }
  
  container.innerHTML = list.map(item => {
    const ipaStr = item.data.ipa[0].join('');
    return `
      <div class="mastered-word-card">
        <div class="mw-top">
          <span class="mw-word">${item.word}</span>
          <span class="cefr-badge">${item.data.cefr || 'A1'}</span>
        </div>
        <div class="mw-details">
          <span>/${ipaStr}/</span>
          <span style="display:block; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;" title="${item.data.mean}">${item.data.mean}</span>
        </div>
      </div>
    `;
  }).join('');
}

window.filterMasteredWords = function(query) {
  applyMasteredFilter();
}

function extractGraphemes(word) {
  const DIGRAMS = [
    'oo', 'ea', 'ee', 'oa', 'ou', 'ow', 'ai', 'ay', 'ie', 'ei', 'ey', 'au', 'aw', 'oi', 'oy', 'ui',
    'er', 'ar', 'or', 'ur', 'ir', 'air', 'ear', 'eer', 'oor', 'our', 'are', 'ore',
    'ch', 'sh', 'th', 'ph', 'wh', 'ck', 'ng', 'gh', 'qu', 'wr', 'kn', 'tch', 'dg'
  ];
  const SINGLE_VOWELS = ['a', 'e', 'i', 'o', 'u'];
  
  const wordLower = word.toLowerCase();
  const foundMap = new Map();
  
  DIGRAMS.forEach(g => {
    const idx = wordLower.indexOf(g);
    if (idx !== -1) {
      foundMap.set(g, idx);
    }
  });
  
  SINGLE_VOWELS.forEach(v => {
    const idx = wordLower.indexOf(v);
    if (idx !== -1 && !foundMap.has(v)) {
      foundMap.set(v, idx);
    }
  });
  
  const sorted = Array.from(foundMap.keys()).sort((a, b) => foundMap.get(a) - foundMap.get(b));
  return sorted;
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3500);
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    });
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMessage);
  }
}

window.reportSingleWord = function(word) {
  currentReportWord = word;
  const modal = document.getElementById('singleWordReportModal');
  const desc = document.getElementById('singleWordModalDesc');
  const data = dictionary[word];
  const mainIpa = data ? data.ipa[0].join('') : '';
  
  desc.innerHTML = `Từ đang chọn: <b style="color:#60a5fa; font-size:1.1rem;">${word}</b> /${mainIpa}/ (${data ? data.mean : ''})`;
  modal.classList.remove('hidden');
}

window.closeSingleWordReportModal = function() {
  document.getElementById('singleWordReportModal').classList.add('hidden');
}

window.submitSingleWordReport = function() {
  const reason = document.getElementById('singleWordReportReason').value;
  const data = dictionary[currentReportWord];
  const mainIpa = data ? data.ipa[0].join('') : '';
  
  const reportText = `[BÁO LỖI TỪ LẺ] Từ: ${currentReportWord} | IPA: /${mainIpa}/ | Nghĩa: ${data ? data.mean : ''} | Query đang tra: ${currentQuery || 'Feed'} | Lý do: ${reason}`;
  
  copyToClipboard(reportText, `📋 Đã copy báo lỗi từ "${currentReportWord}"! Bấm Ctrl + V trong chat để gửi cho AI.`);
  closeSingleWordReportModal();
}

window.openGroupReportModal = function(groupKey) {
  currentModalGroupKey = groupKey;
  currentModalWords = currentGroups[groupKey] || [];
  
  const modal = document.getElementById('reportModal');
  const title = document.getElementById('modalTitle');
  const wordListContainer = document.getElementById('modalWordList');
  const selectAll = document.getElementById('selectAllWords');
  
  title.textContent = `🚩 Báo Lỗi Nhóm: ${groupKey}`;
  selectAll.checked = false;
  
  wordListContainer.innerHTML = currentModalWords.map((item, idx) => `
    <label class="modal-word-item">
      <input type="checkbox" class="modal-word-cb" value="${item.word}">
      <span><b>${item.word}</b> /${item.data.ipa[item.matchedPronIndex].join('')}/ - ${item.data.mean}</span>
    </label>
  `).join('');
  
  modal.classList.remove('hidden');
}

window.closeReportModal = function() {
  document.getElementById('reportModal').classList.add('hidden');
}

window.toggleSelectAllModalWords = function(mainCb) {
  document.querySelectorAll('.modal-word-cb').forEach(cb => {
    cb.checked = mainCb.checked;
  });
}

window.submitGroupReport = function() {
  const selectedCbs = document.querySelectorAll('.modal-word-cb:checked');
  const reason = document.getElementById('modalReportReason').value;
  
  if (selectedCbs.length === 0) {
    alert('Vui lòng tích chọn ít nhất 1 từ bị sai để báo lỗi!');
    return;
  }
  
  const selectedWords = Array.from(selectedCbs).map(cb => cb.value);
  const wordDetails = selectedWords.map(w => {
    const d = dictionary[w];
    const ipaStr = d ? d.ipa[0].join('') : '';
    return `${w} (/${ipaStr}/)`;
  }).join(', ');
  
  const reportText = `[BÁO LỖI NHÓM] Query: ${currentQuery || 'Feed'} | Nhóm: ${currentModalGroupKey} | Lý do: ${reason} | Từ bị sai (${selectedWords.length} từ): ${wordDetails}`;
  
  copyToClipboard(reportText, `📋 Đã copy báo lỗi ${selectedWords.length} từ! Bấm Ctrl + V trong chat để gửi cho AI.`);
  closeReportModal();
}

window.searchGrapheme = function(grapheme) {
  const searchInput = document.getElementById('searchInput');
  searchInput.value = grapheme;
  groupLimits = {};
  handleSearch(grapheme);
  window.scrollTo({ top: 150, behavior: 'smooth' });
}

async function loadDictionary() {
  const loadingEl = document.getElementById('loading');
  loadingEl.classList.remove('hidden');
  
  try {
    let response;
    try {
      response = await fetch('/dictionary_oxford.json');
      if (!response.ok) throw new Error('Not ok');
    } catch (e) {
      try {
        response = await fetch('./public/dictionary_oxford.json');
        if (!response.ok) throw new Error('Not ok');
      } catch (e2) {
        response = await fetch('dictionary_oxford.json');
      }
    }
    dictionary = await response.json();
    loadingEl.classList.add('hidden');
    
    const heteronymsCount = Object.values(dictionary).filter(d => d.ipa.length > 1).length;
    document.getElementById('btnHeteronyms').textContent = `📚 Xem ${heteronymsCount} từ đa âm`;
    
    renderDefaultFeed();
    
  } catch (error) {
    loadingEl.textContent = 'Lỗi tải từ điển!';
    console.error(error);
  }
}

function syncToChromeStorage() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.set({
      knownWords: [...knownWords],
      knownRules: [...knownRules],
      studyLog: studyLog
    });
  }
}

function loadKnownData() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['knownWords', 'knownRules', 'studyLog'], (res) => {
      if (res.knownWords) knownWords = new Set(res.knownWords);
      if (res.knownRules) knownRules = new Set(res.knownRules);
      if (res.studyLog) studyLog = res.studyLog;
      
      updateRestoreButton();
      updateScore();
      updateTimeDisplay();
    });
  } else {
    const storedWords = localStorage.getItem('knownWords');
    if (storedWords) knownWords = new Set(JSON.parse(storedWords));
    const storedRules = localStorage.getItem('knownRules');
    if (storedRules) knownRules = new Set(JSON.parse(storedRules));
    loadStudyLog();
    updateRestoreButton();
    updateScore();
    updateTimeDisplay();
  }
}

function calculateCoveredWords() {
  const coveredWords = new Set();
  
  knownRules.forEach(ruleId => {
    const dashIdx = ruleId.lastIndexOf('-');
    if (dashIdx === -1) return;
    const query = ruleId.substring(0, dashIdx);
    const groupKey = ruleId.substring(dashIdx + 1);
    
    Object.keys(dictionary).forEach(word => {
      if (word.includes(query)) {
        const data = dictionary[word];
        data.ipa.forEach(ipaArray => {
          const phoneme = getPhonemeForQuery(word, query, ipaArray);
          if (phoneme === groupKey) {
            coveredWords.add(word);
          }
        });
      }
    });
  });
  
  return coveredWords.size;
}

function updateScore() {
  const scoreRulesEl = document.getElementById('scoreRules');
  const scoreWordsEl = document.getElementById('scoreWords');
  const coveredWordsEl = document.getElementById('scoreCoveredWords');
  
  const rulesCount = knownRules.size;
  const wordsCount = knownWords.size;
  const coveredCount = calculateCoveredWords();
  
  if (scoreRulesEl && scoreRulesEl.textContent != rulesCount) {
    scoreRulesEl.textContent = rulesCount;
    scoreRulesEl.classList.add('score-bump');
    setTimeout(() => scoreRulesEl.classList.remove('score-bump'), 300);
  }
  
  if (scoreWordsEl && scoreWordsEl.textContent != wordsCount) {
    scoreWordsEl.textContent = wordsCount;
    scoreWordsEl.classList.add('score-bump');
    setTimeout(() => scoreWordsEl.classList.remove('score-bump'), 300);
  }
  
  if (coveredWordsEl && coveredWordsEl.textContent != coveredCount) {
    coveredWordsEl.textContent = coveredCount;
    coveredWordsEl.classList.add('score-bump');
    setTimeout(() => coveredWordsEl.classList.remove('score-bump'), 300);
  }
}

function updateRestoreButton() {
  const btn = document.getElementById('btnRestoreKnown');
  const countSpan = document.getElementById('knownCount');
  
  if (knownWords.size > 0 || knownRules.size > 0) {
    btn.classList.remove('hidden');
    countSpan.textContent = knownWords.size;
  } else {
    btn.classList.add('hidden');
  }
}

window.markAsKnown = function(word) {
  const isNowKnown = !knownWords.has(word);
  if (isNowKnown) {
    knownWords.add(word);
  } else {
    knownWords.delete(word);
  }
  localStorage.setItem('knownWords', JSON.stringify([...knownWords]));
  syncToChromeStorage();
  updateRestoreButton();
  updateScore();
  
  const targetItems = document.querySelectorAll(`.example-item[data-word="${word}"]`);
  
  // Update exact card button if exists
  const exactBtn = document.querySelector(`.exact-btn[data-exact-word="${word}"]`);
  if (exactBtn) {
    const exactCard = exactBtn.closest('.exact-word-card');
    if (isNowKnown) {
      exactBtn.textContent = '✅';
      exactBtn.title = 'Chuyển lại về nhóm chưa thuộc';
      if (exactCard) exactCard.classList.add('is-known');
    } else {
      exactBtn.textContent = '✔️';
      exactBtn.title = 'Tôi đã biết từ này';
      if (exactCard) exactCard.classList.remove('is-known');
    }
  }

  if (targetItems.length > 0) {
    targetItems.forEach(item => {
      const card = item.closest('.phonetic-card');
      if (!card) return;
      
      const unlearnedUl = card.querySelector('.col-unlearned .examples-list');
      const learnedUl = card.querySelector('.col-learned .examples-list');
      const unlearnedCountSpan = card.querySelector('.col-unlearned .col-count');
      const learnedCountSpan = card.querySelector('.col-learned .col-count');
      
      if (!unlearnedUl || !learnedUl) return;
      
      item.classList.add(isNowKnown ? 'fly-out-right' : 'fly-in-left');
      
      setTimeout(() => {
        item.classList.remove('fly-out-right', 'fly-in-left');
        
        if (isNowKnown) {
          item.classList.add('is-known');
          const checkBtn = item.querySelector('.mark-known-btn');
          if (checkBtn) {
            checkBtn.textContent = '✅';
            checkBtn.title = 'Bấm để chuyển về từ cần học';
          }
          item.classList.add('fly-start');
          learnedUl.insertBefore(item, learnedUl.firstChild);
          
          const placeholder = learnedUl.querySelector('p');
          if (placeholder) placeholder.remove();
        } else {
          item.classList.remove('is-known');
          const checkBtn = item.querySelector('.mark-known-btn');
          if (checkBtn) {
            checkBtn.textContent = '✔️';
            checkBtn.title = 'Bấm để đánh dấu đã thuộc';
          }
          item.classList.add('fly-start');
          unlearnedUl.insertBefore(item, unlearnedUl.firstChild);
          
          const placeholder = unlearnedUl.querySelector('p');
          if (placeholder) placeholder.remove();
        }
        
        requestAnimationFrame(() => {
          setTimeout(() => {
            item.classList.remove('fly-start');
          }, 20);
        });
        
        if (unlearnedCountSpan) {
          const current = unlearnedUl.querySelectorAll('.example-item').length;
          unlearnedCountSpan.textContent = current;
          if (current === 0) {
            unlearnedUl.innerHTML = `<p style="color:#64748b; font-size:0.85rem; font-style:italic; padding:0.5rem 0;">Chưa có từ nào</p>`;
          }
        }
        if (learnedCountSpan) {
          const current = learnedUl.querySelectorAll('.example-item').length;
          learnedCountSpan.textContent = current;
          if (current === 0) {
            learnedUl.innerHTML = `<p style="color:#64748b; font-size:0.85rem; font-style:italic; padding:0.5rem 0;">Chưa có từ nào</p>`;
          }
        }
      }, 250);
    });
  } else if (!exactBtn) {
    if (isShowingHeteronyms) {
      renderHeteronyms();
    } else if (!currentQuery) {
      renderDefaultFeed();
    } else {
      handleSearch(currentQuery);
    }
  }
}

window.markRuleAsKnown = function(groupKey) {
  const ruleId = `${currentQuery}-${groupKey}`;
  if (knownRules.has(ruleId)) {
    knownRules.delete(ruleId);
  } else {
    knownRules.add(ruleId);
  }
  
  localStorage.setItem('knownRules', JSON.stringify([...knownRules]));
  syncToChromeStorage();
  
  updateRestoreButton();
  updateScore();
  if (!currentQuery) {
    renderDefaultFeed();
  } else {
    handleSearch(currentQuery);
  }
}

window.restoreKnown = function() {
  knownWords.clear();
  knownRules.clear();
  localStorage.removeItem('knownWords');
  localStorage.removeItem('knownRules');
  syncToChromeStorage();
  updateRestoreButton();
  updateScore();
  if (isShowingHeteronyms) {
    renderHeteronyms();
  } else if (!currentQuery) {
    renderDefaultFeed();
  } else {
    handleSearch(currentQuery);
  }
}

window.loadMoreColumn = function(key) {
  groupLimits[key] = (groupLimits[key] || 5) + 5;
  if (isShowingHeteronyms) {
    renderHeteronyms();
  } else if (!currentQuery) {
    renderDefaultFeed();
  } else {
    handleSearch(currentQuery);
  }
}

function getWordConsonants(word) {
  let temp = word.toLowerCase();
  const consonants = [];
  let i = 0;
  while (i < temp.length) {
    let matchedDigram = null;
    for (const d of CONSONANT_DIGRAMS) {
      if (temp.startsWith(d, i)) {
        matchedDigram = d;
        break;
      }
    }
    if (matchedDigram) {
      consonants.push(matchedDigram);
      i += matchedDigram.length;
    } else {
      const char = temp[i];
      if (char === 'x') {
        consonants.push('k', 's');
      } else if (!/[aeiouy]/.test(char) && /[a-z]/.test(char)) {
        consonants.push(char);
      }
      i++;
    }
  }
  return consonants;
}

function getPhonemeForQuery(word, query, ipaArray) {
  if (!Array.isArray(ipaArray)) return null;
  const q = query.toLowerCase().trim();
  const allowed = GRAPHEME_POSSIBLE_PHONEMES[q];
  
  const isVowelsQuery = VOWEL_GRAPHEMES.has(q) || /^[aeiouy]+/i.test(q);
  
  if (isVowelsQuery) {
    const textVowelsRegex = /[aeiouy]+/ig;
    const wordVowels = [];
    let match;
    while ((match = textVowelsRegex.exec(word)) !== null) {
      wordVowels.push(match[0].toLowerCase());
    }
    
    const ipaVowels = ipaArray.filter(p => IPA_VOWELS.has(p));
    let vIndex = wordVowels.indexOf(q);
    if (vIndex === -1) {
      vIndex = wordVowels.findIndex(v => v.includes(q) || q.includes(v));
    }

    // 0. Rule for Trailing Silent E (Magic E)
    const wordLower = word.toLowerCase();
    if (q === 'e' && wordLower.endsWith('e') && !wordLower.endsWith('ee') && !wordLower.endsWith('le')) {
      if (ipaVowels.length < wordVowels.length && vIndex === wordVowels.length - 1) {
        return null; // Silent E (Âm câm)
      }
    }

    // 1. Direct index match
    if (vIndex !== -1 && vIndex < ipaVowels.length) {
      const direct = ipaVowels[vIndex];
      if (!allowed || allowed.has(direct)) {
        return direct;
      }
    }
    
    // 2. Nearest allowed phoneme match
    if (allowed && ipaVowels.length > 0) {
      let bestPhoneme = null;
      let minDistance = Infinity;
      const targetIdx = vIndex !== -1 ? vIndex : 0;
      ipaVowels.forEach((p, idx) => {
        if (allowed.has(p)) {
          const dist = Math.abs(idx - targetIdx);
          if (dist < minDistance) {
            minDistance = dist;
            bestPhoneme = p;
          }
        }
      });
      if (bestPhoneme) return bestPhoneme;
    }
  }
  else {
    const wordConsonants = getWordConsonants(word);
    const ipaConsonants = ipaArray.filter(p => !IPA_VOWELS.has(p));
    
    let cIndex = wordConsonants.indexOf(q);
    if (cIndex === -1) {
      cIndex = wordConsonants.findIndex(c => c.includes(q));
    }
    if (cIndex === -1) return null;
    
    // 1. Direct index match
    if (cIndex < ipaConsonants.length) {
      const direct = ipaConsonants[cIndex];
      if (!allowed || allowed.has(direct)) {
        return direct;
      }
    }
    
    // 2. Nearest allowed phoneme match
    if (allowed && ipaConsonants.length > 0) {
      let bestPhoneme = null;
      let minDistance = Infinity;
      ipaConsonants.forEach((p, idx) => {
        if (allowed.has(p)) {
          const dist = Math.abs(idx - cIndex);
          if (dist < minDistance || (dist === minDistance && p === q)) {
            minDistance = dist;
            bestPhoneme = p;
          }
        }
      });
      if (bestPhoneme) return bestPhoneme;
    }
  }
  
  return null;
}

function renderExactWord(word, data) {
  const isKnown = knownWords.has(word);
  const card = document.createElement('div');
  card.className = `phonetic-card exact-word-card ${isKnown ? 'is-known' : ''}`;
  
  const pronsHtml = data.ipa.map((ipaArray, idx) => {
    const ipaStr = ipaArray.join('');
    return `
    <div class="exact-pron-item">
      <span class="exact-pron-ipa">/${ipaStr}/</span>
      <span class="exact-pron-mean">${idx === 0 ? data.mean : ''}</span>
    </div>
  `}).join('');
  
  const checkIcon = isKnown ? '✅' : '✔️';
  const checkTitle = isKnown ? 'Chuyển lại về nhóm chưa thuộc' : 'Tôi đã biết từ này';
  
  const chips = extractGraphemes(word);
  const chipsHtml = chips.length > 0 ? `
    <div class="grapheme-chips">
      ${chips.map(c => `<button class="grapheme-chip" title="Xem quy luật '${c}'" onclick="searchGrapheme('${c}')">${c}</button>`).join('')}
    </div>
  ` : '';
  
  card.innerHTML = `
    <div class="exact-word-title">
      <span>
        ${word} 
        <button class="mark-known-btn exact-btn" style="font-size: 1.5rem;" title="${checkTitle}" onclick="markAsKnown('${word}')" data-exact-word="${word}">${checkIcon}</button>
        <button class="btn-report-single" title="Báo lỗi từ này" onclick="reportSingleWord('${word}')">🚩</button>
      </span>
      <span class="cefr-badge" style="font-size: 1rem; padding: 0.3rem 0.6rem;">${data.cefr}</span>
    </div>
    ${chipsHtml}
    <div class="exact-word-pronunciations" style="margin-top: 0.8rem;">
      ${pronsHtml}
    </div>
  `;
  
  return card;
}

function renderExampleList(items, isKnownCol) {
  if (items.length === 0) {
    return `<p style="color:#64748b; font-size:0.85rem; font-style:italic; padding:0.5rem 0;">Chưa có từ nào</p>`;
  }
  
  return items.map(ex => {
    const mainIpaArray = ex.data.ipa[ex.matchedPronIndex];
    const mainIpaStr = mainIpaArray.join('');
    
    let hintHtml = '';
    if (ex.data.ipa.length > 1) {
      const otherIpas = [...new Set(
        ex.data.ipa
          .filter((_, idx) => idx !== ex.matchedPronIndex)
          .map(arr => `/${arr.join('')}/`)
      )];
      if (otherIpas.length > 0) {
        hintHtml = `<div class="example-hint">(hoặc ${otherIpas.join(', ')})</div>`;
      }
    }
    
    const checkIcon = isKnownCol ? '✅' : '✔️';
    const checkTitle = isKnownCol ? 'Bấm để chuyển về từ cần học' : 'Bấm để đánh dấu đã thuộc';
    
    const chips = extractGraphemes(ex.word);
    const chipsHtml = chips.length > 0 ? `
      <div class="grapheme-chips">
        ${chips.map(c => `<button class="grapheme-chip" title="Khám phá quy luật '${c}'" onclick="searchGrapheme('${c}')">${c}</button>`).join('')}
      </div>
    ` : '';
    
    return `
    <li class="example-item ${isKnownCol ? 'is-known' : ''}" data-word="${ex.word}">
      ${hintHtml}
      <div class="example-word-row">
        <div>
          <span class="example-word">${ex.word}</span>
          <button class="mark-known-btn" title="${checkTitle}" onclick="markAsKnown('${ex.word}')">${checkIcon}</button>
          <button class="btn-report-single" title="Báo lỗi từ này" onclick="reportSingleWord('${ex.word}')">🚩</button>
        </div>
        <span class="cefr-badge">${ex.data.cefr}</span>
      </div>
      <div class="example-details">
        <span class="example-ipa">/${mainIpaStr}/</span>
        <span class="example-mean">${ex.data.mean}</span>
      </div>
      ${chipsHtml}
    </li>
  `}).join('');
}

function renderGroups(groups, prependElement = null) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';
  
  if (prependElement) {
    resultsContainer.appendChild(prependElement);
  }
  
  const sortedGroups = Object.keys(groups)
    .sort((a, b) => groups[b].length - groups[a].length)
    .filter(v => groups[v].length > 0);
    
  if (sortedGroups.length === 0 && !prependElement) {
    resultsContainer.innerHTML = '<p style="color:#94a3b8; width: 100%; text-align: center;">Không có kết quả cho bộ lọc hiện tại.</p>';
    return;
  }
    
  sortedGroups.forEach((groupKey, index) => {
    const allWordsInGroup = groups[groupKey];
    const ruleId = `${currentQuery}-${groupKey}`;
    const isRuleKnown = knownRules.has(ruleId);
    
    const unlearned = allWordsInGroup.filter(ex => !knownWords.has(ex.word))
      .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
      
    const learned = allWordsInGroup.filter(ex => knownWords.has(ex.word))
      .sort((a, b) => a.word.length - b.word.length || a.word.localeCompare(b.word));
      
    const limitUn = groupLimits[groupKey + '_un'] || 5;
    const limitLe = groupLimits[groupKey + '_le'] || 5;
    
    const examplesUn = unlearned.slice(0, limitUn);
    const examplesLe = learned.slice(0, limitLe);
    
    const hasMoreUn = unlearned.length > limitUn;
    const hasMoreLe = learned.length > limitLe;
    
    const unlearnedHtml = renderExampleList(examplesUn, false);
    const learnedHtml = renderExampleList(examplesLe, true);
    
    const loadMoreUnHtml = hasMoreUn 
      ? `<button class="load-more-btn" onclick="loadMoreColumn('${groupKey}_un')">Xem thêm 5 từ...</button>` 
      : '';
      
    const loadMoreLeHtml = hasMoreLe 
      ? `<button class="load-more-btn" onclick="loadMoreColumn('${groupKey}_le')">Xem thêm 5 từ...</button>` 
      : '';
    
    let headerTitle = `/${groupKey}/`;
    if (groupKey === 'Âm câm') headerTitle = '🔇 Âm câm (bỏ không đọc)';
    else if (groupKey === 'Khác') headerTitle = 'Âm khác';
    else if (groupKey.includes(' ➜ ')) headerTitle = groupKey;
    
    let ruleBtnHtml = '';
    if (!isShowingHeteronyms && groupKey !== 'Khác' && !groupKey.includes(' ➜ ')) {
      const btnText = isRuleKnown 
        ? '✅ Quy luật này được bạn đánh dấu đã thuộc' 
        : (groupKey === 'Âm câm' ? '✔️ Đánh dấu đã biết các âm câm này' : '✔️ Đánh dấu thuộc quy luật này');
      ruleBtnHtml = `<button class="mark-rule-btn" onclick="markRuleAsKnown('${groupKey}')">${btnText}</button>`;
    }
    
    const reportGroupBtnHtml = `<button class="btn-report-group" onclick="openGroupReportModal('${groupKey}')">🚩 Báo lỗi</button>`;
    
    const card = document.createElement('div');
    card.className = `phonetic-card ${isRuleKnown ? 'is-known-rule' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <div class="phonetic-header" style="align-items: center; flex-wrap: wrap; gap: 0.5rem;">
        <div>
          <span class="phonetic-symbol">${headerTitle}</span>
          <span class="word-count">${allWordsInGroup.length} từ</span>
        </div>
        <div>
          ${ruleBtnHtml}
          ${reportGroupBtnHtml}
        </div>
      </div>
      
      <div class="card-body-2col">
        <div class="card-col col-unlearned">
          <div class="col-header unlearned">
            <span>📌 Cần học</span>
            <span class="col-count">${unlearned.length}</span>
          </div>
          <ul class="examples-list">
            ${unlearnedHtml}
          </ul>
          ${loadMoreUnHtml}
        </div>
        
        <div class="card-col col-learned">
          <div class="col-header learned">
            <span>✅ Đã thuộc</span>
            <span class="col-count">${learned.length}</span>
          </div>
          <ul class="examples-list">
            ${learnedHtml}
          </ul>
          ${loadMoreLeHtml}
        </div>
      </div>
    `;
    
    resultsContainer.appendChild(card);
  });
}

function renderDefaultFeed() {
  isShowingHeteronyms = false;
  currentQuery = '';
  
  const groups = {};
  
  DEFAULT_FEED_GRAPHEMES.forEach(query => {
    const matchingWords = Object.keys(dictionary)
      .filter(word => word.includes(query))
      .filter(word => selectedLevel === 'ALL' || dictionary[word].cefr === selectedLevel);
      
    matchingWords.forEach(word => {
      const data = dictionary[word];
      const matchedGroups = new Set();
      
      data.ipa.forEach((ipaArray, pronIndex) => {
        const targetPhoneme = getPhonemeForQuery(word, query, ipaArray);
        const groupKey = targetPhoneme || 'Âm câm';
        
        const feedGroupKey = `Quy luật "${query}" ➜ /${groupKey}/`;
        
        if (!groups[feedGroupKey]) {
          groups[feedGroupKey] = [];
        }
        
        if (!matchedGroups.has(feedGroupKey)) {
          groups[feedGroupKey].push({ word, data, matchedPronIndex: pronIndex });
          matchedGroups.add(feedGroupKey);
        }
      });
    });
  });
  
  currentGroups = groups;
  renderGroups(groups);
}

function handleSearch(query) {
  isShowingHeteronyms = false;
  currentQuery = query;
  if (!query || query.trim().length < 1) {
    renderDefaultFeed();
    return;
  }
  
  const qRaw = query.toLowerCase().trim();
  
  const matchingWords = Object.keys(dictionary)
    .filter(word => {
      const data = dictionary[word];
      const levelMatch = (selectedLevel === 'ALL' || data.cefr === selectedLevel);
      if (!levelMatch) return false;
      return matchesWordOrMeaning(word, data.mean, qRaw);
    });
    
  let exactMatchElement = null;
  let exactWordKey = null;
  if (dictionary[qRaw]) {
    exactWordKey = qRaw;
  } else {
    const qNorm = normalizeVietnamese(qRaw);
    const exactMeanMatch = Object.keys(dictionary).find(w => normalizeVietnamese(dictionary[w].mean) === qNorm);
    if (exactMeanMatch) exactWordKey = exactMeanMatch;
  }
  
  if (exactWordKey && (selectedLevel === 'ALL' || dictionary[exactWordKey].cefr === selectedLevel)) {
    exactMatchElement = renderExactWord(exactWordKey, dictionary[exactWordKey]);
  }
  
  if (matchingWords.length === 0 && !exactMatchElement) {
    document.getElementById('results').innerHTML = '<p style="color:#94a3b8; width: 100%; text-align: center;">Không tìm thấy kết quả cho bộ lọc hiện tại.</p>';
    return;
  }
  
  const groups = {};
  
  matchingWords.forEach(word => {
    const data = dictionary[word];
    const matchedGroups = new Set();
    
    data.ipa.forEach((ipaArray, pronIndex) => {
      const targetPhoneme = getPhonemeForQuery(word, qRaw, ipaArray);
      const groupKey = targetPhoneme || 'Âm câm';
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      
      if (!matchedGroups.has(groupKey)) {
        groups[groupKey].push({ word, data, matchedPronIndex: pronIndex });
        matchedGroups.add(groupKey);
      }
    });
  });
  
  currentGroups = groups;
  renderGroups(groups, exactMatchElement);
}

function renderHeteronyms() {
  isShowingHeteronyms = true;
  document.getElementById('searchInput').value = '';
  
  const heteronymWords = Object.keys(dictionary)
    .filter(word => dictionary[word].ipa.length > 1)
    .filter(word => selectedLevel === 'ALL' || dictionary[word].cefr === selectedLevel);
    
  const groups = {
    'Từ Đa Âm': []
  };
  
  heteronymWords.forEach(word => {
    groups['Từ Đa Âm'].push({ word, data: dictionary[word], matchedPronIndex: 0 });
  });
  
  currentGroups = groups;
  renderGroups(groups);
}

document.addEventListener('DOMContentLoaded', () => {
  loadDictionary();
  loadKnownData();
  initActiveTimer();
  
  if (window.location.search.includes('openVault=true')) {
    setTimeout(() => {
      openContextVaultModal();
    }, 300);
  }
  
  const searchInput = document.getElementById('searchInput');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    const query = e.target.value;
    debounceTimer = setTimeout(() => {
      groupLimits = {};
      if (!query || query.trim().length === 0) {
        renderDefaultFeed();
      } else {
        handleSearch(query);
      }
    }, 400);
  });
  
  document.querySelectorAll('.level-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.level-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedLevel = e.target.getAttribute('data-level');
      
      groupLimits = {};
      if (isShowingHeteronyms) {
        renderHeteronyms();
      } else if (!currentQuery) {
        renderDefaultFeed();
      } else {
        handleSearch(currentQuery);
      }
    });
  });
  
  document.getElementById('btnHeteronyms').addEventListener('click', () => {
    groupLimits = {}; 
    renderHeteronyms();
  });
  
  document.getElementById('btnRestoreKnown').addEventListener('click', () => {
    restoreKnown();
  });
});
