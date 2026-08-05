(function() {
  let dictionary = {};
  let knownWords = new Set();
  let highlighterEnabled = true;
  let tooltipEl = null;
  let hideTimer = null;
  let activeTimer = null;
  let vietnameseToEnglishMap = new Map();
  let userPrioritizedPhrases = [];
  let customDictionary = {};
  let wordLookupStats = {};
  let showKnownHighlights = false;
  let showUnknownHighlights = false;
  let vietnamesePhrasesRegex = null;

  // 1. Rich Synonym Mapping to Oxford 3000 Core Words with IPA & Level
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

  // 2. Advanced Words Fallback Dictionary
  const ADVANCED_FALLBACK_DICT = {
    'rescind': { mean: 'hủy bỏ, thu hồi', ipa: [['rɪ', 'sɪnd']], cefr: 'C2', isAdvanced: true },
    'rescinds': { mean: 'hủy bỏ, thu hồi', ipa: [['rɪ', 'sɪndz']], cefr: 'C2', isAdvanced: true },
    'rescinded': { mean: 'hủy bỏ, thu hồi', ipa: [['rɪ', 'sɪndɪd']], cefr: 'C2', isAdvanced: true },
    'hurdle': { mean: 'rào cản, trở ngại', ipa: [['hɜːr', 'dl']], cefr: 'C1', isAdvanced: true },
    'hurdles': { mean: 'rào cản, trở ngại', ipa: [['hɜːr', 'dlz']], cefr: 'C1', isAdvanced: true },
    'weaponization': { mean: 'vũ khí hóa', ipa: [['wep', 'ə', 'naɪ', 'zeɪ', 'ʃn']], cefr: 'C2', isAdvanced: true }
  };

  function buildVietnameseMap() {
    vietnameseToEnglishMap.clear();
    Object.keys(dictionary).forEach(enWord => {
      const item = dictionary[enWord];
      if (item && item.mean) {
        const means = item.mean.split(/[,;]/).map(m => m.trim().toLowerCase()).filter(m => m.length >= 2);
        means.forEach(m => {
          if (!vietnameseToEnglishMap.has(m)) {
            vietnameseToEnglishMap.set(m, {
              enWord,
              ipa: item.ipa && item.ipa[0] ? item.ipa[0].join('') : '',
              cefr: item.cefr || 'A1',
              mean: item.mean
            });
          }
        });
      }
    });

    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const vnKeys = Array.from(vietnameseToEnglishMap.keys()).filter(k => k.includes(' ') || k.length >= 5);
    const customVnKeys = Object.keys(VIETNAMESE_CUSTOM_MAP || {});
    const allVnKeys = [...new Set([...vnKeys, ...customVnKeys])];
    allVnKeys.sort((a, b) => b.length - a.length); // Sort descending
    const escapedVnKeys = allVnKeys.map(escapeRegex);
    vietnamesePhrasesRegex = escapedVnKeys.join('|');
  }

  function isVietnamesePage() {
    if (document.documentElement && document.documentElement.lang && document.documentElement.lang.toLowerCase().startsWith('vi')) {
      return true;
    }
    if (window.location.hostname && window.location.hostname.endsWith('.vn')) {
      return true;
    }
    const title = document.title || '';
    const vnDiacritics = /[\u00C0-\u1EF9]/;
    if (vnDiacritics.test(title)) {
      return true;
    }
    return false;
  }

  function normalizeVietnamese(str) {
    if (!str) return '';
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'd');
  }

  function getTodayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  }

  function getBaseStem(word) {
    let w = word.toLowerCase().replace(/['’]s$/, '');
    if (dictionary[w] || ADVANCED_FALLBACK_DICT[w]) return w;
    if (w.endsWith('s') && (dictionary[w.slice(0, -1)] || ADVANCED_FALLBACK_DICT[w.slice(0, -1)])) return w.slice(0, -1);
    if (w.endsWith('es') && (dictionary[w.slice(0, -2)] || ADVANCED_FALLBACK_DICT[w.slice(0, -2)])) return w.slice(0, -2);
    if (w.endsWith('ies') && (dictionary[w.slice(0, -3) + 'y'] || ADVANCED_FALLBACK_DICT[w.slice(0, -3) + 'y'])) return w.slice(0, -3) + 'y';
    if (w.endsWith('ed') && (dictionary[w.slice(0, -2)] || ADVANCED_FALLBACK_DICT[w.slice(0, -2)])) return w.slice(0, -2);
    if (w.endsWith('ed') && (dictionary[w.slice(0, -1)] || ADVANCED_FALLBACK_DICT[w.slice(0, -1)])) return w.slice(0, -1);
    if (w.endsWith('ing') && (dictionary[w.slice(0, -3)] || ADVANCED_FALLBACK_DICT[w.slice(0, -3)])) return w.slice(0, -3);
    if (w.endsWith('ing') && (dictionary[w.slice(0, -3) + 'e'] || ADVANCED_FALLBACK_DICT[w.slice(0, -3) + 'e'])) return w.slice(0, -3) + 'e';
    return w;
  }

  const VIETNAMESE_CUSTOM_MAP = {
    'cứu': { enWord: 'rescue', ipa: 'ˈres.kjuː', cefr: 'B1', mean: 'cứu giúp / giải cứu' },
    'cứu thương': { enWord: 'ambulance', ipa: 'ˈæm.bjə.ləns', cefr: 'B1', mean: 'xe cứu thương' },
    'xe cứu thương': { enWord: 'ambulance', ipa: 'ˈæm.bjə.ləns', cefr: 'B1', mean: 'xe cứu thương' },
    'cấp cứu': { enWord: 'emergency', ipa: 'ɪˈmɜː.dʒən.si', cefr: 'B1', mean: 'cấp cứu / khẩn cấp' },
    'cấp cứu viên': { enWord: 'paramedic', ipa: 'ˌpær.əˈmed.ɪk', cefr: 'B2', mean: 'cấp cứu viên / nhân viên y tế' },
    'sơ cứu': { enWord: 'first aid', ipa: 'ˌfɜːst ˈeɪd', cefr: 'B1', mean: 'sơ cứu' },
    'tài xế': { enWord: 'driver', ipa: 'ˈdraɪ.vər', cefr: 'A1', mean: 'người lái xe' },
    'đề xuất': { enWord: 'propose', ipa: 'prəˈpoʊz', cefr: 'B1', mean: 'đề xuất / kiến nghị' },
    'sở y tế': { enWord: 'health department', ipa: 'helθ dɪˈpɑːrt.mənt', cefr: 'B1', mean: 'sở y tế' },
    'bác sĩ': { enWord: 'doctor', ipa: 'ˈdɑːktər', cefr: 'A1', mean: 'bác sĩ' },
    'luật sư': { enWord: 'lawyer', ipa: 'ˈlɔːjər', cefr: 'A2', mean: 'luật sư' },
    'sáng tạo': { enWord: 'creative', ipa: 'kriˈeɪtɪv', cefr: 'A2', mean: 'sáng tạo' },
    'hoạt động': { enWord: 'activity', ipa: 'ækˈtɪv.ə.t̬i', cefr: 'A2', mean: 'hoạt động' },
    'lương thực': { enWord: 'food', ipa: 'fuːd', cefr: 'A1', mean: 'lương thực / thực phẩm' },
    'trực thăng': { enWord: 'helicopter', ipa: 'ˈhel.ɪˌkɑːp.tər', cefr: 'B1', mean: 'máy bay trực thăng' },
    'va chạm': { enWord: 'crash', ipa: 'kræʃ', cefr: 'B2', mean: 'va chạm / tai nạn' },
    'động cơ': { enWord: 'engine', ipa: 'ˈen.dʒɪn', cefr: 'A2', mean: 'động cơ' }
  };

  function getWordInfo(tokRaw) {
    const rawLower = tokRaw.toLowerCase();

    // Check Vietnamese custom map or dictionary map
    const customVn = VIETNAMESE_CUSTOM_MAP[rawLower];
    if (customVn) {
      return {
        data: { mean: customVn.mean, ipa: [[customVn.ipa]], cefr: customVn.cefr },
        isVnMatch: true,
        enWord: customVn.enWord,
        stem: customVn.enWord,
        isAdvanced: customVn.cefr === 'C1' || customVn.cefr === 'C2' || !dictionary[customVn.enWord]
      };
    }

    const dictVn = vietnameseToEnglishMap.get(rawLower);
    if (dictVn) {
      return {
        data: { mean: dictVn.mean, ipa: [[dictVn.ipa]], cefr: dictVn.cefr },
        isVnMatch: true,
        enWord: dictVn.enWord,
        stem: dictVn.enWord,
        isAdvanced: dictVn.cefr === 'C1' || dictVn.cefr === 'C2' || !dictionary[dictVn.enWord]
      };
    }

    const stem = getBaseStem(rawLower);

    let data = dictionary[stem] || dictionary[rawLower] || ADVANCED_FALLBACK_DICT[rawLower] || ADVANCED_FALLBACK_DICT[stem];
    let synonymData = SYNONYMS_3000[rawLower] || SYNONYMS_3000[stem] || null;

    if (!data && synonymData) {
      data = {
        mean: `hủy bỏ / liên kết từ gốc`,
        ipa: [[rawLower]],
        cefr: 'C2',
        isAdvanced: true
      };
    }

    if (data) {
      return {
        stem: stem,
        data: data,
        synonymData,
        isAdvanced: data.cefr === 'C1' || data.cefr === 'C2' || !!synonymData,
        isVnMatch: false,
        enWord: null,
        displayWord: data.word || stem
      };
    }

    const customDictEntry = customDictionary[rawLower] || customDictionary[stem];
    if (customDictEntry) {
      return {
        stem: stem,
        data: customDictEntry,
        synonymData: null,
        isAdvanced: customDictEntry.isAdvanced || customDictEntry.cefr === 'C1' || customDictEntry.cefr === 'C2',
        isVnMatch: false,
        enWord: null,
        displayWord: tokRaw
      };
    }

    return {
      stem: rawLower,
      data: { mean: 'Chưa rõ nghĩa (Cần cập nhật AI)', ipa: [['']], cefr: 'C2' },
      synonymData: null,
      isAdvanced: true,
      isVnMatch: false,
      enWord: null,
      displayWord: tokRaw
    };
  }

  function createTooltip() {
    if (document.getElementById('dva-tooltip-container')) {
      tooltipEl = document.getElementById('dva-tooltip-container');
      return;
    }
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'dva-tooltip-container';
    
    tooltipEl.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
    });
    tooltipEl.addEventListener('mouseleave', () => {
      hideTooltip();
    });
    
    document.body.appendChild(tooltipEl);
  }

  function toggleWordKnownState(targetWord) {
    const isNowKnown = !knownWords.has(targetWord);
    if (isNowKnown) {
      knownWords.add(targetWord);
    } else {
      knownWords.delete(targetWord);
    }

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ knownWords: [...knownWords] });
    }

    const btn = tooltipEl.querySelector('.dva-tt-btn-mark');
    if (btn) {
      if (isNowKnown) {
        btn.textContent = `✅ Đã biết từ gốc "${targetWord}"`;
        btn.classList.add('is-known');
      } else {
        btn.textContent = `✔️ Tôi biết từ gốc "${targetWord}"`;
        btn.classList.remove('is-known');
      }
    }
  }

  function saveToContextVault(info, sentenceText) {
    if (!info.isAdvanced) return;
    
    const entry = {
      word: info.word,
      stem: info.stem,
      mean: info.mean,
      ipa: info.ipa,
      cefr: info.cefr,
      synonym3k: info.synonymData ? `${info.synonymData.synWord} /${info.synonymData.ipa}/ (${info.synonymData.level})` : null,
      sentence: sentenceText,
      domain: window.location.hostname,
      timestamp: Date.now()
    };

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['encounteredAdvancedWords'], (res) => {
        const list = res.encounteredAdvancedWords || [];
        const exists = list.some(item => item.word.toLowerCase() === entry.word.toLowerCase() && item.domain === entry.domain);
        if (!exists) {
          list.unshift(entry);
          chrome.storage.local.set({ encounteredAdvancedWords: list.slice(0, 100) });
        }
      });
    }
  }

  function recordWordLookup(info) {
    const key = (info.enWord || info.stem || info.word).toLowerCase();
    const domain = window.location.hostname;
    
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['wordLookupStats'], (res) => {
        const stats = res.wordLookupStats || {};
        if (!stats[key]) {
          stats[key] = { word: key, displayWord: info.displayWord, count: 0, domains: {} };
        }
        stats[key].count = (stats[key].count || 0) + 1;
        stats[key].domains[domain] = (stats[key].domains[domain] || 0) + 1;
        stats[key].lastLookedUp = Date.now();
        stats[key].mean = info.mean;
        stats[key].ipa = info.ipa;
        stats[key].cefr = info.cefr;

        chrome.storage.local.set({ wordLookupStats: stats });
        wordLookupStats = stats;
        
        const lookupCountEl = document.getElementById('dva-tt-lookup-count');
        if (lookupCountEl) {
          lookupCountEl.textContent = `👁️ ${stats[key].count} lần`;
        }
      });
    }
  }

  function findRelatedPhrases(targetText, sentenceText) {
    const normTarget = targetText.toLowerCase().trim();
    if (normTarget.length < 2) return [];
    const results = [];
    const addedEnWords = new Set();

    for (const [vnPhrase, enWord] of vietnameseToEnglishMap.entries()) {
      if (vnPhrase.includes(normTarget) || (sentenceText && sentenceText.toLowerCase().includes(vnPhrase))) {
        if (addedEnWords.has(enWord)) continue;
        
        const dictData = dictionary[enWord] || dictionary[getBaseStem(enWord)];
        if (dictData) {
          addedEnWords.add(enWord);
          results.push({
            vnPhrase: vnPhrase,
            enWord: enWord,
            ipa: dictData.ipa && dictData.ipa[0] ? dictData.ipa[0].join('') : '',
            cefr: dictData.cefr || 'A1',
            mean: dictData.mean
          });
        }
        if (results.length >= 4) break;
      }
    }
    return results;
  }

  function showTooltip(target, info) {
    clearTimeout(hideTimer);
    if (!tooltipEl) createTooltip();
    initRadarInspector();
    
    recordWordLookup(info);
    
    const key = (info.enWord || info.stem || info.word).toLowerCase();
    const currentCount = (wordLookupStats[key] && wordLookupStats[key].count) ? wordLookupStats[key].count : 1;
    const lookupBadgeHtml = `<span id="dva-tt-lookup-count" class="dva-tt-lookup-count" title="Số lần bạn đã tra từ này">👁️ ${currentCount} lần</span>`;

    const cefrClass = info.isAdvanced ? 'dva-tt-cefr advanced' : 'dva-tt-cefr';
    const cefrHtml = info.cefr ? `<span class="${cefrClass}">${info.cefr}</span>` : '';
    
    let synonymHtml = '';
    let targetMarkWord = info.enWord || info.stem;
    let isSynonymMatch = false;
    
    if (info.synonymData) {
      const syn = info.synonymData;
      targetMarkWord = syn.synWord;
      isSynonymMatch = true;
      synonymHtml = `
        <div class="dva-tt-synonym-box">
          ≈ từ gốc 3000: <span class="dva-tt-syn-word">${syn.synWord}</span> 
          <span class="dva-tt-syn-ipa">/${syn.ipa}/</span> 
          <span class="dva-tt-syn-lvl">${syn.level}</span>
        </div>
      `;
    }

    const isKnown = knownWords.has(targetMarkWord);
    let btnText = '';
    if (isSynonymMatch) {
      btnText = isKnown ? `✅ Đã biết từ gốc "${targetMarkWord}"` : `✔️ Tôi biết từ gốc "${targetMarkWord}"`;
    } else {
      btnText = isKnown ? `✅ Đã biết từ "${targetMarkWord}"` : `✔️ Tôi biết từ "${targetMarkWord}"`;
    }
    const btnClass = isKnown ? 'dva-tt-btn-mark is-known' : 'dva-tt-btn-mark';

    let reportSynBtnHtml = '';

    let headerWordHtml = `<span class="dva-tt-word">${info.displayWord}</span>`;
    let translationHtml = `<b>${info.mean}</b>`;
    if (info.isVnMatch) {
      headerWordHtml = `<span class="dva-tt-word" style="color: #4ade80;">${info.displayWord}</span>`;
      translationHtml = `Từ tiếng Anh: <b style="color:#60a5fa;">${info.enWord}</b>`;
    }

    // Combo Phrases (Contextual Ghép Từ)
    let combosHtml = '';
    if (info.isVnMatch && info.hoveredContext) {
      const { currentWord, prevWord, nextWord } = info.hoveredContext;
      const combinations = [currentWord];
      if (prevWord) combinations.push(`${prevWord} ${currentWord}`);
      if (nextWord) combinations.push(`${currentWord} ${nextWord}`);
      if (prevWord && nextWord) combinations.push(`${prevWord} ${currentWord} ${nextWord}`);

      const uniqueCombos = [];
      const seenLower = new Set();
      combinations.forEach(c => {
        if (!seenLower.has(c.toLowerCase())) {
          seenLower.add(c.toLowerCase());
          uniqueCombos.push(c);
        }
      });

      const rowsHtml = uniqueCombos.map(comb => {
        const cInfo = getWordInfo(comb);
        const meanText = cInfo ? cInfo.data.mean : 'Không có trong từ điển';
        const isPrioritized = userPrioritizedPhrases.some(p => p.toLowerCase() === comb.toLowerCase());
        
        const btnHtml = isPrioritized ? 
          `<button class="dva-tt-btn-pinned" disabled>📌 Đã ghim</button>` : 
          `<button class="dva-tt-btn-pin" data-phrase="${comb}" data-mean="${meanText}">📌 Ghim cụm này</button>`;

        return `
          <div class="dva-tt-combo-row">
            <div class="dva-tt-combo-text-col">
              <div class="dva-tt-combo-text">${comb}</div>
              <div class="dva-tt-combo-mean">${meanText}</div>
            </div>
            ${btnHtml}
          </div>
        `;
      }).join('');

      combosHtml = `
        <div class="dva-tt-combinations">
          <div class="dva-tt-rel-title">🔗 Ghép cụm từ ngữ cảnh:</div>
          <div class="dva-tt-combo-list">
            ${rowsHtml}
          </div>
        </div>
      `;
    }

      let linkBtnHtml = '';
      if (info.parentLink) {
        linkBtnHtml = `<a href="${info.parentLink}" target="_blank" class="dva-tt-btn-link">🔗 Mở đường link này</a>`;
      }

      let bodyHtml = `
        <div class="dva-tt-header">
          <div>
            ${headerWordHtml}
            ${lookupBadgeHtml}
          </div>
          ${cefrHtml}
        </div>
        <div class="dva-tt-ipa">/${info.ipa}/</div>
        <div class="dva-tt-translation">${translationHtml}</div>
        ${synonymHtml}
        ${combosHtml}
        ${reportSynBtnHtml}
        ${linkBtnHtml}
        <button class="${btnClass}">${btnText}</button>
      `;
    
    tooltipEl.innerHTML = bodyHtml;

    // Attach click listeners to pin buttons
    tooltipEl.querySelectorAll('.dva-tt-btn-pin').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const phrase = btn.getAttribute('data-phrase');
        const meanText = btn.getAttribute('data-mean');
        
        if (!userPrioritizedPhrases.some(p => p.toLowerCase() === phrase.toLowerCase())) {
          userPrioritizedPhrases.push(phrase);
          
          const key = phrase.toLowerCase();
          const domain = window.location.hostname;
          if (!wordLookupStats[key]) {
            wordLookupStats[key] = { word: key, displayWord: phrase, count: 0, domains: {} };
          }
          wordLookupStats[key].count += 1;
          wordLookupStats[key].domains[domain] = (wordLookupStats[key].domains[domain] || 0) + 1;
          wordLookupStats[key].lastLookedUp = Date.now();
          wordLookupStats[key].mean = meanText;
          wordLookupStats[key].ipa = "";
          wordLookupStats[key].cefr = "C1"; // Force into advanced list
          
          if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
            chrome.storage.local.set({ 
              userPrioritizedPhrases: userPrioritizedPhrases,
              wordLookupStats: wordLookupStats
            });
          }

          btn.className = 'dva-tt-btn-pinned';
          btn.textContent = '📌 Đã ghim';
          btn.disabled = true;

          // Rescan instantly
          scanAndHighlight(true);
        }
      });
    });

    const markBtn = tooltipEl.querySelector('.dva-tt-btn-mark');
    if (markBtn) {
      markBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWordKnownState(targetMarkWord, target);
      });
    }

    const reportSynBtn = tooltipEl.querySelector('.dva-tt-btn-report-syn');
    if (reportSynBtn) {
      reportSynBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const reportText = `[ĐỀ XUẤT TỪ 3000] Từ: ${info.word} | IPA: /${info.ipa}/ | Nghĩa: ${info.mean} | Cần tìm từ đồng nghĩa thuộc bộ 3000 từ.`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(reportText);
        }
        reportSynBtn.textContent = '📋 Đã copy & gửi đề xuất!';
        reportSynBtn.style.color = '#4ade80';
        reportSynBtn.style.borderColor = '#4ade80';

        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
          chrome.storage.local.get(['pendingSynonymRequests'], (res) => {
            const list = res.pendingSynonymRequests || [];
            list.unshift({ word: info.word, ipa: info.ipa, mean: info.mean, timestamp: Date.now() });
            chrome.storage.local.set({ pendingSynonymRequests: list });
          });
        }
      });
    }
    
    const rect = target.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    tooltipEl.style.left = `${rect.left + scrollLeft}px`;
    tooltipEl.style.top = `${rect.bottom + scrollTop + 6}px`;
    tooltipEl.classList.add('visible');

    if (info.sentence) {
      saveToContextVault(info, info.sentence);
    }
  }

  function hideTooltip() {
    hideTimer = setTimeout(() => {
      if (tooltipEl) {
        tooltipEl.classList.remove('visible');
      }
    }, 200);
  }

  function initActiveStudyTimer() {
    ['mouseenter', 'mousemove', 'scroll', 'click'].forEach(evt => {
      document.addEventListener(evt, () => {
        if (!activeTimer && highlighterEnabled) {
          activeTimer = setInterval(() => {
            if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
              chrome.storage.local.get(['studyLog'], (res) => {
                const studyLog = res.studyLog || {};
                const todayKey = getTodayKey();
                studyLog[todayKey] = (studyLog[todayKey] || 0) + 1;
                chrome.storage.local.set({ studyLog });
              });
            }
          }, 1000);
        }
      }, { passive: true });
    });
  }

  async function initHighlighter() {
    createTooltip();
    initActiveStudyTimer();
    
    if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.local) {
      return;
    }

    try {
      let dictUrl = chrome.runtime.getURL('dictionary_oxford.json');
      let res = await fetch(dictUrl).catch(() => null);
      if (!res || !res.ok) {
        dictUrl = chrome.runtime.getURL('public/dictionary_oxford.json');
        res = await fetch(dictUrl);
      }
      dictionary = await res.json();
      buildVietnameseMap();

      chrome.storage.local.get(['knownWords', 'highlighterEnabled', 'showKnownHighlights', 'userPrioritizedPhrases', 'wordLookupStats', 'customDictionary'], (data) => {
        knownWords = new Set(data.knownWords || []);
        userPrioritizedPhrases = data.userPrioritizedPhrases || [];
        wordLookupStats = data.wordLookupStats || {};
        customDictionary = data.customDictionary || {};
        highlighterEnabled = data.highlighterEnabled !== undefined ? data.highlighterEnabled : true;
        showKnownHighlights = data.showKnownHighlights !== undefined ? data.showKnownHighlights : false;
        showUnknownHighlights = data.showUnknownHighlights !== undefined ? data.showUnknownHighlights : false;

        if (highlighterEnabled) {
          scanAndHighlight(true);
        }
        
        // Dynamic content handling
        let isScanScheduled = false;
        window.dvaObserver = new MutationObserver((mutations) => {
          if (!highlighterEnabled) return;
          if (mutations.every(m => m.target.id === 'dva-tooltip-container' || (m.target.className && typeof m.target.className === 'string' && m.target.className.includes('dva-hl-word')))) {
            return;
          }
          
          if (!isScanScheduled) {
            isScanScheduled = true;
            setTimeout(() => {
              if (window.dvaObserver) window.dvaObserver.disconnect();
              scanAndHighlight(true);
              isScanScheduled = false;
              if (window.dvaObserver) window.dvaObserver.observe(document.body, { childList: true, subtree: true });
            }, 2000);
          }
        });
        window.dvaObserver.observe(document.body, { childList: true, subtree: true });
      });

      chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'local') {
          if (changes.knownWords) {
            knownWords = new Set(changes.knownWords.newValue || []);
          }
          if (changes.userPrioritizedPhrases) {
            userPrioritizedPhrases = changes.userPrioritizedPhrases.newValue || [];
          }
          if (changes.wordLookupStats) {
            wordLookupStats = changes.wordLookupStats.newValue || {};
          }
          if (changes.customDictionary) {
            customDictionary = changes.customDictionary.newValue || {};
          }
          if (changes.highlighterEnabled !== undefined) {
            highlighterEnabled = changes.highlighterEnabled.newValue;
          }
          if (changes.showKnownHighlights !== undefined) {
            showKnownHighlights = changes.showKnownHighlights.newValue;
          }
          if (changes.showUnknownHighlights !== undefined) {
            showUnknownHighlights = changes.showUnknownHighlights.newValue;
          }
          if (highlighterEnabled) {
            scanAndHighlightAPI(true);
          } else {
            clearHighlights();
          }
        }
      });

      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'MANUAL_SCAN') {
          scanAndHighlightAPI(true);
          sendResponse({ status: 'SUCCESS' });
        } else if (request.action === 'EXTRACT_CONTENT') {
          // Extract up to 100 meaningful sentences/paragraphs
          const extracted = [];
          const tags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'TD'];
          
          const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_ELEMENT,
            {
              acceptNode: function(node) {
                if (tags.includes(node.tagName.toUpperCase())) {
                  // Only accept if it has some text
                  const text = node.innerText || node.textContent;
                  if (text && text.trim().length > 15) return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
              }
            }
          );
          
          let node;
          let count = 0;
          while ((node = walker.nextNode()) && count < 100) {
            let html = node.innerHTML;
            // Clean up scripts/styles if any
            html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
            html = html.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
            // Strip tags except basics
            html = html.replace(/<(?!\/?(b|i|u|strong|em|mark)\b)[^>]+>/gi, '');
            const cleanText = html.trim();
            if (cleanText.length > 20) {
              extracted.push({
                tag: node.tagName.toLowerCase(),
                html: cleanText
              });
              count++;
            }
          }
          
          if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
             chrome.storage.local.set({ extractedStudyContent: extracted }, () => {
               sendResponse({ status: 'SUCCESS', count });
             });
             return true; // async response
          } else {
             sendResponse({ status: 'FAIL' });
          }
        }
      });

    } catch (e) {
      console.error('[Đánh Vần Tiếng Anh Extension] Error initializing highlighter:', e);
    }
  }


function clearHighlights() {
    if (typeof CSS !== 'undefined' && CSS.highlights) {
      CSS.highlights.clear();
    }
  }

  function getClickInspectorRegex() {
    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const customPhrases = userPrioritizedPhrases.map(escapeRegex).sort((a,b) => b.length - a.length).join('|');
    
    const parts = [];
    if (customPhrases) parts.push(customPhrases);
    if (isVietnamesePage() && vietnamesePhrasesRegex) {
      parts.push(vietnamesePhrasesRegex);
    }
    parts.push('[\\u00C0-\\u1EF9a-zA-Z\\u0300-\\u036F]+');
    
    return new RegExp(`(${parts.join('|')})`, 'gi');
  }

function scanAndHighlightAPI(forceScan = false) {
    if (typeof CSS === 'undefined' || !CSS.highlights) {
      console.warn('[Đánh Vần Tiếng Anh] CSS Custom Highlights API is not supported in this browser.');
      return;
    }
    
    if (!highlighterEnabled && !forceScan) return;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const parentName = node.parentNode ? node.parentNode.nodeName.toUpperCase() : '';
          if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT', 'IFRAME', 'CODE', 'BUTTON'].includes(parentName)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.parentElement && node.parentElement.closest('#dva-tooltip-container')) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.nodeValue && node.nodeValue.trim().length > 1) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      }
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    const rangesUnknown = [];
    const rangesUnknownAdv = [];
    const rangesKnown = [];
    const rangesInspected1 = [];
    const rangesInspected1Adv = [];
    const rangesInspected2 = [];
    const rangesInspected2Adv = [];
    const rangesInspected3 = [];
    const rangesInspected3Adv = [];
    const rangesInspected4 = [];
    const rangesInspected4Adv = [];

    const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const customPhrases = userPrioritizedPhrases.map(escapeRegex).sort((a,b) => b.length - a.length).join('|');
    
    let pattern;
    if (isVietnamesePage()) {
      const parts = [];
      if (customPhrases) parts.push(customPhrases);
      if (vietnamesePhrasesRegex) parts.push(vietnamesePhrasesRegex);
      parts.push('\\b[a-zA-Z]{4,}\\b'); // English fallback on VN pages
      pattern = `(${parts.join('|')})`;
    } else {
      pattern = `(${customPhrases ? customPhrases + '|' : ''}\\b[a-zA-Z]{3,}\\b|\\b[\\u00C0-\\u1EF9a-zA-Z\\u0300-\\u036F]{2,}\\b)`;
    }
    
    const tokenizer = new RegExp(pattern, 'gi');

    // Process nodes in chunks for performance
    let currentIndex = 0;
    const chunkSize = 500;

    function processChunk() {
      const chunk = textNodes.slice(currentIndex, currentIndex + chunkSize);
      if (chunk.length === 0) {
        const hlUnknown = new Highlight();
        rangesUnknown.forEach(r => hlUnknown.add(r));
        CSS.highlights.set('dva-unknown', hlUnknown);

        const hlUnknownAdv = new Highlight();
        rangesUnknownAdv.forEach(r => hlUnknownAdv.add(r));
        CSS.highlights.set('dva-unknown-adv', hlUnknownAdv);

        const hlKnown = new Highlight();
        rangesKnown.forEach(r => hlKnown.add(r));
        CSS.highlights.set('dva-known', hlKnown);

        const hlInspected1 = new Highlight();
        rangesInspected1.forEach(r => hlInspected1.add(r));
        CSS.highlights.set('dva-inspected-1', hlInspected1);

        const hlInspected1Adv = new Highlight();
        rangesInspected1Adv.forEach(r => hlInspected1Adv.add(r));
        CSS.highlights.set('dva-inspected-1-adv', hlInspected1Adv);

        const hlInspected2 = new Highlight();
        rangesInspected2.forEach(r => hlInspected2.add(r));
        CSS.highlights.set('dva-inspected-2', hlInspected2);

        const hlInspected2Adv = new Highlight();
        rangesInspected2Adv.forEach(r => hlInspected2Adv.add(r));
        CSS.highlights.set('dva-inspected-2-adv', hlInspected2Adv);

        const hlInspected3 = new Highlight();
        rangesInspected3.forEach(r => hlInspected3.add(r));
        CSS.highlights.set('dva-inspected-3', hlInspected3);

        const hlInspected3Adv = new Highlight();
        rangesInspected3Adv.forEach(r => hlInspected3Adv.add(r));
        CSS.highlights.set('dva-inspected-3-adv', hlInspected3Adv);

        const hlInspected4 = new Highlight();
        rangesInspected4.forEach(r => hlInspected4.add(r));
        CSS.highlights.set('dva-inspected-4', hlInspected4);

        const hlInspected4Adv = new Highlight();
        rangesInspected4Adv.forEach(r => hlInspected4Adv.add(r));
        CSS.highlights.set('dva-inspected-4-adv', hlInspected4Adv);
        return;
      }



      chunk.forEach(node => {
        const text = node.nodeValue;
        let match;
        
        tokenizer.lastIndex = 0; // CRITICAL: Reset regex state for each new string!
        
        while ((match = tokenizer.exec(text)) !== null) {
          const tokRaw = match[0];
          const info = getWordInfo(tokRaw);
          const isPrioritized = userPrioritizedPhrases.some(p => p.toLowerCase() === tokRaw.toLowerCase());
          
          if (info || isPrioritized) {
            const targetStem = info ? (info.enWord || info.stem || '').toLowerCase() : tokRaw.toLowerCase();
            const synWord = info && info.synonymData ? info.synonymData.synWord.toLowerCase() : null;
            const isKnown = knownWords.has(targetStem) || (synWord && knownWords.has(synWord));
            const isInspected = wordLookupStats[targetStem] || (synWord && wordLookupStats[synWord]) || isPrioritized;

            if (!isKnown && !isInspected && !forceScan) {
              continue;
            }

            try {
              const range = new Range();
              range.setStart(node, match.index);
              range.setEnd(node, match.index + tokRaw.length);
              
              if (isKnown) {
                if (showKnownHighlights) rangesKnown.push(range);
              } else if (isInspected) {
                let count = 1;
                if (isPrioritized) count = 4;
                else if (wordLookupStats[targetStem]) count = wordLookupStats[targetStem].count;
                else if (synWord && wordLookupStats[synWord]) count = wordLookupStats[synWord].count;
                
                const isAdv = info && info.isAdvanced;
                
                if (count <= 1) {
                  isAdv ? rangesInspected1Adv.push(range) : rangesInspected1.push(range);
                } else if (count === 2) {
                  isAdv ? rangesInspected2Adv.push(range) : rangesInspected2.push(range);
                } else if (count === 3) {
                  isAdv ? rangesInspected3Adv.push(range) : rangesInspected3.push(range);
                } else {
                  isAdv ? rangesInspected4Adv.push(range) : rangesInspected4.push(range);
                }
              } else {
                if (showUnknownHighlights) {
                  const isAdv = info && info.isAdvanced;
                  if (isAdv) {
                    rangesUnknownAdv.push(range);
                  } else {
                    rangesUnknown.push(range);
                  }
                }
              }
            } catch (e) {}
          }
        }
      });

      currentIndex += chunkSize;
      requestAnimationFrame(() => setTimeout(processChunk, 0));
    }

    processChunk();
  }

let lastHoveredWord = null;
  let lastHoveredNode = null;

  function initRadarInspector() {
    document.addEventListener('click', (e) => {
      if (!highlighterEnabled) {
        hideTooltip();
        return;
      }
      
      let range, textNode, offset;
      
      if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(e.clientX, e.clientY);
        if (range) {
          textNode = range.startContainer;
          offset = range.startOffset;
        }
      } else if (document.caretPositionFromPoint) {
        // Fallback for Firefox
        const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
        if (pos) {
          textNode = pos.offsetNode;
          offset = pos.offset;
        }
      }

      if (!textNode || textNode.nodeType !== Node.TEXT_NODE) {
         hideTooltip();
         return;
      }
      
      if (textNode.parentElement && textNode.parentElement.closest('#dva-tooltip-container')) {
          return; // Do not hide or change anything if hovering inside our own tooltip
      }

      const fullText = textNode.nodeValue;
      if (!fullText || fullText.trim().length < 2) {
         hideTooltip();
         return;
      }
      
      const parentName = textNode.parentNode ? textNode.parentNode.nodeName.toUpperCase() : '';
      if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT', 'IFRAME', 'CODE', 'BUTTON'].includes(parentName)) {
         hideTooltip();
         return;
      }

      // We only care about words, ignoring symbols
      const wordRegex = getClickInspectorRegex();
      let match;
      let hoveredMatch = null;
      let prevWord = null;
      let nextWord = null;
      let words = [];

      while ((match = wordRegex.exec(fullText)) !== null) {
         words.push({ word: match[0], start: match.index, end: match.index + match[0].length });
      }

      for (let i = 0; i < words.length; i++) {
        if (offset >= words[i].start && offset <= words[i].end) {
          hoveredMatch = words[i];
          prevWord = i > 0 ? words[i-1].word : null;
          nextWord = i < words.length - 1 ? words[i+1].word : null;
          break;
        }
      }

      if (!hoveredMatch) {
         hideTooltip();
         return;
      }

      const currentWord = hoveredMatch.word;
      const info = getWordInfo(currentWord);
      const isPrioritized = userPrioritizedPhrases.some(p => p.toLowerCase() === currentWord.toLowerCase());

      if (!info && !isPrioritized) {
         hideTooltip();
         return;
      }
      
      const targetStem = info ? (info.enWord || info.stem || '').toLowerCase() : currentWord.toLowerCase();
      const synWord = info && info.synonymData ? info.synonymData.synWord.toLowerCase() : null;
      const isKnown = knownWords.has(targetStem) || (synWord && knownWords.has(synWord));
      const isInspected = wordLookupStats[targetStem] || (synWord && wordLookupStats[synWord]) || isPrioritized;

      if (!isKnown && !isInspected && !highlighterEnabled) {
         hideTooltip();
         return;
      }
      
      // Debounce logic
      if (tooltipEl && tooltipEl.classList.contains('visible') && 
          lastHoveredWord === currentWord && lastHoveredNode === textNode) {
          return;
      }
      
      lastHoveredWord = currentWord;
      lastHoveredNode = textNode;

      const ipaStr = info && info.data && info.data.ipa && info.data.ipa[0] ? info.data.ipa[0].join('') : currentWord;
      const closestLink = textNode.parentElement ? textNode.parentElement.closest('a') : null;
      if (closestLink) {
        e.preventDefault();
        e.stopPropagation();
      }

      const tooltipData = {
        displayWord: currentWord,
        word: currentWord,
        stem: targetStem,
        ipa: ipaStr,
        mean: info ? info.data.mean : 'Chưa có trong từ điển',
        cefr: info && info.data.cefr ? info.data.cefr : 'C1',
        synonymData: info ? info.synonymData : null,
        isAdvanced: info ? info.isAdvanced : true,
        isVnMatch: info ? info.isVnMatch : true,
        enWord: info ? info.enWord : currentWord,
        sentence: fullText.trim().slice(0, 150),
        hoveredContext: { currentWord, prevWord, nextWord },
        parentLink: closestLink ? closestLink.href : null
      };

      try {
        const wordRange = document.createRange();
        wordRange.setStart(textNode, hoveredMatch.start);
        wordRange.setEnd(textNode, hoveredMatch.end);
        const mockTarget = { getBoundingClientRect: () => wordRange.getBoundingClientRect() };
        showTooltip(mockTarget, tooltipData);
      } catch (e) {
        // If range fails, fallback to passing null
      }
    }, { capture: true });
  }


  async function initStudyPage() {
    createTooltip();
    initRadarInspector();
    
    if (typeof chrome === 'undefined' || !chrome.storage || !chrome.storage.local) {
      return;
    }

    try {
      let dictUrl = chrome.runtime.getURL('dictionary_oxford.json');
      let res = await fetch(dictUrl).catch(() => null);
      if (!res || !res.ok) {
        dictUrl = chrome.runtime.getURL('public/dictionary_oxford.json');
        res = await fetch(dictUrl);
      }
      dictionary = await res.json();
      buildVietnameseMap();

      chrome.storage.local.get(['knownWords', 'highlighterEnabled', 'showKnownHighlights', 'showUnknownHighlights', 'userPrioritizedPhrases', 'extractedStudyContent', 'wordLookupStats', 'customDictionary'], (data) => {
        knownWords = new Set(data.knownWords || []);
        userPrioritizedPhrases = data.userPrioritizedPhrases || [];
        wordLookupStats = data.wordLookupStats || {};
        customDictionary = data.customDictionary || {};
        highlighterEnabled = data.highlighterEnabled !== undefined ? data.highlighterEnabled : true;
        showKnownHighlights = data.showKnownHighlights !== undefined ? data.showKnownHighlights : false;
        showUnknownHighlights = data.showUnknownHighlights !== undefined ? data.showUnknownHighlights : false;

        // Render extracted content
        const contentArea = document.getElementById('content-area');
        const extracted = data.extractedStudyContent || [];
        
        if (extracted.length > 0) {
          contentArea.innerHTML = '';
          extracted.forEach(item => {
            const el = document.createElement(item.tag);
            el.innerHTML = item.html;
            contentArea.appendChild(el);
          });
        } else {
          contentArea.innerHTML = '<p class="loading-msg">Không tìm thấy nội dung trích xuất. Hãy quay lại trang web và thử lại.</p>';
        }

        if (highlighterEnabled) {
          scanAndHighlightAPI();
        }

        chrome.storage.onChanged.addListener((changes, area) => {
          if (area === 'local') {
            if (changes.knownWords) {
              knownWords = new Set(changes.knownWords.newValue || []);
            }
            if (changes.userPrioritizedPhrases) {
              userPrioritizedPhrases = changes.userPrioritizedPhrases.newValue || [];
            }
            if (changes.wordLookupStats) {
              wordLookupStats = changes.wordLookupStats.newValue || {};
            }
            if (changes.highlighterEnabled !== undefined) {
              highlighterEnabled = changes.highlighterEnabled.newValue;
            }
            if (changes.showKnownHighlights !== undefined) {
              showKnownHighlights = changes.showKnownHighlights.newValue;
            }
            if (changes.showUnknownHighlights !== undefined) {
              showUnknownHighlights = changes.showUnknownHighlights.newValue;
            }
            if (changes.customDictionary !== undefined) {
              customDictionary = changes.customDictionary.newValue || {};
            }
            if (highlighterEnabled) {
              scanAndHighlightAPI(true);
            } else {
              clearHighlights();
            }
          }
        });
      });
      
    } catch (e) {
      console.error('[Đánh Vần Tiếng Anh] Lỗi khởi tạo trang học:', e);
      document.getElementById('content-area').innerHTML = '<p style="color:red;">Lỗi tải dữ liệu. Vui lòng thử lại.</p>';
    }
  }

  // Khởi chạy
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStudyPage);
  } else {
    initStudyPage();
  }
})();
