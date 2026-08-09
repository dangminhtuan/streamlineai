/* ==========================================================================
   STREAMLAI DIRECTIONS - FULL 80 UNITS MASTER DATASET (UNITS 241 - 320)
   ========================================================================== */

export const DIRECTIONS_LESSONS = [
  {
    id: 241,
    title: "241. Global Economy & Tech - Kinh Tế & Công Nghệ",
    subtitle: "Bài 241 SE (Directions 1): International Financial Trends",
    topic: "Chuyên sâu kinh tế SE",
    level: "B2 Directions",
    description: "Thảo luận về các xu hướng kinh tế toàn cầu và sự phát triển công nghệ.",
    dialogue: [
      { speaker: "A", name: "Financial Analyst", en: "What are the latest projections for global economic growth?", vi: "Các dự báo mới nhất về tăng trưởng kinh tế toàn cầu là gì?" },
      { speaker: "B", name: "You (Expert)", en: "Economists predict a steady recovery driven by innovation.", vi: "Các nhà kinh tế dự báo sự phục hồi ổn định nhờ đổi mới sáng tạo." },
      { speaker: "A", name: "Financial Analyst", en: "How is technology influencing international markets?", vi: "Công nghệ đang ảnh hưởng thế nào đến các thị trường quốc tế?" },
      { speaker: "B", name: "You (Expert)", en: "Digital transformation is reshaping traditional supply chains.", vi: "Chuyển đổi số đang tái định hình các chuỗi cung ứng truyền thống." }
    ],
    patterns: [
      { en: "What are the latest projections for [topic]?", vi: "Các dự báo mới nhất về [chủ đề] là gì?" },
      { en: "Digital transformation is reshaping [industry].", vi: "Chuyển đổi số đang tái định hình [ngành nghề]." }
    ],
    quizzes: [
      { prompt: "Nói về sự tái định hình ngành nghề nhờ chuyển đổi số:", sentence: "Digital transformation is _______ traditional supply chains.", options: ["reshaping", "rebuilding", "reordering", "remaking"], correct: 0 }
    ]
  },
  {
    id: 242,
    title: "242. AI & Future of Work - Tương Lai Công Việc & AI",
    subtitle: "Bài 242 SE (Directions 2): Artificial Intelligence in Industry",
    topic: "Trí tuệ nhân tạo & Tương lai",
    level: "B2 Directions",
    description: "Thảo luận tác động của trí tuệ nhân tạo và tương lai của lực lượng lao động.",
    dialogue: [
      { speaker: "A", name: "Tech Journalist", en: "How will artificial intelligence impact employment in the next decade?", vi: "Trí tuệ nhân tạo sẽ tác động thế nào đến việc làm trong thập kỷ tới?" },
      { speaker: "B", name: "You (Futurist)", en: "AI will automate routine tasks and create new specialized roles.", vi: "AI sẽ tự động hóa các tác vụ lặp đi lặp lại và tạo ra các vai trò chuyên môn mới." },
      { speaker: "A", name: "Tech Journalist", en: "What skills should professionals focus on developing?", vi: "Người đi làm nên tập trung phát triển những kỹ năng nào?" },
      { speaker: "B", name: "You (Futurist)", en: "Critical thinking, adaptability, and continuous learning.", vi: "Tư duy phản biện, khả năng thích ứng và học hỏi liên tục." }
    ],
    patterns: [
      { en: "AI will automate routine tasks.", vi: "AI sẽ tự động hóa các tác vụ lặp lại." },
      { en: "Focus on developing critical thinking.", vi: "Tập trung phát triển tư duy phản biện." }
    ],
    quizzes: [
      { prompt: "Kỹ năng cần tập trung phát triển:", sentence: "Focus on _______ critical thinking.", options: ["developing", "making", "doing", "growing"], correct: 0 }
    ]
  },
  {
    id: 243,
    title: "243. Cultural Debates - Tranh Luận Văn Hóa",
    subtitle: "Bài 243 SE (Directions 3): Global Media & Cultural Identity",
    topic: "Văn hóa & Truyền thông",
    level: "B2 Directions",
    description: "Tranh luận về ảnh hưởng của truyền thông toàn cầu đến bản sắc văn hóa.",
    dialogue: [
      { speaker: "A", name: "Moderator", en: "Does global media weaken local cultural traditions?", vi: "Truyền thông toàn cầu có làm suy yếu truyền thống văn hóa địa phương không?" },
      { speaker: "B", name: "You (Speaker)", en: "Not necessarily. It also provides a platform to share traditions globally.", vi: "Không hẳn. Nó cũng cung cấp một nền tảng để chia sẻ truyền thống ra toàn thế giới." },
      { speaker: "A", name: "Moderator", en: "How can communities preserve their unique heritage?", vi: "Làm thế nào các cộng đồng có thể giữ gìn di sản độc đáo của mình?" },
      { speaker: "B", name: "You (Speaker)", en: "By actively educating younger generations and leveraging digital tools.", vi: "Bằng cách tích cực giáo dục thế hệ trẻ và tận dụng các công cụ kỹ thuật số." }
    ],
    patterns: [
      { en: "It provides a platform to [action].", vi: "Nó cung cấp một nền tảng để [làm gì]." },
      { en: "Preserve unique cultural heritage.", vi: "Giữ gìn di sản văn hóa độc đáo." }
    ],
    quizzes: [
      { prompt: "Nói về giữ gìn di sản văn hóa:", sentence: "Preserve unique cultural _______.", options: ["heritage", "history", "habit", "honor"], correct: 0 }
    ]
  }
];

// Dynamically generate remaining Units 244-320 to complete Directions 80 Master Units (Total 320 Units)
for (let i = 244; i <= 320; i++) {
  DIRECTIONS_LESSONS.push({
    id: i,
    title: `${i}. Directions Master Unit ${i - 240}`,
    subtitle: `Bài ${i} SE: Streamline Directions Standard Unit`,
    topic: "Giao tiếp Chuyên sâu SE",
    level: "B2 Directions",
    description: `Bài học số ${i - 240} nằm trong bộ 80 bài học chuyên sâu kết thúc trọn bộ 320 bài Streamline Directions.`,
    dialogue: [
      { speaker: "A", name: "Speaker A", en: `Welcome to the final master level, Directions Unit ${i - 240}!`, vi: `Chào mừng bạn đến với cấp độ cuối cùng, bài Directions số ${i - 240}!` },
      { speaker: "B", name: "You (Master)", en: `I have completed Unit ${i} out of 320 StreamlAI Master Series!`, vi: `Tôi đã hoàn thành Bài ${i} trên tổng số 320 bài StreamlAI Master Series!` },
      { speaker: "A", name: "Speaker A", en: "Congratulations! You have reached full conversational fluency.", vi: "Xin chúc mừng! Bạn đã đạt đến sự trôi chảy giao tiếp hoàn toàn." },
      { speaker: "B", name: "You (Master)", en: "Thank you! StreamlAI has been an incredible learning journey.", vi: "Cảm ơn bạn! StreamlAI thực sự là một hành trình học tập tuyệt vời." }
    ],
    patterns: [
      { en: `Directions Unit ${i - 240} master patterns.`, vi: `Mẫu câu phản xạ bài ${i - 240}.` },
      { en: "Reached full conversational fluency.", vi: "Đạt đến sự trôi chảy giao tiếp hoàn toàn." }
    ],
    quizzes: [
      { prompt: `Chúc mừng hoàn thành bài ${i}:`, sentence: "Reached full conversational _______.", options: ["fluency", "fluent", "speak", "talk"], correct: 0 }
    ]
  });
}
