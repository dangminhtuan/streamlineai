/* ==========================================================================
   STREAMLINE REFLEX ENGLISH - INTERACTIVE ENGINE & DATA
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. LESSON DATA (Streamline Reflex Conversational Methodology)
// --------------------------------------------------------------------------
const STREAMLINE_LESSONS = [
  {
    id: 1,
    title: "1. An Everyday Conversation",
    subtitle: "Xin lỗi, đây có phải túi xách của bạn không?",
    topic: "Giao tiếp hàng ngày",
    level: "A1 Departures",
    description: "Luyện phản xạ lịch sự khi vô tình nhặt đồ, hỏi thăm và phản ứng nhanh trong đời sống.",
    dialogue: [
      { speaker: "A", name: "Stranger A", en: "Excuse me.", vi: "Xin lỗi quý khách." },
      { speaker: "B", name: "You (Person B)", en: "Yes?", vi: "Vâng? Có chuyện gì thế ạ?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là chiếc túi xách của bạn không?" },
      { speaker: "B", name: "You (Person B)", en: "Pardon?", vi: "Dạ? Bạn nói sao cơ?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là túi xách của bạn không?" },
      { speaker: "B", name: "You (Person B)", en: "Oh, yes it is! Thank you very much.", vi: "Ô đúng rồi! Cảm ơn bạn rất nhiều." },
      { speaker: "A", name: "Stranger A", en: "You're welcome.", vi: "Không có chi." }
    ],
    patterns: [
      { en: "Excuse me.", vi: "Xin lỗi (dùng khi bắt đầu gây chú ý với ai đó)" },
      { en: "Pardon?", vi: "Dạ? (dùng khi nghe không rõ và muốn người khác nhắc lại)" },
      { en: "Is this your [object]?", vi: "Đây có phải là [vật] của bạn không?" },
      { en: "You're welcome.", vi: "Không có gì (đáp lại lời cảm ơn)" }
    ],
    quizzes: [
      {
        prompt: "Nghe không rõ và muốn nhờ người khác nhắc lại một cách lịch sự:",
        sentence: "B: _______?",
        options: ["Pardon", "Sorry you", "Repeat please", "What"],
        correct: 0
      },
      {
        prompt: "Khi ai đó nói 'Thank you very much', bạn phản xạ đáp lại:",
        sentence: "A: _______.",
        options: ["You're welcome", "Nothing", "Yes it is", "Good idea"],
        correct: 0
      }
    ]
  },
  {
    id: 2,
    title: "2. Asking for Directions",
    subtitle: "Hỏi đường đến Bưu điện gần nhất",
    topic: "Hỏi đường & Du lịch",
    level: "A1 Departures",
    description: "Học mẫu câu hỏi vị trí, chỉ đường và phản xạ hướng đi trong thành phố.",
    dialogue: [
      { speaker: "A", name: "Tourist A", en: "Excuse me. Is there a post office near here?", vi: "Xin lỗi. Có bưu điện nào ở gần đây không?" },
      { speaker: "B", name: "You (Person B)", en: "Yes, there is one in Main Street.", vi: "Có, có một bưu điện ở đường Main Street." },
      { speaker: "A", name: "Tourist A", en: "Where in Main Street?", vi: "Ở đoạn nào trên đường Main Street ạ?" },
      { speaker: "B", name: "You (Person B)", en: "It's next to the bank, opposite the supermarket.", vi: "Nó nằm kế bên ngân hàng, đối diện siêu thị." },
      { speaker: "A", name: "Tourist A", en: "Is it far from here?", vi: "Nó có xa đây lắm không?" },
      { speaker: "B", name: "You (Person B)", en: "No, it isn't. It's only a five-minute walk.", vi: "Không xa đâu. Chỉ mất tầm 5 phút đi bộ thôi." },
      { speaker: "A", name: "Tourist A", en: "Thank you.", vi: "Cảm ơn bạn nhé." }
    ],
    patterns: [
      { en: "Is there a [place] near here?", vi: "Có [nơi chốn] nào gần đây không?" },
      { en: "It's next to [A], opposite [B].", vi: "Nó kế bên [A], đối diện [B]." },
      { en: "Is it far from here?", vi: "Nó có xa đây không?" },
      { en: "It's a five-minute walk.", vi: "Chỉ mất 5 phút đi bộ." }
    ],
    quizzes: [
      {
        prompt: "Để nói 'Chỉ mất 5 phút đi bộ', bạn dùng cụm từ:",
        sentence: "It's only a _______ walk.",
        options: ["five-minute", "five minutes", "fifth minute", "walk 5 min"],
        correct: 0
      }
    ]
  },
  {
    id: 3,
    title: "3. At a Restaurant",
    subtitle: "Gọi món tại nhà hàng",
    topic: "Ẩm thực & Dịch vụ",
    level: "A2 Connections",
    description: "Thực hành phản xạ đặt bàn, chọn món ăn và yêu cầu thanh toán hóa đơn.",
    dialogue: [
      { speaker: "A", name: "Waiter", en: "Good evening. Are you ready to order?", vi: "Chào buổi tối quý khách. Quý khách đã sẵn sàng gọi món chưa?" },
      { speaker: "B", name: "You (Customer)", en: "Yes, please. I'd like the steak, please.", vi: "Vâng. Cho tôi một phần bò bít tết nhé." },
      { speaker: "A", name: "Waiter", en: "How would you like your steak cooked?", vi: "Quý khách muốn bít tết chín ở mức độ nào ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Medium rare, please.", vi: "Cho tôi chín tái (medium rare) nhé." },
      { speaker: "A", name: "Waiter", en: "And what would you like to drink?", vi: "Và quý khách muốn dùng nước uống gì ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Just a glass of still water, thank you.", vi: "Cho tôi một ly nước lọc không gas là được, cảm ơn." }
    ],
    patterns: [
      { en: "Are you ready to order?", vi: "Quý khách đã sẵn sàng gọi món chưa?" },
      { en: "I'd like [dish], please.", vi: "Tôi muốn dùng [món ăn]." },
      { en: "How would you like your steak?", vi: "Bạn muốn bít tết chín thế nào?" }
    ],
    quizzes: [
      {
        prompt: "Khi bồi bàn hỏi 'Are you ready to order?', cách phản xạ lịch sự nhất là:",
        sentence: "Yes, please. _______ the steak.",
        options: ["I'd like", "I give", "Give me", "I want strictly"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    title: "4. Making Plans on the Phone",
    subtitle: "Hẹn gặp tối nay qua điện thoại",
    topic: "Giao tiếp xã hội",
    level: "A2 Connections",
    description: "Luyện phản xạ nghe gọi điện thoại, hẹn giờ và chốt địa điểm gặp mặt.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "Hello Alex! Are you free tonight?", vi: "Alô Alex hả! Tối nay bạn có rảnh không?" },
      { speaker: "B", name: "You (Alex)", en: "Yes, I think so. Why? What's up?", vi: "Ừm mình nghĩ là có. Sao thế? Có chuyện gì à?" },
      { speaker: "A", name: "Friend A", en: "Would you like to go to the cinema?", vi: "Bạn có muốn đi xem phim không?" },
      { speaker: "B", name: "You (Alex)", en: "That sounds great! What time does the film start?", vi: "Nghe hay đấy! Mấy giờ phim bắt đầu vậy?" },
      { speaker: "A", name: "Friend A", en: "It starts at seven thirty. Shall we meet outside at seven?", vi: "Phim chiếu lúc 7:30. Chúng ta gặp nhau trước rạp lúc 7:00 nhé?" },
      { speaker: "B", name: "You (Alex)", en: "Perfect! See you at seven then.", vi: "Tuyệt vời! Vậy gặp bạn lúc 7 giờ nhé." }
    ],
    patterns: [
      { en: "Are you free tonight?", vi: "Tối nay bạn có rảnh không?" },
      { en: "Would you like to [action]?", vi: "Bạn có muốn [làm gì] không?" },
      { en: "That sounds great!", vi: "Nghe hay đấy / Nghe tuyệt đấy!" },
      { en: "Shall we meet at [time]?", vi: "Chúng ta gặp nhau lúc [giờ] nhé?" }
    ],
    quizzes: [
      {
        prompt: "Đồng ý với lời mời của bạn bè một cách hào hứng:",
        sentence: "B: That _______!",
        options: ["sounds great", "looks heavy", "hears well", "is bad"],
        correct: 0
      }
    ]
  },
  {
    id: 5,
    title: "5. At the Airport Customs",
    subtitle: "Kiểm tra thủ tục hải quan sân bay",
    topic: "Du lịch quốc tế",
    level: "B1 Destinations",
    description: "Thực hành phản xạ trả lời cán bộ hải quan về hộ chiếu, mục đích chuyến đi.",
    dialogue: [
      { speaker: "A", name: "Customs Officer", en: "Good morning. May I see your passport, please?", vi: "Chào buổi sáng. Tôi có thể xem hộ chiếu của bạn được không?" },
      { speaker: "B", name: "You (Passenger)", en: "Here you are.", vi: "Dạ hộ chiếu đây ạ." },
      { speaker: "A", name: "Customs Officer", en: "What is the purpose of your visit to London?", vi: "Mục đích chuyến thăm London của bạn là gì?" },
      { speaker: "B", name: "You (Passenger)", en: "I'm here on holiday for two weeks.", vi: "Tôi đến đây du lịch trong 2 tuần." },
      { speaker: "A", name: "Customs Officer", en: "Where will you be staying during your visit?", vi: "Bạn sẽ lưu trú ở đâu trong thời gian này?" },
      { speaker: "B", name: "You (Passenger)", en: "At the Grand Central Hotel.", vi: "Tại khách sạn Grand Central." },
      { speaker: "A", name: "Customs Officer", en: "Thank you. Enjoy your stay!", vi: "Cảm ơn bạn. Chúc bạn có chuyến đi vui vẻ!" }
    ],
    patterns: [
      { en: "Here you are.", vi: "Dạ đây ạ (dùng khi đưa đồ vật cho người khác)" },
      { en: "What is the purpose of your visit?", vi: "Mục đích chuyến đi của bạn là gì?" },
      { en: "I'm here on holiday / business.", vi: "Tôi ở đây đi nghỉ mát / đi công tác." }
    ],
    quizzes: [
      {
        prompt: "Khi trao hộ chiếu hoặc giấy tờ cho nhân viên hải quan, bạn nói:",
        sentence: "B: _______.",
        options: ["Here you are", "Take this now", "You hold it", "Yes it is"],
        correct: 0
      }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & DOM REFERENCES
// --------------------------------------------------------------------------
let state = {
  currentLessonIdx: 0,
  currentMode: 'listen', // 'listen', 'roleplay', 'quiz'
  userRole: 'B',        // 'B', 'A', 'SPECTATOR'
  activeSpeechBubbleIdx: -1,
  isPlayingAll: false,
  isRecording: false,
  voices: [],
  selectedVoice: null,
  speechRate: 1.0,
  autoAdvance: true,
  points: parseInt(localStorage.getItem('reflex_points') || '0', 10),
  streak: parseInt(localStorage.getItem('reflex_streak') || '1', 10),
  mastered: JSON.parse(localStorage.getItem('reflex_mastered') || '[]'),
  currentQuizIdx: 0
};

// Speech Recognition Instance
let recognition = null;

// DOM Elements
const el = {
  lessonList: document.getElementById('lessonList'),
  lessonTopic: document.getElementById('lessonTopic'),
  lessonLevel: document.getElementById('lessonLevel'),
  lessonTitle: document.getElementById('lessonTitle'),
  lessonDesc: document.getElementById('lessonDesc'),
  voiceSelect: document.getElementById('voiceSelect'),
  speedSlider: document.getElementById('speedSlider'),
  speedValue: document.getElementById('speedValue'),
  autoAdvanceCheck: document.getElementById('autoAdvanceCheck'),
  chatStream: document.getElementById('chatStream'),
  patternGrid: document.getElementById('patternGrid'),
  btnPlayAll: document.getElementById('btnPlayAll'),
  btnStopPlay: document.getElementById('btnStopPlay'),
  waveformBar: document.getElementById('waveformBar'),
  speechStatusText: document.getElementById('speechStatusText'),
  roleplayDeck: document.getElementById('roleplayDeck'),
  quizDeck: document.getElementById('quizDeck'),
  targetEn: document.getElementById('targetEn'),
  targetVi: document.getElementById('targetVi'),
  turnIndicator: document.getElementById('turnIndicator'),
  btnMic: document.getElementById('btnMic'),
  speechFeedback: document.getElementById('speechFeedback'),
  userSpokenText: document.getElementById('userSpokenText'),
  accuracyBadge: document.getElementById('accuracyBadge'),
  btnSkipTurn: document.getElementById('btnSkipTurn'),
  btnListenSample: document.getElementById('btnListenSample'),
  quizPrompt: document.getElementById('quizPrompt'),
  quizSentence: document.getElementById('quizSentence'),
  quizOptionsGrid: document.getElementById('quizOptionsGrid'),
  quizFeedbackBox: document.getElementById('quizFeedbackBox'),
  quizFeedbackMsg: document.getElementById('quizFeedbackMsg'),
  btnNextQuiz: document.getElementById('btnNextQuiz'),
  reflexPoints: document.getElementById('reflexPoints'),
  reflexStreak: document.getElementById('reflexStreak'),
  lessonsMastered: document.getElementById('lessonsMastered'),
  toast: document.getElementById('toast')
};

// --------------------------------------------------------------------------
// 3. INITIALIZATION & VOICE ENGINE
// --------------------------------------------------------------------------
function init() {
  renderHeaderStats();
  renderLessonSidebar();
  loadLesson(0);
  initSpeechSynthesis();
  initSpeechRecognition();
  attachEventListeners();
}

function renderHeaderStats() {
  el.reflexPoints.textContent = state.points;
  el.reflexStreak.textContent = state.streak;
  el.lessonsMastered.textContent = `${state.mastered.length}/${STREAMLINE_LESSONS.length}`;
}

function initSpeechSynthesis() {
  if (!('speechSynthesis' in window)) {
    showToast("⚠️ Trình duyệt của bạn không hỗ trợ Web Speech Synthesis API.");
    return;
  }

  function populateVoices() {
    state.voices = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
    el.voiceSelect.innerHTML = '';
    
    if (state.voices.length === 0) {
      el.voiceSelect.innerHTML = `<option value="">Default English Voice</option>`;
      return;
    }

    state.voices.forEach((v, idx) => {
      const option = document.createElement('option');
      option.value = idx;
      option.textContent = `${v.name} (${v.lang})`;
      // Prefer US / UK English voice
      if (v.name.includes('Google') || v.name.includes('Natural') || v.lang === 'en-US') {
        option.selected = true;
        state.selectedVoice = v;
      }
      el.voiceSelect.appendChild(option);
    });

    if (!state.selectedVoice && state.voices.length > 0) {
      state.selectedVoice = state.voices[0];
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("Speech Recognition API not supported in this browser.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    state.isRecording = true;
    el.btnMic.classList.add('recording');
    el.speechFeedback.classList.remove('hidden');
    el.userSpokenText.textContent = "Đang lắng nghe giọng đọc của bạn...";
    el.accuracyBadge.textContent = "Độ chính xác: ...";
  };

  recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    const currentText = finalTranscript || interimTranscript;
    el.userSpokenText.textContent = `"${currentText}"`;

    if (finalTranscript) {
      evaluateSpokenAccuracy(finalTranscript);
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech Recognition error", event.error);
    stopRecording();
    showToast(`⚠️ Lỗi ghi âm: ${event.error}`);
  };

  recognition.onend = () => {
    stopRecording();
  };
}

function stopRecording() {
  state.isRecording = false;
  el.btnMic.classList.remove('recording');
}

// --------------------------------------------------------------------------
// 4. LESSON RENDERING & DIALOGUE STREAM
// --------------------------------------------------------------------------
function renderLessonSidebar() {
  el.lessonList.innerHTML = '';
  STREAMLINE_LESSONS.forEach((lesson, idx) => {
    const item = document.createElement('div');
    item.className = `lesson-item ${idx === state.currentLessonIdx ? 'active' : ''}`;
    item.onclick = () => loadLesson(idx);
    
    const isMastered = state.mastered.includes(lesson.id);

    item.innerHTML = `
      <div class="lesson-item-header">
        <span class="lesson-num">Lesson ${lesson.id}</span>
        ${isMastered ? '<span style="color:#10b981; font-size:0.8rem;">✓ Mastered</span>' : ''}
      </div>
      <div class="lesson-item-title">${lesson.title}</div>
      <div class="lesson-item-sub">${lesson.subtitle}</div>
    `;
    el.lessonList.appendChild(item);
  });
}

function loadLesson(idx) {
  stopSpeech();
  state.currentLessonIdx = idx;
  state.activeSpeechBubbleIdx = -1;
  state.currentQuizIdx = 0;
  
  const lesson = STREAMLINE_LESSONS[idx];
  el.lessonTopic.textContent = lesson.topic;
  el.lessonLevel.textContent = lesson.level;
  el.lessonTitle.textContent = lesson.title;
  el.lessonDesc.textContent = lesson.description;

  renderLessonSidebar();
  renderChatStream(lesson.dialogue);
  renderPatterns(lesson.patterns);
  updateModeView();
}

function renderChatStream(dialogue) {
  el.chatStream.innerHTML = '';
  dialogue.forEach((line, idx) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${line.speaker === 'A' ? 'speaker-a' : 'speaker-b'}`;
    bubble.dataset.idx = idx;

    const avatarClass = line.speaker === 'A' ? 'avatar-a' : 'avatar-b';

    bubble.innerHTML = `
      <div class="chat-avatar ${avatarClass}">${line.speaker}</div>
      <div class="bubble-content">
        <span class="speaker-name">${line.name}</span>
        <span class="text-en">${line.en}</span>
        <span class="text-vi">${line.vi}</span>
        <div class="bubble-controls">
          <button class="btn-speak-icon" onclick="window.speakLine(${idx})" title="Phát âm câu này">🔊</button>
        </div>
      </div>
    `;
    el.chatStream.appendChild(bubble);
  });
}

function renderPatterns(patterns) {
  el.patternGrid.innerHTML = '';
  patterns.forEach(p => {
    const card = document.createElement('div');
    card.className = 'pattern-item';
    card.innerHTML = `
      <div class="pattern-en">${p.en}</div>
      <div class="pattern-vi">${p.vi}</div>
    `;
    el.patternGrid.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 5. AUDIO TTS PLAYBACK CONTROLS
// --------------------------------------------------------------------------
function speakText(text, onEndCallback = null) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = state.speechRate;

  if (state.selectedVoice) {
    utterance.voice = state.selectedVoice;
  }

  el.waveformBar.classList.remove('hidden');
  el.speechStatusText.textContent = `Đang phát âm: "${text.substring(0, 30)}..."`;

  utterance.onend = () => {
    el.waveformBar.classList.add('hidden');
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (err) => {
    console.error("Utterance error", err);
    el.waveformBar.classList.add('hidden');
  };

  window.speechSynthesis.speak(utterance);
}

function highlightBubble(idx) {
  document.querySelectorAll('.chat-bubble').forEach(b => b.classList.remove('active-speech'));
  if (idx >= 0) {
    const target = document.querySelector(`.chat-bubble[data-idx="${idx}"]`);
    if (target) {
      target.classList.add('active-speech');
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

window.speakLine = function(idx) {
  state.isPlayingAll = false;
  togglePlayButtons(false);
  const line = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue[idx];
  highlightBubble(idx);
  speakText(line.en, () => {
    highlightBubble(-1);
  });
};

function playAllDialogue(startIdx = 0) {
  const dialogue = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue;
  if (startIdx >= dialogue.length) {
    state.isPlayingAll = false;
    togglePlayButtons(false);
    highlightBubble(-1);
    showToast("🎉 Đã hoàn thành phát bài hội thoại!");
    return;
  }

  state.isPlayingAll = true;
  state.activeSpeechBubbleIdx = startIdx;
  togglePlayButtons(true);

  const line = dialogue[startIdx];
  highlightBubble(startIdx);

  // In Roleplay Mode, if it's the User's turn to speak, pause TTS and wait for User!
  if (state.currentMode === 'roleplay' && line.speaker === state.userRole) {
    togglePlayButtons(false);
    updateRoleplayDeck(startIdx);
    return;
  }

  speakText(line.en, () => {
    if (state.isPlayingAll && state.autoAdvance) {
      setTimeout(() => {
        playAllDialogue(startIdx + 1);
      }, 500);
    }
  });
}

function stopSpeech() {
  state.isPlayingAll = false;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  el.waveformBar.classList.add('hidden');
  togglePlayButtons(false);
  highlightBubble(-1);
}

function togglePlayButtons(isPlaying) {
  if (isPlaying) {
    el.btnPlayAll.classList.add('hidden');
    el.btnStopPlay.classList.remove('hidden');
  } else {
    el.btnPlayAll.classList.remove('hidden');
    el.btnStopPlay.classList.add('hidden');
  }
}

// --------------------------------------------------------------------------
// 6. ROLEPLAY & SPEECH RECOGNITION EVALUATION
// --------------------------------------------------------------------------
function updateRoleplayDeck(lineIdx) {
  const dialogue = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue;
  const line = dialogue[lineIdx];

  state.activeSpeechBubbleIdx = lineIdx;
  highlightBubble(lineIdx);

  el.turnIndicator.innerHTML = `👉 Đến lượt bạn đọc câu thoại của <b>Nhân vật ${line.speaker}</b>!`;
  el.targetEn.textContent = `"${line.en}"`;
  el.targetVi.textContent = `(${line.vi})`;

  el.speechFeedback.classList.add('hidden');
  el.userSpokenText.textContent = '"..."';
}

function evaluateSpokenAccuracy(spokenText) {
  const line = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue[state.activeSpeechBubbleIdx];
  if (!line) return;

  const targetClean = cleanText(line.en);
  const spokenClean = cleanText(spokenText);

  const similarity = calculateSimilarity(targetClean, spokenClean);
  const scorePercent = Math.round(similarity * 100);

  el.accuracyBadge.textContent = `Độ chính xác: ${scorePercent}%`;
  
  if (scorePercent >= 70) {
    el.accuracyBadge.style.color = "#10b981";
    showToast(`🎉 Xuất sắc! Phản xạ chính xác ${scorePercent}%! (+10 điểm)`);
    addPoints(10);
    
    // Auto advance to next turn after 1.2s
    setTimeout(() => {
      advanceRoleplayTurn();
    }, 1200);
  } else {
    el.accuracyBadge.style.color = "#f43f5e";
    showToast("💪 Phát âm chưa chuẩn lắm, hãy nhấn Micro để thử lại nhé!");
  }
}

function advanceRoleplayTurn() {
  const nextIdx = state.activeSpeechBubbleIdx + 1;
  const dialogue = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue;

  if (nextIdx < dialogue.length) {
    playAllDialogue(nextIdx);
  } else {
    showToast("🏆 Bạn đã hoàn thành xuất sắc lượt đóng vai hội thoại!");
    markLessonMastered(STREAMLINE_LESSONS[state.currentLessonIdx].id);
  }
}

function cleanText(str) {
  return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
}

function calculateSimilarity(str1, str2) {
  if (str1 === str2) return 1.0;
  if (!str1 || !str2) return 0.0;
  
  const words1 = str1.split(' ');
  const words2 = str2.split(' ');
  
  let matches = 0;
  words1.forEach(w => {
    if (words2.includes(w)) matches++;
  });
  
  return matches / Math.max(words1.length, words2.length);
}

// --------------------------------------------------------------------------
// 7. QUIZ MODE ENGINE
// --------------------------------------------------------------------------
function renderQuiz() {
  const lesson = STREAMLINE_LESSONS[state.currentLessonIdx];
  if (!lesson.quizzes || lesson.quizzes.length === 0) {
    el.quizPrompt.textContent = "Bài học này chưa có trắc nghiệm.";
    el.quizSentence.textContent = "";
    el.quizOptionsGrid.innerHTML = "";
    return;
  }

  const quiz = lesson.quizzes[state.currentQuizIdx];
  el.quizPrompt.textContent = quiz.prompt;
  el.quizSentence.textContent = quiz.sentence;
  el.quizFeedbackBox.classList.add('hidden');
  el.quizOptionsGrid.innerHTML = '';

  quiz.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
    btn.onclick = () => handleQuizSelect(idx, quiz.correct);
    el.quizOptionsGrid.appendChild(btn);
  });
}

function handleQuizSelect(selectedIdx, correctIdx) {
  const buttons = el.quizOptionsGrid.querySelectorAll('.quiz-opt-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === correctIdx) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx) {
      btn.classList.add('wrong');
    }
  });

  el.quizFeedbackBox.classList.remove('hidden');
  if (selectedIdx === correctIdx) {
    el.quizFeedbackMsg.textContent = "🎉 Chính xác! Bạn phản xạ rất nhanh!";
    el.quizFeedbackMsg.style.color = "#10b981";
    addPoints(15);
  } else {
    el.quizFeedbackMsg.textContent = "❌ Chưa đúng rồi! Hãy nhớ lại mẫu câu hội thoại nhé.";
    el.quizFeedbackMsg.style.color = "#f43f5e";
  }
}

// --------------------------------------------------------------------------
// 8. GAMIFICATION & LOCAL STORAGE
// --------------------------------------------------------------------------
function addPoints(pts) {
  state.points += pts;
  localStorage.setItem('reflex_points', state.points);
  renderHeaderStats();
}

function markLessonMastered(lessonId) {
  if (!state.mastered.includes(lessonId)) {
    state.mastered.push(lessonId);
    localStorage.setItem('reflex_mastered', JSON.stringify(state.mastered));
    renderHeaderStats();
    renderLessonSidebar();
  }
}

// --------------------------------------------------------------------------
// 9. EVENT LISTENERS & MODE SWITCHING
// --------------------------------------------------------------------------
function updateModeView() {
  document.querySelectorAll('.mode-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.mode === state.currentMode);
  });

  if (state.currentMode === 'listen') {
    el.roleplayDeck.classList.add('hidden');
    el.quizDeck.classList.add('hidden');
    el.chatStream.classList.remove('hidden');
  } else if (state.currentMode === 'roleplay') {
    el.roleplayDeck.classList.remove('hidden');
    el.quizDeck.classList.add('hidden');
    el.chatStream.classList.remove('hidden');
    // Start roleplay at first sentence
    updateRoleplayDeck(0);
  } else if (state.currentMode === 'quiz') {
    el.roleplayDeck.classList.add('hidden');
    el.quizDeck.classList.remove('hidden');
    el.chatStream.classList.add('hidden');
    renderQuiz();
  }
}

function attachEventListeners() {
  // Mode Tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.onclick = () => {
      state.currentMode = tab.dataset.mode;
      updateModeView();
    };
  });

  // Role Selector
  document.querySelectorAll('.role-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.userRole = btn.dataset.role;
      if (state.currentMode === 'roleplay') {
        updateRoleplayDeck(0);
      }
    };
  });

  // Play controls
  el.btnPlayAll.onclick = () => playAllDialogue(0);
  el.btnStopPlay.onclick = () => stopSpeech();

  // Voice Settings
  el.voiceSelect.onchange = () => {
    const idx = parseInt(el.voiceSelect.value, 10);
    if (!isNaN(idx) && state.voices[idx]) {
      state.selectedVoice = state.voices[idx];
    }
  };

  el.speedSlider.oninput = () => {
    state.speechRate = parseFloat(el.speedSlider.value);
    el.speedValue.textContent = `${state.speechRate.toFixed(2)}x`;
  };

  el.autoAdvanceCheck.onchange = () => {
    state.autoAdvance = el.autoAdvanceCheck.checked;
  };

  // Mic Record Button
  el.btnMic.onclick = () => {
    if (!recognition) {
      showToast("⚠️ Trình duyệt của bạn không hỗ trợ nhận diện giọng nói (Web Speech Recognition). Bạn vẫn có thể luyện nghe và phản xạ!");
      return;
    }

    if (state.isRecording) {
      recognition.stop();
    } else {
      try {
        recognition.start();
      } catch (err) {
        console.error("Mic start error", err);
      }
    }
  };

  // Skip turn & Listen Sample
  el.btnSkipTurn.onclick = () => advanceRoleplayTurn();
  el.btnListenSample.onclick = () => {
    const line = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue[state.activeSpeechBubbleIdx];
    if (line) speakText(line.en);
  };

  // Quiz Next
  el.btnNextQuiz.onclick = () => {
    const lesson = STREAMLINE_LESSONS[state.currentLessonIdx];
    if (state.currentQuizIdx + 1 < lesson.quizzes.length) {
      state.currentQuizIdx++;
      renderQuiz();
    } else {
      showToast("🎉 Đã hoàn thành phần trắc nghiệm bài học này!");
      state.currentQuizIdx = 0;
      renderQuiz();
    }
  };
}

function showToast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.remove('hidden');
  setTimeout(() => {
    el.toast.classList.add('hidden');
  }, 3000);
}

// Start application
document.addEventListener('DOMContentLoaded', init);
