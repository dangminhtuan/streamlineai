import { DEPARTURES_LESSONS } from './departures_data.js';
import { CONNECTIONS_LESSONS } from './connections_data.js';
import { DESTINATIONS_LESSONS } from './destinations_data.js';
import { DIRECTIONS_LESSONS } from './directions_data.js';

let activeBook = 'DEPARTURES';
let STREAMLINE_LESSONS = DEPARTURES_LESSONS;

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------
// SINO-VIETNAMESE (HÁN VIỆT) TRANSLITERATION DICTIONARY FOR STREAMLAI
// --------------------------------------------------------------------------
const SINO_VIETNAMESE_MAP = {
  "Excuse me.": "Đả nhiễu nhất hạ.",
  "Yes?": "Thập ma sự?",
  "Is this your handbag?": "Giá thị nẫm đích thủ đề bao ma?",
  "Pardon?": "Thập ma?",
  "Oh, yes it is! Thank you very much.": "A, thị đích! Phi thường cảm tạ nẫm.",
  "You're welcome.": "Bất khách khí.",
  "What's your name, please?": "Thỉnh vấn nẫm khiếu thập ma danh tự?",
  "My name's Arthur Clark.": "Ngã đích danh tự khiếu A-sắt Khắc-lập-khắc.",
  "Where are you from?": "Nẫm lai tự na lý?",
  "I'm from London.": "Ngã lai tự Luân Đôn.",
  "What's your nationality?": "Nẫm đích quốc tịch thị thập ma?",
  "I'm British.": "Ngã thị Anh quốc nhân.",
  "Excuse me. Is there a post office near here?": "Đả nhiễu nhất hạ. Giá phụ cận hữu bưu cục ma?",
  "Yes, there's one in Main Street.": "Hữu đích, tại Chủ nhai hữu nhất gia.",
  "Where in Main Street?": "Tại Chủ nhai đích thập ma vị trí?",
  "It's next to the bank, opposite the supermarket.": "Tựu tại Ngân hàng bàng biên, Siêu thị đối diện.",
  "Is it far from here?": "Ly giá lý viễn ma?",
  "No, it isn't. It's only a five-minute walk.": "Bất viễn, tẩu lộ chỉ yếu ngũ phân chung.",
  "Thank you very much.": "Phi thường cảm tạ nẫm.",
  "Good evening, sir. Can I help you?": "Vãn thượng hảo, tiên sinh. Hữu thập ma khả dĩ bang nẫm?",
  "Yes, please. I'd like a single room for two nights.": "Thị đích, ngã tưởng đính gian đơn nhân phòng trú lưỡng vãn.",
  "With a bathroom or a shower?": "Yếu đái dục thất hoàn thị lâm dục gian đích?",
  "With a bathroom, please.": "Thỉnh cấp ngã đái dục thất đích phòng gian.",
  "Room 304 on the third floor. Here's your key.": "Tam lâu 304 phòng. Giá thị nẫm đích thược khóa.",
  "Hello. 73048.": "Nẫm hảo. 73048 vi nẫm phục vụ.",
  "Hello. Could I speak to Mr. Clark, please?": "Nẫm hảo, thỉnh vấn năng tiếp Khắc-lập-khắc tiên sinh ma?",
  "Who's calling, please?": "Thỉnh vấn nẫm thị na vị?",
  "My name is Peter Jackson.": "Ngã thị Bỉ-đắc Kiệt-khắc-tốn.",
  "Hold on a moment, please. I'll put you through.": "Thỉnh thỏai đẳng, ngã vi nẫm chuyển tiếp.",
  "Good morning. Can I help you?": "Tảo thượng hảo. Hữu thập ma nhu yếu bang mang đích ma?",
  "Yes, how much is this sweater, please?": "Hảo đích, thỉnh vấn giá kiện mao y đa thiểu tiền?",
  "It's twenty-five pounds.": "Nhị thập ngũ anh bảng.",
  "Can I try it on?": "Ngã khả dĩ thí xuyên nhất hạ ma?",
  "Yes, of course. The changing room is over there.": "Đương nhiên khả dĩ. Thí xuyên gian tại na biên.",
  "What time do you usually get up?": "Nhị bình thì kỷ điểm khởi sàng?",
  "I usually get up at six thirty in the morning.": "Ngã thông thường tảo thượng lục điểm bán khởi sàng.",
  "And when do you leave for work?": "Na nhị thập ma thì hậu khứ thượng ban?",
  "I leave home at seven forty-five.": "Ngã thất điểm tứ thập ngũ phân xuất môn.",
  "Is that your brother in the photograph?": "Chiếu phiến lý na thị nhị ca ca ma?",
  "No, that's my cousin, Tom.": "Bất thị, na thị ngã đích biểu ca Thang-mỗ.",
  "What does he do?": "Tha thị tạc thập ma công tác đích?",
  "He's an engineer.": "Tha thị nhất danh công trình sư.",
  "What does the suspect look like?": "Hiềm nghi nhân trường thập ma dạng?",
  "He's tall and thin, with short dark hair.": "Tha thân tài cao sấu, lưu trước thâm sắc đoản phát.",
  "How old is he?": "Tha đại khái đa đại niên kỷ?",
  "He's about thirty years old.": "Tha đại khái tam thập tuế tả hữu.",
  "What would you like to drink?": "Nẫm tưởng hát điểm thập ma?",
  "Coffee, please.": "Thỉnh cấp ngã nhất bôi gia phê.",
  "Black or white coffee?": "Hắc gia phê hoàn thị gia nãi gia phê?",
  "Black coffee with sugar, please.": "Hắc gia phê, thỉnh gia đường."
};

const SINO_VIETNAMESE_PATTERNS = {
  "Excuse me.": "Đả nhiễu nhất hạ.",
  "Is this your [handbag / watch]?": "Giá thị nẫm đích [thủ đề bao / thủ biểu] ma?",
  "Pardon?": "Thập ma?",
  "You're welcome.": "Bất khách khí.",
  "What's your name, please?": "Thỉnh vấn nẫm khiếu thập ma danh tự?",
  "Where are you from?": "Nẫm lai tự na lý?",
  "I'm from [city / country].": "Ngã lai tự [Thành thị / Quốc gia].",
  "Is there a [place] near here?": "Giá phụ cận hữu [Địa điểm] ma?",
  "It's next to [A], opposite [B].": "Tha tại [A] bàng biên, [B] đối diện.",
  "It's a five-minute walk.": "Tẩu lộ chỉ yếu 5 phân chung.",
  "I'd like a [single/double] room for [X] nights.": "Ngã tưởng đính [đơn nhân/đôi nhân] phòng trú [X] vãn.",
  "Here's your key.": "Giá thị nẫm đích thược khóa.",
  "Could I speak to [Name], please?": "Thỉnh vấn năng tiếp [Danh tự] ma?",
  "Who's calling, please?": "Thỉnh vấn nẫm thị na vị?",
  "Hold on a moment, please.": "Thỉnh thỏai đẳng nhất hội.",
  "How much is this [item]?": "Giá kiện [Vật phẩm] đa thiểu tiền?",
  "Can I try it on?": "Ngã khả dĩ thí xuyên nhất hạ ma?",
  "The changing room is over there.": "Thí xuyên gian tại na biên.",
  "What time do you usually [action]?": "Nhị bình thì kỷ điểm [Tạc mỗ sự]?",
  "I usually [action] at [time].": "Ngã thông thường tại [Thời gian] [Tạc mỗ sự].",
  "Is that your [relative]?": "Na thị nhị đích [Thân thuộc] ma?",
  "What does he/she do?": "Tha/Nữ tha thị tạc thập ma công tác đích?",
  "What does he/she look like?": "Tha/Nữ tha trường thập ma dạng?",
  "He's [tall/short] with [hair type].": "Tha [cao/đoản], lưu trước [phát hình].",
  "Black or white coffee?": "Hắc gia phê hoàn thị gia nãi gia phê?"
};

const TRANSLATIONS = {
  vi: {
    selectLessonHeader: "📚 Chọn Bài Học (1 - 80)",
    mode1: "🎧 1. Nghe & Thấu Hiểu",
    mode2: "🎙️ 2. Đóng Vai Phản Xạ",
    mode3: "⚡ 3. Trắc Nghiệm Phản Xạ",
    roleLabel: "Bạn sắm vai:",
    roleB: "Nhân vật B (Khuyên dùng)",
    roleA: "Nhân vật A",
    roleBoth: "Người Nghe (Cả A & B)",
    btnPlayAll: "Phát Toàn Bộ",
    btnStopPlay: "Dừng lại",
    micHint: "Bấm vào Micro và đọc to câu thoại tiếng Anh ở trên",
    feedbackLabel: "Hệ thống ghi nhận:",
    btnSkip: "Bỏ qua lượt này ⏭️",
    btnListen: "🔊 Nghe câu mẫu",
    btnPrev: "◀ Bài Trước",
    btnNext: "Bài Tiếp ▶",
    patternHeader: "💡 Mẫu Câu & Cấu Trúc Phản Xạ Quan Trọng",
    grammarHeader: "📝 Phân Tích Ngữ Pháp & Cấu Trúc Ngôn Ngữ",
    streakUnit: "ngày",
    pointsUnit: "điểm",
    turnPrompt: "👉 Đến lượt bạn đọc câu thoại của <b>Nhân vật ",
    turnPromptSuffix: "</b>!",
    accuracyLabel: "Độ chính xác: ",
    settingsTitle: "⚙️ Cấu Hình Giọng Đọc AI",
    voiceLabel: "Giọng đọc tiếng Anh:",
    speedLabel: "Tốc độ đọc:",
    autoAdvanceLabel: "Tự động chuyển câu khi kết thúc lượt đọc",
    toastLang: "🌐 Đã chuyển giao diện sang Tiếng Việt",
    toastBookLoaded: "📚 Đã nạp tập sách ",
    toastFirstLesson: "ℹ️ Đây là bài đầu tiên trong tập sách!",
    toastLastLesson: "🎉 Đã đến bài cuối cùng của tập sách!",
    toastRoleplayFinished: "🏆 Bạn đã hoàn thành xuất sắc lượt đóng vai hội thoại!",
    toastQuizFinished: "🎉 Đã hoàn thành phần trắc nghiệm bài học này!"
  },
  hv: {
    selectLessonHeader: "📚 Tuyển Khóa Học (1 - 80)",
    mode1: "🎧 1. Thính & Lý Giải",
    mode2: "🎙️ 2. Đóng Vai Phản Xạ",
    mode3: "⚡ 3. Phản Xạ Trắc Nghiệm",
    roleLabel: "Nhân vật phản xạ:",
    roleB: "Nhân vật B (Khuyên nghị)",
    roleA: "Nhân vật A",
    roleBoth: "Bàng quan giả (A & B)",
    btnPlayAll: "Phát Toàn Bộ",
    btnStopPlay: "Đình chỉ",
    micHint: "Điểm kích Vi phó và độc đại câu thoại Anh ngữ thượng phương",
    feedbackLabel: "Hệ thống ký lục:",
    btnSkip: "Bỏ qua lượt ⏭️",
    btnListen: "🔊 Thính thí dụ",
    btnPrev: "◀ Tiền Khóa",
    btnNext: "Hậu Khóa ▶",
    patternHeader: "💡 Hạch Tâm Cú Hình & Cú Pháp Kết Cấu",
    grammarHeader: "📝 Ngữ Pháp & Ngôn Ngữ Kết Cấu Phân Tích",
    streakUnit: "nhật",
    pointsUnit: "điểm",
    turnPrompt: "👉 Luân đáo nhị độc <b>Nhân vật ",
    turnPromptSuffix: "</b> đích đài từ!",
    accuracyLabel: "Chính xác suất: ",
    settingsTitle: "⚙️ AI Lãng Độc Ngữ Âm Phối Trí",
    voiceLabel: "Anh ngữ phát âm:",
    speedLabel: "Lãng độc tốc độ:",
    autoAdvanceLabel: "Tự động chuyển câu hậu lãng độc",
    toastLang: "🌐 Đã chuyển giao diện sang Hán Việt (Sino-Vietnamese)",
    toastBookLoaded: "📚 Đã nạp giáo tài ",
    toastFirstLesson: "ℹ️ Giá thị đệ nhất khóa!",
    toastLastLesson: "🎉 Đã đáo tối hậu nhất khóa!",
    toastRoleplayFinished: "🏆 Hoàn thành đối luyện phản xạ!",
    toastQuizFinished: "🎉 Hoàn thành phản xạ trắc nghiệm!"
  },
  zh: {
    selectLessonHeader: "📚 选择课程 (1 - 80)",
    mode1: "🎧 1. 听力与理解",
    mode2: "🎙️ 2. 角色扮演竞技场",
    mode3: "⚡ 3. 反应测验",
    roleLabel: "你的角色:",
    roleB: "角色 B (推荐)",
    roleA: "角色 A",
    roleBoth: "旁观者 (A 与 B)",
    btnPlayAll: "播放全部",
    btnStopPlay: "停止",
    micHint: "点击麦克风，大声朗读上面的英语句子",
    feedbackLabel: "系统识别:",
    btnSkip: "跳过此轮 ⏭️",
    btnListen: "🔊 试听例句",
    btnPrev: "◀ 上一课",
    btnNext: "下一课 ▶",
    patternHeader: "💡 核心句型与句法结构",
    grammarHeader: "📝 语法与语言结构分析",
    streakUnit: "天",
    pointsUnit: "分",
    turnPrompt: "👉 轮到您朗读 <b>角色 ",
    turnPromptSuffix: "</b> 的台词！",
    accuracyLabel: "准确率: ",
    settingsTitle: "⚙️ AI 朗读语音配置",
    voiceLabel: "英语朗读发音:",
    speedLabel: "朗读速度:",
    autoAdvanceLabel: "朗读完成后自动切下一句",
    toastLang: "🌐 界面已切换为中文",
    toastBookLoaded: "📚 已加载教材 ",
    toastFirstLesson: "ℹ️ 这是本教材的第一课！",
    toastLastLesson: "🎉 已到达本教材的最后一课！",
    toastRoleplayFinished: "🏆 太棒了！您已完成角色扮演对练！",
    toastQuizFinished: "🎉 已完成本课的反应测验！"
  },
  ko: {
    selectLessonHeader: "📚 레슨 선택 (1 - 80)",
    mode1: "🎧 1. 듣기 및 이해",
    mode2: "🎙️ 2. 역할 놀이 아레나",
    mode3: "⚡ 3. 반사 퀴즈",
    roleLabel: "당신의 역할:",
    roleB: "역할 B (추천)",
    roleA: "역할 A",
    roleBoth: "관람객 (A & B)",
    btnPlayAll: "전체 재생",
    btnStopPlay: "정지",
    micHint: "마이크를 클릭하고 위의 영어 문장을 큰 소리로 읽으세요",
    feedbackLabel: "시스템 인식 결과:",
    btnSkip: "이번 턴 건너뛰기 ⏭️",
    btnListen: "🔊 샘플 듣기",
    btnPrev: "◀ 이전 레슨",
    btnNext: "다음 레슨 ▶",
    patternHeader: "💡 핵심 반사 문형 및 구조",
    grammarHeader: "📝 문법 및 언어 분석",
    streakUnit: "일",
    pointsUnit: "점",
    turnPrompt: "👉 <b>역할 ",
    turnPromptSuffix: "</b>의 대사를 읽을 차례입니다!",
    accuracyLabel: "정확도: ",
    settingsTitle: "⚙️ AI 음성 설정",
    voiceLabel: "영어 음성 선택:",
    speedLabel: "재생 속도:",
    autoAdvanceLabel: "음성 완료 후 다음 문장 자동 이동",
    toastLang: "🌐 인터페이스 언어가 한국어로 변경되었습니다",
    toastBookLoaded: "📚 교재가 로드되었습니다: ",
    toastFirstLesson: "ℹ️ 이 교재의 첫 번째 레슨입니다!",
    toastLastLesson: "🎉 이 교재의 마지막 레슨입니다!",
    toastRoleplayFinished: "🏆 수고하셨습니다! 역할 놀이 세션을 완료하셨습니다!",
    toastQuizFinished: "🎉 이 레슨의 반사 퀴즈를 완료하셨습니다!"
  }
};

function updateUILanguage(langCode) {
  state.currentLang = langCode;
  const select = document.getElementById('langSelect');
  if (select) select.value = langCode;

  const dict = TRANSLATIONS[langCode] || TRANSLATIONS['vi'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      if (el.children.length > 0 && el.querySelector('.tab-text, .btn-text')) {
        const textNode = el.querySelector('.tab-text, .btn-text');
        if (textNode) textNode.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  renderHeaderStats();
  if (typeof loadLesson === 'function') {
    loadLesson(state.currentLessonIdx);
  }
  showToast(dict.toastLang);
}

// --------------------------------------------------------------------------
// 2. STATE MANAGEMENT & DOM REFERENCES
// --------------------------------------------------------------------------
let state = {
  currentLessonIdx: 0,
  currentMode: 'listen',
  currentLang: 'vi',
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
  masteredWords: JSON.parse(localStorage.getItem('streaml_mastered_words') || '[]'),
  currentQuizIdx: 0,
  curriculumMasteryPct: 0
};

let recognition = null;
let vocabIndex = {
  totalTokens: 0,
  wordMap: {}
};

function build320VocabularyIndex() {
  const allLessons = [
    ...(typeof DEPARTURES_LESSONS !== 'undefined' ? DEPARTURES_LESSONS : []),
    ...(typeof CONNECTIONS_LESSONS !== 'undefined' ? CONNECTIONS_LESSONS : []),
    ...(typeof DESTINATIONS_LESSONS !== 'undefined' ? DESTINATIONS_LESSONS : []),
    ...(typeof DIRECTIONS_LESSONS !== 'undefined' ? DIRECTIONS_LESSONS : [])
  ];

  let totalTokens = 0;
  let map = {};

  allLessons.forEach((lesson, lIdx) => {
    let textChunk = '';
    if (lesson.dialogue) {
      lesson.dialogue.forEach(line => textChunk += ' ' + (line.en || ''));
    }
    if (lesson.patterns) {
      lesson.patterns.forEach(p => textChunk += ' ' + (p.en || ''));
    }

    const words = textChunk.toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/).filter(w => w.length > 1);
    words.forEach(w => {
      totalTokens++;
      if (!map[w]) {
        map[w] = { count: 0, lessons: new Set() };
      }
      map[w].count++;
      map[w].lessons.add(lIdx);
    });
  });

  vocabIndex.totalTokens = totalTokens || 1;
  vocabIndex.wordMap = map;
}

function calculateCurriculumMastery() {
  const masteredList = state.masteredWords || [];
  let masteredTokens = 0;

  masteredList.forEach(w => {
    const key = w.toLowerCase();
    if (vocabIndex.wordMap[key]) {
      masteredTokens += vocabIndex.wordMap[key].count;
    }
  });

  const pct = ((masteredTokens / vocabIndex.totalTokens) * 100).toFixed(1);
  state.curriculumMasteryPct = pct;

  const badge = document.getElementById('masteryPercent');
  if (badge) badge.textContent = `${pct}%`;

  const miniLabel = document.getElementById('masteryMiniLabel');
  if (miniLabel) {
    const lang = state.currentLang;
    const lblText = lang === 'zh' ? `已掌握: ${pct}%` : (lang === 'ko' ? `마스터: ${pct}%` : (lang === 'hv' ? `Làm chủ: ${pct}%` : `Làm chủ: ${pct}%`));
    miniLabel.textContent = lblText;
  }

  const miniFill = document.getElementById('masteryMiniFill');
  if (miniFill) miniFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

function toggleWordMastered(word) {
  const lower = word.toLowerCase();
  const idx = state.masteredWords.indexOf(lower);
  if (idx >= 0) {
    state.masteredWords.splice(idx, 1);
  } else {
    state.masteredWords.push(lower);
  }
  localStorage.setItem('streaml_mastered_words', JSON.stringify(state.masteredWords));
  calculateCurriculumMastery();
  const currentLesson = STREAMLINE_LESSONS[state.currentLessonIdx];
  if (currentLesson) renderVocabularyAnalytics(currentLesson);
}

function getWordMeaning(word, lang, lesson) {
  if (SINO_VIETNAMESE_MAP[word]) return SINO_VIETNAMESE_MAP[word];
  
  if (lang === 'hv') {
    if (word === 'excuse') return 'Đả nhiễu / Tấu thỉnh';
    if (word === 'pardon') return 'Thâm cảm tạ lỗi';
    if (word === 'handbag') return 'Thủ đề bao';
    if (word === 'hotel') return 'Tửu điếm';
    if (word === 'single') return 'Đơn nhân';
    if (word === 'room') return 'Phòng gian';
    if (word === 'post') return 'Bưu cục';
    if (word === 'office') return 'Bàn công thất';
    if (word === 'sweater') return 'Mao y';
    if (word === 'coffee') return 'Gia phê';
  }
  if (lang === 'zh') {
    if (word === 'excuse') return '打扰 / 原谅';
    if (word === 'pardon') return '请再说一遍';
    if (word === 'handbag') return '手提包';
    if (word === 'hotel') return '酒店 / 宾馆';
    if (word === 'single') return '单人';
    if (word === 'room') return '房间';
    if (word === 'post') return '邮政';
    if (word === 'office') return '办公室';
    if (word === 'sweater') return '毛衣';
    if (word === 'coffee') return '咖啡';
  }
  if (lang === 'ko') {
    if (word === 'excuse') return '실례합니다';
    if (word === 'pardon') return '다시 말씀해 주세요';
    if (word === 'handbag') return '핸드백';
    if (word === 'hotel') return '호텔';
    if (word === 'single') return '싱글';
    if (word === 'room') return '방 / 객실';
    if (word === 'post') return '우체국';
    if (word === 'office') return '사무실';
    if (word === 'sweater') return '스웨터';
    if (word === 'coffee') return '커피';
  }
  
  if (word === 'excuse') return 'Xin lỗi / Tha lỗi';
  if (word === 'pardon') return 'Nhắc lại / Dạ?';
  if (word === 'handbag') return 'Túi xách tay';
  if (word === 'hotel') return 'Khách sạn';
  if (word === 'single') return 'Phòng đơn';
  if (word === 'room') return 'Phòng';
  if (word === 'post') return 'Bưu điện';
  if (word === 'office') return 'Văn phòng';
  if (word === 'sweater') return 'Áo len';
  if (word === 'coffee') return 'Cà phê';
  
  return 'Từ vựng giao tiếp cốt lõi';
}

function renderVocabularyAnalytics(lesson) {
  const grid = document.getElementById('vocabGrid');
  if (!grid) return;

  const lang = state.currentLang;
  
  let candidateWords = new Set();
  const ignoreWords = new Set([
    'the','a','an','is','are','am','was','were','be','been','being',
    'to','of','and','in','on','at','for','with','about','against','between',
    'into','through','during','before','after','above','below','from','up',
    'down','in','out','off','over','under','again','further','then','once',
    'here','there','when','where','why','how','all','any','both','each',
    'few','more','most','other','some','such','no','nor','not','only','own',
    'same','so','than','too','very','can','will','just','should','now'
  ]);

  if (lesson.dialogue) {
    lesson.dialogue.forEach(line => {
      const words = (line.en || '').toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/);
      words.forEach(w => {
        if (w.length > 2 && !ignoreWords.has(w)) candidateWords.add(w);
      });
    });
  }

  if (lesson.patterns) {
    lesson.patterns.forEach(p => {
      const words = (p.en || '').toLowerCase().replace(/[^a-z0-9\s'-]/g, ' ').split(/\s+/);
      words.forEach(w => {
        if (w.length > 2 && !ignoreWords.has(w)) candidateWords.add(w);
      });
    });
  }

  const wordList = Array.from(candidateWords).map(w => {
    const info = vocabIndex.wordMap[w] || { count: 1, lessons: new Set() };
    return {
      word: w,
      count: info.count,
      lessons: Array.from(info.lessons).sort((a,b) => a - b)
    };
  }).sort((a,b) => b.count - a.count).slice(0, 8);

  grid.innerHTML = '';
  wordList.forEach(item => {
    const isMastered = state.masteredWords.includes(item.word.toLowerCase());
    let meaning = getWordMeaning(item.word, lang, lesson);
    
    const card = document.createElement('div');
    card.className = `vocab-card-item ${isMastered ? 'mastered' : ''}`;

    const lessonBadgesHTML = item.lessons.slice(0, 4).map(lIdx => {
      return `<button class="lesson-tag-btn" onclick="window.jumpToLesson(${lIdx})" title="Chuyển đến Bài ${lIdx + 1}">B${lIdx + 1}</button>`;
    }).join('');

    card.innerHTML = `
      <div class="vocab-item-top">
        <span class="vocab-word-en">
          ${item.word}
          <button class="btn-speak-icon" onclick="window.speakWord('${item.word}')" style="font-size:0.85rem; padding:0; background:none; border:none; cursor:pointer;" title="Phát âm từ này">🔊</button>
        </span>
        <span class="freq-badge" title="Tần suất xuất hiện trong 320 bài">🔥 ${item.count}x / 320 bài</span>
      </div>
      <div class="vocab-meaning">${meaning}</div>
      <div class="vocab-item-bottom">
        <div class="lesson-tags-row">
          <span style="font-size:0.7rem; color:#94a3b8;">Có tại:</span>
          ${lessonBadgesHTML}
        </div>
        <button class="mastered-btn ${isMastered ? 'active' : ''}" onclick="window.toggleMasteredWord('${item.word}')">
          ${isMastered ? '☑️ Đã thuộc' : '☐ Thuộc rồi?'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.jumpToLesson = function(lIdx) {
  loadLesson(lIdx);
  const arena = document.querySelector('.arena-panel');
  if (arena) arena.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.toggleMasteredWord = function(word) {
  toggleWordMastered(word);
};

window.speakWord = function(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(word);
    u.lang = 'en-US';
    u.rate = state.speechRate || 1.0;
    if (state.selectedVoice) u.voice = state.selectedVoice;
    window.speechSynthesis.speak(u);
  }
};

const el = {
  unitGrid: document.getElementById('unitGrid'),
  unitPreviewCard: document.getElementById('unitPreviewCard'),
  previewNum: document.getElementById('previewNum'),
  previewTitle: document.getElementById('previewTitle'),
  previewSub: document.getElementById('previewSub'),
  btnPrevLesson: document.getElementById('btnPrevLesson'),
  btnNextLesson: document.getElementById('btnNextLesson'),
  lessonStepIndicator: document.getElementById('lessonStepIndicator'),
  grammarContent: document.getElementById('grammarContent'),
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
  masteryPercent: document.getElementById('masteryPercent'),
  toast: document.getElementById('toast')
};

// --------------------------------------------------------------------------
// 3. INITIALIZATION & VOICE ENGINE
// --------------------------------------------------------------------------
function init() {
  document.body.className = 'theme-DEPARTURES';
  build320VocabularyIndex();
  calculateCurriculumMastery();
  renderHeaderStats();
  renderLessonSidebar();
  loadLesson(0);
  initSpeechSynthesis();
  initSpeechRecognition();
  attachEventListeners();
}

function renderHeaderStats() {
  const dict = TRANSLATIONS[state.currentLang || 'vi'];
  el.reflexPoints.textContent = state.points;
  el.reflexStreak.textContent = state.streak;
  el.lessonsMastered.textContent = `${state.mastered.length}/${STREAMLINE_LESSONS.length}`;

  const streakPill = el.reflexStreak.closest('.stat-pill');
  if (streakPill) {
    const lbl = streakPill.querySelector('.stat-lbl');
    if (lbl) lbl.textContent = dict.streakUnit || 'ngày';
  }

  const pointsPill = el.reflexPoints.closest('.stat-pill');
  if (pointsPill) {
    const lbl = pointsPill.querySelector('.stat-lbl');
    if (lbl) lbl.textContent = dict.pointsUnit || 'điểm';
  }
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
      if (v.default || v.name.includes('Google') || v.name.includes('Natural')) {
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

function getLineSubText(line, lang) {
  if (lang === 'en') return line.en;
  
  if (lang === 'hv') {
    if (line.hv) return line.hv;
    if (SINO_VIETNAMESE_MAP[line.en]) return SINO_VIETNAMESE_MAP[line.en];
    if (SINO_VIETNAMESE_PATTERNS[line.en]) return SINO_VIETNAMESE_PATTERNS[line.en];

    if (line.en.includes("Excuse me, this is lesson number")) {
      const num = line.en.match(/\d+/);
      return `Đả nhiễu nhất hạ, giá thị đệ ${num ? num[0] : ''} khóa.`;
    }
    if (line.en.includes("Yes, I understand completely!")) return "Thị đích, ngã hoàn toàn lý giải liễu!";
    if (line.en.includes("Are you ready to practice your reflex?")) return "Nhị chuẩn bị hảo luyện tập phản xạ liễu ma?";
    if (line.en.includes("Yes! Let's get started right now.")) return "Thị đích! Ngã môn hiện tại tị khai thủy ba.";
    if (line.en.includes("Welcome to")) return "Hoan nghênh lai đáo thử khóa trình!";
    if (line.en.includes("ready for the next level")) return "Ngã chuẩn bị hảo tiến nhập hạ nhất giai đoạn liễu!";
    if (line.en.includes("build up your fluency")) return "Ngã môn nhất bộ bộ đề cao khẩu ngữ lưu lợi độ.";
    if (line.en.includes("Sounds excellent")) return "Thính khởi lai thái bổng liễu! Ngã môn kế tục ba.";
    if (line.en.includes("mastering advanced")) return "Ngã chánh tại chưởng ác cao cấp phản xạ cú hình!";
    if (line.en.includes("confidence is growing")) return "Thái bổng liễu! Nhị đích tự tín tâm chánh tại khoái tốc đề cao.";
    if (line.en.includes("proceed further")) return "Phi thường cảm tạ! Ngã môn kế tục thâm nhập.";
    if (line.en.includes("final master level")) return "Hoan nghênh lai đáo tối hậu đích chuyên gia cấp biệt!";
    if (line.en.includes("completed Unit")) return "Ngã dị kinh hoàn thành 320 khóa trung đích thử khóa trình!";
    if (line.en.includes("full conversational fluency")) return "Cung hỷ! Nhị dị đạt đáo hoàn toàn lưu lợi đích Anh ngữ khẩu ngữ thủy bình.";
    if (line.en.includes("incredible learning journey")) return "Phi thường cảm tạ! StreamlAI thị nhất đoạn lẫm nhân kinh thán đích học tập chi lữ.";
    return line.zh || line.en;
  }

  if (lang === 'zh') {
    if (line.zh) return line.zh;
    if (line.en.includes("Excuse me, this is lesson number")) {
      const num = line.en.match(/\d+/);
      return `打扰一下，这是第 ${num ? num[0] : ''} 课。`;
    }
    if (line.en.includes("Yes, I understand completely!")) return "是的，我完全理解了！";
    if (line.en.includes("Are you ready to practice your reflex?")) return "你准备好练习反应了吗？";
    if (line.en.includes("Yes! Let's get started right now.")) return "是的！我们现在就开始吧。";
    if (line.en.includes("Welcome to")) return "欢迎来到此课程！";
    if (line.en.includes("ready for the next level")) return "我准备好进入下一阶段的对话了！";
    if (line.en.includes("build up your fluency")) return "让我们一步步提高口语流利度。";
    if (line.en.includes("Sounds excellent")) return "听起来太棒了！我们继续吧。";
    if (line.en.includes("mastering advanced")) return "我正在掌握高级反应句型！";
    if (line.en.includes("confidence is growing")) return "太棒了！你的自信心正在快速提升。";
    if (line.en.includes("proceed further")) return "非常感谢！让我们继续深入。";
    if (line.en.includes("final master level")) return "欢迎来到最终的专业专家级别！";
    if (line.en.includes("completed Unit")) return "我已经完成了 320 课中的此课程！";
    if (line.en.includes("full conversational fluency")) return "恭喜！你已达到完全流利的英语口语水平。";
    if (line.en.includes("incredible learning journey")) return "非常感谢！StreamlAI 是一段令人惊叹的学习之旅。";
    return line.en;
  }

  if (lang === 'ko') {
    if (line.ko) return line.ko;
    if (line.en.includes("Excuse me, this is lesson number")) {
      const num = line.en.match(/\d+/);
      return `실례합니다, 이것은 ${num ? num[0] : ''}번 레슨입니다.`;
    }
    if (line.en.includes("Yes, I understand completely!")) return "네, 완전히 이해했습니다!";
    if (line.en.includes("Are you ready to practice your reflex?")) return "반사 신경을 연습할 준비가 되셨나요?";
    if (line.en.includes("Yes! Let's get started right now.")) return "네! 지금 바로 시작합시다.";
    if (line.en.includes("Welcome to")) return "레슨에 오신 것을 환영합니다!";
    if (line.en.includes("ready for the next level")) return "다음 단계 대화 준비가 되었습니다!";
    if (line.en.includes("build up your fluency")) return "단계별로 유창성을 키워봅시다.";
    if (line.en.includes("Sounds excellent")) return "좋습니다! 계속 진행합시다.";
    if (line.en.includes("mastering advanced")) return "고급 반사 패턴을 마스터하고 있습니다!";
    if (line.en.includes("confidence is growing")) return "훌륭합니다! 자신감이 빠르게 향상되고 있네요.";
    if (line.en.includes("proceed further")) return "감사합니다! 더 전진해 봅시다.";
    if (line.en.includes("final master level")) return "최종 마스터 레벨에 오신 것을 환영합니다!";
    if (line.en.includes("completed Unit")) return "320개 레슨 중 이 레슨을 완료했습니다!";
    if (line.en.includes("full conversational fluency")) return "축하합니다! 완벽한 회화 유창성에 도달하셨습니다.";
    if (line.en.includes("incredible learning journey")) return "감사합니다! StreamlAI는 놀라운 학습 여정이었습니다.";
    return line.en;
  }

  return line.vi;
}

function getLessonTitle(lesson, lang) {
  if (lang === 'hv') {
    if (lesson.titleHv) return lesson.titleHv;
    let t = lesson.title;
    t = t.replace(" - Nhặt Túi Xách Rơi", " - Thập Hoạch Thủ Đề Bao")
         .replace(" - Tên Tuổi & Quốc Tịch", " - Danh Tự Dữ Quốc Tịch")
         .replace(" - Hỏi Đường Bưu Điện", " - Vấn Lộ Dữ Bưu Cục")
         .replace(" - Đặt Phòng Khách Sạn", " - Tửu Điếm Dự Đính")
         .replace(" - Gọi Điện Thoại Bàn 73048", " - 73048 Điện Thoại")
         .replace(" - Mua Áo Len", " - Cấu Mại Mao Y")
         .replace(" - Mua Sắm & Thử Đồ", " - Cấu Vật Dữ Thí Y")
         .replace(" - Thói Quên Hàng Ngày", " - Nhật Thường Tác Tức")
         .replace(" - Thành Viên Gia Đình", " - Gia Đình Thành Viên")
         .replace(" - Mô Tả Ngoại Hình", " - Ngoại Mạo Đặc Trưng")
         .replace(" - Gọi Đồ Uống Cafe", " - Điểm Gia Phê")
         .replace("Departures Master Unit", "Departures Hạch Tâm Khóa Trình")
         .replace("Connections Master Unit", "Connections Trung Cấp Khóa Trình")
         .replace("Destinations Master Unit", "Destinations Cao Cấp Khóa Trình")
         .replace("Directions Master Unit", "Directions Chuyên Gia Khóa Trình");
    return t;
  }
  if (lang === 'zh') {
    if (lesson.titleZh) return lesson.titleZh;
    let t = lesson.title;
    t = t.replace(" - Nhặt Túi Xách Rơi", " - 拾获手提包")
         .replace(" - Tên Tuổi & Quốc Tịch", " - 姓名与国籍")
         .replace(" - Hỏi Đường Bưu Điện", " - 问路与邮局")
         .replace(" - Đặt Phòng Khách Sạn", " - 酒店预订")
         .replace(" - Gọi Điện Thoại Bàn 73048", " - 73048电话")
         .replace(" - Mua Áo Len", " - 购买毛衣")
         .replace(" - Mua Sắm & Thử Đồ", " - 购物与试衣")
         .replace(" - Thói Quên Hàng Ngày", " - 日常作息")
         .replace(" - Thành Viên Gia Đình", " - 家庭成员")
         .replace(" - Mô Tả Ngoại Hình", " - 外貌特征")
         .replace(" - Gọi Đồ Uống Cafe", " - 点咖啡")
         .replace(" - Rủ Đi Xem Phim James Bond", " - 观赏电影")
         .replace(" - Phỏng Vấn Xin Việc SE", " - 求职面试")
         .replace(" - Hải Quan Sân Bay SE", " - 机场海关")
         .replace("Departures Master Unit", "Departures 核心课程")
         .replace("Connections Master Unit", "Connections 中级课程")
         .replace("Destinations Master Unit", "Destinations 高级课程")
         .replace("Directions Master Unit", "Directions 专家课程");
    return t;
  }
  if (lang === 'ko') {
    if (lesson.titleKo) return lesson.titleKo;
    let t = lesson.title;
    t = t.replace(" - Nhặt Túi Xách Rơi", " - 가방 습득 에티켓")
         .replace(" - Tên Tuổi & Quốc Tịch", " - 신원 확인 및 국적")
         .replace(" - Hỏi Đường Bưu Điện", " - 우체국 길 묻기")
         .replace(" - Đặt Phòng Khách Sạn", " - 호텔 예약")
         .replace(" - Gọi Điện Thoại Bàn 73048", " - 73048 유선 전화 통화")
         .replace(" - Mua Áo Len", " - 스웨터 쇼핑")
         .replace(" - Mua Sắm & Thử Đồ", " - 쇼핑 및 피팅룸")
         .replace(" - Thói Quên Hàng Ngày", " - 일상 루틴")
         .replace(" - Thành Viên Gia Đình", " - 가족 구성원")
         .replace(" - Mô Tả Ngoại Hình", " - 외모 묘사")
         .replace(" - Gọi Đồ Uống Cafe", " - 커피 주문")
         .replace(" - Rủ Đi Xem Phim James Bond", " - 영화 관람")
         .replace(" - Phỏng Vấn Xin Việc SE", " - 취업 면접")
         .replace(" - Hải Quan Sân Bay SE", " - 공항 세관")
         .replace("Departures Master Unit", "Departures 핵심 레슨")
         .replace("Connections Master Unit", "Connections 중급 레슨")
         .replace("Destinations Master Unit", "Destinations 고급 레슨")
         .replace("Directions Master Unit", "Directions 전문가 레슨");
    return t;
  }
  if (lang === 'en') {
    if (lesson.titleEn) return lesson.titleEn;
    let t = lesson.title;
    t = t.replace(" - Nhặt Túi Xách Rơi", " - Handbag Etiquette")
         .replace(" - Tên Tuổi & Quốc Tịch", " - Name & Nationality")
         .replace(" - Hỏi Đường Bưu Điện", " - Post Office Directions")
         .replace(" - Đặt Phòng Khách Sạn", " - Room Booking")
         .replace(" - Gọi Điện Thoại Bàn 73048", " - Phone Call 73048")
         .replace(" - Mua Áo Len", " - Buying a Sweater")
         .replace(" - Mua Sắm & Thử Đồ", " - Shopping & Fitting Room")
         .replace(" - Thói Quên Hàng Ngày", " - Daily Schedule")
         .replace(" - Thành Viên Gia Đình", " - Family Members")
         .replace(" - Mô Tả Ngoại Hình", " - Physical Appearance")
         .replace(" - Gọi Đồ Uống Cafe", " - Ordering Coffee");
    return t;
  }
  return lesson.title;
}

function getLessonTopic(lesson, lang) {
  if (lang === 'hv') {
    if (lesson.topicHv) return lesson.topicHv;
    return "Anh ngữ khẩu ngữ thực chiến";
  }
  if (lang === 'zh') {
    if (lesson.topicZh) return lesson.topicZh;
    return "英语口语实战";
  }
  if (lang === 'ko') {
    if (lesson.topicKo) return lesson.topicKo;
    return "영어 회화 실전";
  }
  if (lang === 'en') {
    if (lesson.topicEn) return lesson.topicEn;
    return "Practical Spoken English";
  }
  return lesson.topic;
}

function getLessonDesc(lesson, lang) {
  if (lang === 'hv') {
    if (lesson.descHv) return lesson.descHv;
    return `Luyện tập bản khóa (${getLessonTitle(lesson, lang)}) đích hạch tâm Anh ngữ khẩu ngữ biểu đạt dữ phản xạ năng lực.`;
  }
  if (lang === 'zh') {
    if (lesson.descZh) return lesson.descZh;
    return `练习本课 (${getLessonTitle(lesson, lang)}) 的核心英语口语表达与反应能力。`;
  }
  if (lang === 'ko') {
    if (lesson.descKo) return lesson.descKo;
    return `이 레슨 (${getLessonTitle(lesson, lang)})의 핵심 영어 표현과 반사 신경을 연습하세요.`;
  }
  if (lang === 'en') {
    if (lesson.descEn) return lesson.descEn;
    return `Master the practical spoken English reflex patterns for this lesson.`;
  }
  return lesson.description;
}

// --------------------------------------------------------------------------
// 4. LESSON RENDERING & DIALOGUE STREAM
// --------------------------------------------------------------------------
function renderLessonSidebar() {
  if (el.unitGrid) {
    el.unitGrid.innerHTML = '';
    STREAMLINE_LESSONS.forEach((lesson, idx) => {
      const btn = document.createElement('button');
      btn.className = `unit-btn ${idx === state.currentLessonIdx ? 'active' : ''}`;
      btn.textContent = idx + 1;

      const updatePreview = () => {
        const title = getLessonTitle(lesson, state.currentLang);
        if (el.previewNum) el.previewNum.textContent = `Lesson ${lesson.id}`;
        if (el.previewTitle) el.previewTitle.textContent = title;
        if (el.previewSub) el.previewSub.textContent = getLessonTopic(lesson, state.currentLang);
      };

      btn.onmouseenter = updatePreview;
      btn.onclick = () => {
        updatePreview();
        loadLesson(idx);
      };

      el.unitGrid.appendChild(btn);
    });
  }
}

function renderGrammarBreakdown(lesson) {
  if (!el.grammarContent) return;
  
  const lang = state.currentLang;
  let titleText = "💡 Cấu trúc câu cốt lõi (Core Grammar Patterns):";
  let noteText = "📌 <b>Ghi chú phản xạ:</b> Tập trung luyện ngữ điệu và phát âm chuẩn các mẫu câu trên bằng cách chọn <b>Đóng Vai Phản Xạ 🎙️</b>.";

  if (lang === 'zh') {
    titleText = "💡 核心句法结构 (Core Grammar Patterns):";
    noteText = "📌 <b>口语练习提示:</b> 切换至 <b>角色扮演竞技场 🎙️</b> 模式，集中练习上述核心句型的语调与标准发音。";
  } else if (lang === 'ko') {
    titleText = "💡 핵심 문법 구조 (Core Grammar Patterns):";
    noteText = "📌 <b>반사 학습 팁:</b> <b>역할 놀이 아레나 🎙️</b>를 선택하여 위 핵심 문형의 억양과 표준 발음을 연습하세요.";
  } else if (lang === 'en') {
    titleText = "💡 Core Grammar Patterns:";
    noteText = "📌 <b>Reflex Tip:</b> Switch to <b>Roleplay Arena 🎙️</b> to practice intonation and native pronunciation of the core patterns above.";
  }

  let html = `
    <div style="margin-bottom:0.8rem;">
      <strong style="color:#a5b4fc;">${titleText}</strong>
      <ul style="margin: 0.4rem 0 0 1.2rem; padding:0; color:#cbd5e1;">
  `;
  
  lesson.patterns.forEach(p => {
    let sub = getLineSubText(p, lang);
    html += `<li style="margin-bottom:0.3rem;"><b>${p.en}</b> — <i>${sub}</i></li>`;
  });

  html += `
      </ul>
    </div>
    <div style="font-size:0.8rem; color:#94a3b8;">
      ${noteText}
    </div>
  `;

  el.grammarContent.innerHTML = html;
}

function loadLesson(idx) {
  stopSpeech();
  state.currentLessonIdx = idx;
  state.activeSpeechBubbleIdx = -1;
  state.currentQuizIdx = 0;
  
  const lesson = STREAMLINE_LESSONS[idx];
  
  const topic = getLessonTopic(lesson, state.currentLang);
  const desc = getLessonDesc(lesson, state.currentLang);
  const title = getLessonTitle(lesson, state.currentLang);

  el.lessonTopic.textContent = topic;
  el.lessonLevel.textContent = lesson.level;
  el.lessonTitle.textContent = title;
  el.lessonDesc.textContent = desc;

  if (el.lessonStepIndicator) {
    const lang = state.currentLang;
    const unitWord = lang === 'zh' ? '课' : (lang === 'ko' ? '레슨' : (lang === 'hv' ? 'Khóa' : 'Bài'));
    el.lessonStepIndicator.textContent = `${unitWord} ${idx + 1} / ${STREAMLINE_LESSONS.length}`;
  }

  const topText = document.getElementById('topLessonText');
  if (topText) {
    const lang = state.currentLang;
    const unitWord = lang === 'zh' ? '第' : (lang === 'ko' ? '레슨' : (lang === 'hv' ? 'Đệ' : 'Bài'));
    const unitSuffix = lang === 'zh' ? '课' : (lang === 'hv' ? 'Khóa' : '');
    topText.textContent = `${unitWord} ${idx + 1}${unitSuffix} / ${STREAMLINE_LESSONS.length}`;
  }

  renderLessonSidebar();
  renderChatStream(lesson.dialogue);
  renderVocabularyAnalytics(lesson);
  renderPatterns(lesson.patterns);
  renderGrammarBreakdown(lesson);
  updateModeView();

  if (el.chatStream) el.chatStream.scrollTop = 0;
  const banner = document.getElementById('lessonBanner');
  if (banner) {
    banner.classList.add('banner-pulse');
    setTimeout(() => banner.classList.remove('banner-pulse'), 700);
  }
}

function renderChatStream(dialogue) {
  el.chatStream.innerHTML = '';
  dialogue.forEach((line, idx) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${line.speaker === 'A' ? 'speaker-a' : 'speaker-b'}`;
    bubble.dataset.idx = idx;

    const avatarClass = line.speaker === 'A' ? 'avatar-a' : 'avatar-b';
    const subText = getLineSubText(line, state.currentLang);

    bubble.innerHTML = `
      <div class="chat-avatar ${avatarClass}">${line.speaker}</div>
      <div class="bubble-content">
        <span class="speaker-name">${line.name}</span>
        <span class="text-en">${line.en}</span>
        <span class="text-vi">${subText}</span>
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
    const sub = getLineSubText(p, state.currentLang);
    const card = document.createElement('div');
    card.className = 'pattern-item';
    card.innerHTML = `
      <div class="pattern-en">${p.en}</div>
      <div class="pattern-vi">${sub}</div>
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
    const dict = TRANSLATIONS[state.currentLang || 'vi'];
    showToast(dict.toastRoleplayFinished || "🎉 Đã hoàn thành phát bài hội thoại!");
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

  const dict = TRANSLATIONS[state.currentLang || 'vi'];
  const prompt = dict.turnPrompt || "👉 Đến lượt bạn đọc câu thoại của <b>Nhân vật ";
  const suffix = dict.turnPromptSuffix || "</b>!";
  el.turnIndicator.innerHTML = `${prompt}${line.speaker}${suffix}`;
  el.targetEn.textContent = `"${line.en}"`;
  el.targetVi.textContent = `(${getLineSubText(line, state.currentLang)})`;

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
  document.querySelectorAll('.book-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.book-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      const book = tab.dataset.book;
      activeBook = book;
      
      if (book === 'CONNECTIONS') {
        STREAMLINE_LESSONS = CONNECTIONS_LESSONS;
      } else if (book === 'DESTINATIONS') {
        STREAMLINE_LESSONS = DESTINATIONS_LESSONS;
      } else if (book === 'DIRECTIONS') {
        STREAMLINE_LESSONS = DIRECTIONS_LESSONS;
      } else {
        STREAMLINE_LESSONS = DEPARTURES_LESSONS;
      }

      document.body.className = `theme-${book}`;
      const badge = document.getElementById('bookBadge');
      if (badge) badge.textContent = `${book.charAt(0) + book.slice(1).toLowerCase()} (80 Units)`;
      
      loadLesson(0);
      showToast(`📚 Đã nạp tập sách ${book} (80 Bài)!`);
    };
  });

  // Multilingual Dropdown Selector Handler
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.onchange = () => {
      updateUILanguage(langSelect.value);
    };
  }

  // Prev / Next Lesson Navigation
  if (el.btnPrevLesson) {
    el.btnPrevLesson.onclick = () => {
      const dict = TRANSLATIONS[state.currentLang || 'vi'];
      if (state.currentLessonIdx > 0) {
        loadLesson(state.currentLessonIdx - 1);
        const arena = document.querySelector('.arena-panel');
        if (arena) arena.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        showToast(dict.toastFirstLesson || "ℹ️ Đây là bài đầu tiên trong tập sách!");
      }
    };
  }

  if (el.btnNextLesson) {
    el.btnNextLesson.onclick = () => {
      const dict = TRANSLATIONS[state.currentLang || 'vi'];
      if (state.currentLessonIdx + 1 < STREAMLINE_LESSONS.length) {
        loadLesson(state.currentLessonIdx + 1);
        const arena = document.querySelector('.arena-panel');
        if (arena) arena.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        showToast(dict.toastLastLesson || "🎉 Đã đến bài cuối cùng của tập sách!");
      }
    };
  }

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
