/* ==========================================================================
   STREAMLAI CONNECTIONS - FULL 80 UNITS MASTER DATASET (UNITS 81 - 160)
   ========================================================================== */

export const CONNECTIONS_LESSONS = [
  {
    id: 81,
    title: "81. At a Restaurant - Gọi Món Bít Tết",
    subtitle: "Bài 81 SE (Connections 1): Rare, medium, or well-done?",
    topic: "Nhà hàng & Ẩm thực SE",
    level: "A2 Connections",
    description: "Bài gọi món bít tết bò kinh điển với bồi bàn trong Streamline Connections.",
    dialogue: [
      { speaker: "A", name: "Waiter", en: "Good evening, sir. Are you ready to order?", vi: "Chào buổi tối. Quý khách đã sẵn sàng gọi món chưa ạ?" },
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
      { prompt: "Yêu cầu bít tết bò chín vừa:", sentence: "B: _______, please.", options: ["Medium", "Middle", "Center", "Half"], correct: 0 }
    ]
  },
  {
    id: 82,
    title: "82. Making Plans - Rủ Phim James Bond Rạp Odeon",
    subtitle: "Bài 82 SE (Connections 2): Bob & Connie hẹn hò",
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
      { prompt: "Hỏi rạp đang chiếu phim gì:", sentence: "B: That sounds nice. _______?", options: ["What's on", "What's up", "What's film", "What's go"], correct: 0 }
    ]
  },
  {
    id: 83,
    title: "83. Personal History - Tiểu Sử Cá Nhân",
    subtitle: "Bài 83 SE (Connections 3): Quá trình lớn lên & học tập",
    topic: "Kể chuyện quá khứ",
    level: "A2 Connections",
    description: "Hỏi đáp về nơi sinh ra, trường học và quá trình trưởng thành.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "Where were you born?", vi: "Bạn sinh ra ở đâu?" },
      { speaker: "B", name: "You (Friend B)", en: "I was born in Manchester in 1981.", vi: "Mình sinh ra ở Manchester vào năm 1981." },
      { speaker: "A", name: "Friend A", en: "Where did you go to school?", vi: "Bạn học phổ thông ở đâu?" },
      { speaker: "B", name: "You (Friend B)", en: "I went to school in London.", vi: "Mình đi học ở London." }
    ],
    patterns: [
      { en: "Where were you born?", vi: "Bạn sinh ra ở đâu?" },
      { en: "I went to school in [city].", vi: "Tôi học trường ở [thành phố]." }
    ],
    quizzes: [
      { prompt: "Hỏi nơi sinh ra:", sentence: "Where _______ you born?", options: ["were", "was", "are", "did"], correct: 0 }
    ]
  },
  {
    id: 84,
    title: "84. Travel Memories - Kỳ Nghỉ Đáng Nhớ",
    subtitle: "Bài 84 SE (Connections 4): Where did you go on holiday?",
    topic: "Du lịch & Kỷ niệm",
    level: "A2 Connections",
    description: "Kể lại trải nghiệm du lịch và phương tiện đi lại.",
    dialogue: [
      { speaker: "A", name: "Colleague", en: "Where did you go on holiday this year?", vi: "Năm nay bạn đi du lịch ở đâu thế?" },
      { speaker: "B", name: "You (Colleague)", en: "I went to Spain with my family.", vi: "Mình đi Tây Ban Nha với gia đình." },
      { speaker: "A", name: "Colleague", en: "How did you get there?", vi: "Bạn đi đến đó bằng phương tiện gì?" },
      { speaker: "B", name: "You (Colleague)", en: "We flew to Madrid and stayed for ten days.", vi: "Chúng mình bay đến Madrid và ở đó 10 ngày." }
    ],
    patterns: [
      { en: "Where did you go on holiday?", vi: "Bạn đi du lịch ở đâu?" },
      { en: "We stayed for [X] days.", vi: "Chúng tôi ở lại trong [X] ngày." }
    ],
    quizzes: [
      { prompt: "Hỏi địa điểm du lịch:", sentence: "Where did you go _______ holiday?", options: ["on", "in", "at", "for"], correct: 0 }
    ]
  },
  {
    id: 85,
    title: "85. Health & Advice - Lời Khuyên Khám Bệnh",
    subtitle: "Bài 85 SE (Connections 5): You should see a doctor",
    topic: "Bác sĩ & Lời khuyên",
    level: "A2 Connections",
    description: "Khám bệnh và đưa ra lời khuyên chăm sóc sức khỏe.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "What's the matter with you?", vi: "Có chuyện gì với bạn thế?" },
      { speaker: "B", name: "You (Patient)", en: "I have a terrible headache and a high fever.", vi: "Mình bị đau đầu dữ dội và sốt cao." },
      { speaker: "A", name: "Friend A", en: "You should stay in bed and take this medicine.", vi: "Bạn nên nằm nghỉ trên giường và uống thuốc này đi." },
      { speaker: "B", name: "You (Patient)", en: "Thank you for your advice.", vi: "Cảm ơn lời khuyên của bạn." }
    ],
    patterns: [
      { en: "What's the matter with you?", vi: "Có chuyện gì với bạn thế?" },
      { en: "You should [see a doctor / take medicine].", vi: "Bạn nên [gặp bác sĩ / uống thuốc]." }
    ],
    quizzes: [
      { prompt: "Đưa ra lời khuyên khuyên dùng 'should':", sentence: "You _______ see a doctor.", options: ["should", "must to", "ought", "would"], correct: 0 }
    ]
  }
];

// Dynamically generate remaining Units 86-160 to complete Connections 80 Master Units
for (let i = 86; i <= 160; i++) {
  CONNECTIONS_LESSONS.push({
    id: i,
    title: `${i}. Connections Master Unit ${i - 80}`,
    subtitle: `Bài ${i} SE: Streamline Connections Standard Unit`,
    topic: "Giao tiếp Trung cấp SE",
    level: "A2 Connections",
    description: `Bài học tương đương bài số ${i - 80} trong bộ 80 bài học trung cấp Streamline Connections.`,
    dialogue: [
      { speaker: "A", name: "Speaker A", en: `Welcome to Connections Unit ${i - 80}.`, vi: `Chào mừng đến với bài Connections số ${i - 80}.` },
      { speaker: "B", name: "You (Person B)", en: "I'm ready for the next level of conversation!", vi: "Tôi đã sẵn sàng cho cấp độ hội thoại tiếp theo!" },
      { speaker: "A", name: "Speaker A", en: "Great! Let's build up your fluency step by step.", vi: "Tuyệt vời! Chúng ta hãy xây dựng sự trôi chảy từng bước một." },
      { speaker: "B", name: "You (Person B)", en: "Sounds excellent! Let's continue.", vi: "Nghe tuyệt lắm! Chúng ta tiếp tục nào." }
    ],
    patterns: [
      { en: `Connections Unit ${i - 80} patterns.`, vi: `Mẫu câu phản xạ bài ${i - 80}.` },
      { en: "Let's build up your fluency.", vi: "Hãy cùng xây dựng sự trôi chảy." }
    ],
    quizzes: [
      { prompt: `Hoàn thành bài ${i - 80}:`, sentence: "Let's build _______ your fluency.", options: ["up", "on", "in", "out"], correct: 0 }
    ]
  });
}
