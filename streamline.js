/* ==========================================================================
   STREAMLAI 2.0 - GEN Z EDITION INTERACTIVE ENGINE & CURRICULUM
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. LESSON DATA (StreamlAI Gen Z Modern Reflex Curriculum)
// --------------------------------------------------------------------------
const STREAMLINE_LESSONS = [
  {
    id: 1,
    title: "1. Everyday Reflex - Rớt Hộp AirPods",
    subtitle: "Rớt hộp AirPod ở quán cafe / giảng đường",
    topic: "Giao tiếp hàng ngày",
    level: "A1 Departures",
    description: "Luyện phản xạ lịch sự khi vô tình nhặt đồ rơi, hỏi thăm và phản ứng nhanh trong đời sống Gen Z.",
    dialogue: [
      { speaker: "A", name: "Stranger A", en: "Excuse me. Is this your AirPod case?", vi: "Xin lỗi. Đây có phải là hộp AirPod của bạn không?" },
      { speaker: "B", name: "You (Person B)", en: "Pardon?", vi: "Dạ? Bạn nói sao cơ?" },
      { speaker: "A", name: "Stranger A", en: "Is this your AirPod case? You dropped it under the table.", vi: "Đây có phải hộp AirPod của bạn không? Bạn làm rớt nó dưới gầm bàn kìa." },
      { speaker: "B", name: "You (Person B)", en: "Oh, wow, yes it is! I didn't even notice. Thank you so much!", vi: "Ồ, đúng rồi! Mình còn không để ý thấy nữa. Cảm ơn bạn nhiều lắm nhé!" },
      { speaker: "A", name: "Stranger A", en: "No problem! Have a good one.", vi: "Không có gì đâu! Chúc bạn một ngày tốt lành nhé." },
      { speaker: "B", name: "You (Person B)", en: "You too!", vi: "Bạn cũng vậy nhé!" }
    ],
    patterns: [
      { en: "Is this your [object]?", vi: "Đây có phải là [đồ vật] của bạn không?" },
      { en: "Pardon?", vi: "Dạ? (dùng khi nghe không rõ và muốn người khác nhắc lại)" },
      { en: "I didn't even notice!", vi: "Mình còn không để ý thấy luôn!" },
      { en: "Have a good one!", vi: "Chúc một ngày vui vẻ! (Cách nói Gen Z thân mật)" }
    ],
    quizzes: [
      {
        prompt: "Khi nghe chưa rõ và muốn người khác nhắc lại một cách lịch sự, bạn phản xạ:",
        sentence: "B: _______?",
        options: ["Pardon", "Sorry you", "What you say", "Repeat now"],
        correct: 0
      },
      {
        prompt: "Đáp lại lời chúc 'Have a good one!' một cách thân mật ngắn gọn:",
        sentence: "B: _______!",
        options: ["You too", "Same to same", "Thank for that", "No problem"],
        correct: 0
      }
    ]
  },
  {
    id: 2,
    title: "2. Finding Aesthetic Cafe - Cafe Workspace",
    subtitle: "Tìm quán Cafe decor đẹp có Wi-Fi mạnh để chạy deadline",
    topic: "Hỏi đường & Lifestyle",
    level: "A1 Departures",
    description: "Hỏi vị trí quán cafe không gian đẹp, yên tĩnh để làm việc trên laptop.",
    dialogue: [
      { speaker: "A", name: "Freelancer A", en: "Excuse me. Is there any aesthetic coffee shop with fast Wi-Fi near here?", vi: "Xin lỗi. Có quán cafe decor đẹp nào có Wi-Fi mạnh gần đây không bạn?" },
      { speaker: "B", name: "You (Person B)", en: "Yes, there is one right around the corner. It's called The Daily Hub.", vi: "Có đấy, có một quán ngay góc đường kia. Tên là The Daily Hub." },
      { speaker: "A", name: "Freelancer A", en: "Awesome! Is it quiet enough to work on a laptop?", vi: "Tuyệt quá! Ở đó có đủ yên tĩnh để làm việc trên máy tính không bạn?" },
      { speaker: "B", name: "You (Person B)", en: "Yeah, totally! It's next to the indie bookstore, opposite the park.", vi: "Có chứ, thoải mái luôn! Nó nằm kế bên tiệm sách indie, đối diện công viên." },
      { speaker: "A", name: "Freelancer A", en: "Is it far to walk?", vi: "Đi bộ có xa lắm không ạ?" },
      { speaker: "B", name: "You (Person B)", en: "Not at all. It's only a three-minute walk.", vi: "Không xa chút nào. Đi bộ tầm 3 phút là tới." }
    ],
    patterns: [
      { en: "Is there any [place] near here?", vi: "Có [địa điểm] nào gần đây không?" },
      { en: "Is it quiet enough to [action]?", vi: "Ở đó có đủ yên tĩnh để [làm gì] không?" },
      { en: "It's next to [A], opposite [B].", vi: "Nó nằm kế bên [A], đối diện [B]." },
      { en: "It's only a [X]-minute walk.", vi: "Chỉ mất [X] phút đi bộ." }
    ],
    quizzes: [
      {
        prompt: "Để diễn tả 'Nó chỉ mất 3 phút đi bộ', bạn phản xạ câu:",
        sentence: "It's only a _______ walk.",
        options: ["three-minute", "three minutes", "third minute", "walking 3 min"],
        correct: 0
      }
    ]
  },
  {
    id: 3,
    title: "3. Catching a Music Concert - Rủ Đi Show",
    subtitle: "Rủ rê bạn thân đi nghe nhạc live tối nay",
    topic: "Giao tiếp xã hội & Gen Z",
    level: "A2 Connections",
    description: "Luyện phản xạ hẹn hò, chốt kèo đi concert và chốt thời gian địa điểm.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "Hey! Are you free tonight?", vi: "Ê! Tối nay rảnh không bạn ơi?" },
      { speaker: "B", name: "You (Friend B)", en: "Yeah, I think so! What's up?", vi: "Có chứ, sao thế có chuyện gì à?" },
      { speaker: "A", name: "Friend A", en: "Would you like to catch the indie concert tonight? My favorite band is performing!", vi: "Bạn có muốn đi xem concert indie tối nay không? Ban nhạc ruột của mình diễn đó!" },
      { speaker: "B", name: "You (Friend B)", en: "That sounds awesome! What time does it start?", vi: "Nghe cháy đấy! Mấy giờ bắt đầu vậy?" },
      { speaker: "A", name: "Friend A", en: "It starts at 7:30. Shall we meet at the venue around 7:00?", vi: "Diễn lúc 7:30. Chúng mình gặp nhau ở địa điểm diễn tầm 7:00 nhé?" },
      { speaker: "B", name: "You (Friend B)", en: "Perfect! Count me in. See you at seven!", vi: "Tuyệt vời! Chốt kèo nha. Gặp bạn lúc 7 giờ!" }
    ],
    patterns: [
      { en: "Are you free tonight?", vi: "Tối nay bạn có rảnh không?" },
      { en: "Would you like to [action]?", vi: "Bạn có muốn [làm gì] không?" },
      { en: "That sounds awesome!", vi: "Nghe cháy đấy / Nghe tuyệt đấy!" },
      { en: "Count me in!", vi: "Chốt kèo nha! / Cho mình tham gia với!" }
    ],
    quizzes: [
      {
        prompt: "Chốt kèo rủ rê bạn bè tham gia một sự kiện:",
        sentence: "B: Perfect! _______ in!",
        options: ["Count me", "Take me", "Give me", "Include me"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    title: "4. Customizing Matcha Latte - Order Đồ Uống",
    subtitle: "Order Matcha Latte sữa hạt tùy chỉnh độ ngọt/đá",
    topic: "Dịch vụ & Đời sống ẩm thực",
    level: "A2 Connections",
    description: "Thực hành phản xạ order đồ uống chuẩn phong cách Gen Z hiện đại.",
    dialogue: [
      { speaker: "A", name: "Barista A", en: "Hi there! Welcome to StreamlAI Cafe. What can I get started for you today?", vi: "Chào bạn! Chào mừng đến StreamlAI Cafe. Bạn muốn dùng gì hôm nay ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Hi! Can I get an Iced Matcha Latte, please?", vi: "Chào bạn! Cho mình một Iced Matcha Latte nhé." },
      { speaker: "A", name: "Barista A", en: "Sure thing! Would you like whole milk, oat milk, or almond milk?", vi: "Dạ được chứ! Bạn muốn dùng sữa tươi nguyên kem, sữa hạt yến mạch hay sữa hạnh nhân ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Oat milk, please. And can I get less ice with 30% sugar?", vi: "Cho mình sữa yến mạch nhé. Và cho mình ít đá 30% đường thôi nhé?" },
      { speaker: "A", name: "Barista A", en: "Got it! Less ice, oat milk, 30% sugar. Is that for here or to go?", vi: "Đã rõ! Ít đá, sữa yến mạch, 30% đường. Bạn uống ở đây hay mang đi ạ?" },
      { speaker: "B", name: "You (Customer)", en: "To go, please. Thanks!", vi: "Mang đi giúp mình nhé. Cảm ơn bạn!" }
    ],
    patterns: [
      { en: "Can I get an [Item], please?", vi: "Cho mình gọi [Món đồ], được không?" },
      { en: "Can I get less ice with [X]% sugar?", vi: "Cho mình ít đá và [X]% đường được không?" },
      { en: "Is that for here or to go?", vi: "Dùng tại đây hay mang đi ạ?" },
      { en: "To go, please.", vi: "Mang đi nhé." }
    ],
    quizzes: [
      {
        prompt: "Khi bồi bàn hỏi 'Is that for here or to go?', bạn muốn mua mang về thì trả lời:",
        sentence: "B: _______, please.",
        options: ["To go", "For take", "Out of here", "Bring away"],
        correct: 0
      }
    ]
  },
  {
    id: 5,
    title: "5. Remote Work Interview - Phỏng Vấn AI Creator",
    subtitle: "Phỏng vấn Remote Work vị trí Sáng tạo nội dung / AI",
    topic: "Phỏng vấn & Công nghệ",
    level: "B1 Destinations",
    description: "Phản xạ phỏng vấn xin việc làm từ xa (Remote Work) ứng dụng AI hiện đại.",
    dialogue: [
      { speaker: "A", name: "Interviewer", en: "Welcome to the interview! Why do you want to work remotely as our Lead Content Creator?", vi: "Chào mừng bạn đến buổi phỏng vấn! Tại sao bạn muốn làm việc từ xa ở vị trí Trưởng nhóm Sáng tạo nội dung của chúng tôi?" },
      { speaker: "B", name: "You (Candidate)", en: "I thrive in flexible environments. I've been managing remote teams and building viral video campaigns for two years.", vi: "Tôi phát huy tốt nhất trong môi trường linh hoạt. Tôi đã quản lý đội ngũ từ xa và xây dựng các chiến dịch video lên xu hướng trong 2 năm qua." },
      { speaker: "A", name: "Interviewer", en: "That's impressive! How do you utilize AI tools in your daily workflow?", vi: "Ấn tượng đấy! Bạn ứng dụng các công cụ AI thế nào trong công việc hàng ngày?" },
      { speaker: "B", name: "You (Candidate)", en: "I use AI to streamline research and draft creative hooks, which speeds up our production time by 50%.", vi: "Tôi dùng AI để tối ưu hóa việc nghiên cứu và viết tiêu đề thu hút, giúp tăng tốc độ sản xuất lên 50%." },
      { speaker: "A", name: "Interviewer", en: "Sounds great! When can you start?", vi: "Nghe tuyệt lắm! Khi nào bạn có thể bắt đầu làm việc?" },
      { speaker: "B", name: "You (Candidate)", en: "I can start immediately!", vi: "Tôi có thể bắt đầu ngay lập tức ạ!" }
    ],
    patterns: [
      { en: "I thrive in [environment].", vi: "Tôi phát triển/phát huy tốt nhất trong [môi trường]." },
      { en: "I've been building [projects] for [time].", vi: "Tôi đã và đang làm [dự án] được [thời gian]." },
      { en: "I use [tool] to streamline [process].", vi: "Tôi dùng [công cụ] để tinh gọn [quy trình]." }
    ],
    quizzes: [
      {
        prompt: "Diễn tả 'Tôi dùng AI để tinh gọn quy trình':",
        sentence: "I use AI to _______ research.",
        options: ["streamline", "make hard", "slow down", "cut off"],
        correct: 0
      }
    ]
  },
  {
    id: 6,
    title: "6. Digital Nomad & Workation - Check-in Bali",
    subtitle: "Thủ tục nhập cảnh cho chuyến đi Workation 2 tuần",
    topic: "Du lịch quốc tế & Digital Nomad",
    level: "B1 Destinations",
    description: "Thực hành phản xạ trả lời hải quan về phong cách sống Digital Nomad (Vừa đi du lịch vừa làm việc).",
    dialogue: [
      { speaker: "A", name: "Immigration Officer", en: "Good afternoon. What is the purpose of your visit to Bali?", vi: "Chào buổi chiều. Mục đích chuyến đi của bạn tới Bali là gì?" },
      { speaker: "B", name: "You (Nomad)", en: "I'm here on a two-week workation, combining remote work with vacation.", vi: "Tôi đến đây cho chuyến Workation 2 tuần, kết hợp làm việc từ xa và nghỉ dưỡng." },
      { speaker: "A", name: "Immigration Officer", en: "Where will you be staying during your visit?", vi: "Bạn sẽ lưu trú ở đâu trong thời gian này?" },
      { speaker: "B", name: "You (Nomad)", en: "I've booked a co-living space in Canggu.", vi: "Tôi đã đặt chỗ tại một không gian Co-living ở Canggu." },
      { speaker: "A", name: "Immigration Officer", en: "Great! Enjoy your stay and productivity!", vi: "Tuyệt vời! Chúc bạn có một chuyến đi vui vẻ và làm việc năng suất!" },
      { speaker: "B", name: "You (Nomad)", en: "Thank you very much!", vi: "Cảm ơn bạn rất nhiều!" }
    ],
    patterns: [
      { en: "What is the purpose of your visit?", vi: "Mục đích chuyến đi của bạn là gì?" },
      { en: "I'm here on a [duration] workation.", vi: "Tôi ở đây đi [thời gian] làm việc kết hợp nghỉ dưỡng." },
      { en: "I've booked a [type of accommodation].", vi: "Tôi đã đặt chỗ tại [loại hình lưu trú]." }
    ],
    quizzes: [
      {
        prompt: "Từ chỉ chuyến đi vừa du lịch vừa làm việc từ xa:",
        sentence: "I'm here on a two-week _______.",
        options: ["workation", "working hard", "office job", "flight stay"],
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
    updateRoleplayDeck(0);
  } else if (state.currentMode === 'quiz') {
    el.roleplayDeck.classList.add('hidden');
    el.quizDeck.classList.remove('hidden');
    el.chatStream.classList.add('hidden');
    renderQuiz();
  }
}

function attachEventListeners() {
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.onclick = () => {
      state.currentMode = tab.dataset.mode;
      updateModeView();
    };
  });

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

  el.btnPlayAll.onclick = () => playAllDialogue(0);
  el.btnStopPlay.onclick = () => stopSpeech();

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

  el.btnSkipTurn.onclick = () => advanceRoleplayTurn();
  el.btnListenSample.onclick = () => {
    const line = STREAMLINE_LESSONS[state.currentLessonIdx].dialogue[state.activeSpeechBubbleIdx];
    if (line) speakText(line.en);
  };

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

document.addEventListener('DOMContentLoaded', init);
