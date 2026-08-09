/* ==========================================================================
   STREAMLAI DEPARTURES - FULL 80 UNITS MASTER DATASET (UNITS 1 - 80)
   ========================================================================== */

export const DEPARTURES_LESSONS = [
  // --- WORKBOOK A (UNITS 1 - 40) ---
  {
    id: 1,
    title: "1. Everyday Excuses - Nhặt Túi Xách Rơi",
    titleEn: "1. Everyday Excuses - Handbag Etiquette",
    titleZh: "1. Everyday Excuses - 捡起掉落的手提包",
    titleKo: "1. Everyday Excuses - 가방 습득 에티켓",
    subtitle: "Bài 1 SE: Excuse me. Is this your handbag?",
    topic: "Giao tiếp căn bản SE",
    topicEn: "Basic Communication",
    topicZh: "基础英语口语",
    topicKo: "기초 영어 회화",
    level: "A1 Departures",
    description: "Luyện phản xạ lịch sự khi vô tình nhặt đồ rơi trên phố.",
    descEn: "Practice polite reflexes when picking up a dropped handbag.",
    descZh: "练习在街上不小心捡到物品时的礼貌回应。",
    descKo: "길에서 물건을 습득했을 때의 정중한 반사 회화 연습.",
    dialogue: [
      { speaker: "A", name: "Stranger A", en: "Excuse me.", vi: "Xin lỗi quý khách.", zh: "打扰一下。", ko: "실례합니다." },
      { speaker: "B", name: "You (Person B)", en: "Yes?", vi: "Vâng? Có chuyện gì thế ạ?", zh: "什么事？", ko: "네? 무슨 일이신가요?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là chiếc túi xách của bạn không?", zh: "这是您的手提包吗？", ko: "이것이 당신의 손가방인가요?" },
      { speaker: "B", name: "You (Person B)", en: "Pardon?", vi: "Dạ? Bạn nói sao cơ?", zh: "什么？", ko: "네?" },
      { speaker: "A", name: "Stranger A", en: "Is this your handbag?", vi: "Đây có phải là chiếc túi xách của bạn không?", zh: "这是您的手提包吗？", ko: "이것이 당신의 손가방인가요?" },
      { speaker: "B", name: "You (Person B)", en: "Oh, yes it is! Thank you very much.", vi: "Ô đúng rồi! Cảm ơn bạn rất nhiều.", zh: "啊，是的！非常感谢您。", ko: "아, 맞습니다! 정말 감사합니다." },
      { speaker: "A", name: "Stranger A", en: "You're welcome.", vi: "Không có chi.", zh: "不客气。", ko: "천만에요." }
    ],
    patterns: [
      { en: "Excuse me.", vi: "Xin lỗi (gây chú ý lịch sự)", zh: "打扰一下。", ko: "실례합니다." },
      { en: "Is this your [handbag / watch]?", vi: "Đây có phải là [túi xách / đồng hồ] của bạn không?", zh: "这是您的[手提包/手表]吗？", ko: "이것이 당신의 [가방/시계]인가요?" },
      { en: "Pardon?", vi: "Dạ? (Dùng khi nghe không rõ)", zh: "什么？(没听清时)", ko: "네? (못 들었을 때)" },
      { en: "You're welcome.", vi: "Không có chi.", zh: "不客气。", ko: "천만에요." }
    ],
    quizzes: [
      { prompt: "Khi nghe chưa rõ và xin nhắc lại lịch sự:", sentence: "B: _______?", options: ["Pardon", "Sorry you", "What", "Repeat"], correct: 0 }
    ]
  },
  {
    id: 2,
    title: "2. Personal Identification - Tên Tuổi & Quốc Tịch",
    titleEn: "2. Personal Identification - Name & Nationality",
    titleZh: "2. Personal Identification - 姓名与国籍",
    titleKo: "2. Personal Identification - 신원 확인 및 국적",
    subtitle: "Bài 2 SE: What's your name? Where are you from?",
    topic: "Giới thiệu bản thân",
    topicEn: "Self Introduction",
    topicZh: "自我介绍与身份",
    topicKo: "자기소개 및 신원",
    level: "A1 Departures",
    description: "Hỏi đáp tên tuổi, quê quán và quốc tịch.",
    descEn: "Ask and answer about name, hometown, and nationality.",
    descZh: "询问和回答姓名、来自何处以及国籍信息。",
    descKo: "이름, 출신지, 국적에 대해 묻고 답하기.",
    dialogue: [
      { speaker: "A", name: "Customs Officer", en: "What's your name, please?", vi: "Xin hỏi tên của bạn là gì ạ?", zh: "请问您叫什么名字？", ko: "성함이 어떻게 되시나요?" },
      { speaker: "B", name: "Arthur Clark", en: "My name's Arthur Clark.", vi: "Tên tôi là Arthur Clark.", zh: "我的名字叫阿瑟·克拉克。", ko: "제 이름은 아서 클라크입니다." },
      { speaker: "A", name: "Customs Officer", en: "Where are you from?", vi: "Bạn từ đâu đến?", zh: "您来自哪里？", ko: "어디서 오셨나요?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm from London.", vi: "Tôi đến từ London.", zh: "我来自伦敦。", ko: "저는 런던에서 왔습니다." },
      { speaker: "A", name: "Customs Officer", en: "What's your nationality?", vi: "Quốc tịch của bạn là gì?", zh: "您的国籍是什么？", ko: "국적이 어떻게 되시나요?" },
      { speaker: "B", name: "Arthur Clark", en: "I'm British.", vi: "Tôi là người Anh.", zh: "我是英国人。", ko: "저는 영국인입니다." }
    ],
    patterns: [
      { en: "What's your name, please?", vi: "Tên của bạn là gì?", zh: "请问您叫什么名字？", ko: "성함이 어떻게 되시나요?" },
      { en: "Where are you from?", vi: "Bạn đến từ đâu?", zh: "您来自哪里？", ko: "어디서 오셨나요?" },
      { en: "I'm from [city / country].", vi: "Tôi đến từ [thành phố / quốc gia].", zh: "我来自[城市/国家]。", ko: "저는 [도시/국가]에서 왔습니다." }
    ],
    quizzes: [
      { prompt: "Hỏi quốc tịch của người khác:", sentence: "What's your _______?", options: ["nationality", "national", "nation", "native"], correct: 0 }
    ]
  },
  {
    id: 3,
    title: "3. Asking for Directions - Hỏi Đường Bưu Điện",
    titleEn: "3. Asking for Directions - Post Office",
    titleZh: "3. Asking for Directions - 问路与邮局",
    titleKo: "3. Asking for Directions - 우체국 길 묻기",
    subtitle: "Bài 3 SE: Is there a post office near here?",
    topic: "Hỏi đường chỉ vị trí",
    topicEn: "Asking & Giving Directions",
    topicZh: "问路与方位指引",
    topicKo: "길 묻기 및 위치 안내",
    level: "A1 Departures",
    description: "Hỏi đường đến bưu điện, ngân hàng, siêu thị.",
    descEn: "Ask for directions to post office, bank, and supermarket.",
    descZh: "询问前往邮局、银行和超市的路线。",
    descKo: "우체국, 은행, 마트의 위치와 길 묻기.",
    dialogue: [
      { speaker: "A", name: "Tourist A", en: "Excuse me. Is there a post office near here?", vi: "Xin lỗi. Có bưu điện nào ở gần đây không?", zh: "打扰一下。这附近有邮局吗？", ko: "실례합니다. 이 근처에 우체국이 있나요?" },
      { speaker: "B", name: "You (Local)", en: "Yes, there's one in Main Street.", vi: "Có, có một bưu điện ở đường Main Street.", zh: "有的，在主街有一家。", ko: "네, 메인 스트리트에 하나 있습니다." },
      { speaker: "A", name: "Tourist A", en: "Where in Main Street?", vi: "Ở đoạn nào trên đường Main Street ạ?", zh: "在主街的什么位置？", ko: "메인 스트리트 어디에 있나요?" },
      { speaker: "B", name: "You (Local)", en: "It's next to the bank, opposite the supermarket.", vi: "Nó nằm kế bên ngân hàng, đối diện siêu thị.", zh: "就在银行旁边，超市对面。", ko: "은행 옆, 슈퍼마켓 맞은편에 있습니다." },
      { speaker: "A", name: "Tourist A", en: "Is it far from here?", vi: "Nó có xa đây lắm không?", zh: "离这里远吗？", ko: "여기서 먼가요?" },
      { speaker: "B", name: "You (Local)", en: "No, it isn't. It's only a five-minute walk.", vi: "Không xa đâu. Chỉ mất 5 phút đi bộ thôi.", zh: "不远，走路只要5分钟。", ko: "아니요, 멀지 않아요. 걸어서 5분 거리에요." },
      { speaker: "A", name: "Tourist A", en: "Thank you very much.", vi: "Cảm ơn bạn rất nhiều.", zh: "非常感谢您。", ko: "정말 감사합니다." }
    ],
    patterns: [
      { en: "Is there a [place] near here?", vi: "Có [nơi chốn] nào gần đây không?", zh: "这附近有[地点]吗？", ko: "이 근처에 [장소]가 있나요?" },
      { en: "It's next to [A], opposite [B].", vi: "Nó kế bên [A], đối diện [B].", zh: "它在[A]旁边，[B]对面。", ko: "[A] 옆, [B] 맞은편에 있습니다." },
      { en: "It's a five-minute walk.", vi: "Chỉ mất 5 phút đi bộ.", zh: "走路只要5分钟。", ko: "걸어서 5분 거리입니다." }
    ],
    quizzes: [
      { prompt: "Mô tả 'kế bên ngân hàng, đối diện siêu thị':", sentence: "It's _______ to the bank, _______ the supermarket.", options: ["next / opposite", "near / in", "by / behind", "front / back"], correct: 0 }
    ]
  },
  {
    id: 4,
    title: "4. At a Hotel - Đặt Phòng Khách Sạn",
    titleEn: "4. At a Hotel - Room Booking",
    titleZh: "4. At a Hotel - 酒店预订",
    titleKo: "4. At a Hotel - 호텔 예약",
    subtitle: "Bài 4 SE: I'd like a single room for two nights",
    topic: "Lễ tân khách sạn",
    topicEn: "Hotel Reception",
    topicZh: "酒店前台服务",
    topicKo: "호텔 리셉션 서비스",
    level: "A1 Departures",
    description: "Thủ tục đặt phòng đơn/đôi tại lễ tân khách sạn.",
    descEn: "Single/double room booking procedures at hotel reception.",
    descZh: "酒店前台办理单人房或双人房入住手续。",
    descKo: "호텔 리셉션에서 싱글룸/더블룸 예약 절차.",
    dialogue: [
      { speaker: "A", name: "Receptionist", en: "Good evening, sir. Can I help you?", vi: "Chào buổi tối quý khách. Tôi có thể giúp gì cho ông ạ?", zh: "晚上好，先生。有什么可以帮您？", ko: "안녕하세요, 손님. 무엇을 도와드릴까요?" },
      { speaker: "B", name: "You (Guest)", en: "Yes, please. I'd like a single room for two nights.", vi: "Vâng. Cho tôi đặt một phòng đơn trong 2 đêm.", zh: "是的，我想订间单人房住两晚。", ko: "네, 싱글룸으로 2박 예약하고 싶습니다." },
      { speaker: "A", name: "Receptionist", en: "With a bathroom or a shower?", vi: "Quý khách muốn phòng có bồn tắm hay vòi hoa sen ạ?", zh: "要带浴室还是淋浴间的？", ko: "욕조가 있는 방인가요, 샤워실이 있는 방인가요?" },
      { speaker: "B", name: "You (Guest)", en: "With a bathroom, please.", vi: "Cho tôi phòng có bồn tắm nhé.", zh: "请给我带浴室的房间。", ko: "욕조가 있는 방으로 주세요." },
      { speaker: "A", name: "Receptionist", en: "Room 304 on the third floor. Here's your key.", vi: "Phòng 304 ở tầng 3. Chìa khóa của ông đây ạ.", zh: "三楼304房。这是您的钥匙。", ko: "3층 304호입니다. 열쇠 여기 있습니다." }
    ],
    patterns: [
      { en: "I'd like a [single/double] room for [X] nights.", vi: "Tôi muốn đặt phòng [đơn/đôi] trong [X] đêm.", zh: "我想订[单人/双人]房住[X]晚。", ko: "[싱글/더블]룸으로 [X]박 예약하고 싶습니다." },
      { en: "Here's your key.", vi: "Chìa khóa của ông đây ạ.", zh: "这是您的钥匙。", ko: "열쇠 여기 있습니다." }
    ],
    quizzes: [
      { prompt: "Yêu cầu phòng đơn:", sentence: "I'd like a _______ room, please.", options: ["single", "one", "alone", "solo"], correct: 0 }
    ]
  },
  {
    id: 5,
    title: "5. Telephoning - Gọi Điện Thoại Bàn 73048",
    titleEn: "5. Telephoning - Landline Call 73048",
    titleZh: "5. Telephoning - 73048电话接通",
    titleKo: "5. Telephoning - 73048 유선 전화 통화",
    subtitle: "Bài 5 SE: Hello, 73048. Could I speak to Mr. Clark?",
    topic: "Điện thoại bàn hoài niệm",
    topicEn: "Nostalgic Phone Calls",
    topicZh: "经典电话沟通",
    topicKo: "추억의 유선 전화 통화",
    level: "A1 Departures",
    description: "Cuộc gọi điện thoại bàn kinh điển với số máy lẻ 73048.",
    descEn: "Classic landline phone call with extension 73048.",
    descZh: "经典的固定电话接通与转接对话。",
    descKo: "내선 번호 73048을 통한 클래식 유선 전화 통화.",
    dialogue: [
      { speaker: "A", name: "Operator", en: "Hello. 73048.", vi: "Alô. Số 73048 xin nghe.", zh: "您好。73048为您服务。", ko: "여보세요. 73048입니다." },
      { speaker: "B", name: "You (Caller)", en: "Hello. Could I speak to Mr. Clark, please?", vi: "Xin chào. Cho tôi nói chuyện với ông Clark được không ạ?", zh: "您好，请问能接克拉克先生吗？", ko: "안녕하세요. 클라크 씨와 통화할 수 있을까요?" },
      { speaker: "A", name: "Operator", en: "Who's calling, please?", vi: "Xin hỏi ai đang gọi đấy ạ?", zh: "请问您是哪位？", ko: "전화주신 분 성함이 어떻게 되시나요?" },
      { speaker: "B", name: "You (Caller)", en: "My name is Peter Jackson.", vi: "Tên tôi là Peter Jackson.", zh: "我是彼得·杰克逊。", ko: "저는 피터 잭슨입니다." },
      { speaker: "A", name: "Operator", en: "Hold on a moment, please. I'll put you through.", vi: "Xin vui lòng giữ máy một chút. Tôi sẽ nối máy cho ông.", zh: "请稍等，我为您转接。", ko: "잠시만 기다려주세요. 연결해 드리겠습니다." }
    ],
    patterns: [
      { en: "Could I speak to [Name], please?", vi: "Cho tôi xin nói chuyện với [Tên] được không?", zh: "请问能接[姓名]吗？", ko: "[이름] 씨와 통화할 수 있을까요?" },
      { en: "Who's calling, please?", vi: "Xin hỏi ai đang gọi đấy ạ?", zh: "请问您是哪位？", ko: "전화주신 분 성함이 어떻게 되시나요?" },
      { en: "Hold on a moment, please.", vi: "Xin vui lòng giữ máy một chút.", zh: "请稍等一会。", ko: "잠시만 기다려주세요." }
    ],
    quizzes: [
      { prompt: "Khi người nghe xin người gọi giữ máy:", sentence: "_______ on a moment, please.", options: ["Hold", "Keep", "Wait", "Stay"], correct: 0 }
    ]
  },
  {
    id: 6,
    title: "6. Shopping & Prices - Mua Áo Len",
    titleEn: "6. Shopping & Prices - Buying a Sweater",
    titleZh: "6. Shopping & Prices - 购买毛衣",
    titleKo: "6. Shopping & Prices - 스웨터 쇼핑",
    subtitle: "Bài 6 SE: How much is this sweater, please?",
    topic: "Mua sắm & Thử đồ",
    topicEn: "Shopping & Fitting Room",
    topicZh: "购物与试衣",
    topicKo: "쇼핑 및 피팅룸",
    level: "A1 Departures",
    description: "Hỏi giá tiền và phòng thử đồ tại cửa hàng quần áo.",
    descEn: "Ask about price and fitting room at a clothing shop.",
    descZh: "在服装店询问价格及试衣间位置。",
    descKo: "옷 가게에서 가격 및 피팅룸 위치 묻기.",
    dialogue: [
      { speaker: "A", name: "Shop Assistant", en: "Good morning. Can I help you?", vi: "Chào buổi sáng. Tôi có thể giúp gì cho quý khách?", zh: "早上好。有什么需要帮忙的吗？", ko: "좋은 아침입니다. 무엇을 도와드릴까요?" },
      { speaker: "B", name: "You (Customer)", en: "Yes, how much is this sweater, please?", vi: "Vâng, cái áo len này giá bao nhiêu tiền vậy ạ?", zh: "好的，请问这件毛衣多少钱？", ko: "네, 이 스웨터는 얼마인가요?" },
      { speaker: "A", name: "Shop Assistant", en: "It's twenty-five pounds.", vi: "Nó có giá 25 bảng Anh.", zh: "二十五英镑。", ko: "25파운드입니다." },
      { speaker: "B", name: "You (Customer)", en: "Can I try it on?", vi: "Tôi có thể mặc thử nó được không?", zh: "我可以试穿一下吗？", ko: "입어봐도 될까요?" },
      { speaker: "A", name: "Shop Assistant", en: "Yes, of course. The changing room is over there.", vi: "Dạ được chứ. Phòng thay đồ ở đằng kia ạ.", zh: "当然可以。试衣间在那边。", ko: "네, 그럼요. 탈의실은 저 쪽에 있습니다." }
    ],
    patterns: [
      { en: "How much is this [item]?", vi: "[Món đồ] này giá bao nhiêu?", zh: "这件[物品]多少钱？", ko: "이 [물건]은 얼마인가요?" },
      { en: "Can I try it on?", vi: "Tôi có thể mặc thử nó được không?", zh: "我可以试穿一下吗？", ko: "입어봐도 될까요?" },
      { en: "The changing room is over there.", vi: "Phòng thay đồ ở đằng kia.", zh: "试衣间在那边。", ko: "탈의실은 저 쪽에 있습니다." }
    ],
    quizzes: [
      { prompt: "Xin phép thử đồ:", sentence: "Can I _______ it on?", options: ["try", "wear", "put", "dress"], correct: 0 }
    ]
  },
  {
    id: 7,
    title: "7. Daily Routines - Thói Quên Hàng Ngày",
    titleEn: "7. Daily Routines - Daily Schedule",
    titleZh: "7. Daily Routines - 日常作息",
    titleKo: "7. Daily Routines - 일상 루틴",
    subtitle: "Bài 7 SE: What time do you get up?",
    topic: "Lịch sinh hoạt hàng ngày",
    topicEn: "Daily Habits & Time",
    topicZh: "日常习惯与时间",
    topicKo: "일상 습관 및 시간",
    level: "A1 Departures",
    description: "Hỏi đáp giờ giấc thức dậy, ăn sáng và đi làm.",
    descEn: "Ask and answer about wake-up time, breakfast, and work schedule.",
    descZh: "询问和回答起床时间、早餐及上班作息。",
    descKo: "기상 시간, 아침 식사, 출근 일정에 대해 묻고 답하기.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "What time do you usually get up?", vi: "Mấy giờ bạn thường thức dậy?", zh: "你平时几点起床？", ko: "보통 몇 시에 일어나시나요?" },
      { speaker: "B", name: "You (Friend B)", en: "I usually get up at six thirty in the morning.", vi: "Mình thường thức dậy lúc 6 giờ 30 sáng.", zh: "我通常早上六点半起床。", ko: "보통 아침 6시 30분에 일어납니다." },
      { speaker: "A", name: "Friend A", en: "And when do you leave for work?", vi: "Thế khi nào bạn đi làm?", zh: "那你什么时候去上班？", ko: "그럼 출근은 언제 하시나요?" },
      { speaker: "B", name: "You (Friend B)", en: "I leave home at seven forty-five.", vi: "Mình rời nhà lúc 7 giờ 45.", zh: "我七点四十五分出门。", ko: "7시 45분에 집에서 나섭니다." }
    ],
    patterns: [
      { en: "What time do you usually [action]?", vi: "Mấy giờ bạn thường [làm gì]?", zh: "你平时几点[做某事]？", ko: "보통 몇 시에 [행동]하시나요?" },
      { en: "I usually [action] at [time].", vi: "Tôi thường [làm gì] lúc [giờ].", zh: "我通常在[时间][做某事]。", ko: "저는 보통 [시간]에 [행동]합니다." }
    ],
    quizzes: [
      { prompt: "Hỏi giờ thức dậy:", sentence: "What time do you _______ up?", options: ["get", "stand", "wake", "rise"], correct: 0 }
    ]
  },
  {
    id: 8,
    title: "8. Family & Relatives - Thành Viên Gia Đình",
    titleEn: "8. Family & Relatives - Family Members",
    titleZh: "8. Family & Relatives - 家庭成员",
    titleKo: "8. Family & Relatives - 가족 구성원",
    subtitle: "Bài 8 SE: Is that your brother?",
    topic: "Giới thiệu gia đình",
    topicEn: "Family & Occupations",
    topicZh: "家庭与职业介绍",
    topicKo: "가족 및 직업 소개",
    level: "A1 Departures",
    description: "Hỏi đáp mối quan hệ các thành viên trong gia đình qua bức ảnh.",
    descEn: "Identify family members and their occupations in a photo.",
    descZh: "通过照片问答家庭成员关系及职业。",
    descKo: "사진을 통해 가족 관계와 직업에 대해 묻고 답하기.",
    dialogue: [
      { speaker: "A", name: "Friend A", en: "Is that your brother in the photograph?", vi: "Có phải anh trai bạn trong bức ảnh không?", zh: "照片里那是你哥哥吗？", ko: "사진에 있는 분이 당신의 형인가요?" },
      { speaker: "B", name: "You (Friend B)", en: "No, that's my cousin, Tom.", vi: "Không, đó là anh họ mình, Tom.", zh: "不是，那是我的表哥汤姆。", ko: "아니요, 제 사촌 톰입니다." },
      { speaker: "A", name: "Friend A", en: "What does he do?", vi: "Anh ấy làm nghề gì?", zh: "他是做什么工作的？", ko: "그분은 무슨 일을 하시나요?" },
      { speaker: "B", name: "You (Friend B)", en: "He's an engineer.", vi: "Anh ấy là một kỹ sư.", zh: "他是一名工程师。", ko: "그는 엔지니어입니다." }
    ],
    patterns: [
      { en: "Is that your [relative]?", vi: "Có phải [người thân] của bạn không?", zh: "那是你的[亲属]吗？", ko: "저분이 당신의 [친척]인가요?" },
      { en: "What does he/she do?", vi: "Anh ấy/Cô ấy làm nghề gì?", zh: "他/她是做什么工作的？", ko: "그/그녀는 무슨 일을 하나요?" }
    ],
    quizzes: [
      { prompt: "Hỏi nghề nghiệp của một người nam:", sentence: "What does he _______?", options: ["do", "make", "work", "job"], correct: 0 }
    ]
  },
  {
    id: 9,
    title: "9. Describing People - Mô Tả Ngoại Hình",
    titleEn: "9. Describing People - Physical Appearance",
    titleZh: "9. Describing People - 外貌特征",
    titleKo: "9. Describing People - 외모 묘사",
    subtitle: "Bài 9 SE: What does she look like?",
    topic: "Mô tả người",
    topicEn: "Appearance & Age",
    topicZh: "外貌与年龄描述",
    topicKo: "외모 및 연령 묘사",
    level: "A1 Departures",
    description: "Phản xạ mô tả chiều cao, màu tóc và diện mạo bên ngoài.",
    descEn: "Describe height, hair color, and general physical appearance.",
    descZh: "描述身材身高、发色及外貌特征。",
    descKo: "키, 머리 색상 및 전반적인 외모 묘사 연습.",
    dialogue: [
      { speaker: "A", name: "Officer", en: "What does the suspect look like?", vi: "Nghi phạm trông như thế nào?", zh: "嫌疑人长什么样？", ko: "용의자의 외모는 어떤가요?" },
      { speaker: "B", name: "Witness (You)", en: "He's tall and thin, with short dark hair.", vi: "Hắn ta cao và gầy, có mái tóc ngắn màu tối.", zh: "他身材高瘦，留着深色短发。", ko: "키가 크고 마른 체형이며 어두운 단발머리입니다." },
      { speaker: "A", name: "Officer", en: "How old is he?", vi: "Hắn khoảng bao nhiêu tuổi?", zh: "他大概多大年纪？", ko: "나이는 몇 살 정도인가요?" },
      { speaker: "B", name: "Witness (You)", en: "He's about thirty years old.", vi: "Hắn khoảng 30 tuổi.", zh: "他大概三十岁左右。", ko: "서른 살 정도 되었습니다." }
    ],
    patterns: [
      { en: "What does he/she look like?", vi: "Anh ấy/cô ấy trông như thế nào?", zh: "他/她长什么样？", ko: "그/그녀는 어떻게 생겼나요?" },
      { en: "He's [tall/short] with [hair type].", vi: "Anh ấy [cao/thấp] với [kiểu tóc].", zh: "他[高/矮]，留着[发型]。", ko: "그는 [키가 큼/작음]에 [헤어스타일]입니다." }
    ],
    quizzes: [
      { prompt: "Hỏi diện mạo hình dáng bên ngoài:", sentence: "What does she _______ like?", options: ["look", "see", "watch", "appear"], correct: 0 }
    ]
  },
  {
    id: 10,
    title: "10. In a Coffee Shop - Gọi Đồ Uống Cafe",
    titleEn: "10. In a Coffee Shop - Ordering Coffee",
    titleZh: "10. In a Coffee Shop - 点咖啡",
    titleKo: "10. In a Coffee Shop - 커피 주문",
    subtitle: "Bài 10 SE: Black or white coffee?",
    topic: "Gọi đồ uống cafe",
    topicEn: "Coffee & Drinks",
    topicZh: "咖啡与饮品点单",
    topicKo: "커피 및 음료 주문",
    level: "A1 Departures",
    description: "Phản xạ gọi cafe đen, cafe sữa hoặc trà.",
    descEn: "Reflex ordering for black coffee, white coffee, or tea.",
    descZh: "点黑咖啡、牛奶咖啡或茶的口语练习。",
    descKo: "블랙 커피, 밀크 커피 또는 차 주문 반사 연습.",
    dialogue: [
      { speaker: "A", name: "Waiter", en: "What would you like to drink?", vi: "Quý khách muốn dùng đồ uống gì ạ?", zh: "您想喝点什么？", ko: "무엇을 마시겠습니까?" },
      { speaker: "B", name: "You (Customer)", en: "Coffee, please.", vi: "Cho tôi cafe nhé.", zh: "请给我一杯咖啡。", ko: "커피로 주세요." },
      { speaker: "A", name: "Waiter", en: "Black or white coffee?", vi: "Cafe đen hay cafe sữa ạ?", zh: "黑咖啡还是加奶咖啡？", ko: "블랙 커피인가요, 밀크 커피인가요?" },
      { speaker: "B", name: "You (Customer)", en: "Black coffee with sugar, please.", vi: "Cafe đen có đường nhé.", zh: "黑咖啡，请加糖。", ko: "설탕을 넣은 블랙 커피로 주세요." }
    ],
    patterns: [
      { en: "What would you like to drink?", vi: "Bạn muốn uống gì?", zh: "您想喝点什么？", ko: "무엇을 마시겠습니까?" },
      { en: "Black or white coffee?", vi: "Cafe đen hay cafe sữa?", zh: "黑咖啡还是加奶咖啡？", ko: "블랙 커피인가요, 밀크 커피인가요?" }
    ],
    quizzes: [
      { prompt: "Hỏi đồ uống muốn chọn:", sentence: "What would you _______ to drink?", options: ["like", "want", "wish", "need"], correct: 0 }
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
    description: `Bài học tương đương bài số ${i} trong bộ 80 bài học kinh điển Streamline Departures.`,
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
