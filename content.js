(function() {
  let dictionary = {};
  let knownWords = new Set();
  let highlighterEnabled = true;
  let tooltipEl = null;
  let hideTimer = null;
  let activeTimer = null;
  let vietnameseToEnglishMap = new Map();
  let userPrioritizedPhrases = [];
  let wordLookupStats = {};

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
      const enStem = getBaseStem(vnMatch.enWord);
      const enData = dictionary[enStem] || { mean: vnMatch.mean, ipa: [[vnMatch.ipa]], cefr: vnMatch.cefr };
      const synonymData = SYNONYMS_3000[vnMatch.enWord] || null;
      return {
        stem: enStem,
        data: enData,
        synonymData,
        isAdvanced: enData.cefr === 'C1' || enData.cefr === 'C2' || !!synonymData,
        isVnMatch: true,
        matchedVnWord: tokRaw,
        enWord: vnMatch.enWord
      };
    }

    return null;
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

  function toggleWordKnownState(targetWord, targetEl) {
    const isNowKnown = !knownWords.has(targetWord);
    if (isNowKnown) {
      knownWords.add(targetWord);
    } else {
      knownWords.delete(targetWord);
    }

    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ knownWords: [...knownWords] });
    }

    // Dynamic Live DOM Update across the page
    document.querySelectorAll(`.dva-hl-word[data-stem="${targetWord}"]`).forEach(el => {
      if (isNowKnown) {
        el.className = 'dva-hl-word dva-hl-known';
      } else {
        const isAdv = el.getAttribute('data-advanced') === 'true';
        el.className = `dva-hl-word ${isAdv ? 'dva-hl-advanced' : 'dva-hl-unknown-3k'}`;
      }
    });

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
    if (!info.synonymData && info.isAdvanced) {
      reportSynBtnHtml = `<button class="dva-tt-btn-report-syn">🚩 Đề xuất AI tìm từ 3000 đồng nghĩa</button>`;
    }

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

      chrome.storage.local.get(['knownWords', 'highlighterEnabled', 'showKnownHighlights', 'userPrioritizedPhrases', 'wordLookupStats'], (data) => {
        knownWords = new Set(data.knownWords || []);
        userPrioritizedPhrases = data.userPrioritizedPhrases || [];
        wordLookupStats = data.wordLookupStats || {};
        highlighterEnabled = data.highlighterEnabled !== undefined ? data.highlighterEnabled : true;
        const showKnown = data.showKnownHighlights !== undefined ? data.showKnownHighlights : true;
        
        document.body.classList.toggle('dva-hide-known', !showKnown);

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
          if (changes.highlighterEnabled !== undefined) {
            highlighterEnabled = changes.highlighterEnabled.newValue;
          }
          if (changes.showKnownHighlights !== undefined) {
            document.body.classList.toggle('dva-hide-known', !changes.showKnownHighlights.newValue);
          }
          if (highlighterEnabled) {
            scanAndHighlight(true);
          } else {
            removeHighlights();
          }
        }
      });

      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'MANUAL_SCAN') {
          scanAndHighlight(true);
          sendResponse({ status: 'SUCCESS' });
        }
      });

    } catch (e) {
      console.error('[Đánh Vần Tiếng Anh Extension] Error initializing highlighter:', e);
    }
  }

  function removeHighlights() {
    document.querySelectorAll('.dva-hl-word').forEach(span => {
      const parent = span.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(span.textContent), span);
        parent.normalize();
      }
    });
  }

  function scanAndHighlight(forceScan = false) {
    if (!highlighterEnabled && !forceScan) return;

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) {
          const parentName = node.parentNode ? node.parentNode.nodeName.toUpperCase() : '';
          if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT', 'IFRAME', 'CODE'].includes(parentName)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (node.parentNode && node.parentNode.classList && node.parentNode.classList.contains('dva-hl-word')) {
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

    // Process all nodes in chunks to avoid freezing the browser on massive pages
    let currentIndex = 0;
    const chunkSize = 300;

    function processChunk() {
      const chunk = textNodes.slice(currentIndex, currentIndex + chunkSize);
      if (chunk.length === 0) return;

      chunk.forEach(node => {
        const text = node.nodeValue;
        if (!text) return;

        const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const customPhrases = userPrioritizedPhrases.map(escapeRegex).sort((a,b) => b.length - a.length).join('|');
        const pattern = `(${customPhrases ? customPhrases + '|' : ''}\\b[a-zA-Z]{3,}\\b|\\b[\\u00C0-\\u1EF9a-zA-Z]{2,}\\b)`;
        const tokenizer = new RegExp(pattern, 'gi');
        
        const tokens = text.split(tokenizer).filter(t => t !== undefined && t !== '');
        if (tokens.length <= 1) return;

        let hasMatch = false;
        const frag = document.createDocumentFragment();

        tokens.forEach((tok, tokIndex) => {
          const tokRaw = tok.trim();
          const info = getWordInfo(tokRaw);
          const isPrioritized = userPrioritizedPhrases.some(p => p.toLowerCase() === tokRaw.toLowerCase());
          
          if (info || isPrioritized) {
            const targetStem = info ? (info.enWord || info.stem || '').toLowerCase() : tokRaw.toLowerCase();
            const synWord = info && info.synonymData ? info.synonymData.synWord.toLowerCase() : null;
            const isKnown = knownWords.has(targetStem) || (synWord && knownWords.has(synWord));
            const isInspected = wordLookupStats[targetStem] || (synWord && wordLookupStats[synWord]) || isPrioritized;

            if (!isKnown && !isInspected && !forceScan) {
              frag.appendChild(document.createTextNode(tok));
              return;
            }

            hasMatch = true;
            const ipaStr = info && info.data && info.data.ipa && info.data.ipa[0] ? info.data.ipa[0].join('') : tokRaw;

            let colorClass = 'dva-hl-unknown-3k';
            if (isKnown) {
              colorClass = 'dva-hl-known';
            } else if (isInspected) {
              colorClass = 'dva-hl-inspected';
            } else if (info && info.isAdvanced) {
              colorClass = 'dva-hl-advanced';
            }

            const span = document.createElement('span');
            span.className = `dva-hl-word ${colorClass}`;
            span.setAttribute('data-stem', synWord || targetStem);
            span.setAttribute('data-advanced', (info && info.isAdvanced) ? 'true' : 'false');
            span.textContent = tok;
            
            span.addEventListener('mouseenter', () => {
              let prevWord = null;
              let nextWord = null;
              if (tokIndex >= 2 && tokens[tokIndex - 2].trim().length > 1) {
                prevWord = tokens[tokIndex - 2].trim();
              }
              if (tokIndex <= tokens.length - 3 && tokens[tokIndex + 2].trim().length > 1) {
                nextWord = tokens[tokIndex + 2].trim();
              }

              showTooltip(span, {
                displayWord: tok,
                word: tokRaw,
                stem: targetStem,
                ipa: ipaStr,
                mean: info ? info.data.mean : 'Cụm từ ghim',
                cefr: info && info.data.cefr ? info.data.cefr : 'C1',
                synonymData: info ? info.synonymData : null,
                isAdvanced: info ? info.isAdvanced : true,
                isVnMatch: info ? info.isVnMatch : true,
                enWord: info ? info.enWord : tokRaw,
                sentence: text.trim().slice(0, 150),
                hoveredContext: { currentWord: tokRaw, prevWord, nextWord }
              });
            });
            span.addEventListener('mouseleave', hideTooltip);

            frag.appendChild(span);
          } else {
            frag.appendChild(document.createTextNode(tok));
          }
        });

        if (hasMatch && node.parentNode) {
          node.parentNode.replaceChild(frag, node);
        }
      });

      currentIndex += chunkSize;
      if (currentIndex < textNodes.length) {
        requestAnimationFrame(() => setTimeout(processChunk, 0));
      }
    }

    processChunk();
  }

  // On-Demand Inspector: Point and press Ctrl
  let lastMouseX = 0;
  let lastMouseY = 0;
  let lastHoveredTarget = null;

  function initOnDemandHoverInspector() {
    document.addEventListener('mousemove', (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      lastHoveredTarget = e.target;
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Control' && highlighterEnabled) {
        
        // 1. If already hovering a highlighted word, let the existing mouseenter event handle it
        if (lastHoveredTarget && lastHoveredTarget.classList && lastHoveredTarget.classList.contains('dva-hl-word')) {
          return;
        }

        let range, textNode, offset;
        if (document.caretRangeFromPoint) {
          range = document.caretRangeFromPoint(lastMouseX, lastMouseY);
          if (range) {
            textNode = range.startContainer;
            offset = range.startOffset;
          }
        }

        if (!textNode || textNode.nodeType !== Node.TEXT_NODE) return;
        
        // Prevent nesting spans if parent is already a dva-hl-word
        if (textNode.parentNode && textNode.parentNode.classList && textNode.parentNode.classList.contains('dva-hl-word')) {
          return;
        }

        const fullText = textNode.nodeValue;
        if (!fullText || fullText.trim().length < 2) return;

        const parentName = textNode.parentNode ? textNode.parentNode.nodeName.toUpperCase() : '';
        if (['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'NOSCRIPT', 'IFRAME', 'CODE', 'BUTTON'].includes(parentName)) return;

        // Extract accurate word boundaries around caret
        const wordRegex = /[\u00C0-\u1EF9a-zA-Z]+/g;
        let match;
        let wordsList = [];
        while ((match = wordRegex.exec(fullText)) !== null) {
          wordsList.push({ word: match[0], start: match.index, end: match.index + match[0].length });
        }

        let hoveredIndex = -1;
        for (let i = 0; i < wordsList.length; i++) {
          if (offset >= wordsList[i].start && offset <= wordsList[i].end + 1) {
            hoveredIndex = i;
            break;
          }
        }

        if (hoveredIndex === -1) return;

        const currentWord = wordsList[hoveredIndex].word;
        const prevWord = hoveredIndex > 0 ? wordsList[hoveredIndex - 1].word : null;
        const nextWord = hoveredIndex < wordsList.length - 1 ? wordsList[hoveredIndex + 1].word : null;

        const info = getWordInfo(currentWord);
        
        // Force Trigger for ANY word (even if not in dictionary) when Ctrl is intentionally pressed!
        const targetStem = info ? (info.enWord || info.stem || '').toLowerCase() : currentWord.toLowerCase();
        const isKnown = knownWords.has(targetStem);
        const colorClass = isKnown ? 'dva-hl-known' : 'dva-hl-inspected'; // 💜 Purple

        const matchIdx = wordsList[hoveredIndex].start;
        const beforeStr = fullText.slice(0, matchIdx);
        const matchStr = fullText.slice(matchIdx, matchIdx + currentWord.length);
        const afterStr = fullText.slice(matchIdx + currentWord.length);

        const span = document.createElement('span');
        span.className = `dva-hl-word ${colorClass}`;
        span.setAttribute('data-stem', targetStem);
        span.textContent = matchStr;

        const ipaStr = info && info.data && info.data.ipa && info.data.ipa[0] ? info.data.ipa[0].join('') : currentWord;

        const tooltipData = {
          displayWord: matchStr,
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
          hoveredContext: { currentWord, prevWord, nextWord }
        };

        span.addEventListener('mouseenter', () => showTooltip(span, tooltipData));
        span.addEventListener('mouseleave', hideTooltip);

        const frag = document.createDocumentFragment();
        if (beforeStr) frag.appendChild(document.createTextNode(beforeStr));
        frag.appendChild(span);
        if (afterStr) frag.appendChild(document.createTextNode(afterStr));

        textNode.parentNode.replaceChild(frag, textNode);

        // Trigger Tooltip for deliberate lookup
        showTooltip(span, tooltipData);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initHighlighter();
      initOnDemandHoverInspector();
    });
  } else {
    initHighlighter();
    initOnDemandHoverInspector();
  }
})();
