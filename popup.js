function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function calculateStreak(studyLog) {
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

document.addEventListener('DOMContentLoaded', () => {
  const toggleHighlighter = document.getElementById('toggleHighlighter');
  const toggleShowKnown = document.getElementById('toggleShowKnown');
  const btnOpenFullPage = document.getElementById('btnOpenFullPage');
  
  // Load data from chrome.storage.local or fallback to localStorage
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['knownWords', 'knownRules', 'studyLog', 'highlighterEnabled', 'showKnownHighlights', 'encounteredAdvancedWords', 'wordLookupStats'], (res) => {
      const knownWords = res.knownWords || [];
      const knownRules = res.knownRules || [];
      const studyLog = res.studyLog || {};
      const vaultList = res.encounteredAdvancedWords || [];
      const wordStats = res.wordLookupStats || {};
      const enabled = res.highlighterEnabled !== undefined ? res.highlighterEnabled : true;
      const showKnown = res.showKnownHighlights !== undefined ? res.showKnownHighlights : true;
      
      const uniqueWords = new Set([
        ...vaultList.map(w => (w.stem || w.word).toLowerCase()),
        ...Object.keys(wordStats)
      ]);
      
      document.getElementById('popKnownWords').textContent = knownWords.length;
      document.getElementById('popKnownRules').textContent = knownRules.length;
      const popVaultEl = document.getElementById('popVaultCount');
      if (popVaultEl) popVaultEl.textContent = uniqueWords.size;
      
      const todayKey = getTodayKey();
      const todaySecs = studyLog[todayKey] || 0;
      document.getElementById('popTime').textContent = `${Math.floor(todaySecs / 60)}m`;
      document.getElementById('popStreak').textContent = calculateStreak(studyLog);
      
      toggleHighlighter.checked = enabled;
      toggleShowKnown.checked = showKnown;
    });

    toggleHighlighter.addEventListener('change', (e) => {
      chrome.storage.local.set({ highlighterEnabled: e.target.checked });
    });

    toggleShowKnown.addEventListener('change', (e) => {
      chrome.storage.local.set({ showKnownHighlights: e.target.checked });
    });
  }

  const btnManualScan = document.getElementById('btnManualScan');
  if (btnManualScan) {
    btnManualScan.addEventListener('click', () => {
      if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.query) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          if (tabs[0] && tabs[0].id) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'MANUAL_SCAN' }, (res) => {
              btnManualScan.querySelector('span').textContent = '✅ Đã quét xong trang này!';
              setTimeout(() => {
                btnManualScan.querySelector('span').textContent = '🔍 Quét & Gạch Chân Trang Này';
              }, 2000);
            });
          }
        });
      }
    });
  }

  const btnOpenVault = document.getElementById('btnOpenVault');
  if (btnOpenVault) {
    btnOpenVault.addEventListener('click', () => {
      if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
        chrome.tabs.create({ url: chrome.runtime.getURL('vault.html') });
      } else {
        window.open('http://localhost:5120/vault.html', '_blank');
      }
    });
  }

  // Open Full Page Button
  btnOpenFullPage.addEventListener('click', () => {
    if (typeof chrome !== 'undefined' && chrome.tabs && chrome.tabs.create) {
      chrome.tabs.create({ url: chrome.runtime.getURL('index.html') });
    } else {
      window.open('http://localhost:5120/', '_blank');
    }
  });
});
