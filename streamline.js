/* ==========================================================================
   STREAMLAI 2.0 - CLASSIC SE NOSTALGIC EDITION (1-TO-1 WITH STREAMLINE ENGLISH)
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. LESSON DATA (Streamline English Classic 1-to-1 Nostalgic Curriculum)
// --------------------------------------------------------------------------
const STREAMLINE_LESSONS = [
  {
    id: 1,
    title: "1. Everyday Excuses - Nhặt Túi Xách Rơi",
    subtitle: "Bài 1 SE: Excuse me. Is this your handbag?",
    topic: "Giao tiếp căn bản SE",
    level: "A1 Departures",
    description: "Bài học kinh điển nhất của Streamline English. Luyện phản xạ lịch sự khi vô tình nhặt đồ rơi trên phố.",
    dialogue: [
      { speaker: "A", name: "Stranger A", en: "Excuse me.", vi: "Xin lỗi quý khách." },
      { speaker: "B", name: "You (Person B)", en: "Yes?", vi: "Vâng? Có chuyện gì thế ạ?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là chiếc túi xách của bạn không?" },
      { speaker: "B", name: "You (Person B)", en: "Pardon?", vi: "Dạ? Bạn nói sao cơ?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là chiếc túi xách của bạn không?" },
      { speaker: "B", name: "You (Person B)", en: "Oh, yes it is! Thank you very much.", vi: "Ô đúng rồi! Cảm ơn bạn rất nhiều." },
      { speaker: "A", name: "Stranger A", en: "You're welcome.", vi: "Không có chi." }
    ],
    patterns: [
      { en: "Excuse me.", vi: "Xin lỗi (gây chú ý lịch sự)" },
      { en: "Is this your [handbag / watch]?", vi: "Đây có phải là [túi xách / đồng hồ] của bạn không?" },
      { en: "Pardon?", vi: "Dạ? (Dùng khi nghe không rõ và muốn nhắc lại)" },
      { en: "You're welcome.", vi: "Không có gì (Đáp lại lời cảm ơn)" }
    ],
    quizzes: [
      {
        prompt: "Khi nghe không rõ và muốn nhờ người khác nhắc lại lịch sự:",
        sentence: "B: _______?",
        options: ["Pardon", "Sorry you", "What", "Repeat now"],
        correct: 0
      },
      {
        prompt: "Phản xạ đáp lại câu 'Thank you very much':",
        sentence: "A: _______.",
        options: ["You're welcome", "Nothing", "Yes it is", "No thanks"],
        correct: 0
      }
    ]
  },
  {
    id: 2,
    title: "2. Personal Identification - Tên Tuổi & Quốc Tịch",
    subtitle: "Bài 2 SE: What's your name? Where are you from?",
    topic: "Giới thiệu bản thân",
    level: "A1 Departures",
    description: "Hỏi đáp tên tuổi, quê quán và quốc tịch chuẩn phong cách Streamline English.",
    dialogue: [
      { speaker: "A", name: "Customs Officer", en: "What's your name, please?", vi: "Xin hỏi tên của bạn là gì ạ?" },
      { speaker: "B", name: "Arthur Clark", en: "My name's Arthur Clark.", vi: "Tên tôi là Arthur Clark." },
      { speaker: "A", name: "Customs Officer", en: "Where are you from?", vi: "Bạn từ đâu đến?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm from London.", vi: "Tôi đến từ London." },
      { speaker: "A", name: "Customs Officer", en: "What's your nationality?", vi: "Quốc tịch của bạn là gì?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm British.", vi: "Tôi là người Anh." }
    ],
    patterns: [
      { en: "What's your name, please?", vi: "Xin hỏi tên của bạn là gì?" },
      { en: "Where are you from?", vi: "Bạn đến từ đâu?" },
      { en: "I'm from [city / country].", vi: "Tôi đến từ [thành phố / quốc gia]." }
    ],
    quizzes: [
      {
        prompt: "Hỏi quốc tịch của một người:",
        sentence: "What's your _______?",
        options: ["nationality", "national", "nation", "native"],
        correct: 0
      }
    ]
  },
  {
    id: 3,
    title: "3. Asking for Directions - Hỏi Đường Bưu Điện",
    subtitle: "Bài 3 SE: Is there a post office near here?",
    topic: "Hỏi đường kinh điển",
    level: "A1 Departures",
    description: "Bài học hỏi vị trí bưu điện, ngân hàng, siêu thị kinh điển của Streamline Departures.",
    dialogue: [
      { speaker: "A", name: "Tourist A", en: "Excuse me. Is there a post office near here?", vi: "Xin lỗi. Có bưu điện nào ở gần đây không?" },
      { speaker: "B", name: "You (Local)", en: "Yes, there's one in Main Street.", vi: "Có, có một bưu điện ở đường Main Street." },
      { speaker: "A", name: "Tourist A", en: "Where in Main Street?", vi: "Ở đoạn nào trên đường Main Street ạ?" },
      { speaker: "B", name: "You (Local)", en: "It's next to the bank, opposite the supermarket.", vi: "Nó nằm kế bên ngân hàng, đối diện siêu thị." },
      { speaker: "A", name: "Tourist A", en: "Is it far from here?", vi: "Nó có xa đây lắm không?" },
      { speaker: "B", name: "You (Local)", en: "No, it isn't. It's only a five-minute walk.", vi: "Không xa đâu. Chỉ mất 5 phút đi bộ thôi." },
      { speaker: "A", name: "Tourist A", en: "Thank you very much.", vi: "Cảm ơn bạn rất nhiều." }
    ],
    patterns: [
      { en: "Is there a [place] near here?", vi: "Có [nơi chốn] nào gần đây không?" },
      { en: "It's next to [A], opposite [B].", vi: "Nó kế bên [A], đối diện [B]." },
      { en: "It's a five-minute walk.", vi: "Chỉ mất 5 phút đi bộ." }
    ],
    quizzes: [
      {
        prompt: "Mô tả 'kế bên ngân hàng, đối diện siêu thị':",
        sentence: "It's _______ to the bank, _______ the supermarket.",
        options: ["next / opposite", "near / in", "by / behind", "front / back"],
        correct: 0
      }
    ]
  },
  {
    id: 4,
    title: "4. At a Hotel - Đặt Phòng Khách Sạn",
    subtitle: "Bài 4 SE: I'd like a single room for two nights",
    topic: "Khách sạn & Du lịch",
    level: "A1 Departures",
    description: "Thủ tục đặt phòng đơn/phòng đôi tại lễ tân khách sạn phong cách SE.",
    dialogue: [
      { speaker: "A", name: "Receptionist", en: "Good evening, sir. Can I help you?", vi: "Chào buổi tối quý khách. Tôi có thể giúp gì cho ông ạ?" },
      { speaker: "B", name: "You (Guest)", en: "Yes, please. I'd like a single room for two nights.", vi: "Vâng. Cho tôi đặt một phòng đơn trong 2 đêm." },
      { speaker: "A", name: "Receptionist", en: "With a bathroom or a shower?", vi: "Quý khách muốn phòng có bồn tắm hay vòi hoa sen ạ?" },
      { speaker: "B", name: "You (Guest)", en: "With a bathroom, please.", vi: "Cho tôi phòng có bồn tắm nhé." },
      { speaker: "A", name: "Receptionist", en: "Room 304 on the third floor. Here's your key.", vi: "Phòng 304 ở tầng 3. Chìa khóa của ông đây ạ." }
    ],
    patterns: [
      { en: "I'd like a [single/double] room for [X] nights.", vi: "Tôi muốn đặt phòng [đơn/đôi] trong [X] đêm." },
      { en: "Here's your key.", vi: "Chìa khóa của ông đây ạ." }
    ],
    quizzes: [
      {
        prompt: "Đặt phòng đơn tại lễ tân:",
        sentence: "I'd like a _______ room, please.",
        options: ["single", "one", "alone", "solo"],
        correct: 0
      }
    ]
  },
  {
    id: 5,
    title: "5. Telephoning - Điện Thoại Bàn 73048",
    subtitle: "Bài 5 SE: Hello, 73048. Could I speak to Mr. Clark?",
    topic: "Điện thoại bàn hoài niệm",
    level: "A1 Departures",
    description: "Cuộc gọi điện thoại bàn kinh điển thập niên 80-90 với số máy lẻ 73048.",
    dialogue: [
      { speaker: "A", name: "Operator", en: "Hello. 73048.", vi: "Alô. Số 73048 xin nghe." },
      { speaker: "B", name: "You (Caller)", en: "Hello. Could I speak to Mr. Clark, please?", vi: "Xin chào. Cho tôi nói chuyện với ông Clark được không ạ?" },
      { speaker: "A", name: "Operator", en: "Who's calling, please?", vi: "Xin hỏi ai đang gọi đấy ạ?" },
      { speaker: "B", name: "You (Caller)", en: "My name is Peter Jackson.", vi: "Tên tôi là Peter Jackson." },
      { speaker: "A", name: "Operator", en: "Hold on a moment, please. I'll put you through.", vi: "Xin vui lòng giữ máy một chút. Tôi sẽ nối máy cho ông." }
    ],
    patterns: [
      { en: "Could I speak to [Name], please?", vi: "Cho tôi xin nói chuyện với [Tên] được không?" },
      { en: "Who's calling, please?", vi: "Xin hỏi ai đang gọi đấy ạ?" },
      { en: "Hold on a moment, please.", vi: "Xin vui lòng giữ máy một chút." }
    ],
    quizzes: [
      {
        prompt: "Khi tổng đài viên xin người gọi giữ máy để nối cuộc gọi:",
        sentence: "_______ on a moment, please.",
        options: ["Hold", "Keep", "Wait", "Stay"],
        correct: 0
      }
    ]
  },
  {
    id: 6,
    title: "6. Shopping & Prices - Mua Sắm Áo Len",
    subtitle: "Bài 6 SE: How much is this sweater, please?",
    topic: "Mua sắm & Hỏi giá",
    level: "A1 Departures",
    description: "Hỏi giá tiền và phòng thử đồ tại cửa hàng quần áo truyền thống.",
    dialogue: [
      { speaker: "A", name: "Shop Assistant", en: "Good morning. Can I help you?", vi: "Chào buổi sáng. Tôi có thể giúp gì cho quý khách?" },
      { speaker: "B", name: "You (Customer)", en: "Yes, how much is this sweater, please?", vi: "Vâng, cái áo len này giá bao nhiêu tiền vậy ạ?" },
      { speaker: "A", name: "Shop Assistant", en: "It's twenty-five pounds.", vi: "Nó có giá 25 bảng Anh." },
      { speaker: "B", name: "You (Customer)", en: "Can I try it on?", vi: "Tôi có thể mặc thử nó được không?" },
      { speaker: "A", name: "Shop Assistant", en: "Yes, of course. The changing room is over there.", vi: "Dạ được chứ. Phòng thay đồ ở đằng kia ạ." }
    ],
    patterns: [
      { en: "How much is this [item]?", vi: "[Món đồ] này giá bao nhiêu?" },
      { en: "Can I try it on?", vi: "Tôi có thể mặc thử nó được không?" },
      { en: "The changing room is over there.", vi: "Phòng thay đồ ở đằng kia." }
    ],
    quizzes: [
      {
        prompt: "Xin phép thử đồ tại cửa hàng:",
        sentence: "Can I _______ it on?",
        options: ["try", "wear", "put", "dress"],
        correct: 0
      }
    ]
  },
  {
    id: 7,
    title: "7. At a Restaurant - Gọi Món Bít Tết",
    subtitle: "Bài 7 SE: Rare, medium, or well-done?",
    topic: "Nhà hàng & Ẩm thực",
    level: "A2 Connections",
    description: "Bài gọi bít tết bò kinh điển với bồi bàn trong Streamline Connections.",
    dialogue: [
      { speaker: "A", name: "Waiter", en: "Good evening. Are you ready to order, sir?", vi: "Chào buổi tối. Quý khách đã sẵn sàng gọi món chưa ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Yes. I'd like the roast beef, please.", vi: "Vâng. Cho tôi một phần bò nướng bít tết nhé." },
      { speaker: "A", name: "Waiter", en: "How would you like your beef cooked? Rare, medium, or well-done?", vi: "Quý khách muốn bò chín ở mức nào? Tái, vừa hay chín kỹ ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Medium, please.", vi: "Cho tôi chín vừa (medium) nhé." },
      { speaker: "A", name: "Waiter", en: "And what would you like to drink?", vi: "Và quý khách muốn dùng nước uống gì ạ?" },
      { speaker: "B", name: "You (Customer)", en: "A glass of red wine, please.", vi: "Cho tôi một ly rượu vang đỏ, cảm ơn." }
    ],
    patterns: [
      { en: "Are you ready to order?", vi: "Bạn đã sẵn sàng gọi món chưa?" },
      { en: "Rare, medium, or well-done?", vi: "Tái, vừa hay chín kỹ?" }
    ],
    quizzes: [
      {
        prompt: "Yêu cầu bít tết bò ở mức chín vừa:",
        sentence: "B: _______, please.",
        options: ["Medium", "Middle", "Center", "Half"],
        correct: 0
      }
    ]
  },
  {
    id: 8,
    title: "8. Making Plans - Rủ Đi Xem Phim James Bond",
    subtitle: "Bài 8 SE: Bob & Connie rủ đi rạp Odeon",
    topic: "Hẹn hò Bob & Connie",
    level: "A2 Connections",
    description: "Đoạn thoại huyền thoại giữa Bob và Connie rủ đi xem phim James Bond tại rạp Odeon.",
    dialogue: [
      { speaker: "A", name: "Bob", en: "Hello, Connie. Are you free tonight?", vi: "Chào Connie. Tối nay em có rảnh không?" },
      { speaker: "B", name: "You (Connie)", en: "Yes, I am. Why?", vi: "Dạ có. Có chuyện gì thế anh?" },
      { speaker: "A", name: "Bob", en: "Would you like to go to the cinema?", vi: "Em có muốn đi xem phim rạp không?" },
      { speaker: "B", name: "You (Connie)", en: "That sounds nice. What's on?", vi: "Nghe hay đấy. Chiếu phim gì thế anh?" },
      { speaker: "A", name: "Bob", en: "There's a new James Bond film at the Odeon.", vi: "Có phim James Bond mới chiếu ở rạp Odeon." },
      { speaker: "B", name: "You (Connie)", en: "Great! What time does it start?", vi: "Tuyệt quá! Mấy giờ phim bắt đầu vậy?" },
      { speaker: "A", name: "Bob", en: "At seven thirty. Let's meet outside at seven.", vi: "Lúc 7:30. Chúng mình gặp nhau trước rạp lúc 7:00 nhé." }
    ],
    patterns: [
      { en: "Are you free tonight?", vi: "Tối nay em/bạn có rảnh không?" },
      { en: "Would you like to go to the cinema?", vi: "Em/bạn có muốn đi xem phim không?" },
      { en: "What's on?", vi: "Đang chiếu phim gì thế?" },
      { en: "Let's meet outside at [time].", vi: "Chúng mình gặp nhau bên ngoài lúc [giờ] nhé." }
    ],
    quizzes: [
      {
        prompt: "Hỏi xem rạp chiếu phim đang có phim gì chiếu:",
        sentence: "B: That sounds nice. _______?",
        options: ["What's on", "What's up", "What's film", "What's go"],
        correct: 0
      }
    ]
  },
  {
    id: 9,
    title: "9. The Job Interview - Phỏng Vấn Xin Việc SE",
    subtitle: "Bài 9 SE: Why do you want to leave your present job?",
    topic: "Phỏng vấn xin việc kinh điển",
    level: "B1 Destinations",
    description: "Bài phỏng vấn công sở hỏi lý do nhảy việc và bằng cấp trong Streamline Destinations.",
    dialogue: [
      { speaker: "A", name: "Interviewer", en: "Why do you want to leave your present job?", vi: "Tại sao ông muốn nghỉ công việc hiện tại?" },
      { speaker: "B", name: "You (Candidate)", en: "Well, I've been with the same company for five years, and I'd like a change.", vi: "Chà, tôi đã làm ở cùng một công ty 5 năm rồi, và tôi muốn có sự thay đổi." },
      { speaker: "A", name: "Interviewer", en: "What are your qualifications?", vi: "Bằng cấp chuyên môn của ông là gì?" },
      { speaker: "B", name: "You (Candidate)", en: "I have a degree in Economics and I speak fluent French and German.", vi: "Tôi có bằng Cử nhân Kinh tế và tôi nói trôi chảy tiếng Pháp và tiếng Đức." }
    ],
    patterns: [
      { en: "Why do you want to leave your present job?", vi: "Tại sao bạn muốn rời công việc hiện tại?" },
      { en: "I have a degree in [Subject].", vi: "Tôi có bằng cấp về ngành [Môn học]." }
    ],
    quizzes: [
      {
        prompt: "Trình bày lý do muốn thay đổi công việc:",
        sentence: "I'd like a _______.",
        options: ["change", "turn", "move", "switch"],
        correct: 0
      }
    ]
  },
  {
    id: 10,
    title: "10. Airport Customs - Hải Quan Sân Bay SE",
    subtitle: "Bài 10 SE: May I see your passport, please?",
    topic: "Hải quan & Nhập cảnh",
    level: "B1 Destinations",
    description: "Thủ tục xuất nhập cảnh kiểm tra hộ chiếu và hành lý tại sân bay quốc tế.",
    dialogue: [
      { speaker: "A", name: "Customs Officer", en: "May I see your passport, please?", vi: "Cho tôi xem hộ chiếu của ông được không ạ?" },
      { speaker: "B", name: "You (Passenger)", en: "Here you are.", vi: "Dạ hộ chiếu đây ạ." },
      { speaker: "A", name: "Customs Officer", en: "What is the purpose of your visit?", vi: "Mục đích chuyến đi của ông là gì?" },
      { speaker: "B", name: "You (Passenger)", en: "I'm here on business for one week.", vi: "Tôi đến đây đi công tác trong một tuần." },
      { speaker: "A", name: "Customs Officer", en: "Do you have anything to declare?", vi: "Ông có đồ đạc gì cần khai báo hải quan không?" },
      { speaker: "B", name: "You (Passenger)", en: "Nothing, just my personal belongings.", vi: "Không có gì cả, chỉ là đồ dùng cá nhân của tôi thôi." }
    ],
    patterns: [
      { en: "Here you are.", vi: "Dạ đây ạ." },
      { en: "Do you have anything to declare?", vi: "Ông có gì cần khai báo hải quan không?" }
    ],
    quizzes: [
      {
        prompt: "Khi đưa giấy tờ/hộ chiếu cho nhân viên hải quan:",
        sentence: "B: _______ you are.",
        options: ["Here", "There", "This", "Take"],
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
  currentMode: 'listen',
  userRole: 'B',
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

let recognition = null;

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
      if (v.name.includes('Google') || v.name.includes('Natural') || v.lang === 'en-GB' || v.lang === 'en-US') {
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
