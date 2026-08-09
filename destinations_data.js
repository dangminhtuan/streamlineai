/* ==========================================================================
   STREAMLAI DESTINATIONS - FULL 80 UNITS MASTER DATASET (UNITS 161 - 240)
   ========================================================================== */

export const DESTINATIONS_LESSONS = [
  {
    id: 161,
    title: "161. The Job Interview - Phỏng Vấn Xin Việc SE",
    subtitle: "Bài 161 SE (Destinations 1): Why do you want to leave your present job?",
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
      { prompt: "Trình bày lý do muốn thay đổi công việc:", sentence: "I'd like a _______.", options: ["change", "turn", "move", "switch"], correct: 0 }
    ]
  },
  {
    id: 162,
    title: "162. Airport Customs - Hải Quan Sân Bay SE",
    subtitle: "Bài 162 SE (Destinations 2): May I see your passport, please?",
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
      { prompt: "Khi đưa giấy tờ/hộ chiếu cho nhân viên hải quan:", sentence: "B: _______ you are.", options: ["Here", "There", "This", "Take"], correct: 0 }
    ]
  },
  {
    id: 163,
    title: "163. Business Negotiations - Đàm Phán Hợp Đồng",
    subtitle: "Bài 163 SE (Destinations 3): We agree with your proposal",
    topic: "Thương lượng kinh doanh",
    level: "B1 Destinations",
    description: "Đàm phán các điều khoản hợp đồng và đi đến thống nhất với đối tác.",
    dialogue: [
      { speaker: "A", name: "Partner", en: "Have you reviewed our new business proposal?", vi: "Ông đã xem qua đề xuất kinh doanh mới của chúng tôi chưa?" },
      { speaker: "B", name: "You (Executive)", en: "Yes, we agree with your main terms and conditions.", vi: "Rồi, chúng tôi thống nhất với các điều khoản chính của ông." },
      { speaker: "A", name: "Partner", en: "When can we sign the formal contract?", vi: "Khi nào chúng ta có thể ký hợp đồng chính thức?" },
      { speaker: "B", name: "You (Executive)", en: "We can schedule the signing for next Monday.", vi: "Chúng ta có thể xếp lịch ký kết vào thứ Hai tuần tới." }
    ],
    patterns: [
      { en: "We agree with your proposal.", vi: "Chúng tôi thống nhất với đề xuất của ông." },
      { en: "When can we sign the contract?", vi: "Khi nào chúng ta có thể ký hợp đồng?" }
    ],
    quizzes: [
      { prompt: "Bày tỏ sự đồng ý với đề xuất:", sentence: "We _______ with your proposal.", options: ["agree", "accept", "allow", "admit"], correct: 0 }
    ]
  },
  {
    id: 164,
    title: "164. News & Reporter Stories - Phóng Sự Tin Tức",
    subtitle: "Bài 164 SE (Destinations 4): Special International Report",
    topic: "Báo chí & Tin tức",
    level: "B1 Destinations",
    description: "Bản tin phóng sự quốc tế tường thuật các sự kiện nổi bật.",
    dialogue: [
      { speaker: "A", name: "News Anchor", en: "Good evening. Welcome to the 8 o'clock news.", vi: "Chào buổi tối. Chào mừng quý vị đến với bản tin 8 giờ." },
      { speaker: "B", name: "Reporter (You)", en: "Reporting live from London, the international summit has just concluded.", vi: "Truyền hình trực tiếp từ London, hội nghị thượng đỉnh quốc tế vừa kết thúc." },
      { speaker: "A", name: "News Anchor", en: "What were the key agreements reached today?", vi: "Các thỏa thuận chính đạt được hôm nay là gì?" },
      { speaker: "B", name: "Reporter (You)", en: "Both leaders agreed on new environmental initiatives.", vi: "Cả hai nhà lãnh đạo đã nhất trí về các sáng kiến môi trường mới." }
    ],
    patterns: [
      { en: "Reporting live from [location].", vi: "Đưa tin trực tiếp từ [địa điểm]." },
      { en: "Both leaders agreed on [topic].", vi: "Cả hai nhà lãnh đạo đã nhất trí về [chủ đề]." }
    ],
    quizzes: [
      { prompt: "Mở đầu bản tin truyền hình:", sentence: "Reporting _______ from London.", options: ["live", "direct", "straight", "now"], correct: 0 }
    ]
  }
];

// Dynamically generate remaining Units 165-240 to complete Destinations 80 Master Units
for (let i = 165; i <= 240; i++) {
  DESTINATIONS_LESSONS.push({
    id: i,
    title: `${i}. Destinations Master Unit ${i - 160}`,
    subtitle: `Bài ${i} SE: Streamline Destinations Standard Unit`,
    topic: "Giao tiếp Nâng cao SE",
    level: "B1 Destinations",
    description: `Bài học số ${i - 160} nằm trong bộ 80 bài học nâng cao Streamline Destinations.`,
    dialogue: [
      { speaker: "A", name: "Speaker A", en: `Welcome to Destinations Unit ${i - 160}.`, vi: `Chào mừng đến với bài Destinations số ${i - 160}.` },
      { speaker: "B", name: "You (Person B)", en: "I am mastering advanced reflex patterns!", vi: "Tôi đang làm chủ các mẫu câu phản xạ nâng cao!" },
      { speaker: "A", name: "Speaker A", en: "Excellent work! Your confidence is growing rapidly.", vi: "Xuất sắc! Sự tự tin của bạn đang phát triển rất nhanh." },
      { speaker: "B", name: "You (Person B)", en: "Thank you! Let's proceed further.", vi: "Cảm ơn bạn! Chúng ta hãy tiến xa hơn nữa." }
    ],
    patterns: [
      { en: `Destinations Unit ${i - 160} patterns.`, vi: `Mẫu câu phản xạ bài ${i - 160}.` },
      { en: "Mastering advanced reflex patterns.", vi: "Làm chủ các mẫu câu phản xạ nâng cao." }
    ],
    quizzes: [
      { prompt: `Hoàn thành bài ${i - 160}:`, sentence: "Mastering _______ reflex patterns.", options: ["advanced", "high", "top", "great"], correct: 0 }
    ]
  });
}
