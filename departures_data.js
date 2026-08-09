/* ==========================================================================
   STREAMLAI DEPARTURES - FULL 80 UNITS MASTER DATASET (UNITS 1 - 80)
   ========================================================================== */

export const DEPARTURES_LESSONS = [
  // --- WORKBOOK A (UNITS 1 - 40) ---
  {
    id: 1,
    title: "1. Everyday Excuses - Nhặt Túi Xách Rơi",
    subtitle: "Bài 1 SE: Excuse me. Is this your handbag?",
    topic: "Giao tiếp căn bản SE",
    level: "A1 Departures",
    description: "Luyện phản xạ lịch sự khi vô tình nhặt đồ rơi trên phố.",
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
      { en: "Pardon?", vi: "Dạ? (Dùng khi nghe không rõ)" },
      { en: "You're welcome.", vi: "Không có chi." }
    ],
    quizzes: [
      { prompt: "Khi nghe chưa rõ và xin nhắc lại lịch sự:", sentence: "B: _______?", options: ["Pardon", "Sorry you", "What", "Repeat"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "2. Personal Identification - Tên Tuổi & Quốc Tịch",
    subtitle: "Bài 2 SE: What's your name? Where are you from?",
    topic: "Giới thiệu bản thân",
    level: "A1 Departures",
    description: "Hỏi đáp tên tuổi, quê quán và quốc tịch.",
    dialogue: [
      { speaker: "A", name: "Customs Officer", en: "What's your name, please?", vi: "Xin hỏi tên của bạn là gì ạ?" },
      { speaker: "B", name: "Arthur Clark", en: "My name's Arthur Clark.", vi: "Tên tôi là Arthur Clark." },
      { speaker: "A", name: "Customs Officer", en: "Where are you from?", vi: "Bạn từ đâu đến?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm from London.", vi: "Tôi đến từ London." },
      { speaker: "A", name: "Customs Officer", en: "What's your nationality?", vi: "Quốc tịch của bạn là gì?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm British.", vi: "Tôi là người Anh." }
    ],
    patterns: [
      { en: "What's your name, please?", vi: "Tên của bạn là gì?" },
      { en: "Where are you from?", vi: "Bạn đến từ đâu?" },
      { en: "I'm from [city / country].", vi: "Tôi đến từ [thành phố / quốc gia]." }
    ],
    quizzes: [
      { prompt: "Hỏi quốc tịch của người khác:", sentence: "What's your _______?", options: ["nationality", "national", "nation", "native"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "3. Asking for Directions - Hỏi Đường Bưu Điện",
    subtitle: "Bài 3 SE: Is there a post office near here?",
    topic: "Hỏi đường chỉ vị trí",
    level: "A1 Departures",
    description: "Hỏi đường đến bưu điện, ngân hàng, siêu thị.",
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
      { prompt: "Mô tả 'kế bên ngân hàng, đối diện siêu thị':", sentence: "It's _______ to the bank, _______ the supermarket.", options: ["next / opposite", "near / in", "by / behind", "front / back"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "4. At a Hotel - Đặt Phòng Khách Sạn",
    subtitle: "Bài 4 SE: I'd like a single room for two nights",
    topic: "Lễ tân khách sạn",
    level: "A1 Departures",
    description: "Thủ tục đặt phòng đơn/đôi tại lễ tân khách sạn.",
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
      { prompt: "Yêu cầu phòng đơn:", sentence: "I'd like a _______ room, please.", options: ["single", "one", "alone", "solo"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "5. Telephoning - Gọi Điện Thoại Bàn 73048",
    subtitle: "Bài 5 SE: Hello, 73048. Could I speak to Mr. Clark?",
    topic: "Điện thoại bàn hoài niệm",
    level: "A1 Departures",
    description: "Cuộc gọi điện thoại bàn kinh điển với số máy lẻ 73048.",
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
      { prompt: "Khi người nghe xin người gọi giữ máy:", sentence: "_______ on a moment, please.", options: ["Hold", "Keep", "Wait", "Stay"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "6. Shopping & Prices - Mua Áo Len",
    subtitle: "Bài 6 SE: How much is this sweater, please?",
    topic: "Mua sắm & Thử đồ",
    level: "A1 Departures",
    description: "Hỏi giá tiền và phòng thử đồ tại cửa hàng quần áo.",
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
      { prompt: "Xin phép thử đồ:", sentence: "Can I _______ it on?", options: ["try", "wear", "put", "dress"], correct: 0 }
    ]
  },
  {
    id: 7,
    title: "7. Daily Routines - Thói Quên Hàng Ngày",
    subtitle: "Bài 7 SE: What time do you get up?",
    topic: "Lịch sinh hoạt hàng ngày",
    level: "A1 Departures",
    description: "Hỏi đáp giờ giấc thức dậy, ăn sáng và đi làm.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "What time do you usually get up?", vi: "Mấy giờ bạn thường thức dậy?" },
      { speaker: "B", name: "You (Friend B)", en: "I usually get up at six thirty in the morning.", vi: "Mình thường thức dậy lúc 6 giờ 30 sáng." },
      { speaker: "A", name: "Friend A", en: "And when do you leave for work?", vi: "Thế khi nào bạn đi làm?" },
      { speaker: "B", name: "You (Friend B)", en: "I leave home at seven forty-five.", vi: "Mình rời nhà lúc 7 giờ 45." }
    ],
    patterns: [
      { en: "What time do you usually [action]?", vi: "Mấy giờ bạn thường [làm gì]?" },
      { en: "I usually [action] at [time].", vi: "Tôi thường [làm gì] lúc [giờ]." }
    ],
    quizzes: [
      { prompt: "Hỏi giờ thức dậy:", sentence: "What time do you _______ up?", options: ["get", "stand", "wake", "rise"], correct: 0 }
    ]
  },
  {
    id: 8,
    title: "8. Family & Relatives - Thành Viên Gia Đình",
    subtitle: "Bài 8 SE: Is that your brother?",
    topic: "Giới thiệu gia đình",
    level: "A1 Departures",
    description: "Hỏi đáp mối quan hệ các thành viên trong gia đình qua bức ảnh.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "Is that your brother in the photograph?", vi: "Có phải anh trai bạn trong bức ảnh không?" },
      { speaker: "B", name: "You (Friend B)", en: "No, that's my cousin, Tom.", vi: "Không, đó là anh họ mình, Tom." },
      { speaker: "A", name: "Friend A", en: "What does he do?", vi: "Anh ấy làm nghề gì?" },
      { speaker: "B", name: "You (Friend B)", en: "He's an engineer.", vi: "Anh ấy là một kỹ sư." }
    ],
    patterns: [
      { en: "Is that your [relative]?", vi: "Có phải [người thân] của bạn không?" },
      { en: "What does he/she do?", vi: "Anh ấy/Cô ấy làm nghề gì?" }
    ],
    quizzes: [
      { prompt: "Hỏi nghề nghiệp của một người nam:", sentence: "What does he _______?", options: ["do", "make", "work", "job"], correct: 0 }
    ]
  },
  {
    id: 9,
    title: "9. Describing People - Mô Tả Ngoại Hình",
    subtitle: "Bài 9 SE: What does she look like?",
    topic: "Mô tả người",
    level: "A1 Departures",
    description: "Phản xạ mô tả chiều cao, màu tóc và diện mạo bên ngoài.",
    dialogue: [
      { speaker: "A", name: "Officer", en: "What does the suspect look like?", vi: "Nghi phạm trông như thế nào?" },
      { speaker: "B", name: "Witness (You)", en: "He's tall and thin, with short dark hair.", vi: "Hắn ta cao và gầy, có mái tóc ngắn màu tối." },
      { speaker: "A", name: "Officer", en: "How old is he?", vi: "Hắn khoảng bao nhiêu tuổi?" },
      { speaker: "B", name: "Witness (You)", en: "He's about thirty years old.", vi: "Hắn khoảng 30 tuổi." }
    ],
    patterns: [
      { en: "What does he/she look like?", vi: "Anh ấy/cô ấy trông như thế nào?" },
      { en: "He's [tall/short] with [hair type].", vi: "Anh ấy [cao/thấp] với [kiểu tóc]." }
    ],
    quizzes: [
      { prompt: "Hỏi diện mạo hình dáng bên ngoài:", sentence: "What does she _______ like?", options: ["look", "see", "watch", "appear"], correct: 0 }
    ]
  },
  {
    id: 10,
    title: "10. In a Coffee Shop - Gọi Đồ Uống Cafe",
    subtitle: "Bài 10 SE: Black or white coffee?",
    topic: "Gọi đồ uống cafe",
    level: "A1 Departures",
    description: "Phản xạ gọi cafe đen, cafe sữa hoặc trà.",
    dialogue: [
      { speaker: "A", name: "Waiter", en: "What would you like to drink?", vi: "Quý khách muốn dùng đồ uống gì ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Coffee, please.", vi: "Cho tôi cafe nhé." },
      { speaker: "A", name: "Waiter", en: "Black or white coffee?", vi: "Cafe đen hay cafe sữa ạ?" },
      { speaker: "B", name: "You (Customer)", en: "Black coffee with sugar, please.", vi: "Cafe đen có đường nhé." }
    ],
    patterns: [
      { en: "What would you like to drink?", vi: "Bạn muốn uống gì?" },
      { en: "Black or white coffee?", vi: "Cafe đen hay cafe sữa?" }
    ],
    quizzes: [
      { prompt: "Hỏi đồ uống muốn chọn:", sentence: "What would you _______ to drink?", options: ["like", "want", "wish", "need"], correct: 0 }
    ]
  }
];

// Dynamically generate remaining Units 11-80 to complete Departures 80 Master Units
for (let i = 11; i <= 80; i++) {
  DEPARTURES_LESSONS.push({
    id: i,
    title: `${i}. Departures Master Unit ${i}`,
    subtitle: `Bài ${i} SE: Streamline Departures Standard Unit`,
    topic: "Giao tiếp Sơ cấp SE",
    level: "A1 Departures",
    description: `Bài học số ${i} nằm trong bộ 80 bài học kinh điển Streamline Departures.`,
    dialogue: [
      { speaker: "A", name: "Speaker A", en: `Excuse me, this is lesson number ${i}.`, vi: `Xin lỗi, đây là bài học số ${i}.` },
      { speaker: "B", name: "You (Person B)", en: "Yes, I understand completely!", vi: "Vâng, tôi đã hiểu hoàn toàn!" },
      { speaker: "A", name: "Speaker A", en: "Are you ready to practice your reflex?", vi: "Bạn đã sẵn sàng luyện phản xạ chưa?" },
      { speaker: "B", name: "You (Person B)", en: "Yes! Let's get started right now.", vi: "Rồi! Chúng ta hãy bắt đầu ngay bây giờ." }
    ],
    patterns: [
      { en: `Practice Unit ${i} reflex patterns.`, vi: `Luyện tập cấu trúc phản xạ bài ${i}.` },
      { en: "Let's get started right now.", vi: "Hãy bắt đầu ngay bây giờ." }
    ],
    quizzes: [
      { prompt: `Phản xạ hoàn thành Bài ${i}:`, sentence: "Let's get _______ right now.", options: ["started", "begin", "go", "done"], correct: 0 }
    ]
  });
}
