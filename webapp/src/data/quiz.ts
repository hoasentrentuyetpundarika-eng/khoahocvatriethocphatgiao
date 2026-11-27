export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint: string;
  memory: string;
  difficulty?: string;
}

export const quizzes: Record<string, QuizQuestion[]> = {
  "week1": [
    {
      "id": "w1_1",
      "text": "Cách trình bày nào đúng về nội dung chính của bốn tập trong bộ Khoa học và Triết học Phật giáo Tổng tập?",
      "options": [
        "Tập 1 nói về thế giới vật chất, Tập 2 nói về tâm thức, còn Tập 3 và Tập 4 thuộc Triết học Phật giáo.",
        "Tập 1 và Tập 2 chỉ nói về Pháp hành, còn Tập 3 và Tập 4 chỉ nói về khoa học tự nhiên hiện đại.",
        "Tập 1 nói về tâm thức, Tập 2 nói về thế giới vật chất, còn hai tập sau chỉ trình bày nghi lễ tôn giáo.",
        "Cả bốn tập đều chỉ giải thích thế giới vật chất và không đề cập tâm thức hay quan điểm triết học."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu Tuần 1 nêu Tập 1 giải thích thế giới vật chất, Tập 2 nói về tâm thức, còn Tập 3 và Tập 4 thuộc Triết học Phật giáo. Cấu trúc này cho thấy bộ sách đi từ Khoa học Phật giáo đến Triết học Phật giáo.",
      "hint": "Hãy phân biệt thế giới vật chất, tâm thức và phần Triết học Phật giáo.",
      "memory": "Tập 1: thế giới vật chất; Tập 2: tâm thức; Tập 3–4: Triết học Phật giáo.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_2",
      "text": "Ba phạm trù của Phật giáo được trình bày trong bài là gì?",
      "options": [
        "Khoa học tự nhiên, lịch sử tôn giáo và những nghi lễ thuộc các truyền thống khác nhau.",
        "Khoa học Phật giáo, Triết học Phật giáo và Phật giáo Thực hành (Pháp hành).",
        "Thế giới vật chất, công nghệ hiện đại và phương pháp tổ chức đời sống xã hội.",
        "Kinh tạng, Luận tạng và toàn bộ các tín ngưỡng đang tồn tại trên thế giới."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Đức Đạt Lai Lạt Ma đã tích chiết nội dung lời Phật dạy thành Khoa học Phật giáo, Triết học Phật giáo và Phật giáo Thực hành, tức Pháp hành. Ba phạm trù này có chức năng khác nhau nhưng liên hệ theo một tiến trình.",
      "hint": "Ba phạm trù tương ứng với tri thức, quan điểm và sự áp dụng.",
      "memory": "Ba phạm trù: Khoa học Phật giáo – Triết học Phật giáo – Pháp hành.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_3",
      "text": "Nhận định nào đúng về điều kiện để học nội dung Tập 1?",
      "options": [
        "Người học phải chấp nhận trước mọi quan điểm triết học rồi mới được khảo sát thực tại.",
        "Chỉ người đã quy y Tam bảo và thực hành nghi lễ mới được tìm hiểu nội dung của tập này.",
        "Không đòi hỏi người học phải tin giáo pháp của Đức Phật hay phát tâm quy y Tam bảo.",
        "Chỉ những người không có tín ngưỡng mới có thể tiếp cận phần khoa học của tập sách."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tập 1 không đòi hỏi đức tin vào giáo pháp của Đức Phật hay phát tâm quy y Tam bảo. Tập này đứng trên góc độ khách quan để diễn tả thực tại và sự thật về sự tồn tại của các pháp.",
      "hint": "Tập 1 được trình bày dưới góc độ khoa học khách quan, không chú trọng Pháp hành.",
      "memory": "Tập 1 thuộc khoa học và không lấy đức tin hay quy y làm điều kiện học tập.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_4",
      "text": "Tiến trình tiếp cận nào phù hợp với bài học?",
      "options": [
        "Chú trọng nghi lễ trước, bỏ qua khoa học, rồi đánh giá các pháp theo sự yêu thích của riêng mình.",
        "Thực hành theo cảm tính trước, lựa chọn một tín ngưỡng, rồi mới xem xét thực tại nếu thấy cần thiết trong đời sống.",
        "Hiểu thực tại và sự thật trước, thấy sự khác biệt giữa các tư tưởng triết học, rồi liên hệ đến Pháp hành.",
        "Phát triển công nghệ trước, phủ nhận tâm thức, rồi xem mọi quan điểm triết học là không cần thiết."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Người học cần hiểu thực tại và sự thật trước, sau đó nhận ra sự khác biệt giữa các tư tưởng triết học. Từ nền tảng ấy, người học mới liên hệ đến Pháp hành để áp dụng vào cuộc sống.",
      "hint": "Xác định thứ tự giữa thực tại, quan điểm triết học và sự áp dụng.",
      "memory": "Thực tại → quan điểm triết học → Pháp hành.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_5",
      "text": "Theo bài, hạnh phúc chân thật bắt nguồn chủ yếu từ đâu?",
      "options": [
        "Một tâm hồn an bình, khả năng làm chủ tâm thức và kiểm soát cảm xúc của chính mình.",
        "Điều kiện vật chất đầy đủ, sự thành đạt cao và danh tiếng được nhiều người công nhận.",
        "Năng lực điều khiển hoàn cảnh bên ngoài và thỏa mãn mọi sự yêu thích của cá nhân.",
        "Kiến thức kỹ thuật rộng nhưng không cần quan sát hay điều chỉnh trạng thái nội tâm."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Vật chất, sự thành đạt và danh tiếng không quyết định con người có thực sự hạnh phúc hay không. Hạnh phúc chân thật bắt nguồn từ tâm hồn an bình, khả năng làm chủ tâm thức và kiểm soát cảm xúc.",
      "hint": "Phân biệt những điều kiện bên ngoài với năng lực nội tâm.",
      "memory": "Hạnh phúc chân thật bắt nguồn từ nội tâm an bình và được làm chủ.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_6",
      "text": "Hai mục đích chính của Đức Đạt Lai Lạt Ma khi biên soạn bộ sách được trình bày như thế nào?",
      "options": [
        "Hoàn thiện giáo dục bằng Khoa học Tâm thức và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế cho nhân loại.",
        "Thay thế khoa học tự nhiên bằng nghi lễ và giới hạn việc học trong một cộng đồng đã có tín ngưỡng.",
        "Mở rộng công nghệ vật chất và lấy sự thành đạt bên ngoài làm nguồn duy nhất của hạnh phúc.",
        "Chỉ giải thích thế giới vật chất mà không quan tâm tâm thức hay những phẩm tính cao đẹp của con người trong đời sống nhân loại."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mục đích thứ nhất là bổ sung Khoa học Tâm thức để hệ thống giáo dục trở nên hoàn thiện hơn. Mục đích thứ hai là phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế cho nhân loại, gắn với tâm thương yêu và tâm từ bi.",
      "hint": "Một mục đích hướng đến hệ thống giáo dục; mục đích kia hướng đến tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế.",
      "memory": "Hai mục đích: hoàn thiện giáo dục bằng Khoa học Tâm thức; phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế.",
      "difficulty": "Dễ"
    },
    {
      "id": "w1_7",
      "text": "Sự khuyết thiếu chính của nền giáo dục hiện đại được nêu trong bài là gì?",
      "options": [
        "Thiếu kiến thức toán học, kỹ thuật và công nghệ hướng đến thế giới vật chất bên ngoài.",
        "Thiếu hiểu biết về tâm thức, bình an nội tâm và cách nuôi dưỡng tâm thiện lương.",
        "Thiếu phương pháp gia tăng danh tiếng và thỏa mãn mọi điều kiện vật chất của cá nhân.",
        "Thiếu khả năng cung cấp nhiều môn khoa học tự nhiên có nội dung chuyên môn rộng lớn."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Giáo dục hiện đại cung cấp tri thức rất rộng nhưng phần lớn hướng ngoại, như toán học, kỹ thuật và công nghệ. Phần còn thiếu là hiểu biết về tâm thức, bình an nội tâm, tâm thiện lương và hạnh phúc chân thật.",
      "hint": "Bài đối chiếu giáo dục hướng ngoại với một phương diện nội tâm đang bị bỏ ngỏ.",
      "memory": "Giáo dục hiện đại mạnh về thế giới bên ngoài nhưng còn thiếu hiểu biết về tâm thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_8",
      "text": "Vai trò đúng của Khoa học Tâm thức trong một hệ thống giáo dục toàn diện là gì?",
      "options": [
        "Buộc người học tiếp nhận một tín ngưỡng trước khi được tìm hiểu cảm xúc và tâm thức của chính mình.",
        "Thay thế toàn bộ khoa học tự nhiên để người học chỉ tập trung vào đời sống tâm linh và nghi lễ tôn giáo.",
        "Tăng khả năng kiểm soát thế giới bên ngoài để con người cạnh tranh về vật chất và danh tiếng hiệu quả hơn trong đời sống hiện đại.",
        "Song song với khoa học tự nhiên, giúp con người loại trừ khổ đau, đạt hạnh phúc và phát triển giá trị nội tâm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài không chủ trương loại bỏ khoa học tự nhiên. Khoa học Tâm thức cần được phát triển song song để con người biết loại trừ khổ đau, đạt hạnh phúc, khơi dậy tâm thiện lành và phát triển những giá trị cao đẹp của nội tâm.",
      "hint": "Chú ý cụm “song song với truyền thống khoa học tự nhiên” trong tài liệu.",
      "memory": "Khoa học Tâm thức giúp loại trừ khổ đau, đạt hạnh phúc, khơi dậy tâm thiện lành và phát triển giá trị cao đẹp của nội tâm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_9",
      "text": "Vì sao phần khoa học và triết học Phật giáo có thể được cống hiến cho mọi người?",
      "options": [
        "Vì mục đích chính là chứng minh một tôn giáo cao hơn những tín ngưỡng và quan điểm khác nhau.",
        "Vì mọi người phải phát tâm quy y Tam bảo trước rồi mới được tìm hiểu thế giới vật chất và tâm thức.",
        "Vì phần này chỉ giữ lại nghi lễ đặc thù và không bàn đến thực tại khách quan hay đời sống con người trong toàn nhân loại.",
        "Vì phần này không đòi hỏi tín ngưỡng hay Pháp hành tâm linh và có thể giúp con người giảm khổ đau, đạt hạnh phúc."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đức Đạt Lai Lạt Ma không thể áp đặt giáo lý riêng của Đức Phật lên những tín ngưỡng khác. Vì phần khoa học và triết học không liên quan đến tín ngưỡng hay Pháp hành tâm linh, mọi người đều có thể tiếp cận và gặt hái lợi ích.",
      "hint": "Hãy nối tính không áp đặt tín ngưỡng với lợi ích chung của tri thức.",
      "memory": "Tri thức được chia sẻ rộng rãi mà không biến thành sự áp đặt tín ngưỡng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_10",
      "text": "Mục đích thứ nhất của Đức Đạt Lai Lạt Ma khi biên soạn bộ sách nhắm trực tiếp đến điều gì?",
      "options": [
        "Biến giáo dục hiện đại thành hệ thống chỉ giảng dạy Pháp hành và những nghi lễ tôn giáo riêng.",
        "Đưa Khoa học Tâm thức đến với mọi người để hệ thống giáo dục thế giới trở nên hoàn thiện hơn.",
        "Mở rộng thêm kỹ thuật vật chất để con người làm chủ hoàn toàn thế giới ở bên ngoài.",
        "Giới hạn hiểu biết về tâm thức cho những người đã có tín ngưỡng và phát tâm quy y Tam bảo."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Đức Đạt Lai Lạt Ma nhận thấy trường học chú trọng thế giới vật chất nhưng thiếu Khoa học Tâm thức. Ngài muốn giới thiệu lĩnh vực tâm thức trong Khoa học Phật giáo để con người hiểu cả thế giới vật chất lẫn tâm thức của mình.",
      "hint": "Đối chiếu phần giáo dục hiện đại đang thiếu với điều bộ sách muốn bổ sung.",
      "memory": "Mục đích thứ nhất: bổ sung Khoa học Tâm thức để hoàn thiện giáo dục.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_11",
      "text": "Mục đích thứ hai của Đức Đạt Lai Lạt Ma khi biên soạn bộ sách nhấn mạnh sự phát triển nào?",
      "options": [
        "Năng lực tranh luận để bảo vệ tín ngưỡng riêng trước mọi quan điểm khác biệt.",
        "Khả năng tích lũy vật chất, danh tiếng và vị thế xã hội cho từng cá nhân.",
        "Tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế cho nhân loại.",
        "Kỹ năng kiểm soát hoàn cảnh bên ngoài mà không cần chuyển hóa tâm thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Mục đích thứ hai là phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế. Bài gắn mục đích này với tâm thương yêu, tâm từ bi và khả năng sống tin tưởng, cảm thông, gắn kết.",
      "hint": "Mục đích này hướng đến tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế cho nhân loại.",
      "memory": "Mục đích thứ hai: phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế cho nhân loại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_12",
      "text": "Theo bài, tâm thương yêu và tâm từ bi giúp con người sống với nhau như thế nào?",
      "options": [
        "Giới hạn sự giúp đỡ trong cùng một tín ngưỡng và tách biệt với những người khác niềm tin.",
        "Cạnh tranh mạnh hơn để đạt thành tựu vật chất mà không cần quan tâm đến người khác.",
        "Chỉ nương tựa nhau khi còn nhỏ, còn khi trưởng thành thì hoàn toàn không cần hỗ trợ.",
        "Tin tưởng, cảm thông và gắn kết với nhau hơn trong suốt các giai đoạn của cuộc đời."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Từ khi còn nhỏ đến khi đi học, làm việc và già yếu, con người đều cần tình thương yêu và sự hỗ trợ của người khác. Tâm thương yêu và tâm từ bi giúp chúng ta tin tưởng, cảm thông và gắn kết với nhau hơn.",
      "hint": "Bài dùng các giai đoạn từ nhỏ đến già để làm rõ vai trò của tình thương yêu.",
      "memory": "Tình thương yêu là nhu cầu xuyên suốt đời người, không phải một điều phụ thuộc tuổi tác.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_13",
      "text": "Cách ghép nào đúng giữa Tập 1, Tập 2 và đối tượng nghiên cứu chính?",
      "options": [
        "Tập 1 nghiên cứu tâm thức; Tập 2 chỉ nghiên cứu các hạt vi tế tích tụ thành sắc pháp.",
        "Tập 1 chỉ nói về Pháp hành; Tập 2 chỉ nói về lịch sử hình thành các tông phái Phật giáo hiện nay.",
        "Tập 1 chủ yếu liên quan đến cảnh, tức đối tượng nhận thức; Tập 2 thuộc Khoa học Tâm thức.",
        "Tập 1 và Tập 2 đều chỉ trình bày nghi lễ, không phân biệt cảnh với chủ thể nhận thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tập 1 gồm những chủ đề chính liên quan đến cảnh, tức đối tượng nhận thức và thế giới vật chất. Tập 2 nói về tâm thức và thuộc Khoa học Tâm thức.",
      "hint": "Một tập nghiêng về đối tượng được nhận thức, tập kia nghiêng về tâm thức.",
      "memory": "Tập 1 khảo sát cảnh; Tập 2 khảo sát tâm thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_14",
      "text": "Trong mối quan hệ nhận thức được trình bày ở Tập 1, cách phân biệt nào chính xác?",
      "options": [
        "Cảnh là đối tượng được nhận thức; chủ thể nhận thức được gọi là yul-chen và chính là tâm thức.",
        "Cảnh là chủ thể nhận thức; yul-chen chỉ là tên khác của thế giới vật chất bên ngoài.",
        "Cảnh và tâm thức hoàn toàn không liên hệ nên không cần được phân tích trong cùng một hệ thống.",
        "Yul-chen là một nghi lễ thuộc Pháp hành và không liên quan đến quá trình nhận thức đối tượng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài gọi những đối tượng được nhận thức là cảnh. Phía chủ thể nhận thức, tiếng Tạng gọi là yul-chen, chính là tâm thức; bộ sách phân tích rõ mối quan hệ giữa hai phía này.",
      "hint": "Hãy phân biệt cái được nhận thức với phía thực hiện sự nhận thức.",
      "memory": "Cảnh là đối tượng; yul-chen là chủ thể nhận thức, tức tâm thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_15",
      "text": "Một học viên lần lượt tìm hiểu “bản chất của lửa là nóng”, sự tương thuộc và điều kiện để sự vật tồn tại, rồi dùng lý luận chứng minh một vấn đề đúng đắn. Chuỗi nguyên lý nào phù hợp?",
      "options": [
        "Chứng thành đạo lý → Pháp nhiên đạo lý → Quán đãi đạo lý.",
        "Quán đãi đạo lý → Chứng thành đạo lý → Pháp nhiên đạo lý.",
        "Pháp nhiên đạo lý → Quán đãi đạo lý → Chứng thành đạo lý.",
        "Tác dụng đạo lý → Quán đãi đạo lý → Pháp nhiên đạo lý."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Pháp nhiên đạo lý tìm hiểu bản chất tự nhiên của sự vật, như bản chất của lửa là nóng. Quán đãi đạo lý tìm hiểu sự tương thuộc và điều kiện để sự vật tồn tại. Chứng thành đạo lý dùng lý luận để chứng minh một vấn đề là đúng đắn.",
      "hint": "Ghép lần lượt ba ý: bản chất tự nhiên; sự tương thuộc và điều kiện; chứng minh bằng lý luận.",
      "memory": "Pháp nhiên xét bản chất; Quán đãi xét sự tương thuộc và điều kiện; Chứng thành dùng lý luận để chứng minh.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_16",
      "text": "Nhóm nào ghi đúng Tứ pháp y được nêu trong bài?",
      "options": [
        "Y pháp bất y nhân; Y nghĩa bất y ngữ; Y liễu nghĩa bất y bất liễu nghĩa; Y trí bất y thức.",
        "Y nhân bất y pháp; Y ngữ bất y nghĩa; Y bất liễu nghĩa bất y liễu nghĩa; Y thức bất y trí.",
        "Y cảnh bất y tâm; Y sắc bất y thức; Y vật chất bất y hữu tình; Y pháp hành bất y khoa học.",
        "Y tín ngưỡng bất y lý luận; Y nghi lễ bất y thực tại; Y danh tiếng bất y nội tâm; Y vật chất bất y tâm thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài liệt kê Tứ pháp y gồm: Y pháp bất y nhân; Y nghĩa bất y ngữ; Y liễu nghĩa bất y bất liễu nghĩa; Y trí bất y thức. Tài liệu Tuần 1 chỉ nêu hệ thống này, vì vậy câu hỏi giữ đúng phạm vi ấy và không thêm diễn giải ngoài bài.",
      "hint": "Giữ đúng trật tự giữa pháp–nhân, nghĩa–ngữ, liễu nghĩa–bất liễu nghĩa và trí–thức.",
      "memory": "Tứ pháp y được ghi theo bốn cặp: pháp–nhân, nghĩa–ngữ, liễu nghĩa–bất liễu nghĩa, trí–thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w1_17",
      "text": "Một học viên chỉ tham gia khi có hứng thú và thường bỏ dở giữa chừng. Theo phần mở đầu của bài, điểm nào cần được điều chỉnh?",
      "options": [
        "Chỉ cần ghi nhớ tên các tập sách mà không cần theo đuổi nội dung hoặc tham gia đều đặn.",
        "Chỉ cần học những phần mình thích vì bộ sách không đòi hỏi trình tự hay sự nỗ lực của người học.",
        "Nên thay việc học bằng tự đọc ngẫu nhiên vì nỗ lực của người giảng hoàn toàn không liên quan đến người nghe.",
        "Cần cam kết đồng hành từ đầu đến cuối và dành thời gian nghiêm túc cho tiến trình học bài bản, lâu dài."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Khóa học được tổ chức theo trình tự như một môn học bài bản và có thể kéo dài. Vì người giảng dành nhiều thời gian, tâm huyết, người học cũng cần có động lực, cam kết và nỗ lực đồng hành từ đầu đến cuối, không học theo cảm tính.",
      "hint": "Bài đối chiếu sự nỗ lực của người giảng với cam kết của người học.",
      "memory": "Lợi ích của hành trình dài hạn đòi hỏi cam kết và nỗ lực tương xứng.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_18",
      "text": "Một người cho rằng Tập 1 chỉ dành cho người đã quy y vì nội dung xuất phát từ lời Phật dạy. Cách sửa nào đầy đủ nhất?",
      "options": [
        "Tập 1 thuộc khoa học, mô tả thực tại khách quan và không đòi hỏi đức tin hay phát tâm quy y Tam bảo.",
        "Tập 1 đúng là chỉ dành cho người quy y, nhưng người khác vẫn có thể học nếu chấp nhận mọi kết luận trước.",
        "Tập 1 thuộc hoàn toàn Pháp hành nên người học chỉ cần nghi lễ, không cần khảo sát sự tồn tại của các pháp.",
        "Tập 1 thuộc khoa học vật chất nên phủ nhận tâm thức và không phân tích chủ thể nhận thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nguồn gốc từ lời Phật dạy không đồng nghĩa với việc Tập 1 đòi hỏi quy y. Tập này đứng trên góc độ khoa học khách quan, diễn tả thực tại và sự thật tồn tại của các pháp nên người có hay không có tín ngưỡng đều có thể học.",
      "hint": "Kiểm tra đồng thời phạm trù của Tập 1, nội dung khảo sát và điều kiện tiếp cận.",
      "memory": "Nguồn gốc Phật giáo không biến tri thức khoa học trong Tập 1 thành điều kiện tín ngưỡng.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_19",
      "text": "Khi nói thiếu môn học về tâm thức khiến chúng ta “mới chỉ có một nửa tri thức của cuộc sống”, bài muốn nhấn mạnh điều gì?",
      "options": [
        "Khoa học tự nhiên không mang lại lợi ích nên cần được thay thế hoàn toàn bằng Pháp hành và những nghi lễ tâm linh trong giáo dục hiện đại.",
        "Tri thức về thế giới vật chất vẫn khuyết thiếu nếu không có hiểu biết về tâm thức và đời sống tinh thần, tâm linh.",
        "Chỉ cần hiểu tâm thức là đủ, không cần tiếp tục học toán học, kỹ thuật, công nghệ hay thế giới vật chất bên ngoài.",
        "Một nửa tri thức chỉ là số môn học, nên tăng thêm môn hướng ngoại sẽ tự đem lại bình an và hạnh phúc chân thật."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài không phủ nhận lợi ích của khoa học tự nhiên, nhưng cho rằng tri thức chỉ hướng ra thế giới vật chất là chưa toàn diện. Nếu thiếu môn học về tâm thức, con người thiếu đời sống tinh thần, tâm linh và chưa biết cách đạt bình an nội tâm, nuôi dưỡng tâm thiện lương hay có hạnh phúc chân thật.",
      "hint": "Đối chiếu cuộc sống thuần túy vật chất với sự hiểu biết về tâm thức và đời sống tinh thần, tâm linh.",
      "memory": "Thiếu hiểu biết về tâm thức thì tri thức của cuộc sống vẫn khuyết thiếu và thiên về vật chất.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_20",
      "text": "Một người có vật chất, thành đạt và danh tiếng nhưng thường bị cảm xúc chi phối, không có bình an. Kết luận nào sát bài nhất?",
      "options": [
        "Khó khăn chỉ do thiếu thêm kỹ thuật để kiểm soát hoàn cảnh và những người khác ở bên ngoài.",
        "Người ấy chắc chắn đã hạnh phúc vì vật chất, thành đạt và danh tiếng quyết định hoàn toàn đời sống.",
        "Những điều kiện bên ngoài chưa bảo đảm hạnh phúc nếu người ấy chưa làm chủ tâm thức và cảm xúc.",
        "Bình an không liên quan tâm thức; chỉ cần tiếp tục tích lũy thành tựu thì khổ đau sẽ tự biến mất."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài không nói vật chất hay thành đạt hoàn toàn vô ích, nhưng khẳng định chúng không quyết định hạnh phúc chân thật. Nếu chưa có tâm hồn an bình và chưa làm chủ cảm xúc, người ấy vẫn có thể chịu khổ đau.",
      "hint": "Đối chiếu thành tựu bên ngoài với khả năng làm chủ đời sống nội tâm.",
      "memory": "Thành tựu bên ngoài không thay thế được năng lực làm chủ tâm thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_21",
      "text": "Vì sao Đức Đạt Lai Lạt Ma không dùng những giáo lý tâm linh thông thường làm điểm khởi đầu khi đối thoại với giới khoa học?",
      "options": [
        "Vì giới khoa học chỉ quan tâm nghi lễ nên không thể trao đổi về khổ đau, tâm thức hay hạnh phúc con người.",
        "Vì cần bắt đầu từ thực tại khách quan và khổ nạn chung mà giới khoa học có thể cùng quan sát, chứng kiến.",
        "Vì khoa học vật chất đã giải quyết trọn vẹn khổ đau nên không còn lý do tìm hiểu đời sống nội tâm.",
        "Vì mục tiêu đối thoại là yêu cầu giới khoa học quy y trước khi tiếp nhận mọi tri thức của bộ sách."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Một số nhà khoa học không thích hợp với những bài thuyết pháp mang tính tôn giáo. Đức Ngài vì thế dựa trên thực tại khách quan: nhân loại đang trải qua khổ nạn, trong đó có những khổ đau do chính tâm thức con người gây ra.",
      "hint": "Hãy xét điểm chung có thể quan sát giữa những người có quan điểm tín ngưỡng khác nhau.",
      "memory": "Đối thoại khoa học bắt đầu từ thực tại khách quan và vấn đề chung của nhân loại.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_22",
      "text": "Việc bài nêu chiến tranh thế giới như khổ đau do tâm thức con người gây ra làm rõ nhu cầu nào?",
      "options": [
        "Chỉ cần thực hiện nghi lễ vì tư duy logic và hiểu biết về tâm thức không liên hệ đến hành vi con người.",
        "Chỉ cần phát triển công nghệ vì mọi khổ đau của nhân loại đều bắt nguồn từ thiên tai và thiếu vật chất.",
        "Cần loại bỏ khoa học tự nhiên vì mọi tri thức về thế giới vật chất đều trực tiếp tạo ra chiến tranh.",
        "Cần phát triển hiểu biết về tâm thức vì nhiều khổ nạn do chính tâm thức con người gây ra."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nêu thiên tai như động đất, bão lụt là một nguồn khổ nạn, nhưng nhấn mạnh phần lớn khổ nạn lại do chính tâm thức con người gây ra, như Chiến tranh thế giới lần thứ nhất và lần thứ hai. Vì vậy, hiểu biết về tâm thức là điều cần thiết để đem lại lợi ích cho nhân loại.",
      "hint": "Phân biệt khổ đau do thiên tai với khổ đau bắt nguồn từ chính con người.",
      "memory": "Nhiều khổ nạn do chính tâm thức con người gây ra, nên hiểu biết về tâm thức không thể bị thiếu.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_23",
      "text": "Cách phân biệt nào đúng giữa nhân duyên biên soạn và hai mục đích của bộ sách?",
      "options": [
        "Phát triển tâm lương thiện là nhân duyên; tích chiết nội dung từ kinh điển là mục đích duy nhất của bộ sách.",
        "Hoàn thiện giáo dục là nhân duyên; đối thoại với giới khoa học và chiến tranh là hai mục đích chính của toàn bộ bộ sách được nêu trong bài.",
        "Đối thoại khoa học là nhân duyên; hoàn thiện giáo dục và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế là mục đích.",
        "Giới thiệu Khoa học Tâm thức là nhân duyên; thay thế khoa học tự nhiên bằng Pháp hành là mục đích."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các cuộc tiếp xúc và thảo luận với nhiều nhà khoa học là một nhân duyên của việc biên soạn. Hai mục đích là hoàn thiện giáo dục bằng Khoa học Tâm thức và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế cho nhân loại.",
      "hint": "Nhân duyên trả lời “do đâu hình thành”; mục đích trả lời “nhằm đem lại điều gì”.",
      "memory": "Đối thoại với giới khoa học là nhân duyên; hoàn thiện giáo dục và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế là hai mục đích.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_24",
      "text": "Một chương trình đã đem lĩnh vực tâm thức trong Khoa học Phật giáo vào giáo dục nhưng chưa phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế. So với hai mục đích của bộ sách, chương trình còn thiếu gì?",
      "options": [
        "Còn thiếu mục tiêu dùng hiểu biết tâm thức để gia tăng danh tiếng và cạnh tranh vật chất ở bên ngoài trong đời sống nhân loại.",
        "Còn thiếu mục tiêu buộc học sinh từ bỏ khoa học tự nhiên để chỉ học nghi lễ và Pháp hành tâm linh.",
        "Còn thiếu mục đích phát triển tâm thương yêu, tâm từ bi để con người sống tin tưởng, cảm thông và gắn kết.",
        "Còn thiếu điều kiện yêu cầu tất cả học sinh phát tâm quy y trước khi được học về tâm thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Chương trình đã góp phần hoàn thiện giáo dục bằng lĩnh vực tâm thức, nhưng chưa đáp ứng mục đích thứ hai. Bài nhấn mạnh việc phát triển tâm lợi ích, tâm lương thiện, tốt lành, tâm tử tế, cùng tâm thương yêu và tâm từ bi cho nhân loại.",
      "hint": "Đưa Khoa học Tâm thức vào giáo dục mới đáp ứng mục đích thứ nhất; hãy tìm nội dung của mục đích thứ hai.",
      "memory": "Khoa học Tâm thức cần đi cùng tâm lợi ích, lương thiện, tốt lành, tử tế, thương yêu và từ bi.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_25",
      "text": "Cách mô tả nào đầy đủ nhất về phương pháp Tập 1 dùng để khảo sát sự tồn tại của các pháp?",
      "options": [
        "Chỉ dựa vào sự yêu thích cá nhân, không cần bốn pháp ấn, luận lý học hay mối quan hệ giữa cảnh và tâm thức.",
        "Xét trên bốn pháp ấn, dùng Nhân minh học và phân tích quan hệ giữa cảnh với chủ thể nhận thức là tâm thức.",
        "Chỉ dùng nghi lễ thuộc Pháp hành, không khảo sát thực tại của thế giới vật chất và thế giới hữu tình.",
        "Chỉ nghiên cứu vật chất như một thực tại tách biệt hoàn toàn với chủ thể đang nhận thức về nó."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tập 1 đứng trên phương diện bốn pháp ấn “khổ, không, vô thường, vô ngã” và luận lý học, tức Nhân minh học, để giải thích sự thật tồn tại của các pháp. Đồng thời, tập này phân tích quan hệ giữa cảnh và tâm thức.",
      "hint": "Kết hợp ba điểm: bốn pháp ấn, Nhân minh học và mối quan hệ nhận thức.",
      "memory": "Tập 1 kết hợp bốn pháp ấn, Nhân minh học và quan hệ cảnh–tâm thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_26",
      "text": "Nhận định nào KHÔNG phù hợp với cách bài đặt Khoa học Tâm thức trong giáo dục hiện đại?",
      "options": [
        "Khoa học Tâm thức phải thay thế toàn bộ khoa học tự nhiên thì giáo dục mới có thể hoàn thiện.",
        "Khoa học Tâm thức bổ sung hiểu biết về nội tâm cho nền giáo dục đang thiên về vật chất.",
        "Khoa học Tâm thức giúp con người biết cách loại trừ khổ đau và hướng đến hạnh phúc.",
        "Khoa học Tâm thức góp phần khơi dậy tâm thiện lành và phát triển giá trị cao đẹp của nội tâm."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài không chủ trương thay thế khoa học tự nhiên. Khoa học Tâm thức cần được phát triển song song với khoa học tự nhiên để con người hiểu cả thế giới vật chất lẫn đời sống tâm thức của chính mình.",
      "hint": "Đây là câu phủ định; chú ý bài dùng ý “song song với khoa học tự nhiên”.",
      "memory": "Khoa học Tâm thức bổ sung, không loại bỏ, khoa học tự nhiên.",
      "difficulty": "Khó"
    },
    {
      "id": "w1_27",
      "text": "Xét bốn nhận định: (1) bộ sách có thể mang lợi ích cho người không có tín ngưỡng; (2) mục đích thứ nhất là hoàn thiện giáo dục bằng Khoa học Tâm thức; (3) mục đích thứ hai là phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế; (4) muốn học Tập 1 phải phát tâm quy y Tam bảo. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (4).",
        "Chỉ (1), (2) và (3).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Ba nhận định đầu phù hợp với tài liệu. Nhận định (4) sai vì Tập 1 thuộc phạm trù khoa học, không đòi hỏi người học phải có đức tin hay phát tâm quy y Tam bảo.",
      "hint": "Kiểm tra nhận định đặt quy y Tam bảo thành điều kiện bắt buộc để học Tập 1.",
      "memory": "Tính phổ quát đi cùng hai mục đích: hoàn thiện giáo dục và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w1_28",
      "text": "Một trường học xây dựng chương trình giúp người học hiểu thế giới vật chất, hiểu tâm thức của mình, làm chủ cảm xúc và nuôi dưỡng tâm thương yêu. Vì sao chương trình này gần với định hướng của bài?",
      "options": [
        "Vì chương trình yêu cầu tất cả học sinh quy y Tam bảo trước khi được học về cảm xúc của mình.",
        "Vì chương trình dùng tâm thức để loại bỏ mọi ngành khoa học tự nhiên và thay giáo dục bằng nghi lễ tôn giáo.",
        "Vì chương trình biến việc làm chủ cảm xúc thành công cụ cạnh tranh vật chất và tìm kiếm danh tiếng.",
        "Vì chương trình giúp hiểu thế giới vật chất và tâm thức, đồng thời phát triển tâm thương yêu, tâm từ bi."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Chương trình này phù hợp với mục đích giúp con người vừa hiểu thế giới vật chất vừa không thiếu hiểu biết về tâm thức của mình. Việc làm chủ cảm xúc và nuôi dưỡng tâm thương yêu, tâm từ bi cũng hướng đến phát triển tâm lợi ích, tâm lương thiện, tốt lành và tâm tử tế cho nhân loại.",
      "hint": "Đánh giá đồng thời sự hiểu biết về thế giới vật chất, tâm thức và tâm thương yêu.",
      "memory": "Giáo dục toàn diện giúp hiểu thế giới vật chất, hiểu tâm thức và phát triển tâm thương yêu, tâm từ bi.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w1_29",
      "text": "Một người nói: “Vì bộ sách dành cho mọi người nên nguồn gốc Phật giáo của nội dung không còn quan trọng.” Cách điều chỉnh nào chính xác nhất?",
      "options": [
        "Muốn có tính phổ quát thì phải phủ nhận hoàn toàn nguồn kinh điển và chỉ giữ kiến thức kỹ thuật trong giáo dục hiện đại.",
        "Nội dung được tích chiết từ kinh điển, nhưng phần khoa học và triết học vẫn được trình bày để mọi người tiếp cận.",
        "Nguồn gốc Phật giáo đồng nghĩa mọi người phải quy y trước khi được học về thế giới vật chất và tâm thức.",
        "Tính phổ quát có nghĩa mọi quan điểm triết học và Pháp hành đều phải bị loại khỏi toàn bộ chương trình."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tài liệu nói nội dung được tích chiết từ kho tàng Tam tạng Kinh điển. Tuy nhiên, phần khoa học và triết học không đòi hỏi tín ngưỡng hay Pháp hành tâm linh, nên người thuộc tôn giáo khác hoặc không có tôn giáo vẫn có thể học và hưởng lợi.",
      "hint": "Phân biệt nguồn của nội dung với điều kiện để người học tiếp cận nội dung ấy.",
      "memory": "Nguồn gốc Phật giáo không đồng nghĩa với việc áp đặt tín ngưỡng lên người học.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w1_30",
      "text": "Chuỗi lập luận nào diễn đạt đầy đủ nhất tinh thần của Tuần 1?",
      "options": [
        "Thực hành trước → chấp nhận mọi kết luận không cần lý luận → loại bỏ khoa học tự nhiên → giới hạn tri thức cho người đã quy y Tam bảo.",
        "Chọn tín ngưỡng theo cảm tính → bỏ qua thực tại khách quan → chú trọng vật chất và danh tiếng → xem Pháp hành là nghi lễ không cần hiểu biết.",
        "Phát triển kỹ thuật bên ngoài → đồng nhất vật chất với hạnh phúc → phủ nhận vai trò của tâm thức → không cần quan điểm hay sự áp dụng.",
        "Hiểu thực tại, cảnh–tâm thức → quan điểm triết học → Pháp hành; Khoa học Tâm thức giúp loại trừ khổ đau, phát triển tâm lương thiện."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tuần 1 đặt nền bằng việc hiểu thực tại, cảnh và tâm thức, rồi đi đến quan điểm triết học và Pháp hành. Đồng thời, bài nêu nhu cầu bổ sung Khoa học Tâm thức vào giáo dục để giảm khổ đau, hướng đến hạnh phúc và phát triển tâm lợi ích, lương thiện, tốt lành, tử tế.",
      "hint": "Kết hợp lộ trình khoa học–triết học–Pháp hành với hai mục đích của bộ sách.",
      "memory": "Hiểu thực tại trước, nâng lên quan điểm triết học, liên hệ Pháp hành; đồng thời phát triển hiểu biết về tâm thức và những tâm lợi ích, lương thiện, tốt lành, tử tế.",
      "difficulty": "Nâng cao"
    }
  ],
  "week2": [
    {
      "id": "w2_1",
      "text": "Theo bài học, dạng năng lượng không phải sắc cũng không phải thức được xếp vào pháp nào?",
      "options": [
        "Vô vi pháp thường hằng.",
        "Sắc pháp có thể thấy bằng mắt.",
        "Tâm pháp nhận thức đối tượng.",
        "Pháp bất tương ưng hành."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài gọi bản chất của năng lượng là pháp bất tương ưng hành. Pháp này không thuộc sắc pháp và cũng không thuộc tâm pháp, mà biểu hiện như một dạng năng lượng tiềm tàng.",
      "hint": "Nhớ lại lãnh vực được bài dùng để nói về bản chất của năng lượng.",
      "memory": "Bất tương ưng hành là dạng năng lượng không thuộc sắc pháp hay tâm pháp.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_2",
      "text": "Hữu vi pháp được định nghĩa như thế nào trong tài liệu?",
      "options": [
        "Là pháp chỉ được ý thức nhận biết.",
        "Là pháp không do điều kiện tạo thành.",
        "Là pháp thường hằng và không biến đổi.",
        "Là pháp hình thành bởi nhân duyên."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hữu vi pháp là những pháp được hình thành bởi nhân duyên. Chính việc do nguyên nhân và điều kiện tạo thành phân biệt hữu vi pháp với vô vi pháp.",
      "hint": "Xét sự hiện hữu của pháp có phụ thuộc vào nguyên nhân và điều kiện hay không.",
      "memory": "Hữu vi pháp do nhân duyên hình thành.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_3",
      "text": "Đặc điểm nào thuộc về vô vi pháp theo bài?",
      "options": [
        "Không được tạo bởi nhân duyên và có tính thường hằng.",
        "Được tạo bởi nhân duyên và luôn thuộc sắc pháp có thể nhìn thấy.",
        "Tùy thuộc vào tâm vương như một tâm sở đi cùng.",
        "Chỉ tồn tại khi giác quan tiếp xúc với trần cảnh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Vô vi pháp không được tạo ra bởi nguyên nhân và điều kiện, có bản chất khác với hữu vi pháp. Tài liệu gọi đây là pháp thường hằng.",
      "hint": "Đối chiếu trực tiếp với đặc điểm “được tạo bởi nhân duyên” của hữu vi pháp.",
      "memory": "Vô vi pháp không do nhân duyên tạo và là pháp thường hằng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_4",
      "text": "Tâm sở có quan hệ thế nào với tâm vương?",
      "options": [
        "Là tùy tùng, tùy thuộc vào tâm vương là tâm chính, tâm chủ.",
        "Là một loại sắc pháp hoàn toàn tách khỏi tâm vương và không đi cùng tâm.",
        "Là pháp thường hằng không phụ thuộc bất kỳ tâm nào.",
        "Là giác quan làm chỗ nương cho tâm vương nhận thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tâm vương được trình bày là tâm chính, tâm chủ; các tâm sở là tùy tùng đi cùng và tùy thuộc vào tâm vương. Vì vậy, tâm sở không được mô tả như một pháp tồn tại độc lập với tâm vương.",
      "hint": "Bài ví tâm sở như học trò đi cùng tâm chính, tâm chủ.",
      "memory": "Tâm sở đi cùng và tùy thuộc vào tâm vương.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_5",
      "text": "Cách ghép nào đúng giữa trần cảnh, căn và thức?",
      "options": [
        "Xúc – mắt – nhãn thức.",
        "Hương – lưỡi – thiệt thức.",
        "Vị – mũi – tỷ thức.",
        "Thanh – tai – nhĩ thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Thanh là đối tượng của tai và được nhận thức bởi nhĩ thức. Các phương án còn lại ghép sai giữa đối tượng, giác quan và loại thức tương ứng.",
      "hint": "Âm thanh là đối tượng của giác quan nào và nhận thức tương ứng nào?",
      "memory": "Thanh là trần cảnh của tai và là đối tượng của nhĩ thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_6",
      "text": "“Pháp” trong sáu trần là đối tượng được nhận thức trực tiếp bởi chủ thể nào?",
      "options": [
        "Nhãn thức.",
        "Ý thức.",
        "Nhĩ thức.",
        "Thân thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Pháp không phải đối tượng của năm giác quan mà là đối tượng của ý. Vì vậy, chỉ có ý thức nhận thức được pháp như thế nào.",
      "hint": "Đây là đối tượng không thể nghe, thấy, ngửi, nếm hoặc xúc chạm.",
      "memory": "Pháp là đối tượng của ý thức, không phải đối tượng của năm giác quan.",
      "difficulty": "Dễ"
    },
    {
      "id": "w2_7",
      "text": "Chuỗi nào diễn đạt đúng cách bài trình bày ba lãnh vực của nền tảng hiện tượng sự vật?",
      "options": [
        "Trần cảnh tạo ra căn; căn tạo vô vi; vô vi trở thành tâm sở.",
        "Sắc pháp được giác quan tiếp xúc trước; từ đó mới phát sinh năng lượng bất tương ưng và sau cùng mới hình thành tâm thức nhận biết.",
        "Tâm sở tạo ra tâm vương; tâm vương tạo vô vi; vô vi được mắt nhìn thấy.",
        "Bất tương ưng hành là năng lượng; từ đó khởi tâm thức; tâm thức nhận biết sắc pháp."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài bắt đầu với dạng năng lượng là bất tương ưng hành pháp, từ đó khởi lên tâm thức để nhận thức đối tượng. Qua tâm thức và năng lượng ấy, chúng ta nhận thức các đối tượng sắc pháp thô bằng mắt và các giác quan khác.",
      "hint": "Đi từ dạng năng lượng đến chủ thể nhận thức rồi đến đối tượng hình sắc thô.",
      "memory": "Ba lãnh vực được trình bày là bất tương ưng hành, tâm thức và sắc pháp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_8",
      "text": "Cách xác định nào đúng về Thượng A-tỳ-đạt-ma?",
      "options": [
        "Chỉ A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân.",
        "Chỉ A-tỳ-đạt-ma Tập Luận của ngài Vô Trước.",
        "Chỉ Trung Quán luận và các giải thích về tánh không.",
        "Chỉ các kinh bất liễu nghĩa dùng làm phương tiện."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Theo tài liệu, Thượng A-tỳ-đạt-ma chỉ bộ A-tỳ-đạt-ma Tập Luận của ngài Vô Trước. A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân được xếp vào Hạ A-tỳ-đạt-ma.",
      "hint": "Phân biệt bộ luận của ngài Vô Trước với bộ luận của ngài Thế Thân.",
      "memory": "Thượng A-tỳ-đạt-ma là Tập Luận của ngài Vô Trước.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_9",
      "text": "Cách xác định nào đúng về Hạ A-tỳ-đạt-ma?",
      "options": [
        "Chỉ A-tỳ-đạt-ma Tập Luận của ngài Vô Trước.",
        "Chỉ A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân.",
        "Chỉ các lời dạy thuộc nghĩa cứu cánh trong Trung Quán.",
        "Chỉ hệ thống sáu căn, sáu trần và sáu thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Hạ A-tỳ-đạt-ma chỉ A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân. Tập Luận của ngài Vô Trước thuộc Thượng A-tỳ-đạt-ma.",
      "hint": "Nhớ bộ luận còn lại sau khi đã xác định Thượng A-tỳ-đạt-ma.",
      "memory": "Hạ A-tỳ-đạt-ma là Câu-xá Luận của ngài Thế Thân.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_10",
      "text": "Nhận định nào sau đây KHÔNG phù hợp với cách chia năm nhóm pháp trong bài?",
      "options": [
        "Tâm sở tùy thuộc vào tâm vương.",
        "Tâm pháp còn được gọi là tâm vương.",
        "Vô vi pháp thuộc bốn nhóm hữu vi đầu tiên.",
        "Bất tương ưng hành không thuộc sắc hay tâm."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Vô vi pháp không thuộc bốn nhóm hữu vi đầu tiên mà là nhóm thứ năm, mang tính thường hằng. Bốn nhóm sắc pháp, tâm pháp, tâm sở và bất tương ưng hành được xếp vào hữu vi pháp.",
      "hint": "Đây là câu phủ định; xác định nhóm nào không thuộc hữu vi pháp.",
      "memory": "Bốn nhóm đầu là hữu vi; vô vi pháp đứng ngoài hữu vi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_11",
      "text": "Cách phân vai nào đúng trong quan hệ Cảnh – Căn – Thức?",
      "options": [
        "Cảnh là vô vi; Căn là bất liễu nghĩa; Thức là liễu nghĩa.",
        "Cảnh là chủ thể nhận thức; Căn là đối tượng bên ngoài; Thức là pháp thường hằng không nương vào giác quan.",
        "Cảnh là giác quan; Căn là nhận thức; Thức là đối tượng bên ngoài.",
        "Cảnh là đối tượng; Căn là giác quan nương tựa; Thức là chủ thể nhận thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cảnh là các đối tượng sắc, thanh, hương, vị, xúc và pháp; Căn là các giác quan tương ứng. Thức là nhận thức của mắt, tai, mũi, lưỡi, thân và ý; ba phương diện này tương quan và nương tựa lẫn nhau.",
      "hint": "Tách đối tượng được biết, chỗ nương và hoạt động nhận biết.",
      "memory": "Cảnh là đối tượng, Căn là giác quan, Thức là nhận thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_12",
      "text": "Muốn trực tiếp nhìn thấy hình sắc, sự phối hợp nào phù hợp với bài?",
      "options": [
        "Sắc làm cảnh, nhãn căn làm chỗ nương và nhãn thức nhận biết.",
        "Thanh làm cảnh, nhĩ căn làm chỗ nương và tỷ thức nhận biết.",
        "Pháp làm cảnh, thân căn làm chỗ nương và nhãn thức nhận biết.",
        "Hương làm cảnh, thiệt căn làm chỗ nương và ý thức nhận biết."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hình sắc là đối tượng của mắt, nhãn căn là giác quan làm chỗ nương và nhãn thức là nhận thức tương ứng. Nếu chỉ có thức mà không thông qua căn thì không thể trực tiếp nhận biết đối tượng.",
      "hint": "Nhãn thức muốn thấy hình sắc phải thông qua giác quan của mắt.",
      "memory": "Nhìn sắc cần đủ sắc cảnh, nhãn căn và nhãn thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_13",
      "text": "Cách phân biệt nào đúng giữa Tục đế và Chơn đế trong tài liệu?",
      "options": [
        "Ngôn từ có vẻ hay thuộc Chơn đế; nghĩa cứu cánh thuộc Tục đế.",
        "Pháp thường hằng thuộc Tục đế; mọi pháp hữu vi đều thuộc Chơn đế và không cần xét cách chúng trình hiện.",
        "Pháp hiển lộ có thể nhận thức thuộc Tục đế; sự thật đúng như nó đang là thuộc Chơn đế.",
        "Sáu căn thuộc Chơn đế; sáu trần và sáu thức thuộc Tục đế."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Những pháp hiển lộ, trình hiện mà chúng ta có thể nhận thức được thuộc Tục đế, tức chân lý quy ước. Sự thật tồn tại đúng như nó đang là được gọi là thắng nghĩa đế, chân lý tuyệt đối, thuộc Chơn đế.",
      "hint": "Phân biệt chân lý quy ước với thắng nghĩa đế hay chân lý tuyệt đối.",
      "memory": "Tục đế là sự trình hiện quy ước; Chơn đế là sự thật đúng như nó đang là.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_14",
      "text": "Thái độ nào phù hợp với lời khuyên về khảo sát giáo pháp trong bài?",
      "options": [
        "Chỉ chú ý hình thức ngôn từ mà không xét lợi ích và sự thật.",
        "Chấp nhận mọi lời dạy chỉ vì đó là lời Đức Phật nói, không cần dùng lý luận để khảo sát hay kiểm chứng.",
        "Tin trước bằng cảm tính rồi tránh khảo sát để giữ tín tâm.",
        "Dùng lý luận kiểm chứng, xác quyết rồi mới phát sinh tín tâm và thực hành."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nhấn mạnh không nên chỉ vì đức tin mà chấp nhận lời dạy khi chưa khảo sát. Cần dùng lý luận kiểm chứng, sau khi xác quyết mới có tín tâm để biết điều nên thực hành và điều nên từ bỏ.",
      "hint": "Bài không phủ nhận tín tâm nhưng đặt việc khảo sát và xác quyết trước nó.",
      "memory": "Khảo sát và xác quyết bằng lý luận là nền tảng của tín tâm đúng đắn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_15",
      "text": "Một người nói pháp không quen biết và đến từ nơi khác, nhưng lời nói đúng sự thật và có lợi ích. Theo tứ y, nên đánh giá thế nào?",
      "options": [
        "Từ chối vì người nói không thuộc đất nước hoặc nhóm quen biết.",
        "Xét pháp và lợi ích của lời nói, không loại bỏ vì lai lịch người nói.",
        "Chỉ chấp nhận nếu người nói là người thân hoặc người nổi tiếng.",
        "Không cần xét nội dung vì thân phận người nói đã quyết định tính đúng sai và lợi ích của lời nói."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Y pháp bất y nhân yêu cầu không lấy đất nước, sự quen biết hay thân phận của người nói làm tiêu chí quyết định. Điều cần khảo sát là lời nói có lợi ích và đúng sự thật hay không.",
      "hint": "Áp dụng Y pháp bất y nhân.",
      "memory": "Y pháp bất y nhân đặt pháp và sự thật cao hơn lai lịch người nói.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w2_16",
      "text": "Một lời nói rất trau chuốt nhưng có chủ ý xuyên tạc, trong khi lời khác bình thường mà sâu sắc và có lợi ích. Cách chọn nào đúng?",
      "options": [
        "Nương lời trau chuốt vì hình thức đẹp bảo đảm nội dung đúng.",
        "Nương lời bình thường nhưng có nghĩa lý sâu sắc và lợi ích.",
        "Xem hai lời ngang nhau vì ngôn từ và nghĩa lý không khác biệt.",
        "Chọn theo cảm xúc cuốn hút mà không cần xét động cơ người nói."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Y nghĩa bất y ngữ yêu cầu nương vào nghĩa lý, không bị ngôn từ có vẻ hay cuốn hút. Lời nói có chủ đích xuyên tạc, thiên vị hoặc gây hại không trở nên đáng tin chỉ vì được diễn đạt trau chuốt.",
      "hint": "Áp dụng Y nghĩa bất y ngữ và xem xét động cơ tham sân hoặc thiên vị.",
      "memory": "Ngôn từ bình thường nhưng nghĩa sâu và có lợi ích đáng nương hơn lời hay mà sai lệch.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_17",
      "text": "Y liễu nghĩa bất y bất liễu nghĩa hướng người học vượt qua điều gì?",
      "options": [
        "Lời dạy dứt khoát để lựa chọn lời nói có vẻ hấp dẫn hơn.",
        "Nghĩa cứu cánh để quay về cảm nhận ban đầu và tầng nghĩa thô bên ngoài của người nghe.",
        "Nghĩa tạm thời dùng làm phương tiện để đi đến nghĩa cứu cánh.",
        "Trí tuệ thực chứng để nương lại tri thức cảm tính bên ngoài."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bất liễu nghĩa là nghĩa tạm thời được dùng làm phương tiện dẫn dắt tùy theo đối tượng. Người học cần đi đến liễu nghĩa là nghĩa cứu cánh, nghĩa thật sự mà người nói muốn diễn đạt.",
      "hint": "Phân biệt phương tiện dẫn dắt tùy đối tượng với chủ ý cuối cùng.",
      "memory": "Bất liễu nghĩa là phương tiện tạm thời; liễu nghĩa là nghĩa cứu cánh.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_18",
      "text": "Vì sao Y trí bất y thức yêu cầu nương vào trí tuệ thay vì tri thức cảm tính?",
      "options": [
        "Vì trí tuệ giúp thể nghiệm nghĩa tối hậu, còn tri thức chỉ nắm phần thô và tổng quát.",
        "Vì trí tuệ chỉ ghi nhớ ngôn từ, còn tri thức trực tiếp chứng nghiệm toàn bộ sự thật đúng như nó đang là.",
        "Vì tri thức luôn là liễu nghĩa, còn trí tuệ chỉ là phương tiện tạm thời.",
        "Vì trí tuệ loại bỏ kinh nghiệm, còn tri thức cho nhận thức toàn diện tuyệt đối."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Theo bài, tri thức cảm tính chỉ giúp hiểu nghĩa chung, tầng nghĩa thô bên ngoài và chưa phù hợp hoàn toàn với thực trạng. Trí tuệ gắn với thực chứng bằng kinh nghiệm giúp người học thể nghiệm nghĩa cứu cánh và cảm nhận được vị đặc biệt của nghĩa lý ấy.",
      "hint": "So sánh hiểu biết cảm tính bên ngoài với sự thực chứng bằng kinh nghiệm.",
      "memory": "Tri thức nắm phần thô; trí tuệ hướng đến thực chứng nghĩa tối hậu.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_19",
      "text": "Cách phân biệt nào đúng giữa Liễu nghĩa và Bất liễu nghĩa?",
      "options": [
        "Liễu nghĩa là phương tiện ban đầu cần dẫn giải thêm; Bất liễu nghĩa là chủ ý cuối cùng dứt khoát, không cần giải thích khác.",
        "Liễu nghĩa dứt khoát, không cần giải thích khác; Bất liễu nghĩa tạm thời, cần dẫn giải thêm.",
        "Liễu nghĩa dựa vào cảm tính; Bất liễu nghĩa dựa vào trí tuệ thực chứng.",
        "Liễu nghĩa chỉ xét người nói; Bất liễu nghĩa chỉ xét ngôn từ."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Liễu nghĩa là nghĩa xác quyết chính xác, dứt khoát và không cần giải thích theo nghĩa khác. Bất liễu nghĩa là nghĩa tạm thời, chưa phải chủ ý cuối cùng và phải được dẫn dắt bởi các ngôn từ khác.",
      "hint": "Xét nghĩa nào xác quyết chính xác và nghĩa nào còn phải được dẫn dắt bằng lời khác.",
      "memory": "Liễu nghĩa dứt khoát; Bất liễu nghĩa tạm thời và cần giải thích thêm.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_20",
      "text": "Ví dụ Đức Phật tạm thời dạy “có ngã” cho người chấp ngã nhằm làm rõ điều gì?",
      "options": [
        "Đó là Bất liễu nghĩa dùng làm phương tiện trước khi dẫn đến vô ngã.",
        "Đó là Liễu nghĩa vì “có ngã” là chủ ý cuối cùng, dứt khoát và không cần lời dạy nào khác để dẫn dắt về sau.",
        "Đó là Chơn đế vì mọi lời nói ban đầu đều là chân lý tuyệt đối.",
        "Đó là Y ngữ vì hình thức lời nói quan trọng hơn nghĩa cứu cánh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài giải thích rằng lời dạy “có ngã” được dùng tạm thời để dẫn dắt người đang chấp ngã. Chủ ý cuối cùng không phải xác lập có ngã mà là giúp họ dần đi đến lời dạy về vô ngã.",
      "hint": "Phân biệt lời dạy tạm thời vì lợi ích người nghe với chủ ý cuối cùng.",
      "memory": "Phương tiện tạm thời không đồng nhất với chủ ý cuối cùng của lời dạy.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_21",
      "text": "Theo quan điểm Trung Quán luận, tiêu chí nào dùng để phân biệt Liễu nghĩa và Bất liễu nghĩa?",
      "options": [
        "Lời của người nổi tiếng là Liễu nghĩa; lời người khác là Bất liễu nghĩa.",
        "Ngôn từ dễ hiểu là Liễu nghĩa; ngôn từ khó hiểu là Bất liễu nghĩa, không cần quan tâm nội dung có nói về tánh không hay không.",
        "Nói về tánh không là Liễu nghĩa; không nói về tánh không là Bất liễu nghĩa.",
        "Pháp thấy bằng mắt là Liễu nghĩa; pháp của ý là Bất liễu nghĩa."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Theo tài liệu, Trung Quán luận xem những gì nói về tánh không là Liễu nghĩa. Những gì không nói về tánh không được xếp vào Bất liễu nghĩa.",
      "hint": "Tiêu chí của Trung Quán gắn trực tiếp với nội dung tánh không.",
      "memory": "Theo Trung Quán, tánh không là tiêu chí phân định Liễu nghĩa.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_22",
      "text": "Nhận định nào KHÔNG phù hợp với cách giải thích của các trường phái từ Trung Quán trở xuống?",
      "options": [
        "Mọi lời nói về tánh không đều là Liễu nghĩa theo đúng tiêu chí riêng của các trường phái này.",
        "Ngôn từ nào đúng, xác quyết dứt khoát và không cần giải thích thêm theo nghĩa khác thì được gọi là Liễu nghĩa.",
        "Ngôn từ còn cần giải thích thêm thì được xem là Bất liễu nghĩa.",
        "Cách phân loại của các trường phái này dựa vào ngôn từ được trình bày."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Các trường phái từ Trung Quán trở xuống được bài trình bày là phân loại theo ngôn từ: lời đúng không cần giải thích thêm là Liễu nghĩa, lời cần giải thích thêm là Bất liễu nghĩa. Tiêu chí trực tiếp dựa vào nội dung tánh không được nêu riêng cho Trung Quán luận.",
      "hint": "Đây là câu phủ định; không nhập tiêu chí riêng của Trung Quán vào hệ thống khác.",
      "memory": "Trung Quán xét tánh không; các trường phái khác trong bài xét ngôn từ có cần giải thích thêm hay không.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_23",
      "text": "Ví dụ đánh giá một người qua lần gặp đầu rồi sau này hiểu đúng bản chất của họ minh họa điều gì?",
      "options": [
        "Hai cách hiểu đều là Liễu nghĩa vì đều xuất hiện trong tâm người quan sát.",
        "Cảm nhận ban đầu là Liễu nghĩa dứt khoát; hiểu biết về sau chỉ là phương tiện tạm thời và không cần tin cậy.",
        "Cảm nhận ban đầu giống Bất liễu nghĩa; hiểu đúng như họ đang là giống Liễu nghĩa.",
        "Hai cách hiểu đều là Bất liễu nghĩa vì không liên quan đến ngôn từ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cảm nhận ban đầu có thể chỉ là đánh giá tạm thời nên được ví với Bất liễu nghĩa. Khi đã hiểu đúng người ấy như họ đang là, cách hiểu đó được ví với Liễu nghĩa.",
      "hint": "So sánh ấn tượng tạm thời với sự hiểu biết đúng về bản chất.",
      "memory": "Ấn tượng ban đầu có thể tạm thời; hiểu đúng bản chất mới gần với Liễu nghĩa.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_24",
      "text": "Một học viên nói: “Chỉ cần có nhãn thức là có thể trực tiếp thấy hình sắc.” Điểm nào còn thiếu?",
      "options": [
        "Nhãn thức phải dựa vào lời nói của người khác để tạo ra hình sắc.",
        "Nhãn thức phải trở thành vô vi pháp trước khi thấy hình sắc.",
        "Nhãn thức phải thông qua nhãn căn và có hình sắc làm đối tượng.",
        "Nhãn thức phải tách khỏi mọi giác quan mới nhận biết trực tiếp."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhãn thức muốn trực tiếp nhận biết hình sắc phải thông qua giác quan của mắt, tức nhãn căn. Hình sắc đồng thời phải hiện diện với vai trò trần cảnh hay đối tượng được nhận thức.",
      "hint": "Bài khẳng định chỉ có sáu thức thì chưa thể trực tiếp nhận biết đối tượng.",
      "memory": "Thức nhận biết đối tượng phải nương vào Căn và hướng đến Cảnh tương ứng.",
      "difficulty": "Khó"
    },
    {
      "id": "w2_25",
      "text": "Xét bốn nhận định: (1) sắc pháp, tâm pháp, tâm sở và bất tương ưng hành thuộc hữu vi; (2) vô vi pháp là thường hằng; (3) bất tương ưng hành không thuộc sắc hay tâm; (4) tâm sở tồn tại độc lập, không tùy thuộc tâm vương. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ba nhận định đầu phù hợp với cách phân nhóm trong bài. Nhận định (4) sai vì tâm sở được mô tả là tùy tùng, đi cùng và tùy thuộc vào tâm vương là tâm chính, tâm chủ.",
      "hint": "Kiểm tra riêng quan hệ giữa tâm sở và tâm vương.",
      "memory": "Bốn nhóm đầu thuộc hữu vi; tâm sở tùy thuộc tâm vương; vô vi là thường hằng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w2_26",
      "text": "Một học viên cho rằng “pháp” trong sáu trần có thể được mắt, tai, mũi, lưỡi và thân trực tiếp nhận biết. Cách sửa nào đúng nhất?",
      "options": [
        "Pháp không thuộc năm giác quan; đó là đối tượng của ý và được ý thức nhận biết.",
        "Pháp chỉ là hình sắc nên được nhãn thức nhận biết mà không cần nhãn căn.",
        "Pháp đồng thời là âm thanh, mùi, vị và xúc nên mọi căn đều nhận biết như nhau.",
        "Pháp là vô vi nên không thể trở thành đối tượng của bất kỳ nhận thức nào, kể cả ý thức cũng không thể nhận biết."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nói pháp là những gì không thể nghe, thấy, ngửi, nếm hoặc xúc chạm. Pháp là đối tượng của ý và chỉ có ý thức mới nhận thức được nó như thế nào.",
      "hint": "Đối chiếu pháp với năm đối tượng sắc, thanh, hương, vị và xúc.",
      "memory": "Năm giác quan nhận năm trần đầu; ý thức nhận pháp trần.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w2_27",
      "text": "So sánh nào chính xác giữa cách trình bày ba lãnh vực và cách chia năm nhóm pháp?",
      "options": [
        "Ba lãnh vực nêu bất tương ưng hành, tâm thức và sắc pháp; năm nhóm chỉ triển khai ba lãnh vực ấy thành sáu căn, sáu trần, sáu thức mà không thêm vô vi.",
        "Ba lãnh vực nêu bất tương ưng hành, tâm thức, sắc pháp; năm nhóm tách tâm pháp và tâm sở, đồng thời nêu vô vi.",
        "Ba lãnh vực phủ nhận tâm thức; năm nhóm xem mọi pháp đều là sắc pháp.",
        "Hai cách hoàn toàn giống nhau và không có khác biệt về cách triển khai."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cách ba lãnh vực trình bày bất tương ưng hành pháp, tâm thức và sắc pháp. Cách năm nhóm nêu sắc pháp, tâm pháp, tâm sở, bất tương ưng hành và vô vi pháp, qua đó tách tâm vương khỏi tâm sở và đặt vô vi thành một nhóm riêng.",
      "hint": "Chú ý cách năm nhóm trình bày riêng tâm vương, tâm sở và vô vi pháp.",
      "memory": "Các hệ thống cùng khảo sát nền tảng thực hữu nhưng triển khai phạm vi và nhóm pháp khác nhau.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w2_28",
      "text": "Một người xa lạ nói bằng lời bình thường nhưng nội dung đúng sự thật, có lợi ích và diễn đạt nghĩa cứu cánh. Cách tiếp nhận nào đầy đủ nhất?",
      "options": [
        "Chấp nhận vì cảm tính ban đầu, không cần dùng lý luận khảo sát thêm.",
        "Bỏ nội dung vì người nói xa lạ và ngôn từ không tạo được cảm giác cuốn hút.",
        "Chỉ xét hình thức lời nói, không cần kiểm tra lợi ích hay mức độ dứt khoát của nghĩa.",
        "Xét pháp không xét thân phận, nương nghĩa không nương lời và nương nghĩa cứu cánh."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Y pháp bất y nhân yêu cầu không loại bỏ lời nói vì thân phận người nói; Y nghĩa bất y ngữ hướng đến nghĩa lý thay vì vẻ ngoài của lời. Nếu nội dung là nghĩa cứu cánh, người học còn vận dụng Y liễu nghĩa bất y bất liễu nghĩa.",
      "hint": "Kết hợp ba nguyên tắc đầu của tứ y trong cùng một trường hợp.",
      "memory": "Tứ y giúp đi từ người và lời bên ngoài đến pháp, nghĩa lý và nghĩa cứu cánh.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w2_29",
      "text": "Đức Phật tạm dạy “có ngã” rồi sau đó dẫn người học đến vô ngã. Phân tích nào tránh được kết luận hai lời dạy mâu thuẫn?",
      "options": [
        "Cả hai đều là Liễu nghĩa dứt khoát nên người học không cần xác định chủ ý cuối cùng hay phân biệt phương tiện với cứu cánh.",
        "Lời “có ngã” là phương tiện Bất liễu nghĩa; vô ngã mới biểu thị chủ ý cứu cánh trong ví dụ.",
        "Lời “có ngã” là Chơn đế còn vô ngã chỉ là cảm nhận thế tục tạm thời.",
        "Hai lời chỉ khác ngôn từ, còn nghĩa xác quyết cuối cùng hoàn toàn giống nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Lời dạy “có ngã” được dùng tạm thời để dẫn dắt người chấp ngã nên thuộc Bất liễu nghĩa trong ví dụ. Khi nhận ra đây không phải chủ ý cuối cùng và hướng đến vô ngã, người học tránh đồng nhất phương tiện với nghĩa cứu cánh.",
      "hint": "Xác định đâu là phương tiện tùy đối tượng và đâu là chủ ý cuối cùng.",
      "memory": "Phân biệt phương tiện và cứu cánh giúp hiểu các tầng nghĩa mà không kết luận vội là mâu thuẫn.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w2_30",
      "text": "Vì sao bài đặt việc dùng lý luận khảo sát bên cạnh tứ y khi hướng đến nhận thức sự thật như nó đang là?",
      "options": [
        "Vì tứ y chỉ yêu cầu tin người nói, còn lý luận chỉ yêu cầu tin ngôn từ hay.",
        "Vì lý luận thay thế hoàn toàn tứ y, khiến việc xét ý nghĩa trở nên không cần thiết và mọi tầng nghĩa đều trở nên giống nhau.",
        "Vì lý luận giúp kiểm chứng, còn tứ y giúp chọn đúng pháp, nghĩa, cứu cánh và trí tuệ để nương tựa.",
        "Vì cả hai đều nhằm giữ nguyên cảm nhận ban đầu mà không cần kiểm chứng thêm."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Lý luận giúp người học khảo sát và xác quyết lời dạy thay vì chấp nhận chỉ bằng đức tin. Tứ y định hướng điểm tựa đúng: pháp thay vì người, nghĩa thay vì ngữ, liễu nghĩa thay vì bất liễu nghĩa, và trí tuệ thay vì tri thức cảm tính.",
      "hint": "Xem lý luận và tứ y là hai phương diện hỗ trợ nhau, không phải loại trừ nhau.",
      "memory": "Lý luận kiểm chứng; tứ y chỉ rõ điều đáng nương để nhận thức sự thật đúng như nó đang là.",
      "difficulty": "Nâng cao"
    }
  ],
  "week3": [
    {
      "id": "w3_1",
      "text": "Theo bài học, phương pháp nhận thức đối tượng một cách trực tiếp bằng các giác quan được gọi là gì?",
      "options": [
        "Thánh ngôn lượng.",
        "Tỷ lượng.",
        "Hiện lượng.",
        "Nguyên lý chứng thành."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hiện lượng là phương pháp nhận thức đối tượng một cách trực tiếp bằng các giác quan. Khi đối tượng đang hiển hiện và có thể được nhận biết trực tiếp, chúng ta chưa cần dựa vào suy luận hay lời nói đáng tin cậy.",
      "hint": "Nhớ lại loại nhận thức được dùng khi đối tượng có thể được tiếp cận trực tiếp.",
      "memory": "Đối tượng trực tiếp được nhận biết bằng hiện lượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_2",
      "text": "Một đối tượng ẩn tế không thể nhận thức trực tiếp nhưng có thể biết nhờ lý luận thuộc phạm vi nào?",
      "options": [
        "Hiện lượng.",
        "Y trí bất y thức.",
        "Thánh ngôn lượng.",
        "Tỷ lượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tỷ lượng được dùng để nhận thức đối tượng ẩn tế mà giác quan không thể tiếp cận trực tiếp nhưng lý luận vẫn có thể suy ra. Đây là điểm khác với hiện lượng và với Thánh ngôn lượng dành cho phần cực kỳ ẩn tế.",
      "hint": "Xét phương pháp dùng dấu hiệu và lý luận để đi từ điều đã biết đến điều chưa thấy.",
      "memory": "Không thấy trực tiếp nhưng suy luận được thì dùng tỷ lượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_3",
      "text": "Khi một đối tượng cực kỳ ẩn tế không thể nhận thức trực tiếp và cũng không thể tự suy luận, bài học yêu cầu dựa vào đâu?",
      "options": [
        "Dựa vào cảm nhận riêng.",
        "Dựa vào Thánh ngôn lượng.",
        "Dựa vào hình thức bên ngoài.",
        "Dựa vào danh tiếng người nói."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Đối tượng cực kỳ ẩn tế không thể được nhận biết trực tiếp hoặc tự suy luận nên phải dựa vào Thánh ngôn lượng. Bài giải thích đây là lời nói chuẩn mực, đúng đắn và chính xác của nguồn đáng tin cậy.",
      "hint": "Đây là trường hợp cần lời nói chuẩn mực, đúng đắn và chính xác.",
      "memory": "Phần cực kỳ ẩn tế cần Thánh ngôn lượng đủ tiêu chuẩn.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_4",
      "text": "“Y pháp bất y nhân” hướng người học nương tựa theo cách nào?",
      "options": [
        "Dựa vào dòng tộc của người nói.",
        "Dựa vào đất nước của người nói.",
        "Dựa vào danh tiếng nổi bật của người nói.",
        "Dựa vào pháp, không dựa vào người."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Y pháp bất y nhân có nghĩa là dựa vào pháp chứ không lấy con người làm điểm tựa quyết định. Người nói nổi tiếng hay không, thuộc dòng tộc hoặc đất nước nào đều không phải tiêu chí chính.",
      "hint": "Phân biệt nội dung được trình bày với địa vị hoặc lai lịch của người trình bày.",
      "memory": "Y pháp bất y nhân là xét pháp, không chạy theo người.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_5",
      "text": "“Y nghĩa bất y ngữ” nhấn mạnh điều gì khi tiếp nhận một lời giảng?",
      "options": [
        "Tập trung vào người nói thay vì pháp được giảng giải.",
        "Tập trung vào âm điệu và giọng nói hơn nội dung được trình bày.",
        "Tập trung vào nghĩa lý chân thật thay vì lời nói có vẻ hay.",
        "Tập trung vào cảm xúc thay vì nghĩa lý của lời giảng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Y nghĩa bất y ngữ yêu cầu dựa vào ý nghĩa, không bị lôi cuốn chỉ bởi ngôn từ có vẻ hay bên ngoài. Trọng tâm là nghĩa lý chân thật mà lời nói muốn trình bày.",
      "hint": "Xét điều gì quan trọng hơn giữa ngôn từ bên ngoài và ý nghĩa bên trong.",
      "memory": "Y nghĩa bất y ngữ là nương nghĩa lý, không nương vẻ hay của lời nói.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_6",
      "text": "Khi bài nêu “bản chất của lửa là nóng”, nội dung này minh họa nguyên lý nào?",
      "options": [
        "Nguyên lý chức năng.",
        "Nguyên lý phụ thuộc.",
        "Nguyên lý tự nhiên.",
        "Nguyên lý chứng thành."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nguyên lý tự nhiên khảo sát bản thể hoặc bản chất riêng của một sự vật. Lửa có bản chất nóng là ví dụ trực tiếp được dùng trong bài để minh họa nguyên lý này.",
      "hint": "Nguyên lý này khảo sát bản thể hay bản chất riêng của sự vật.",
      "memory": "Nguyên lý tự nhiên trả lời sự vật có bản chất như thế nào.",
      "difficulty": "Dễ"
    },
    {
      "id": "w3_7",
      "text": "Quan sát gương mặt thấy mụn và vết mẩn đỏ, rồi từ đó suy ra bệnh bên trong cơ thể. Cách phân loại nào đúng?",
      "options": [
        "Dấu hiệu và căn bệnh đều thuộc hiện lượng.",
        "Dấu hiệu và căn bệnh đều thuộc tỷ lượng.",
        "Dấu hiệu thuộc tỷ lượng; căn bệnh thuộc Thánh ngôn lượng.",
        "Dấu hiệu thuộc hiện lượng; căn bệnh thuộc tỷ lượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Mụn hoặc vết mẩn đỏ trên gương mặt là dấu hiệu có thể nhận biết trực tiếp nên thuộc hiện lượng. Căn bệnh bên trong không được thấy trực tiếp mà được suy ra từ dấu hiệu, vì vậy thuộc tỷ lượng.",
      "hint": "Tách điều đang được nhìn thấy trực tiếp khỏi điều được suy ra từ dấu hiệu ấy.",
      "memory": "Dấu hiệu trực tiếp thuộc hiện lượng; điều suy ra từ dấu hiệu thuộc tỷ lượng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_8",
      "text": "Một người không thể nhớ mình sinh vào buổi sáng hay buổi tối và cũng không thể tự suy luận. Theo bài, cách nhận biết phù hợp nhất là gì?",
      "options": [
        "Quan sát những dấu hiệu hiện tại trên gương mặt của mình.",
        "Dựa vào lời chuẩn xác của cha mẹ hoặc tư liệu ghi lại.",
        "Chọn thời điểm bản thân cảm thấy hợp lý.",
        "Suy luận từ tính cách đang biểu hiện."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Giờ sinh là điều bản thân không thể trực tiếp nhận biết hoặc tự suy luận nên phải dựa vào lời nói chuẩn xác của người biết rõ, hoặc hình ảnh và video được ghi lại. Trong ví dụ này, phương pháp phù hợp là Thánh ngôn lượng theo nghĩa lời nói đáng tin cậy.",
      "hint": "Đây là ví dụ của điều bản thân không thể thấy trực tiếp hoặc tự suy luận.",
      "memory": "Điều bản thân không thể thấy hoặc suy luận cần nguồn lời nói chuẩn xác.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_9",
      "text": "Ngày giờ sinh có thể cực kỳ ẩn tế đối với bản thân nhưng không cực kỳ ẩn tế đối với cha mẹ. Ví dụ này làm rõ điều gì?",
      "options": [
        "Mọi đối tượng đều cực kỳ ẩn tế với tất cả mọi người.",
        "Mức độ ẩn tế có thể khác nhau tùy chủ thể nhận thức.",
        "Đối tượng cực kỳ ẩn tế không thể được ai nhận biết.",
        "Hiện lượng và Thánh ngôn lượng hoàn toàn giống nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Một đối tượng có thể cực kỳ ẩn tế đối với người này nhưng không như vậy đối với người khác. Ngày giờ sinh không được bản thân trực tiếp biết, trong khi cha mẹ hoặc người ghi nhận sự kiện ấy có thể biết rõ.",
      "hint": "So sánh khả năng biết cùng một sự việc của hai chủ thể khác nhau.",
      "memory": "Tính ẩn tế của đối tượng được xét trong quan hệ với chủ thể nhận thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_10",
      "text": "Điều nào sau đây KHÔNG thuộc các điều kiện để lời nói kinh điển trở thành điểm tựa đáng tin cậy?",
      "options": [
        "Người nói phải nổi tiếng và thuộc dòng tộc cao quý.",
        "Nội dung về nhận thức trực tiếp không bị lệch lạc.",
        "Các suy luận được trình bày phải đúng đắn.",
        "Lời nói nhất quán và người nói không có lý do dối trá."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Danh tiếng hoặc dòng tộc không phải điều kiện được bài nêu để xác lập lời nói đáng tin cậy. Các tiêu chuẩn thực sự gồm không lệch lạc đối với nhận thức trực tiếp, suy luận đúng đắn, lời nói trước sau nhất quán và không có lý do dối trá.",
      "hint": "Đây là câu phủ định; đối chiếu tiêu chuẩn của lời nói với địa vị của người nói.",
      "memory": "Độ đáng tin dựa vào tính đúng đắn và nhất quán, không dựa vào danh tiếng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_11",
      "text": "“Y liễu nghĩa bất y bất liễu nghĩa” yêu cầu ưu tiên loại lời dạy nào?",
      "options": [
        "Lời nói hấp dẫn nhưng cần suy đoán thêm.",
        "Lời nói của người được nhiều người biết đến.",
        "Lời nói phù hợp với cảm nhận và mong muốn riêng của người nghe.",
        "Lời nói rõ ràng, rốt ráo, không cần diễn giải thêm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Liễu nghĩa là lời nói rõ ràng, rốt ráo và không cần phải diễn giải thêm. Vì vậy, nguyên tắc này hướng người học nương vào liễu nghĩa thay vì bất liễu nghĩa.",
      "hint": "Liễu nghĩa được bài giải thích bằng tính rõ ràng và rốt ráo.",
      "memory": "Nương vào liễu nghĩa rõ ràng, rốt ráo; không nương vào bất liễu nghĩa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_12",
      "text": "Một người chỉ tin điều hợp với cảm xúc và kiến thức phân biệt của mình. Người ấy chưa áp dụng đúng nguyên tắc nào?",
      "options": [
        "Y pháp bất y nhân.",
        "Y nghĩa bất y ngữ.",
        "Y trí bất y thức.",
        "Y liễu nghĩa bất y bất liễu nghĩa."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Y trí bất y thức là dựa vào trí tuệ, không dựa vào những kiến thức phân biệt cảm tính. Việc lấy cảm xúc và nhận định riêng làm tiêu chuẩn cho thấy người học vẫn đang nương vào thức thay vì trí.",
      "hint": "Phân biệt trí tuệ với kiến thức phân biệt mang tính cảm tính.",
      "memory": "Y trí bất y thức là lấy trí tuệ làm điểm tựa, không lấy cảm tính làm chuẩn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_13",
      "text": "Biết lửa có bản chất nóng rồi dùng lửa để nấu chín thức ăn là đang vận dụng nguyên lý nào?",
      "options": [
        "Nguyên lý chức năng hay nguyên lý tác dụng.",
        "Nguyên lý tự nhiên hay nguyên lý bản thể.",
        "Nguyên lý phụ thuộc hay nguyên lý nhân duyên.",
        "Nguyên lý chứng thành hay nguyên lý kết quả."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nguyên lý chức năng khảo sát tác dụng phát sinh từ bản chất của sự vật. Vì lửa nóng nên có thể thiêu đốt, nấu chín thức ăn hoặc làm nước nóng lên.",
      "hint": "Câu hỏi tập trung vào điều lửa có thể thực hiện nhờ bản chất nóng.",
      "memory": "Nguyên lý chức năng trả lời sự vật có tác dụng gì từ bản chất của nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_14",
      "text": "Việc lửa chỉ bốc cháy khi có cây diêm, bật lửa và người tác động minh họa phương diện nào?",
      "options": [
        "Sự bình đẳng về bản thể.",
        "Mâu thuẫn trực tiếp.",
        "Nguyên lý phụ thuộc.",
        "Y nghĩa bất y ngữ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nguyên lý phụ thuộc khảo sát sự vật do nhân nào dẫn tới và dựa vào những điều kiện nào để phát sinh tác dụng. Cây diêm, bật lửa và người tác động là các điều kiện hỗ trợ cho lửa cháy lên; những duyên hỗ trợ đồng thời được gọi là câu sanh duyên.",
      "hint": "Xét những nhân và duyên cần thiết để hiện tượng có thể xuất hiện.",
      "memory": "Nguyên lý phụ thuộc xét nhân và duyên làm hiện tượng phát sinh.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_15",
      "text": "Nhìn thấy khói rồi suy luận nơi đó có lửa là ví dụ trực tiếp của nguyên lý nào?",
      "options": [
        "Nguyên lý chứng thành.",
        "Nguyên lý chức năng.",
        "Nguyên lý tự nhiên về bản chất.",
        "Nguyên lý phụ thuộc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nguyên lý chứng thành dùng kết quả để chứng minh sự tồn tại của sự vật. Vì khói được trình bày là kết quả của lửa, nhìn khói có thể suy luận và chứng minh nơi đó có lửa. Từ đó bài nêu chánh nhân là chứng minh chân chánh và tợ nhân là chứng minh tương tợ hay chứng minh sai.",
      "hint": "Nguyên lý này dùng kết quả làm căn cứ chứng minh sự tồn tại của sự vật.",
      "memory": "Nguyên lý chứng thành đi từ kết quả để xác lập sự tồn tại của sự vật.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w3_16",
      "text": "Một diễn giả rất nổi tiếng nhưng lời trình bày trái với nhận thức trực tiếp và suy luận đúng đắn. Cách đánh giá nào sát bài nhất?",
      "options": [
        "Chấp nhận vì danh tiếng bảo đảm lời nói luôn đúng.",
        "Không lấy danh tiếng làm chuẩn; phải khảo sát pháp và tính đúng đắn.",
        "Tạm bỏ qua độ đúng của nội dung và chỉ xét cách diễn đạt hấp dẫn bên ngoài.",
        "Chấp nhận vì người nổi tiếng không có lý do dối trá."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Y pháp bất y nhân không cho phép lấy danh tiếng của người nói làm căn cứ quyết định. Lời nói đáng tin cậy còn phải không trái với nhận thức trực tiếp, có suy luận đúng và trước sau nhất quán.",
      "hint": "Kết hợp Y pháp bất y nhân với tiêu chuẩn của lời nói đáng tin cậy.",
      "memory": "Uy tín của người nói không thay thế việc khảo sát pháp và lý luận.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_17",
      "text": "Một lời giảng dùng ngôn từ rất đẹp nhưng nghĩa lý không chân thật. Tứ y hướng người học xử lý thế nào?",
      "options": [
        "Dựa vào cảm xúc dễ chịu do lời nói tạo ra để kết luận.",
        "Chấp nhận vì lời nói hay là dấu hiệu của liễu nghĩa.",
        "Tin theo nếu người giảng được nhiều người kính trọng.",
        "Bỏ vẻ đẹp ngôn từ sang một bên và khảo sát nghĩa lý."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Y nghĩa bất y ngữ yêu cầu lấy nghĩa lý chân thật làm điểm tựa thay vì bị hấp dẫn bởi cách diễn đạt. Ngôn từ đẹp không thể làm cho một nội dung không chân thật trở thành đáng tin cậy.",
      "hint": "Áp dụng trực tiếp Y nghĩa bất y ngữ.",
      "memory": "Lời hay không thay thế được nghĩa đúng.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_18",
      "text": "Một bản kinh có suy luận hợp lý ở vài đoạn nhưng lời trước sau mâu thuẫn nhau. Nhận định nào KHÔNG phù hợp với tiêu chuẩn của bài?",
      "options": [
        "Bản kinh vẫn đủ đáng tin chỉ vì có một vài suy luận hợp lý.",
        "Lời nói trước sau nhất quán là một điều kiện của nguồn đáng tin cậy.",
        "Một vài suy luận đúng không bù cho mâu thuẫn của toàn bộ lời trình bày.",
        "Cần xét nhận thức trực tiếp, suy luận, tính nhất quán và lý do nói thật."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhận định cho rằng chỉ cần một vài suy luận hợp lý là đủ đáng tin không phù hợp với bài. Lời nói còn phải không lệch lạc đối với nhận thức trực tiếp, có suy luận đúng, trước sau nhất quán và người nói không có lý do dối trá.",
      "hint": "Đây là câu phủ định; một nguồn đáng tin cậy phải đáp ứng đồng thời nhiều điều kiện.",
      "memory": "Một phần suy luận đúng không thể thay thế tính đúng đắn và nhất quán của toàn bộ lời nói.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_19",
      "text": "Bài dùng quả vị Phật để làm rõ yêu cầu nào của luật nhân quả?",
      "options": [
        "Quả lớn có thể sinh từ bất kỳ nhân nhỏ nào.",
        "Chỉ cần mong muốn quả lớn mà không cần tạo nhân.",
        "Nhân và quả hoàn toàn không cần có mối quan hệ tương ứng với nhau.",
        "Quả rộng lớn đòi hỏi những nguyên nhân tương xứng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Quả vị Phật loại trừ mọi lỗi lầm và thành tựu các phẩm chất cao đẹp nên là một cái quả rộng lớn. Vì nhân quả phải tương ưng, người muốn đạt quả ấy phải học rộng, hiểu nhiều và tạo những nguyên nhân tương xứng.",
      "hint": "Đối chiếu độ rộng lớn của quả vị với loại nhân cần gieo trồng.",
      "memory": "Nhân phải chân chánh và tương xứng với quả muốn đạt.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_20",
      "text": "Cách ghép nào phân biệt đúng hai dạng mâu thuẫn được trình bày trong bài?",
      "options": [
        "Thường – vô thường không cùng chỗ; nóng – lạnh bình đẳng bản thể.",
        "Thường – vô thường liên quan sinh khởi; nóng – lạnh bao quát nhau.",
        "Thường – vô thường mâu thuẫn trực tiếp; nóng – lạnh không cùng tồn tại.",
        "Thường – vô thường bình đẳng về bản thể; nóng – lạnh liên quan sinh khởi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Thường và vô thường là ví dụ của mâu thuẫn trực tiếp: cái gì thường thì không thể vô thường và ngược lại. Nóng và lạnh được dùng để minh họa dạng không cùng tồn tại một chỗ và loại trừ lẫn nhau.",
      "hint": "Một cặp loại trừ nhau ngay trong ý nghĩa; cặp kia không cùng tồn tại và tổn hại lẫn nhau.",
      "memory": "Mâu thuẫn gồm trực tiếp và không cùng tồn tại, loại trừ lẫn nhau.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_21",
      "text": "Cặp nào minh họa sự liên quan cùng bản thể theo phương diện bình đẳng với nhau?",
      "options": [
        "Cây và cây hương trầm trong quan hệ bao quát.",
        "Cái được làm ra và vô thường.",
        "Lửa và khói sinh ra.",
        "Nóng và lạnh đối trị."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài nêu cái được làm ra và vô thường là hai pháp bình đẳng về phương diện bản thể: cái gì được làm ra thì vô thường và cái gì vô thường thì được làm ra. Đây không phải quan hệ bao quát hay quan hệ từ nhân sinh quả.",
      "hint": "Tìm cặp mà mỗi bên đều có thể được xác lập qua bên còn lại theo bài.",
      "memory": "Cái được làm ra và vô thường là ví dụ cùng bản thể bình đẳng.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_22",
      "text": "Trong ví dụ “cây” và “cây saba”, cách hiểu nào đúng về quan hệ bao quát?",
      "options": [
        "Cây bao quát cây saba; cây saba không bao quát mọi cây.",
        "Cây saba bao quát mọi loại cây vì nó cụ thể hơn.",
        "Hai khái niệm bình đẳng vì đều chỉ cùng một loại cây.",
        "Hai khái niệm mâu thuẫn trực tiếp vì một bên rộng, một bên hẹp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Cây” là khái niệm tổng quát bao hàm cây saba và các loại cây cụ thể khác. Cây saba là cái chi tiết nên không thể bao quát tất cả các cây.",
      "hint": "Xác định khái niệm tổng quát và loại cây chi tiết nằm bên dưới nó.",
      "memory": "Cái tổng quát bao trùm cái chi tiết; cái chi tiết không bao trùm toàn bộ cái tổng quát.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_23",
      "text": "Vì sao lửa và khói được xếp vào sự liên quan sinh khởi?",
      "options": [
        "Vì khói sinh từ lửa và phụ thuộc vào lửa để khởi sinh.",
        "Vì lửa bao quát khói như cây bao quát cây saba.",
        "Vì lửa và khói chỉ là hai cách gọi khác nhau của cùng một bản thể.",
        "Vì lửa và khói không thể cùng xuất hiện tại một nơi."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Khói được trình bày là kết quả sinh ra từ lửa nên phụ thuộc vào lửa. Đây là quan hệ từ nhân sinh quả, khác với quan hệ cùng bản thể và quan hệ tổng quát – chi tiết.",
      "hint": "Xét quan hệ từ nhân dẫn tới quả, không phải quan hệ khái niệm bao quát.",
      "memory": "Liên quan sinh khởi là quan hệ quả phụ thuộc vào nhân để phát sinh.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_24",
      "text": "Trong đêm tối không nhìn thấy khói, nếu xác quyết không có lửa thì theo bài có thể suy ra điều gì?",
      "options": [
        "Khói vẫn chắc chắn có vì không phụ thuộc vào lửa.",
        "Không có khói vì không có nhân thì quả không thể sinh.",
        "Có khói hay không chỉ phụ thuộc vào cảm nhận người quan sát.",
        "Không thể nói gì vì nhân và quả hoàn toàn tách rời."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Khói là kết quả của lửa và phụ thuộc vào lửa để sinh khởi. Vì vậy, khi nhân là lửa đã được xác quyết không có thì quả là khói cũng không thể phát sinh.",
      "hint": "Áp dụng nền tảng phụ thuộc: khi nhân không có thì quả thế nào?",
      "memory": "Trong quan hệ sinh khởi, không có nhân thì không có quả.",
      "difficulty": "Khó"
    },
    {
      "id": "w3_25",
      "text": "Xét bốn nhận định: (1) dấu hiệu trên gương mặt có thể được nhận biết bằng hiện lượng; (2) bệnh bên trong có thể được suy ra bằng tỷ lượng; (3) giờ sinh không thể tự biết có thể dựa vào lời nói chuẩn xác; (4) một đối tượng cực kỳ ẩn tế với một người thì nhất định cực kỳ ẩn tế với mọi người. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ba nhận định đầu đúng với các ví dụ trong bài: dấu hiệu được thấy trực tiếp, căn bệnh được suy ra và giờ sinh có thể dựa vào lời chuẩn xác. Nhận định (4) sai vì một đối tượng cực kỳ ẩn tế với người này chưa chắc cực kỳ ẩn tế với người khác.",
      "hint": "Kiểm tra riêng nhận định về việc mức độ ẩn tế có giống nhau đối với mọi chủ thể hay không.",
      "memory": "Ba sở lượng phụ thuộc cách đối tượng được nhận biết; mức độ ẩn tế còn tùy chủ thể.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w3_26",
      "text": "Chuỗi phân tích nào vận dụng đúng bốn nguyên lý khi khảo sát lửa?",
      "options": [
        "Nóng là tự nhiên; nấu chín là chức năng; cây diêm là phụ thuộc; khói là chứng thành.",
        "Nóng là chức năng; nấu chín là tự nhiên; cây diêm là chứng thành; khói là phụ thuộc.",
        "Nóng là phụ thuộc; nấu chín là chứng thành; cây diêm là chức năng; khói là tự nhiên.",
        "Nóng là chứng thành; nấu chín là phụ thuộc; cây diêm là tự nhiên; khói là chức năng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bản chất nóng thuộc nguyên lý tự nhiên; khả năng nấu chín thuộc nguyên lý chức năng. Cây diêm và các điều kiện hỗ trợ thuộc nguyên lý phụ thuộc, còn khói được dùng để chứng minh có lửa nên thuộc nguyên lý chứng thành.",
      "hint": "Đi lần lượt từ bản chất, tác dụng, nhân duyên hỗ trợ đến dấu hiệu chứng minh.",
      "memory": "Tự nhiên – chức năng – phụ thuộc – chứng thành lần lượt xét bản chất, tác dụng, điều kiện và chứng cứ.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w3_27",
      "text": "Khói vừa được dùng trong nguyên lý chứng thành vừa xuất hiện trong quan hệ sinh khởi. Phân tích nào đầy đủ nhất?",
      "options": [
        "Khói là bản chất tự nhiên của lửa và đồng thời bao quát toàn bộ lửa.",
        "Khói là kết quả sinh từ lửa và là dấu hiệu để suy ra lửa.",
        "Khói đối nghịch với lửa và đồng thời loại trừ lửa.",
        "Khói là chức năng của lửa và không phụ thuộc vào lửa."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Trong quan hệ sinh khởi, khói là kết quả phụ thuộc vào lửa để phát sinh. Trong nguyên lý chứng thành, chính kết quả ấy được dùng làm dấu hiệu để suy luận và chứng minh sự tồn tại của lửa.",
      "hint": "Phân biệt vai trò của khói trong quan hệ nhân – quả với vai trò làm căn cứ suy luận.",
      "memory": "Một kết quả có thể vừa phụ thuộc vào nhân, vừa làm dấu hiệu chứng minh nhân.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w3_28",
      "text": "Một học viên cho rằng bất cứ điều gì không nhìn thấy trực tiếp đều phải dựa vào Thánh ngôn lượng. Cách sửa nào sát bài nhất?",
      "options": [
        "Đúng, vì tỷ lượng cũng chỉ là một loại lời nói đáng tin cậy.",
        "Đúng, vì lý luận hoàn toàn không thể nhận biết bất kỳ đối tượng ẩn tế nào nếu giác quan không thấy.",
        "Chưa đúng, vì mọi điều không thấy đều có thể nhận bằng giác quan khác.",
        "Chưa đúng, vì phần ít ẩn tế dùng tỷ lượng; phần cực kỳ ẩn tế mới cần Thánh ngôn lượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Không nhìn thấy trực tiếp chưa đồng nghĩa với việc phải dùng Thánh ngôn lượng. Đối tượng ít ẩn tế vẫn có thể được nhận biết bằng dấu hiệu và lý luận, còn phần cực kỳ ẩn tế không thể tự suy luận mới cần lời nói đáng tin cậy.",
      "hint": "Tách đối tượng ít ẩn tế có thể suy luận khỏi đối tượng cực kỳ ẩn tế.",
      "memory": "Không trực tiếp nhưng suy luận được thì dùng tỷ lượng; không thể tự suy luận mới cần Thánh ngôn lượng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w3_29",
      "text": "Cách rèn luyện nào phản ánh đúng mục đích của Nhiếp Loại Học được nêu trong bài?",
      "options": [
        "Học thuộc lời của người nổi tiếng để trả lời nhanh mà không cần khảo sát nội dung bằng lý luận.",
        "Tập phản xạ tư duy nhanh để bác bỏ cái sai và chứng minh cái đúng bằng lý luận.",
        "Chỉ quan sát trực tiếp và tránh dùng suy luận trong mọi tình huống.",
        "Dựa vào cảm tính để lựa chọn quan điểm phù hợp với bản thân."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Những nội dung này thuộc môn Nhân minh học/Nhân loại học, được rút ra từ Lượng luận để kết hợp thành Nhiếp Loại Học. Môn học rèn phản xạ tư duy nhanh để nhận định đúng sai, bác bỏ cái sai hoặc chứng minh cái đúng qua ba cấp độ: bậc tiểu, bậc trung và bậc cao.",
      "hint": "Bài liên hệ môn học này với khả năng nhận định đúng sai và phản ứng tư duy.",
      "memory": "Nhiếp Loại Học rèn phản xạ lý luận để phân định đúng sai.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w3_30",
      "text": "Có học viên cho rằng “Y pháp bất y nhân” mâu thuẫn với việc phải dựa vào lời người khác để biết đối tượng cực kỳ ẩn tế. Cách giải thích nào đúng nhất?",
      "options": [
        "Có mâu thuẫn vì đã dựa vào pháp thì không được nghe, kiểm tra hay sử dụng bất kỳ lời nói nào của người khác.",
        "Có mâu thuẫn vì Thánh ngôn lượng chỉ dựa vào danh tiếng của người nói.",
        "Không mâu thuẫn vì điều cần nương là lời chuẩn mực đủ tiêu chuẩn, không phải tin người một cách mù quáng.",
        "Không mâu thuẫn vì mọi lời nói của người khác đều chính xác như nhau."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Y pháp bất y nhân ngăn việc lấy địa vị hoặc danh tiếng của người nói làm căn cứ. Khi nhận biết đối tượng cực kỳ ẩn tế, người học nương vào lời nói chuẩn mực đã được xét về nhận thức trực tiếp, suy luận, tính nhất quán và động cơ nói thật.",
      "hint": "Phân biệt việc tin người theo danh tiếng với việc khảo sát lời nói có đủ tiêu chuẩn hay không.",
      "memory": "Nương lời đáng tin cậy không phải là tin người mù quáng; pháp và tiêu chuẩn đúng đắn vẫn là điểm tựa.",
      "difficulty": "Nâng cao"
    }
  ],
  "week4": [
    {
      "id": "w4_1",
      "text": "Theo bài, Logic học hay Nhiếp loại học thực hiện chức năng chính nào?",
      "options": [
        "Ghi nhớ nghi thức tranh biện để thay thế việc khảo sát đối tượng.",
        "Sử dụng lý luận để khảo sát và nhận thức các đối tượng.",
        "Dựa vào niềm tin sẵn có để kết luận bản chất của mọi pháp.",
        "Thu gom thuật ngữ mà không cần phân tích ý nghĩa hay quan hệ."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Logic học hay Nhiếp loại học là phần sử dụng lý luận để khảo sát và nhận thức các đối tượng. Việc học không dừng ở ghi nhớ thuật ngữ mà nhằm rèn năng lực phân tích bản chất của sự vật, hiện tượng và tư duy.",
      "hint": "Hãy tìm phương tiện được dùng để khảo sát và nhận thức đối tượng.",
      "memory": "Nhiếp loại học dùng lý luận để khảo sát và nhận thức đối tượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_2",
      "text": "Trong hệ thống Sở tri và Sở lượng của bài, đặc điểm nào đúng với đối tượng có thể nhận thức trực tiếp?",
      "options": [
        "Đối tượng phải nhờ suy luận mới có thể được nhận biết.",
        "Đối tượng chỉ nhờ lời chuẩn xác mới có thể được biết.",
        "Đối tượng vượt ngoài cả nhận thức trực tiếp lẫn suy luận.",
        "Đối tượng có thể được nhận thức trực tiếp bằng Hiện lượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trong hệ thống Sở tri và Sở lượng được trình bày, đối tượng thuộc nhóm này được nhận thức trực tiếp bằng Hiện lượng, không cần đi qua suy luận hay Thánh ngôn lượng. Bài đặt nhóm ấy bên cạnh đối tượng hơi ẩn tế và đối tượng cực kỳ ẩn tế để lựa chọn phương thức nhận thức phù hợp.",
      "hint": "Phân biệt đối tượng hiển lộ với đối tượng cần suy luận hoặc lời đáng tin cậy.",
      "memory": "Đối tượng hiển lộ được nhận thức trực tiếp bằng Hiện lượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_3",
      "text": "Khi một đối tượng cực kỳ ẩn tế không thể tiếp cận bằng nhận thức trực tiếp hay suy luận, bài hướng dẫn dùng phương thức nào?",
      "options": [
        "Dựa vào Thánh ngôn lượng, tức lời chuẩn xác và đáng tin cậy.",
        "Dựa hoàn toàn vào hình tướng trực tiếp đang hiện ra trước giác quan.",
        "Dùng một suy luận bất kỳ dù nhân chứng minh chưa được thành lập.",
        "Xem đối tượng ấy không tồn tại vì hiện lượng không tiếp cận được."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Đối tượng cực kỳ ẩn tế cần được nhận thức nhờ Thánh ngôn lượng, tức lời chuẩn xác và đáng tin cậy. Không thể vì hiện lượng hoặc suy luận không tiếp cận được mà vội kết luận đối tượng ấy không tồn tại.",
      "hint": "Đây là mức độ ẩn tế vượt ngoài cả nhận thức trực tiếp lẫn suy luận.",
      "memory": "Đối tượng cực kỳ ẩn tế cần Thánh ngôn lượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_4",
      "text": "Cách diễn đạt nào đúng với nguyên tắc “Y pháp bất y nhân”?",
      "options": [
        "Dựa vào uy tín của người dạy, không cần xét lời dạy.",
        "Dựa vào ngôn từ diễn đạt, không cần tìm hiểu nghĩa lý.",
        "Dựa vào pháp hay lời dạy, không dựa vào người dạy.",
        "Dựa vào tri thức sẵn có, không cần vận dụng trí tuệ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "“Y pháp bất y nhân” là dựa vào pháp hay lời dạy, không dựa vào người dạy. Vì vậy, người học phải xét nội dung được trình bày thay vì lấy danh tiếng hoặc vị thế của người nói làm căn cứ quyết định.",
      "hint": "Đối chiếu trực tiếp hai vế “pháp” và “nhân”.",
      "memory": "Y pháp bất y nhân: nương pháp, không nương người.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_5",
      "text": "Trong lập luận “Âm thanh là vô thường vì được làm ra”, đâu là Hữu pháp hay cơ sở tranh luận?",
      "options": [
        "Vô thường.",
        "Âm thanh.",
        "Được làm ra.",
        "Nhân chứng minh."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Trong ví dụ của bài, “âm thanh” là Hữu pháp hay cơ sở tranh luận. “Vô thường” là điều được chứng minh, còn “được làm ra” là Nhân chứng minh hay lý do chứng minh.",
      "hint": "Hữu pháp là đối tượng đang được đem ra để thành lập điều cần chứng minh.",
      "memory": "Âm thanh là Hữu pháp trong lập luận mẫu của bài.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_6",
      "text": "Trong tranh biện, câu “Nhân không thành” biểu thị điều gì?",
      "options": [
        "Người trả lời không thừa nhận nhân mà người hỏi đưa ra.",
        "Người trả lời chấp nhận toàn bộ điều đang được chứng minh.",
        "Người trả lời cho rằng nhân không bao khắp điều chứng minh.",
        "Người trả lời yêu cầu xác lập lại chính điều đối phương nêu."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Nhân không thành” được dùng khi người trả lời không thừa nhận nhân mà đối phương nêu. Câu này khác với “Không bao khắp”, vốn phản bác quan hệ bao khắp giữa nhân và điều được chứng minh.",
      "hint": "Tập trung vào việc người trả lời có thừa nhận lý do chứng minh hay không.",
      "memory": "Không thừa nhận lý do chứng minh thì đáp “Nhân không thành”.",
      "difficulty": "Dễ"
    },
    {
      "id": "w4_7",
      "text": "Một đối tượng hơi ẩn tế không thể nhận biết ngay nhưng có thể được xác lập bằng lý do. Cách tiếp cận nào sát bài nhất?",
      "options": [
        "Nhận biết ngay bằng nhận thức trực tiếp, không qua lý luận.",
        "Chỉ tiếp cận bằng lời nói chuẩn xác và đáng tin cậy.",
        "Không thể nhận biết vì đối tượng đã vượt ngoài mọi phương thức.",
        "Nhận biết bằng Tỷ lượng, dùng lý do để xác lập đối tượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối tượng hơi ẩn tế được nhận biết bằng Tỷ lượng, tức thông qua suy luận và lý do để đi đến kết luận. Thánh ngôn lượng được dành cho đối tượng cực kỳ ẩn tế, còn Hiện lượng áp dụng cho đối tượng hiển lộ.",
      "hint": "Đây là đối tượng chưa hiển lộ trực tiếp nhưng vẫn nằm trong phạm vi suy luận.",
      "memory": "Đối tượng hơi ẩn tế được nhận biết bằng Tỷ lượng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_8",
      "text": "Hai người dùng cách diễn đạt khác nhau nhưng cùng hướng đến một nghĩa lý. Nguyên tắc nào giúp người học không mắc kẹt ở lời văn?",
      "options": [
        "Y pháp bất y nhân, vì chỉ cần biết ai là người đang nói.",
        "Y trí bất y thức, vì mọi cách diễn đạt đều không cần khảo sát.",
        "Y nghĩa bất y ngữ, vì cần nương nghĩa lý thay vì ngôn từ.",
        "Y liễu nghĩa bất y bất liễu nghĩa, vì chỉ xét hình thức câu chữ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "“Y nghĩa bất y ngữ” dạy dựa vào ý nghĩa, không dựa vào ngôn từ. Ngôn từ là phương tiện diễn đạt; điều cần thấu hiểu và khảo sát là nghĩa lý được chuyển tải.",
      "hint": "Tìm nguyên tắc trực tiếp đối chiếu “nghĩa” với “ngữ”.",
      "memory": "Y nghĩa bất y ngữ: nương nghĩa, không mắc kẹt ở lời.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_9",
      "text": "Khi phải lựa chọn giữa cách giải thích liễu nghĩa và bất liễu nghĩa, người học nên vận dụng nguyên tắc nào?",
      "options": [
        "Y liễu nghĩa bất y bất liễu nghĩa.",
        "Y nghĩa bất y ngữ, tức nương vào nghĩa lý.",
        "Y pháp bất y nhân, tức nương vào pháp.",
        "Y trí bất y thức, tức nương vào trí tuệ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Y liễu nghĩa bất y bất liễu nghĩa” là nương vào liễu nghĩa, không nương vào bất liễu nghĩa. Đây là một trong Tứ y được bài đưa ra để giúp quá trình khảo sát không bị sai lệch.",
      "hint": "Tên của nguyên tắc đã nêu trực tiếp hai loại nghĩa cần phân biệt.",
      "memory": "Nương liễu nghĩa, không nương bất liễu nghĩa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_10",
      "text": "Một học viên có nhiều tri thức nhưng chưa dùng trí tuệ để thẩm định điều mình biết. Nguyên tắc nào trực tiếp hiệu chỉnh cách học ấy?",
      "options": [
        "Y pháp bất y nhân, vì chỉ cần đổi người truyền đạt.",
        "Y nghĩa bất y ngữ, vì tri thức và trí tuệ hoàn toàn đồng nghĩa.",
        "Y liễu nghĩa bất y bất liễu nghĩa, vì không cần tự khảo sát.",
        "Y trí bất y thức, vì cần nương trí tuệ thay vì tri thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Y trí bất y thức” là dựa vào trí tuệ, không dựa vào tri thức. Nguyên tắc này nhắc người học phải thẩm định điều đã biết bằng tư duy và khảo sát, chứ không chỉ tích lũy thông tin.",
      "hint": "Đối chiếu đúng hai thuật ngữ “trí” và “thức”.",
      "memory": "Y trí bất y thức: nương trí tuệ để thẩm định tri thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_11",
      "text": "Cách giải thích nào đúng với hai chữ “Loại” và “Nhiếp” trong tên Nhiếp loại học?",
      "options": [
        "“Loại” là gom gọn; “Nhiếp” là chỉ một đối tượng không thể phân loại.",
        "“Loại” là các loại hay phân loại; “Nhiếp” mang nghĩa gom gọn.",
        "“Loại” là lời đáng tin cậy; “Nhiếp” là nhận thức trực tiếp.",
        "“Loại” là nghi thức tranh biện; “Nhiếp” là bốn câu trả lời."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Theo phần giải thích thuật ngữ, “Loại” mang nghĩa các loại, phân loại và các pháp đặt tên cho thuật ngữ. “Nhiếp” có nghĩa là gom gọn, phù hợp với việc trích chiết nội dung rộng sâu thành môn học dễ tiếp cận hơn.",
      "hint": "Một chữ nói đến phân loại, chữ còn lại nói đến việc thu gọn.",
      "memory": "“Loại” là phân loại; “Nhiếp” là gom gọn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_12",
      "text": "Mối liên hệ nào giữa Nhiếp loại học và Thích lượng luận được bài trình bày đúng?",
      "options": [
        "Nhiếp loại học thay thế Thích lượng luận vì hai môn có nội dung đối nghịch.",
        "Thích lượng luận được biên soạn từ các nghi thức vỗ tay của Nhiếp loại học.",
        "Thuật ngữ từ Thích lượng luận của ngài Pháp Xứng được trích chiết và tinh gọn.",
        "Nhiếp loại học chỉ giữ tên thuật ngữ và loại bỏ toàn bộ lý luận của bản gốc."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhiếp loại học bắt nguồn từ Thích lượng luận của ngài Pháp Xứng, còn được gọi là Nhận thức luận Phật giáo. Các thuật ngữ rộng và sâu được trích chiết, tinh gọn để người mới bắt đầu học Triết học dễ tiếp cận hơn.",
      "hint": "Bài nhấn mạnh việc làm cho nội dung rộng sâu trở nên dễ tiếp cận với người mới.",
      "memory": "Nhiếp loại học tinh gọn thuật ngữ từ Thích lượng luận của ngài Pháp Xứng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_13",
      "text": "Trong lập luận “Âm thanh là vô thường vì được làm ra”, đâu là điều được chứng minh?",
      "options": [
        "Âm thanh.",
        "Được làm ra.",
        "Hữu pháp.",
        "Vô thường."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Vô thường” là điều được chứng minh trong lập luận mẫu. “Âm thanh” là Hữu pháp, còn “được làm ra” là Nhân chứng minh dùng để thành lập tính vô thường của âm thanh.",
      "hint": "Tìm thuộc tính mà người hỏi muốn thành lập trên Hữu pháp.",
      "memory": "Vô thường là điều được chứng minh trong lập luận mẫu.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_14",
      "text": "Cụm nào giữ vai trò Nhân chứng minh trong lập luận “Âm thanh là vô thường vì được làm ra”?",
      "options": [
        "Âm thanh.",
        "Được làm ra.",
        "Vô thường.",
        "Cơ sở tranh luận."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cụm “được làm ra” là Nhân chứng minh hay lý do chứng minh. Lý do này được dùng để thành lập điều cần chứng minh là “vô thường” trên Hữu pháp “âm thanh”.",
      "hint": "Nhân chứng minh là lý do đứng sau chữ “vì”.",
      "memory": "Phần đứng sau “vì” là Nhân chứng minh trong ví dụ này.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_15",
      "text": "Người hỏi nêu “Âm thanh là vô thường vì được làm ra”, nhưng người trả lời không thừa nhận âm thanh được làm ra. Câu đáp nào đúng quy tắc?",
      "options": [
        "Nhân không thành.",
        "Không bao khắp.",
        "Chấp nhận.",
        "Tại sao?"
      ],
      "correctAnswerIndex": 0,
      "explanation": "Khi không thừa nhận “được làm ra” là nhân được thành lập đối với âm thanh, người trả lời đáp “Nhân không thành”. “Không bao khắp” chỉ thích hợp khi vấn đề nằm ở quan hệ giữa nhân và điều được chứng minh.",
      "hint": "Người trả lời đang bác bỏ chính lý do được gắn với âm thanh.",
      "memory": "Bác bỏ nhân trên Hữu pháp thì đáp “Nhân không thành”.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w4_16",
      "text": "Người trả lời thừa nhận âm thanh được làm ra nhưng không thừa nhận rằng “được làm ra” bao khắp “vô thường”. Câu đáp nào phù hợp?",
      "options": [
        "Chấp nhận, vì nhân đã được thừa nhận trên Hữu pháp và đủ bao khắp điều chứng minh.",
        "Tại sao?, vì cần đổi âm thanh thành một Hữu pháp khác.",
        "Không bao khắp, vì quan hệ từ nhân đến điều chứng minh bị bác bỏ.",
        "Nhân không thành, vì người trả lời phủ nhận âm thanh tồn tại."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Trong tình huống này, nhân “được làm ra” đã được thừa nhận trên âm thanh nhưng quan hệ bao khắp với “vô thường” bị bác bỏ. Vì vậy, câu trả lời đúng là “Không bao khắp”, không phải “Nhân không thành”.",
      "hint": "Nhân đã được thừa nhận; điểm bị phản bác là phạm vi của nhân đối với điều cần chứng minh.",
      "memory": "Bác bỏ quan hệ bao khắp giữa nhân và điều chứng minh thì đáp “Không bao khắp”.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_17",
      "text": "Theo quy ước được nêu trong bài, khi người trả lời không đồng ý với điều đối phương đặt ra thì dùng câu nào?",
      "options": [
        "Chấp nhận.",
        "Tại sao?",
        "Nhân không thành.",
        "Không bao khắp."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài ghi rõ “Tại sao?” được dùng khi không đồng ý với điều đối phương đặt ra. Hai câu “Nhân không thành” và “Không bao khắp” lần lượt nhắm đến nhân và quan hệ bao khắp của nhân.",
      "hint": "Bài chú thích trực tiếp ý nghĩa của một trong bốn câu trả lời.",
      "memory": "Không đồng ý với điều được đặt ra thì hỏi “Tại sao?”.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_18",
      "text": "Các trường hợp bình không chân, bình bị thủng hoặc bình vỡ miệng được nêu nhằm kiểm tra điều gì?",
      "options": [
        "Kiểm tra xem mọi vật tròn và chứa nước đều nhất thiết được gọi là cái bình hay không.",
        "Chứng minh khả năng chứa nước là thuộc tính duy nhất của cái bình.",
        "Loại bỏ mọi cái bình hư khỏi phạm vi của tên gọi “cái bình”.",
        "Thử độ vững của định nghĩa bằng những trường hợp có thể tạo ngoại lệ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Các ví dụ được dùng để phản biện định nghĩa cái bình dựa trên bụng tròn, chân đế và khả năng chứa nước. Chúng cho thấy một định nghĩa phải được thử trước những trường hợp ngoại lệ để tiếp tục làm rõ bản chất của đối tượng.",
      "hint": "Hãy xem mỗi ví dụ có làm định nghĩa ban đầu trở nên quá hẹp hoặc thiếu chính xác hay không.",
      "memory": "Phản ví dụ giúp kiểm tra và hiệu chỉnh định nghĩa.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_19",
      "text": "Nếu định nghĩa con người bằng khả năng nghe, nói và hiểu nghĩa, ví dụ người điếc hoặc người câm làm lộ ra vấn đề nào?",
      "options": [
        "Khả năng nghe và nói đã đủ để xác lập mọi trường hợp là con người.",
        "Người điếc hoặc người câm phải được loại khỏi phạm vi con người.",
        "Định nghĩa ấy có thể loại sai trường hợp nên cần tiếp tục phản biện.",
        "Chỉ cần bổ sung hình dáng bên ngoài là định nghĩa sẽ không còn ngoại lệ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Ví dụ người điếc hoặc người câm cho thấy tiêu chí nghe và nói có thể loại sai một trường hợp vẫn được gọi là con người. Bài dùng phản biện này để cho thấy việc xác định bản thể của con người đòi hỏi lý luận và khảo sát kỹ hơn.",
      "hint": "Xét xem việc thiếu một khả năng có thật sự làm một người không còn là con người hay không.",
      "memory": "Một tiêu chí chưa vững có thể loại sai đối tượng cần định nghĩa.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_20",
      "text": "Cách học nào phù hợp nhất với mục đích chuẩn bị trước khi bước vào Thích lượng luận?",
      "options": [
        "Khảo sát đối tượng qua nhân-quả, phụ thuộc duyên khởi và bốn nguyên lý.",
        "Thay mọi lý luận bằng ghi nhớ thuật ngữ để tránh câu hỏi phản hồi.",
        "Chỉ học nghi thức vỗ tay mà không cần xác định bản chất sự vật.",
        "Dựa vào hình tướng hoặc niềm tin sẵn có để kết luận nhanh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhiếp loại học giúp khảo sát đối tượng qua nhân-quả, phụ thuộc duyên khởi, nguyên lý tự nhiên, nguyên lý chức năng, nguyên lý phụ thuộc và nguyên lý chứng cứ. Quá trình ấy rèn tư duy sắc bén và tạo nền tảng để tiếp cận Thích lượng luận về sau.",
      "hint": "Bài nêu các phương diện khảo sát giúp người học làm quen với hệ thống thuật ngữ chuẩn xác.",
      "memory": "Nhiếp loại học rèn phương pháp khảo sát làm nền cho Thích lượng luận.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_21",
      "text": "Theo bài, tiến trình nào có thể giúp loại trừ tâm chấp thường?",
      "options": [
        "Chỉ cầu nguyện để tâm sai lạc tự biến mất mà không cần tư duy.",
        "Trì tụng thay cho việc khảo sát vì lý luận làm niềm tin lung lay.",
        "Chờ sự gia trì xóa bỏ tâm chấp thường mà không cần đưa ra lý do.",
        "Dùng tâm biết khảo sát vô thường, lập lý do và phát khởi hiểu biết đúng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tâm chấp thường là tâm sai lạc, điên đảo và không thể được xóa bỏ chỉ bằng cầu nguyện hay trì tụng. Người học phải dùng tâm biết để khảo sát sự vô thường, đưa ra lý do và phát khởi nhận thức đúng đắn.",
      "hint": "Bài phân biệt rõ sự cầu nguyện đơn thuần với quá trình tự tư duy và khảo sát.",
      "memory": "Muốn loại trừ tâm chấp thường phải tư duy và khảo sát về vô thường.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_22",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với cách bài trình bày về niềm tin trước các ý kiến trái chiều?",
      "options": [
        "Niềm tin thiếu khảo sát có thể bị lay chuyển khi gặp sự phủ nhận.",
        "Niềm tin chỉ cần đủ mạnh, không cần biết tại sao có hay không.",
        "Tự khảo sát bằng lý luận giúp niềm tin trở nên kiên định hơn.",
        "Hiểu rõ căn cứ giúp người học không dễ đổi theo ý kiến trái chiều."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B không phù hợp vì bài cảnh báo rằng nếu chỉ tin mà không biết tại sao có hoặc tại sao không thì niềm tin dễ bị lung lay. Việc tự khảo sát và tư duy kỹ bằng lý luận mới giúp niềm tin đứng vững trước ý kiến trái chiều.",
      "hint": "Đây là câu phủ định; tìm phương án xem cường độ niềm tin có thể thay thế lý do hay không.",
      "memory": "Niềm tin kiên định cần được nâng đỡ bằng khảo sát và lý luận.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_23",
      "text": "Trong quan hệ giữa “con người” và “người Tạng”, chuỗi ví dụ nào lần lượt đúng với cả hai biên, biên con người mà không phải người Tạng, và không thuộc bất kỳ biên nào?",
      "options": [
        "Người Việt Nam – đứa trẻ Tây Tạng – cái bình.",
        "Cái bình – người Việt Nam – đứa trẻ Tây Tạng.",
        "Đứa trẻ Tây Tạng – người Việt Nam – cái bình.",
        "Đứa trẻ Tây Tạng – cái bình – người Việt Nam."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đứa trẻ Tây Tạng vừa là con người vừa là người Tạng nên thuộc cả hai biên. Người Việt Nam thuộc biên con người nhưng không phải người Tạng, còn cái bình không thuộc bất kỳ biên nào.",
      "hint": "Theo dõi lần lượt: thuộc cả hai, chỉ thuộc “con người”, rồi không thuộc cả hai.",
      "memory": "Ba biên: cả hai; chỉ biên con người; không thuộc cả hai.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_24",
      "text": "Cách ghép nào đúng với các quan hệ logic được nêu trong bài?",
      "options": [
        "“Được làm ra” và “vô thường” là đồng nghĩa; “cái bình” và “cái cột” là tương nghịch.",
        "“Được làm ra” và “vô thường” là tương nghịch; “cái bình” và “cái cột” là đồng nghĩa.",
        "“Lửa” và “nóng đốt cháy” là tương nghịch; “con người” và “người Tạng” là đồng nghĩa.",
        "“Cái bình” và “cái cột” là đồng nghĩa; “người thợ mộc” và “người Tạng” là tương nghịch."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nêu “được làm ra” và “vô thường” là đồng nghĩa, tương tự “lửa” và “nóng đốt cháy”. “Cái bình” và “cái cột” là tương nghịch vì nếu đã là cái này thì không thể là cái kia.",
      "hint": "Một cặp được bài xem là đồng nghĩa; cặp còn lại không thể cùng là một đối tượng.",
      "memory": "Được làm ra–vô thường là đồng nghĩa; cái bình–cái cột là tương nghịch.",
      "difficulty": "Khó"
    },
    {
      "id": "w4_25",
      "text": "Xét bốn nhận định: (1) đối tượng hiển lộ được nhận thức trực tiếp; (2) đối tượng cực kỳ ẩn tế chỉ cần suy luận; (3) Y pháp bất y nhân hướng đến pháp; (4) Y nghĩa bất y ngữ hướng đến nghĩa lý. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhận định (1), (3) và (4) phù hợp với bài. Nhận định (2) sai vì đối tượng cực kỳ ẩn tế vượt ngoài nhận thức trực tiếp và suy luận, nên cần Thánh ngôn lượng.",
      "hint": "Kiểm tra riêng phương thức nhận thức dành cho đối tượng cực kỳ ẩn tế.",
      "memory": "Hiển lộ dùng nhận thức trực tiếp; cực kỳ ẩn tế cần Thánh ngôn lượng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w4_26",
      "text": "Cách phân biệt nào chính xác nhất giữa quan hệ ba biên và quan hệ bốn biên trong các ví dụ của bài?",
      "options": [
        "Ba biên chỉ có hai trường hợp riêng; bốn biên loại bỏ trường hợp thuộc cả hai.",
        "Ba biên và bốn biên có cùng các trường hợp, chỉ khác tên đối tượng.",
        "Bốn biên chỉ dùng cho hai đối tượng đồng nghĩa nên không có trường hợp tách rời.",
        "Ba biên thiếu biên sau mà không là biên trước; bốn biên có thêm trường hợp ấy."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Quan hệ ba biên trong bài gồm cả hai biên, biên trước mà không là biên sau, và không thuộc cả hai. Quan hệ bốn biên có thêm trường hợp là biên sau mà không là biên trước.",
      "hint": "So sánh danh sách của “con người–người Tạng” với “người thợ mộc–người Tạng”.",
      "memory": "Bốn biên có thêm trường hợp biên sau mà không là biên trước.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w4_27",
      "text": "Ba người lần lượt phản ứng với lập luận “Âm thanh là vô thường vì được làm ra”: (i) bác âm thanh được làm ra; (ii) nhận âm thanh được làm ra nhưng bác sự bao khắp với vô thường; (iii) chấp nhận cả nhân và kết luận. Chuỗi câu đáp nào đúng?",
      "options": [
        "Nhân không thành – Không bao khắp – Chấp nhận.",
        "Không bao khắp – Nhân không thành – Tại sao?",
        "Tại sao? – Chấp nhận – Nhân không thành.",
        "Chấp nhận – Tại sao? – Không bao khắp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bác “âm thanh được làm ra” là bác nhân nên đáp “Nhân không thành”; nhận nhân nhưng bác quan hệ với vô thường thì đáp “Không bao khắp”. Khi chấp nhận nhân và kết luận, câu đáp phù hợp là “Chấp nhận”.",
      "hint": "Phân biệt lần lượt: bác nhân, bác quan hệ bao khắp, rồi đồng ý toàn bộ.",
      "memory": "Bác nhân–Nhân không thành; bác bao khắp–Không bao khắp; đồng ý–Chấp nhận.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w4_28",
      "text": "Với “người thợ mộc” là biên trước và “người Tạng” là biên sau, chuỗi nào lần lượt biểu thị cả hai biên, chỉ biên trước, chỉ biên sau và không thuộc cả hai?",
      "options": [
        "Thợ mộc Ấn Độ – thợ mộc người Tạng – cái trụ cột – đứa trẻ người Tạng.",
        "Đứa trẻ người Tạng – cái trụ cột – thợ mộc Ấn Độ – thợ mộc người Tạng.",
        "Thợ mộc người Tạng – thợ mộc Ấn Độ – đứa trẻ người Tạng – cái trụ cột.",
        "Cái trụ cột – đứa trẻ người Tạng – thợ mộc người Tạng – thợ mộc Ấn Độ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Thợ mộc người Tạng thuộc cả hai biên; thợ mộc Ấn Độ chỉ thuộc biên trước; đứa trẻ người Tạng chỉ thuộc biên sau. Cái trụ cột không phải người thợ mộc cũng không phải người Tạng nên không thuộc cả hai.",
      "hint": "Đi theo thứ tự giao nhau, chỉ nghề nghiệp, chỉ dân tộc, rồi không thuộc cả hai.",
      "memory": "Bốn biên lần lượt: cả hai; chỉ biên trước; chỉ biên sau; không thuộc cả hai.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w4_29",
      "text": "Xét bốn nhận định: (1) tâm chấp thường là tâm sai lạc, điên đảo; (2) chỉ cần cầu nguyện là có thể xóa bỏ tâm ấy; (3) khảo sát vô thường bằng lý do giúp phát khởi hiểu biết đúng; (4) tư duy kỹ bằng lý luận giúp niềm tin vững trước ý kiến trái chiều. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (2), (3) và (4).",
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (3) và (4)."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nhận định (1), (3) và (4) đúng theo bài. Nhận định (2) sai vì tâm chấp thường không thể bị xóa bỏ chỉ bằng cầu nguyện hay trì tụng; cần tư duy, lý do và nhận thức đúng đắn.",
      "hint": "Kiểm tra xem cầu nguyện đơn thuần có thay thế được tư duy và khảo sát hay không.",
      "memory": "Lý luận giúp loại trừ tâm chấp thường và làm niềm tin thêm kiên định.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w4_30",
      "text": "Khi gặp một định nghĩa hoặc khẳng định về sự vật, tiến trình nào thể hiện đầy đủ nhất tinh thần Nhiếp loại học trong bài?",
      "options": [
        "Giữ nguyên định nghĩa ban đầu, chỉ chọn ví dụ thuận chiều để bảo vệ kết luận.",
        "Xác định đối tượng, lập nhân, thử bằng phản biện rồi hiệu chỉnh nhận thức.",
        "Tin người đưa định nghĩa, bỏ qua các trường hợp làm lộ ra ngoại lệ.",
        "Tranh luận tự do, đổi thuật ngữ khi cần và không theo câu đáp quy định."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhiếp loại học yêu cầu xác định rõ đối tượng, điều được chứng minh và nhân, rồi kiểm tra bằng phản biện và các quan hệ logic. Tiến trình ấy giúp đoạn trừ hoài nghi, hiệu chỉnh định nghĩa và nhận thức sự vật như chính nó đang là.",
      "hint": "Kết nối việc xác định đối tượng, lập lý do, dùng phản ví dụ và giữ đúng quy tắc tranh biện.",
      "memory": "Xác định đúng, lập nhân, phản biện và hiệu chỉnh là tiến trình học logic.",
      "difficulty": "Nâng cao"
    }
  ],
  "week5": [
    {
      "id": "w5_1",
      "text": "Trong mối quan hệ nhận thức, pháp nào được bài xác định là chủ thể nhận biết?",
      "options": [
        "Cây trụ, vì cây trụ làm phát sinh tất cả cảnh được nhận biết.",
        "Tâm thức, vì tâm thức có khả năng nhận thức đối tượng.",
        "Cái bình, vì cái bình tự nhận biết bản thể của chính mình.",
        "Đối tượng nhận thức, vì mọi cảnh đều mang bản chất có tình thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tâm thức là chủ thể nhận biết vì có khả năng nhận thức đối tượng và bao khắp tất cả các đối tượng nhận biết. Cây trụ, cây cột và cái bình được bài dùng làm ví dụ về cảnh mang bản chất vô tri.",
      "hint": "Hãy tìm pháp thực hiện chức năng nhận biết cảnh.",
      "memory": "Tâm thức là chủ thể nhận biết; đối tượng được tâm thức nhận biết là cảnh.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_2",
      "text": "Đặc điểm nào thuộc về đối tượng được nhận thức theo bài?",
      "options": [
        "Luôn là một tâm thức có khả năng tự nhận biết tất cả đối tượng.",
        "Luôn bao khắp mọi nhận thức và trực tiếp tạo ra từng cảnh.",
        "Nhất thiết là chủ thể nhận biết và không thể mang bản chất vô tri.",
        "Có thể vô tri và không nhất thiết là chủ thể nhận thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối tượng được nhận thức hay cảnh có thể mang bản chất vô tri, như cây trụ, cây cột và cái bình. Vì vậy, cảnh không nhất thiết là chủ thể nhận thức và không bao khắp được nhận thức.",
      "hint": "Nhớ các ví dụ cây trụ, cây cột và cái bình.",
      "memory": "Cảnh có thể vô tri và không nhất thiết là chủ thể nhận thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_3",
      "text": "Vì sao bài nhấn mạnh việc khảo sát và nghiên cứu khi tiếp nhận thông tin?",
      "options": [
        "Vì tin theo mà không khảo sát dễ gây sai lệch và xa bản chất sự thật.",
        "Vì mọi thông tin của người khác đều sai và phải được bác bỏ ngay từ đầu.",
        "Vì chỉ những điều nhìn thấy bằng mắt thường mới có thể được xem là sự thật.",
        "Vì khảo sát giúp thay thế hoàn toàn lý do, bằng chứng và kinh nghiệm trực tiếp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nếu chỉ tin theo thông tin mà không khảo sát và nghiên cứu, nhận thức rất dễ bị sai lệch và không chạm đến bản chất sự thật. Niềm tin đúng đắn cần lý do rõ ràng và bằng chứng xác thực, không phải sự tuân theo mù quáng.",
      "hint": "Xét nguy cơ xảy ra khi một người chỉ tin theo mà không kiểm chứng.",
      "memory": "Niềm tin đúng đắn cần được nâng đỡ bằng khảo sát, lý do và bằng chứng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_4",
      "text": "Vai trò chính của môn Nhân minh hay Lý luận học được trình bày như thế nào?",
      "options": [
        "Dùng hình tướng bề ngoài để quyết định ngay bản chất của một sự vật.",
        "Thay thế mọi kinh nghiệm trực tiếp bằng niềm tin vào người có uy tín.",
        "Giúp loại trừ hiểu biết sai lầm, hoài nghi và lệch lạc bằng lý do chứng minh.",
        "Chỉ ghi nhớ thuật ngữ mà không cần phân biệt lý do đúng với lý do sai."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhân minh là công cụ tư duy dùng “nhân”, tức lý do chứng minh, để loại trừ hiểu biết sai lầm, hoài nghi và lệch lạc. Bài vì thế phân biệt chánh nhân là lý do chính đáng với tợ nhân là lý do tương tợ, sai lệch.",
      "hint": "Hãy nhớ chức năng của “nhân” trong việc kiểm tra một kết luận.",
      "memory": "Nhân minh dùng lý do chứng minh và phân biệt chánh nhân với tợ nhân.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_5",
      "text": "Cách ghép nào đúng giữa ba loại đối tượng và sở lượng tương ứng?",
      "options": [
        "Trực tiếp–Tỷ lượng; hơi ẩn tế–Thánh ngôn lượng; cực kỳ ẩn tế–Hiện lượng.",
        "Trực tiếp–Hiện lượng; hơi ẩn tế–Tỷ lượng; cực kỳ ẩn tế–Thánh ngôn lượng.",
        "Trực tiếp–Thánh ngôn lượng; hơi ẩn tế–Hiện lượng; cực kỳ ẩn tế–Tỷ lượng.",
        "Trực tiếp–Hiện lượng; hơi ẩn tế–Thánh ngôn lượng; cực kỳ ẩn tế–Tỷ lượng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Hiện lượng nhận thức các đối tượng trực tiếp, còn Tỷ lượng suy luận qua chánh nhân để biết các đối tượng hơi ẩn tế. Thánh ngôn lượng là lời nói đáng tin cậy dùng để nhận thức các đối tượng cực kỳ ẩn tế.",
      "hint": "Đi từ nhận thức trực tiếp đến suy luận rồi đến lời nói đáng tin cậy.",
      "memory": "Trực tiếp–Hiện lượng; hơi ẩn tế–Tỷ lượng; cực kỳ ẩn tế–Thánh ngôn lượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_6",
      "text": "Cặp thuật ngữ đồng nghĩa nào được tài liệu trình bày đúng?",
      "options": [
        "Hữu vi–thường hằng–phi sự vật; vô vi–vô thường–được làm ra.",
        "Hữu vi–phi sự vật–không được làm ra; vô vi–sự vật–vô thường.",
        "Hữu vi–thường hằng–được làm ra; vô vi–vô thường–pháp hữu.",
        "Hữu vi–vô thường–được làm ra; vô vi–thường hằng–không được làm ra."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hữu vi, vô thường, được làm ra và sự vật hay pháp hữu được bài trình bày là các thuật ngữ đồng nghĩa. Vô vi, thường hằng, không được làm ra và phi sự vật hay pháp vô thuộc nhóm còn lại.",
      "hint": "Xét pháp nào do nhân duyên hình thành và chuyển biến trong từng sát-na.",
      "memory": "Hữu vi là vô thường và được làm ra; vô vi là thường hằng và không được làm ra.",
      "difficulty": "Dễ"
    },
    {
      "id": "w5_7",
      "text": "Nhận định nào diễn đạt đúng phạm vi nhận biết của tâm thức trong bài?",
      "options": [
        "Tâm thức chỉ nhận biết vật vô tri và không thể trở thành đối tượng được nhận thức.",
        "Tâm thức chỉ được người khác nhận biết khi nhìn thấy trực tiếp bằng mắt thường.",
        "Tâm thức có thể tự nhận thức hoặc được người khác nhận biết bằng căn cứ đúng.",
        "Tâm thức không cần đối tượng vì bản thân nó đã bao gồm mọi cảnh bên ngoài."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài cho biết tâm thức có thể tự nhận thức chính mình hoặc được người khác nhận biết trực tiếp hay gián tiếp. Sự nhận biết gián tiếp cần lý luận, chứng cứ hoặc kinh điển đúng tiêu chuẩn, chứ không chỉ dựa vào mắt thường.",
      "hint": "Xét cả khả năng tự nhận thức và khả năng được người khác nhận biết.",
      "memory": "Tâm thức vừa là chủ thể nhận biết vừa có thể trở thành đối tượng được nhận biết.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_8",
      "text": "Một người trông rất đàng hoàng nên có người kết luận ngay rằng mọi lời người ấy nói đều đúng. Cách xử lý nào sát bài nhất?",
      "options": [
        "Không dừng ở hình tướng; cần tư duy, kiểm chứng và suy luận về sự thật.",
        "Bác bỏ người ấy ngay vì hình tướng tốt đẹp luôn che giấu một bản chất xấu.",
        "Chấp nhận kết luận vì hình tướng tử tế đã phản ánh đầy đủ bản chất bên trong.",
        "Chỉ quan sát lâu hơn bằng mắt thường mà không cần lý do hoặc bằng chứng khác."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hình tướng bề ngoài không tự nó phản ánh đúng bản chất bên trong của con người hay sự vật. Muốn hiểu sự thật ẩn tế ở gốc rễ, cần tư duy, kiểm chứng và đưa ra lý do để suy luận.",
      "hint": "Bài phân biệt hình tướng bề ngoài với gốc rễ nằm phía sau.",
      "memory": "Không lấy hình tướng bề ngoài thay cho việc khảo sát bản chất.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_9",
      "text": "Cách học nào phù hợp nhất với nguyên tắc “Y pháp bất y nhân”?",
      "options": [
        "Tin một lời dạy chỉ vì người nói có địa vị và được nhiều người kính trọng.",
        "Chọn cách diễn đạt dễ nghe nhất, bất kể nghĩa lý bên trong có chính xác hay không.",
        "Chỉ dựa vào ấn tượng ban đầu về phong thái của người đang giảng giải.",
        "Xét pháp được trình bày, không lấy người nói làm căn cứ quyết định."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Y pháp bất y nhân” là nương tựa vào pháp, không nương tựa vào người. Vì vậy, nội dung pháp và tính đúng đắn của điều được trình bày mới là căn cứ, không phải địa vị hay phong thái của người nói.",
      "hint": "Phân biệt pháp được trình bày với danh tiếng hoặc hình tướng của người nói.",
      "memory": "Y pháp bất y nhân: lấy pháp làm chỗ nương, không lấy người làm tiêu chuẩn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_10",
      "text": "Tình huống nào thể hiện đúng “Y nghĩa bất y ngữ”?",
      "options": [
        "Chỉ ghi nhớ âm thanh của câu nói mà không cần hiểu nội dung được diễn đạt.",
        "Tìm hiểu nghĩa lý được diễn đạt, không dừng lại ở vẻ hấp dẫn của ngôn từ.",
        "Chọn lời văn hoa nhất vì cách nói đẹp tự nó bảo đảm nghĩa lý chính xác.",
        "Bỏ qua nghĩa lý nếu thuật ngữ được sử dụng khác với cách nói quen thuộc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "“Y nghĩa bất y ngữ” là nương tựa vào nghĩa lý, không nương tựa vào ngôn từ. Ngôn từ là phương tiện diễn đạt; điều cần thấu hiểu và kiểm chứng là nghĩa lý mà lời nói hướng đến.",
      "hint": "Xét điều cần nương tựa: nội dung hay hình thức lời nói.",
      "memory": "Y nghĩa bất y ngữ: nương nghĩa lý, không mắc kẹt ở ngôn từ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_11",
      "text": "Cách lựa chọn nào phù hợp với “Y trí bất y thức”?",
      "options": [
        "Nương trí tuệ để thẩm định, không chỉ dựa vào tri thức.",
        "Nương tựa vào mọi ý nghĩ vừa xuất hiện, không cần khảo sát đúng hay sai.",
        "Nương tựa vào hình thức bên ngoài vì giác quan luôn cho biết trọn vẹn bản chất.",
        "Nương tựa vào mệnh lệnh của người khác thay cho quá trình tư duy của chính mình."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Y trí bất y thức” là nương tựa vào trí tuệ, không nương tựa vào tri thức. Nguyên tắc này đặt trọng tâm ở sự thẩm định bằng trí tuệ, phù hợp với tinh thần tư duy và kiểm chứng của bài.",
      "hint": "Đối chiếu trực tiếp hai vế “trí” và “thức” trong Tứ y.",
      "memory": "Y trí bất y thức: dùng trí tuệ làm chỗ nương để thẩm định.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_12",
      "text": "Nguyên tắc nào dạy nương tựa vào liễu nghĩa, không nương tựa vào bất liễu nghĩa?",
      "options": [
        "Y pháp bất y nhân – nương pháp, không nương người.",
        "Y nghĩa bất y ngữ – nương nghĩa, không nương lời.",
        "Y liễu nghĩa bất y bất liễu nghĩa – nương liễu nghĩa.",
        "Y trí bất y thức – nương trí tuệ, không nương tri thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "“Y liễu nghĩa bất y bất liễu nghĩa” là nương tựa vào liễu nghĩa, không nương tựa vào bất liễu nghĩa. Đây là một trong bốn chỗ nương tựa đáng tin cậy được tài liệu nêu rõ.",
      "hint": "Tìm cặp thuật ngữ trực tiếp đối chiếu liễu nghĩa và bất liễu nghĩa.",
      "memory": "Nương liễu nghĩa, không nương bất liễu nghĩa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_13",
      "text": "Khi một đối tượng hơi ẩn tế không thể được nhận biết ngay nhưng có thể xác lập bằng chánh nhân, nên sử dụng sở lượng nào?",
      "options": [
        "Hiện lượng, vì đối tượng đã hiển hiện trực tiếp trước giác quan.",
        "Thánh ngôn lượng, vì mọi đối tượng hơi ẩn tế đều vượt ngoài lý luận.",
        "Tợ nhân, vì lý do tương tợ cũng đủ để xác lập sự thật ẩn tế.",
        "Tỷ lượng, vì đối tượng được nhận biết bằng suy luận qua chánh nhân."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tỷ lượng là suy luận qua chánh nhân và được dùng để nhận biết các đối tượng hơi ẩn tế. Hiện lượng dành cho đối tượng trực tiếp, còn Thánh ngôn lượng được dùng với đối tượng cực kỳ ẩn tế.",
      "hint": "Đây là trường hợp cần suy luận bằng một lý do đúng đắn.",
      "memory": "Đối tượng hơi ẩn tế được nhận biết bằng Tỷ lượng qua chánh nhân.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_14",
      "text": "Ví dụ lửa thật và hình vẽ lửa làm rõ điều gì về nhận thức đúng đắn?",
      "options": [
        "Hai đối tượng giống hình dáng thì nhất thiết có cùng bản chất và công năng.",
        "Kinh nghiệm xúc chạm phân biệt lửa nóng với hình vẽ không nóng một cách trực tiếp.",
        "Hình vẽ lửa cũng gây phỏng nếu người quan sát tin đủ mạnh vào hình ảnh ấy.",
        "Màu sắc bên ngoài đủ để xác định lửa thật mà không cần kinh nghiệm nào khác."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Xúc chạm lửa thật cho cảm giác nóng và có thể bị phỏng, trong khi chạm hình vẽ lửa không có kết quả ấy. Kinh nghiệm trực tiếp này giúp tâm thức phân biệt đúng bản chất của hai đối tượng, không dựa vào hình tướng giống nhau.",
      "hint": "So sánh kết quả khi thân xúc chạm lửa thật và hình vẽ lửa.",
      "memory": "Kinh nghiệm trực tiếp giúp phân biệt lửa thật với hình vẽ lửa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_15",
      "text": "Một pháp được tụ hợp hình thành, phụ thuộc nhân duyên và chuyển biến trong từng sát-na được xếp vào loại nào?",
      "options": [
        "Pháp vô vi, vì pháp ấy tồn tại trên một cơ sở và có nguồn gốc.",
        "Phi sự vật, vì pháp ấy không giữ nguyên trạng thái qua từng sát-na.",
        "Pháp hữu vi, vì pháp ấy được làm ra và mang tính vô thường.",
        "Pháp thường hằng, vì sự thay đổi chứng minh pháp ấy luôn tồn tại."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Pháp hữu vi có sự tụ hợp hình thành, được làm ra, tùy thuộc nhân duyên điều kiện và chuyển biến hoại diệt trong từng sát-na. Những đặc điểm này cũng cho thấy pháp hữu vi mang tính vô thường.",
      "hint": "Xét ba dấu hiệu: được làm ra, tùy thuộc nhân duyên và chuyển biến.",
      "memory": "Được làm ra, tùy thuộc nhân duyên và chuyển biến là dấu hiệu của pháp hữu vi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w5_16",
      "text": "Một học viên nói: “Pháp vô vi không thể nhìn thấy hay chạm bằng tay, nên pháp vô vi hoàn toàn không có.” Cách hiệu chỉnh nào đúng?",
      "options": [
        "Sai, vì không thấy trực tiếp không đồng nghĩa không có; pháp vô vi không được làm ra.",
        "Đúng, vì chỉ những gì giác quan xúc chạm được mới có thể gọi là pháp.",
        "Đúng, vì “phi sự vật” luôn có nghĩa là hoàn toàn không tồn tại.",
        "Sai, vì pháp vô vi thực ra là sắc pháp thô nhưng mắt thường chưa đủ mạnh để thấy."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu nêu rằng pháp vô vi không thể được nhìn thấy trực tiếp hay chạm bằng tay; điều ấy không có nghĩa pháp vô vi hoàn toàn không tồn tại. Pháp vô vi không được làm ra, không biến đổi trong sát-na và mang tính thường hằng.",
      "hint": "Phân biệt “không thể nhìn hay chạm trực tiếp” với “không có pháp”.",
      "memory": "Không thể xúc chạm trực tiếp không đồng nghĩa với hoàn toàn không tồn tại.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_17",
      "text": "Cách phân nhóm nào đúng đối với các pháp hữu vi được nêu trong tài liệu?",
      "options": [
        "Sắc pháp, pháp vô vi và các phi sự vật thường hằng.",
        "Sắc pháp, tâm pháp và bất tương ưng hành pháp.",
        "Tục đế, Chân đế và Thánh ngôn lượng.",
        "Hiện lượng, Tỷ lượng và tợ nhân."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Pháp hữu vi trong tài liệu bao gồm sắc pháp, tâm pháp và bất tương ưng hành pháp. Các nhóm như Chân đế, Hiện lượng hay pháp vô vi thuộc những cách trình bày khác, không phải ba nhóm hữu vi được nêu ở đây.",
      "hint": "Tìm ba nhóm cùng thuộc phạm vi pháp được làm ra và vô thường.",
      "memory": "Pháp hữu vi gồm sắc pháp, tâm pháp và bất tương ưng hành pháp.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_18",
      "text": "Cách phân biệt nào đúng giữa Tục đế và Chân đế theo bài?",
      "options": [
        "Tục đế là pháp không tồn tại; Chân đế là hình tướng được mắt nhìn thấy.",
        "Tục đế là lời nói đáng tin; Chân đế là suy luận qua một chánh nhân.",
        "Tục đế thuộc pháp hữu vi; Chân đế luôn đồng nghĩa với pháp vô vi.",
        "Tục đế là mặt trình hiện; Chân đế là mặt trụ đúng bản chất."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tục đế là mặt trình hiện ra bên ngoài, có thể được nhận thức trực tiếp hoặc qua suy luận. Chân đế là mặt trụ đúng bản chất như chính pháp ấy đang là; hai mặt được bài trình bày song song nơi các pháp.",
      "hint": "Đối chiếu mặt hiển hiện bên ngoài với mặt trụ đúng bản chất.",
      "memory": "Tục đế là mặt trình hiện; Chân đế là mặt trụ đúng bản chất.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_19",
      "text": "Nhận định nào diễn đạt đúng mối liên hệ giữa sở tri, sở lượng và đối tượng của tâm?",
      "options": [
        "Sở tri được thành lập làm đối tượng của tâm và bao trùm tất cả sở lượng.",
        "Sở lượng là chủ thể nhận biết và bao trùm mọi tâm thức đang nhận thức.",
        "Sở tri chỉ gồm những gì mắt thấy, không bao gồm đối tượng được suy luận.",
        "Sở tri và sở lượng đều chỉ là tên của ba loại pháp hữu vi trong bài."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sở tri và sở lượng được giải thích là những gì được thành lập làm đối tượng của tâm, liên hệ với đối tượng nhận thức và sự tồn tại. Tài liệu đồng thời nhấn mạnh sở tri bao trùm tất cả sở lượng.",
      "hint": "Nhớ định nghĩa Tạng ngữ và quan hệ bao hàm được tài liệu nêu.",
      "memory": "Sở tri là đối tượng được thành lập đối với tâm và bao trùm sở lượng.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_20",
      "text": "Một học viên hỏi vì sao nhiều đối tượng khác nhau đều được gọi chung là “pháp”. Câu trả lời nào sát định nghĩa trong bài?",
      "options": [
        "Vì mọi pháp đều phải là vật chất có thể nhìn thấy và xúc chạm trực tiếp.",
        "Vì pháp là tên riêng dành cho tâm thức, không áp dụng cho các đối tượng vô tri.",
        "Vì “pháp” chỉ cái nắm giữ, bảo trì bản thể và tự tính của chính nó.",
        "Vì bất kỳ điều gì được một người tin tưởng đều trở thành pháp có thật."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài định nghĩa pháp là từ dùng chung để chỉ cái có khả năng nắm giữ, bảo trì bản thể và tự tính của chính nó. Vì thế, “pháp” không chỉ giới hạn ở vật chất nhìn thấy được hay riêng tâm thức.",
      "hint": "Tìm chức năng “nắm giữ, bảo trì” được dùng trong định nghĩa.",
      "memory": "Pháp có khả năng nắm giữ, bảo trì bản thể và tự tính của chính nó.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_21",
      "text": "Lập luận nào đầy đủ nhất để một pháp được gọi là “có” theo tài liệu?",
      "options": [
        "Chỉ cần được nhiều người nhắc đến, dù không có cơ sở hay nhận thức đúng đắn.",
        "Chỉ cần có hình tướng rõ ràng, dù nhận thức về pháp ấy mâu thuẫn trước sau.",
        "Pháp phải được xúc chạm bằng tay; mọi đối tượng ẩn tế đều không thể tồn tại.",
        "Pháp có cơ sở, nguồn gốc, chỗ phụ thuộc và được tâm đúng đắn nhận thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Một pháp muốn được gọi là “có” phải hình thành trên một cơ sở, có nguồn gốc và phụ thuộc vào yếu tố nào đó. Pháp ấy đồng thời phải được nhận thức bởi một tâm thức nhận thức đúng đắn, chuẩn xác.",
      "hint": "Kết hợp cơ sở hình thành, quan hệ phụ thuộc và tâm thức nhận biết chuẩn xác.",
      "memory": "Một pháp có cơ sở, có nguồn gốc, có chỗ phụ thuộc và được tâm đúng đắn nhận thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_22",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với các điều kiện xác định sự tồn tại của Ngài Tsongkhapa?",
      "options": [
        "Pháp cần phổ biến với nhận thức của thế gian trong phạm vi đang xét.",
        "Chỉ cần nhiều người tin, không phải kiểm tra tổn hại hay mâu thuẫn.",
        "Pháp không bị tổn hại bởi một nhận thức khác.",
        "Nhận thức về pháp cần không mâu thuẫn giữa trước và sau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B không phù hợp vì sự phổ biến với thế gian không cho phép bỏ qua việc kiểm tra bằng nhận thức khác và tính nhất quán trước sau. Ba điều kiện được nêu phải cùng bảo vệ một pháp khỏi sự tùy tiện của niềm tin số đông.",
      "hint": "Đây là câu phủ định; một điều kiện đơn lẻ không thể thay thế các điều kiện còn lại.",
      "memory": "Phổ biến với thế gian chưa đủ nếu bị nhận thức khác tổn hại hoặc tự mâu thuẫn.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_23",
      "text": "Trong ví dụ của Trung Quán Ứng Thành Phái, cách ghép vai trò nào đúng?",
      "options": [
        "Ánh sáng là chủ thể chiếu sáng; khăn giấy là vật được chiếu; công năng được biết trực tiếp.",
        "Chiếc khăn giấy là chủ thể chiếu sáng; ánh sáng là vật được chiếu; khả năng ấy chỉ được biết qua Thánh ngôn lượng.",
        "Bóng tối là chủ thể chiếu sáng; ánh đèn là cảnh bị nhận biết; màu trắng được xác lập bằng tợ nhân.",
        "Ánh sáng và chiếc khăn đều là chủ thể nhận thức; người quan sát chỉ là đối tượng vô tri được chiếu sáng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ánh sáng mặt trời hoặc ánh đèn đóng vai trò chủ thể chiếu sáng, còn chiếc khăn giấy màu trắng là vật được chiếu sáng. Qua kinh nghiệm trực tiếp, con người tự biết khả năng chiếu sáng ấy mà không cần một chứng minh khác.",
      "hint": "Phân biệt cái chiếu sáng, vật được chiếu và cách ta biết công năng ấy.",
      "memory": "Ánh sáng chiếu, vật được chiếu hiện ra và công năng ấy được biết trực tiếp.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_24",
      "text": "Một người cho rằng hình vẽ lửa là lửa thật chỉ vì hình tướng giống lửa, dù xúc chạm không thấy nóng. Theo mạch bài, lý do ấy nên được đánh giá thế nào?",
      "options": [
        "Là chánh nhân vì mọi hình tướng giống nhau đều chứng minh cùng một bản chất.",
        "Là Hiện lượng vì hình tướng bên ngoài tự nó xác lập đầy đủ công năng của lửa.",
        "Là tợ nhân vì bị kinh nghiệm trực tiếp làm tổn hại.",
        "Là Thánh ngôn lượng vì không cần kiểm tra lại bằng giác quan hay bằng chứng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hình tướng giống lửa chỉ là nét tương tợ bề ngoài, không đủ chứng minh hình vẽ có bản chất và công năng của lửa thật. Khi xúc chạm không thấy nóng, lý do ban đầu bị kinh nghiệm trực tiếp làm tổn hại nên thuộc tợ nhân.",
      "hint": "Xét lý do dựa trên hình tướng có đứng vững trước kinh nghiệm xúc chạm hay không.",
      "memory": "Lý do bị kinh nghiệm đúng đắn bác bỏ là tợ nhân, không phải chánh nhân.",
      "difficulty": "Khó"
    },
    {
      "id": "w5_25",
      "text": "Xét bốn nhận định: (1) tâm thức là chủ thể nhận biết; (2) mọi đối tượng được nhận thức đều là tâm thức; (3) niềm tin đúng cần lý do và bằng chứng; (4) hình tướng bề ngoài đủ xác định bản chất. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1) và (3).",
        "Chỉ (2) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhận định (1) và (3) đúng: tâm thức là chủ thể nhận biết, còn niềm tin đúng cần lý do và bằng chứng. Nhận định (2) sai vì cảnh có thể vô tri; nhận định (4) sai vì bản chất sự thật không nhất thiết hiển hiện trên bề mặt.",
      "hint": "Kiểm tra hai nhận định tuyệt đối hóa đối tượng và hình tướng bề ngoài.",
      "memory": "Chủ thể là tâm thức; sự thật phải được kiểm chứng, không suy ra từ hình tướng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w5_26",
      "text": "Một người lần lượt: trực tiếp cảm nhận lửa nóng; dùng chánh nhân để biết một điều hơi ẩn tế; dựa vào lời nói đáng tin cậy về điều cực kỳ ẩn tế. Chuỗi phân loại nào đúng?",
      "options": [
        "Tỷ lượng – Hiện lượng – Thánh ngôn lượng.",
        "Thánh ngôn lượng – Tỷ lượng – Hiện lượng.",
        "Hiện lượng – Thánh ngôn lượng – Tỷ lượng.",
        "Hiện lượng – Tỷ lượng – Thánh ngôn lượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cảm nhận trực tiếp sức nóng của lửa thuộc Hiện lượng; xác lập điều hơi ẩn tế bằng chánh nhân thuộc Tỷ lượng. Đối tượng cực kỳ ẩn tế được nhận thức nhờ Thánh ngôn lượng, tức lời nói đáng tin cậy.",
      "hint": "Theo dõi lần lượt kinh nghiệm trực tiếp, suy luận và lời nói đáng tin cậy.",
      "memory": "Hiện lượng–trực tiếp; Tỷ lượng–hơi ẩn tế; Thánh ngôn lượng–cực kỳ ẩn tế.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w5_27",
      "text": "Một người nổi tiếng đưa ra một khẳng định nhưng không kèm lý do hay bằng chứng. Phản ứng nào vận dụng đầy đủ nhất tinh thần bài học?",
      "options": [
        "Chấp nhận ngay vì người nổi tiếng chắc chắn hiểu đúng mọi đối tượng trực tiếp và ẩn tế.",
        "Bác bỏ ngay vì mọi lời nói của người có địa vị đều là tợ nhân và không có giá trị.",
        "Không lấy danh tiếng làm đủ; xét pháp, nghĩa lý và kiểm chứng bằng trí tuệ.",
        "Chỉ so sánh cách dùng từ, không cần xét nghĩa lý, căn cứ hay nội dung của khẳng định."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tinh thần của bài là không tin theo mù quáng mà phải khảo sát bằng lý do và bằng chứng. Tứ y hướng người học nương vào pháp, nghĩa lý và trí tuệ; phương thức nhận thức cũng phải phù hợp với mức độ hiển lộ của đối tượng.",
      "hint": "Kết hợp khảo sát với ba nguyên tắc: không lệ thuộc người, ngôn từ và tri thức đơn thuần.",
      "memory": "Uy tín không thay thế pháp, nghĩa lý, trí tuệ và sự kiểm chứng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w5_28",
      "text": "Một pháp có mặt trình hiện bên ngoài nhưng kết luận về bản chất của nó lại bị nhận thức đúng đắn bác bỏ. Phân tích nào phù hợp nhất?",
      "options": [
        "Phân biệt Tục đế với Chân đế; kết luận bị nhận thức khác tổn hại chưa được xác lập.",
        "Mặt trình hiện đã đủ xác lập Chân đế nên không cần xét nhận thức khác.",
        "Pháp chắc chắn không có Tục đế vì mọi trình hiện bên ngoài đều là sai lầm.",
        "Chỉ cần kết luận phổ biến với số đông thì sự bác bỏ của nhận thức khác không còn giá trị."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mặt trình hiện thuộc phương diện Tục đế không tự động cho biết trọn vẹn mặt trụ đúng bản chất là Chân đế. Nếu kết luận về pháp bị một nhận thức đúng đắn khác làm tổn hại, kết luận ấy chưa đáp ứng tiêu chuẩn xác định sự tồn tại.",
      "hint": "Kết hợp hai mặt của pháp với điều kiện “không bị tổn hại bởi nhận thức khác”.",
      "memory": "Trình hiện không đủ thay cho bản chất; kết luận đúng không bị nhận thức khác tổn hại.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w5_29",
      "text": "Xét bốn nhận định: (1) hữu vi phụ thuộc nhân duyên; (2) vô vi không được làm ra; (3) không thể xúc chạm vô vi nên vô vi không có; (4) hữu vi và vô vi là hai tên của cùng một loại pháp. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1) và (2).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhận định (1) và (2) đúng: hữu vi tùy thuộc nhân duyên, còn vô vi không được làm ra. Nhận định (3) sai vì không xúc chạm được không có nghĩa không tồn tại; nhận định (4) sai vì hai nhóm có đặc điểm đối lập.",
      "hint": "Kiểm tra hai nhận định đồng nhất “không xúc chạm” với “không có” và đồng nhất hữu vi với vô vi.",
      "memory": "Hữu vi do nhân duyên và vô thường; vô vi không được làm ra và thường hằng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w5_30",
      "text": "Khi gặp một hiện tượng có hình tướng dễ gây hiểu lầm và một khẳng định về bản chất của nó, tiến trình nào phù hợp nhất với toàn bài?",
      "options": [
        "Tin hình tướng trước, rồi tìm một lý do bất kỳ để bảo vệ kết luận đã chọn.",
        "Tin người phát biểu trước, sau đó bỏ qua mọi bằng chứng trái với lời người ấy.",
        "Chỉ gọi tên hiện tượng là một pháp thì bản chất và sự tồn tại tự được xác lập.",
        "Xác định đối tượng, chọn sở lượng, dùng chánh nhân và kiểm tra điều kiện tồn tại."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Toàn bài hướng người học từ việc xác định chủ thể và đối tượng đến lựa chọn phương thức nhận thức phù hợp, dùng lý do đúng đắn và kiểm chứng kết luận. Một pháp không được xác lập chỉ bằng hình tướng hay uy tín, mà còn phải đứng vững trước các điều kiện tồn tại và nhận thức chuẩn xác.",
      "hint": "Kết nối khảo sát, sở lượng, Nhân minh và tiêu chuẩn xác định một pháp là “có”.",
      "memory": "Nhận thức đúng cần đúng đối tượng, đúng sở lượng, đúng lý do và đúng tiêu chuẩn tồn tại.",
      "difficulty": "Nâng cao"
    }
  ],
  "week6": [
    {
      "id": "w6_1",
      "text": "Một học viên muốn khảo sát một pháp có được tạo bởi nguyên nhân và điều kiện, có biến chuyển hoại diệt trong từng sát-na hay không. Cách phân loại nào phù hợp nhất?",
      "options": [
        "Chân đế và tục đế để khảo sát phương diện chân thật và quy ước.",
        "Thường hằng và vô thường.",
        "Mười hai xứ.",
        "Mười tám giới."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài dùng thường hằng và vô thường để khảo sát bản chất tồn tại. Pháp do nguyên nhân và điều kiện tạo thành, biến chuyển hoại diệt trong từng sát-na được xác lập là pháp vô thường.",
      "hint": "Hãy chọn cách phân loại dùng để khảo sát bản chất tồn tại và sự biến đổi của một pháp.",
      "memory": "Khảo sát được làm ra và biến đổi: xét thường hằng–vô thường.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_2",
      "text": "Một pháp do nguyên nhân và điều kiện tạo thành, đồng thời biến chuyển hoại diệt trong từng sát-na. Cách xác lập nào đúng?",
      "options": [
        "Không được làm ra, thuộc vô vi pháp và là pháp thường hằng.",
        "Thuộc chân đế nên không có sự biến chuyển hay hoại diệt.",
        "Được làm ra, thuộc hữu vi pháp và là pháp vô thường.",
        "Chỉ có thể là sắc pháp thô mà thân vật lý xúc chạm được."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Pháp do nguyên nhân và điều kiện tạo thành là pháp được làm ra, tức hữu vi pháp. Vì biến chuyển hoại diệt trong từng sát-na nên pháp ấy là vô thường.",
      "hint": "Nối ba đặc điểm: do nhân duyên tạo thành, được làm ra và biến chuyển.",
      "memory": "Được làm ra = hữu vi = vô thường.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_3",
      "text": "Một pháp không được làm ra và không do nguyên nhân, điều kiện tạo thành. Theo bài, pháp ấy được xác lập như thế nào?",
      "options": [
        "Là pháp thường hằng và vô vi pháp.",
        "Là pháp vô thường và hữu vi pháp.",
        "Là bất tương ưng hành pháp do nhân duyên tạo thành.",
        "Nhất định là sắc pháp có khả năng bị băng hoại."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Trong bài, thường hằng, không được làm ra và vô vi pháp là các cách gọi đồng nghĩa. Nhóm này đối lập với pháp được làm ra do nguyên nhân và điều kiện.",
      "hint": "Đối chiếu nhóm thuật ngữ đi cùng với “không được làm ra”.",
      "memory": "Không được làm ra = thường hằng = vô vi pháp.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_4",
      "text": "Thời gian không thuộc sắc pháp cũng không thuộc tâm pháp, nhưng vẫn là pháp do nhân duyên tạo thành và biến chuyển. Thời gian được dùng làm ví dụ cho nhóm nào?",
      "options": [
        "Tâm vương.",
        "Tâm sở.",
        "Vô vi pháp không được làm ra và không biến chuyển trong từng sát-na.",
        "Bất tương ưng hành pháp."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài dùng thời gian làm ví dụ cho bất tương ưng hành pháp. Nhóm này không thuộc sắc pháp hay tâm pháp nhưng vẫn thuộc hữu vi pháp và vô thường.",
      "hint": "Tìm nhóm không phải sắc, không phải tâm nhưng vẫn thuộc pháp vô thường.",
      "memory": "Thời gian là ví dụ của bất tương ưng hành pháp.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_5",
      "text": "Khi một người nhìn thấy bông hoa, cách trình bày nào đúng với tiến trình nhận thức trong bài?",
      "options": [
        "Nhãn căn trực tiếp nhận biết, còn nhãn thức chỉ là hình sắc của bông hoa.",
        "Hình sắc là cảnh, nhãn căn làm tăng thượng duyên, nhãn thức nhận biết.",
        "Bông hoa là chủ thể nhận biết, còn nhãn căn và nhãn thức đều là cảnh.",
        "Ý thức là con mắt vật lý nên tự nhận biết hình sắc mà không cần nhãn thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Hình sắc của bông hoa là cảnh. Nhãn căn làm chỗ nương và tăng thượng duyên để nhãn thức sinh khởi; chính nhãn thức nhận biết hình sắc.",
      "hint": "Xác định riêng cảnh được thấy, điều kiện hỗ trợ và thức thực hiện sự nhận biết.",
      "memory": "Hình sắc là cảnh; nhãn căn hỗ trợ; nhãn thức nhận biết.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_6",
      "text": "Vì sao cách nói thông thường “con mắt nhìn thấy bông hoa” chưa diễn đạt đầy đủ tiến trình nhận thức?",
      "options": [
        "Vì hình sắc của bông hoa chỉ có thể được nhĩ thức nhận biết.",
        "Vì nhãn thức chỉ làm chỗ nương, còn nhãn căn mới là chủ thể trực tiếp nhận biết hình sắc.",
        "Vì nhãn căn là điều kiện hỗ trợ, còn nhãn thức mới trực tiếp nhận biết hình sắc.",
        "Vì bông hoa chỉ tồn tại trong ý thức và không phải cảnh ở bên ngoài."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cách nói “mắt thấy” dễ làm lẫn nhãn căn với nhãn thức. Theo bài, nhãn căn hỗ trợ và làm tăng thượng duyên; nhãn thức mới là nhận thức của mắt biết hình sắc.",
      "hint": "Phân biệt căn làm chỗ nương với thức thực hiện sự nhận biết.",
      "memory": "Căn hỗ trợ thức; thức mới nhận biết cảnh.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_7",
      "text": "Vai trò chính của tịnh sắc căn trong tiến trình nhận thức là gì?",
      "options": [
        "Làm tăng thượng duyên để thức tương ứng sinh khởi và nhận biết cảnh.",
        "Trực tiếp thay thế thức để nhận biết tất cả các pháp.",
        "Trở thành cảnh bên ngoài sau khi sự nhận biết hoàn tất.",
        "Tạo ra đầy đủ mọi đối tượng ở bên ngoài mà không cần căn, thức hay bất kỳ điều kiện nào khác."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tịnh sắc căn rất vi tế, không thể quan sát bằng mắt thường và luôn đi cùng tâm thức. Nhờ tịnh sắc căn làm tăng thượng duyên, thức tương ứng mới có thể sinh khởi và nhận biết cảnh.",
      "hint": "Tịnh sắc căn là phần rất vi tế của căn, có vai trò hỗ trợ sự sinh khởi của thức.",
      "memory": "Tịnh sắc căn là tăng thượng duyên, không phải chính thức nhận biết.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_8",
      "text": "Một đối tượng không thuộc phạm vi riêng của mắt, tai, mũi, lưỡi hay thân. Theo bài, nhận thức nào có thể nhận biết đối tượng ấy?",
      "options": [
        "Chỉ nhãn thức.",
        "Chỉ nhĩ thức.",
        "Chỉ thân thức.",
        "Ý thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Năm thức giác quan chỉ nhận biết đối tượng thuộc phạm vi riêng của từng căn. Ý thức nhận biết các pháp, kể cả những đối tượng không thuộc phạm vi của năm thức đầu.",
      "hint": "Năm thức đầu chỉ nhận biết cảnh thuộc phạm vi giác quan tương ứng.",
      "memory": "Ý thức nhận biết cả những pháp ngoài phạm vi năm thức giác quan.",
      "difficulty": "Dễ"
    },
    {
      "id": "w6_9",
      "text": "Khi nghe tiếng chuông và trình bày theo mười hai xứ, cách xác định nào đúng?",
      "options": [
        "Thanh xứ là nội xứ, còn nhĩ xứ là ngoại xứ.",
        "Nhĩ xứ và thanh xứ đều là thức nhận biết.",
        "Nhĩ xứ thuộc nội xứ, còn thanh xứ thuộc ngoại xứ.",
        "Tiếng chuông thuộc ý xứ, còn tai thuộc pháp xứ trong toàn bộ tiến trình nhận biết."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Trong mười hai xứ, nhĩ xứ thuộc sáu nội xứ và thanh xứ thuộc sáu ngoại xứ. Cách trình bày này làm rõ mối quan hệ giữa phía nhận biết và cảnh bên ngoài.",
      "hint": "Phía căn thuộc nội xứ; đối tượng tương ứng thuộc ngoại xứ.",
      "memory": "Nhĩ xứ là nội xứ; thanh xứ là ngoại xứ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_10",
      "text": "Khi nhìn bông hoa và trình bày theo mười tám giới, ba thành phần nào phải được phân biệt rõ?",
      "options": [
        "Nhãn căn, nhãn thức và sắc cảnh.",
        "Nhãn thức, nhĩ thức và tỷ thức.",
        "Nhãn căn, thanh cảnh và ý thức.",
        "Sắc cảnh, hương cảnh và vị cảnh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Trong việc nhìn bông hoa, nhãn căn là chỗ nương, nhãn thức là chủ thể nhận biết và sắc cảnh là đối tượng được nhận biết. Ba thành phần này thuộc cùng một tiến trình nhận thức.",
      "hint": "Chọn đúng căn, thức và cảnh cùng tham gia việc nhìn hình sắc.",
      "memory": "Nhìn hình sắc: nhãn căn–nhãn thức–sắc cảnh.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_11",
      "text": "Khi xác lập “cái cột không phải cái bình”, phương pháp nào phù hợp với cách lập luận được trình bày trong bài?",
      "options": [
        "Chỉ đặt tên “cái cột” mà không cần phân biệt với bất kỳ đối tượng nào trong mọi trường hợp.",
        "Chỉ phủ định cái bình nhưng không cần xác định cái cột là gì.",
        "Đồng nhất cái cột với cái bình vì cả hai đều là đối tượng nhận thức.",
        "Khẳng định đặc điểm của cái cột và phủ định những gì không phải cái cột."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Theo bài, khi xác lập một pháp cần vừa khẳng định điều cần xác lập, vừa phủ định những gì không phải pháp ấy. Nhờ đó cái cột không bị lẫn với cái bình hay một đối tượng khác.",
      "hint": "Việc xác lập rõ một pháp vừa chỉ ra pháp ấy là gì, vừa loại trừ cái khác.",
      "memory": "Khẳng định để xác lập; phủ định để loại trừ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_12",
      "text": "Ví dụ phân biệt một người Việt Nam với một người Ấn Độ được dùng để làm rõ điều gì?",
      "options": [
        "Mọi người đều là sắc pháp nên chỉ cần dùng thân vật lý để xúc chạm.",
        "Muốn xác lập một đối tượng cần nêu đặc điểm phù hợp và loại trừ đối tượng dễ bị lẫn.",
        "Chỉ cần phủ định một quốc gia thì tự động xác lập được mọi quốc gia còn lại mà không cần nêu đặc điểm.",
        "Tên gọi tự quyết định bản chất nên không cần dựa trên đặc điểm để phân biệt."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Ví dụ này minh họa việc dùng khẳng định và phủ định để nhận biết đối tượng. Đặc điểm phù hợp giúp khẳng định, còn những điểm khác biệt giúp loại trừ đối tượng không phải điều đang xác lập.",
      "hint": "Chú ý hai thao tác được dùng cùng nhau khi xác định một người thuộc về đâu.",
      "memory": "Xác lập rõ một pháp cần cả khẳng định và phủ định.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_13",
      "text": "Khi khảo sát Một và Khác, cách xác lập nào đúng đối với vô vi pháp và hữu vi pháp?",
      "options": [
        "Vô vi pháp được làm ra, còn hữu vi pháp không do nhân duyên tạo thành.",
        "Vô vi pháp và hữu vi pháp là một vì đều có thể trở thành đối tượng nhận thức.",
        "Vô vi pháp là pháp không được làm ra, khác với hữu vi pháp được làm ra.",
        "Hữu vi pháp chỉ là sắc thô, còn vô vi pháp là toàn bộ tâm vương và tâm sở."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Vô vi pháp đồng nhất với pháp không được làm ra. Nó khác với hữu vi pháp, vì hữu vi pháp do nguyên nhân và điều kiện tạo thành nên là pháp được làm ra.",
      "hint": "Dựa vào tiêu chí được làm ra hay không được làm ra.",
      "memory": "Vô vi: không được làm ra; hữu vi: được làm ra.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_14",
      "text": "Vì sao chương hai của Tập 1 chỉ giới thiệu tâm pháp mà chưa trình bày chi tiết tâm vương và tâm sở?",
      "options": [
        "Vì chương này tập trung vào đối tượng được nhận thức; tâm pháp sẽ được trình bày chi tiết ở Tập 2.",
        "Vì tâm vương và tâm sở không tồn tại nên không thể trở thành đối tượng nhận thức hay được trình bày ở bất kỳ tập nào.",
        "Vì tâm pháp hoàn toàn đồng nhất với sắc pháp và không cần giải thích riêng.",
        "Vì chương này chỉ thừa nhận những vật thể mà thân vật lý có thể xúc chạm."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Chương hai của Tập 1 tập trung vào đối tượng được nhận thức, chủ yếu là sắc pháp, bất tương ưng hành pháp và vô vi pháp. Tâm pháp được trình bày chi tiết ở Tập 2, nơi trọng tâm là tâm thức và tiến trình nhận thức.",
      "hint": "Phân biệt trọng tâm của Chương 2 với trọng tâm của tập khảo sát tâm thức.",
      "memory": "Chương 2 tập trung vào đối tượng; Tập 2 trình bày chi tiết tâm pháp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_15",
      "text": "Khi tay chạm vào cánh hoa mới nở làm cánh hoa dần héo, thâm đen và đổi hình dạng, hiện tượng này minh họa đặc tính nào của sắc pháp?",
      "options": [
        "Không được làm ra.",
        "Có khả năng bị băng hoại.",
        "Không thể bị vật chất khác tác động.",
        "Chỉ tồn tại trong tâm thiền định."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cánh hoa bị thay đổi khi chịu tác động vật lý. Đây là ví dụ được bài dùng để minh họa lời ngài Thế Thân: do có khả năng bị băng hoại nên gọi là có thể thành sắc.",
      "hint": "Hãy chú ý sự thay đổi xảy ra khi một vật có hình sắc chạm vào vật có hình sắc khác.",
      "memory": "Sắc có khả năng bị tác động và băng hoại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_16",
      "text": "Nước nóng làm lá trà biến đổi và nước trà đổi màu. Theo cách giải thích của ngài Thế Thân, vì sao đây là ví dụ về sắc pháp?",
      "options": [
        "Vì nước nóng và lá trà đều là pháp thường hằng, không biến chuyển.",
        "Vì chỉ người uống trà thay đổi cách gọi, còn lá trà và nước không thay đổi.",
        "Vì sự đổi màu chỉ xuất hiện trong ý thức và không có tác động vật lý.",
        "Vì một sắc tác động vào sắc khác và làm phát sinh sự thay đổi, băng hoại."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nước nóng tác động vào lá trà làm lá trà biến đổi và nước đổi màu. Sự tác động giữa các sắc và kết quả thay đổi minh họa khả năng bị băng hoại của sắc pháp.",
      "hint": "Xác định tác động vật lý và kết quả biến đổi trong ví dụ pha trà.",
      "memory": "Tác động vật lý làm sắc thay đổi là biểu hiện của băng hoại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_17",
      "text": "Một học viên nói: “Cực vi quá nhỏ, không phải hình sắc thô và không bị vật chất khác trực tiếp làm biến đổi, nên cực vi không phải sắc pháp.” Điểm nào trong bài bác lại kết luận này?",
      "options": [
        "Cực vi là pháp thường hằng nên không cần có quan hệ với sắc thô, sự va chạm hay bất kỳ khả năng băng hoại nào.",
        "Cực vi là tâm sở nên chỉ thay đổi khi đi cùng tâm vương.",
        "Khi kết hợp với các cực vi khác thành sắc pháp thô, tổ hợp ấy vẫn có khả năng bị băng hoại.",
        "Tên gọi “cực vi” tự nó đã đủ thay thế mọi giải thích về sắc pháp."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Ngài Thế Thân thừa nhận một cực vi riêng lẻ không trực tiếp bị băng hoại. Tuy nhiên, khi nhiều cực vi kết hợp thành sắc pháp thô, sắc ấy có khả năng va chạm, biến đổi và băng hoại nên cực vi vẫn thuộc sắc pháp.",
      "hint": "Đừng chỉ xét một cực vi tồn tại riêng lẻ; hãy xét khi các cực vi kết hợp.",
      "memory": "Cực vi thuộc sắc qua sự kết hợp thành sắc thô có thể bị băng hoại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_18",
      "text": "Một khối vật chất được hình thành từ các cực vi và bị biến dạng khi va chạm. Tình huống này làm rõ điều gì trong giải đáp nghi vấn về cực vi?",
      "options": [
        "Cực vi riêng lẻ tuy không trực tiếp bị băng hoại nhưng khi kết hợp thành sắc thô vẫn liên hệ với băng hoại.",
        "Cực vi chỉ là tên gọi của ý thức nên không tham gia hình thành sắc thô và không có bất kỳ quan hệ nào với sự băng hoại.",
        "Khối vật chất là vô vi pháp vì được tạo nên từ những phần rất nhỏ.",
        "Sự va chạm chứng minh cực vi là tâm vương chứ không phải sắc pháp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nghi vấn chỉ nhìn vào cực vi riêng lẻ. Giải đáp xét cực vi khi kết hợp với nhau thành sắc thô; vật thể ấy có thể va chạm, biến dạng và băng hoại nên cực vi không bị loại khỏi sắc pháp.",
      "hint": "Xét sự khác nhau giữa trạng thái riêng lẻ và trạng thái kết hợp thành vật thể thô.",
      "memory": "Muốn xét cực vi, phải xét cả khi cực vi kết hợp thành sắc thô.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_19",
      "text": "Sắc pháp quá khứ hiện đã biến mất và không còn bị vật chất hiện tại tác động. Vì sao sắc quá khứ vẫn được xác lập là sắc pháp?",
      "options": [
        "Vì sắc quá khứ đang tồn tại đồng thời với sắc hiện tại, vẫn bị va chạm và băng hoại trong cùng một sát-na.",
        "Vì khi còn tồn tại, nó đã từng va chạm, biến đổi, băng hoại và cùng loại với sắc hiện tại.",
        "Vì mọi pháp đã biến mất đều trở thành vô vi pháp thường hằng.",
        "Vì sắc quá khứ chỉ là tên gọi nên không cần có đặc tính của sắc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sắc quá khứ khi còn tồn tại đã từng chịu va chạm, biến đổi và băng hoại. Nó cùng loại với sắc hiện tại nên dù nay đã biến mất, nó vẫn được xác lập là sắc pháp.",
      "hint": "Hãy xét sắc quá khứ tại thời điểm nó còn tồn tại.",
      "memory": "Sắc quá khứ đã từng bị băng hoại khi còn tồn tại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_20",
      "text": "Sắc pháp tương lai hiện chưa sinh khởi nên chưa bị va chạm hay băng hoại. Vì sao nó vẫn thuộc sắc pháp?",
      "options": [
        "Vì nó đang hiện hữu đầy đủ, bị vật chất hiện tại tác động trực tiếp và biến đổi trong cùng một sát-na.",
        "Vì mọi điều chưa sinh đều là pháp thường hằng và không được làm ra.",
        "Vì nó chỉ là một tâm sở đang đi cùng với ý thức hiện tại.",
        "Vì khi sinh khởi, nó sẽ chịu va chạm, biến đổi, băng hoại và cùng loại với sắc hiện tại."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc tương lai hiện chưa tồn tại để trực tiếp bị băng hoại. Nhưng khi sinh khởi, nó sẽ có khả năng va chạm, biến đổi và băng hoại như sắc hiện tại; vì cùng loại nên vẫn được xác lập là sắc pháp.",
      "hint": "Hãy xét đặc tính của sắc tương lai khi nó thực sự sinh khởi.",
      "memory": "Sắc tương lai sẽ bị băng hoại khi sinh khởi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w6_21",
      "text": "Một cánh hoa hôm qua đã héo và không còn tồn tại; một cánh hoa ngày mai thì chưa sinh khởi. Nhận định nào đúng theo giải đáp về sắc pháp ba thời?",
      "options": [
        "Cả hai đều không phải sắc vì hiện tại không thể dùng tay xúc chạm và cũng không có bất kỳ quan hệ nào với sắc hiện tại.",
        "Chỉ sắc tương lai là sắc vì nó chưa từng bị băng hoại.",
        "Sắc quá khứ đã từng bị băng hoại, sắc tương lai sẽ bị băng hoại; cả hai cùng loại với sắc hiện tại.",
        "Cả hai là vô vi pháp vì không bị vật chất hiện tại làm thay đổi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cánh hoa quá khứ khi còn tồn tại đã từng biến đổi và băng hoại. Cánh hoa tương lai khi sinh khởi sẽ có khả năng ấy; vì cùng loại với sắc hiện tại nên cả hai vẫn thuộc sắc pháp.",
      "hint": "Phân biệt “đã từng” với “sẽ” và xét quan hệ cùng loại với sắc hiện tại.",
      "memory": "Quá khứ đã từng; tương lai sẽ; cả hai vẫn cùng loại với sắc hiện tại.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_22",
      "text": "Trong ví dụ cành cây và bóng cây, cách ghép nào đúng với biểu sắc và vô biểu sắc?",
      "options": [
        "Cành cây ví như biểu sắc; bóng cây ví như vô biểu sắc.",
        "Cành cây ví như vô biểu sắc; bóng cây ví như biểu sắc.",
        "Cả cành cây và bóng cây đều chỉ ví cho tâm vương.",
        "Cành cây ví cho vô vi pháp; bóng cây ví cho pháp thường hằng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cành cây được ví như biểu sắc, còn bóng cây được ví như vô biểu sắc. Bóng không trực tiếp chịu tác động của gió nhưng thay đổi theo cành cây mà nó nương vào.",
      "hint": "Đối tượng chịu gió tác động trực tiếp được ví với phần làm chỗ nương.",
      "memory": "Cành cây–biểu sắc; bóng cây–vô biểu sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_23",
      "text": "Gió chỉ tác động trực tiếp vào cành cây, không tác động vào bóng cây; tuy vậy bóng vẫn chuyển động. Ví dụ này giải đáp nghi vấn về vô biểu sắc như thế nào?",
      "options": [
        "Vô biểu sắc trực tiếp bị vật chất tác động giống hệt biểu sắc nên không cần nương vào biểu sắc để thay đổi.",
        "Vô biểu sắc không thay đổi nên thuộc pháp thường hằng.",
        "Vô biểu sắc là tâm vương tạo ra mọi vật thể bên ngoài.",
        "Vô biểu sắc tuy không bị tác động trực tiếp nhưng vẫn thay đổi vì nương vào biểu sắc."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bóng cây chuyển động vì nương vào cành cây đang chuyển động. Tương tự, vô biểu sắc không trực tiếp bị vật chất khác làm băng hoại nhưng vẫn thay đổi do nương vào biểu sắc.",
      "hint": "Chú ý sự thay đổi theo cái làm chỗ nương, dù không chịu tác động trực tiếp.",
      "memory": "Vô biểu sắc thay đổi theo biểu sắc mà nó nương vào.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_24",
      "text": "Một người cho rằng vô biểu sắc không thể sờ chạm hay nắm bắt nên chắc chắn không thuộc sắc pháp. Cách trả lời nào sát bài nhất?",
      "options": [
        "Đúng, vì mọi sắc pháp đều phải là vật thể thô có thể cầm nắm và trực tiếp bị hiện tượng vật chất khác làm băng hoại trong hiện tại.",
        "Chưa đúng, vì vô biểu sắc tuy không bị tác động trực tiếp nhưng nương vào biểu sắc và thay đổi theo biểu sắc.",
        "Đúng, vì vô biểu sắc là pháp thường hằng không bao giờ thay đổi.",
        "Chưa đúng, vì vô biểu sắc thực chất là nhãn thức nhận biết hình sắc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Không thể loại vô biểu sắc chỉ vì nó quá vi tế và không trực tiếp bị vật chất khác chạm vào. Nó nương vào biểu sắc và thay đổi theo biểu sắc, nên ngài Thế Thân vẫn xếp nó vào sắc pháp.",
      "hint": "Không lấy khả năng sờ chạm làm tiêu chí duy nhất; hãy xét sự nương tựa.",
      "memory": "Vô biểu sắc thuộc sắc nhờ nương vào biểu sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_25",
      "text": "Cách ghép nào đúng với ba giải đáp của ngài Thế Thân?",
      "options": [
        "Cực vi–kết hợp thành sắc thô; sắc quá khứ và tương lai–cùng loại với sắc hiện tại; vô biểu sắc–nương vào biểu sắc.",
        "Cực vi–nương vào biểu sắc; sắc ba thời–xuất hiện trong thiền định; vô biểu sắc–kết hợp thành sắc thô.",
        "Cực vi–thuộc vô vi pháp; sắc ba thời–không liên hệ với băng hoại; vô biểu sắc–bị gió tác động trực tiếp vì cả ba đều không thể thay đổi.",
        "Cực vi–là tâm sở; sắc ba thời–là tên gọi; vô biểu sắc–là nhãn căn vi tế."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cực vi được giải thích qua sự kết hợp thành sắc thô; sắc quá khứ và tương lai được xác lập do cùng loại với sắc hiện tại; vô biểu sắc vẫn là sắc vì nương vào biểu sắc và thay đổi theo.",
      "hint": "Nhớ ba điểm riêng: kết hợp, cùng loại và nương tựa.",
      "memory": "Cực vi–kết hợp; sắc ba thời–cùng loại; vô biểu sắc–nương tựa.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_26",
      "text": "Một người chạm vào vật nóng, nhìn thấy hình sắc và nghe âm thanh ở bên ngoài. Theo A-tỳ-đạt-ma Tập luận, những trường hợp này thuộc phương diện nào của sắc pháp?",
      "options": [
        "Sắc chỉ tồn tại trong tâm thiền định, không liên hệ với giác quan và không thể hiện hữu như đối tượng ở bên ngoài.",
        "Vô vi pháp không do nguyên nhân và điều kiện tạo thành.",
        "Vật chất tồn tại do xúc chạm, có thể được cảm nhận và tương tác qua thân cùng các giác quan.",
        "Bất tương ưng hành pháp, vì không thuộc sắc cũng không thuộc tâm."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Ngài Vô Trước gọi những sắc có thể được thấy, nghe, ngửi, nếm hoặc xúc chạm qua các giác quan là vật chất tồn tại do xúc chạm. Chúng hiện hữu bên ngoài và có khả năng tương tác.",
      "hint": "Các đối tượng trong tình huống đều được cảm nhận qua giác quan và có thể tương tác.",
      "memory": "Cảm nhận và tương tác qua giác quan: vật chất tồn tại do xúc chạm.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_27",
      "text": "Một vị thiền sư quán bộ xương trải đầy mặt đất; hình ảnh ấy xuất hiện trong tâm nhưng không có bộ xương thật ở bên ngoài. Cách xác lập nào đúng?",
      "options": [
        "Đó là vật chất thô mà mọi người đều có thể dùng tay xúc chạm.",
        "Đó là vô vi pháp vì hình ảnh không thay đổi theo tâm hành giả và có thể được tất cả mọi người nhận biết giống nhau.",
        "Đó là nhãn căn tạo ra những bộ xương thật trên mặt đất.",
        "Đó là sắc biến xứ trong định, tồn tại do quán sát đối tượng và không thể được thân vật lý xúc chạm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối tượng ấy là sắc biến xứ, sắc ở trong định và là đối tượng của tâm thức phân biệt. Nó có hình dáng tương tự sắc thật nhưng chỉ tồn tại trong tâm hành giả, không thể dùng thân vật lý để xúc chạm.",
      "hint": "Phân biệt hình ảnh xuất hiện trong tâm thiền định với vật thể hiện hữu bên ngoài.",
      "memory": "Sắc biến xứ xuất hiện trong định, không phải vật thể thô bên ngoài.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_28",
      "text": "Vì sao các sóng năng lượng mà khoa học nghiên cứu không được đồng nhất với sắc tồn tại do quán sát đối tượng trong thiền định?",
      "options": [
        "Vì sóng năng lượng là pháp thường hằng, còn sắc trong định là pháp vô vi.",
        "Vì sóng năng lượng tuy vi tế vẫn tương tác và cản trở; sắc trong định không thể bị thân vật lý xúc chạm hay ngăn chặn.",
        "Vì sóng năng lượng chỉ tồn tại trong tâm, còn sắc trong định là vật thể thô ở bên ngoài và có thể tương tác với mọi vật bằng thân vật lý.",
        "Vì cả hai hoàn toàn giống nhau, đều có thể được mọi người dùng tay cầm nắm."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Ánh sáng điện và các sóng năng lượng tuy rất vi tế nhưng vẫn có thể tương tác và cản trở lẫn nhau. Sắc do quán sát đối tượng trong thiền định vi tế hơn và không thể bị thân vật lý xúc chạm hay ngăn chặn.",
      "hint": "So sánh khả năng tương tác, cản trở với khả năng bị thân vật lý xúc chạm.",
      "memory": "Vi tế vật lý vẫn tương tác; sắc trong định không bị thân vật lý cản trở.",
      "difficulty": "Khó"
    },
    {
      "id": "w6_29",
      "text": "Một người chạm vào cánh hoa làm hoa đổi màu; trong lúc thiền, người ấy lại thấy hình ảnh một bông hoa không hiện hữu bên ngoài. Cách phân tích nào sát bài nhất?",
      "options": [
        "Cả hai đều là vật thể thô bên ngoài, có thể được mọi người dùng tay xúc chạm và bị hiện tượng vật chất khác trực tiếp làm băng hoại.",
        "Hoa đổi màu là vô vi pháp; hình ảnh trong định là nhãn căn của hành giả.",
        "Hoa đổi màu minh họa sắc bị băng hoại; hình ảnh trong định là sắc tồn tại do quán sát đối tượng.",
        "Cả hai chỉ là tên gọi của ý thức nên không thuộc phạm vi sắc pháp."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cánh hoa đổi màu sau khi bị chạm minh họa khả năng băng hoại theo cách giải thích của ngài Thế Thân. Hình ảnh hoa chỉ xuất hiện trong tâm thiền định là sắc tồn tại do quán sát đối tượng theo ngài Vô Trước.",
      "hint": "Tách hiện tượng biến đổi do tác động vật lý với đối tượng xuất hiện trong tâm thiền định.",
      "memory": "Bị tác động và đổi dạng: băng hoại; hiện trong định: sắc do quán sát.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w6_30",
      "text": "Vô biểu sắc và sắc biến xứ trong định đều không thể được thân vật lý trực tiếp xúc chạm. Điểm phân biệt nào đúng theo bài?",
      "options": [
        "Vô biểu sắc nương vào biểu sắc và thay đổi theo; sắc biến xứ tồn tại do quán sát đối tượng trong tâm thiền định.",
        "Vô biểu sắc là vật thể thô bên ngoài; sắc biến xứ là pháp thường hằng không có hình dáng và cả hai đều bị thân vật lý tác động trực tiếp.",
        "Vô biểu sắc và sắc biến xứ hoàn toàn đồng nhất vì đều là tâm vương.",
        "Vô biểu sắc do cực vi kết hợp; sắc biến xứ là sắc quá khứ đã biến mất."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Vô biểu sắc không trực tiếp bị vật chất tác động nhưng nương vào biểu sắc và thay đổi theo biểu sắc. Sắc biến xứ trong định tồn tại do quán sát đối tượng, xuất hiện trong tâm hành giả và không phải vật thể thô bên ngoài.",
      "hint": "Một trường hợp được giải thích bằng sự nương vào; trường hợp kia bằng sự xuất hiện trong tâm thiền định.",
      "memory": "Vô biểu sắc nương biểu sắc; sắc biến xứ nương sự quán sát trong định.",
      "difficulty": "Nâng cao"
    }
  ],
  "week7": [
    {
      "id": "w7_1",
      "text": "Khi một người nhìn thấy bông hoa, cách xác định nào đúng theo căn–cảnh–thức?",
      "options": [
        "Nhãn căn là chủ thể nhận biết; nhãn thức là hình sắc của bông hoa.",
        "Nhãn căn là nơi nương tựa; sắc cảnh là đối tượng; nhãn thức là chủ thể nhận biết.",
        "Bông hoa là căn; nhãn căn là cảnh; nhãn thức chỉ là tên gọi của con mắt vật lý và không trực tiếp nhận biết.",
        "Nhãn thức là nơi nương tựa; nhãn căn là đối tượng ở bên ngoài."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Trong tiến trình nhìn, nhãn căn là nơi nương tựa, hình sắc của bông hoa là cảnh được nhận thức và nhãn thức là chủ thể nhận thức. Đây là cách trình bày căn–cảnh–thức trong mười tám pháp giới.",
      "hint": "Phân biệt nơi nương tựa, đối tượng được nhận thức và chủ thể nhận thức.",
      "memory": "Nhãn căn nương tựa; sắc cảnh được biết; nhãn thức nhận biết.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_2",
      "text": "Khi nghe tiếng chuông, cách ghép nào đúng?",
      "options": [
        "Thanh cảnh–nhãn căn–nhãn thức.",
        "Nhĩ thức–thanh cảnh–tỷ căn.",
        "Nhĩ căn–thanh cảnh–nhĩ thức.",
        "Nhĩ căn–sắc cảnh–ý thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhĩ căn là nơi nương tựa, tiếng chuông là thanh cảnh và nhĩ thức là chủ thể nhận biết âm thanh. Ba thành phần phải tương ứng với cùng một tiến trình nghe.",
      "hint": "Chọn căn, cảnh và thức cùng liên hệ với âm thanh.",
      "memory": "Nghe âm thanh: nhĩ căn–thanh cảnh–nhĩ thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_3",
      "text": "Muốn trình bày riêng căn là cơ sở nương tựa, cảnh là đối tượng và thức là chủ thể nhận thức, bài sử dụng hệ thống nào?",
      "options": [
        "Mười tám pháp giới.",
        "Chân đế và tục đế.",
        "Thường và vô thường.",
        "Hữu vi và vô vi."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mười tám pháp giới trình bày riêng sáu căn, sáu trần và sáu thức. Nhờ vậy, căn là nơi nương tựa, cảnh là đối tượng và thức là chủ thể nhận thức được phân biệt rõ.",
      "hint": "Hệ thống này làm rõ đồng thời căn, cảnh và thức.",
      "memory": "Mười tám pháp giới làm rõ căn–cảnh–thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_4",
      "text": "Theo định nghĩa được dẫn từ Nhập Trung Luận của ngài Nguyệt Xứng, sắc được xác lập như thế nào?",
      "options": [
        "Sắc là bất kỳ pháp nào được ý thức nhớ lại sau khi đã biến mất.",
        "Sắc là mọi đối tượng nhất thiết phải được mắt thường nhìn thấy.",
        "Sắc là pháp chỉ tồn tại khi hai vật thể va chạm trực tiếp với nhau.",
        "Sắc là đặc tính “có thể thành sắc”."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nhập Trung Luận nêu: “Sắc là đặc tính có thể thành sắc.” Đây là định nghĩa được bài dẫn để xác lập sắc pháp, khác với các đặc tính chung hay các cách phân loại sắc.",
      "hint": "Tìm đúng câu định nghĩa được trích dẫn trong bài.",
      "memory": "Định nghĩa được nêu: sắc là đặc tính “có thể thành sắc”.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_5",
      "text": "Một chiếc bình có thể được cầm, nắm và tiếp xúc bằng thân vật lý. Theo cách phân chia trong Tập Luận, chiếc bình thuộc loại nào?",
      "options": [
        "Sắc chỉ tồn tại trong ý thức.",
        "Sắc có thể xúc chạm.",
        "Sắc được ý thức quán tưởng.",
        "Tâm pháp chuyển biến nhờ thực hành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Chiếc bình có thể được thân vật lý tiếp xúc và nắm giữ nên thuộc sắc có thể xúc chạm. Loại sắc này khác với hình ảnh chỉ được tạo lập và hiển hiện trong ý thức.",
      "hint": "Tiêu chí ở đây là khả năng tiếp xúc hoặc nắm giữ bằng vật lý.",
      "memory": "Có thể cầm nắm bằng vật lý: sắc có thể xúc chạm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_6",
      "text": "Một hình ảnh màu sắc và hình dạng chỉ xuất hiện trong ý thức, không thể dùng tay nắm bắt. Hình ảnh ấy thuộc loại nào?",
      "options": [
        "Sắc có thể xúc chạm, bị cản trở và hiện hữu như một vật thể thô ở bên ngoài.",
        "Ngoại sắc như đất và đá.",
        "Sắc không thể xúc chạm, chỉ tồn tại trong tâm tưởng.",
        "Tịnh sắc căn thuộc năm giác quan."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hình ảnh chỉ được tạo lập trong ý thức và không thể tiếp xúc bằng thân vật lý thuộc sắc không thể xúc chạm. Bài nêu màu sắc, hình dạng hoặc kích thước hình thành trong ý thức làm ví dụ.",
      "hint": "Đối tượng chỉ hiển hiện trong tư duy và không thể tiếp xúc bằng giác quan.",
      "memory": "Chỉ hiển hiện trong ý thức: sắc không thể xúc chạm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_7",
      "text": "Lửa gặp nước làm ngọn lửa yếu dần hoặc bị dập tắt minh họa điều gì?",
      "options": [
        "Sự biến đổi vật chất do các vật thể tiếp xúc và tác động lẫn nhau.",
        "Sự chuyển hóa tâm thức nhờ thực hành nhẫn nhục.",
        "Một hình ảnh chỉ hiện hữu trong ý thức quán tưởng và không có bất kỳ sự tác động vật lý nào giữa các vật thể.",
        "Một pháp không chịu bất kỳ tác động vật lý nào."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Lửa và nước là các hiện tượng vật chất; khi tiếp xúc, chúng tác động làm ngọn lửa thay đổi. Đây là ví dụ về sắc bị băng hoại do tiếp xúc, va chạm hoặc tương tác vật lý.",
      "hint": "Xác định đây là tác động giữa các vật thể hay sự chuyển biến trong tâm.",
      "memory": "Lửa gặp nước: biến đổi vật chất do tương tác.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_8",
      "text": "Nhờ thực hành nhẫn nhục, cơn sân giận giảm dần. Bài xác định trường hợp này như thế nào?",
      "options": [
        "Là vật chất bị cản trở bởi một vật khác và biến đổi trực tiếp khi hai vật thể va chạm với nhau.",
        "Là sắc có thể cầm nắm bằng thân vật lý.",
        "Là sự băng hoại do hai vật thể va chạm.",
        "Là sự chuyển hóa của tâm thức, không phát sinh từ xúc chạm vật lý."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cơn sân được chuyển hóa nhờ quá trình thực hành trong tâm thức. Nó không phát sinh từ sự tiếp xúc giữa hai vật thể nên không được đồng nhất với sự biến đổi vật chất do xúc chạm.",
      "hint": "Quá trình này diễn ra trong tâm hay giữa hai vật thể?",
      "memory": "Nhẫn nhục chuyển hóa tâm, không phải vật chất va chạm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w7_9",
      "text": "Một học viên cho rằng lửa gặp nước và cơn sân giảm nhờ nhẫn nhục đều là cùng một loại “băng hoại”. Cách sửa nào sát bài nhất?",
      "options": [
        "Cả hai đều là biến đổi vật chất vì đều có kết quả khác trước.",
        "Cả hai đều chỉ tồn tại trong ý thức nên không cần phân biệt sự biến đổi vật chất với chuyển hóa tâm thức.",
        "Lửa gặp nước là biến đổi vật chất; cơn sân giảm là chuyển hóa tâm thức.",
        "Cơn sân giảm là xúc chạm vật lý; lửa gặp nước là hoạt động của tâm."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Lửa gặp nước thay đổi do các hiện tượng vật chất tiếp xúc và tác động. Cơn sân giảm nhờ nhẫn nhục là sự chuyển hóa trong tâm thức, không phát sinh từ xúc chạm vật lý.",
      "hint": "Phân biệt nguyên nhân vật lý với quá trình thực hành trong tâm.",
      "memory": "Biến đổi vật chất khác với chuyển hóa tâm thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_10",
      "text": "Tịnh sắc căn giữ vai trò nào đối với mắt, tai, mũi, lưỡi và thân?",
      "options": [
        "Là phần sắc chất vi tế, trong suốt, làm nền tảng để tiếp nhận đối tượng.",
        "Là toàn bộ vật chất bên ngoài như đất, đá và cây cối.",
        "Là hình ảnh chỉ xuất hiện khi ý thức quán tưởng trong thiền định và không có quan hệ với bất kỳ căn nào.",
        "Là chính tâm thức trực tiếp thay thế cho năm giác quan."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tịnh sắc căn là phần sắc chất vi tế, trong suốt của năm căn. Nó làm nền tảng để các giác quan tiếp nhận hình sắc, âm thanh, mùi, vị và sự xúc chạm, từ đó phát sinh nhận thức.",
      "hint": "Tịnh sắc được ví như ánh sáng hoặc viên ngọc trong suốt của mỗi căn.",
      "memory": "Tịnh sắc căn là nền tảng vi tế để năm căn tiếp nhận đối tượng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_11",
      "text": "Một sắc rất vi tế, mắt thường không nhìn thấy và thân không thể xúc chạm, nhưng được tịnh sắc căn nắm giữ. Sắc ấy thuộc trường hợp nào?",
      "options": [
        "Ngoại sắc thô như đất và đá.",
        "Đối tượng của tịnh sắc nắm giữ.",
        "Sự chuyển hóa của tâm thức.",
        "Vật chất có thể nhìn thấy và bị cản trở."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài gọi những sắc vi tế hơn, không thể xúc chạm và mắt thường không thấy được là đối tượng của tịnh sắc nắm giữ. Trường hợp này không phải vật chất thô ở bên ngoài.",
      "hint": "Đây là tính riêng thứ hai của sắc pháp được trình bày trong bài.",
      "memory": "Đối tượng của tịnh sắc: vi tế, mắt thường không thấy, không thể xúc chạm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_12",
      "text": "Một hành giả quán tưởng hình ảnh chỉ hiển hiện trong ý thức. Theo ba tính riêng của sắc pháp, hình ảnh ấy thuộc nhóm nào?",
      "options": [
        "Ngoại sắc không được tâm thức nắm giữ.",
        "Tịnh sắc căn thuộc năm giác quan.",
        "Vật chất thô có thể cầm nắm.",
        "Sắc được ý thức nắm giữ làm đối tượng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hình ảnh quán tưởng chỉ hiển hiện trong ý thức nên thuộc những sắc được ý thức nắm giữ làm đối tượng. Bài trình bày đây là loại sắc cực kỳ vi tế.",
      "hint": "Đối tượng này không hiện hữu như vật thể thô bên ngoài.",
      "memory": "Hình ảnh quán tưởng: sắc được ý thức nắm giữ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_13",
      "text": "Cách ghép nào đúng với ba trường hợp: phần vi tế của mắt, sắc vi tế mắt thường không thấy và hình ảnh quán tưởng?",
      "options": [
        "Ngoại sắc–sắc có thể xúc chạm–tâm pháp, vì cả ba trường hợp đều là những vật thể thô ở bên ngoài.",
        "Ý thức nắm giữ–tịnh sắc căn–ngoại sắc.",
        "Tịnh sắc căn–đối tượng của tịnh sắc–sắc được ý thức nắm giữ.",
        "Sắc xứ–thanh xứ–xúc xứ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phần vi tế của mắt thuộc tịnh sắc căn; sắc vi tế mắt thường không thấy là đối tượng của tịnh sắc nắm giữ; hình ảnh quán tưởng thuộc sắc được ý thức nắm giữ.",
      "hint": "Đối chiếu lần lượt ba tính riêng của sắc pháp.",
      "memory": "Ba tính riêng: tịnh sắc căn–đối tượng của tịnh sắc–ý thức nắm giữ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_14",
      "text": "Một chân đang đặt trên một vị trí; chân kia chỉ đặt đúng chỗ ấy sau khi chân trước được nhấc lên. Ví dụ này làm rõ đặc tính nào của sắc pháp?",
      "options": [
        "Chiếm cứ một nơi tồn tại và cản trở vật khác cùng chiếm đúng vị trí.",
        "Chỉ hiện hữu trong ý thức quán tưởng.",
        "Không thể bị cản trở bởi bất kỳ vật thể nào vì vật chất không chiếm một vị trí cố định trong không gian.",
        "Đồng bản chất với tâm thức nhận biết."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mọi sắc pháp vật chất đều chiếm một vị trí nhất định. Khi một vật đang ở đó, vật khác không thể đồng thời chiếm đúng vị trí ấy; đây là tính chiếm cứ và cản trở.",
      "hint": "Tập trung vào vị trí trong không gian mà vật chất đang chiếm giữ.",
      "memory": "Sắc chiếm chỗ nên hai vật không cùng chiếm đúng một vị trí.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_15",
      "text": "Một cái cây nảy mầm, lớn lên rồi dần khô đi minh họa tính chung nào của sắc pháp?",
      "options": [
        "Chỉ tồn tại trong tư duy.",
        "Có tăng trưởng và suy giảm.",
        "Không bao giờ biến đổi.",
        "Đồng nhất với tịnh sắc căn."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Quá trình cây nảy mầm, sinh trưởng rồi khô đi cho thấy vật chất có tăng và giảm. Đây là một trong những tính chung của sắc pháp.",
      "hint": "Theo dõi sự thay đổi của cây từ lúc nảy mầm đến khi khô đi.",
      "memory": "Cây lớn rồi khô: sắc có tăng trưởng và suy giảm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_16",
      "text": "Một vật có thể chịu sự xúc chạm từ bên trong hoặc bên ngoài. Trường hợp này làm rõ tính chung nào của sắc pháp?",
      "options": [
        "Chỉ do ý thức nắm giữ.",
        "Không thể bị ngăn ngại.",
        "Không chiếm bất kỳ vị trí nào.",
        "Có khả năng xúc chạm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nêu xúc chạm là một tính chung của sắc pháp. Nhiều loại vật chất có hình sắc có thể chịu sự xúc chạm từ bên trong và bên ngoài.",
      "hint": "Chọn đặc tính liên hệ trực tiếp với sự tiếp xúc.",
      "memory": "Xúc chạm là một tính chung của sắc pháp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_17",
      "text": "Thân thể có thể nhìn thấy, xúc chạm và không thể đi xuyên qua tường. Thân thể thuộc trường hợp nào?",
      "options": [
        "Không thể nhìn thấy nhưng vẫn bị cản trở.",
        "Không thể nhìn thấy và không bị cản trở.",
        "Có thể nhìn thấy, có thể xúc chạm và bị cản trở.",
        "Chỉ tồn tại trong ý thức nên không bị ngăn ngại."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Thân thể được nhìn thấy và xúc chạm; khi gặp tường hay cánh cửa, thân không thể đi xuyên qua. Vì vậy, thân thể thuộc loại có thể nhìn thấy, xúc chạm và bị cản trở.",
      "hint": "Xét đồng thời khả năng nhìn thấy, xúc chạm và bị vật khác ngăn lại.",
      "memory": "Thân thể: thấy được, chạm được và bị cản trở.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_18",
      "text": "Vì sao âm thanh được xếp vào loại không thể nhìn thấy nhưng vẫn bị cản trở?",
      "options": [
        "Mắt không thấy âm thanh, nhưng tường hoặc vật liệu cách âm có thể ngăn nó.",
        "Âm thanh là hình ảnh quán tưởng nên chỉ tồn tại trong ý thức.",
        "Âm thanh được nhìn thấy rõ bằng mắt nhưng không thể bị tường, cửa hay bất kỳ vật liệu nào ngăn lại.",
        "Âm thanh là tịnh sắc căn trong suốt thuộc năm giác quan."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Mắt không thể nhìn thấy âm thanh, nhưng tường hoặc vật liệu cách âm vẫn có thể cản trở âm thanh. Không nhìn thấy không đồng nghĩa với không bị cản trở.",
      "hint": "Phân biệt khả năng nhìn bằng mắt với khả năng bị vật liệu ngăn lại.",
      "memory": "Âm thanh không thấy được nhưng vẫn có thể bị cản trở.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_19",
      "text": "Trong cặp nhãn căn và hòn đá bên ngoài, cách xác định nào đúng về nội sắc và ngoại sắc?",
      "options": [
        "Nhãn căn là ngoại sắc; hòn đá là nội sắc.",
        "Nhãn căn là nội sắc; hòn đá là ngoại sắc.",
        "Cả hai đều là tâm pháp vì đều được nhận biết.",
        "Cả hai chỉ tồn tại trong ý thức quán tưởng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhãn căn là nội sắc vì được tâm thức nắm giữ và làm cơ sở tiếp nhận đối tượng. Hòn đá thuộc ngoại sắc vì là vật chất bên ngoài, không được tâm thức nắm giữ theo nghĩa này.",
      "hint": "Năm căn làm cơ sở nhận thức; đất đá thuộc thế giới vật chất bên ngoài.",
      "memory": "Năm căn là nội sắc; đất đá bên ngoài là ngoại sắc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_20",
      "text": "Nhận định nào diễn đạt đúng quan hệ giữa nội sắc và tâm thức?",
      "options": [
        "Nội sắc chính là tâm thức nên không thuộc sắc pháp.",
        "Nội sắc hoàn toàn không liên hệ với tiến trình nhận thức và không làm cơ sở để tâm thức tiếp nhận đối tượng.",
        "Nội sắc chỉ là vật chất bên ngoài như đất và đá.",
        "Nội sắc được tâm thức nắm giữ, không đồng bản chất với tâm nhưng làm cơ sở nhận thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nội sắc như năm căn được tâm thức nắm giữ và làm cơ sở để tâm thức tiếp nhận đối tượng. Tuy nhiên, nội sắc không đồng bản chất với tâm thức và vẫn thuộc sắc pháp.",
      "hint": "Nội sắc liên hệ mật thiết với tâm thức nhưng không phải chính tâm thức.",
      "memory": "Nội sắc làm cơ sở cho tâm nhưng không phải chính tâm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w7_21",
      "text": "Năm đối tượng bên ngoài, năm căn bên trong và sắc thuộc pháp xứ có quan hệ thế nào với đại chủng theo Tập Luận?",
      "options": [
        "Ba nhóm ấy tạo ra đại chủng sau khi đã hình thành đầy đủ.",
        "Chỉ năm đối tượng bên ngoài có liên hệ với đại chủng.",
        "Đại chủng làm nhân duyên để ba nhóm sắc ấy hình thành.",
        "Đại chủng là một tâm pháp nắm giữ ba nhóm sắc."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tập Luận trình bày đại chủng làm nhân duyên cho năm đối tượng bên ngoài, năm căn bên trong và sắc thuộc pháp xứ. Ba nhóm sắc này đều nương nơi đại chủng mà hình thành.",
      "hint": "Trong cách phân loại của ngài Vô Trước, đại chủng giữ vai trò nhân duyên.",
      "memory": "Đại chủng là nhân duyên của các nhóm sắc còn lại.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_22",
      "text": "Khi giải thích nguồn gốc của một vật thể có thể nhìn thấy và xúc chạm, kết luận nào sát bài nhất?",
      "options": [
        "Vật thể ấy nương nơi đại chủng mà hình thành.",
        "Vật thể ấy do nhãn thức tạo ra sau khi nhìn thấy.",
        "Vật thể ấy chỉ tồn tại trong tâm tưởng của người quan sát.",
        "Vật thể ấy không cần bất kỳ nhân duyên vật chất nào."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài cho biết mọi sắc pháp đều nương nơi đại chủng mà hình thành. Những vật chất và vật thể có thể nhìn thấy, tiếp xúc đều có nguồn gốc từ các đại chủng.",
      "hint": "Bài xem đại chủng là những yếu tố tinh tế sinh khởi vật chất.",
      "memory": "Sắc pháp nương đại chủng mà hình thành.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_23",
      "text": "Một hình sắc hiện hữu nhưng không phải đối tượng của mắt trong trường hợp đang xét. Theo nguyên tắc của bài, nên gọi thế nào?",
      "options": [
        "Luôn gọi là sắc xứ vì mọi sắc tự động là một xứ.",
        "Chỉ gọi là sắc, chưa gọi là sắc xứ.",
        "Gọi là thanh xứ vì không được mắt nhận thức.",
        "Gọi là nhãn căn vì có liên hệ với hình sắc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nếu hình sắc không phải đối tượng của mắt thì chỉ gọi là sắc, chưa gọi là sắc xứ. Nó trở thành sắc xứ khi làm đối tượng cho mắt nhận thức và là đối tượng sử dụng của nhãn căn.",
      "hint": "Tên “xứ” phát sinh khi đối tượng liên hệ với căn nhận thức tương ứng.",
      "memory": "Sắc thành sắc xứ khi làm đối tượng của mắt.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_24",
      "text": "Khi nào một âm thanh được gọi là thanh xứ?",
      "options": [
        "Khi âm thanh được mắt nhìn thấy rõ ràng.",
        "Khi âm thanh chỉ được ý thức tưởng tượng nhưng không liên hệ với tai.",
        "Khi âm thanh tồn tại nhưng không thể làm đối tượng cho bất kỳ căn nào.",
        "Khi âm thanh làm đối tượng cho tai nhận thức và được nhĩ căn nắm giữ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Âm thanh được gọi là thanh xứ khi làm đối tượng cho tai nhận thức và được nhĩ căn nắm giữ. Nếu không giữ vai trò ấy thì chỉ gọi là thanh, chưa gọi là thanh xứ.",
      "hint": "Đối chiếu âm thanh với căn nhận thức tương ứng.",
      "memory": "Thanh thành thanh xứ khi làm đối tượng của tai.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_25",
      "text": "Một người ngửi hương hoa, nếm vị trái cây và cảm nhận hơi ấm bằng thân. Cách ghép nào đúng?",
      "options": [
        "Hương–nhãn căn; vị–nhĩ căn; xúc–tỷ căn.",
        "Hương–thiệt căn; vị–thân căn; xúc–nhãn căn.",
        "Hương xứ–tỷ căn; vị xứ–thiệt căn; xúc xứ–thân căn.",
        "Hương xứ–ý căn; vị xứ–nhãn căn; xúc xứ–nhĩ căn vì cả ba đều do cùng một giác quan tiếp nhận."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Mùi là hương xứ làm đối tượng cho tỷ căn; vị là vị xứ làm đối tượng cho thiệt căn; sự xúc chạm hay hơi ấm là xúc xứ làm đối tượng cho thân căn.",
      "hint": "Ghép từng đối tượng với giác quan trực tiếp tiếp nhận nó.",
      "memory": "Mũi–hương xứ; lưỡi–vị xứ; thân–xúc xứ.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_26",
      "text": "Một học viên nói: “Bất kỳ màu sắc nào tồn tại cũng tự động là sắc xứ.” Cách sửa nào đúng?",
      "options": [
        "Màu sắc chỉ thành sắc xứ khi làm đối tượng cho mắt nhận thức.",
        "Màu sắc thành sắc xứ khi được tai nghe thấy.",
        "Mọi màu sắc đều là tâm pháp nên không thể gọi là sắc và cũng không thể làm đối tượng cho nhãn căn.",
        "Chỉ màu sắc trong quán tưởng mới được gọi là sắc xứ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Không phải mọi hình sắc tự động là sắc xứ. Một màu sắc hay hình sắc được gọi là sắc xứ khi nó làm đối tượng cho mắt nhận thức và là đối tượng sử dụng của nhãn căn.",
      "hint": "Điều kiện quyết định nằm ở quan hệ giữa đối tượng và nhãn căn.",
      "memory": "Tên sắc xứ dựa trên quan hệ với mắt nhận thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_27",
      "text": "Âm thanh sau bức tường và hình ảnh chỉ xuất hiện trong quán tưởng khác nhau ở điểm nào?",
      "options": [
        "Cả hai đều có thể nhìn thấy và cầm nắm bằng tay.",
        "Âm thanh không nhìn thấy nhưng có thể bị cản trở; hình ảnh quán tưởng chỉ hiển hiện trong ý thức.",
        "Âm thanh chỉ tồn tại trong tâm; hình ảnh quán tưởng là vật thể thô bên ngoài, có thể dùng tay xúc chạm và bị tường ngăn lại.",
        "Cả hai đều là tịnh sắc căn thuộc năm giác quan."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Âm thanh không được mắt nhìn thấy nhưng có thể bị tường hoặc vật liệu cách âm cản trở. Hình ảnh quán tưởng chỉ hiển hiện trong ý thức và thuộc sắc không thể xúc chạm.",
      "hint": "So sánh khả năng bị vật liệu ngăn lại với sự hiện hữu chỉ trong ý thức.",
      "memory": "Âm thanh bị cản trở; hình ảnh quán tưởng chỉ hiện trong ý thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_28",
      "text": "Khi nhìn một bông hoa, cách phân tích nào đầy đủ và sát bài nhất?",
      "options": [
        "Nhãn căn là ngoại sắc; màu hoa là tâm pháp; nhãn thức là sắc xứ và cả ba đều là những vật thể ở bên ngoài.",
        "Màu hoa là nội sắc; nhãn căn là cảnh; nhãn thức là đại chủng.",
        "Nhãn căn và nhãn thức đều là hình sắc ở bên ngoài.",
        "Nhãn căn là nội sắc và nơi nương tựa; màu hoa là sắc xứ; nhãn thức là chủ thể nhận biết."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nhãn căn thuộc nội sắc và làm nơi nương tựa cho nhận thức. Màu sắc của bông hoa là sắc xứ khi làm đối tượng cho mắt, còn nhãn thức là chủ thể nhận biết hình sắc ấy.",
      "hint": "Kết hợp ba trục: nội sắc, đối tượng–xứ và căn–cảnh–thức.",
      "memory": "Nhìn hoa: nhãn căn–nội sắc; màu hoa–sắc xứ; nhãn thức–chủ thể.",
      "difficulty": "Khó"
    },
    {
      "id": "w7_29",
      "text": "Ba tình huống sau minh họa đúng các tính chung nào của sắc pháp: một chân phải nhấc lên để chân kia đặt đúng chỗ; cây lớn rồi khô; bàn tay chạm cành cây?",
      "options": [
        "Tịnh sắc căn–ý thức nắm giữ–ngoại sắc.",
        "Nhìn thấy–không nhìn thấy–không bị cản trở, tương ứng với ba giai đoạn phát triển của cùng một vật.",
        "Chiếm cứ một nơi–có tăng giảm–có khả năng xúc chạm.",
        "Sắc xứ–thanh xứ–hương xứ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hai chân không cùng chiếm đúng một vị trí minh họa tính chiếm cứ; cây lớn rồi khô minh họa tăng giảm; bàn tay chạm cành cây minh họa khả năng xúc chạm.",
      "hint": "Ghép từng ví dụ với ba tính chung được trình bày trong bài.",
      "memory": "Ba tính chung: chiếm cứ–tăng giảm–xúc chạm.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w7_30",
      "text": "Cách phân tích nào đúng cho ba trường hợp: hòn đá bên ngoài, hình ảnh màu sắc trong quán tưởng và âm thanh sau bức tường?",
      "options": [
        "Hòn đá là ngoại sắc có thể xúc chạm; hình ảnh quán tưởng là sắc không thể xúc chạm; âm thanh không nhìn thấy nhưng bị cản trở.",
        "Hòn đá là nội sắc làm cơ sở cho tâm; hình ảnh quán tưởng là vật thể thô bên ngoài; âm thanh nhìn thấy được và không bị bất kỳ vật liệu nào cản trở.",
        "Cả ba đều là tâm pháp vì đều có thể trở thành đối tượng nhận thức.",
        "Cả ba đều là tịnh sắc căn và làm cơ sở trực tiếp của năm giác quan."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hòn đá thuộc ngoại sắc và có thể xúc chạm; hình ảnh quán tưởng chỉ hiển hiện trong ý thức nên không thể xúc chạm; âm thanh không nhìn thấy nhưng vẫn có thể bị tường cản trở.",
      "hint": "Xét lần lượt vị trí bên ngoài, sự hiện hữu trong ý thức và khả năng bị ngăn lại.",
      "memory": "Ngoại sắc thô–sắc quán tưởng–âm thanh bị cản trở là ba trường hợp khác nhau.",
      "difficulty": "Nâng cao"
    }
  ],
  "week8": [
    {
      "id": "w8_1",
      "text": "Theo bài học, điều kiện nào khiến một ngoại cảnh được gọi là “xứ”?",
      "options": [
        "Ngoại cảnh do đại chủng làm nhân duyên, dù chưa được tâm thức nhận biết.",
        "Ngoại cảnh trở thành đối tượng nhận thức của tâm thức tương ứng.",
        "Ngoại cảnh tồn tại ở bên ngoài và có thể chiếm giữ một vị trí.",
        "Ngoại cảnh được đặt một tên riêng để phân biệt với năm căn."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sắc, thanh, hương, vị và xúc được gọi là “xứ” khi trở thành đối tượng nhận thức của tâm thức. Chỉ tồn tại như một hiện tượng vật chất bên ngoài chưa đủ để được gọi là xứ.",
      "hint": "Hãy xét mối liên hệ giữa ngoại cảnh với hoạt động nhận thức.",
      "memory": "“Xứ” nhấn mạnh ngoại cảnh trong mối liên hệ với tâm thức nhận biết.",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_2",
      "text": "Cách hiểu nào đúng về quan hệ giữa năm xứ và năm căn?",
      "options": [
        "Năm xứ là năm căn, còn ngoại sắc là năm thức phát sinh từ các căn ấy.",
        "Năm căn là đối tượng bên ngoài, còn năm xứ là chủ thể trực tiếp nhận biết.",
        "Mỗi căn có thể trực tiếp nắm giữ toàn bộ năm xứ trong mọi trường hợp.",
        "Năm xứ là các đối tượng; mắt, tai, mũi, lưỡi và thân là các căn tương ứng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc xứ, thanh xứ, hương xứ, vị xứ và xúc xứ là các đối tượng tương ứng của mắt, tai, mũi, lưỡi và thân. Bài phân biệt rõ ngoại sắc là đối tượng với nội sắc là năm căn.",
      "hint": "Phân biệt phía được nhận thức với phía làm cơ sở cho nhận thức.",
      "memory": "Xứ là đối tượng; căn là phía nhận biết đối tượng tương ứng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_3",
      "text": "Theo Đại thừa A-tỳ-đạt-ma Tập Luận, vai trò của đại chủng đối với các nhóm sắc còn lại là gì?",
      "options": [
        "Đại chủng làm nhân duyên của ngoại sắc, nội sắc và sắc thuộc pháp xứ.",
        "Đại chủng chỉ là tên gọi chung của năm đối tượng thuộc ngoại sắc.",
        "Đại chủng là một loại tâm thức trực tiếp nắm giữ sắc thuộc pháp xứ.",
        "Đại chủng thay thế năm căn khi các căn không nhận biết được ngoại cảnh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài trình bày ngoại sắc, nội sắc và sắc thuộc pháp xứ, rồi nêu đại chủng làm nhân duyên của ba nhóm ấy. Vì vậy, đại chủng không phải năm thức hay tên gọi thay thế cho ngoại sắc.",
      "hint": "Ba nhóm sắc được nêu trước, rồi bài xác định quan hệ của đại chủng với chúng.",
      "memory": "Đại chủng làm nhân duyên cho ba nhóm sắc được nêu cùng với nó.",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_4",
      "text": "Định nghĩa nào được bài dùng để xác lập sắc (gzugs)?",
      "options": [
        "Có thể trở thành đối tượng của riêng nhãn thức trong mọi trường hợp.",
        "Có thể được phân chia hoàn toàn thành màu chính và màu phụ.",
        "Có thể thành sắc (gzugs su rung wa).",
        "Có thể biểu hiện động cơ của một người thông qua hình thể."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài định nghĩa sắc (gzugs) là “có thể thành sắc” (gzugs su rung wa). Đây là định nghĩa dùng để xác lập sắc pháp, dù ý nghĩa còn cần tiếp tục được phân tích.",
      "hint": "Đây là định nghĩa được bài nhận xét là trừu tượng đối với người mới học.",
      "memory": "Sắc (gzugs): “có thể thành sắc” (gzugs su rung wa).",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_5",
      "text": "Sự phân chia căn bản nào được bài áp dụng trực tiếp cho sắc xứ?",
      "options": [
        "Ngoại sắc và nội sắc.",
        "Màu sắc và hình dạng.",
        "Sắc hữu hình và bổ-đặc-già-la.",
        "Đại chủng và bất tương ưng hành pháp."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sắc xứ được chia thành màu sắc và hình dạng, còn gọi là hình thể. Màu sắc lại được phân thành màu chính và màu phụ, nhưng đó là bước phân chia tiếp theo.",
      "hint": "Một phía nói đến màu; phía còn lại nói đến hình thể của đối tượng.",
      "memory": "Sắc xứ có hai phương diện căn bản: màu sắc và hình thể.",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_6",
      "text": "Cặp diễn đạt nào đúng với định nghĩa màu chính và màu phụ trong bài?",
      "options": [
        "Màu chính do pha trộn mà có; màu phụ là màu vốn có và không biến đổi.",
        "Màu chính thuộc thân xúc chạm; màu phụ chỉ là đối tượng của ý thức.",
        "Màu chính và màu phụ đều chỉ là tên gọi, không thuộc phạm vi sắc xứ.",
        "Màu chính là màu vốn có; màu phụ được tạo do pha trộn các màu chính."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Màu chính được trình bày là màu vốn có của nó, còn màu phụ được tạo thành do sự pha trộn các màu chính. Vì vậy, màu phụ không giữ nguyên màu gốc đã tham gia pha trộn.",
      "hint": "Xét màu nào là cơ sở và màu nào hình thành từ sự pha trộn.",
      "memory": "Màu chính là cơ sở; màu phụ hình thành do sự pha trộn màu chính.",
      "difficulty": "Dễ"
    },
    {
      "id": "w8_7",
      "text": "Một hòn đá tồn tại bên ngoài nhưng chưa trở thành đối tượng nhận thức của bất kỳ tâm thức nào. Theo cách giải thích trong bài, nhận định nào phù hợp?",
      "options": [
        "Hòn đá đã là sắc xứ vì mọi vật chất bên ngoài đều tự động là xứ.",
        "Hòn đá thuộc nội sắc vì chưa có căn nào trực tiếp nhận biết được nó.",
        "Hòn đá là ngoại cảnh vật chất nhưng trong trường hợp ấy chưa được gọi là xứ.",
        "Hòn đá thuộc pháp xứ vì chỉ pháp xứ mới tồn tại ngoài hoạt động nhận thức."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài nêu rõ ngoại cảnh chỉ được gọi là xứ khi trở thành đối tượng nhận thức của tâm thức. Do đó, sự tồn tại vật chất của hòn đá không tự nó làm cho hòn đá được gọi là xứ trong tình huống đã nêu.",
      "hint": "Đừng đồng nhất sự tồn tại bên ngoài với điều kiện được gọi là “xứ”.",
      "memory": "Tồn tại bên ngoài chưa đủ; thành đối tượng nhận thức mới được gọi là xứ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_8",
      "text": "Trong ví dụ tranh biện về âm thanh và mắt, “Rtags ma grub” được hiểu như thế nào?",
      "options": [
        "Nhân không thành: lý do nêu ra chưa được chấp nhận là đã xác lập.",
        "Không bao khắp: kết luận đúng nhưng không áp dụng cho mọi đối tượng.",
        "Không có sở tri: cả âm thanh lẫn nhãn thức đều không thể tồn tại.",
        "Tương quan thành lập: mắt và âm thanh phải sinh khởi cùng một lúc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Rtags ma grub” được dịch trong bài là “Nhân không thành”. Nó cho biết lý do của người lập luận chưa được phía trả lời chấp nhận là một nhân đã xác lập.",
      "hint": "Thuật ngữ này là lời đáp khi người tranh biện không chấp nhận lý do được đưa ra.",
      "memory": "Rtags ma grub nghĩa là Nhân không thành.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_9",
      "text": "Nhận định nào KHÔNG ĐÚNG với vai trò của ví dụ loài rắn và một vị có sức định?",
      "options": [
        "Các ví dụ được dùng để chất vấn giới hạn thông thường của đối tượng do mắt nhận thức.",
        "Các ví dụ chứng minh mọi nhãn thức đều thấy âm thanh, hương và vị trong mọi hoàn cảnh.",
        "Các ví dụ mở ra tranh luận về những trường hợp nhận thức đặc biệt được kinh điển đề cập.",
        "Tài liệu để vấn đề tiếp tục được tranh luận, không trình bày nó như kết luận chung."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài dùng các ví dụ ấy để đặt lại câu hỏi về giới hạn của đối tượng do mắt nhận thức. Tài liệu không kết luận rằng mọi nhãn thức đều thấy âm thanh, hương và vị trong mọi hoàn cảnh.",
      "hint": "Phân biệt một trường hợp đặc biệt dùng để tranh biện với một quy luật áp dụng phổ biến.",
      "memory": "Ví dụ đặc biệt mở tranh biện, không tự động trở thành kết luận phổ biến.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_10",
      "text": "Khi nhìn một người đang đứng trước mặt, theo cách phân tích trong bài, nhãn thức trực tiếp nắm giữ điều gì?",
      "options": [
        "Danh xưng của người ấy như một đối tượng thuộc thanh xứ.",
        "Toàn bộ bổ-đặc-già-la cùng mọi thuộc tính được giả lập trên đó.",
        "Khái niệm “bạn” như một bất tương ưng hành pháp có hình thể riêng.",
        "Hình sắc người ấy, không trực tiếp nắm giữ bổ-đặc-già-la giả có."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nhãn thức trực tiếp nắm giữ hình sắc của người đang đứng trước mặt. “Bạn”, “tôi” hay “cha mẹ” với tư cách bổ-đặc-già-la giả có thuộc bất tương ưng hành pháp, không phải hình sắc trực tiếp của nhãn thức.",
      "hint": "Phân biệt cá thể được giả lập với hình sắc hiện ra cho mắt.",
      "memory": "Mắt trực tiếp nắm giữ hình sắc, không trực tiếp nắm giữ cá thể giả có.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_11",
      "text": "Vì sao bài không xếp “bạn” hay “cha mẹ” với tư cách bổ-đặc-già-la giả có vào sắc xứ?",
      "options": [
        "Vì những danh xưng ấy chỉ có thể được tai nghe chứ không thể được ý thức hiểu.",
        "Vì bổ-đặc-già-la thực có luôn che khuất hình sắc mà mắt đang nắm giữ.",
        "Vì bổ-đặc-già-la giả có thuộc bất tương ưng hành pháp, không phải hình sắc.",
        "Vì cha mẹ thuộc nội sắc, còn bạn và tôi thuộc riêng sắc thuộc pháp xứ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài đặt bổ-đặc-già-la giả có trong bất tương ưng hành pháp. Vì nó không phải hình sắc, mắt không trực tiếp nắm giữ cá thể ấy mà nắm giữ hình sắc làm cơ sở cho sự nhận biết.",
      "hint": "Hãy xác định loại pháp của cá thể giả có và đối chiếu với đối tượng trực tiếp của mắt.",
      "memory": "Bổ-đặc-già-la giả có không đồng nhất với hình sắc của cá thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_12",
      "text": "Cách giải thích nào phù hợp với việc tài liệu khi nói màu chính có lúc thêm màu đen, có lúc không?",
      "options": [
        "Màu đen là màu chính, nhưng có cách liệt kê bỏ màu này theo bối cảnh.",
        "Màu đen vốn là hình thể, chỉ được đổi tên thành màu chính trong lúc tranh biện.",
        "Màu đen thuộc màu phụ vì luôn phải được tạo ra bằng cách pha mọi màu khác.",
        "Màu đen thuộc xúc xứ vì chỉ thân thức mới nhận biết được sự tối đen."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu nói màu đen cũng là một màu chính, nhưng có cách liệt kê bỏ màu đen do ở Ấn Độ không dùng màu này. Vì vậy, sự khác nhau nằm ở cách liệt kê chứ không phải ở việc phủ nhận màu đen là màu chính.",
      "hint": "Bài không phủ nhận tư cách màu chính của màu đen, mà giải thích cách liệt kê.",
      "memory": "Bỏ màu đen khỏi một danh sách không có nghĩa phủ nhận nó là màu chính.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_13",
      "text": "Ví dụ “vải màu đỏ” giúp người học tránh sự đồng nhất nào?",
      "options": [
        "Đồng nhất tấm vải với bổ-đặc-già-la giả có vì cả hai đều có tên gọi.",
        "Đồng nhất thân xúc chạm với nhãn thức vì chúng có thể sinh khởi cùng lúc.",
        "Đồng nhất màu phụ với màu chính chỉ vì hai màu cùng xuất hiện trên vải.",
        "Đồng nhất màu đỏ của vải với bản thân tấm vải mang màu đỏ ấy."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Màu đỏ của vải thuộc phạm vi màu sắc và là đối tượng của mắt. Bản thân tấm vải không phải chính màu đỏ; bài còn nhấn mạnh vải là đối tượng của thân xúc chạm.",
      "hint": "Tách thuộc tính được mắt thấy khỏi vật có thể được thân xúc chạm.",
      "memory": "Màu của vật không đồng nhất với bản thân vật mang màu.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_14",
      "text": "Cách phân tích nào đúng nhất đối với ví dụ về lửa?",
      "options": [
        "Toàn bộ lửa là màu vì mọi tính chất của lửa đều được nhãn thức nắm giữ.",
        "Màu của lửa thuộc phạm vi mắt thấy; tính nóng và đốt cháy thuộc thân xúc chạm.",
        "Tính nóng là màu phụ; công năng đốt cháy là một loại hình thể của sắc xứ.",
        "Lửa chỉ thuộc ý thức vì cả màu sắc lẫn tính nóng đều không thể trực tiếp nhận biết."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Màu của lửa là đối tượng của nhãn thức nên thuộc phạm vi màu sắc. Tính nóng và công năng đốt cháy lại liên hệ với thân xúc chạm, nên không thể đồng nhất toàn bộ lửa với màu.",
      "hint": "Xét riêng phần mắt thấy và phần thân cảm nhận.",
      "memory": "Phân tích lửa theo từng thuộc tính và căn trực tiếp nắm giữ thuộc tính ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_15",
      "text": "Việc giáo điển nêu mây, khói, bụi, sương mù, màu sáng, bóng tối, bóng và màu nắng nhằm mục đích chính nào?",
      "options": [
        "Khẳng định chỉ các hiện tượng này mới có thể được gọi là màu phụ.",
        "Chứng minh mọi hiện tượng dễ tan biến đều không tồn tại ngoài tên gọi.",
        "Đoạn trừ chấp trước sai lầm về sự tồn tại của các hiện tượng ấy.",
        "Đưa các hiện tượng ấy ra khỏi sắc xứ và chuyển chúng sang pháp xứ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài dẫn giáo điển để đoạn trừ chấp trước cho rằng mây, khói, bụi, sương mù không tồn tại hoặc các hiện tượng sáng–tối chỉ tồn tại ngay nơi chúng xuất hiện. Những mục được nêu là ví dụ tiêu biểu, không phải giới hạn tuyệt đối của mọi màu phụ.",
      "hint": "Nhớ hai loại hoài nghi: tưởng một số hiện tượng không tồn tại và tưởng số khác chỉ tồn tại nơi xuất hiện.",
      "memory": "Danh sách màu phụ có chức năng sửa chấp trước sai lầm, không chỉ để học thuộc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w8_16",
      "text": "Đối với một áng mây trắng, cách phân tích nào bám sát điểm tranh biện của bài?",
      "options": [
        "Màu trắng là màu chính; mây thuộc màu phụ, nên cần phân biệt mây với màu của mây.",
        "Mây và màu trắng đều thuộc màu chính vì nhãn thức có thể thấy chúng trong cùng một lúc.",
        "Màu trắng thuộc nội sắc, còn mây thuộc hình thể vì có thể che khuất cảnh vật phía sau.",
        "Mây chỉ là bất tương ưng hành pháp, còn màu trắng thuộc riêng sắc thuộc pháp xứ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ví dụ này làm nổi bật sự khác nhau giữa màu trắng của mây và chính mây. Màu trắng được đặt trong màu chính, còn mây được liệt kê trong màu phụ, nên không nên nhập hai tầng phân tích thành một.",
      "hint": "Một yếu tố là màu trắng; yếu tố còn lại là chính hiện tượng mây được luận liệt kê.",
      "memory": "Phân biệt hiện tượng được gọi tên với màu sắc biểu hiện trên hiện tượng ấy.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_17",
      "text": "Một bề mặt nhẵn đều, không gồ ghề hay móp méo được bài xác định theo tiêu chí nào?",
      "options": [
        "Đó là màu sáng vì ánh sáng phản chiếu đồng đều trên bề mặt.",
        "Đó là hình thể cao vì không có chỗ lõm xuống thấp hơn phần còn lại.",
        "Đó là phẳng; nếu gồ ghề, lồi lõm hoặc có khuyết điểm thì là không phẳng.",
        "Đó là biểu sắc vì hình thể bên ngoài làm người khác nhận biết công năng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài mô tả phẳng là hình dạng bằng phẳng, hoàn hảo, tròn trịa và không gồ ghề hay móp méo. Không phẳng là hình dạng gồ ghề, lồi lõm hoặc có khuyết điểm.",
      "hint": "Đối chiếu trực tiếp hai thuật ngữ hình thể được giải thích bằng trạng thái bề mặt.",
      "memory": "Phẳng và không phẳng được phân biệt theo trạng thái đều hay gồ ghề của hình thể.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_18",
      "text": "Xâu chuỗi có thể được gọi là dài khi so với vật này nhưng ngắn khi so với cuộn dây thừng. Kết luận nào đúng?",
      "options": [
        "Dài và ngắn là hai màu phụ thay đổi theo điều kiện ánh sáng khi quan sát.",
        "Xâu chuỗi thực sự chỉ có một tính chất; cách gọi còn lại luôn là sai lầm.",
        "Dài và ngắn mâu thuẫn tuyệt đối nên không thể cùng áp dụng cho một vật.",
        "Dài và ngắn được xác lập trong sự phụ thuộc đối đãi với đối tượng so sánh."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài dùng xâu chuỗi và dây thừng để cho thấy dài và ngắn không phải thuộc tính tuyệt đối. Cách gọi phụ thuộc đối đãi vào đối tượng được chọn làm mốc so sánh.",
      "hint": "Thay đổi đối tượng so sánh có thể làm thay đổi cách gọi mà không làm mất đối tượng.",
      "memory": "Dài–ngắn có tính đối đãi, không phải phẩm tính tuyệt đối.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_19",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với câu đáp “Khyab pa ma grub – không bao khắp” trong tranh biện về dài và ngắn?",
      "options": [
        "Câu đáp bác bỏ việc lấy một đối tượng so sánh rồi áp đặt cho mọi trường hợp.",
        "Câu đáp xác lập xâu chuỗi là ngắn tuyệt đối và không thể được gọi là dài.",
        "Câu đáp nhắc rằng một vật có thể dài hoặc ngắn tùy mốc được đối chiếu.",
        "Câu đáp cho thấy lý do đã nêu không bao trùm mọi quan hệ so sánh có thể có."
      ],
      "correctAnswerIndex": 1,
      "explanation": "“Khyab pa ma grub” chỉ ra rằng lý do dựa trên cuộn dây thừng không bao khắp mọi quan hệ so sánh. Nó không xác lập xâu chuỗi là ngắn tuyệt đối, vì xâu chuỗi vẫn có thể dài khi so với một vật khác.",
      "hint": "“Không bao khắp” không biến một cách gọi có điều kiện thành thuộc tính tuyệt đối.",
      "memory": "Khyab pa ma grub: lý do không bao trùm toàn bộ trường hợp cần thành lập.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_20",
      "text": "Một học viên nói: “Tôi vừa thấy vừa chạm tấm vải, nên toàn bộ tấm vải chính là sắc xứ.” Điểm cần hiệu chỉnh là gì?",
      "options": [
        "Phải phân biệt màu và hình sắc mắt nắm giữ với tấm vải do thân xúc chạm.",
        "Phải xem tấm vải là nội sắc vì cùng lúc liên hệ với nhiều căn nhận thức.",
        "Phải xem mọi thuộc tính của tấm vải là màu phụ vì mắt đã nhìn thấy chúng.",
        "Phải phủ nhận tấm vải tồn tại vì một đối tượng không thể liên hệ với hai căn."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Lập luận đã đồng nhất vật mang màu với màu và hình sắc mà mắt trực tiếp nhận biết. Bài dùng chính ví dụ vải để nhắc rằng tấm vải còn là đối tượng của thân xúc chạm.",
      "hint": "Một vật có nhiều phương diện; mỗi căn trực tiếp nắm giữ đối tượng thích hợp của nó.",
      "memory": "Không lấy một phương diện được mắt thấy để đồng nhất với toàn bộ vật.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_21",
      "text": "Cách phân biệt nào đúng giữa hạt vi tế và bụi trong phần tranh biện?",
      "options": [
        "Cả hai đều thuộc màu chính vì mắt có thể nhìn thấy chúng dưới ánh sáng.",
        "Hạt vi tế thuộc nội sắc, còn bụi thuộc sắc thuộc pháp xứ của ý thức.",
        "Cả hai hoàn toàn đồng nhất nên phải nằm trong cùng một nhóm phân loại.",
        "Hạt vi tế thuộc hình dạng, còn bụi được liệt kê trong nhóm màu phụ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài xác định hạt vi tế thuộc hình dạng chứ không thuộc màu. Bụi lại được liệt kê trong màu phụ, nên vẻ tương tự bên ngoài không làm hai mục này trở thành một.",
      "hint": "Sự giống nhau về vẻ nhỏ li ti không đủ để xác lập chúng cùng tiêu chí phân loại.",
      "memory": "Hạt vi tế thuộc hình thể; bụi được nêu trong màu phụ.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_22",
      "text": "Điểm nào cho thấy Đại thừa A-tỳ-đạt-ma Tập Luận triển khai phương diện hình thể rộng hơn cách liệt kê căn bản?",
      "options": [
        "Tập Luận chuyển màu xanh và màu đỏ sang nhóm hình thể do màu có vị trí.",
        "Tập Luận xem mây và sương mù là nội sắc do chúng che khuất cảnh vật.",
        "Tập Luận đặt hạt vi tế và hạt thô thiển trong cách phân theo hình thể tồn tại.",
        "Tập Luận loại bỏ dài và ngắn vì hai thuật ngữ ấy chỉ có ý nghĩa đối đãi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Trong Tập Luận, hạt vi tế và hạt thô thiển được đặt trong phần y theo hình thể tồn tại và sự dựng lập của màu sắc. Điều này giải thích vì sao hạt vi tế không được đồng nhất với bụi thuộc màu phụ.",
      "hint": "Tìm hai mục liên hệ với mức độ vi tế và thô thiển của hình thể.",
      "memory": "Vi tế–thô thiển được Tập Luận triển khai trong phương diện hình thể.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_23",
      "text": "“Khoảng không gian cách xa với sự tồn tại của sắc” được nêu với công năng nào?",
      "options": [
        "Làm cho thân thức trực tiếp cảm nhận được độ nóng của vật ở phía xa.",
        "Làm cơ sở cần thiết để thức của mắt thấy được sắc ở đằng xa.",
        "Làm cho ý thức biến bổ-đặc-già-la giả có thành một hình sắc thực có.",
        "Làm cho mọi màu phụ trở thành màu chính khi được nhìn qua khoảng trống."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tài liệu mô tả khoảng không gian trắng, trong suốt này như cơ sở cần thiết để thức của mắt thấy sắc ở đằng xa. Nó không được đồng nhất ngay với màu da trời hay màu của mặt đất.",
      "hint": "Bài minh họa bằng việc mắt nhìn thấy ngọn núi hoặc cảnh vật ở phía xa.",
      "memory": "Khoảng không gian cách xa được nêu trong quan hệ với việc mắt thấy sắc ở xa.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_24",
      "text": "Chuỗi ghép ý nghĩa nào đúng với các mục được Đại thừa A-tỳ-đạt-ma Tập Luận nêu riêng?",
      "options": [
        "Khoảng không gian–thấy sắc xa; biểu sắc–thân biểu lộ động cơ; màu da trời–góc độ trang nghiêm.",
        "Khoảng không gian cách xa–một xúc chạm; biểu sắc–màu phụ của khói; màu da trời–hình thể dài ngắn.",
        "Khoảng không gian cách xa–bổ-đặc-già-la; biểu sắc–nội sắc của mắt; màu da trời–bất tương ưng hành pháp.",
        "Khoảng không gian cách xa–màu của đất; biểu sắc–tính nóng của lửa; màu da trời–hạt vi tế."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Khoảng không gian cách xa liên hệ với việc thấy sắc ở xa; biểu sắc là hình thể đặc thù của thân biểu lộ động cơ; sắc màu với hư không được nói theo góc độ trang nghiêm. Ba ý này không thuộc nội sắc, xúc xứ hay bất tương ưng hành pháp.",
      "hint": "Ghép từng mục với đúng chức năng hoặc góc độ được tài liệu mô tả.",
      "memory": "Thấy xa–khoảng không gian; biểu lộ động cơ–biểu sắc; trang nghiêm–màu da trời.",
      "difficulty": "Khó"
    },
    {
      "id": "w8_25",
      "text": "Xét các nhận định: (1) “xứ” gắn với đối tượng nhận thức; (2) năm căn thuộc nội sắc; (3) mắt trực tiếp nắm giữ hình sắc; (4) đại chủng làm nhân duyên cho ba nhóm sắc còn lại. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (3).",
        "Chỉ (2) và (4).",
        "Chỉ (1), (2) và (3) đúng.",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cả bốn nhận định đều phù hợp với mạch trình bày của bài. Chúng liên kết bốn tầng: điều kiện thành xứ, phân biệt ngoại sắc–nội sắc, đối tượng trực tiếp của mắt và vai trò nhân duyên của đại chủng.",
      "hint": "Đối chiếu lần lượt ý nghĩa của xứ, vị trí của năm căn, đối tượng nhãn thức và vai trò đại chủng.",
      "memory": "Hiểu sắc xứ phải đặt cùng quan hệ đối tượng–căn–nhận thức–đại chủng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w8_26",
      "text": "Một học viên lập luận: “Mắt thấy cha mẹ, nên cha mẹ với tư cách bổ-đặc-già-la chính là sắc xứ.” Sai lầm cốt lõi nằm ở đâu?",
      "options": [
        "Đã phủ nhận rằng hình sắc của cha mẹ có thể trở thành đối tượng của nhãn thức.",
        "Đã xem mọi sắc xứ đều thuộc bất tương ưng hành pháp và không thể được nhìn thấy.",
        "Đã đồng nhất bổ-đặc-già-la giả có với hình sắc nhãn thức trực tiếp nắm giữ.",
        "Đã tách màu của cha mẹ khỏi hình thể nên làm mất quan hệ giữa năm căn."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhãn thức trực tiếp nắm giữ hình sắc của cha mẹ, không trực tiếp nắm giữ bổ-đặc-già-la giả có. Lập luận sai vì chuyển từ “thấy hình sắc” sang “thấy trực tiếp cá thể giả có” mà không phân biệt hai tầng.",
      "hint": "Phân biệt điều mắt trực tiếp nắm giữ với cá thể được giả lập trên cơ sở ấy.",
      "memory": "Không suy từ thấy hình sắc sang trực tiếp thấy bổ-đặc-già-la giả có.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w8_27",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với mức độ kết luận của bài về khoảng không gian cách xa?",
      "options": [
        "Bài đã kết luận khoảng không gian ấy chính là màu sáng thuộc màu phụ.",
        "Bài đặt câu hỏi khoảng không gian ấy có thuộc màu sắc hay không.",
        "Bài yêu cầu phân tích nó giống hay khác màu sáng ở điểm nào.",
        "Bài cho biết phần giải thích chi tiết sẽ tiếp tục ở các phần sau."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu chưa kết luận khoảng không gian cách xa chính là màu sáng thuộc màu phụ. Bài chỉ nêu những điểm tương đồng, đặt vấn đề giống hay khác và để phần giải thích chi tiết cho nội dung tiếp theo.",
      "hint": "Phân biệt câu hỏi đang được để mở với kết luận đã được xác lập.",
      "memory": "Không biến một nghi vấn đang mở thành kết luận mà bài chưa xác lập.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w8_28",
      "text": "Khi một ngôi nhà được gọi là “lớn”, cách trả lời nào thể hiện đúng phương pháp suy luận (rig lam) của bài?",
      "options": [
        "Khẳng định ngôi nhà lớn tuyệt đối vì người nói đã trực tiếp nhìn thấy kích thước.",
        "Xác định mốc so sánh, vì “lớn” hay “nhỏ” được thành lập trong quan hệ đối đãi.",
        "Xếp ngôi nhà vào màu phụ vì khái niệm lớn thay đổi theo người quan sát.",
        "Phủ nhận mọi kích thước vì không thể tìm được một vật lớn tuyệt đối."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài mở rộng từ dài–ngắn sang lớn–nhỏ để cho thấy các cách gọi ấy phụ thuộc đối đãi. Người trả lời cần hỏi rõ vật được so sánh, chứ không khẳng định tuyệt đối hoặc phủ nhận hoàn toàn kích thước.",
      "hint": "Rig lam yêu cầu làm rõ mốc đối chiếu thay vì tuyệt đối hóa cách gọi.",
      "memory": "Rig lam làm rõ điều kiện và mốc đối chiếu của một khẳng định.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w8_29",
      "text": "Khi đối chiếu Câu-xá Luận Tự Thích, Đại thừa A-tỳ-đạt-ma Tập Luận và Bổn địa phần, cách học nào phù hợp nhất với tài liệu Tuần 8?",
      "options": [
        "Gộp mọi danh mục thành một hệ thống vì các tác phẩm đều nói đến sắc xứ.",
        "Chỉ học tên tác phẩm, không cần xét tiêu chí hay những mục được triển khai riêng.",
        "Lấy phần khái quát của Bổn địa phần để thay thế toàn bộ nội dung hai hệ thống kia.",
        "Giữ riêng từng hệ thống, so sánh tiêu chí và không tự bổ sung phần bài chưa giải thích."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Các tác phẩm trình bày sắc xứ theo những phạm vi và cách triển khai không hoàn toàn giống nhau. Vì vậy, cần giữ riêng từng hệ thống, hiểu những mục đặc thù và không suy diễn chi tiết mà Tuần 8 chưa cung cấp.",
      "hint": "Bài trình bày hai hệ thống khá cụ thể nhưng chỉ nêu khái quát hệ thống còn lại.",
      "memory": "So sánh hệ thống bằng tiêu chí và nội dung, không trộn danh mục hoặc suy diễn.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w8_30",
      "text": "Một người ở xa giơ tay ra hiệu. Cách phân tích nào kết hợp đúng sắc xứ, biểu sắc và bổ-đặc-già-la giả có?",
      "options": [
        "Mắt trực tiếp nắm giữ toàn bộ cá thể; cử chỉ thuộc xúc xứ; hình sắc chỉ do ý thức tạo ra.",
        "Mắt nắm giữ bổ-đặc-già-la; biểu sắc là màu da trời; cử chỉ không liên hệ với hình thể.",
        "Mắt nắm giữ hình sắc; hình thể thân có thể biểu lộ động cơ; cá thể giả có không phải hình sắc.",
        "Mắt nắm giữ động cơ; biểu sắc là bất tương ưng hành pháp; cá thể thuộc riêng màu phụ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhãn thức trực tiếp nắm giữ hình sắc của người ở xa; hình thể của thân có thể trở thành biểu sắc làm nhận biết động cơ. Người ấy với tư cách bổ-đặc-già-la giả có không vì vậy trở thành chính hình sắc mà mắt trực tiếp nắm giữ.",
      "hint": "Tách ba tầng: điều mắt thấy, điều cử chỉ biểu lộ và cá thể được giả lập.",
      "memory": "Hình sắc được thấy; biểu sắc biểu lộ động cơ; cá thể giả có không đồng nhất với hình sắc.",
      "difficulty": "Nâng cao"
    }
  ],
  "week9": [
    {
      "id": "w9_1",
      "text": "Mô tả nào xác định đúng thanh xứ theo bài?",
      "options": [
        "Đối tượng do lưỡi thức cảm nghiệm và phân biệt thành các vị căn bản.",
        "Thanh có nguồn gốc từ bốn đại chủng và là đối tượng được nhĩ căn nắm bắt.",
        "Mọi tiếng động có nghĩa do con người cố ý tạo ra để giao tiếp với nhau.",
        "Khoảng không gian trong suốt giúp tai tiếp nhận âm thanh phát ra từ xa."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài xác định thanh có nguồn gốc từ bốn đại chủng và là đối tượng được nhĩ căn nắm bắt. Thanh xứ không giới hạn ở tiếng nói có nghĩa, vì tiếng nước, tiếng sáo và nhiều âm thanh phi ngôn ngữ cũng là đối tượng nghe.",
      "hint": "Hãy xác định căn nhận biết thanh và cơ sở phát sinh của thanh.",
      "memory": "Thanh xứ có nguồn gốc từ bốn đại chủng và là đối tượng của nhĩ căn.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_2",
      "text": "Điểm nào quyết định một âm thanh là thanh thích ý hay thanh không thích ý?",
      "options": [
        "Âm thanh có được tạo ra bằng lời nói có nghĩa hay chỉ là một tiếng động.",
        "Âm thanh phát sinh từ đại chủng có chấp thọ hay không được chấp thọ.",
        "Người phát âm thanh thuộc bậc Thánh hay không phải bậc Thánh.",
        "Âm thanh tạo cảm giác dễ chịu hay khó chịu đối với người nghe."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Thanh thích ý tạo cảm giác ưa thích, dễ chịu hoặc thư giãn; thanh không thích ý tạo cảm giác không ưa thích hoặc khó chịu. Tiêu chí này nói về tác động đối với người nghe, không tự nó xác định nguồn phát hay nội dung chân thật của âm thanh.",
      "hint": "Xét phản ứng ưa thích hoặc không ưa thích nơi người nghe.",
      "memory": "Thích ý và không thích ý được phân biệt theo cảm giác của người nghe.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_3",
      "text": "Theo Đại thừa A-tỳ-đạt-ma Tập Luận, thanh trung tính được hiểu như thế nào?",
      "options": [
        "Là âm thanh không hay cũng không dở, người nghe không thích cũng không ghét.",
        "Là âm thanh vừa có nghĩa lý vừa không có nghĩa lý trong cùng một thời điểm.",
        "Là âm thanh đồng thời phát sinh từ hữu tình và một bậc Thánh nói ra.",
        "Là âm thanh không có nguồn gốc từ bất kỳ đại chủng nào được trình bày trong bài."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Thanh trung tính là âm thanh không hay cũng không dở, người nghe không thích cũng không ghét. Tập Luận trình bày loại này khi phân thanh theo sự hữu ích và tổn hại.",
      "hint": "Tìm trạng thái nằm ngoài cả ưa thích lẫn khó chịu.",
      "memory": "Thanh trung tính không thuộc cảm giác thích cũng không thuộc cảm giác ghét.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_4",
      "text": "Trong bài, “chấp thọ” được giải thích sát nhất theo cách nào?",
      "options": [
        "Một âm thanh được nhiều người ưa thích và đồng ý sử dụng trong giao tiếp.",
        "Một vật bên ngoài được đặt tên rồi trở thành danh ngôn của tông nghĩa.",
        "Các đại chủng được tâm và tâm sở nắm giữ làm điểm sở y, cùng liên hệ lợi ích hoặc tổn hại.",
        "Mọi thứ có thể bị tai nghe thấy, bất kể thuộc thân hữu tình hay hoàn toàn tồn tại ở ngoại cảnh bên ngoài."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài giải thích chấp thọ là những gì được tâm và tâm sở nắm giữ làm điểm sở y, trong đó lợi ích hay tổn hại có quan hệ phụ thuộc lẫn nhau. Vì vậy, chấp thọ không đồng nghĩa với việc âm thanh được ưa thích hoặc được thế gian chấp nhận.",
      "hint": "Hãy nhớ mối liên hệ giữa tâm, tâm sở và phần thân được chúng nắm giữ làm sở y.",
      "memory": "Chấp thọ liên hệ với đại chủng được tâm và tâm sở nắm giữ làm điểm sở y.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_5",
      "text": "Đặc điểm cốt lõi của danh ngôn gán cho bậc Thánh sử dụng là gì?",
      "options": [
        "Lời nói phải có âm điệu dễ chịu và khiến mọi người nghe đều thư giãn.",
        "Lời nói phù hợp với điều thực sự đã hoặc chưa được thấy, nghe, chứng và biết.",
        "Lời nói phải dùng những thuật ngữ triết học mà người bình thường không sử dụng.",
        "Lời nói phải phát ra từ một vật không chấp thọ nhưng vẫn mang nghĩa lý rõ ràng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Danh ngôn gán cho bậc Thánh sử dụng phù hợp với sự thật của kinh nghiệm: đã thấy nói thấy, chưa chứng nói chưa chứng, không biết nói không biết. Tiêu chí không nằm ở giọng nói êm tai, địa vị xã hội hay mức độ khó của thuật ngữ.",
      "hint": "Đối chiếu lời nói với điều người nói thực sự đã hoặc chưa cảm nghiệm.",
      "memory": "Danh ngôn của bậc Thánh phù hợp với điều thực sự đã hoặc chưa được cảm nghiệm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_6",
      "text": "Cách ghép nào đúng giữa hương xứ, vị xứ và chủ thể cảm nghiệm tương ứng?",
      "options": [
        "Hương xứ do nhĩ căn nghe; vị xứ do thân thức cảm nghiệm.",
        "Hương xứ do ý thức biết; vị xứ do nhãn thức nhìn thấy.",
        "Hương xứ do lưỡi thức cảm nghiệm; vị xứ do mũi căn ngửi.",
        "Hương xứ do mũi căn ngửi; vị xứ do lưỡi thức cảm nghiệm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hương xứ là đối tượng kinh nghiệm được ngửi bởi mũi căn, còn vị xứ là đối tượng cảm nghiệm của lưỡi thức. Hai xứ này phải được phân biệt theo giác quan tương ứng, không theo tên gọi hay mức độ dễ chịu.",
      "hint": "Đặt mùi và vị vào đúng giác quan được nêu trong bài.",
      "memory": "Mũi căn ngửi hương xứ; lưỡi thức cảm nghiệm vị xứ.",
      "difficulty": "Dễ"
    },
    {
      "id": "w9_7",
      "text": "Trong tài liệu, cực quýnh sắc được mô tả đúng nhất như thế nào?",
      "options": [
        "Khoảng không gian giữa mắt và sắc ở xa, trong suốt, sáng tỏ và không bị ngăn cản.",
        "Màu của bầu trời xuất hiện khi mắt nhìn qua một vùng không có vật thể che khuất.",
        "Một màu phụ rất sáng mà nhãn thức luôn nhận biết trước các màu sắc khác.",
        "Khoảng không gian vật chất thô có thể bị xúc chạm và ngăn cản như mặt đất."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cực quýnh sắc là khoảng không gian nằm giữa mắt và sắc ở xa, có tính trong suốt, sáng tỏ và không bị ngăn cản. Khoảng không gian ấy làm cơ sở cần thiết để mắt có thể thấy hình sắc ở phía xa.",
      "hint": "Hình dung quan hệ: mắt, khoảng không gian và hình sắc ở xa.",
      "memory": "Cực quýnh sắc là khoảng không gian thông suốt giữa mắt và sắc ở xa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_8",
      "text": "Vì sao bài không đồng nhất cực quýnh sắc với màu sáng trong nhóm màu phụ?",
      "options": [
        "Vì màu sáng thuộc hương xứ, còn cực quýnh sắc chỉ do thân thức cảm nghiệm.",
        "Vì cả hai đều thuộc sắc xứ nhưng màu sáng chỉ xuất hiện ở khoảng cách gần.",
        "Vì cực quýnh sắc thuộc pháp xứ và là đối tượng của ý thức, không phải màu sáng thuộc sắc xứ.",
        "Vì cực quýnh sắc là tên gọi của bầu trời trong suốt, còn màu sáng là tên gọi của mặt đất được chiếu sáng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tài liệu xác định cực quýnh sắc thuộc pháp xứ và là đối tượng của ý thức, chứ không thuộc sắc xứ. Vì vậy, mô tả “trong suốt, sáng tỏ” không khiến nó trở thành màu sáng trong nhóm màu phụ.",
      "hint": "Đừng chỉ dựa vào chữ “sáng”; hãy xét xứ và thức nhận biết.",
      "memory": "Cực quýnh sắc thuộc pháp xứ, không phải màu sáng của sắc xứ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_9",
      "text": "Tiếng phát ra khi bàn tay đập vào bàn minh họa cách phân loại nào trong Tập Luận?",
      "options": [
        "Thanh chỉ do đại chủng được chấp thọ, vì bàn tay thuộc thân của hữu tình.",
        "Thanh có nguồn gốc từ cả đại chủng được chấp thọ và không được chấp thọ.",
        "Thanh chỉ do đại chủng không được chấp thọ, vì cái bàn là vật vô tri bên ngoài.",
        "Thanh không thể xét theo nguyên nhân, vì hai vật cùng tham gia tạo ra tiếng động."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bàn tay thuộc thân người, có cảm giác nên thuộc đại chủng được chấp thọ; cái bàn là vật vô tri bên ngoài nên thuộc đại chủng không được chấp thọ. Âm thanh do tay đập vào bàn vì thế có nguồn gốc từ cả hai loại đại chủng.",
      "hint": "Tách riêng bàn tay có cảm giác và cái bàn vô tri bên ngoài.",
      "memory": "Tay đập bàn là thanh có nguồn gốc từ cả chấp thọ và không chấp thọ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_10",
      "text": "Nhận định nào KHÔNG ĐÚNG khi phân biệt danh ngôn của bậc Thánh và không phải bậc Thánh?",
      "options": [
        "Đã nghe mà nói đã nghe phù hợp với danh ngôn gán cho bậc Thánh sử dụng.",
        "Không biết mà nói không biết phù hợp với danh ngôn gán cho bậc Thánh sử dụng.",
        "Sự phù hợp giữa lời nói và điều đã cảm nghiệm là tiêu chí phân biệt quan trọng.",
        "Chỉ cần giọng nói dễ chịu thì lời nói đương nhiên là danh ngôn của bậc Thánh."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Phương án D không đúng vì bài phân biệt hai loại danh ngôn theo sự phù hợp hay điên đảo giữa lời nói và điều đã cảm nghiệm. Giọng nói dễ chịu thuộc tiêu chí thích ý, không đủ để xác lập danh ngôn gán cho bậc Thánh sử dụng.",
      "hint": "Đây là câu phủ định; hãy tách âm điệu dễ chịu khỏi tính chân thật của lời nói.",
      "memory": "Âm điệu dễ chịu không thay thế tiêu chí lời nói phù hợp với sự thật.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_11",
      "text": "Cách ghép nào đúng với ý nghĩa của “thấy, nghe, chứng và biết” trong bài?",
      "options": [
        "Nhãn thức-thấy; nhĩ thức-nghe; tỷ, thiệt và thân thức-chứng; ý thức-biết.",
        "Nhãn thức-biết; nhĩ thức-thấy; tỷ, thiệt và thân thức-nghe; ý thức-chứng.",
        "Nhãn thức-chứng; nhĩ thức-biết; tỷ, thiệt và thân thức-thấy; ý thức-nghe.",
        "Nhãn thức-nghe; nhĩ thức-chứng; tỷ, thiệt và thân thức-biết; ý thức-thấy."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Những gì nhãn thức cảm nghiệm gọi là thấy, nhĩ thức cảm nghiệm gọi là nghe và ý thức cảm nghiệm gọi là biết. Những gì được tỷ thức, thiệt thức và thân thức cảm nghiệm gọi là chứng.",
      "hint": "Mắt thấy, tai nghe; ba thức thân cận còn lại được gom dưới một thuật ngữ.",
      "memory": "Nhãn-thấy; nhĩ-nghe; tỷ, thiệt, thân-chứng; ý-biết.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_12",
      "text": "Cách phân loại nào đúng cho ba cách nói “cái bình”, “các hành vô thường” và “âm thanh thường hằng”?",
      "options": [
        "Lần lượt là danh ngôn tông nghĩa, biến kế sở khởi và danh ngôn thế gian chấp nhận.",
        "Lần lượt là biến kế sở khởi, danh ngôn thế gian chấp nhận và danh ngôn tông nghĩa.",
        "Lần lượt là danh ngôn thế gian chấp nhận, danh ngôn tông nghĩa và biến kế sở khởi.",
        "Lần lượt là danh ngôn bậc Thánh, thanh trung tính và danh ngôn không phải bậc Thánh."
      ],
      "correctAnswerIndex": 2,
      "explanation": "“Cái bình” là danh ngôn thế gian thường nghiệm chấp nhận, còn “các hành vô thường” là danh ngôn của tông nghĩa. “Âm thanh thường hằng” được bài nêu làm ví dụ cho biến kế sở khởi, tức danh ngôn tăng ích và tổn giảm.",
      "hint": "Phân biệt cách gọi thường nghiệm, cách nói của tông nghĩa và sự tăng ích sai lệch.",
      "memory": "Thế gian-cái bình; tông nghĩa-các hành vô thường; biến kế-âm thanh thường hằng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_13",
      "text": "Một âm thanh chỉ trở thành thanh năng thuyên khi đáp ứng chức năng nào?",
      "options": [
        "Tạo cảm giác thích ý cho mọi người nghe trong cùng một hoàn cảnh.",
        "Làm cho người nghe biết nội dung được nói nhờ ký hiệu hiển thị đối tượng được nghe.",
        "Phát sinh đồng thời từ đại chủng có chấp thọ và đại chủng không chấp thọ.",
        "Tồn tại liên tục để tự chuyển thành tất cả âm tiết tiếp theo trong một câu mà không cần nguyên nhân mới."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Thanh năng thuyên là thanh cá biệt làm cho biết nội dung được nói, nhờ ký hiệu hiển thị đối tượng được nghe. Vì vậy, không phải mọi tiếng động mà tai nghe được đều thực hiện chức năng của thanh năng thuyên.",
      "hint": "Xét khả năng chuyển tải nội dung, không chỉ xét việc tai nghe được tiếng.",
      "memory": "Thanh năng thuyên làm cho người nghe biết nội dung được nói.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_14",
      "text": "Phân loại ba biểu thức “căn nhà”, “căn nhà trắng” và âm “H” đứng riêng theo danh-cú-văn. Cách nào đúng?",
      "options": [
        "“Căn nhà” là cú; “căn nhà trắng” là văn; âm “H” là danh.",
        "“Căn nhà” là văn; “căn nhà trắng” là danh; âm “H” là cú.",
        "“Căn nhà” là danh; “căn nhà trắng” là văn; âm “H” là cú.",
        "“Căn nhà” là danh; “căn nhà trắng” là cú; âm “H” là văn."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Căn nhà” là danh vì hiển thị tính chất của nghĩa qua tên gọi; “căn nhà trắng” là cú vì hiển thị thuộc tính đặc thù. Âm “H” đứng riêng là văn, thuộc thanh không hiển thị bất kỳ điều gì.",
      "hint": "Tách chức năng gọi tên, mô tả thuộc tính và âm đứng riêng không hiển thị điều gì.",
      "memory": "Danh gọi tên; cú hiển thị thuộc tính; văn đứng riêng không hiển thị điều gì.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_15",
      "text": "Xét bốn nhận định về thanh xứ: (1) thanh trung tính không gây thích cũng không gây ghét; (2) tay đập bàn minh họa thanh có nguồn gốc từ cả hai loại đại chủng; (3) giọng dễ nghe tự nó xác lập danh ngôn của bậc Thánh; (4) đã thấy nói thấy phù hợp danh ngôn của bậc Thánh. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (3).",
        "Chỉ (2), (3) và (4).",
        "Chỉ (1), (2) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhận định (1), (2) và (4) đúng: chúng lần lượt nói về thanh trung tính, nguồn gốc hỗn hợp của tiếng tay đập bàn và lời nói phù hợp điều đã thấy. Nhận định (3) sai vì dễ nghe thuộc trục thích ý, còn danh ngôn bậc Thánh được phân theo sự phù hợp giữa lời nói và điều đã cảm nghiệm.",
      "hint": "Kiểm tra xem âm điệu dễ nghe có phải tiêu chí của danh ngôn bậc Thánh hay không.",
      "memory": "Không dùng tiêu chí thích ý để thay thế tiêu chí chân thật của danh ngôn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_16",
      "text": "Theo sơ đồ của bài, tiếng hát hay do một người trực tiếp cất lên được phân loại thế nào?",
      "options": [
        "Thanh thích ý, thuộc hữu tình chấp thọ và có nguồn gốc từ đại chủng có chấp thọ.",
        "Thanh không thích ý, thuộc phi hữu tình chấp thọ nhưng vẫn mang nghĩa lý ngôn ngữ.",
        "Thanh thích ý, thuộc hữu tình không chấp thọ vì âm thanh tách khỏi cơ thể người hát.",
        "Thanh trung tính, thuộc phi hữu tình không chấp thọ vì người nghe chỉ tiếp nhận âm thanh."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tiếng hát hay tạo cảm giác dễ chịu nên là thanh thích ý; do người biểu hiện bằng âm thanh nên thuộc hữu tình. Khi người ấy trực tiếp cất tiếng từ thân mình, nguồn đại chủng thuộc chấp thọ.",
      "hint": "Xét lần lượt cảm giác người nghe, tính ngôn ngữ và nguồn phát từ thân người.",
      "memory": "Người trực tiếp hát hay: thích ý, hữu tình và có nguồn gốc từ đại chủng chấp thọ.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_17",
      "text": "So sánh tiếng người hát hay với tiếng chim đỗ quyên dễ nghe theo sơ đồ Câu-xá. Điểm phân biệt nào sát bài nhất?",
      "options": [
        "Tiếng người thuộc không chấp thọ và phi hữu tình vì âm thanh đã rời cơ thể, còn tiếng chim thuộc chấp thọ và hữu tình vì chim là một sinh vật có tình thức.",
        "Tiếng chim thuộc hữu tình vì do một loài có tình thức phát ra, còn tiếng người thuộc phi hữu tình.",
        "Cả hai đều là thanh trung tính vì âm thanh dễ nghe không thể được xem là thích ý.",
        "Cả hai có thể là thích ý và từ đại chủng chấp thọ; tiếng người thuộc hữu tình do ngôn ngữ, tiếng chim thuộc phi hữu tình."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cả tiếng người hát hay và tiếng chim đỗ quyên đều có thể tạo cảm giác thích ý và phát từ thân có chấp thọ. Theo sơ đồ, tiếng người biểu hiện bằng ngôn ngữ nên thuộc hữu tình, còn tiếng chim được xếp vào phi hữu tình trong trục này.",
      "hint": "Trong trục hữu tình-phi hữu tình của sơ đồ, hãy chú ý vai trò biểu hiện bằng ngôn ngữ.",
      "memory": "Trong sơ đồ thanh xứ, hữu tình-phi hữu tình được xét theo âm thanh ngôn ngữ hay không ngôn ngữ.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_18",
      "text": "Theo sơ đồ minh họa, một lời nói hay được phát lại trên ti vi được hiểu theo hai trục nguyên nhân và hữu tình thế nào?",
      "options": [
        "Nguồn chấp thọ và phi hữu tình, vì người nói có thân nhưng màn hình không có ý thức.",
        "Nguồn không chấp thọ và hữu tình, vì tiếng phát từ thiết bị nhưng vẫn biểu hiện ngôn ngữ.",
        "Nguồn chấp thọ và hữu tình, vì mọi lời nói đều phải được xếp theo người nói ban đầu.",
        "Nguồn không chấp thọ và phi hữu tình, vì âm thanh qua thiết bị không còn mang nội dung."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sơ đồ nêu lời nói hay phát trên ti vi như thanh thích ý thuộc hữu tình không chấp thọ. Thiết bị là nguồn phát không chấp thọ, nhưng âm thanh vẫn biểu hiện ngôn ngữ nên thuộc hữu tình trong trục hữu tình-phi hữu tình.",
      "hint": "Tách thiết bị đang phát tiếng khỏi nội dung ngôn ngữ được tiếng ấy biểu hiện.",
      "memory": "Tiếng nói qua ti vi có thể không chấp thọ về nguồn nhưng vẫn hữu tình về ngôn ngữ.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_19",
      "text": "Một người chưa thấy cái bình và nói “Tôi chưa thấy”; người khác cũng chưa thấy nhưng nói “Tôi đã thấy”. Cách phân loại nào đúng?",
      "options": [
        "Cả hai đều thuộc danh ngôn gán cho bậc Thánh sử dụng.",
        "Lời thứ nhất thuộc loại điên đảo; lời thứ hai thuộc loại phù hợp.",
        "Lời thứ nhất thuộc loại phù hợp; lời thứ hai thuộc loại điên đảo.",
        "Cả hai đều thuộc danh ngôn gán cho người không phải bậc Thánh sử dụng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Người thứ nhất nói đúng điều mình chưa thấy nên lời nói phù hợp với danh ngôn gán cho bậc Thánh sử dụng. Người thứ hai chưa thấy mà nói đã thấy là lời điên đảo, thuộc danh ngôn gán cho người không phải bậc Thánh sử dụng.",
      "hint": "Đối chiếu từng lời nói với điều người ấy thực sự đã hoặc chưa thấy.",
      "memory": "Lời phù hợp điều đã hoặc chưa cảm nghiệm thuộc danh ngôn của bậc Thánh; lời ngược lại là điên đảo.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_20",
      "text": "Trường hợp nào thuộc danh ngôn gán cho người không phải bậc Thánh sử dụng?",
      "options": [
        "Không thấy một sự vật nhưng lại nói rằng mình đã thấy sự vật ấy.",
        "Đã nghe một âm thanh rõ ràng và nói đúng rằng mình đã nghe được âm thanh ấy.",
        "Chưa chứng một điều và nói rằng mình chưa chứng điều đó.",
        "Không biết một nội dung và nói rằng mình không biết nội dung ấy."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Không thấy nhưng nói thấy là một cách nói điên đảo, được bài xếp vào danh ngôn gán cho người không phải bậc Thánh sử dụng. Ba trường hợp còn lại đều diễn đạt phù hợp với điều đã hoặc chưa được cảm nghiệm.",
      "hint": "Tìm trường hợp lời nói đảo ngược điều người nói thực sự đã hoặc chưa cảm nghiệm.",
      "memory": "Không thấy mà nói thấy là danh ngôn điên đảo của người không phải bậc Thánh.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_21",
      "text": "Một học viên nói: “Cái bình tự mang sẵn tên ‘cái bình’; con người chỉ lặp lại tên của nó.” Cách hiệu chỉnh nào đúng?",
      "options": [
        "Tên gọi và đối tượng hoàn toàn đồng nhất nên không cần phân biệt âm thanh dùng để gọi với chính sự vật được gọi tên.",
        "Cái bình tự đặt tên nhưng chỉ ý thức mới nghe được tên ấy ở bên trong sự vật.",
        "Tên gọi có trước sự vật và buộc sự vật phải xuất hiện theo đúng âm thanh đã có.",
        "Tên gọi do con người đặt để chỉ sự vật; bản thân sự vật không tự đặt hay tự nói tên mình."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nhấn mạnh tên gọi do con người đặt ra để chỉ một sự vật rồi cùng sử dụng trong nhận biết và giao tiếp. Bản thân cái bình, cái cột hay cơ thể không tự đặt và không tự nói tên của mình.",
      "hint": "Phân biệt hoạt động đặt tên của con người với bản thân đối tượng được gọi tên.",
      "memory": "Tên gọi do con người đặt; đối tượng được đặt tên không tự nói tên mình.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_22",
      "text": "Vì sao bài nói âm thanh không có chuỗi tương tục của đồng loại?",
      "options": [
        "Vì mọi âm thanh chỉ tồn tại trong ý thức, không cần hơi thở hay bộ phận phát âm.",
        "Vì mỗi âm phát sinh rồi chấm dứt; âm kế tiếp cần một vận động và nỗ lực mới.",
        "Vì âm đầu tồn tại bất biến nhưng bị âm sau che khuất nên người nghe không nhận ra.",
        "Vì toàn bộ câu nói phát sinh cùng lúc rồi được tai chia nhỏ thành các âm tiết riêng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Một âm thanh chấm dứt ngay sau khi phát sinh và không tự chuyển thành âm thanh kế tiếp. Để phát âm sau, hơi thở và các bộ phận như cổ họng, răng, lưỡi, môi phải thực hiện một vận động và nỗ lực mới.",
      "hint": "Xét điều phải xảy ra với hơi thở, cổ họng, răng, lưỡi và môi khi phát âm kế tiếp.",
      "memory": "Âm trước chấm dứt; âm sau cần một vận động mới để phát sinh.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_23",
      "text": "Một mùi thơm thoang thoảng và một mùi thơm rất nồng khác nhau theo tiêu chí nào trong phần hương xứ?",
      "options": [
        "Mùi nhẹ thuộc vị xứ, còn mùi nặng mới được xếp vào hương xứ.",
        "Mùi nhẹ là mùi tự nhiên, còn mùi nặng luôn là mùi chế tạo hoặc chuyển đổi.",
        "Mùi nhẹ được gọi là mùi bình, còn mùi nặng được gọi là mùi gắt.",
        "Mùi nhẹ thuộc mùi thơm, còn mùi nặng bắt buộc phải chuyển thành mùi thối."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Mùi bình là mức nhẹ, còn mùi gắt là mức nặng của mùi thơm hoặc mùi thối. Do đó, một mùi vẫn có thể là thơm nhưng được gọi là bình hay gắt tùy cường độ của nó.",
      "hint": "Hai thuật ngữ này phân biệt mức độ nhẹ và nặng, không đổi thơm thành thối.",
      "memory": "Mùi bình nhẹ, mùi gắt nặng; cả hai có thể áp dụng cho thơm hoặc thối.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_24",
      "text": "Xét bốn nhận định về các trục phân loại thanh: (1) âm thanh biểu hiện bằng ngôn ngữ thuộc hữu tình; (2) tiếng gió có nguồn gốc từ đại chủng không chấp thọ; (3) lời nói phát trên ti vi có thể không chấp thọ về nguồn nhưng vẫn thuộc hữu tình; (4) chỉ cần biết thanh thích ý là xác định được nguồn chấp thọ. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhận định (1), (2) và (3) phù hợp với bài và sơ đồ minh họa. Nhận định (4) sai vì thích ý chỉ nói về cảm giác của người nghe; từ đó không thể suy ra thanh có nguồn gốc từ đại chủng chấp thọ hay không chấp thọ.",
      "hint": "Kiểm tra xem cảm giác thích ý có cho biết chắc chắn nguyên nhân của âm thanh hay không.",
      "memory": "Nguồn phát, tính ngôn ngữ và cảm giác thích ý là các trục phân loại khác nhau.",
      "difficulty": "Khó"
    },
    {
      "id": "w9_25",
      "text": "Trường hợp nào minh họa rõ nhất cho thanh năng thuyên?",
      "options": [
        "Tiếng gió thổi qua hàng cây khiến người nghe chú ý.",
        "Lời “đây là cái bình” giúp người nghe biết nội dung.",
        "Tiếng nước chảy qua khe đá khiến người nghe thư giãn.",
        "Tiếng cửa va vào tường khiến người nghe giật mình."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Lời “đây là cái bình” biểu đạt một nội dung và giúp người nghe biết điều đang được nói nên là thanh năng thuyên. Các tiếng gió, nước và cửa va tuy đều có thể nghe được nhưng trong những ví dụ này không thực hiện chức năng biểu đạt ấy.",
      "hint": "Hãy tìm âm thanh có chức năng làm cho người nghe biết một nội dung được nói.",
      "memory": "Thanh năng thuyên là thanh làm cho người nghe biết nội dung được nói.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_26",
      "text": "Cách so sánh nào làm rõ đúng nhất sự khác nhau về hướng phân loại thanh giữa Câu-xá Luận và Tập Luận?",
      "options": [
        "Câu-xá chỉ xét âm thanh có nghĩa; Tập Luận chỉ xét tiếng động không mang nghĩa lý.",
        "Câu-xá chỉ xét cảm giác người nghe; Tập Luận bỏ hoàn toàn nguyên nhân phát sinh thanh.",
        "Hai hệ thống dùng hoàn toàn cùng một tiêu chí duy nhất để phân loại thanh, chỉ thay đổi tên gọi và cách sắp xếp thứ tự.",
        "Câu-xá kết hợp các trục chấp thọ, hữu tình và thích ý; Tập Luận còn xét thêm các phương diện khác."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Câu-xá Luận tổ chức thanh xứ bằng sự kết hợp các trục chấp thọ-không chấp thọ, hữu tình-phi hữu tình và thích ý-không thích ý. Tập Luận còn trình bày thanh trung tính, nguồn từ cả hai loại đại chủng, lối trình bày-nói năng và danh ngôn bậc Thánh-không phải bậc Thánh.",
      "hint": "So sánh tiêu chí tổ chức, không so sánh bằng số lượng các loại.",
      "memory": "Hai hệ thống khác nhau chủ yếu ở cách tổ chức và mở rộng các tiêu chí phân loại.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w9_27",
      "text": "Theo cách phân loại trong bài, cặp nào lần lượt minh họa thanh hữu tình và thanh phi hữu tình?",
      "options": [
        "Lời người nói có nghĩa; tiếng gió thổi qua hàng cây.",
        "Tiếng nước chảy qua khe đá; lời người nói có nội dung.",
        "Tiếng chim hót trong rừng; câu nói “đây là cái bình”.",
        "Tiếng cửa va vào tường; lời nói phát lại trên ti vi."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Lời người nói có nghĩa biểu hiện bằng ngôn ngữ nên thuộc thanh hữu tình trong cách phân loại này. Tiếng gió thổi qua hàng cây không biểu hiện bằng ngôn ngữ nên thuộc thanh phi hữu tình.",
      "hint": "Xét âm thanh nào biểu hiện bằng ngôn ngữ và âm thanh nào không biểu hiện bằng ngôn ngữ.",
      "memory": "Thanh hữu tình biểu hiện bằng ngôn ngữ; thanh phi hữu tình không biểu hiện bằng ngôn ngữ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w9_28",
      "text": "Xét bốn nhận định: (1) điều nhãn thức cảm nghiệm gọi là thấy; (2) điều nhĩ thức cảm nghiệm gọi là nghe; (3) điều ý thức cảm nghiệm gọi là biết; (4) đã biết mà nói không biết thuộc danh ngôn bậc Thánh. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (3) và (4).",
        "Chỉ (2) và (4).",
        "Chỉ (1), (2) và (3).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nhận định (1), (2) và (3) đúng với cách bài giải thích thấy, nghe và biết. Nhận định (4) sai vì đã biết mà nói không biết là lời điên đảo, thuộc danh ngôn gán cho người không phải bậc Thánh sử dụng.",
      "hint": "Kiểm tra nhận định cuối bằng tiêu chí lời nói có phù hợp điều đã biết hay không.",
      "memory": "Đã biết mà nói không biết là lời điên đảo, không phải danh ngôn của bậc Thánh.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w9_29",
      "text": "Ví dụ câu “khyed rang ga par zhugs gi yod” giúp bác bỏ cách hiểu nào về sự tiếp nối của âm thanh?",
      "options": [
        "Mỗi âm tiết cần hơi thở và các bộ phận phát âm phối hợp để được tạo ra.",
        "Âm “khyed” có thể tự kéo dài và chuyển thành các âm tiếp theo mà không cần vận động mới.",
        "Sau khi một âm chấm dứt, âm kế tiếp phải được tạo ra bằng một nỗ lực phát âm mới.",
        "Hơi thở, cổ họng, răng, lưỡi và môi đều có vai trò trong việc phát ra câu nói."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Âm “khyed” phát sinh rồi chấm dứt, không thể tự chuyển thành “rang”, “ga” hay các âm tiếp theo. Mỗi phần tiếp theo của câu cần một vận động mới của hơi thở và các bộ phận phát âm, nên âm thanh không có chuỗi tương tục của đồng loại.",
      "hint": "Xét xem âm đầu có thể tự biến thành phần còn lại của câu hay không.",
      "memory": "Âm đầu không tự biến thành âm sau; mỗi âm kế tiếp cần nguyên nhân phát âm mới.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w9_30",
      "text": "Kết luận nào tổng hợp đúng nhất mạch giải thích về thanh trong Tuần 9?",
      "options": [
        "Chỉ cần biết một âm thanh dễ nghe hay khó nghe là có thể xác định toàn bộ các loại của nó.",
        "Mọi âm thanh có nghĩa đều là danh ngôn bậc Thánh và có chuỗi tương tục của đồng loại.",
        "Tên gọi nằm sẵn trong sự vật, còn âm thanh chỉ làm tai phát hiện tên đã có từ trước.",
        "Thanh được xét theo nhiều tiêu chí; thanh năng thuyên chuyển tải nội dung, còn mỗi âm vẫn sinh rồi diệt riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài khảo sát thanh theo nhiều phương diện như cảm giác, nguyên nhân, lối nói và sự phù hợp của danh ngôn, nên một tiêu chí không thay thế được các tiêu chí khác. Thanh năng thuyên làm biết nội dung, nhưng từng âm phát sinh rồi chấm dứt và âm tiếp theo cần một vận động mới.",
      "hint": "Kết hợp ba điểm: nhiều tiêu chí phân loại, chức năng chuyển tải và sự chấm dứt của từng âm.",
      "memory": "Hiểu thanh phải tách tiêu chí phân loại, chức năng biểu đạt và tiến trình sinh-diệt của từng âm.",
      "difficulty": "Nâng cao"
    }
  ],
  "week10": [
    {
      "id": "w10_1",
      "text": "Theo định nghĩa trong bài, xúc xứ là gì?",
      "options": [
        "Đối tượng được mắt trực tiếp nhìn thấy dưới dạng màu sắc và hình dạng.",
        "Đối tượng được cảm nhận bởi thân thức, còn được gọi là xúc giác.",
        "Tịnh nội sắc làm chỗ nương tựa để năm thức nhận biết đối tượng.",
        "Loại sắc chỉ làm đối tượng cho ý thức và không phải là sở y."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Xúc xứ là đối tượng được cảm nhận bởi thân thức, còn gọi là xúc giác. Các tính chất như trơn, nhám, nặng, nhẹ, lạnh và nóng được nhận biết nhờ sự xúc chạm của thân, không phải nhờ mắt, tai, mũi hay lưỡi.",
      "hint": "Xác định thức nào trực tiếp nhận biết đối tượng khi thân xúc chạm.",
      "memory": "Xúc xứ là đối tượng của thân thức, tức đối tượng của xúc giác.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_2",
      "text": "Nhóm nào gồm đúng bốn đại chủng được nêu trong bài?",
      "options": [
        "Sắc, thanh, hương và vị.",
        "Trơn, nhám, nặng và nhẹ.",
        "Mắt, tai, mũi và lưỡi.",
        "Đất, nước, gió và lửa."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bốn đại chủng là đất, nước, gió và lửa. Trong phạm vi bài học, chúng được trình bày như các yếu tố kết hợp làm nhân tạo nên các sắc pháp thuộc đại chủng sở tạo.",
      "hint": "Nhớ bốn yếu tố căn bản được nhắc khi giải thích sự hình thành sắc pháp.",
      "memory": "Bốn đại chủng gồm đất, nước, gió và lửa.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_3",
      "text": "Trong phần xúc xứ, tính đói và tính khát được xếp vào nhóm nào?",
      "options": [
        "Thuộc xúc đại chủng sở tạo, tức những tính chất do đại chủng tạo thành.",
        "Thuộc bốn đại chủng, đồng hàng với đất, nước, gió và lửa.",
        "Thuộc nội sắc, vì đói và khát là hai căn làm chỗ nương cho thức.",
        "Thuộc sắc thuộc pháp xứ, vì chỉ ý thức mới có thể nhận biết đói và khát."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tính đói và tính khát được bài xếp vào xúc đại chủng sở tạo. Chúng không phải là đất, nước, gió, lửa mà là những tính chất thuộc phần xúc do đại chủng tạo thành.",
      "hint": "Phân biệt bốn yếu tố căn bản với những tính chất được các đại chủng tạo thành.",
      "memory": "Đói và khát thuộc xúc đại chủng sở tạo, không phải bốn đại chủng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_4",
      "text": "Âm thanh do tai nghe được xếp vào nhóm nào trong cách chia ngoại sắc và nội sắc?",
      "options": [
        "Nhĩ căn thuộc nội sắc, vì nhĩ căn làm chỗ nương tựa cho thức nhận biết âm thanh.",
        "Sắc thuộc pháp xứ, vì âm thanh chỉ có thể được ý thức nhận biết.",
        "Thanh xứ thuộc ngoại sắc, vì âm thanh là đối tượng được tai nhận biết.",
        "Thân căn thuộc nội sắc, vì mọi âm thanh đều phát sinh trực tiếp từ sự xúc chạm của thân."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Âm thanh là đối tượng được tai nhận biết nên thuộc thanh xứ, một loại ngoại sắc. Nhĩ căn mới thuộc nội sắc và làm chỗ nương tựa cho thức nhận biết âm thanh; không được đồng nhất nhĩ căn với âm thanh.",
      "hint": "Phân biệt đối tượng được nghe với căn làm chỗ nương cho thức nghe.",
      "memory": "Âm thanh thuộc thanh xứ và ngoại sắc; nhĩ căn thuộc nội sắc.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_5",
      "text": "Nội sắc được xác định là nhóm nào trong tài liệu?",
      "options": [
        "Năm thức nhận biết qua mắt, tai, mũi, lưỡi và thân.",
        "Năm căn gồm mắt, tai, mũi, lưỡi và thân được tâm thức nắm giữ.",
        "Năm ngoại sắc gồm sắc, thanh, hương, vị và xúc được nhận biết bên ngoài.",
        "Năm sắc vi tế chỉ hiện khởi trong ý thức và không làm sở y cho nhận thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nội sắc trong bài chỉ năm căn: mắt, tai, mũi, lưỡi và thân. Các căn là sắc bên trong được tâm thức nắm giữ và làm cơ sở để thức tiếp nhận đối tượng; nội sắc không phải là năm thức.",
      "hint": "Phân biệt cơ sở làm chỗ nương tựa với chính các thức sinh khởi nhờ cơ sở ấy.",
      "memory": "Nội sắc là năm căn, không phải năm thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_6",
      "text": "Định nghĩa nào đúng với sắc thuộc pháp xứ?",
      "options": [
        "Có khả năng là sắc mà năm căn đều trực tiếp nhận biết và dùng làm đối tượng trong mọi trường hợp.",
        "Là tịnh nội sắc trong suốt, làm sở y để các căn thức nhận biết đối tượng bên ngoài.",
        "Là sắc thô có màu sắc, hình dạng, bị cản trở và chiếm một vị trí nhất định.",
        "Có khả năng là sắc mà chỉ ý thức nhận biết, không phải là sở y cho giới của căn."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc thuộc pháp xứ là sắc chỉ được ý thức nhận biết và không phải là sở y cho giới của căn. Vì vậy, nó không phải giác quan, không phải căn và cũng không thuộc nội sắc.",
      "hint": "Đối chiếu hai tiêu chí: thức nhận biết và việc pháp ấy có làm sở y hay không.",
      "memory": "Sắc thuộc pháp xứ là đối tượng của ý thức và không phải sở y của căn.",
      "difficulty": "Dễ"
    },
    {
      "id": "w10_7",
      "text": "Cách phân biệt nào đúng giữa nhân xúc đại chủng và quả xúc đại chủng sở tạo?",
      "options": [
        "Nhân xúc đại chủng có nguồn gốc từ đại chủng; quả xúc đại chủng sở tạo do các đại chủng tạo thành.",
        "Nhân xúc đại chủng là năm căn bên trong; quả xúc đại chủng sở tạo là năm thức nhận biết bên ngoài.",
        "Nhân xúc đại chủng chỉ là đối tượng của ý thức; quả xúc đại chủng sở tạo chỉ là đối tượng của nhãn thức.",
        "Nhân xúc đại chủng gồm bảy loại sở tạo; quả xúc đại chủng sở tạo chỉ gồm bốn đại chủng căn bản."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhân xúc đại chủng là xúc có nguồn gốc từ các đại chủng, còn quả xúc đại chủng sở tạo là xúc do các đại chủng tạo thành. Điểm phân biệt nằm ở vai trò nhân và quả, không nằm ở sự đối lập giữa căn với thức.",
      "hint": "Theo dõi quan hệ nguồn gốc và kết quả trong hai tên gọi.",
      "memory": "Nhân xúc có nguồn gốc từ đại chủng; quả xúc là phần do đại chủng tạo thành.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_8",
      "text": "Một đại chủng thô được phân tích dần đến mức cực vi, năm giác quan không thể cảm nhận và chỉ ý thức nhận biết. Theo Tập Luận, trường hợp này thuộc loại nào?",
      "options": [
        "Đại chủng làm nhân của đại chủng sở tạo, vì đối tượng vẫn là vật thô có thể xúc chạm.",
        "Y đối tượng duyên đại chủng mà hiển thị đại chủng sở tạo, vì nó chỉ tồn tại trong định.",
        "Danh ngôn biên tế đại chủng làm nhân của đại chủng sở tạo.",
        "Tịnh sắc căn, vì nó làm tăng thượng duyên bất cộng cho một căn thức sinh khởi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đây là danh ngôn biên tế đại chủng làm nhân của đại chủng sở tạo. Đại chủng thô được phân tích dần đến mức cực vi nên không còn được năm giác quan cảm nhận, nhưng vẫn thuộc sắc pháp và là đối tượng của ý thức.",
      "hint": "Chú ý hai dấu hiệu: được phân tích từ đại chủng thô và đạt đến mức cực vi.",
      "memory": "Đại chủng thô được phân tích đến cực vi thuộc danh ngôn biên tế đại chủng làm nhân.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_9",
      "text": "Cách ghép nào đúng giữa tính nhám, tính trơn và các đại chủng chiếm ưu thế?",
      "options": [
        "Nhám do nước và lửa chiếm ưu thế; trơn do đất và gió chiếm ưu thế.",
        "Nhám chỉ do đất chiếm ưu thế; trơn chỉ do nước chiếm ưu thế.",
        "Nhám do sắc và hương chiếm ưu thế; trơn do vị và xúc chiếm ưu thế.",
        "Nhám do đất và gió chiếm ưu thế; trơn do nước và lửa chiếm ưu thế."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tính nhám hay thô cứng xuất hiện khi chức năng của đất và gió chiếm ưu thế. Tính trơn hay mềm dịu xuất hiện khi nước và lửa chiếm ưu thế, còn đất và gió ít hơn.",
      "hint": "Liên hệ độ thô cứng với đất–gió và độ mềm dịu với nước–lửa.",
      "memory": "Nhám: đất–gió; trơn: nước–lửa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_10",
      "text": "Vì sao cách trình bày xúc đại chủng sở tạo của Câu-xá Luận và Tập Luận không mâu thuẫn với nhau?",
      "options": [
        "Vì hai bộ luận dùng hoàn toàn cùng một danh sách, cùng tên gọi và cùng mức độ phân tích.",
        "Vì Tập Luận phân tích rộng và chi tiết, còn Câu-xá Luận gom lại, nhưng nội dung vẫn bao hàm lẫn nhau.",
        "Vì Câu-xá Luận chỉ nói đại chủng, còn Tập Luận chỉ nói nội sắc và không cùng khảo sát xúc xứ.",
        "Vì mỗi bộ luận trình bày một loại đối tượng khác nhau nên không thể đặt hai cách phân loại cạnh nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tập Luận phân tích xúc đại chủng sở tạo rộng và chi tiết hơn, còn Câu-xá Luận gom lại và trình bày tóm gọn. Hai cách khác nhau về mức độ phân tích nhưng các nội dung vẫn bao hàm lẫn nhau, nên không loại trừ nhau.",
      "hint": "So sánh mức độ phân tích rộng với cách trình bày tóm gọn.",
      "memory": "Phân tích rộng và trình bày tóm gọn có thể khác nhau mà không mâu thuẫn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_11",
      "text": "Ví dụ làm bánh Momo được dùng để minh họa điều gì về sự hình thành sắc pháp?",
      "options": [
        "Một sắc pháp chỉ cần yếu tố lửa, giống như bánh Momo chỉ cần được làm chín.",
        "Mỗi yếu tố có thể tự hình thành một sắc pháp hoàn chỉnh mà không cần kết hợp với yếu tố khác.",
        "Sắc pháp hình thành nhờ các yếu tố cần thiết phối hợp, tương tự các nguyên liệu làm bánh Momo.",
        "Hình dạng của sắc pháp do ý thức tạo ra, giống như người làm bánh tưởng tượng hình dạng của bánh."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Làm bánh Momo cần bột, nước, khoai tây, muối, lửa và những yếu tố khác phối hợp với nhau. Tương tự, sắc pháp hình thành từ sự kết hợp của các yếu tố và chất liệu cần thiết, chứ không do một yếu tố riêng lẻ tự tạo thành.",
      "hint": "Hãy xét vì sao bột, nước, khoai tây, muối và lửa đều cần được phối hợp.",
      "memory": "Ví dụ Momo làm rõ nguyên tắc sắc pháp hình thành nhờ các yếu tố cần thiết kết hợp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_12",
      "text": "Vì sao sắc, thanh, hương và vị không được gọi là xúc đại chủng, dù chúng cũng liên hệ với đất, nước, gió và lửa?",
      "options": [
        "Vì chúng là đối tượng của các căn tương ứng; xúc đại chủng được thân thức cảm nhận qua xúc chạm.",
        "Vì chúng không do đại chủng làm nhân, còn xúc đại chủng hoàn toàn không liên hệ với đất, nước, gió và lửa.",
        "Vì chúng chỉ là đối tượng của ý thức, còn xúc đại chủng được cả năm căn nhận biết đồng thời.",
        "Vì chúng thuộc nội sắc làm sở y cho thức, còn xúc đại chủng thuộc sắc thuộc pháp xứ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sắc, thanh, hương và vị lần lượt là đối tượng của mắt, tai, mũi và lưỡi. Xúc đại chủng được nói trong phạm vi xúc xứ, là phần có nguồn gốc từ đại chủng và được thân thức cảm nhận qua sự xúc chạm.",
      "hint": "Xác định căn thức trực tiếp nhận biết từng nhóm đối tượng.",
      "memory": "Xúc đại chủng thuộc đối tượng của thân thức, không đồng nhất với sắc, thanh, hương và vị.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_13",
      "text": "Ý nghĩa đầy đủ nhất của từ “căn” trong bài là gì?",
      "options": [
        "Một cơ quan vật chất thô có thể cắt, cân và chia thành từng phần.",
        "Một loại ý thức trực tiếp nhận biết đối tượng mà không cần nơi nương tựa.",
        "Một đối tượng bên ngoài có màu sắc hoặc hình dạng được các thức cùng nhận biết.",
        "Cơ sở làm phát sinh nhận thức, như môi giới và chỗ nương tựa cho thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trong bài, căn không chỉ có nghĩa là giác quan mà còn là cơ sở làm phát sinh nhận thức. Căn đóng vai trò như môi giới và chỗ nương tựa để thức nhận biết đối tượng.",
      "hint": "Từ “giác quan” chưa diễn đạt hết vai trò làm cơ sở và chỗ nương của căn.",
      "memory": "Căn là cơ sở và chỗ nương tựa cho thức nhận biết đối tượng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_14",
      "text": "Mô tả nào phù hợp nhất với tịnh sắc căn?",
      "options": [
        "Là vật chất thô có thể cắt thành từng đoạn, chia thành từng khúc và cân bằng dụng cụ thông thường.",
        "Là tịnh nội sắc trong suốt, không như vật chất thường và làm tăng thượng duyên cho nhận thức.",
        "Là đối tượng của ý thức, không phải căn và không làm sở y cho bất kỳ thức nào.",
        "Là năm loại ngoại sắc gồm sắc, thanh, hương, vị và xúc ở bên ngoài cơ thể."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tịnh nội sắc được gọi là tịnh sắc căn, trong đó “tịnh” có nghĩa là trong suốt. Tịnh sắc căn không thể cắt hay cân như vật chất thông thường và có chức năng làm tăng thượng duyên cho nhận thức sinh khởi.",
      "hint": "Kết hợp ý nghĩa “tịnh” với chức năng làm điều kiện cho nhận thức sinh khởi.",
      "memory": "Tịnh sắc căn trong suốt, rất vi tế và làm tăng thượng duyên cho nhận thức.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_15",
      "text": "Ghép ba hình dạng sau với căn tương ứng: (i) hoa thìa là; (ii) chiếc thìa kim loại nhỏ; (iii) lớp da trải khắp cơ thể. Chuỗi nào đúng?",
      "options": [
        "(i) Tai căn; (ii) Lưỡi căn; (iii) Mắt căn.",
        "(i) Mũi căn; (ii) Mắt căn; (iii) Tai căn.",
        "(i) Mắt căn; (ii) Mũi căn; (iii) Thân căn.",
        "(i) Lưỡi căn; (ii) Tai căn; (iii) Thân căn."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cực vi của mắt căn được ví như hoa thìa là, cực vi của mũi căn giống chiếc thìa kim loại nhỏ, và cực vi của thân căn tựa một lớp da trải khắp cơ thể. Các hình ảnh này mô tả hình dạng của những căn rất vi tế.",
      "hint": "Hoa thìa là nằm ở đồng tử; chiếc thìa nhỏ được liên hệ với xoang mũi.",
      "memory": "Mắt–hoa thìa là; mũi–thìa kim loại nhỏ; thân–lớp da khắp cơ thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_16",
      "text": "Một học viên nói: “Nội sắc chính là năm thức nhận biết thế giới bên ngoài.” Cách hiệu chỉnh nào sát bài nhất?",
      "options": [
        "Nội sắc là năm căn được tâm thức nắm giữ và làm cơ sở cho năm thức; không phải chính năm thức.",
        "Nội sắc là năm ngoại sắc được năm thức nhận biết nên hoàn toàn đồng bản chất với tâm thức.",
        "Nội sắc chỉ là các hình ảnh do ý thức tạo ra, không liên quan đến căn hay sự nhận biết đối tượng bên ngoài.",
        "Nội sắc là sắc thuộc pháp xứ vì cả hai đều không phải là sở y và không thuộc về giác quan."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhận định của học viên đã đồng nhất căn với thức. Nội sắc là năm căn được tâm thức nắm giữ, không đồng bản chất với tâm thức nhưng làm cơ sở để các thức tiếp nhận đối tượng bên ngoài.",
      "hint": "Phân biệt nơi nương của nhận thức với chính nhận thức sinh khởi nhờ nơi nương ấy.",
      "memory": "Năm căn là nội sắc và là cơ sở cho năm thức; căn không phải thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_17",
      "text": "Ví dụ nhãn căn như một tấm gương trong suốt chủ yếu làm rõ điều gì?",
      "options": [
        "Nhãn căn là sắc thuộc pháp xứ vì chỉ ý thức mới thấy hình phản chiếu trong gương.",
        "Nhãn căn là hình sắc bên ngoài mà mọi giác quan đều có thể đồng thời cảm nhận trực tiếp.",
        "Nhãn căn làm sở y và tăng thượng duyên để nhãn thức nhận biết hình sắc bên ngoài.",
        "Nhãn căn là vật chất thô có thể chia nhỏ, cân nặng và chiếm chỗ như một tấm gương thật."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Ví dụ tấm gương trong suốt nhấn mạnh vai trò sở y của nhãn căn đối với nhãn thức. Nhờ nhãn căn làm tăng thượng duyên, nhãn thức mới nhận biết hình dạng, màu sắc, cái bình, cái cột và những hình sắc bên ngoài khác.",
      "hint": "Tấm gương là hình ảnh minh họa cho nơi hình ảnh nương vào để hiện rõ.",
      "memory": "Nhãn căn là sở y và tăng thượng duyên cho nhãn thức nhận biết hình sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_18",
      "text": "Một loại sắc cực kỳ vi tế chỉ tồn tại trong trạng thái định, như sắc biến xứ. Theo Tập Luận, trường hợp này được phân loại thế nào?",
      "options": [
        "Danh ngôn biên tế đại chủng làm nhân, vì đại chủng thô được phân tích đến mức cực vi.",
        "Y đối tượng duyên đại chủng mà hiển thị đại chủng sở tạo, vì chỉ tồn tại trong định.",
        "Đại chủng làm nhân của đại chủng sở tạo, vì bốn đại chủng trực tiếp kết hợp tạo thành vật thô.",
        "Tịnh sắc căn, vì loại sắc này làm chỗ nương cho một căn thức nhận biết đối tượng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sắc cực kỳ vi tế chỉ tồn tại trong trạng thái định, như sắc biến xứ, thuộc y đối tượng duyên đại chủng mà hiển thị đại chủng sở tạo. Trường hợp này khác với danh ngôn biên tế đại chủng, vốn được nói từ việc phân tích đại chủng thô đến mức cực vi.",
      "hint": "Dấu hiệu quyết định là loại sắc này chỉ tồn tại trong trạng thái định.",
      "memory": "Sắc cực kỳ vi tế chỉ tồn tại trong định thuộc y đối tượng duyên đại chủng mà hiển thị.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_19",
      "text": "Một học viên nói: “Cực vi của mắt căn được mô tả có hình hoa thìa là, nên chắc chắn mắt căn thuộc ngoại sắc.” Điểm nào cần sửa trong kết luận này?",
      "options": [
        "Kết luận đúng; chỉ cần một pháp có hình dạng thì pháp ấy nhất định thuộc sắc xứ và không thể là nội sắc.",
        "Kết luận đúng; vì mọi tịnh sắc căn đều là đối tượng bên ngoài do cả năm căn cùng trực tiếp nhận biết.",
        "Kết luận chưa đúng vì căn hoàn toàn không được mô tả có hình dạng; hình hoa thìa là chỉ nói về nhãn thức.",
        "Kết luận quá sớm; bài còn xét chức năng của căn làm chỗ nương cho tâm thức và chưa kết luận vấn đề này."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Việc các căn được mô tả có hình dạng làm phát sinh nghi vấn chúng có thuộc sắc xứ hay không. Tuy nhiên, các căn đồng thời làm chỗ nương cho tâm thức và được trình bày là nội sắc, nên tài liệu chưa kết luận dứt khoát mà yêu cầu tiếp tục tìm hiểu và tranh luận.",
      "hint": "Đừng chỉ xét hình dạng; hãy xét thêm chức năng làm chỗ nương cho tâm thức.",
      "memory": "Hình dạng làm phát sinh nghi vấn, chưa đủ để kết luận căn là ngoại sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_20",
      "text": "Điểm phân biệt cốt lõi nào đúng giữa năm căn và sắc thuộc pháp xứ?",
      "options": [
        "Năm căn là nội sắc và làm sở y cho thức; sắc thuộc pháp xứ chỉ là đối tượng của ý thức, không phải sở y.",
        "Năm căn và sắc thuộc pháp xứ đều là ngoại sắc, đều được năm giác quan nhận biết và đều không làm sở y cho thức.",
        "Năm căn chỉ là đối tượng của ý thức; sắc thuộc pháp xứ làm tăng thượng duyên bất cộng cho năm thức.",
        "Năm căn không thuộc sắc pháp; sắc thuộc pháp xứ là vật chất thô có thể cắt và cân nặng được."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Năm căn thuộc nội sắc và làm sở y để các thức nhận biết đối tượng. Sắc thuộc pháp xứ chỉ làm đối tượng cho ý thức, không phải giác quan, không phải căn và không làm sở y cho giới của căn.",
      "hint": "So sánh chức năng làm nơi nương với chức năng chỉ làm đối tượng được nhận biết.",
      "memory": "Căn là sở y; sắc thuộc pháp xứ chỉ là đối tượng của ý thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_21",
      "text": "Tài liệu phân biệt cách trình bày sắc thuộc pháp xứ của Tập Luận và Câu-xá Luận như thế nào?",
      "options": [
        "Tập Luận chỉ nêu vô biểu sắc; Câu-xá Luận trình bày đầy đủ năm loại sắc thuộc pháp xứ.",
        "Hai bộ luận đều trình bày năm loại giống hệt nhau và đều đặt vô biểu sắc ngoài sắc pháp.",
        "Tập Luận trình bày năm loại; Câu-xá Luận không trình bày năm loại mà chỉ đề cập vô biểu sắc.",
        "Cả hai bộ luận chỉ nói biểu sắc có thể thấy, không đề cập sắc chỉ làm đối tượng của ý thức hay bất kỳ loại sắc vi tế nào khác."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đại thừa A-tỳ-đạt-ma Tập Luận trình bày năm loại: cực lược sắc, cực quýnh sắc, thọ sở dẫn sắc, biến kế sở khởi sắc và định tự tại sở sinh sắc. A-tỳ-đạt-ma Câu-xá Luận không trình bày năm loại theo cách ấy mà chỉ đề cập vô biểu sắc trong mối liên hệ với biệt giải thoát giới.",
      "hint": "Một hệ thống có danh sách năm loại; hệ thống kia tập trung vào loại liên hệ với giới.",
      "memory": "Tập Luận nêu năm loại; Câu-xá Luận chỉ đề cập vô biểu sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_22",
      "text": "Cách phân biệt nào đúng giữa biểu sắc và vô biểu sắc theo bài?",
      "options": [
        "Biểu sắc chỉ do ý thức nhận biết; vô biểu sắc luôn hiện rõ qua hình dạng và sắc màu bên ngoài.",
        "Biểu sắc có thể biểu hiện và thấy được; vô biểu sắc không hiện hình sắc bên ngoài nhưng vẫn có chức năng của sắc.",
        "Biểu sắc thuộc nội sắc làm sở y; vô biểu sắc là năm ngoại sắc của mắt, tai, mũi, lưỡi và thân.",
        "Biểu sắc không có chức năng của sắc; vô biểu sắc là vật chất thô có thể cắt, cân, chia từng phần và chiếm một vị trí."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Biểu sắc là những gì có thể biểu hiện ra bên ngoài và có thể thấy được, như trạng thái vui, buồn hay tức giận hiện trên gương mặt. Vô biểu sắc không biểu hiện hình sắc ra bên ngoài nhưng vẫn thực hiện chức năng của sắc.",
      "hint": "Đối chiếu khả năng biểu hiện ra bên ngoài với việc vẫn thực hiện chức năng của sắc.",
      "memory": "Biểu sắc hiện ra bên ngoài; vô biểu sắc không hiện ra nhưng vẫn có chức năng của sắc.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_23",
      "text": "Ví dụ tay chạm vật bị ngăn lại và đập nước ngăn dòng chảy được dùng để làm rõ chức năng nào?",
      "options": [
        "Chức năng làm cho tịnh sắc căn có thể cắt thành từng phần như vật chất thông thường.",
        "Chức năng khiến mọi trạng thái tâm đều biểu hiện thành màu sắc và hình dạng bên ngoài.",
        "Chức năng biến năm căn thành năm thức để trực tiếp tiếp nhận mọi loại đối tượng bên ngoài.",
        "Chức năng phòng hộ và ngăn chặn của vô biểu sắc khi liên hệ với giới."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hai ví dụ làm rõ chức năng ngăn chặn và phòng hộ của vô biểu sắc trong mối liên hệ với giới. Khi đắc giới, vô biểu sắc được giải thích là có chức năng ngăn không cho phạm giới, giống như vật cản hoặc đập nước.",
      "hint": "Hai ví dụ đều nhấn mạnh một ranh giới ngăn không cho sự vượt qua hoặc xâm lấn.",
      "memory": "Vô biểu sắc của giới có chức năng phòng hộ và ngăn chặn.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_24",
      "text": "Cách trình bày nào phản ánh đúng mạch giải thích về tính chết trong bài?",
      "options": [
        "Sinh mạng được nắm giữ bởi khí và hơi ấm; khi thân không còn giữ được thức thì thức và thân phân ly, còn đất hòa tan làm cảm giác sợ hãi xuất hiện.",
        "Tính chết là một xúc chạm thông thường của da; khi nước hòa tan thì nhãn thức rời khỏi sắc xứ và chuyển thành thân thức.",
        "Tính chết chỉ là trạng thái của ý thức, không liên quan đến sinh mạng, bốn đại chủng hay sự suy giảm năng lực của thân.",
        "Sinh mạng được giữ bởi hình dạng và màu sắc; khi thân yếu đi thì năm căn biến thành năm thức, tiếp tục tồn tại độc lập và không phụ thuộc khí hay hơi ấm."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nêu sinh mạng được nắm giữ bởi khí và hơi ấm; khi thân không còn giữ được thức thì thức và thân phân ly, dẫn tới cái chết. Trong trạng thái sắp chết, thân suy giảm và khó chịu; khi đất bắt đầu hòa tan, cảm giác sợ hãi xuất hiện như một ngọn núi đổ xuống.",
      "hint": "Theo dõi ba mắt xích: khí và hơi ấm, khả năng giữ thức của thân, và cảm giác khi đất bắt đầu hòa tan.",
      "memory": "Tính chết gắn với khí, hơi ấm, sự phân ly thức–thân và quá trình đại chủng hòa tan.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_25",
      "text": "Một người đang ốm yếu, tay không thể cầm chặt vật mà bị nới lỏng ra. Theo bài, trạng thái này thuộc tính nào?",
      "options": [
        "Tính rùng mình, vì trạng thái ấy phát sinh khi có cảm giác sợ hãi.",
        "Tính yếu ớt, vì cơ thể suy yếu làm tay không thể giữ chặt vật.",
        "Tính bất tỉnh, vì tâm và tâm sở thô thiển đã ngưng hoạt động.",
        "Tính chết, vì thức và thân đã hoàn toàn phân ly khỏi nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài mô tả tính yếu ớt là trạng thái tay không thể cầm chặt vật mà bị nới lỏng ra khi cơ thể ốm yếu. Tính bất tỉnh liên hệ với việc tâm và tâm sở thô thiển ngưng hoạt động, còn tính rùng mình được nêu trong trạng thái sợ hãi.",
      "hint": "Chú ý biểu hiện cụ thể ở bàn tay khi cơ thể không còn đủ sức.",
      "memory": "Tay không thể giữ chặt vật khi cơ thể ốm yếu là biểu hiện của tính yếu ớt.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w10_26",
      "text": "Khi một người nhìn cái bình, cách phân tích nào đúng về nhãn căn, nhãn thức và hình sắc của cái bình?",
      "options": [
        "Nhãn căn là chủ thể nhận biết; nhãn thức là ngoại sắc được nhận biết; cái bình là sở y của nhãn thức.",
        "Nhãn căn là hình sắc bên ngoài; nhãn thức là nội sắc làm chỗ nương; cái bình là sắc thuộc pháp xứ.",
        "Nhãn căn và nhãn thức đều là nội sắc; cái bình chỉ là đối tượng của ý thức, không phải ngoại sắc.",
        "Nhãn căn là nội sắc và sở y; nhãn thức là nhận thức; hình sắc của cái bình là đối tượng bên ngoài."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nhãn căn thuộc nội sắc, làm sở y và tăng thượng duyên để nhãn thức sinh khởi. Nhãn thức là nhận thức trực tiếp biết hình sắc, còn hình dạng và màu sắc của cái bình là đối tượng bên ngoài được nhãn thức nhận biết.",
      "hint": "Phân biệt nơi nương, nhận thức sinh khởi và đối tượng được nhận thức.",
      "memory": "Nhãn căn là sở y; nhãn thức là nhận thức; hình sắc là đối tượng bên ngoài.",
      "difficulty": "Khó"
    },
    {
      "id": "w10_27",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với cách tài liệu trình bày tranh luận về giới thể?",
      "options": [
        "Vô biểu sắc được trình bày trong mối liên hệ với biệt giải thoát giới.",
        "Có quan điểm cho rằng giới là vô biểu sắc và cũng có quan điểm cho rằng giới là biểu sắc.",
        "Bài kết luận mọi quan điểm đều nhất trí giới thể chỉ là biểu sắc có thể thấy trên gương mặt.",
        "Vô biểu sắc không hiện hình sắc bên ngoài nhưng được giải thích là có chức năng ngăn phạm giới."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không phù hợp vì tài liệu ghi nhận có tranh luận: một số quan điểm cho giới là vô biểu sắc, một số cho là biểu sắc. Bài không kết luận rằng mọi quan điểm đều thống nhất giới thể chỉ là biểu sắc có thể thấy bên ngoài.",
      "hint": "Phân biệt việc tài liệu ghi nhận nhiều quan điểm với việc khẳng định tất cả đều đã thống nhất.",
      "memory": "Tài liệu ghi nhận tranh luận về giới thể, không biến một quan điểm thành đồng thuận chung.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w10_28",
      "text": "Phân loại ba nhóm sau: (i) sắc, thanh, hương, vị, xúc; (ii) mắt, tai, mũi, lưỡi, thân; (iii) sắc chỉ ý thức nhận biết và không làm sở y. Chuỗi nào đúng?",
      "options": [
        "(i) Ngoại sắc; (ii) Nội sắc; (iii) Sắc thuộc pháp xứ.",
        "(i) Nội sắc; (ii) Sắc thuộc pháp xứ; (iii) Ngoại sắc.",
        "(i) Sắc thuộc pháp xứ; (ii) Ngoại sắc; (iii) Nội sắc.",
        "(i) Năm thức; (ii) Năm ngoại sắc; (iii) Tịnh sắc căn."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sắc, thanh, hương, vị và xúc xứ thuộc ngoại sắc; mắt, tai, mũi, lưỡi và thân thuộc nội sắc. Sắc chỉ ý thức nhận biết và không làm sở y được xác định là sắc thuộc pháp xứ.",
      "hint": "Một nhóm là năm ngoại sắc, một nhóm là năm căn, nhóm còn lại chỉ là đối tượng của ý thức.",
      "memory": "Ngoại sắc là năm xứ; nội sắc là năm căn; pháp xứ chỉ là đối tượng của ý thức.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w10_29",
      "text": "Vì sao không thể chỉ dựa vào tiêu chí “chỉ ý thức nhận biết” để xác định một pháp là sắc thuộc pháp xứ?",
      "options": [
        "Vì mọi đối tượng của ý thức đều được xếp là sắc thuộc pháp xứ, bất kể chức năng làm sở y.",
        "Vì chỉ cần một sắc rất vi tế và không được năm giác quan trực tiếp nhận biết là đủ.",
        "Vì sắc thuộc pháp xứ phải đồng thời là đối tượng trực tiếp của cả năm căn thức.",
        "Vì định nghĩa còn đòi hỏi pháp ấy không phải là sở y cho giới của căn."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc thuộc pháp xứ không chỉ là sắc mà ý thức nhận biết; định nghĩa còn xác định nó không phải là sở y cho giới của căn. Vì vậy, chỉ dựa vào tính vi tế hoặc việc năm giác quan không trực tiếp cảm nhận vẫn chưa đủ để kết luận.",
      "hint": "Đọc đủ hai phần của định nghĩa: thức nào nhận biết và pháp ấy có làm sở y hay không.",
      "memory": "Sắc thuộc pháp xứ phải vừa chỉ là đối tượng của ý thức, vừa không phải sở y.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w10_30",
      "text": "Một người cho rằng: “Giới không biểu hiện thành hình sắc bên ngoài nên không thể thuộc sắc.” Cách giải thích nào phù hợp nhất với phần vô biểu sắc?",
      "options": [
        "Nhận định đúng; pháp không biểu hiện màu sắc hay hình dạng ra ngoài thì không thể có chức năng của sắc.",
        "Nhận định chưa đúng; vô biểu sắc không hiện ra ngoài nhưng vẫn phòng hộ, ngăn không cho phạm giới.",
        "Nhận định đúng; giới chỉ là danh ngôn của ý thức nên không liên hệ đến biểu sắc hoặc vô biểu sắc.",
        "Nhận định chưa đúng; vì mọi giới thể đều là biểu sắc và luôn được nhận biết qua nét mặt của người thọ giới."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Vô biểu sắc không biểu hiện hình sắc ra bên ngoài nhưng vẫn có chức năng của sắc. Trong mối liên hệ với giới, chức năng ấy là phòng hộ và ngăn không cho phạm giới, được minh họa bằng vật cản hoặc đập nước ngăn sự vượt qua.",
      "hint": "Phân biệt khả năng biểu hiện ra bên ngoài với việc vẫn thực hiện chức năng của sắc.",
      "memory": "Không hiện ra bên ngoài không có nghĩa là không có chức năng của sắc.",
      "difficulty": "Nâng cao"
    }
  ],
  "week11": [
    {
      "id": "w11_1",
      "text": "Theo bài học, sắc pháp được chia thành ba nhóm nào?",
      "options": [
        "Sắc thô, sắc vi tế và sắc cực vi tế.",
        "Ngoại sắc, nội sắc và sắc thuộc pháp xứ.",
        "Sắc pháp, tâm pháp và bất tương ưng hành pháp.",
        "Pháp thường hằng, pháp vô thường và pháp vô vi."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tài liệu chia sắc pháp thành ngoại sắc, nội sắc và sắc thuộc pháp xứ. Sắc thô, sắc vi tế và sắc cực vi tế là cách nói về mức độ của sắc, còn sắc pháp, tâm pháp và bất tương ưng hành pháp là ba nhóm của pháp hữu vi.",
      "hint": "Nhớ cách phân chia được nêu ở đầu phần đặc điểm của sắc thuộc pháp xứ.",
      "memory": "Sắc pháp gồm ngoại sắc, nội sắc và sắc thuộc pháp xứ.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_2",
      "text": "Định nghĩa nào đúng với sắc thuộc pháp xứ trong tài liệu?",
      "options": [
        "Có khả năng là sắc mà các căn thức đều trực tiếp nhận biết và dùng làm sở y cho giới của căn.",
        "Là sắc thô bị cản trở, chiếm không gian và chỉ được nhãn thức trực tiếp nhận biết.",
        "Là hình ảnh do tâm phân biệt tưởng tượng, chỉ hiện lên trong tư duy khái niệm.",
        "Có khả năng là sắc mà chỉ ý thức nhận biết, không phải là sở y cho giới của căn."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc thuộc pháp xứ là sắc mà chỉ ý thức nhận biết và không phải là sở y cho giới của căn. Vì vậy, nó không phải là đối tượng trực tiếp của các căn thức, dù vẫn thuộc về sắc pháp.",
      "hint": "Xác định thức nào nhận biết và xem sắc ấy có làm sở y cho giới của căn hay không.",
      "memory": "Sắc thuộc pháp xứ chỉ là đối tượng của ý thức, không phải của căn thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_3",
      "text": "Ba đặc điểm nào được tài liệu dùng để mô tả sắc thô?",
      "options": [
        "Là đối tượng của mắt, có tính chất bị cản trở và chiếm một không gian.",
        "Chỉ là đối tượng của ý thức, không bị cản trở và không chiếm không gian.",
        "Không thể thấy bằng mắt nhưng có thể làm sở y cho giới của tất cả các căn.",
        "Thuộc tâm phân biệt, không phải pháp hữu vi và không thực hiện chức năng của sắc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sắc thô là đối tượng của mắt, có tính chất bị cản trở và chiếm một không gian. Khi một vật đã chiếm khoảng không gian ấy thì vật khác không thể đồng thời chiếm chính vị trí đó.",
      "hint": "Đối chiếu ba tiêu chí: khả năng nhìn thấy, tính cản trở và không gian bị chiếm.",
      "memory": "Sắc thô: mắt thấy, bị cản trở và chiếm không gian.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_4",
      "text": "Theo Đại thừa A-tỳ-đạt-ma Tập Luận, nhóm nào gồm đúng năm loại sắc thuộc pháp xứ?",
      "options": [
        "Cực lược sắc, biểu sắc, ngoại sắc, nội sắc và định tự tại sở sinh sắc.",
        "Cực quýnh sắc, sắc thô, vô biểu sắc, tâm pháp và bất tương ưng hành pháp.",
        "Cực lược sắc, cực quýnh sắc, thọ sở dẫn sắc, biến kế sở khởi sắc và định tự tại sở sinh sắc.",
        "Ngoại sắc, nội sắc, sắc thô, sắc vi tế, sắc cực vi tế, đại chủng vi tế và đại chủng cực kỳ vi tế."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Năm loại là cực lược sắc, cực quýnh sắc, thọ sở dẫn sắc, biến kế sở khởi sắc và định tự tại sở sinh sắc. Đây là cách phân loại của Đại thừa A-tỳ-đạt-ma Tập Luận được tài liệu nêu ở trang 187.",
      "hint": "Nhớ danh sách năm loại được trình bày lần lượt ở mục 2 của bài.",
      "memory": "Năm loại bắt đầu bằng cực lược sắc và kết thúc bằng định tự tại sở sinh sắc.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_5",
      "text": "Cực lược sắc được hình thành trong nhận thức theo cách nào?",
      "options": [
        "Dùng nhãn thức nhìn một vật ở thật xa cho đến khi vật ấy chỉ còn là một điểm màu.",
        "Dùng ý thức phân giải sắc được kết tụ đến đơn vị sắc nhỏ nhất, tức hạt cực vi.",
        "Dùng tâm phân biệt nhớ lại hình ảnh một vật đã được nhìn thấy trong quá khứ.",
        "Dùng sức định biến hiện nước, lửa, đất và gió bao khắp toàn bộ một nơi."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cực lược sắc là đơn vị sắc nhỏ nhất đạt đến khi ý thức phân giải những thành phần được kết tụ thành sắc. Hạt cực vi ấy không còn được mắt nhìn thấy và chỉ hiển hiện đối với ý thức.",
      "hint": "Chú ý thao tác phân giải sắc thô và thức thực hiện sự phân giải ấy.",
      "memory": "Cực lược sắc là đơn vị sắc nhỏ nhất do ý thức phân giải.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_6",
      "text": "Vì sao bốn đại chủng được gọi là nhân đại chủng?",
      "options": [
        "Vì chúng là năm xứ được các căn thức trực tiếp nhận biết trong mọi trường hợp.",
        "Vì chúng là quả sắc được tạo ra sau khi các sắc pháp thô đã hòa hợp với nhau.",
        "Vì chúng chỉ tồn tại dưới dạng năng lượng và không liên quan đến sắc pháp thô.",
        "Vì chúng làm nhân tạo ra đại chủng sở tạo, còn đại chủng sở tạo là quả đại chủng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bốn đại chủng làm nhân để tạo ra đại chủng sở tạo nên được gọi là nhân đại chủng. Đại chủng sở tạo do đại chủng làm nhân mà sinh ra nên còn được gọi là quả đại chủng.",
      "hint": "Đặt đại chủng và đại chủng sở tạo vào quan hệ nhân và quả.",
      "memory": "Đại chủng là nhân; đại chủng sở tạo là quả.",
      "difficulty": "Dễ"
    },
    {
      "id": "w11_7",
      "text": "Cách ghép ngoại sắc và nội sắc nào đúng theo tài liệu?",
      "options": [
        "Ngoại sắc gồm sắc, thanh, hương, vị, xúc; nội sắc gồm nhãn căn, nhĩ căn, tỷ căn, thiệt căn và thân căn.",
        "Ngoại sắc gồm năm căn; nội sắc gồm sắc, thanh, hương, vị và xúc được nhận biết ở bên trong.",
        "Ngoại sắc gồm sắc thô và sắc vi tế; nội sắc chỉ gồm ý thức và những hình ảnh do tâm tưởng tượng.",
        "Ngoại sắc gồm bốn đại chủng; nội sắc gồm cực lược sắc, cực quýnh sắc và thọ sở dẫn sắc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ngoại sắc gồm sắc, thanh, hương, vị và xúc. Nội sắc gồm năm căn là nhãn căn, nhĩ căn, tỷ căn, thiệt căn và thân căn; sắc thuộc pháp xứ không nằm trong hai nhóm này.",
      "hint": "Một nhóm là năm đối tượng, nhóm kia là năm căn.",
      "memory": "Ngoại sắc là năm đối tượng; nội sắc là năm căn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_8",
      "text": "Cách ghép nào đúng giữa Thượng A-tỳ-đạt-ma và Hạ A-tỳ-đạt-ma?",
      "options": [
        "Thượng: Đại thừa A-tỳ-đạt-ma Câu-xá Luận của ngài Vô Trước; Hạ: Đại thừa A-tỳ-đạt-ma Tập Luận của ngài Thế Thân.",
        "Thượng: Nhập Trung Luận Tự Thích của ngài Nguyệt Xứng; Hạ: Giải Thâm Mật Kinh Sớ.",
        "Thượng: Đại thừa A-tỳ-đạt-ma Tập Luận của ngài Vô Trước; Hạ: A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân.",
        "Thượng: A-tỳ-đạt-ma Tập Luận của ngài Thế Thân; Hạ: A-tỳ-đạt-ma Câu-xá Luận của ngài Vô Trước."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Thượng A-tỳ-đạt-ma là Đại thừa A-tỳ-đạt-ma Tập Luận của ngài Vô Trước. Hạ A-tỳ-đạt-ma là A-tỳ-đạt-ma Câu-xá Luận của ngài Thế Thân.",
      "hint": "Nhớ tác giả của Tập Luận và Câu-xá Luận.",
      "memory": "Thượng: Tập Luận - Vô Trước; Hạ: Câu-xá Luận - Thế Thân.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_9",
      "text": "Cách phân biệt nào đúng giữa sắc thô và sắc vi tế theo bài?",
      "options": [
        "Sắc thô và sắc vi tế đều được mắt nhận biết trực tiếp, đều bị cản trở và chiếm không gian; sự khác nhau chỉ là sắc vi tế có kích thước nhỏ hơn.",
        "Sắc thô không bị cản trở; sắc vi tế bị cản trở nhưng chỉ được ý thức nhận biết.",
        "Sắc thô thuộc tâm pháp; sắc vi tế thuộc bất tương ưng hành pháp và không có chức năng của sắc.",
        "Sắc thô mắt có thể thấy, bị cản trở và chiếm không gian; sắc vi tế không mắt thấy, không bị cản trở, không chiếm không gian nhưng vẫn có chức năng của sắc."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Sắc thô là đối tượng của mắt, bị cản trở và chiếm không gian. Sắc vi tế không thể thấy bằng mắt, không bị cản trở, không chiếm không gian nhưng vẫn thực hiện chức năng của sắc, như ví dụ lửa tam-muội.",
      "hint": "So sánh đồng thời khả năng nhìn thấy, tính cản trở, không gian và chức năng của sắc.",
      "memory": "Sắc vi tế không mắt thấy và không bị cản trở nhưng vẫn có chức năng của sắc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_10",
      "text": "Nhận định nào KHÔNG ĐÚNG về cực quýnh sắc theo tài liệu?",
      "options": [
        "Cực quýnh sắc chỉ hiện khởi đối với ý thức, không phải là đối tượng của nhãn thức.",
        "Hình ảnh cái bình hiện lên sau khi nhắm mắt thuộc cực quýnh sắc vì cũng là đối tượng của ý thức.",
        "Cực quýnh sắc thuộc pháp hữu vi và cần được phân biệt với hình ảnh do tâm thức tưởng tượng.",
        "Tài liệu đặt vấn đề cần làm rõ màu trắng lam trong suốt ấy có phải là ánh sáng, chỉ là màu sắc và thuộc đối tượng nào."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B không đúng vì hình ảnh cái bình hiện lên sau khi nhắm mắt thuộc tâm phân biệt và tư duy khái niệm, đồng thời không phải hữu vi pháp. Cực quýnh sắc tuy cũng do ý thức nhận biết nhưng được tài liệu xác định là pháp hữu vi.",
      "hint": "Không phải mọi hình ảnh hiện lên trong ý thức đều là cực quýnh sắc.",
      "memory": "Đối tượng của ý thức chưa đủ để trở thành cực quýnh sắc; còn phải phân biệt pháp hữu vi với hình ảnh khái niệm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_11",
      "text": "Trường hợp nào minh họa đúng nhất cho thọ sở dẫn sắc?",
      "options": [
        "Hành giả dùng ý thức phân giải một sắc thô đến hạt cực vi nhỏ nhất.",
        "Hành giả quán toàn bộ đại địa phủ đầy những bộ xương trắng dù thực tế không có như vậy, nhằm đối trị lòng tham ái.",
        "Người thọ giới đúng nghi quỹ dẫn phát giới thể thuộc vô biểu sắc, có chức năng ngăn chặn hành vi bất thiện.",
        "Hành giả đạt định lực tự tại rồi biến hiện nước, lửa, đất và gió bao khắp nơi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Thọ sở dẫn sắc được hiểu như vô biểu sắc dẫn phát từ phương diện thọ giới đúng nghi quỹ. Giới thể của biệt giải thoát giới không biểu hiện ra bên ngoài nhưng có chức năng như hàng rào ngăn chặn những khuynh hướng dẫn đến phạm giới.",
      "hint": "Tìm trường hợp liên quan đến thọ giới và giới thể.",
      "memory": "Thọ sở dẫn sắc gắn với giới thể thuộc vô biểu sắc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_12",
      "text": "Ví dụ nào thuộc biến kế sở khởi sắc?",
      "options": [
        "Do sức định và sự quán tưởng, hành giả thấy rõ toàn bộ đại địa phủ đầy những bộ xương trắng dù thực tế không có như vậy.",
        "Một xâu chuỗi hiện diện trên bàn tay, mắt có thể nhìn thấy, bị cản trở và chiếm một khoảng không gian xác định mà vật khác không thể đồng thời chiếm.",
        "Một bông hoa phải nương trên cái bàn mới có nơi y cứ để tồn tại ở vị trí ấy.",
        "Một hạt cực vi được ý thức phân giải từ những thành phần kết tụ thành sắc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hình ảnh những bộ xương trắng phủ đầy đại địa trong phép quán bất tịnh là ví dụ của biến kế sở khởi sắc. Đối tượng không hiện hữu theo cách ấy trong thực tế nhưng do ý thức tác ý và sức quán tưởng mà trình hiện rõ, đồng thời vẫn có chức năng của sắc.",
      "hint": "Tìm đối tượng do ý thức tác ý mà hiện khởi trong phép quán bất tịnh.",
      "memory": "Biến kế sở khởi sắc do ý thức tác ý mà hiện khởi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_13",
      "text": "Dấu hiệu nào xác định định tự tại sở sinh sắc?",
      "options": [
        "Được mắt nhìn thấy trực tiếp, bị cản trở và chiếm một vị trí xác định mà vật khác không thể đồng thời chiếm.",
        "Là hình ảnh của vật đã thấy, hiện lại trong tâm phân biệt sau khi nhắm mắt.",
        "Được tạo thành khi ý thức phân giải sắc thô đến đơn vị sắc nhỏ nhất.",
        "Được sinh khởi nhờ định lực tự tại, có thể biến hiện nước, lửa, đất hoặc gió bao khắp nơi."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Định tự tại sở sinh sắc sinh khởi dựa vào sức mạnh của thiền định khi định lực đã được tự tại. Hành giả có thể biến hiện nước, lửa, đất hoặc gió bao khắp, và những sự biến hóa ấy vẫn có chức năng của sắc nhưng không bị cản trở như sắc thô.",
      "hint": "Chú ý vai trò của định lực đã được tự tại và khả năng biến hiện.",
      "memory": "Định tự tại sở sinh sắc được sinh khởi nhờ định lực tự tại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_14",
      "text": "Tài liệu phân biệt cách trình bày của A-tỳ-đạt-ma Câu-xá Luận và A-tỳ-đạt-ma Tập Luận như thế nào?",
      "options": [
        "Câu-xá Luận trình bày đầy đủ cả năm loại sắc thuộc pháp xứ; còn Tập Luận không nêu năm loại mà chỉ đề cập đến vô biểu sắc.",
        "Câu-xá Luận không trình bày năm loại theo cách này mà chỉ đề cập vô biểu sắc; Tập Luận trình bày năm loại sắc thuộc pháp xứ.",
        "Hai bộ luận đều phủ nhận vô biểu sắc và chỉ thừa nhận sắc thô do nhãn thức nhận biết.",
        "Hai bộ luận trình bày hoàn toàn giống nhau về năm loại sắc thuộc pháp xứ."
      ],
      "correctAnswerIndex": 1,
      "explanation": "A-tỳ-đạt-ma Câu-xá Luận không trình bày năm loại sắc thuộc pháp xứ theo cách này mà chỉ đề cập đến vô biểu sắc. Năm loại được trình bày trong A-tỳ-đạt-ma Tập Luận và những tư tưởng thuộc hệ thống Đại thừa trở lên.",
      "hint": "Xác định bộ luận nào nêu năm loại và bộ luận nào chỉ đề cập vô biểu sắc.",
      "memory": "Tập Luận trình bày năm loại; Câu-xá Luận chỉ đề cập vô biểu sắc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_15",
      "text": "Ví dụ người đầu bếp trộn nhiều nguyên liệu được dùng để làm rõ điều gì?",
      "options": [
        "Năm căn hòa hợp với ý thức để tạo thành một pháp vô vi không bị cản trở.",
        "Sắc thô được ý thức phân giải thành năm loại sắc thuộc pháp xứ khác nhau.",
        "Bốn đại chủng hòa hợp như các nguyên liệu và hình thành những sắc pháp thô thuộc đại chủng sở tạo.",
        "Tâm phân biệt hòa hợp với nhãn thức để tạo ra hình ảnh cái bình sau khi nhắm mắt, rồi hình thành một sắc pháp thô."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Người đầu bếp trộn nhiều nguyên liệu để tạo thành món ăn được dùng làm ví dụ cho bốn đại chủng hòa hợp. Từ nhân đại chủng là đất, nước, gió và lửa, những sắc pháp thô thuộc đại chủng sở tạo được hình thành.",
      "hint": "Xác định đâu là phần nguyên liệu làm nhân và đâu là sản phẩm được tạo thành.",
      "memory": "Bốn đại chủng hòa hợp để hình thành sắc pháp thô thuộc đại chủng sở tạo.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w11_16",
      "text": "Một học viên nói: “Hễ là đối tượng của ý thức thì đều là sắc thuộc pháp xứ.” Cách hiệu chỉnh nào phù hợp nhất?",
      "options": [
        "Tiêu chí ấy chưa đủ; hình ảnh cái bình trong tâm phân biệt cũng là đối tượng của ý thức nhưng không phải hữu vi pháp, nên không thuộc cực quýnh sắc.",
        "Nhận định đúng vì ý thức chỉ có thể nhận biết sắc thuộc pháp xứ và không nhận biết bất kỳ loại đối tượng nào khác.",
        "Nhận định đúng nếu hình ảnh trong tâm có màu sắc rõ ràng và chỉ do ý thức nhận biết, dù hình ảnh ấy thuộc tư duy khái niệm, không phải hữu vi pháp và không thực hiện chức năng của sắc.",
        "Chỉ cần đối tượng không được nhãn thức nhận biết thì chắc chắn đó là cực quýnh sắc thuộc pháp xứ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Chỉ là đối tượng của ý thức chưa đủ để kết luận một pháp là sắc thuộc pháp xứ. Hình ảnh cái bình hiện lên sau khi nhắm mắt thuộc tâm phân biệt và tư duy khái niệm, không phải hữu vi pháp, nên tài liệu không xếp nó vào cực quýnh sắc.",
      "hint": "Dùng ví dụ hình ảnh cái bình sau khi nhắm mắt để kiểm tra điều kiện còn thiếu.",
      "memory": "Không được đồng nhất mọi đối tượng của ý thức với sắc thuộc pháp xứ.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_17",
      "text": "Cách phân biệt nào sát nhất giữa biến kế sở khởi sắc và định tự tại sở sinh sắc?",
      "options": [
        "Biến kế sở khởi sắc thuộc nhãn thức; định tự tại sở sinh sắc chỉ là hình ảnh do tâm phân biệt nhớ lại.",
        "Biến kế sở khởi sắc là sắc thô do nhãn thức nhận biết và bị cản trở; định tự tại sở sinh sắc là hạt cực vi nhỏ nhất do ý thức phân giải từ sắc thô.",
        "Biến kế sở khởi sắc do ý thức tác ý và quán tưởng mà hiện khởi; định tự tại sở sinh sắc được biến hiện nhờ định lực đã tự tại.",
        "Biến kế sở khởi sắc là vô biểu sắc của giới thể; định tự tại sở sinh sắc là khoảng hư không trắng lam trong suốt."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Biến kế sở khởi sắc được tài liệu giải thích qua đối tượng do ý thức tác ý và quán tưởng mà hiện khởi, như những bộ xương trắng trong phép quán bất tịnh. Định tự tại sở sinh sắc dựa vào định lực đã tự tại, nhờ đó hành giả có thể biến hiện nước, lửa, đất hoặc gió bao khắp.",
      "hint": "So sánh nguồn làm đối tượng hiện khởi: sự tác ý quán tưởng và định lực tự tại.",
      "memory": "Biến kế do ý thức tác ý; định tự tại sở sinh do định lực tự tại.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_18",
      "text": "Cách hiểu nào đúng về một hạt sắc cực kỳ vi tế trong phần nhân đại chủng?",
      "options": [
        "Hạt sắc ấy chỉ có một đại chủng chiếm ưu thế và hoàn toàn không có ba đại chủng còn lại.",
        "Dù nhỏ đến đâu, trong hạt sắc ấy vẫn có đủ đất, nước, lửa và gió, có thể tồn tại dưới dạng yếu tố hoặc năng lượng.",
        "Hạt sắc ấy chỉ là hình ảnh do tâm phân biệt tạo ra sau khi nhắm mắt, nên không thuộc pháp hữu vi, không có chức năng của sắc và không liên quan đến đại chủng.",
        "Hạt sắc ấy phải là sắc thô mà mắt thấy được, bị cản trở và chiếm một không gian xác định."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tài liệu nêu rằng dù một hạt sắc cực kỳ vi tế đến đâu, trong đó vẫn có đủ bốn yếu tố đất, nước, lửa và gió. Một số yếu tố có thể được nói dưới dạng năng lượng, chứ không nhất thiết là sắc thô có thể trực tiếp nhận biết.",
      "hint": "Nhớ nguyên tắc một đại chủng tồn tại thì trong đó phải tập hợp các đại chủng khác.",
      "memory": "Một hạt sắc cực kỳ vi tế vẫn có đủ bốn đại chủng.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_19",
      "text": "Cách giải thích nào SAI khi phân biệt Y nhân, Trụ nhân và Phụ thuộc nhân?",
      "options": [
        "Y nhân nói quả sắc không thể tồn tại độc lập mà phải nương dựa vào nhân các đại chủng.",
        "Trụ nhân nói khi các đại chủng suy hoại hoặc bị tổn thương thì các sắc sở tạo cũng suy hoại theo.",
        "Phụ thuộc nhân nói dòng tương tục của bốn đại chủng phát sinh không gián đoạn trong từng sát-na của các sắc sở tạo.",
        "Trụ nhân chỉ việc đại chủng sinh ra quả sắc lần đầu, còn Sinh nhân chỉ việc quả sắc tăng trưởng chín muồi về sau."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Phương án D sai vì việc đại chủng làm nhân để quả sắc phát sinh thuộc Sinh nhân, còn sự tăng trưởng của đại chủng sở tạo thuộc Tăng trưởng nhân. Trụ nhân được minh họa bằng bóng và hình: đại chủng suy hoại thì sắc sở tạo cũng suy hoại theo.",
      "hint": "Đừng đảo chức năng của Sinh nhân và Tăng trưởng nhân sang Trụ nhân.",
      "memory": "Sinh nhân làm phát sinh; Trụ nhân duy trì cùng sự tồn tại; Tăng trưởng nhân làm tăng trưởng.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_20",
      "text": "Danh sách nào gồm đúng năm loại nhân chứng minh đại chủng làm nhân cho đại chủng sở tạo?",
      "options": [
        "Sinh nhân, Y nhân, Trụ nhân, Phụ thuộc nhân và Tăng trưởng nhân.",
        "Sinh nhân, Cản trở nhân, Biểu sắc nhân, Phụ thuộc nhân và Tăng trưởng nhân.",
        "Cực lược nhân, Cực quýnh nhân, Trụ nhân, Vô biểu nhân và Tăng trưởng nhân.",
        "Địa nhân, Thủy nhân, Phong nhân, Hỏa nhân và Hư không nhân."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Năm loại nhân là Sinh nhân, Y nhân, Trụ nhân, Phụ thuộc nhân và Tăng trưởng nhân. Năm quan hệ này được dùng để làm rõ nhiều phương diện mà đại chủng làm nhân cho đại chủng sở tạo.",
      "hint": "Ba loại đầu là Sinh, Y, Trụ; nhớ tiếp hai loại còn lại.",
      "memory": "Năm nhân: Sinh, Y, Trụ, Phụ thuộc và Tăng trưởng.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_21",
      "text": "Ghép hai nhóm ví dụ sau với loại nhân tương ứng: (i) bông hoa đặt trên bàn, cái bát chứa thức ăn; (ii) bóng đi theo hình, cây bị chặt thì bóng không còn.",
      "options": [
        "(i) Sinh nhân; (ii) Tăng trưởng nhân.",
        "(i) Phụ thuộc nhân; (ii) Sinh nhân.",
        "(i) Y nhân; (ii) Trụ nhân.",
        "(i) Trụ nhân; (ii) Y nhân."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bông hoa nương trên bàn và thức ăn có cái bát làm nơi chứa minh họa cho Y nhân. Bóng tồn tại theo hình, và cây bị chặt thì bóng không còn, minh họa cho Trụ nhân.",
      "hint": "Nhóm đầu nói về nơi nương; nhóm sau nói về sự tồn tại và suy hoại đi cùng nhau.",
      "memory": "Nơi nương là Y nhân; bóng đi theo hình là Trụ nhân.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_22",
      "text": "Điểm khác nhau cốt lõi nào đúng giữa Sinh nhân và Tăng trưởng nhân?",
      "options": [
        "Sinh nhân nói về nơi nương tựa; Tăng trưởng nhân nói về bóng suy hoại theo hình.",
        "Sinh nhân giải thích quả sắc phát sinh từ nhân đại chủng; Tăng trưởng nhân giải thích đại chủng sở tạo tăng trưởng khi đại chủng tăng trưởng chín muồi.",
        "Sinh nhân nói về dòng tương tục phát sinh không gián đoạn trong từng sát-na; Tăng trưởng nhân nói về cái bát làm nơi y cứ chứa thức ăn và bông hoa nương trên bàn.",
        "Sinh nhân chỉ thuộc sắc thô; Tăng trưởng nhân chỉ thuộc những hình ảnh do ý thức tưởng tượng."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sinh nhân làm rõ rằng nếu nhân đại chủng không tồn tại thì quả sắc không thể phát sinh, giống như không có hạt giống thì không có mầm. Tăng trưởng nhân làm rõ đại chủng sở tạo muốn tăng trưởng phải nương vào sự tăng trưởng chín muồi của đại chủng.",
      "hint": "Một loại liên quan đến sự phát sinh, loại kia liên quan đến sự phát triển.",
      "memory": "Sinh nhân làm phát sinh; Tăng trưởng nhân làm tăng trưởng.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_23",
      "text": "Cách giải thích nào thể hiện đầy đủ nhất Phụ thuộc nhân?",
      "options": [
        "Đại chủng sở tạo chỉ cần nhân đại chủng trong sát-na đầu tiên để phát sinh, sau đó có thể tồn tại, tiếp tục biến chuyển và tăng trưởng hoàn toàn độc lập mà không cần nương vào dòng tương tục của đại chủng.",
        "Quả sắc chỉ phụ thuộc vào một khoảng không gian trống, không phụ thuộc vào dòng tương tục của đại chủng.",
        "Phụ thuộc nhân chỉ nói đến sự tăng trưởng chín muồi, không nói đến sự nương dựa liên tục.",
        "Như người già yếu nương gậy và mùi hương liên tục tỏa ra, dòng tương tục của sắc sở tạo phải nương dòng đại chủng phát sinh không gián đoạn từng sát-na."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Phụ thuộc nhân không chỉ nói về một lần nương dựa lúc ban đầu mà nhấn mạnh dòng tương tục không gián đoạn trong từng sát-na. Người già yếu nương gậy và mùi hương tiếp tục tỏa ra là các ví dụ giúp làm rõ quan hệ phụ thuộc liên tục ấy.",
      "hint": "Chú ý tính liên tục, không gián đoạn và sự nương dựa trong từng sát-na.",
      "memory": "Phụ thuộc nhân là sự nương dựa liên tục trong dòng tương tục từng sát-na.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_24",
      "text": "Ghép lần lượt năm trường hợp: (i) hạt giống sinh mầm; (ii) bông hoa nương bàn; (iii) cây bị chặt thì bóng mất; (iv) người già yếu nương gậy; (v) đại chủng tăng trưởng chín muồi thì sắc sở tạo tăng trưởng. Chuỗi nào đúng?",
      "options": [
        "(i) Sinh nhân; (ii) Y nhân; (iii) Trụ nhân; (iv) Phụ thuộc nhân; (v) Tăng trưởng nhân.",
        "(i) Y nhân; (ii) Sinh nhân; (iii) Phụ thuộc nhân; (iv) Trụ nhân; (v) Tăng trưởng nhân.",
        "(i) Sinh nhân; (ii) Trụ nhân; (iii) Y nhân; (iv) Tăng trưởng nhân; (v) Phụ thuộc nhân.",
        "(i) Tăng trưởng nhân; (ii) Phụ thuộc nhân; (iii) Sinh nhân; (iv) Y nhân; (v) Trụ nhân."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hạt giống sinh mầm minh họa Sinh nhân; bông hoa nương bàn minh họa Y nhân; bóng mất khi cây bị chặt minh họa Trụ nhân. Người già yếu nương gậy minh họa Phụ thuộc nhân, còn sự tăng trưởng chín muồi của đại chủng dẫn đến sự tăng trưởng của sắc sở tạo là Tăng trưởng nhân.",
      "hint": "Theo dõi lần lượt: sinh ra, nơi nương, cùng tồn tại, phụ thuộc liên tục và tăng trưởng.",
      "memory": "Năm ví dụ lần lượt ứng với Sinh, Y, Trụ, Phụ thuộc và Tăng trưởng.",
      "difficulty": "Khó"
    },
    {
      "id": "w11_25",
      "text": "Xét bốn nhận định: (1) cực lược sắc là đơn vị sắc nhỏ nhất do ý thức phân giải; (2) thọ sở dẫn sắc được hiểu như vô biểu sắc; (3) biến kế sở khởi sắc là những bộ xương thật phủ khắp đại địa; (4) định tự tại sở sinh sắc dựa vào định lực tự tại. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (3).",
        "(1), (2) và (4).",
        "(2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (4) phù hợp với tài liệu. Nhận định (3) sai vì những bộ xương trắng phủ đầy đại địa chỉ trình hiện do sức định và sự quán tưởng; trên thực tế không có những bộ xương ấy phủ khắp đại địa.",
      "hint": "Kiểm tra nhận định cho rằng những bộ xương trong phép quán hiện hữu thật ngoài thực tế.",
      "memory": "Cực lược do phân giải; thọ sở dẫn là vô biểu; biến kế do tác ý; định tự tại do sức định.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w11_26",
      "text": "Phân loại ba trường hợp: (i) hình ảnh cái bình hiện lên sau khi nhắm mắt; (ii) bộ xương trắng hiện khắp đại địa trong quán bất tịnh; (iii) nước hoặc lửa được biến hiện bao khắp khi định lực tự tại. Chuỗi nào chính xác nhất?",
      "options": [
        "(i) Cực quýnh sắc; (ii) Cực lược sắc; (iii) Thọ sở dẫn sắc.",
        "(i) Thọ sở dẫn sắc vì hình ảnh do ý thức; (ii) Định tự tại sở sinh sắc vì phát sinh trong thiền; (iii) Biến kế sở khởi sắc vì được biến hiện bao khắp.",
        "(i) Cực lược sắc; (ii) Thọ sở dẫn sắc; (iii) Cực quýnh sắc.",
        "(i) Hình ảnh thuộc tâm phân biệt, không phải cực quýnh sắc; (ii) Biến kế sở khởi sắc; (iii) Định tự tại sở sinh sắc."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hình ảnh cái bình sau khi nhắm mắt thuộc tâm phân biệt và tư duy khái niệm, không phải cực quýnh sắc. Bộ xương trắng trong quán bất tịnh là biến kế sở khởi sắc, còn nước hoặc lửa biến hiện nhờ định lực tự tại là định tự tại sở sinh sắc.",
      "hint": "Phân biệt hình ảnh khái niệm, đối tượng do quán tưởng và sự biến hiện nhờ định lực tự tại.",
      "memory": "Hình ảnh khái niệm không phải cực quýnh; quán bất tịnh là biến kế; biến hiện tự tại là định tự tại sở sinh.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w11_27",
      "text": "Cách phân biệt nào chính xác nhất giữa cực lược sắc và cực quýnh sắc theo bài?",
      "options": [
        "Cực lược sắc là hạt cực vi do ý thức phân giải; cực quýnh sắc là pháp hữu vi chỉ ý thức nhận biết.",
        "Cực lược sắc là hình ảnh của cái bình trong tâm phân biệt; cực quýnh sắc là sắc thô được mắt nhìn thấy.",
        "Cực lược sắc là vô biểu sắc phát sinh khi thọ giới; cực quýnh sắc là đối tượng do định lực tự tại biến hiện.",
        "Cực lược sắc và cực quýnh sắc chỉ là hai tên gọi của cùng một hình ảnh khái niệm, đều không thuộc pháp hữu vi."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cực lược sắc là đơn vị sắc nhỏ nhất đạt đến khi ý thức phân giải những thành phần kết tụ thành sắc. Cực quýnh sắc là pháp hữu vi chỉ hiển hiện đối với ý thức, không phải đối tượng của nhãn thức. Cả hai đều cần được phân biệt với hình ảnh khái niệm hiện lên trong tâm phân biệt.",
      "hint": "Một loại được xác định qua sự phân giải đến hạt cực vi; loại kia cần xét thức trực tiếp nhận biết và tính chất hữu vi.",
      "memory": "Cực lược sắc do ý thức phân giải đến hạt cực vi; cực quýnh sắc là pháp hữu vi chỉ ý thức nhận biết.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w11_28",
      "text": "Xét bốn nhận định: (1) tâm vi tế được gọi là câu sinh; (2) tâm vi tế và khí vi tế cùng một bản thể; (3) khí là gió có tính dao động, lay động nhưng không phải gió thông thường; (4) quan hệ cùng một bản thể ở đây nói về các đại chủng thô mắt thấy được. Nhóm nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Các nhận định (1), (2) và (3) đúng theo phần bốn đại chủng vi tế và tâm vi tế. Nhận định (4) sai vì quan hệ cùng một bản thể ở đây đang nói đến bốn đại chủng cực kỳ vi tế, không phải các đại chủng thô có thể trực tiếp nhìn thấy.",
      "hint": "Kiểm tra cấp độ đại chủng được nói là cùng một bản thể với tâm.",
      "memory": "Tâm vi tế, khí vi tế và đại chủng cực kỳ vi tế được nói là cùng một bản thể.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w11_29",
      "text": "Nhóm nhận định nào phản ánh đúng mạch giải thích từ đại chủng vi tế đến sự hình thành quốc độ? (1) Đại chủng là nhân, đại chủng sở tạo là quả. (2) Một hạt sắc cực kỳ vi tế có đủ bốn yếu tố. (3) Từ những yếu tố vi tế hình thành sắc pháp thô rồi hình thành quốc độ. (4) Quốc độ tương lai hoàn toàn không liên quan đến tâm vi tế.",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4).",
        "Chỉ (1), (2) và (3)."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Các nhận định (1), (2) và (3) phù hợp với mạch giải thích của tài liệu. Nhận định (4) sai vì bài nêu sự hình thành quốc độ tốt hay xấu có liên quan đến tâm thức, và tâm vi tế có liên quan đến quốc độ tương lai nơi mình sẽ thành Phật.",
      "hint": "Đối chiếu nhận định phủ nhận mối liên hệ giữa tâm vi tế và quốc độ tương lai.",
      "memory": "Từ yếu tố vi tế hình thành sắc thô và quốc độ; quốc độ có liên quan đến tâm vi tế.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w11_30",
      "text": "Nhóm nhận định nào tổng hợp đúng trọng tâm của Tuần 11? (1) Sắc thuộc pháp xứ chỉ là đối tượng của ý thức. (2) Tập Luận trình bày năm loại sắc thuộc pháp xứ. (3) Câu-xá Luận trình bày năm loại hoàn toàn giống Tập Luận. (4) Đại chủng làm nhân cho đại chủng sở tạo theo năm loại nhân. (5) Hạt sắc cực kỳ vi tế vẫn có đủ bốn đại chủng.",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (2), (4) và (5).",
        "Chỉ (2), (3), (4) và (5).",
        "Cả (1), (2), (3), (4) và (5)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2), (4) và (5) đều đúng theo tài liệu Tuần 11. Nhận định (3) sai vì Câu-xá Luận không trình bày năm loại theo cách của Tập Luận mà chỉ đề cập đến vô biểu sắc.",
      "hint": "Kiểm tra sự khác nhau giữa cách trình bày của Tập Luận và Câu-xá Luận.",
      "memory": "Nắm bốn trục: đối tượng của ý thức, năm loại sắc, nhân-quả đại chủng và năm loại nhân.",
      "difficulty": "Nâng cao"
    }
  ],
  "week12": [
    {
      "id": "w12_1",
      "text": "Theo bài học, bốn đại chủng gồm những yếu tố nào?",
      "options": [
        "Sắc, thanh, hương và vị.",
        "Đất, nước, lửa và gió.",
        "Đất, nước, gió và hư không.",
        "Sắc, hương, vị và xúc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bốn đại chủng gồm đất, nước, lửa và gió. Đây là những yếu tố căn bản cấu thành thế giới và giữ vai trò rộng lớn trong sự hình thành các sắc pháp.",
      "hint": "Nhớ bốn yếu tố gốc rễ được nêu ngay ở phần mở đầu.",
      "memory": "Bốn đại chủng là đất, nước, lửa và gió.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_2",
      "text": "Vì sao đất, nước, lửa và gió được gọi là đại chủng?",
      "options": [
        "Vì chúng chỉ tạo thành những âm thanh có thể nghe và không liên hệ đến các sắc pháp.",
        "Vì chúng là bốn màu sắc căn bản được mắt nhận biết trực tiếp trong mọi vật.",
        "Vì chúng là những pháp vô vi thường hằng, không tham gia các quá trình sinh khởi, tồn tại hay hoại diệt.",
        "Vì chúng là những yếu tố gốc rễ, giữ vai trò rộng lớn trong sự hình thành các sắc pháp."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đất, nước, lửa và gió là những yếu tố gốc rễ hình thành nên thế giới. Vì phạm vi tác động của chúng rất rộng lớn trong sự hình thành các sắc pháp nên được gọi là đại chủng.",
      "hint": "Xét vai trò nền tảng của chúng đối với thế giới và các sắc pháp.",
      "memory": "Đại chủng là những yếu tố gốc rễ có vai trò rộng lớn.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_3",
      "text": "Bản thân bốn đại chủng thuộc xứ nào và là đối tượng của thức nào?",
      "options": [
        "Thuộc xúc xứ và là đối tượng của thân thức.",
        "Thuộc sắc xứ và là đối tượng của nhãn thức.",
        "Thuộc thanh xứ và là đối tượng của nhĩ thức.",
        "Thuộc hương xứ và là đối tượng của tị thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bản thân bốn đại chủng thuộc xúc xứ vì được nhận biết qua sự xúc chạm. Do đó, chúng là đối tượng của thân thức, không phải đối tượng trực tiếp của mắt, tai, mũi hay lưỡi.",
      "hint": "Đại chủng được nhận biết bằng sự xúc chạm của thân.",
      "memory": "Đại chủng thuộc xúc xứ và là đối tượng của thân thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_4",
      "text": "Thuật ngữ “chủng” ('byung ba) được giải thích theo nghĩa nào trong bài?",
      "options": [
        "Màu sắc và hình dạng của một vật thể.",
        "Khoảng trống không có sự nương tựa.",
        "Yếu tố, đồng thời mang nghĩa sinh khởi.",
        "Âm thanh được tạo ra bởi sự chuyển động."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Trong bài, “chủng” ('byung ba) mang nghĩa yếu tố hoặc sinh khởi. Vì vậy, địa chủng, thủy chủng, hỏa chủng và phong chủng là cách gọi các yếu tố đất, nước, lửa và gió.",
      "hint": "Đây là cách gọi các thành phần căn bản như đất, nước, lửa và gió.",
      "memory": "“Chủng” nghĩa là yếu tố hoặc sinh khởi.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_5",
      "text": "Ý nghĩa nào đúng với thuật ngữ “giới” (khams) trong bài?",
      "options": [
        "Chỉ phần hình sắc thô có màu sắc và hình dạng để nhãn thức nhận biết.",
        "Giữ gìn bản thể, tính chất riêng và duy trì đồng loại sinh khởi ở sát-na tiếp theo.",
        "Tên gọi chung cho sắc, thanh, hương, vị và xúc luôn hiện hữu cùng nhau trong mỗi hạt cực vi.",
        "Khoảng trống không có chỗ nương và không hiển lộ bất kỳ hình tướng nào."
      ],
      "correctAnswerIndex": 1,
      "explanation": "“Giới” (khams) mang nghĩa giữ gìn bản thể và tính chất riêng của một yếu tố. Thuật ngữ này còn chỉ khả năng duy trì đồng loại của nó để sinh khởi trong sát-na tiếp theo.",
      "hint": "Hãy nhớ ví dụ hỏa giới không làm mất đi tính chất của lửa.",
      "memory": "Giới giữ gìn tính chất riêng và duy trì đồng loại.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_6",
      "text": "Trình tự bốn đại chủng từ thô đến vi tế được nêu trong bài là gì?",
      "options": [
        "Gió, lửa, nước, đất.",
        "Nước, đất, gió, lửa.",
        "Lửa, gió, đất, nước.",
        "Đất, nước, lửa, gió."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Theo trình tự từ thô đến vi tế, đất thô hơn nước, lửa vi tế hơn nước và gió vi tế hơn lửa. Vì vậy, thứ tự là Đất, Nước, Lửa, Gió.",
      "hint": "Bắt đầu từ đại chủng thô nhất và kết thúc ở đại chủng vi tế nhất.",
      "memory": "Từ thô đến vi tế: Đất, Nước, Lửa, Gió.",
      "difficulty": "Dễ"
    },
    {
      "id": "w12_7",
      "text": "Nhận định nào KHÔNG ĐÚNG về cách nhận biết bốn đại chủng?",
      "options": [
        "Bốn đại chủng thuộc về đối tượng của sự xúc chạm.",
        "Bốn đại chủng được thân thức nhận biết qua sự xúc chạm.",
        "Bốn đại chủng được nhận biết bằng thấy, nghe, ngửi và nếm thay vì xúc chạm.",
        "Địa giới hay hỏa giới không đồng nhất với màu đen của đất hoặc màu đỏ của lửa."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không đúng vì bốn đại chủng không được nhận biết bằng thấy, nghe, ngửi hay nếm. Chúng thuộc xúc xứ và được nhận biết qua sự xúc chạm của thân.",
      "hint": "Phân biệt đối tượng của thân thức với đối tượng của mắt, tai, mũi và lưỡi.",
      "memory": "Đại chủng được nhận biết bằng xúc chạm, không bằng bốn giác quan còn lại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_8",
      "text": "Cách ghép tính chất và chức năng nào hoàn toàn đúng theo bài?",
      "options": [
        "Đất: cứng - duy trì; Nước: ẩm - cố kết; Lửa: ấm - thành thục; Gió: nhẹ và động - phát triển.",
        "Đất: ẩm - cố kết; Nước: cứng - duy trì; Lửa: nhẹ và động - phát triển; Gió: ấm - thành thục.",
        "Đất: nhẹ và động - phát triển; Nước: ấm - thành thục; Lửa: cứng - duy trì; Gió: ẩm - cố kết.",
        "Đất: ấm - thành thục; Nước: nhẹ và động - phát triển; Lửa: ẩm - cố kết; Gió: cứng - duy trì."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Đất có tính cứng và chức năng duy trì; nước có tính ẩm và chức năng cố kết. Lửa có tính ấm và chức năng thành thục, còn gió có tính nhẹ và động cùng chức năng phát triển.",
      "hint": "Ghép từng đại chủng với tính chất riêng trước, rồi mới đối chiếu chức năng.",
      "memory": "Đất duy trì, nước cố kết, lửa thành thục, gió phát triển.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_9",
      "text": "Trong ví dụ gieo hạt giống, chuỗi vai trò nào phù hợp nhất với bài?",
      "options": [
        "Đất làm chín; nước làm phát triển; lửa làm nền tảng; gió gom và kết dính.",
        "Đất gom và kết dính; nước làm chín; lửa làm phát triển; gió làm nền tảng.",
        "Đất làm phát triển; nước làm nền tảng; lửa gom và kết dính; gió làm chín.",
        "Đất làm nền tảng; nước gom và kết dính; lửa làm chín; gió làm phát triển."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đất làm nền tảng để hạt giống nương tựa, còn nước gom và kết dính đất quanh hạt. Hơi ấm của lửa giúp chín muồi và sức của gió giúp cây nảy mầm, sinh trưởng, phát triển.",
      "hint": "Theo dõi lần lượt nền tảng, sự cố kết, chín muồi và phát triển.",
      "memory": "Đất nền tảng, nước cố kết, lửa chín muồi, gió phát triển.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_10",
      "text": "Khi nói đất khô “không có nước”, cách hiểu nào đúng theo tài liệu?",
      "options": [
        "Đất khô hoàn toàn không có yếu tố nước ở bất kỳ mức độ nào.",
        "Đất khô không có nước ở dạng thô nhưng vẫn có năng lực của nước tồn tại.",
        "Yếu tố nước chỉ xuất hiện khi mắt nhìn thấy sự ẩm ướt trên mặt đất.",
        "Trong đất khô chỉ có yếu tố đất và lửa, hoàn toàn không có nước hay gió."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Đất khô chỉ được nói là không có nước ở dạng thô, chứ không phải hoàn toàn thiếu yếu tố nước. Năng lực của nước vẫn tồn tại trong đất và giúp đất không trở thành bụi phân tán.",
      "hint": "Phân biệt nước ở dạng thô với năng lực của nước trong đất.",
      "memory": "Đất khô không có nước thô nhưng vẫn có năng lực của nước.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_11",
      "text": "Cặp hiện tượng nào được bài dùng để chỉ ra yếu tố đất trong nước?",
      "options": [
        "Nước sôi khi đun và dao động, tung tóe khi chuyển động.",
        "Nước có tính ẩm và có khả năng gom các vật lại với nhau.",
        "Nước đông thành đá cứng và có thể nâng đỡ lá hoặc thuyền.",
        "Nước chảy từ trên xuống và không tự chảy ngược lên trên."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nước đông thành đá cứng cho thấy tính cứng của yếu tố đất trong nước. Việc nước có thể nâng đỡ lá, tấm vải hoặc thuyền cũng biểu hiện tính chất nâng đỡ giống như đất.",
      "hint": "Tìm hai biểu hiện liên quan đến tính cứng và khả năng nâng đỡ.",
      "memory": "Đá cứng và khả năng nâng đỡ biểu hiện yếu tố đất trong nước.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_12",
      "text": "Ví dụ nào lần lượt biểu hiện yếu tố lửa và yếu tố gió trong nước?",
      "options": [
        "Nước sôi khi được đun; nước dao động, chuyển động và tung tóe.",
        "Nước đông thành đá; nước có thể nâng đỡ một chiếc thuyền.",
        "Nước có tính ẩm; nước có khả năng gom và kết dính các vật.",
        "Nước chảy xuống do sức hút của đất; nước hiện hữu trong hư không."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nước có thể sôi khi đun được dùng để chỉ ra yếu tố lửa trong nước. Sự dao động, chuyển động và tung tóe của nước là biểu hiện tính động của yếu tố gió.",
      "hint": "Một hiện tượng liên quan đến sức nóng, hiện tượng kia liên quan đến động.",
      "memory": "Nước sôi biểu hiện lửa; nước chuyển động biểu hiện gió.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_13",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với cách bài giải thích sự hiển lộ của các đại chủng?",
      "options": [
        "Trong một đại chủng vi tế có sự hiện diện của những đại chủng còn lại.",
        "Bốn đại chủng luôn hiển lộ ngang nhau với cùng một mức năng lực trong mọi vật.",
        "Đại chủng có năng lực mạnh hơn và chiếm ưu thế sẽ biểu hiện rõ hơn.",
        "Những đại chủng còn lại vẫn có thể hiện hữu dưới dạng năng lực dù không hiển lộ."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B không phù hợp vì các đại chủng không nhất thiết hiển lộ ngang nhau. Đại chủng có năng lực mạnh hơn và chiếm ưu thế sẽ hiển lộ, còn những đại chủng khác có thể vẫn hiện hữu nhưng không biểu hiện rõ.",
      "hint": "Xét sự khác nhau giữa hiện hữu và biểu hiện chiếm ưu thế.",
      "memory": "Hiện hữu không đồng nghĩa với cùng hiển lộ; đại chủng ưu thế biểu hiện rõ hơn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_14",
      "text": "Theo Tỳ-bà-sa bộ, tám yếu tố hay tám trần chất trong sự tích hợp của hạt cực vi gồm những gì?",
      "options": [
        "Bốn đại chủng cùng bốn thức là nhãn thức, nhĩ thức, tị thức và thiệt thức.",
        "Bốn đại chủng cùng sắc, thanh, hương và vị; không có yếu tố xúc.",
        "Năm đại chủng cùng ba chất là sắc, hương và vị; không có yếu tố xúc.",
        "Bốn đại chủng cùng bốn chất là sắc, hương, vị và xúc; không có thanh."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Theo Tỳ-bà-sa bộ, tám trần chất gồm bốn đại chủng đất, nước, gió, lửa và bốn chất sắc, hương, vị, xúc. Thanh không nằm trong tám yếu tố này; nếu thêm thanh thì thành chín.",
      "hint": "Bốn yếu tố đầu là đại chủng; bốn yếu tố sau là các chất, nhưng thanh không nằm trong tám.",
      "memory": "Tám trần chất là bốn đại chủng cộng sắc, hương, vị và xúc.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_15",
      "text": "Điểm khác nhau nào đúng giữa Tỳ-bà-sa bộ và Kinh lượng bộ khi giải thích hạt vi tế?",
      "options": [
        "Tỳ-bà-sa bộ chỉ nói đến năng lực hoặc chủng tử; Kinh lượng bộ khẳng định mọi yếu tố trong sắc tụ đều là đất thật, nước thật.",
        "Hai bộ đều cho rằng tám trần chất chỉ là tên gọi và không tồn tại trong bất kỳ trạng thái nào.",
        "Tỳ-bà-sa bộ nói các hạt chất là đất thật, nước thật; Kinh lượng bộ nói chúng tồn tại như năng lực hoặc chủng tử.",
        "Hai bộ đều phủ nhận sắc, hương, vị và xúc trong sự tập hợp tạo thành sắc tụ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tỳ-bà-sa bộ trình bày các hạt chất trong tám trần chất là đất thật, nước thật và các yếu tố thật tương ứng. Kinh lượng bộ nhấn mạnh năng lực của đất, nước, gió và lửa tồn tại trong hạt vi tế, không nhất thiết là đất thật hay nước thật.",
      "hint": "Đối chiếu “đất thật, nước thật” với “trạng thái năng lực hoặc chủng tử”.",
      "memory": "Tỳ-bà-sa nói hạt chất thật; Kinh lượng nói trạng thái năng lực hoặc chủng tử.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w12_16",
      "text": "Cách phân biệt nào đúng giữa đại chủng vi tế và đại chủng thô?",
      "options": [
        "Một hạt vi tế có năng lực của đủ bốn đại chủng; một tổ hợp thô có thể biểu hiện một, hai, ba hoặc bốn đại chủng.",
        "Một hạt vi tế chỉ có duy nhất một đại chủng; mọi tổ hợp thô đều luôn biểu hiện đủ bốn đại chủng đất, nước, lửa và gió cùng lúc.",
        "Đại chủng vi tế là các vật mắt thấy rõ; đại chủng thô chỉ tồn tại như năng lực tiềm tàng.",
        "Đại chủng vi tế không thuộc xúc xứ; đại chủng thô chỉ thuộc sắc xứ và nhãn thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ở mức vi tế, một hạt dù nhỏ đến đâu cũng có năng lực của đủ bốn yếu tố đất, nước, lửa và gió. Ở mức thô, một tổ hợp có thể chỉ biểu hiện một, hai, ba hoặc bốn đại chủng tùy trường hợp.",
      "hint": "Phân biệt mức năng lực trong một hạt cực vi với số yếu tố biểu hiện trong một tổ hợp thô.",
      "memory": "Vi tế có đủ bốn năng lực; thô có thể biểu hiện từ một đến bốn yếu tố.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_17",
      "text": "Ghép lần lượt bốn trường hợp: (i) khối đất khô; (ii) đất trộn nước; (iii) hỗn hợp được làm nóng; (iv) có sự di chuyển hoặc phát triển. Số đại chủng thô tương ứng là gì?",
      "options": [
        "(i) Bốn; (ii) Ba; (iii) Hai; (iv) Một.",
        "(i) Một; (ii) Ba; (iii) Hai; (iv) Bốn.",
        "(i) Một; (ii) Hai; (iii) Ba; (iv) Bốn.",
        "(i) Hai; (ii) Một; (iii) Bốn; (iv) Ba."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Khối đất khô được trình bày là tổ hợp một đại chủng thô; trộn thêm nước thành hai. Làm nóng thêm yếu tố lửa thành ba, và khi có di chuyển hoặc phát triển thì thêm gió thành bốn.",
      "hint": "Mỗi bước lần lượt thêm nước, lửa rồi gió vào tổ hợp thô.",
      "memory": "Đất khô một; thêm nước hai; thêm lửa ba; thêm gió bốn.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_18",
      "text": "Cách giải thích nào SAI khi phân biệt đại chủng thô và đại chủng vi tế?",
      "options": [
        "Trong một hạt cực vi có năng lực tiềm tàng của đủ bốn đại chủng.",
        "Một vật thô luôn phải hiển lộ đủ bốn đại chủng vì mỗi hạt vi tế có đủ bốn năng lực.",
        "Một khối đất khô có thể được trình bày là tổ hợp chỉ biểu hiện đại chủng đất ở mức thô.",
        "Không nên đồng nhất sự hiện diện vi tế với số đại chủng đang biểu hiện trong tổ hợp thô."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B sai vì đã đồng nhất hai cấp độ giải thích. Mỗi hạt vi tế có đủ năng lực của bốn đại chủng, nhưng một tổ hợp thô có thể chỉ biểu hiện một, hai, ba hoặc bốn yếu tố.",
      "hint": "Không được chuyển thẳng kết luận ở cấp độ hạt vi tế sang cấp độ biểu hiện thô.",
      "memory": "Có đủ ở mức vi tế không đồng nghĩa hiển lộ đủ ở mức thô.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_19",
      "text": "Danh sách nào gồm đúng năm loại nhân được dùng để chứng minh đại chủng làm nhân của đại chủng sở tạo?",
      "options": [
        "Sinh nhân, Y nhân, Trụ nhân, Thành thục nhân, Phát triển nhân.",
        "Sinh nhân, Duy trì nhân, Cố kết nhân, Phụ thuộc nhân, Tăng trưởng nhân.",
        "Xúc nhân, Y nhân, Trụ nhân, Phụ thuộc nhân, Hư không nhân.",
        "Sinh nhân, Y nhân, Trụ nhân, Phụ thuộc nhân, Tăng trưởng nhân."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Năm loại nhân được bài nêu là Sinh nhân, Y nhân, Trụ nhân, Phụ thuộc nhân và Tăng trưởng nhân. Các thuật ngữ như thành thục, duy trì hay cố kết trong các phương án khác là tính chất hoặc chức năng được trình bày ở phần khác.",
      "hint": "Ba loại đầu là Sinh, Y, Trụ; hãy nhớ hai loại còn lại.",
      "memory": "Năm nhân: Sinh, Y, Trụ, Phụ thuộc và Tăng trưởng.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_20",
      "text": "Nhận định nào KHÔNG ĐÚNG về xúc xứ và đại chủng sở tạo?",
      "options": [
        "Xúc xứ chỉ gồm bốn đại chủng và không bao gồm bất kỳ loại xúc đại chủng sở tạo nào.",
        "Bản thân bốn đại chủng thuộc xúc xứ và được thân thức nhận biết trực tiếp qua sự xúc chạm của thân.",
        "Nhẹ, nặng, nhám và trơn là những ví dụ về xúc thuộc đại chủng sở tạo.",
        "Xúc xứ rộng hơn phạm vi của riêng bốn đại chủng đất, nước, lửa và gió."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phương án A không đúng vì xúc xứ không chỉ có bốn đại chủng. Bài còn nêu các loại xúc thuộc đại chủng sở tạo như nhẹ, nặng, nhám và trơn.",
      "hint": "Xem xúc xứ có bị giới hạn hoàn toàn ở bốn đại chủng hay không.",
      "memory": "Xúc xứ gồm bốn đại chủng và cả những xúc đại chủng sở tạo.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_21",
      "text": "Một học viên xếp thanh vào tám trần chất của Tỳ-bà-sa bộ. Cách sửa nào đúng?",
      "options": [
        "Giữ thanh nhưng bỏ xúc, vì xúc không thể hiện hữu trong sự tích hợp của hạt cực vi.",
        "Bỏ thanh; tám trần chất không có thanh, nếu thêm thanh thì tổng số trở thành chín.",
        "Giữ thanh nhưng bỏ hương, vì hương chỉ xuất hiện ở các vật chất thô có thể ngửi.",
        "Thay đại chủng gió bằng thanh, vì cả hai đều biểu hiện thông qua sự chuyển động."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Theo Tỳ-bà-sa bộ, tám trần chất gồm bốn đại chủng và sắc, hương, vị, xúc, không có thanh. Nếu thêm thanh vào nhóm này thì số lượng trở thành chín.",
      "hint": "Đối chiếu bốn chất đi cùng bốn đại chủng và chú ý con số khi thêm thanh.",
      "memory": "Tám trần chất không có thanh; thêm thanh thành chín.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_22",
      "text": "Vì sao bài nói hư không không cần nương vào một yếu tố khác?",
      "options": [
        "Vì hư không chính là phong giới nên tự chuyển động và không cần chỗ nương bên ngoài.",
        "Vì hư không là đại chủng thô nhất, có thể nâng đỡ đất, nước và gió.",
        "Vì hư không là rỗng không, không có sự nương tựa và không hiển lộ hình tướng.",
        "Vì hư không chỉ tồn tại trong thân thể và không liên hệ đến đại chủng bên ngoài."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài giải thích hư không là rỗng không nên không cần nương vào một yếu tố khác. Kinh văn còn nêu hư không không có sự nương tựa, không hiển lộ hình tướng và không có đối tượng để duyên đến.",
      "hint": "Nhớ câu trả lời chặn việc truy hỏi chỗ nương theo chuỗi vô hạn.",
      "memory": "Hư không rỗng không nên không có chỗ nương tiếp theo.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_23",
      "text": "Theo lời giải thích của ngài Thánh Thiên được dẫn trong bài, vì sao nước chảy từ trên xuống?",
      "options": [
        "Vì năng lực của lửa trong nước luôn kéo nước về nơi có nhiệt độ thấp hơn.",
        "Vì yếu tố gió làm nước chuyển động nên nước không thể tồn tại ở vị trí cao.",
        "Vì hư không đẩy mọi vật có tính ẩm ra khỏi những khoảng trống ở phía trên.",
        "Vì sức hút của đất khiến nước không chảy ngược lên mà phải chảy xuống."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Ngài Thánh Thiên giải thích nước chảy xuống là do sức hút của đất. Bài liên hệ hiện tượng này với điều mà các nhà vật lý học về sau gọi là sức hút của Trái Đất.",
      "hint": "Bài liên hệ cách giải thích này với khái niệm sức hút của Trái Đất.",
      "memory": "Nước chảy xuống do sức hút của đất.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_24",
      "text": "Chuỗi ghép nào đúng về sự rối loạn của bốn đại chủng bên trong thân thể theo bài?",
      "options": [
        "Đất: bại liệt hoặc cứng đơ; Nước: bệnh lạnh hoặc bệnh thận; Lửa: bệnh mật hoặc sốt; Gió: bệnh tim hoặc khó thở.",
        "Đất: bệnh mật hoặc sốt; Nước: bệnh tim hoặc khó thở; Lửa: bệnh lạnh hoặc bệnh thận; Gió: bại liệt hoặc cứng đơ.",
        "Đất: bệnh tim hoặc khó thở; Nước: bại liệt; Lửa: tâm tán loạn; Gió: bệnh mật hoặc sốt.",
        "Đất: bệnh lạnh hoặc bệnh thận; Nước: bệnh mật hoặc sốt; Lửa: bại liệt; Gió: tâm tán loạn."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu lần lượt liên hệ sự rối loạn của đất với bại liệt hoặc cơ thể cứng đơ, nước với bệnh lạnh hoặc bệnh thận. Lửa được liên hệ với bệnh mật hoặc sốt, còn gió với bệnh tim hoặc khó thở.",
      "hint": "Ghép tính cứng với đất, lạnh và thận với nước, sốt với lửa, khó thở với gió.",
      "memory": "Đất-cứng, nước-lạnh/thận, lửa-mật/sốt, gió-tim/khó thở.",
      "difficulty": "Khó"
    },
    {
      "id": "w12_25",
      "text": "Ghép ba hiện tượng trong nước: (i) đông thành đá và nâng đỡ thuyền; (ii) sôi khi đun; (iii) dao động và tung tóe. Chuỗi đại chủng được biểu hiện lần lượt là gì?",
      "options": [
        "(i) Nước; (ii) Đất; (iii) Lửa.",
        "(i) Gió; (ii) Nước; (iii) Đất.",
        "(i) Đất; (ii) Lửa; (iii) Gió.",
        "(i) Lửa; (ii) Gió; (iii) Nước."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đông thành đá và nâng đỡ cho thấy tính chất của đất trong nước. Sôi khi đun biểu hiện lửa, còn dao động và tung tóe biểu hiện tính động của gió.",
      "hint": "Đối chiếu tính cứng và nâng đỡ, sức nóng, rồi tính động.",
      "memory": "Trong nước: cứng và nâng đỡ là đất, sôi là lửa, chuyển động là gió.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w12_26",
      "text": "Xét bốn nhận định: (1) một hạt vi tế có năng lực của đủ bốn đại chủng; (2) tổ hợp thô có thể biểu hiện từ một đến bốn đại chủng; (3) đất khô phải hiển lộ đủ bốn đại chủng thô; (4) đồng nhất hai cấp độ sẽ gây nhầm lẫn. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (3).",
        "(1), (2) và (4).",
        "(2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (4) phù hợp với sự phân biệt trong bài. Nhận định (3) sai vì đất khô có thể được nói là tổ hợp chỉ biểu hiện đại chủng đất ở mức thô, dù ở mức vi tế vẫn có năng lực của các đại chủng còn lại.",
      "hint": "Kiểm tra nhận định buộc một khối đất khô phải biểu hiện đủ bốn yếu tố thô.",
      "memory": "Không dùng kết luận vi tế để buộc mọi tổ hợp thô phải biểu hiện đủ bốn đại chủng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w12_27",
      "text": "Một sắc pháp thuộc đại chủng sở tạo đã sinh khởi nhưng vẫn cần các đại chủng làm chỗ nương, duy trì và giúp tăng trưởng. Cách giải thích nào phù hợp nhất với bài?",
      "options": [
        "Các đại chủng chỉ làm Sinh nhân ở thời điểm đầu; sau khi sắc pháp sinh khởi hoàn toàn, chúng không còn bất kỳ vai trò nâng đỡ, duy trì hoặc tăng trưởng nào.",
        "Đại chủng sở tạo sau khi sinh khởi tồn tại độc lập; năm loại nhân chỉ là năm tên gọi khác nhau của cùng một quan hệ sinh ra trực tiếp.",
        "Năm loại nhân chỉ mô tả các giai đoạn phát triển của hạt giống, không dùng để giải thích quan hệ giữa đại chủng và đại chủng sở tạo.",
        "Các đại chủng vừa làm Sinh nhân, vừa làm Y nhân, Trụ nhân, Phụ thuộc nhân và Tăng trưởng nhân cho đại chủng sở tạo."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài dùng năm loại nhân để chỉ nhiều phương diện trong quan hệ giữa đại chủng và đại chủng sở tạo. Sinh nhân giải thích sự sinh khởi; Y nhân, Trụ nhân, Phụ thuộc nhân và Tăng trưởng nhân cho thấy các đại chủng còn làm chỗ nương, duy trì, tạo quan hệ phụ thuộc và giúp đại chủng sở tạo tăng trưởng.",
      "hint": "Quan hệ làm nhân có chấm dứt ngay sau lúc một sắc pháp sinh khởi hay không?",
      "memory": "Đại chủng làm nhân không chỉ ở lúc sinh khởi mà còn trong sự nương tựa, duy trì, phụ thuộc và tăng trưởng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w12_28",
      "text": "Theo phần nói về Bí Mật Tập Hội, nhận định nào KHÔNG PHÙ HỢP với tài liệu?",
      "options": [
        "Mối tương quan giữa đại chủng bên trong và bên ngoài được giải thích ở mức cực kỳ vi tế.",
        "Tâm vi tế, khí vi tế và bốn hoặc năm đại chủng vi tế được trình bày là cùng một bản thể.",
        "Phải làm chủ các đại chủng bên ngoài trước rồi mới có thể làm chủ các đại chủng bên trong.",
        "Vô Thượng Mật Tục nêu năm đại chủng bên trong gồm đất, nước, gió, lửa và hư không."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không phù hợp vì đã đảo ngược trình tự được nêu trong bài. Chỉ khi làm chủ các đại chủng bên trong thì mới có khả năng làm chủ các đại chủng bên ngoài.",
      "hint": "Kiểm tra chiều quan hệ giữa việc làm chủ bên trong và làm chủ bên ngoài.",
      "memory": "Làm chủ đại chủng bên trong là điều kiện để làm chủ đại chủng bên ngoài.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w12_29",
      "text": "Cách tổng hợp nào đúng nhất về năm đại chủng bên trong được nêu khái quát trong bài?",
      "options": [
        "Gồm đất, nước, gió, lửa và hư không; hư không là các khoảng trống trong thân thể; làm chủ bên trong mới có thể làm chủ bên ngoài.",
        "Gồm sắc, thanh, hương, vị và xúc; hư không chỉ là tên khác của phong giới trong thân thể.",
        "Gồm đất, nước, lửa và gió, không có hư không vì hư không chỉ hiện hữu bên ngoài; muốn làm chủ bên trong phải khống chế bên ngoài trước.",
        "Gồm năm thức giác quan; mỗi thức tương ứng với một đại chủng thô có thể nhìn thấy bằng mắt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nêu năm đại chủng bên trong là đất, nước, gió, lửa và hư không; hư không ở đây là những khoảng trống trong thân thể. Trong phần Bí Mật Tập Hội, việc làm chủ đại chủng bên trong được trình bày là điều kiện để có khả năng làm chủ đại chủng bên ngoài.",
      "hint": "Nhớ yếu tố thứ năm, ý nghĩa hư không trong thân và chiều quan hệ bên trong-bên ngoài.",
      "memory": "Năm đại chủng bên trong gồm đất, nước, gió, lửa và hư không.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w12_30",
      "text": "Một hạt vi tế không biểu hiện nước ở dạng thô. Kết hợp quan điểm Kinh lượng bộ với sự phân biệt đại chủng thô và đại chủng vi tế, kết luận nào đúng?",
      "options": [
        "Hạt ấy hoàn toàn không có yếu tố nước, vì chỉ những gì biểu hiện rõ mới được xem là hiện hữu trong sắc tụ.",
        "Năng lực hoặc chủng tử của nước vẫn có thể hiện hữu, dù nước không biểu hiện ở dạng thô.",
        "Hạt ấy phải là nước thật; nếu không thấy nước thì cách phân loại hạt vi tế đã sai ngay từ đầu.",
        "Nước chỉ xuất hiện sau khi lửa và gió tác động, nên trước đó không có cả nước lẫn năng lực của nước."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Theo Kinh lượng bộ, trong hạt vi tế, các đại chủng có thể hiện hữu dưới dạng năng lực hoặc chủng tử. Vì vậy, việc nước không biểu hiện ở dạng thô không có nghĩa là năng lực của nước hoàn toàn vắng mặt. Đây cũng là lý do phải phân biệt sự hiện hữu ở mức vi tế với sự hiển lộ ở mức thô.",
      "hint": "Phân biệt nước thật đang hiển lộ với năng lực hoặc chủng tử của nước.",
      "memory": "Không biểu hiện nước thô không đồng nghĩa không có năng lực hoặc chủng tử của nước ở mức vi tế.",
      "difficulty": "Nâng cao"
    }
  ],
  "week13": [
    {
      "id": "w13_1",
      "text": "Định nghĩa nào đúng với Pháp bất tương ưng hành trong bài?",
      "options": [
        "Pháp vô vi không phải thức cũng không phải sắc.",
        "Pháp hữu vi vừa là thức vừa là sắc trong cùng một lúc.",
        "Pháp hữu vi không phải thức cũng không phải sắc.",
        "Pháp thuộc hành uẩn và luôn tương ưng với tâm vương."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài định nghĩa Pháp bất tương ưng hành là “Pháp hữu vi không phải thức cũng không phải sắc”. Pháp này thuộc hành uẩn, được gán đặt dựa trên sắc hoặc tâm và có bản chất như một dạng năng lực tiềm tàng.",
      "hint": "Xác định pháp này thuộc hữu vi hay vô vi, rồi xét nó có phải thức hoặc sắc hay không.",
      "memory": "Bất tương ưng hành là pháp hữu vi, không phải thức và cũng không phải sắc.",
      "difficulty": "Dễ"
    },
    {
      "id": "w13_2",
      "text": "Cách hiểu nào nối đúng “tương ưng” với tên gọi “bất tương ưng hành”?",
      "options": [
        "Tâm vương đi cùng tâm sở gọi là tương ưng; bất tương ưng hành thuộc hành uẩn nhưng không phải thức hay sắc.",
        "Tương ưng chỉ sự kết hợp của các đại chủng trong Sắc pháp; bất tương ưng hành là một loại sắc vi tế không liên hệ tâm thức.",
        "Tâm vương và tâm sở không bao giờ đi cùng nhau nên mọi Tâm pháp đều là bất tương ưng hành.",
        "Bất tương ưng có nghĩa là không do nguyên nhân và điều kiện tạo ra nên thuộc pháp vô vi."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Tương ưng” nghĩa là cùng đi, thích ứng và tương hợp; trong tâm thức, tâm vương đi cùng tâm sở. Pháp bất tương ưng hành thuộc hành uẩn nhưng không phải thức cũng không phải sắc, nên không đồng nhất với tâm vương hay tâm sở.",
      "hint": "Đối chiếu mối quan hệ giữa tâm vương và tâm sở với vị trí của pháp này trong hành uẩn.",
      "memory": "Tâm vương tương ưng với tâm sở; bất tương ưng hành thuộc hành uẩn nhưng không phải thức hay sắc.",
      "difficulty": "Dễ"
    },
    {
      "id": "w13_3",
      "text": "Việc dựa trên năm uẩn mà gán đặt tên gọi “hữu tình” giúp hiểu điểm nào về Pháp bất tương ưng hành?",
      "options": [
        "Hữu tình là một Sắc pháp riêng biệt, tồn tại hoàn toàn tách khỏi năm uẩn được dùng làm cơ sở.",
        "Năm uẩn trở thành pháp vô vi khi được gọi chung bằng tên hữu tình.",
        "Tên hữu tình chỉ là âm thanh, không liên hệ đến cơ sở được gán đặt.",
        "Pháp được gán đặt dựa trên sắc hoặc tâm nhưng không phải chính cơ sở sắc hay tâm ấy."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tên gọi “hữu tình” được gán đặt dựa trên năm uẩn. Ví dụ này làm rõ rằng Pháp bất tương ưng hành có thể dựa trên sắc hoặc tâm để được gán đặt, nhưng không vì thế mà trở thành chính sắc hoặc tâm làm cơ sở.",
      "hint": "Phân biệt cơ sở được dùng để gán đặt với pháp được gán đặt dựa trên cơ sở đó.",
      "memory": "Dựa trên sắc hoặc tâm để gán đặt không có nghĩa là đồng nhất với sắc hoặc tâm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_4",
      "text": "Cách trình bày nào đúng về vị trí của Pháp bất tương ưng hành trong các hệ thống được bài nhắc đến?",
      "options": [
        "Tất cả trường phái đều chỉ thừa nhận pháp hữu vi gồm Sắc pháp và Tâm pháp.",
        "Câu-xá luận, Tập luận và Lượng học thừa nhận đây là một loại riêng; một số trường phái khác thì không.",
        "Mọi trường phái đều xem bất tương ưng hành là tên gọi khác của pháp vô vi.",
        "Chỉ Trung Quán tông thừa nhận bất tương ưng hành là một loại pháp riêng, còn Câu-xá luận, Tập luận và Lượng học đều phủ nhận."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài cho biết Khoa học và Triết học Phật giáo Tổng tập dựa trên Câu-xá luận, Tập luận và Lượng học để thừa nhận bất tương ưng hành là một loại pháp riêng. Một số trường phái khác chỉ thừa nhận pháp hữu vi gồm Sắc pháp hoặc Tâm pháp.",
      "hint": "Bài đặt cạnh hai cách nhìn: thừa nhận một loại pháp riêng và chỉ chia hữu vi thành sắc hoặc tâm.",
      "memory": "Có hệ thống thừa nhận bất tương ưng hành là loại riêng, nhưng cũng có hệ thống chỉ lập sắc và tâm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_5",
      "text": "Vì sao Pháp bất tương ưng hành được xem là nội dung cần thiết khi trình bày thế giới vật chất, thế giới hữu tình và tâm thức?",
      "options": [
        "Vì loại pháp này thay thế hoàn toàn Sắc pháp, Tâm pháp và mọi đối tượng được nhận thức trong các hệ thống phân loại.",
        "Vì bất cứ điều gì mắt không nhìn thấy đều phải được xếp vào bất tương ưng hành.",
        "Vì có những năng lực, thuộc tính và quan hệ dựa trên sắc hoặc tâm nhưng không phải chính sắc hay tâm.",
        "Vì mọi pháp hữu vi đều chỉ là tên gọi khác nhau của cùng một năng lực không biến chuyển."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài dùng bất tương ưng hành để giải thích những năng lực, thuộc tính và quan hệ không đồng nhất với vật thể hay tâm thức làm cơ sở. Công năng điều trị, sự sinh của cái bình, sự nhanh của xe và quan hệ hạt giống–mầm đều cho thấy vai trò này.",
      "hint": "Liên hệ các ví dụ về công năng, sự sinh, nhanh–chậm và quan hệ nhân quả.",
      "memory": "Bất tương ưng hành giúp trình bày những năng lực, thuộc tính và quan hệ không phải chính sắc hay tâm.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_6",
      "text": "Trong ví dụ thuốc được tạo từ nhiều loại hoa và thảo dược, cách phân tích nào sát bài nhất?",
      "options": [
        "Hoa, thảo dược và công năng điều trị đều là cùng một sắc chất có hình dạng và có thể được mắt nhìn thấy trực tiếp.",
        "Mỗi thảo dược góp một năng lực; công năng điều trị được nhận biết qua kết quả và thuộc bất tương ưng hành.",
        "Công năng điều trị là Tâm pháp vì chỉ có mặt khi người bệnh biết mình đã khỏi bệnh.",
        "Thuốc chỉ có vật liệu; hiệu quả điều trị không liên hệ đến các thành phần tạo nên thuốc."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các loại hoa và thảo dược là vật liệu tạo thuốc. Mỗi loại góp một năng lực nhất định để tạo nên công năng điều trị; năng lực ấy khó thấy trực tiếp nhưng được nhận biết qua thành quả và được dùng làm ví dụ về bất tương ưng hành.",
      "hint": "Tách vật liệu tạo thuốc khỏi năng lực được nhận biết qua tác dụng điều trị.",
      "memory": "Vật liệu tạo thuốc khác với năng lực điều trị được nhận biết qua kết quả.",
      "difficulty": "Dễ"
    },
    {
      "id": "w13_7",
      "text": "Việc học năm phút hoặc thuộc một trang mỗi ngày minh họa điều gì về học tập và luyện tâm?",
      "options": [
        "Mỗi lần học tạo ra một pháp vô vi thường hằng, không liên hệ đến lần học sau.",
        "Thành quả chỉ do lần học cuối cùng tạo ra; những cố gắng trước đó chấm dứt và không để lại tác dụng về sau.",
        "Dòng tâm thức không thay đổi dù việc học và luyện tâm được lặp lại hằng ngày.",
        "Những cố gắng nhỏ tích lũy thành năng lực, tạo nên thành quả và làm thay đổi dòng tâm thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Mỗi lần học hay luyện tâm góp một phần vào năng lực tích lũy. Năng lực ấy không được nhìn thấy trực tiếp nhưng biểu hiện qua thành quả và sự thay đổi của dòng tâm thức, nên được dùng để minh họa Pháp bất tương ưng hành.",
      "hint": "Xét mối liên hệ giữa phần cố gắng nhỏ mỗi ngày với thành quả xuất hiện về sau.",
      "memory": "Sự cố gắng từng ngày tích lũy thành năng lực và biểu hiện qua thành quả về sau.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_8",
      "text": "Trong ví dụ bông hoa, cách phân loại nào đúng?",
      "options": [
        "Bông hoa là Sắc pháp; sự sinh, trụ, dị và diệt của hoa thuộc bất tương ưng hành.",
        "Bông hoa là Tâm pháp; bốn giai đoạn của hoa đều thuộc Sắc pháp.",
        "Bông hoa là pháp vô vi thường hằng; sinh, trụ, dị và diệt chỉ là bốn âm thanh dùng để gọi tên.",
        "Bông hoa và toàn bộ tiến trình biến đổi đều là một pháp thường hằng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bản thân bông hoa thuộc Sắc pháp. Sự sinh ra, tồn tại, biến chuyển và hoại diệt là các tính chất của tiến trình hữu vi, không phải bản thân sắc hay tâm, nên thuộc bất tương ưng hành.",
      "hint": "Phân biệt bản thân vật thể với các tính chất biểu thị tiến trình biến chuyển của nó.",
      "memory": "Bông hoa là Sắc pháp; sinh–trụ–dị–diệt của hoa là bất tương ưng hành.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_9",
      "text": "Trong ví dụ về cái bình, vì sao sự sinh của cái bình không được xếp cùng loại với bản thân cái bình?",
      "options": [
        "Vì bản thân cái bình là Tâm pháp, còn sự sinh của nó là một âm thanh.",
        "Vì cái bình là pháp vô vi, còn sự sinh của nó do tâm vương tạo ra.",
        "Vì cái bình là Sắc pháp, còn sự sinh chỉ là một thuộc tính, không phải bản thân sắc hay tâm.",
        "Vì sự sinh là một vật thể riêng biệt, có thể tách khỏi cái bình và được cắt, cân đo như chính cái bình."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bản thân cái bình thuộc Sắc pháp. Sự sinh của cái bình chỉ là một thuộc tính của nó, không thuộc Sắc pháp cũng không thuộc Tâm pháp, vì vậy được xếp vào Pháp bất tương ưng hành.",
      "hint": "Một bên là vật thể; bên kia là thuộc tính sinh khởi của chính vật thể ấy.",
      "memory": "Cái bình là Sắc pháp; sự sinh của cái bình là thuộc tính thuộc bất tương ưng hành.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_10",
      "text": "Cách phân tích nào áp dụng đúng cùng một nguyên tắc cho chiếc xe, bánh xe và quan hệ hạt giống–mầm cây?",
      "options": [
        "Xe, bánh xe, hạt giống và mầm đều là Sắc pháp; nhanh–chậm, xoay chuyển và quan hệ nhân quả cũng đều là Sắc pháp.",
        "Xe, bánh xe, hạt giống và mầm là Sắc pháp; nhanh–chậm, xoay chuyển và quan hệ nhân quả thuộc bất tương ưng hành.",
        "Xe và bánh xe là pháp vô vi; nhanh–chậm và xoay chuyển là Sắc pháp; mầm cây là Tâm pháp.",
        "Mọi vật thể và mọi quan hệ trong ba ví dụ đều thuộc cùng một loại bất tương ưng hành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bản thân xe, bánh xe, hạt giống và mầm cây đều thuộc Sắc pháp. Sự nhanh hay chậm, sự xoay chuyển và mối tương quan nhân quả giữa hạt giống với mầm không phải bản thân các vật thể ấy nên thuộc bất tương ưng hành.",
      "hint": "Tách bản thân vật thể khỏi thuộc tính chuyển động và mối tương quan giữa các vật thể.",
      "memory": "Vật thể thuộc Sắc pháp; thuộc tính và quan hệ trong các ví dụ thuộc bất tương ưng hành.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_11",
      "text": "Một năng lực không thể nhìn thấy trực tiếp nhưng tạo ra chức năng và thành quả xác định. Bài hướng dẫn nhận biết năng lực ấy thế nào?",
      "options": [
        "Phủ nhận nó vì chỉ những gì mắt thấy mới có thể tồn tại và hoạt động.",
        "Xếp nó vào pháp vô vi vì năng lực không có hình dạng hay màu sắc.",
        "Chỉ dựa vào tên gọi của năng lực, không cần xem chức năng hay thành quả.",
        "Từ chức năng và thành quả suy ra năng lực ấy đang tồn tại và hoạt động."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Năng lực tiềm tàng có thể khó chỉ ra bằng mắt nhưng được nhận biết qua chức năng và thành quả mà nó tạo ra. Nếu không có năng lực tương ứng thì thành quả ấy không thể sinh khởi.",
      "hint": "Bài dùng tác dụng của thuốc và kết quả học tập để chỉ ra điều không thấy trực tiếp.",
      "memory": "Năng lực khó thấy trực tiếp nhưng có thể được suy ra từ chức năng và thành quả.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_12",
      "text": "Theo cách trình bày của các trường phái thuộc Thượng bộ như Duy Thức tông, nhận định nào đúng về chất thể?",
      "options": [
        "Pháp hữu vi có chất thể, còn pháp vô vi không có chất thể.",
        "Pháp hữu vi không có chất thể, còn pháp vô vi mới có chất thể.",
        "Chỉ Sắc pháp có chất thể; mọi Tâm pháp đều không có chất thể.",
        "Mọi pháp đều có chất thể như nhau, không cần phân biệt từng loại."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Theo các trường phái thuộc Thượng bộ như Duy Thức tông trong phần này, pháp hữu vi được cho là có chất thể, còn pháp vô vi không có chất thể. Khả năng nhìn thấy bằng mắt không phải tiêu chí duy nhất để nhận biết chất thể.",
      "hint": "Đối chiếu riêng pháp hữu vi và pháp vô vi theo lập trường được nêu ở phần đầu về chất thể.",
      "memory": "Theo cách trình bày này, hữu vi có chất thể còn vô vi không có chất thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_13",
      "text": "Một học viên cho rằng pháp quá khứ và tương lai không thể có chất thể vì không hiện diện trước mắt. Theo Tỳ-bà-sa bộ, cần sửa thế nào?",
      "options": [
        "Chỉ pháp hiện tại có chất thể; quá khứ và tương lai hoàn toàn không tồn tại như đối tượng nhận thức.",
        "Chỉ pháp quá khứ có chất thể; hiện tại và tương lai do tư duy gán đặt.",
        "Tất cả các pháp và cả quá khứ, hiện tại, tương lai đều được thừa nhận có chất thể.",
        "Ba thời đều không có chất thể vì chỉ vật thể nhìn thấy mới được thừa nhận."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tỳ-bà-sa bộ thừa nhận chất thể đối với pháp hữu vi, pháp vô vi, các đối tượng nhận thức và cả ba thời quá khứ, hiện tại, tương lai. Vì vậy, không thể dùng việc không hiện diện trước mắt để phủ nhận chất thể theo bộ này.",
      "hint": "Đây là lập trường có phạm vi thừa nhận chất thể rộng nhất trong phần trình bày.",
      "memory": "Tỳ-bà-sa bộ thừa nhận chất thể đối với tất cả các pháp và cả ba thời.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_14",
      "text": "Theo Duy Thức tông, cách ghép nào đúng giữa ba tính và chất thể?",
      "options": [
        "Biến kế sở chấp và Y tha khởi không có chất thể; chỉ Viên thành thật có chất thể.",
        "Biến kế sở chấp không có chất thể; Viên thành thật và Y tha khởi có chất thể.",
        "Biến kế sở chấp có chất thể; Viên thành thật và Y tha khởi không có chất thể.",
        "Cả ba tính đều không có chất thể vì đều là đối tượng của tâm thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Biến kế sở chấp tính là pháp do tâm thức gán đặt nên không có chất thể. Viên thành thật tính có bản tính chân như và Y tha khởi tính gồm các pháp vô thường; hai tính này được nói là có chất thể.",
      "hint": "Phân biệt pháp do tâm thức gán đặt với bản tính chân như và các pháp vô thường.",
      "memory": "Biến kế sở chấp không có chất thể; Viên thành thật và Y tha khởi có chất thể.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_15",
      "text": "Theo Trung Quán tông, vì sao tất cả các pháp không có chất thể theo nghĩa tự tính?",
      "options": [
        "Vì chỉ pháp thuộc quá khứ mới có thể tồn tại và trở thành đối tượng nhận thức.",
        "Vì mọi pháp đều là Sắc pháp vi tế, không có hình dạng rõ ràng nên không thể được tâm thức nhận biết.",
        "Vì pháp hữu vi và pháp vô vi đều không có chức năng hay thành quả nào.",
        "Vì các pháp do tư duy phân biệt gán đặt và không tồn tại bằng tự tính của chính nó."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trung Quán tông cho rằng tất cả các pháp đều do tư duy phân biệt gán đặt và không có pháp nào tồn tại bằng tự tính. Nếu một pháp có chất thể theo nghĩa đang xét thì pháp ấy phải tồn tại có tự tính, nên Trung Quán không thừa nhận chất thể theo nghĩa này.",
      "hint": "Xét mối liên hệ giữa sự gán đặt của tư duy và sự tồn tại bằng tự tính.",
      "memory": "Theo Trung Quán, các pháp được gán đặt và không tồn tại bằng tự tính.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_16",
      "text": "Một học viên lấy kết luận của Trung Quán về chất thể rồi áp nguyên vẹn cho Tỳ-bà-sa và Duy Thức. Cách sửa nào đúng nhất?",
      "options": [
        "Phải xác định lập trường vì mỗi trường phái định nghĩa chất thể khác nhau và thừa nhận phạm vi khác nhau.",
        "Có thể áp dụng nguyên vẹn vì các trường phái chỉ khác cách phiên âm, còn nội dung và phạm vi chất thể hoàn toàn giống nhau.",
        "Chỉ cần xét một pháp có hình dạng hay không; tiêu chí này thay thế mọi quan điểm của các trường phái.",
        "Không cần phân biệt trường phái vì mọi pháp hữu vi và vô vi đều có chất thể theo cùng một nghĩa."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nhấn mạnh mỗi trường phái định nghĩa chất thể theo một lập trường khác nhau. Tỳ-bà-sa thừa nhận phạm vi rất rộng, Duy Thức phân biệt theo từng loại pháp, còn Trung Quán phủ nhận chất thể theo nghĩa tự tính; vì vậy không được dùng kết luận của một trường phái thay cho tất cả.",
      "hint": "Đối chiếu phạm vi thừa nhận của Tỳ-bà-sa, Duy Thức và Trung Quán.",
      "memory": "Kết luận về chất thể chỉ chính xác khi nêu rõ lập trường đang sử dụng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w13_17",
      "text": "Ví dụ sợi dây buộc cái bao được dùng để làm rõ điểm nào về Đắc?",
      "options": [
        "Đắc chính là toàn bộ thiện đức đã thành tựu, hoàn toàn đồng nhất với phẩm tính được đạt và không có năng lực riêng.",
        "Pháp đạt được và Đắc khác nhau; Đắc là chất thể hay năng lực cho thấy phẩm tính đang được sở hữu.",
        "Đắc chỉ là âm thanh dùng để gọi tên phẩm tính mà hành giả chưa từng đạt được.",
        "Đắc là trạng thái tâm vương và tâm sở ngưng từ lúc nhập định đến lúc xuất định."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Ví dụ sợi dây và cái bao nhấn mạnh rằng “pháp đạt được” khác với “Đắc”. Đắc không phải bản thân thiện đức, mà là một chất thể hay năng lực tiềm tàng trong dòng tương tục, cho thấy phẩm tính đã được thu hoạch và chưa suy hoại.",
      "hint": "Sợi dây và cái bao liên hệ với nhau nhưng vẫn là hai vật khác nhau.",
      "memory": "Đắc khác với phẩm tính được đạt và biểu thị phẩm tính ấy đang được sở hữu.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_18",
      "text": "Một người chưa đạt các phẩm tính của con đường giải thoát và giác ngộ. Trường hợp này được bài giải thích thế nào?",
      "options": [
        "Các phẩm tính đã hiện hữu đầy đủ trong dòng tương tục, nhưng người ấy chưa phát thành âm thanh để xác nhận.",
        "Các phẩm tính đã bị hủy diệt vì người ấy đang ở trạng thái Vô tưởng.",
        "Các phẩm tính chưa được sở hữu trong dòng tương tục; trường hợp này thuộc Phi đắc.",
        "Các phẩm tính tồn tại như Sắc pháp riêng biệt bên ngoài dòng tương tục."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phi đắc chỉ trường hợp phẩm tính chưa được thu hoạch hay sở hữu trong dòng tương tục. Bài dùng ví dụ một người chưa đạt các phẩm tính của con đường giải thoát và giác ngộ để làm rõ trường hợp này.",
      "hint": "Đối chiếu “đã thu hoạch và sở hữu” với “chưa có trong dòng tương tục”.",
      "memory": "Phi đắc biểu thị phẩm tính chưa được sở hữu trong dòng tương tục.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_19",
      "text": "Hai trường hợp: (i) phẩm tính đã đạt và chưa suy hoại; (ii) phẩm tính của con đường giải thoát chưa được sở hữu. Cách ghép nào đúng?",
      "options": [
        "(i) Phi đắc; (ii) Đồng phần.",
        "(i) Đồng phần; (ii) Mạng căn.",
        "(i) Vô tưởng; (ii) Đắc.",
        "(i) Đắc; (ii) Phi đắc."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đắc biểu thị phẩm tính đã được thu hoạch, đang tồn tại trong dòng tương tục và chưa suy hoại. Phi đắc biểu thị phẩm tính chưa được sở hữu trong dòng tương tục của hữu tình.",
      "hint": "Một trường hợp đã thu hoạch; trường hợp còn lại chưa thu hoạch được phẩm tính.",
      "memory": "Đắc là đã sở hữu; Phi đắc là chưa sở hữu phẩm tính trong dòng tương tục.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_20",
      "text": "Ví dụ con cái có những điểm tương đồng với cha mẹ làm rõ chức năng nào của Đồng phần?",
      "options": [
        "Tạo ra sự tương đồng về hành vi, tư duy và tính chất trong các hữu tình.",
        "Duy trì hơi ấm, tâm thức và làm sở y để sinh mạng của hữu tình tiếp tục tồn tại.",
        "Làm tâm vương và tâm sở ngưng từ lúc nhập định đến khi xuất định.",
        "Biểu thị phẩm tính chưa được thu hoạch trong dòng tương tục."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Đồng phần là một chất thể hay thực chất tạo ra sự tương đồng về hành vi, tư duy và tính chất trong các hữu tình. Sự tương đồng giữa con cái với cha mẹ là ví dụ được bài dùng để minh họa.",
      "hint": "Tên gọi này được giải thích bằng sự tương ứng giữa các hữu tình.",
      "memory": "Đồng phần giải thích sự tương đồng về hành vi, tư duy và tính chất trong các hữu tình.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_21",
      "text": "Mô tả nào đúng với Vô tưởng trong bài?",
      "options": [
        "Trạng thái định do mọi hữu tình chủ động tu tập để làm tâm vương và tâm sở tạm ngưng trong đời sống hằng ngày.",
        "Trạng thái tâm vương và tâm sở không sinh khởi trong dòng tương tục của chư Thiên cõi Vô tưởng.",
        "Chất thể duy trì hơi ấm và tâm thức, khiến sinh mạng tiếp tục tồn tại.",
        "Tên gọi khác của Diệt tận định, y vào tâm thức vi tế nhất thuộc tam giới."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Vô tưởng là trạng thái tâm vương và tâm sở không sinh khởi trong dòng tương tục của chư Thiên ở cõi Vô tưởng. Tâm không hoạt động và trạng thái ấy tiếp tục cho đến khi ra khỏi cõi Vô tưởng.",
      "hint": "Chú ý chủ thể được bài nêu và việc tâm vương, tâm sở có sinh khởi hay không.",
      "memory": "Vô tưởng gắn với chư Thiên cõi Vô tưởng và sự không sinh khởi của tâm vương, tâm sở.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_22",
      "text": "Cách phân biệt nào đúng giữa Vô tưởng và Vô tưởng định?",
      "options": [
        "Vô tưởng là trạng thái định do tu tập từ khi nhập đến lúc xuất; Vô tưởng định là trạng thái của chư Thiên ở cõi Vô tưởng.",
        "Cả hai hoàn toàn đồng nhất vì đều làm tâm không hoạt động trong mọi hữu tình.",
        "Vô tưởng thuộc dòng tương tục của chư Thiên cõi Vô tưởng; Vô tưởng định là trạng thái định được tu tập.",
        "Vô tưởng là tên khác của Mạng căn; Vô tưởng định là tên khác của Đồng phần."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Vô tưởng là trạng thái tâm vương và tâm sở không sinh khởi trong dòng tương tục của chư Thiên cõi Vô tưởng. Vô tưởng định là trạng thái định được tu tập nhằm làm ngưng dứt sự sinh khởi của tâm vương và tâm sở.",
      "hint": "Phân biệt trạng thái của chư Thiên cõi Vô tưởng với trạng thái định do hành giả tu tập.",
      "memory": "Vô tưởng thuộc chư Thiên cõi Vô tưởng; Vô tưởng định là trạng thái định được tu tập.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_23",
      "text": "Mô tả nào đầy đủ nhất về Vô tưởng định theo nội dung bài?",
      "options": [
        "Một trạng thái tự nhiên của mọi hữu tình khi tâm vương và tâm sở tạm thời suy yếu trong đời sống hằng ngày.",
        "Một pháp vô vi làm toàn bộ Sắc pháp và Tâm pháp ngưng tồn tại trong cả ba thời.",
        "Tên gọi khác của cõi Vô tưởng, nơi tâm không sinh khởi cho đến hết đời sống.",
        "Chất thể làm tâm vương và tâm sở ngưng từ khi nhập đến khi xuất định, hướng đến hữu đảnh quả."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Vô tưởng định là chất thể khiến tâm vương và tâm sở ngưng dứt từ khi nhập định đến khi xuất định. Năng lực giúp hành giả an trú trong trạng thái ấy để đạt hữu đảnh quả thuộc Pháp bất tương ưng hành.",
      "hint": "Chú ý khoảng thời gian từ nhập định đến xuất định và kết quả được hướng đến.",
      "memory": "Vô tưởng định làm tâm vương và tâm sở ngưng từ lúc nhập đến lúc xuất định.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_24",
      "text": "Điểm nào giúp nhận diện Diệt tận định và phân biệt với Vô tưởng định?",
      "options": [
        "Diệt tận định làm tâm tạm ngưng trong dòng tâm bậc Thánh và y vào tâm thức vi tế nhất thuộc tam giới.",
        "Diệt tận định là trạng thái của chư Thiên cõi Vô tưởng, làm tâm vương và tâm sở không sinh cho đến khi rời cõi ấy.",
        "Diệt tận định tạo ra sự tương đồng về hành vi và tư duy giữa những hữu tình.",
        "Diệt tận định là sở y của hơi ấm và tâm thức, không cần nương vào pháp khác."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Diệt tận định là chất thể khiến tâm tạm thời ngưng dứt trong dòng tâm thức của bậc Thánh. Trạng thái này y vào tâm thức vi tế nhất thuộc tam giới và được bài nhấn mạnh là khác với Vô tưởng định.",
      "hint": "Tìm hai dấu hiệu được nêu trực tiếp: dòng tâm của ai và y vào loại tâm thức nào.",
      "memory": "Diệt tận định thuộc dòng tâm bậc Thánh và y vào tâm thức vi tế nhất thuộc tam giới.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_25",
      "text": "Xét bốn nhận định: (1) Vô tưởng thuộc chư Thiên cõi Vô tưởng; (2) Vô tưởng định là trạng thái định được tu tập; (3) Diệt tận định thuộc dòng tâm bậc Thánh và có sở y riêng; (4) cả ba hoàn toàn đồng nhất vì đều liên hệ đến sự ngưng của tâm. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (2) và (4).",
        "Chỉ (1), (2) và (3).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các nhận định (1), (2) và (3) phù hợp với bài. Nhận định (4) sai vì Vô tưởng, Vô tưởng định và Diệt tận định được phân biệt theo hoàn cảnh, chủ thể và sở y, dù đều liên hệ đến sự ngưng sinh khởi của tâm.",
      "hint": "Cùng liên hệ đến sự ngưng của tâm không có nghĩa là đồng nhất hoàn cảnh, chủ thể và sở y.",
      "memory": "Không đồng nhất ba trạng thái chỉ vì chúng đều liên hệ đến sự ngưng của tâm.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w13_26",
      "text": "Theo Tỳ-bà-sa bộ, Mạng căn giải thích sự tiếp tục của sinh mạng như thế nào?",
      "options": [
        "Mạng căn chỉ là hơi thở; khi hơi thở ngưng thì tất cả trường phái và cả Mật thừa đều cho rằng tâm thức đoạn diệt.",
        "Mạng căn là chất thể duy trì hơi ấm và tâm thức, làm sở y cho sinh mạng và tránh lỗi thoái lui vô hạn.",
        "Mạng căn là pháp vô vi tạo ra sự tương đồng giữa con cái và cha mẹ.",
        "Mạng căn là âm thanh biểu thị rằng một hữu tình vẫn còn sống."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tỳ-bà-sa bộ cho rằng có một chất thể duy trì hơi ấm và tâm thức, nhờ đó sinh mạng tiếp tục. Chất thể ấy không cần nương vào một pháp khác nữa, nên chặn lỗi thoái lui vô hạn và được gọi là Mạng căn.",
      "hint": "Xét chỗ nương của hơi ấm và tâm thức, cùng vấn đề một chỗ nương lại phải nương tiếp.",
      "memory": "Theo Tỳ-bà-sa, Mạng căn là sở y duy trì hơi ấm, tâm thức và sinh mạng.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_27",
      "text": "Cách so sánh nào đúng giữa Tỳ-bà-sa bộ và Kinh lượng bộ khi giải thích sự tiếp tục của sinh mạng?",
      "options": [
        "Cả hai đều chỉ dựa vào hơi thở và không đề cập dòng tâm thức hay sức mạnh của nghiệp.",
        "Kinh lượng lập một chất thể Mạng căn độc lập làm sở y; Tỳ-bà-sa chỉ nói sức nghiệp làm dòng tâm thức đồng loại sinh khởi.",
        "Cả hai đều xem sinh mạng là pháp vô vi thường hằng, không do nguyên nhân và điều kiện.",
        "Tỳ-bà-sa lập Mạng căn; Kinh lượng dùng sức nghiệp duy trì tâm thức, hơi ấm và sự tiếp nối đồng loại."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Tỳ-bà-sa bộ dùng chất thể Mạng căn để giải thích chỗ nương duy trì hơi ấm và tâm thức. Kinh lượng bộ không lập chất thể ấy mà cho rằng sức nghiệp duy trì dòng tâm thức và hơi ấm; khi sát-na trước ngưng, dòng tâm thức đồng loại kế tiếp sinh khởi.",
      "hint": "Một bên lập một chất thể làm sở y; bên kia giải thích bằng nghiệp và sự tiếp nối của dòng tâm thức.",
      "memory": "Tỳ-bà-sa lập Mạng căn; Kinh lượng dùng sức nghiệp và sự tiếp nối của dòng tâm thức đồng loại.",
      "difficulty": "Khó"
    },
    {
      "id": "w13_28",
      "text": "Vì sao Sinh, Trụ, Hoại và Diệt được xếp vào Pháp bất tương ưng hành?",
      "options": [
        "Vì chúng biểu thị tiến trình của pháp hữu vi nhưng không phải bản thân Sắc pháp hay Tâm pháp.",
        "Vì chúng là bốn Tâm pháp độc lập trực tiếp tạo ra mọi vật thể.",
        "Vì chúng là các pháp vô vi thường hằng, không biến chuyển và hoàn toàn không do nguyên nhân hay điều kiện tạo ra.",
        "Vì chúng chỉ là bốn âm thanh dùng để gọi tên một vật thể."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sinh, Trụ, Hoại và Diệt biểu thị tiến trình của một pháp hữu vi từ khi sinh khởi, tồn tại, biến chuyển cho đến hoại diệt. Bốn tướng này không phải bản thân Sắc pháp hay Tâm pháp nên được xếp vào bất tương ưng hành.",
      "hint": "Phân biệt bản thân một pháp với các tính chất sinh khởi, tồn tại, biến chuyển và hoại diệt.",
      "memory": "Sinh–Trụ–Hoại–Diệt mô tả tiến trình hữu vi, không phải bản thân sắc hay tâm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w13_29",
      "text": "Một người nghĩ trong tâm từ “cây cột”, một câu quy y và các chữ tạo nên câu ấy, rồi mới đọc thành tiếng. Cách phân loại nào đúng?",
      "options": [
        "Tên, câu và chữ trong tư duy đều là Sắc pháp vì có thể truyền đạt ý nghĩa; âm thanh phát ra lại thuộc bất tương ưng hành.",
        "Tên trong tư duy là Cú tụ, câu là Văn tụ, chữ là Danh tụ; âm thanh phát ra thuộc Tâm pháp.",
        "Tên là Danh tụ, câu là Cú tụ, chữ là Văn tụ và thuộc bất tương ưng hành; âm thanh phát ra thuộc Sắc pháp.",
        "Tên, câu, chữ và âm thanh phát ra đều là pháp vô vi vì ý nghĩa không thay đổi."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tên gọi thuộc Danh tụ, câu thuộc Cú tụ và chữ thuộc Văn tụ. Khi chỉ hiện trong tư duy mà chưa phát thành âm thanh, chúng thuộc bất tương ưng hành; khi được đọc thành tiếng, chính âm thanh phát ra thuộc Sắc pháp.",
      "hint": "Phân biệt tên–câu–chữ hiện trong tư duy với âm thanh thực sự được phát ra.",
      "memory": "Danh là tên, Cú là câu, Văn là chữ; trong tư duy thuộc bất tương ưng hành, âm thanh phát ra thuộc Sắc pháp.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w13_30",
      "text": "Cách ghép nào đồng thời đúng với bốn nhóm ví dụ trọng tâm của bài?",
      "options": [
        "Thảo dược, cái bình, chiếc xe, hạt giống và mầm đều là Sắc pháp; công năng, sự sinh, nhanh–chậm và quan hệ nhân quả cũng đều là Sắc pháp.",
        "Vật thể trong các ví dụ là Sắc pháp; công năng, sự sinh, nhanh–chậm và quan hệ nhân quả thuộc bất tương ưng hành.",
        "Công năng điều trị và sự sinh là Sắc pháp; cái bình, chiếc xe và hạt giống thuộc bất tương ưng hành.",
        "Tất cả vật thể, thuộc tính, năng lực và quan hệ trong các ví dụ đều thuộc cùng một Tâm pháp."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các vật thể như thảo dược, cái bình, chiếc xe, hạt giống và mầm thuộc Sắc pháp. Công năng điều trị, sự sinh của cái bình, sự nhanh hay chậm và quan hệ nhân quả không phải bản thân các vật thể làm cơ sở, nên thuộc Pháp bất tương ưng hành.",
      "hint": "Trong mỗi ví dụ, hãy tách vật thể làm cơ sở khỏi năng lực, thuộc tính hoặc quan hệ dựa trên cơ sở ấy.",
      "memory": "Muốn phân loại đúng, phải tách cơ sở vật thể khỏi năng lực, thuộc tính và quan hệ.",
      "difficulty": "Nâng cao"
    }
  ],
  "week14": [
    {
      "id": "w14_1",
      "text": "Một sự việc xảy ra trước một kết quả, nhưng chưa chứng minh được kết quả sinh khởi hay biến đổi do sự việc ấy. Theo bài, kết luận nào chính xác nhất?",
      "options": [
        "Sự việc ấy là nhân gián tiếp, vì bất cứ điều gì có trước kết quả đều thuộc dòng nhân quả của kết quả đó.",
        "Sự việc ấy là nhân phụ, vì nhân phụ chỉ cần có mặt trước quả mà không cần tác động đến quả.",
        "Chưa đủ gọi là nhân; cần xác định nó có sức mạnh tác động, ảnh hưởng hoặc làm chuyển biến quả đang xét hay không.",
        "Sự việc ấy là Nhân làm cho biết, vì mọi điều được nhận biết trước đều là căn cứ sinh ra kết quả về sau trong cùng dòng tương tục."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một pháp chỉ được gọi là nhân của quả đang xét khi có sức mạnh tác động, ảnh hưởng hoặc góp phần làm quả sinh khởi, phát triển, tăng trưởng hay suy giảm. Việc xuất hiện trước quả mới là điều kiện để khảo sát, chưa tự nó đủ xác lập quan hệ nhân quả.",
      "hint": "Thứ tự trước-sau về thời gian chưa phải tiêu chí quyết định; hãy xét sự tác động đối với quả.",
      "memory": "Có trước chưa đủ là nhân; phải có tác động thực sự đến quả đang xét.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_2",
      "text": "Cách trình bày nào giữ đúng định nghĩa căn bản của nhân trong bài?",
      "options": [
        "Nhân là khả năng sinh ra quả của chính nó, hoặc cái làm cho quả ấy sinh khởi.",
        "Nhân là pháp xuất hiện gần quả nhất, dù không tham gia vào sự sinh khởi của quả.",
        "Nhân là điều kiện vẫn giữ nguyên và chỉ được gọi tên sau khi quả đã hoàn thành.",
        "Nhân là căn cứ giúp nhận biết một sự việc, nên luôn đồng nghĩa với Nhân làm cho biết."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài định nghĩa nhân là khả năng sinh ra quả của chính nó, hoặc cái gì sinh khởi ra quả thì gọi là nhân. Vì vậy, vị trí gần, thứ tự thời gian hay khả năng giúp nhận biết đều chưa thay thế được chức năng sinh quả.",
      "hint": "Định nghĩa phải nêu được năng lực làm sinh khởi chính quả tương ứng.",
      "memory": "Nhân có khả năng sinh ra quả của chính nó.",
      "difficulty": "Dễ"
    },
    {
      "id": "w14_3",
      "text": "Trong ví dụ nguyên nhân gây bệnh, cụm từ “làm lợi ích cho quả” cần được hiểu như thế nào?",
      "options": [
        "Nguyên nhân gây bệnh có lợi cho người bệnh vì giúp người ấy nhận biết tình trạng đau đớn của mình.",
        "Nguyên nhân gây bệnh có giá trị thiện lành vì mọi bệnh tật đều dẫn người bệnh đến sự tu tập.",
        "Nguyên nhân chỉ làm lợi ích cho quả khi bệnh đã được chữa khỏi và người bệnh phục hồi hoàn toàn.",
        "Nguyên nhân ấy hỗ trợ việc bệnh sinh khởi, không có nghĩa là đem lại lợi ích cho người bệnh."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Làm lợi ích cho quả” nói đến việc hỗ trợ cho chính quả sinh khởi. Nguyên nhân gây bệnh làm lợi ích cho việc sinh ra bệnh, nhưng không vì vậy mà có lợi cho sức khỏe hay hạnh phúc của người bệnh.",
      "hint": "Phân biệt điều hỗ trợ quả được sinh ra với điều có lợi cho người chịu quả.",
      "memory": "Làm lợi ích cho quả là giúp quả sinh khởi, không phải làm lợi cho người chịu quả.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_4",
      "text": "Điểm nào xác định hạt giống là nhân chính - Cận nhân của mầm non?",
      "options": [
        "Hạt giống phụ trợ cho mầm từ bên ngoài nhưng không nằm trong dòng tương tục lưu chuyển thể chất của mầm.",
        "Hạt giống là cái chính tạo ra mầm và bản thân biến chuyển trong dòng tương tục lưu chuyển thể chất ấy.",
        "Hạt giống giúp người quan sát biết trước sẽ có mầm, nhưng không trực tiếp tham gia vào sự nảy mầm.",
        "Hạt giống ở gần mầm về vị trí nên được gọi là Cận nhân, dù bản thân không biến đổi thành quả."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nhân chính - Cận nhân là cái chính tạo ra quả của chính nó trong dòng tương tục lưu chuyển thể chất. Hạt giống và dòng tương tục của hạt giống biến chuyển thành mầm non, nên hạt giống giữ vai trò nhân chính.",
      "hint": "Xét yếu tố nào tự biến chuyển trong dòng tương tục để sinh ra quả.",
      "memory": "Nhân chính tự biến chuyển trong dòng tương tục để sinh ra quả.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_5",
      "text": "Vì sao đất, nước, hơi ấm và ánh sáng được gọi là nhân phụ - Câu sanh duyên đối với sự nảy mầm?",
      "options": [
        "Vì chúng nối tiếp hạt giống trong cùng dòng tương tục và lần lượt chuyển thành từng phần của mầm non.",
        "Vì chúng luôn sinh ra ngay trước mầm nên giữ vai trò nhân trực tiếp thay cho hạt giống.",
        "Vì chúng hỗ trợ hạt giống sinh mầm nhưng không phải dòng tương tục lưu chuyển thể chất của mầm.",
        "Vì chúng chỉ giúp nhận biết có hạt giống trong đất, chứ không ảnh hưởng đến sự nảy mầm."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đất, nước, hơi ấm, ánh sáng và người chăm sóc phụ trợ cho hạt giống nảy mầm. Chúng vẫn là những điều kiện hỗ trợ bên ngoài, không trở thành dòng tương tục lưu chuyển thể chất của mầm như hạt giống.",
      "hint": "Nhân phụ có tác động hỗ trợ nhưng không tự biến thành quả như nhân chính.",
      "memory": "Nhân phụ hỗ trợ nhân chính sinh quả nhưng không tự biến thành quả ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_6",
      "text": "Khi mầm non sinh khởi, cách phân tích nào đúng nhất về hạt giống và nước?",
      "options": [
        "Hạt giống biến chuyển thành mầm nên là nhân chính; nước vẫn là nước và hỗ trợ quá trình ấy nên là nhân phụ.",
        "Hạt giống và nước đều biến chuyển thành cùng một mầm, vì vậy cả hai đều là nhân chính trong cùng dòng tương tục của mầm.",
        "Hạt giống chỉ làm điều kiện hỗ trợ; nước mới là nhân chính vì nước trực tiếp tiếp xúc với đất và hạt.",
        "Hạt giống là Nhân làm cho biết; nước là Y nhân, nên không yếu tố nào trực tiếp liên hệ đến mầm non."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Dòng tương tục của hạt giống biến chuyển thành mầm nên hạt giống là nhân chính. Nước có ảnh hưởng thực sự đến sự nảy mầm nhưng vẫn là nước, không trở thành bản chất của mầm, nên thuộc nhân phụ.",
      "hint": "Phân biệt yếu tố biến thành quả với yếu tố tác động nhưng vẫn giữ bản chất của nó.",
      "memory": "Hạt giống biến thành mầm; nước hỗ trợ mầm sinh khởi nhưng vẫn là nước.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_7",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với cách bài sử dụng hai từ “nhân” và “duyên”?",
      "options": [
        "Nhân luôn là yếu tố bên trong, duyên luôn là yếu tố bên ngoài trong mọi trường hợp.",
        "Nhân và duyên đôi khi được dùng cùng nghĩa, nên phải xét trường hợp cụ thể.",
        "Tên gọi cần được hiểu cùng với vai trò và chức năng cụ thể của pháp đối với quả đang xét.",
        "Không nên chỉ dựa vào tên gọi mà bỏ qua năng lực tác động thực sự đối với quả."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phương án A không phù hợp vì bài không cố định nhân là yếu tố bên trong và duyên là yếu tố bên ngoài cho mọi trường hợp. Nhân và duyên đôi khi được dùng cùng nghĩa; cần xét vai trò, chức năng và năng lực tác động của pháp đối với quả cụ thể.",
      "hint": "Đây là câu phủ định; tìm nhận định đã cố định cách gọi mà không xét ngữ cảnh và chức năng.",
      "memory": "Hiểu nhân và duyên theo chức năng và ngữ cảnh cụ thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_8",
      "text": "Xét bốn nhận định về ba sát-na liên tiếp: (1) sát-na thứ nhất là nhân trực tiếp của sát-na thứ hai; (2) sát-na thứ nhất là nhân gián tiếp của sát-na thứ ba; (3) sát-na thứ hai là nhân trực tiếp của sát-na thứ ba; (4) sát-na thứ ba là nhân của sát-na thứ nhất vì xuất hiện sau cùng. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4).",
        "Chỉ (1), (2) và (3)."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Các nhận định (1), (2) và (3) đúng. Sát-na thứ nhất trực tiếp sinh sát-na thứ hai; qua sát-na thứ hai, nó là nhân gián tiếp của sát-na thứ ba. Sát-na thứ hai trực tiếp sinh sát-na thứ ba. Nhận định (4) sai vì quả xuất hiện sau không trở thành nhân của sát-na đã có trước.",
      "hint": "Kiểm tra chiều nhân sinh quả và xem giữa nhân với quả có sát-na trung gian hay không.",
      "memory": "Sinh quả kế tiếp là trực tiếp; sinh quả qua giai đoạn trung gian là gián tiếp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_9",
      "text": "Một học viên cho rằng sát-na thứ nhất không thể là nhân của sát-na thứ ba vì nó đã chấm dứt. Cách sửa nào đúng?",
      "options": [
        "Nhận định ấy đúng, vì một pháp đã chấm dứt thì không thể có bất kỳ quan hệ nào với quả sinh về sau.",
        "Sát-na thứ nhất phải được gọi là nhân trực tiếp của sát-na thứ ba vì cả hai thuộc cùng một dòng tương tục.",
        "Sát-na thứ nhất vẫn là nhân gián tiếp của sát-na thứ ba thông qua sự tiếp nối của sát-na thứ hai.",
        "Sát-na thứ ba mới là nhân của sát-na thứ nhất vì kết quả sau cùng quyết định ý nghĩa của các sát-na trước."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Sát-na thứ nhất không trực tiếp sinh sát-na thứ ba, nhưng năng lực của nó tiếp nối qua sát-na thứ hai. Vì có giai đoạn trung gian, quan hệ từ sát-na thứ nhất đến sát-na thứ ba được gọi là nhân gián tiếp.",
      "hint": "Nhân gián tiếp sinh quả thông qua các giai đoạn tiếp nối trong dòng tương tục.",
      "memory": "Một nhân có thể liên hệ với quả về sau thông qua dòng tương tục trung gian.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_10",
      "text": "Một thau nước được đặt cạnh ruộng nhưng chưa tưới; một phần nước khác đã được tưới vào luống hạt. Cách phân tích nào sát bài nhất?",
      "options": [
        "Cả hai phần nước đều đã làm nhân như nhau vì cùng ở gần thửa ruộng và cùng có khả năng tưới hạt.",
        "Nước còn trong thau chưa tác động đến hạt; nước đã tưới mới bắt đầu làm nhân hỗ trợ cho sự nảy mầm.",
        "Nước trong thau là nhân gián tiếp của mầm; nước đã tưới không còn là nhân vì đã rời khỏi thau.",
        "Chỉ ý định của người tưới là nhân; việc nước có tiếp xúc với đất và hạt hay không không làm thay đổi vai trò ấy."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nước để nguyên trong thau chưa hỗ trợ hạt giống trong ruộng nảy mầm. Khi được tưới vào ruộng và thực sự tác động đến hạt, nước mới đảm nhiệm vai trò nhân hỗ trợ đối với quả cụ thể ấy.",
      "hint": "Xét thời điểm nước bắt đầu có ảnh hưởng thực sự đến quả đang khảo sát.",
      "memory": "Một yếu tố trở thành nhân khi bắt đầu tác động thực sự đến quả cụ thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_11",
      "text": "Lượng nước đã được tưới nhưng quá ít, khiến hạt nảy mầm yếu và không phát triển đầy đủ. Kết luận nào phù hợp nhất?",
      "options": [
        "Lượng nước quá ít chưa phải là nhân của sự phát triển, vì chỉ điều kiện tạo kết quả đầy đủ mới được gọi là nhân.",
        "Nước là nhân của sự nảy mầm nhưng không thể là nhân của tăng trưởng; khi mầm đã sinh, lượng nước không còn ảnh hưởng.",
        "Lượng nước quyết định mức phát triển nên nước phải là nhân chính, còn hạt giống chỉ giữ vai trò nhân phụ hỗ trợ.",
        "Nước vẫn có vai trò nhân hỗ trợ, nhưng lượng và cách tác động của nó ảnh hưởng đến mức phát triển của quả."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Ví dụ cho thấy không thể chỉ nêu tên “nước” mà bỏ qua mức độ tác động. Nước đã ảnh hưởng đến hạt, nhưng lượng nước không thích hợp làm quả phát triển không đầy đủ; sự biến đổi của điều kiện dẫn đến sự biến đổi của quả.",
      "hint": "Một nhân có thể tác động đến sự sinh khởi, phát triển, tăng trưởng hoặc suy giảm của quả.",
      "memory": "Vai trò của nhân phải được xét cùng mức độ tác động thực tế đối với quả.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_12",
      "text": "Có thể khẳng định mọi bước chân khi bưng thau nước đến ruộng đều là nhân của sự nảy mầm không?",
      "options": [
        "Chưa thể khẳng định chung; phải xác định quả cụ thể và xem từng bước chân tác động đến việc sinh quả ở mức nào.",
        "Không bước chân nào có thể là nhân của sự nảy mầm, vì chỉ yếu tố trực tiếp chạm vào hạt giống mới có năng lực ảnh hưởng đến quả.",
        "Mọi bước chân đều là nhân trực tiếp, vì chúng xảy ra trước khi nước được tưới vào thửa ruộng.",
        "Mọi bước chân đều là nhân chính, vì quá trình vận chuyển nước nằm trong dòng tương tục của mầm non."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài không kết luận máy móc rằng mọi bước chân đều là nhân của sự nảy mầm. Cần nêu rõ quả đang xét và phân tích xem từng hành động có sức mạnh tác động, ảnh hưởng hay làm chuyển biến quá trình sinh quả đến mức nào.",
      "hint": "Tài liệu xem đây là trường hợp phức tạp và yêu cầu xét quả cùng mức độ tác động cụ thể.",
      "memory": "Không gọi một yếu tố là nhân chỉ vì nó có mặt trước quả; phải xét tác động cụ thể.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w14_13",
      "text": "Muốn xét thời tiết ở Dharamsala từ rất lâu trước đây có phải là nhân của thời tiết hiện tại hay không, điều gì cần được làm rõ?",
      "options": [
        "Chỉ cần hai hiện tượng cùng xảy ra tại Dharamsala thì hiện tượng trước mặc nhiên là nhân gián tiếp của hiện tượng sau.",
        "Chỉ cần thời tiết quá khứ xuất hiện trước và có trạng thái tương tự thời tiết hiện tại thì đã đủ xác lập là nhân.",
        "Cần xác định dòng tác động và sự chuyển biến qua các điều kiện trung gian đến quả thời tiết đang xét.",
        "Cần chứng minh thời tiết quá khứ tác động thẳng đến hiện tại, vì nếu có giai đoạn trung gian thì không thể gọi là nhân."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Việc một hiện tượng xảy ra rất lâu trước hiện tượng khác chưa đủ để gọi nó là nhân. Cần khảo sát dòng tương tục, các điều kiện trung gian và sự tác động làm cho thời tiết hiện tại sinh khởi hoặc biến đổi.",
      "hint": "Khoảng cách thời gian không tự chứng minh quan hệ nhân quả; phải tìm được sự ảnh hưởng thực sự.",
      "memory": "Muốn xác lập nhân xa phải chỉ ra dòng tác động qua các giai đoạn trung gian.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_14",
      "text": "Mệnh đề nào diễn đạt đầy đủ nhất định nghĩa về nhân được dẫn từ Thích Lượng Luận?",
      "options": [
        "Cái này có thì cái kia sinh, nhưng sự biến đổi của cái này không cần liên hệ đến sự biến đổi của cái kia.",
        "Cái này có thì cái kia sinh; cái này biến đổi thì cái kia biến đổi; cái biến đổi đó được gọi là nhân.",
        "Cái này biến đổi thì cái kia biến đổi, nhưng cái sinh sau phải được gọi là nhân của cái có trước.",
        "Cái này và cái kia cùng hiện hữu thì tự động là nhân của nhau, dù không xác định được chiều tác động."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Thích Lượng Luận nêu: “Cái này có thì cái kia sẽ sinh. Cái này biến đổi thì cái kia biến đổi. Cái biến đổi đó gọi là nhân.” Trọng tâm là mối liên hệ tác động giữa nhân và sự sinh khởi, biến đổi của quả.",
      "hint": "Định nghĩa liên kết cả sự hiện hữu lẫn sự biến đổi của nhân với quả tương ứng.",
      "memory": "Nhân hiện hữu và biến đổi thì quả tương ứng sinh khởi và biến đổi.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_15",
      "text": "Cách sắp xếp nào đúng về ba điều kiện làm nhãn thức phát khởi trong phần Nhân sinh khởi?",
      "options": [
        "Mắt làm cảnh; hình sắc làm giác quan; ý thức làm Tăng thượng duyên nối hình sắc với chính nó.",
        "Hình sắc làm cảnh; ánh sáng làm giác quan; mắt làm Tăng thượng duyên thay thế cho ý thức.",
        "Hình sắc và mắt tự tạo nhãn thức; Tăng thượng duyên chỉ xuất hiện sau khi nhận thức đã hoàn thành.",
        "Hình sắc làm cảnh; mắt tốt làm giác quan; Tăng thượng duyên kết nối để nhãn thức phát khởi."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Để nhãn thức phát khởi, cần có hình sắc làm cảnh, giác quan của mắt có khả năng nhận biết và Tăng thượng duyên làm điều kiện môi giới kết nối giác quan với ý thức. Đây là ví dụ về Nhân sinh khởi do ba duyên hội tụ.",
      "hint": "Ba phương diện lần lượt là đối tượng, giác quan có khả năng nhận biết và điều kiện môi giới.",
      "memory": "Nhãn thức sinh khởi nhờ cảnh, giác quan và Tăng thượng duyên hội tụ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_16",
      "text": "Ghép lần lượt ba ví dụ: bốn loại thức ăn nuôi dưỡng sinh mạng; mặt đất làm nơi nương tựa; ngọn đèn soi vật có hình sắc. Chuỗi nào đúng?",
      "options": [
        "Trụ nhân - Y nhân - Nhân soi sáng.",
        "Y nhân - Trụ nhân - Nhân soi sáng.",
        "Trụ nhân - Nhân soi sáng - Y nhân.",
        "Nhân soi sáng - Y nhân - Trụ nhân."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bốn loại thức ăn duy trì sinh mạng nên minh họa Trụ nhân. Mặt đất là nơi các loài nương tựa nên là Y nhân. Ngọn đèn làm sáng vật có hình sắc nên là Nhân soi sáng.",
      "hint": "Phân biệt ba chức năng: duy trì, làm chỗ nương tựa và làm sáng đối tượng.",
      "memory": "Thức ăn - Trụ nhân; mặt đất - Y nhân; ngọn đèn - Nhân soi sáng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_17",
      "text": "Ghép lần lượt ba trường hợp: lửa làm củi thành than; thuốc dùng để phòng bệnh; y học giúp thoát khỏi bệnh tật. Chuỗi nào đúng?",
      "options": [
        "Nhân ngăn ngừa - Nhân chuyển biến - Nhân đạt được.",
        "Nhân đạt được - Nhân ngăn ngừa - Nhân chuyển biến.",
        "Nhân chuyển biến - Nhân ngăn ngừa - Nhân đạt được.",
        "Nhân chuyển biến - Nhân đạt được - Nhân ngăn ngừa."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Lửa làm củi biến thành than nên là Nhân chuyển biến. Thuốc được dùng để phòng bệnh nên là Nhân ngăn ngừa. Cách y học giúp đạt trạng thái thoát khỏi bệnh tật là ví dụ về Nhân đạt được.",
      "hint": "Xét lần lượt chức năng làm đổi khác, phòng tránh và giúp đạt một kết quả.",
      "memory": "Lửa - chuyển biến; thuốc phòng bệnh - ngăn ngừa; y học chữa bệnh - đạt được.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_18",
      "text": "Kết luận nào KHÔNG PHÙ HỢP với ví dụ nghe tiếng nói bên ngoài rồi biết có người ở đó?",
      "options": [
        "Tiếng nói là căn cứ giúp người nghe nhận biết có người hiện diện ở bên ngoài.",
        "Trong ví dụ này, tiếng nói được gọi là Nhân làm cho biết chứ không phải nhân sinh ra người ấy.",
        "Tiếng nói được nghe trước nên là nhân chính biến thành thân thể người ấy.",
        "Chức năng được nhấn mạnh là làm cho biết một sự việc, không phải tạo ra thân thể của người nói."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không phù hợp. Tiếng nói giúp người nghe biết có người ở bên ngoài nên được gọi là Nhân làm cho biết. Việc tiếng nói được nghe trước không khiến nó trở thành nhân chính, và âm thanh ấy cũng không biến chuyển thành thân thể của người nói.",
      "hint": "Đây là câu phủ định; phân biệt căn cứ giúp nhận biết với nhân chính sinh ra một pháp.",
      "memory": "Nhân làm cho biết giúp nhận ra sự việc, không trực tiếp sinh ra sự việc ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_19",
      "text": "Theo cách trình bày của Trung Quán trong bài, vì sao không có tự tính vẫn không phủ nhận nhân quả?",
      "options": [
        "Vì các pháp có quan hệ nhân quả nên phải có một tự tính cố định để bảo đảm quả luôn sinh giống nhau.",
        "Vì không có tự tính chỉ áp dụng cho pháp vô vi, còn nhân và quả hữu vi vẫn tồn tại bằng tự tính.",
        "Vì nhân quả chỉ là tên gọi, nên không cần có sự tác động hay chuyển biến giữa các pháp duyên khởi.",
        "Vì các pháp không tồn tại bằng tự tính, nhưng nhân và quả vẫn được xác lập trên cơ sở duyên khởi."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trung Quán không thừa nhận các pháp tồn tại bằng tự tính, nhưng vẫn giải thích nhân và quả trên cơ sở duyên khởi. Chính vì các pháp tùy thuộc nhân duyên nên chúng có thể sinh khởi và biến đổi mà không cần một tự tính cố định.",
      "hint": "Không có tự tính không đồng nghĩa với không có sự sinh khởi tùy thuộc nhân và duyên.",
      "memory": "Không có tự tính vẫn tương hợp với nhân quả được xác lập trên duyên khởi.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_20",
      "text": "Tứ Thánh Đế được bài liên hệ với luật nhân quả theo hướng thực hành nào?",
      "options": [
        "Không muốn nhận quả khổ thì phải tìm hiểu và loại trừ nguyên nhân của khổ, như khảo sát nhân duyên gây bệnh để trị liệu.",
        "Không muốn nhận quả khổ thì chỉ cần tránh nghĩ đến khổ, vì nhận biết nguyên nhân có thể làm khổ tăng thêm.",
        "Quả khổ và nguyên nhân của khổ tồn tại riêng biệt, nên loại trừ nhân không làm thay đổi quả đang trải nghiệm.",
        "Tứ Thánh Đế chỉ mô tả các trạng thái đã xảy ra, không dùng quan hệ nhân quả để hướng dẫn việc nhận biết và đoạn trừ nguyên nhân của khổ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tứ Thánh Đế được giải thích dựa trên luật nhân quả: muốn không nhận quả khổ phải nhận biết và loại trừ nguyên nhân của khổ. Ví dụ bệnh tật cho thấy cần khảo sát nhân, duyên, thời điểm và tình trạng bệnh để có phương pháp trị liệu thích hợp.",
      "hint": "Liên hệ việc tìm nguyên nhân gây bệnh với mục tiêu không tiếp tục nhận quả khổ.",
      "memory": "Muốn dứt quả khổ phải nhận biết và loại trừ nhân của khổ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_21",
      "text": "Việc bài nêu vô minh, hành, thức, danh sắc và lục nhập nhằm làm rõ điều gì?",
      "options": [
        "Mỗi chi phần là một pháp vô vi độc lập, không chịu ảnh hưởng từ chi phần đứng trước hay đứng sau.",
        "Mười hai nhân duyên là một chuỗi nhân quả liên tục, trong đó các chi phần liên hệ và tiếp nối nhau.",
        "Các chi phần chỉ là nhiều tên gọi của cùng một pháp, nên không có quan hệ sinh khởi nối tiếp.",
        "Chỉ vô minh và hành có quan hệ nhân quả; các chi phần còn lại chỉ dùng để mô tả kết quả đã hoàn thành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Vô minh, hành, thức, danh sắc, lục nhập và các chi phần tiếp theo được nêu để minh họa Mười hai nhân duyên là một chuỗi nhân quả liên tục. Các chi phần có quan hệ nối tiếp, không phải những nội dung rời rạc.",
      "hint": "Tài liệu nhấn mạnh tính liên tục và tiếp nối của toàn bộ chuỗi nhân duyên.",
      "memory": "Mười hai nhân duyên biểu hiện một chuỗi nhân quả liên tục.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_22",
      "text": "Đặc điểm nào phân biệt pháp vô vi với pháp hữu vi theo bài?",
      "options": [
        "Pháp vô vi không hiện ra trước giác quan, nhưng vẫn sinh và diệt khi các điều kiện tương ứng hội tụ.",
        "Pháp vô vi không trải qua sinh, trụ, dị, diệt; không sinh từ nhân duyên và không bị biến chuyển.",
        "Pháp vô vi sinh từ nhân duyên nhưng giữ nguyên hình dạng, nên chỉ có sinh và trụ mà không có dị, diệt.",
        "Pháp vô vi là mọi pháp không thuộc Sắc pháp, bao gồm toàn bộ Tâm pháp và Pháp bất tương ưng hành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Pháp vô vi không trải qua các tướng sinh, trụ, dị, diệt; không sinh khởi từ nhân và duyên, không bị biến chuyển hay hoại diệt. Đây là điểm phân biệt căn bản với pháp hữu vi.",
      "hint": "Đối chiếu với tiến trình sinh khởi, biến chuyển và hoại diệt của pháp hữu vi.",
      "memory": "Pháp vô vi không sinh từ nhân duyên và không trải qua sinh, trụ, dị, diệt.",
      "difficulty": "Dễ"
    },
    {
      "id": "w14_23",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với cách bài phân biệt màu xanh của bầu trời và Hư không vô vi?",
      "options": [
        "Màu xanh của bầu trời là màu sắc được mắt nhận biết, không đồng nhất với Hư không vô vi.",
        "Vì không cản ngại, vùng màu xanh mắt thấy chính là Hư không vô vi.",
        "Hư không được giải thích là sự rỗng không, không chướng ngại và không ngăn cản.",
        "Cần phân biệt một màu sắc có thể thấy với tính không cản ngại trong đó sắc có thể lưu hành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phương án B không phù hợp vì màu xanh mắt thấy là màu sắc, không phải Hư không vô vi hiện ra trực tiếp. Hư không được giải thích là sự rỗng không, không chướng ngại và không ngăn cản những vật có hình sắc lưu hành.",
      "hint": "Đây là câu phủ định; đừng đồng nhất cái mắt thấy có màu với tính không cản ngại.",
      "memory": "Màu xanh của bầu trời là sắc; Hư không là không cản ngại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_24",
      "text": "Theo Tỳ-bà-sa bộ, cách hiểu nào đúng về Hư không?",
      "options": [
        "Hư không là một thực chất thể thuộc pháp vô vi, không cản ngại, trong đó những vật có hình sắc có thể lưu hành.",
        "Hư không không cản ngại, nhưng Tỳ-bà-sa chỉ xem đó là sự vắng mặt của vật cản và không thừa nhận Hư không có thực chất thể.",
        "Hư không có thực chất thể nhưng thuộc Sắc pháp, vì nó chiếm một vị trí để những vật có hình sắc lưu hành bên trong.",
        "Hư không là Pháp bất tương ưng hành có chất thể, được giả lập trên sự di chuyển của những vật có hình sắc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tỳ-bà-sa bộ thừa nhận Hư không là một thực chất thể thuộc pháp vô vi. Định nghĩa được nêu là “Hư không là không cản ngại, trong đó sắc lưu hành”; Hư không không phải Sắc pháp, Pháp bất tương ưng hành hay năng lực tiềm tàng.",
      "hint": "Lập trường này thừa nhận Hư không có chất thể nhưng không xếp nó vào Sắc pháp.",
      "memory": "Theo Tỳ-bà-sa, Hư không là pháp vô vi có chất thể, không cản ngại, trong đó sắc lưu hành.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_25",
      "text": "Trường hợp nào thể hiện đúng Trạch diệt vô vi?",
      "options": [
        "Sân hận không biểu hiện vì người ấy chưa gặp đối tượng làm phát sinh tâm khó chịu trong ngày hôm đó.",
        "Sân hận lắng xuống trong lúc ngủ nhưng hạt giống phiền não vẫn còn nguyên trong dòng tương tục.",
        "Hành giả dùng trí tuệ tư trạch và năng lực con đường tu tập để đoạn trừ phiền não cần đoạn.",
        "Sân hận tạm dừng vì điều kiện bên ngoài thay đổi, dù chưa có trí tuệ phân tích để đoạn tận gốc rễ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Trạch diệt là sự đoạn diệt phiền não nhờ trí tuệ tư trạch. Hành giả dựa vào năng lực con đường tu tập để đoạn trừ phiền não cần diệt, không chỉ làm cho phiền não tạm thời không biểu hiện.",
      "hint": "Điểm quyết định là trí tuệ phân tích và năng lực của con đường tu tập.",
      "memory": "Trạch diệt là đoạn phiền não nhờ trí tuệ và năng lực con đường tu tập.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_26",
      "text": "Trường hợp nào phù hợp với Phi trạch diệt vô vi trong phần giải thích của bài?",
      "options": [
        "Phiền não được trí tuệ tư trạch đoạn tận, nên hạt giống của nó không còn trong dòng tương tục.",
        "Phiền não không sinh khởi vì tạm thời thiếu điều kiện, trong khi hạt giống phiền não vẫn còn.",
        "Phiền não được con đường tu tập chuyển thành Hư không nên không còn khả năng hiện khởi về sau.",
        "Phiền não đã sinh rồi giữ nguyên thường hằng, không thay đổi dù điều kiện bên ngoài có biến chuyển."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phi trạch diệt là trường hợp một pháp không sinh khởi vì thiếu điều kiện. Phiền não chỉ tạm ngưng hiện hành; hạt giống của nó vẫn còn và chưa được đoạn tận nhờ trí tuệ của con đường tu tập.",
      "hint": "Phân biệt việc thiếu duyên để hiện khởi với việc đoạn tận gốc rễ bằng trí tuệ.",
      "memory": "Phi trạch diệt là tạm không sinh do thiếu duyên, không phải đoạn tận gốc rễ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w14_27",
      "text": "Điểm phân biệt cốt lõi giữa Trạch diệt và Phi trạch diệt là gì?",
      "options": [
        "Trạch diệt là không sinh do thiếu duyên; Phi trạch diệt là đoạn phiền não bằng trí tuệ tư trạch.",
        "Cả hai đều đoạn tận hạt giống phiền não bằng con đường tu tập, chỉ khác nhau ở thời gian thực hiện.",
        "Trạch diệt chỉ liên hệ đến tâm sân hận; Phi trạch diệt chỉ liên hệ đến những pháp vật chất không sinh khởi.",
        "Trạch diệt đoạn phiền não nhờ trí tuệ; Phi trạch diệt là không sinh khởi do thiếu điều kiện."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trạch diệt dựa vào trí tuệ tư trạch và năng lực con đường tu tập để đoạn phiền não cần đoạn. Phi trạch diệt chỉ là sự không sinh khởi do thiếu điều kiện, nên hạt giống phiền não vẫn có thể còn tồn tại.",
      "hint": "Một bên có trí tuệ và năng lực con đường tu tập; bên kia chỉ thiếu duyên hiện khởi.",
      "memory": "Trạch diệt nhờ trí tuệ; Phi trạch diệt do thiếu duyên.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_28",
      "text": "Xét bốn nhận định về bậc Nhẫn của Gia hành đạo: (1) hành giả không còn sinh vào ác đạo vì thiếu duyên để những phiền não tương ứng hiện khởi; (2) hạt giống phiền não vẫn còn; (3) thiện căn không bị tiêu diệt; (4) trạng thái này đồng nhất với Trạch diệt thực sự vì mọi hạt giống phiền não đã bị đoạn tận. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4).",
        "Chỉ (1), (2) và (3)."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Các nhận định (1), (2) và (3) đúng. Ở bậc Nhẫn, hành giả không còn sinh vào ác đạo vì thiếu duyên để phiền não tương ứng hiện khởi; hạt giống phiền não vẫn còn và thiện căn không bị tiêu diệt. Nhận định (4) sai vì đây chưa phải Trạch diệt thực sự do trí tuệ đoạn tận gốc rễ.",
      "hint": "Phân biệt thiếu duyên để phiền não hiện khởi với việc đoạn tận hạt giống bằng trí tuệ.",
      "memory": "Bậc Nhẫn: thiếu duyên nên phiền não không sinh, nhưng hạt giống phiền não vẫn còn.",
      "difficulty": "Khó"
    },
    {
      "id": "w14_29",
      "text": "Vì sao chữ “trạch diệt” trong trường hợp phiền não chỉ tạm không sinh do thiếu duyên được nói là giả danh định đặt?",
      "options": [
        "Vì trí tuệ đã đoạn tận phiền não, nhưng thành quả ấy chưa được hành giả nhận biết và gọi tên chính xác.",
        "Vì hạt giống phiền não đã chuyển thành thiện căn, nên không thể xác định sự đoạn diệt thuộc loại nào.",
        "Vì đây chỉ là sự tạm ngưng sinh khởi; hạt giống phiền não còn và chưa được trí tuệ đoạn tận gốc rễ.",
        "Vì bất kỳ pháp nào không hiện khởi trong một thời gian đều là Trạch diệt thực sự, không cần xét nguyên nhân."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phiền não không hiện khởi do thiếu duyên chỉ tạo ra sự vắng mặt tạm thời. Hạt giống vẫn còn và chưa bị trí tuệ đoạn tận, nên chữ “trạch diệt” trong trường hợp này chỉ được dùng theo giả danh, không phải Trạch diệt thực sự.",
      "hint": "Xét xem hạt giống và gốc rễ phiền não đã thật sự bị trí tuệ đoạn trừ hay chưa.",
      "memory": "Tạm không sinh do thiếu duyên chỉ được gọi trạch diệt theo giả danh.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w14_30",
      "text": "Hai người đều không biểu hiện sân hận: người thứ nhất đã đoạn sân nhờ trí tuệ; người thứ hai không gặp điều kiện làm sân hiện khởi. Cách phân tích nào đúng?",
      "options": [
        "Cả hai đều là Trạch diệt vì kết quả quan sát được giống nhau: sân hận không biểu hiện trong hiện tại.",
        "Người thứ nhất thuộc Trạch diệt; người thứ hai thuộc Phi trạch diệt vì nguyên nhân của sự không sân khác nhau.",
        "Người thứ nhất thuộc Phi trạch diệt; người thứ hai thuộc Trạch diệt vì thiếu duyên mạnh hơn trí tuệ.",
        "Cả hai đều không liên hệ pháp vô vi, vì chỉ cần người còn là hữu tình thì mọi trạng thái đều thuộc pháp hữu vi."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Người thứ nhất đoạn trừ sân hận nhờ trí tuệ và năng lực con đường tu tập nên thuộc Trạch diệt. Người thứ hai chỉ tạm thời không sân vì thiếu điều kiện kích thích; hạt giống sân hận chưa được chứng minh là đã đoạn, nên thuộc Phi trạch diệt.",
      "hint": "Không chỉ xét biểu hiện bên ngoài; hãy xét phiền não được đoạn bằng trí tuệ hay chỉ tạm không sinh do thiếu duyên.",
      "memory": "Cùng không biểu hiện phiền não nhưng phải phân loại theo nguyên nhân của sự vắng mặt ấy.",
      "difficulty": "Nâng cao"
    }
  ],
  "week15": [
    {
      "id": "w15_1",
      "text": "Vì sao một số hệ thống xếp Chân như, vô ngã hoặc không tính vào pháp vô vi?",
      "options": [
        "Vì các tên gọi ấy chỉ những trạng thái thiền trong đó thọ và tưởng tạm thời không sinh khởi.",
        "Vì chúng là các tên gọi của tính không, được trình bày là thường hằng và không biến chuyển.",
        "Vì chúng đồng nghĩa hoàn toàn với Hư không, nên không cần xét pháp làm nền tảng.",
        "Vì chúng sinh từ thiện pháp nhưng không chịu ảnh hưởng của bất thiện pháp và vô ký pháp."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài cho biết Chân như, vô ngã và không tính đều là những tên gọi của tính không. Vì được trình bày là thường hằng, không biến chuyển nên một số hệ thống xếp chúng vào pháp vô vi.",
      "hint": "Xét mối liên hệ của ba tên gọi với tính không và đặc điểm không biến chuyển.",
      "memory": "Chân như, vô ngã và không tính là các tên gọi của tính không, được xếp vào pháp vô vi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_2",
      "text": "Thiện pháp chân như, Bất thiện pháp chân như và Vô ký pháp chân như khác nhau ở điểm nào?",
      "options": [
        "Khác nhau hoàn toàn về bản tính của tính không, nên mỗi loại phải tồn tại tách biệt và không thể gom lại thành một nhóm.",
        "Khác nhau vì chỉ Thiện pháp chân như là thường hằng, còn hai loại kia biến chuyển.",
        "Khác nhau vì mỗi loại thuộc một tầng thiền riêng và có chức năng đoạn trừ khác nhau.",
        "Khác nhau theo pháp làm nền tảng là thiện, bất thiện hoặc vô ký, không khác nhau về bản tính."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Ba tên gọi được lập theo pháp làm nền tảng: thiện, bất thiện hoặc vô ký. Bản tính chân như không vì nền tảng khác nhau mà trở thành ba bản tính riêng, nên bài nói ba loại này có thể gom thành một.",
      "hint": "Phân biệt bản tính của chân như với pháp nền tảng mà chân như được nói đến.",
      "memory": "Ba loại chân như khác nền tảng nhưng không khác nhau về bản tính.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_3",
      "text": "Một học viên cho rằng tính không của cái bình phải khác bản tính với tính không của cây cột vì hai vật có chức năng khác nhau. Cách điều chỉnh nào sát bài?",
      "options": [
        "Chức năng của hai pháp nền tảng khác nhau, nhưng tính không của chúng không khác nhau về bản tính.",
        "Hai tính không khác nhau vì khả năng chứa nước và chức năng chống đỡ đều thuộc bản tính của tính không.",
        "Chỉ tính không của cái bình là thường hằng; tính không của cây cột biến đổi theo chức năng chống đỡ.",
        "Hai tính không chỉ giống nhau khi cái bình và cây cột được gọi bằng cùng một Danh trong một ngôn ngữ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cái bình và cây cột khác nhau về pháp nền tảng và chức năng, nhưng tính không của chúng không khác nhau về bản tính. Ví dụ này giúp hiểu vì sao nhiều tên gọi chân như có thể quy về một.",
      "hint": "Đừng chuyển sự khác nhau của pháp nền tảng thành sự khác nhau trong bản tính chân như.",
      "memory": "Nền tảng khác nhau không làm bản tính chân như khác nhau.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_4",
      "text": "Ghép lần lượt ba trường hợp: (i) cái bình được tư duy như một thể không tách rời; (ii) người Việt Nam và con người; (iii) vị ngọt và khối đường. Chuỗi phân loại nào đúng?",
      "options": [
        "(i) Một; (ii) cùng một bản thể; (iii) cùng một chất thể.",
        "(i) cùng một bản thể; (ii) Một; (iii) cùng một chất thể.",
        "(i) cùng một chất thể; (ii) cùng một bản thể; (iii) Một.",
        "(i) Một; (ii) cùng một chất thể; (iii) cùng một bản thể."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cái bình được tư duy như một thể không tách rời là Một. Người Việt Nam và con người là cái riêng–cái chung nên cùng một bản thể, còn vị ngọt và khối đường là thuộc tính–vật mang thuộc tính nên cùng một chất thể; hai trường hợp sau đều không phải là Một.",
      "hint": "Phân biệt một thể không hiển lộ tách rời, hai khái niệm chung–riêng và vật–thuộc tính.",
      "memory": "Một ≠ cùng một bản thể ≠ cùng một chất thể."
    },
    {
      "id": "w15_5",
      "text": "Chuỗi diễn tiến nào phù hợp với phần giải thích về Bất động trong bài?",
      "options": [
        "Giữ nguyên xúc của Dục giới, đồng thời đình chỉ mọi hình sắc ngay ở tầng thiền thứ nhất để đạt trạng thái Bất động.",
        "Từ Dục giới đi thẳng vào diệt tận định, rồi trở lại các tầng thiền để loại trừ thọ và tưởng.",
        "Loại trừ thọ và tưởng ngay ở Dục giới, sau đó mới phát sinh xúc của tầng thiền thứ nhất.",
        "Đạt tầng thiền đầu, loại trừ xúc thuộc Dục giới, rồi tiến lên tầng cao hơn để diệt trừ thọ và tưởng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Một vị đạt tầng thiền thứ nhất loại trừ xúc thuộc Dục giới và đạt xúc của thiền thế gian. Sau đó vị ấy tiếp tục tiến lên tầng thiền cao hơn, diệt trừ thọ và tưởng, từ đó đạt trạng thái Bất động.",
      "hint": "Bài trình bày một tiến trình đi dần từ tầng thiền đầu lên tầng cao hơn.",
      "memory": "Bất động được giải thích qua tiến trình đi lên các tầng thiền và diệt trừ thọ, tưởng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_6",
      "text": "Điểm nào giải thích đúng việc Diệt thọ tưởng được xếp vào pháp vô vi trong bài?",
      "options": [
        "Đó là trạng thái trong đó mọi pháp đều chấm dứt vĩnh viễn, nên không còn pháp nền tảng và cũng không còn đối tượng nào được nhận thức.",
        "Đó là trạng thái diệt tận định, thọ và tưởng không sinh khởi, được nói là tương tự pháp vô vi vì có tính thường hằng.",
        "Đó là trạng thái thọ và tưởng vẫn sinh nhưng không được người nhập định nhận biết bằng tư duy phân biệt.",
        "Đó là tên gọi khác của ba loại chân như vì thiện, bất thiện và vô ký đều ngừng hoạt động trong lúc nhập định."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Diệt thọ tưởng thuộc diệt tận định, trong đó thọ và tưởng không sinh khởi. Bài nói trạng thái này tương tự pháp vô vi vì có tính thường hằng, nên được xếp vào pháp vô vi.",
      "hint": "Tập trung vào hai yếu tố không sinh khởi và lý do trạng thái ấy được nói là tương tự pháp vô vi.",
      "memory": "Diệt thọ tưởng thuộc diệt tận định, trong đó thọ và tưởng không sinh khởi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_7",
      "text": "Trong ví dụ Tenzin Tashi, cách ghép nào đúng giữa Nghĩa, Danh và Ví dụ?",
      "options": [
        "Nghĩa là những đặc điểm giúp xác định; Danh là tên Tenzin Tashi; Ví dụ là người cụ thể được chỉ ra.",
        "Nghĩa là người cụ thể; Danh là tuổi, hình dáng và ngôn ngữ; Ví dụ là tên Tenzin Tashi.",
        "Nghĩa là tên Tenzin Tashi; Danh là người cụ thể; Ví dụ là các đặc điểm về tuổi, hình dáng và ngôn ngữ giúp xác định.",
        "Nghĩa và Danh đều là tên Tenzin Tashi; Ví dụ là mọi người có cùng tuổi hoặc cùng ngôn ngữ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tên Tenzin Tashi là Danh. Tuổi, hình dáng, dân tộc và ngôn ngữ là những đặc điểm thuộc Nghĩa; người cụ thể được chỉ ra là Ví dụ minh họa.",
      "hint": "Tách phần đặc điểm nhận biết, phần tên gọi và người cụ thể được dùng để minh họa.",
      "memory": "Nghĩa giúp xác định; Danh dùng để gọi; Ví dụ chỉ trường hợp cụ thể.",
      "difficulty": "Dễ"
    },
    {
      "id": "w15_8",
      "text": "Xét bốn nhận định về định nghĩa của Danh: (1) Danh được định nghĩa là đầy đủ sự gán đặt của ba pháp. (2) Bản chất nó phải là tên gọi của chính nó, biểu hiện đúng tên gọi của đối tượng được gọi. (3) Tên gọi phải phù hợp với định nghĩa của chính nó và tương xứng với Ví dụ minh họa. (4) Một Danh vẫn có thể dùng để gọi một đối tượng khác, miễn là hai đối tượng có một đặc điểm giống nhau. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (1), (2) và (3).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các nhận định (1), (2) và (3) đúng. Nhận định (4) sai vì Danh phải chỉ đúng đối tượng được gọi, phù hợp với định nghĩa của chính nó và tương xứng với Ví dụ minh họa; không thể dùng Danh ấy để gọi một đối tượng khác.",
      "hint": "Xét sự tương ứng giữa tên gọi với chính đối tượng, định nghĩa và Ví dụ minh họa.",
      "memory": "Danh phải đúng với chính đối tượng, phù hợp với định nghĩa và tương xứng với Ví dụ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_9",
      "text": "Trong câu “Danh được định nghĩa là đầy đủ sự gán đặt của ba pháp”, từ “gán đặt” được hiểu như thế nào?",
      "options": [
        "Là đặt tên hoặc thiết lập thuật ngữ cho đối tượng; không đồng nhất với sự gán đặt do tư duy phân biệt trong Trung Quán.",
        "Là sự gán đặt do tư duy phân biệt trong Trung Quán, liên quan trực tiếp đến cách các pháp được thiết lập và tồn tại.",
        "Là chọn một Ví dụ thay cho tên gọi; vì vậy Danh không cần phù hợp với định nghĩa của chính nó.",
        "Là xác định đối tượng thuộc hữu vi hay vô vi; vì vậy việc đặt tên hoặc thiết lập thuật ngữ không quan trọng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Trong định nghĩa của Danh, “gán đặt” có nghĩa là đặt tên hoặc thiết lập một thuật ngữ cho đối tượng. Sự gán đặt này không đồng nhất với khái niệm do tư duy phân biệt gán đặt trong Trung Quán, vốn có ý nghĩa triết học sâu hơn, liên quan đến cách các pháp được thiết lập và tồn tại.",
      "hint": "Phân biệt việc đặt tên cho đối tượng với khái niệm gán đặt có ý nghĩa triết học sâu hơn.",
      "memory": "Gán đặt trong định nghĩa của Danh là đặt tên hoặc thiết lập thuật ngữ, không phải sự gán đặt do tư duy phân biệt trong Trung Quán.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_10",
      "text": "Xét bốn nhận định về định nghĩa của Nghĩa: (1) Nghĩa được định nghĩa là phải đầy đủ tính chất thực hữu ba pháp. (2) Chính nó phải là định nghĩa. (3) Một định nghĩa có thể đồng thời làm định nghĩa cho một tên gọi khác nếu cách diễn đạt gần giống nhau. (4) Định nghĩa phải tương ứng với tên gọi của chính nó và có Ví dụ minh họa tương ứng. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (3).",
        "Chỉ (1), (2) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (4) đúng. Nhận định (3) sai vì Nghĩa phải tương ứng với tên gọi của chính nó, không làm định nghĩa cho một tên gọi khác. Nghĩa cũng phải có Ví dụ minh họa tương ứng để giúp nhận biết rõ đối tượng mà tên gọi biểu thị.",
      "hint": "Kiểm tra xem định nghĩa có hướng đúng đến tên gọi của chính nó hay không.",
      "memory": "Nghĩa phải là định nghĩa, đúng với Danh của nó và có Ví dụ tương ứng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_11",
      "text": "Trong ví dụ chiếc bình vàng, cách phân tích nào giữ đúng vai trò của cả ba yếu tố?",
      "options": [
        "Danh là các đặc điểm có đáy, bụng tròn; Nghĩa là chiếc bình cụ thể; Ví dụ là chữ bình vàng.",
        "Danh là màu vàng; Nghĩa là khả năng chứa nước; Ví dụ là mọi vật có màu vàng được đặt trên bàn.",
        "Danh là chiếc bình vàng; Nghĩa là các đặc điểm xác định bình; Ví dụ là chiếc bình cụ thể có đủ đặc điểm ấy.",
        "Danh là chiếc bình cụ thể; Nghĩa là tên chiếc bình vàng; Ví dụ là định nghĩa không cần bất kỳ vật thật nào minh họa."
      ],
      "correctAnswerIndex": 2,
      "explanation": "“Chiếc bình vàng” là Danh. Những đặc điểm như có đáy, bụng tròn và có khả năng chứa nước là Nghĩa; một chiếc bình vàng cụ thể có đầy đủ các đặc điểm ấy là Ví dụ.",
      "hint": "Đừng hoán đổi tên gọi, các đặc điểm xác định và vật cụ thể có những đặc điểm đó.",
      "memory": "Tên chiếc bình là Danh; đặc điểm là Nghĩa; bình cụ thể là Ví dụ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_12",
      "text": "Câu “được làm ra có trên âm thanh” phải được hiểu theo cách nào?",
      "options": [
        "“Được làm ra” là một thuộc tính hiện hữu nơi âm thanh, nghĩa là âm thanh là pháp được tạo tác.",
        "Một vật được làm ra nằm cao hơn âm thanh về vị trí và tách rời khỏi nguồn phát âm như hai pháp có vị trí riêng.",
        "Âm thanh là tên gọi của vật nằm phía trên, còn “được làm ra” là Ví dụ của vật ấy.",
        "Mọi vật được làm ra đều là âm thanh vì cùng có thuộc tính xuất hiện rồi chấm dứt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Có trên” không có nghĩa là một vật nằm phía trên âm thanh. Câu này nói thuộc tính “được làm ra” hiện hữu nơi âm thanh, hay âm thanh là một pháp được tạo tác.",
      "hint": "“Có trên” ở đây nói đến đặc tính hiện hữu nơi đối tượng, không nói đến vị trí vật lý.",
      "memory": "“Có trên” chỉ thuộc tính hiện hữu nơi đối tượng, không phải vị trí ở phía trên.",
      "difficulty": "Dễ"
    },
    {
      "id": "w15_13",
      "text": "Một người Việt nghe từ ka ba nhưng không biết tiếng Tạng nên chưa nhận ra chức năng chống đỡ của cây cột. Trường hợp này làm rõ điều gì?",
      "options": [
        "Nghe được âm thanh của từ đã đủ để biến từ ấy thành Nghĩa và Ví dụ đối với người nghe.",
        "Ka ba chỉ có thể là Danh đối với người Tạng, còn với người Việt thì không thể là Danh.",
        "Định nghĩa của cây cột thay đổi theo quốc tịch của người nghe nên không có đặc tính xác định.",
        "Đối với người chưa hiểu ngôn ngữ, từ ấy mới là Danh được nghe, chưa được hiểu như Nghĩa."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Người nghe đã tiếp xúc với một thuật ngữ nhưng chưa hiểu nội dung chống đỡ đòn dông hoặc mái nhà. Vì vậy, từ ấy mới hoạt động như Danh đối với người đó, chưa được hiểu như Nghĩa.",
      "hint": "Phân biệt nghe được một tên gọi với hiểu được đặc điểm mà tên gọi ấy biểu thị.",
      "memory": "Nghe được Danh không đồng nghĩa với hiểu được Nghĩa.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_14",
      "text": "Xét bốn nhận định về tên gọi trong các ngôn ngữ: (1) Một đối tượng có thể có nhiều Danh. (2) Biết từ “mi” không đồng nghĩa với biết từ “human”. (3) “Mi”, “human” và “con người” có thể là những Danh khác nhau nhưng cùng hướng đến Nghĩa và Ví dụ của con người. (4) Khi đã hiểu Nghĩa của “con người” bằng tiếng Việt, người học nhất thiết nhận biết được mọi Danh chỉ con người trong các ngôn ngữ khác. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (1), (2) và (3).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (3) phù hợp với bài. Một đối tượng có thể có nhiều Danh trong các ngôn ngữ khác nhau; “mi”, “human” và “con người” có thể cùng hướng đến Nghĩa và Ví dụ của con người. Nhận định (4) sai vì hiểu Nghĩa hoặc biết một Danh không nhất thiết kéo theo việc nhận biết mọi Danh của đối tượng ấy trong những ngôn ngữ khác.",
      "hint": "Phân biệt việc hiểu một đối tượng với việc biết tất cả những Danh được dùng để gọi đối tượng ấy.",
      "memory": "Một đối tượng có thể có nhiều Danh; biết một Danh không đồng nghĩa với biết mọi Danh của đối tượng ấy.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_15",
      "text": "Sức nóng và khả năng đốt cháy được dùng để làm rõ điều gì trong việc nhận biết lửa?",
      "options": [
        "Đó là hai Ví dụ riêng biệt, mỗi Ví dụ thay thế cho một ngọn lửa cụ thể.",
        "Đó là hai Danh khác nhau của lửa, chỉ khác nhau theo ngôn ngữ người sử dụng.",
        "Đó là những thuộc tính làm Nghĩa, giúp xác định đối tượng mang Danh là lửa.",
        "Đó là những đặc tính chung của mọi pháp vô vi nên không thể phân biệt lửa với pháp khác."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Sức nóng và khả năng đốt cháy là những thuộc tính được dùng để định nghĩa lửa. Chúng giúp nhận biết đối tượng mà Danh “lửa” biểu thị, không phải hai tên gọi hay hai Ví dụ thay thế ngọn lửa.",
      "hint": "Định nghĩa có thể được trình bày thông qua các thuộc tính đặc trưng của một pháp.",
      "memory": "Thuộc tính đặc trưng có thể làm Nghĩa giúp xác định một pháp.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_16",
      "text": "Cách phân biệt nào đúng giữa định nghĩa riêng và định nghĩa chung trong các ví dụ của bài?",
      "options": [
        "Chứa nước và chống đỡ là định nghĩa riêng; vô thường là đặc tính chung của cái bình và cây cột; biết nói và hiểu ý nghĩa là định nghĩa chung của con người.",
        "Chứa nước là định nghĩa chung của mọi vật; chống đỡ là định nghĩa chung của mọi pháp vô thường; biết nói và hiểu ý nghĩa là định nghĩa riêng của người Việt trong từng sát-na.",
        "Vô thường là định nghĩa riêng của cái bình; khả năng chứa nước và chống đỡ là định nghĩa chung của cái bình với cây cột.",
        "Mọi định nghĩa đều là định nghĩa riêng vì mỗi tên gọi chỉ có thể dùng trong một ngôn ngữ và cho một cá thể."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Khả năng chứa nước là định nghĩa riêng của cái bình, còn chức năng chống đỡ là định nghĩa riêng của cây cột. Vô thường là đặc tính chung của cả hai; biết nói và hiểu ý nghĩa là định nghĩa chung của con người, không chỉ riêng một quốc gia.",
      "hint": "Định nghĩa riêng phân biệt từng đối tượng; định nghĩa chung có thể cùng hiện hữu ở nhiều đối tượng.",
      "memory": "Định nghĩa riêng phân biệt từng pháp; định nghĩa chung bao quát nhiều pháp.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_17",
      "text": "Ghép ba nội dung sau với Danh và Nghĩa: (i) Đầy đủ sự gán đặt của ba pháp. (ii) Đầy đủ tính chất thực hữu ba pháp. (iii) Phải phù hợp với chính đối tượng được gọi và có Ví dụ minh họa tương ứng. Cách ghép nào đúng?",
      "options": [
        "(i) Danh; (ii) Nghĩa; (iii) yêu cầu chung của cả Danh và Nghĩa.",
        "(i) Nghĩa; (ii) Danh; (iii) yêu cầu riêng của Danh.",
        "(i) Danh; (ii) Nghĩa; (iii) yêu cầu riêng của Nghĩa.",
        "(i) Nghĩa; (ii) Ví dụ; (iii) yêu cầu chung của Danh và Nghĩa."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Danh được định nghĩa là đầy đủ sự gán đặt của ba pháp, còn Nghĩa phải đầy đủ tính chất thực hữu ba pháp. Dù có vai trò khác nhau, Danh và Nghĩa đều phải tương ứng với chính đối tượng được gọi và có Ví dụ minh họa phù hợp.",
      "hint": "Phân biệt phần gán đặt tên gọi với phần trình bày định nghĩa của đối tượng.",
      "memory": "Danh thuộc sự gán đặt; Nghĩa thuộc định nghĩa; cả hai phải tương xứng với Ví dụ.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_18",
      "text": "Xét bốn nhận định về tám cửa biến khắp: (1) không là cái bình thì không là định nghĩa của cái bình; (2) không là định nghĩa của cái bình thì không là cái bình; (3) có cái bình thì có định nghĩa của cái bình; (4) không có cái bình vẫn có thể có định nghĩa của cái bình. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (2), (3) và (4).",
        "Chỉ (1), (2) và (3).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các nhận định (1), (2) và (3) phù hợp với tám cửa biến khắp. Nhận định (4) sai vì nếu không có cái bình thì nhất thiết không có định nghĩa của cái bình; Danh và Nghĩa phải tương ứng cả về sự hiện hữu.",
      "hint": "Đối chiếu cả quan hệ “không là”, “có” và “không có” giữa hai bên.",
      "memory": "Tám cửa kiểm tra sự bao khắp hai chiều theo là, không là, có và không có.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_19",
      "text": "Một học viên chấp nhận rằng có cái bình thì có định nghĩa của cái bình, nhưng vẫn cho phép định nghĩa của cái bình tồn tại khi hoàn toàn không có cái bình. Phần nào của tám cửa chưa được giữ đúng?",
      "options": [
        "Hai nhất thiết là, vì học viên đã phủ nhận cả hai chiều của quan hệ “là”.",
        "Hai nhất thiết không có, vì sự vắng mặt của cái bình và định nghĩa cũng phải bao khắp theo hai chiều.",
        "Hai nhất thiết không là, vì học viên đang đồng nhất quan hệ “có” với quan hệ “không là” và bỏ qua chiều của định nghĩa.",
        "Hai nhất thiết có, vì chỉ chiều từ định nghĩa đến cái bình mới thuộc quan hệ “không có”."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Học viên chưa giữ đúng quan hệ “không có”: không có cái bình thì không có định nghĩa của cái bình, và không có định nghĩa thì không có cái bình. Việc chấp nhận một chiều của quan hệ “có” chưa đủ thay thế cho hai chiều “không có”.",
      "hint": "Tình huống không nằm ở quan hệ “là”, mà ở điều phải xảy ra khi một trong hai bên không hiện hữu.",
      "memory": "Không có một bên thì nhất thiết không có bên tương ứng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w15_20",
      "text": "Ghép lần lượt ba trường hợp sau với ba lỗi định nghĩa: (1) Dùng đặc điểm “biết nói và hiểu ý nghĩa” để định nghĩa riêng người Việt, trong khi người Tạng và người Ấn cũng có đặc điểm ấy. (2) Dùng đặc điểm “biết nói và hiểu ý nghĩa” để định nghĩa chung cho tất cả hữu tình, gồm chư Thiên, loài người và loài vật. (3) Dùng con bò làm Ví dụ cho loài “biết nói và hiểu ý nghĩa”. Cách ghép nào đúng?",
      "options": [
        "(1) Quá rộng; (2) quá hẹp; (3) không thể xảy ra hoặc không thể minh họa.",
        "(1) Quá hẹp; (2) quá rộng; (3) không thể xảy ra hoặc không thể minh họa.",
        "(1) Không thể minh họa; (2) quá hẹp; (3) quá rộng.",
        "(1) Quá rộng; (2) không thể minh họa; (3) quá hẹp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Trường hợp (1) phạm lỗi quá rộng vì “biết nói và hiểu ý nghĩa” không chỉ có ở người Việt mà còn có ở người Tạng, người Ấn và những người khác. Trường hợp (2) phạm lỗi quá hẹp vì đặc điểm này không bao quát tất cả hữu tình; những loài vật như con bò không có khả năng ấy. Trường hợp (3) thuộc lỗi không thể xảy ra hoặc không thể minh họa vì con bò không có đặc điểm mà định nghĩa yêu cầu.",
      "hint": "Xét lần lượt trường hợp định nghĩa vượt ra ngoài tên gọi, không bao quát hết tên gọi và Ví dụ không có đặc điểm được nêu.",
      "memory": "Định nghĩa đúng không quá rộng, không quá hẹp và phải có Ví dụ phù hợp; Danh và Nghĩa phải cân xứng với nhau.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_21",
      "text": "Dùng đặc điểm “biết nói và hiểu ý nghĩa” làm định nghĩa riêng cho người Việt phạm lỗi nào?",
      "options": [
        "Định nghĩa quá hẹp vì đặc điểm ấy không thể áp dụng cho bất kỳ người Việt nào.",
        "Ví dụ không thể minh họa vì không thể đưa ra một người Việt cụ thể làm Ví dụ.",
        "Định nghĩa không tương ứng vì đặc điểm ấy chỉ dùng để định nghĩa cây cột, cái bình và mọi vật vô tri.",
        "Định nghĩa quá rộng vì đặc điểm ấy còn áp dụng cho người Tạng, người Ấn và những người khác."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Biết nói và hiểu ý nghĩa” là đặc điểm chung của con người, không chỉ riêng người Việt. Dùng đặc điểm ấy làm định nghĩa riêng cho người Việt khiến phạm vi định nghĩa rộng hơn tên gọi cần xác định.",
      "hint": "Xét xem đặc điểm được nêu có vượt ra ngoài phạm vi riêng của người Việt hay không.",
      "memory": "Định nghĩa quá rộng bao gồm cả những trường hợp nằm ngoài tên gọi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_22",
      "text": "Dùng đặc điểm “biết nói và hiểu ý nghĩa” làm định nghĩa chung cho tất cả hữu tình phạm lỗi nào?",
      "options": [
        "Quá rộng vì đặc điểm ấy bao gồm mọi vật vô tri như cái bình và cây cột.",
        "Quá hẹp vì định nghĩa không bao quát những hữu tình như con bò không có khả năng ấy.",
        "Ví dụ không thể xảy ra vì không có loài người nào biết nói và hiểu ý nghĩa.",
        "Không phạm lỗi vì mọi hữu tình, từ chư Thiên đến loài vật, đều có khả năng nói và hiểu ý nghĩa như con người."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tất cả hữu tình gồm chư Thiên, loài người và loài vật; không phải mọi loài đều biết nói và hiểu ý nghĩa như con người. Vì vậy, định nghĩa không bao quát hết phạm vi của tên gọi và mắc lỗi quá hẹp.",
      "hint": "Kiểm tra xem định nghĩa có bao quát đầy đủ mọi nhóm hữu tình mà tên gọi muốn chỉ hay không.",
      "memory": "Định nghĩa quá hẹp bỏ sót những trường hợp thuộc phạm vi tên gọi.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_23",
      "text": "Dùng con bò làm Ví dụ cho “loài biết nói và hiểu ý nghĩa” mắc lỗi gì?",
      "options": [
        "Định nghĩa quá rộng vì con bò đồng thời bao gồm người Việt, người Tạng và người Ấn.",
        "Định nghĩa quá hẹp vì con bò chỉ minh họa được một phần trong các pháp vô thường.",
        "Ví dụ không thể minh họa vì con bò không có đặc điểm mà định nghĩa yêu cầu.",
        "Không mắc lỗi vì bất kỳ hữu tình nào cũng có thể minh họa cho định nghĩa về con người."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Con bò không có khả năng biết nói và hiểu ý nghĩa theo định nghĩa được nêu. Vì vậy, con bò không thể làm Ví dụ minh họa cho định nghĩa ấy; đây là lỗi không thể xảy ra hoặc không thể minh họa.",
      "hint": "Đối chiếu trực tiếp đặc điểm trong định nghĩa với trường hợp được chọn làm Ví dụ.",
      "memory": "Ví dụ phải thật sự có những đặc điểm mà định nghĩa nêu ra.",
      "difficulty": "Dễ"
    },
    {
      "id": "w15_24",
      "text": "Nguyên tắc nào giúp một định nghĩa tránh đồng thời lỗi quá rộng, quá hẹp và không thể minh họa?",
      "options": [
        "Danh và Nghĩa phải cân xứng; định nghĩa bao quát đúng phạm vi tên gọi và Ví dụ phải có các đặc điểm đã nêu.",
        "Định nghĩa nên dùng càng nhiều đặc điểm càng tốt, dù một số đặc điểm không liên hệ đến tên gọi.",
        "Chỉ cần chọn Ví dụ quen thuộc; phạm vi của định nghĩa có rộng hoặc hẹp hơn Danh cũng không ảnh hưởng.",
        "Một tên gọi chỉ cần có một định nghĩa trong tiếng mẹ đẻ; không cần kiểm tra đối tượng hoặc Ví dụ cụ thể trong ngôn ngữ khác."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Định nghĩa đúng phải cân xứng với Danh: không bao gồm trường hợp ngoài phạm vi và cũng không bỏ sót trường hợp thuộc phạm vi. Đồng thời, Ví dụ phải thật sự có các đặc điểm đã được dùng để định nghĩa.",
      "hint": "Kiểm tra cả phạm vi của định nghĩa lẫn việc trường hợp cụ thể có thật sự mang các đặc điểm ấy.",
      "memory": "Định nghĩa đúng phải vừa đủ phạm vi và có Ví dụ minh họa tương ứng.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_25",
      "text": "Theo định nghĩa được dẫn trong bài, khi nào một pháp được gọi là Một?",
      "options": [
        "Khi pháp ấy có nhiều thuộc tính nhưng tất cả thuộc tính đều cùng một chất thể với nó.",
        "Khi pháp ấy và một khái niệm khác cùng được xác lập trên một cá thể cụ thể.",
        "Khi hai pháp cùng một bản thể dù vẫn hiển hiện thành hai nội dung riêng trong tư duy.",
        "Khi tư duy về pháp ấy, không hiển lộ sự riêng biệt hay một đối tượng khác thứ hai."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Một được định nghĩa là pháp không riêng biệt, nghĩa là không khác. Khi tư duy về đối tượng ấy, tâm chỉ hiện một thể đồng nhất, không hiển lộ cái này khác cái kia hay một đối tượng thứ hai.",
      "hint": "Tiêu chí nằm ở việc sự khác biệt có hiển lộ trong tư duy về đối tượng hay không.",
      "memory": "Một là không hiển lộ sự riêng biệt khi tư duy về đối tượng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_26",
      "text": "Vì sao “một nửa” của quả táo sau khi cắt vẫn không tạo thành phạm trù thứ ba ngoài Một và Khác?",
      "options": [
        "Vì hai nửa vẫn hoàn toàn đồng nhất với quả táo trước khi cắt và không thể được phân biệt.",
        "Vì mỗi nửa tự thân vẫn là một cá thể; bất kỳ pháp tồn tại nào cũng thuộc Một hoặc Khác.",
        "Vì chữ “một” trong tên gọi tự động làm mọi phần của một vật trở thành cùng một bản thể.",
        "Vì một nửa không phải pháp tồn tại nên không cần được đặt trong bất kỳ phạm trù nào."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Sau khi quả táo được cắt, mỗi nửa tự thân vẫn là một cá thể. Vì mọi pháp tồn tại hoặc là Một hoặc là Khác, “một nửa” không tạo ra một phạm trù trung gian thứ ba.",
      "hint": "Xét bản thân mỗi phần sau khi được tách ra, không chỉ xét tên gọi “một nửa”.",
      "memory": "Một nửa vẫn là một cá thể và vẫn thuộc phạm trù Một hoặc Khác.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w15_27",
      "text": "Nhận định nào KHÔNG PHÙ HỢP khi phân biệt Một với cùng một bản thể và cùng một chất thể?",
      "options": [
        "Muốn nói hai pháp cùng một bản thể thì trước hết phải có hai đối tượng hoặc hai khái niệm được phân biệt.",
        "Hai mặt cùng một chất thể vẫn có thể hiển hiện thành hai nội dung riêng, nên không nhất thiết là Một.",
        "Hễ hai khái niệm cùng một bản thể thì chúng không còn hiển hiện riêng biệt và phải được gọi là Một.",
        "Chữ “một” trong các cụm cùng một bản thể và cùng một chất thể không tự động mang nghĩa của phạm trù Một."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không phù hợp. Khi nói hai khái niệm cùng một bản thể, hai khái niệm ấy vẫn được phân biệt nên không phải là Một theo định nghĩa không hiển lộ sự riêng biệt. Tương tự, cùng một chất thể cũng không tự động là Một.",
      "hint": "Đây là câu phủ định; tìm phương án đã đồng nhất hai khái niệm mà bài yêu cầu phân biệt.",
      "memory": "Cùng một bản thể hoặc cùng một chất thể không đồng nghĩa với Một.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_28",
      "text": "Vì sao cả hai khẳng định đơn giản “ngã là Một với ngũ uẩn” và “ngã là Khác với ngũ uẩn” đều không ổn?",
      "options": [
        "Vì ngã và ngũ uẩn đều là pháp vô vi nên không thể đặt trong phạm trù Một và Khác.",
        "Vì ngũ uẩn chỉ là tên gọi, còn ngã là một Sắc pháp thường hằng hoàn toàn độc lập.",
        "Nếu là Một thì ngã đồng nhất với các uẩn sinh diệt; nếu là Khác thì ngã và ngũ uẩn không còn liên quan.",
        "Vì ngã vừa đồng nhất hoàn toàn vừa tách rời hoàn toàn ngũ uẩn trong cùng một phương diện, cùng thời điểm và không cần xét hệ quả của hai khẳng định."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nếu ngã hoàn toàn là Một với ngũ uẩn thì ngã phải đồng nhất với các uẩn luôn sinh diệt. Nếu ngã hoàn toàn Khác với ngũ uẩn thì hai bên không còn liên quan. Bài dùng hai hệ quả này để cho thấy cả hai khẳng định đơn giản đều không ổn.",
      "hint": "Kiểm tra hệ quả của việc đồng nhất hoàn toàn và hệ quả của việc tách rời hoàn toàn.",
      "memory": "Đồng nhất hoàn toàn và tách rời hoàn toàn đều không giải thích đúng quan hệ ngã–ngũ uẩn.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w15_29",
      "text": "“Người Việt Nam” là cái riêng và “con người” là cái chung. Vì sao hai khái niệm được nói là cùng một bản thể nhưng không phải là Một?",
      "options": [
        "Vì hai khái niệm thuộc hai chất thể riêng, không thể cùng được xác lập trên một người cụ thể.",
        "Vì cái chung chỉ là tên gọi, còn cái riêng luôn là một pháp vô vi không có quan hệ với tên gọi.",
        "Vì hai khái niệm cùng một chất thể như vị ngọt và khối đường, nên không cần xét sự hiển hiện riêng biệt trong tư duy.",
        "Vì chúng có thể cùng được xác lập trên một cá thể, nhưng vẫn hiển hiện thành hai khái niệm chung và riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Một người Việt Nam đồng thời là con người, nên hai khái niệm cùng một bản thể trên cá thể ấy. Tuy nhiên, “người Việt Nam” và “con người” vẫn hiển hiện thành hai khái niệm riêng, nên không phải là Một.",
      "hint": "Cùng một bản thể không xóa mất sự phân biệt giữa khái niệm cái chung và khái niệm cái riêng.",
      "memory": "Cùng một bản thể vẫn có thể là hai khái niệm, nên không phải là Một.",
      "difficulty": "Khó"
    },
    {
      "id": "w15_30",
      "text": "Xét bốn nhận định: (1) vị ngọt cùng một chất thể với khối đường nhưng không phải là Một với khối đường; (2) mùi của cái bình cùng một chất thể với cái bình nhưng không phải chính cái bình; (3) “người Việt Nam” và “con người” có thể cùng một bản thể nhưng không phải là Một; (4) cùng một bản thể và cùng một chất thể đều có nghĩa là không hiển hiện bất kỳ sự riêng biệt nào. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (1), (2) và (3).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (3) đúng theo các ví dụ trong bài. Nhận định (4) sai vì cùng một bản thể và cùng một chất thể vẫn giả định có hai khái niệm hoặc hai mặt được phân biệt; do đó không đồng nghĩa với Một.",
      "hint": "Phân biệt sự cùng chung bản thể hoặc chất thể với tiêu chí không hiển lộ sự riêng biệt của Một.",
      "memory": "Một, cùng một bản thể và cùng một chất thể là ba cách phân tích khác nhau.",
      "difficulty": "Nâng cao"
    }
  ],
  "week16": [
    {
      "id": "w16_1",
      "text": "Theo quan điểm của các nhà luận lý học Phật giáo trong bài, trường hợp nào được gọi là Một?",
      "options": [
        "Hai pháp không hiện ra riêng biệt và không thể phân chia ra được.",
        "Hai pháp có tên gọi khác nhau nhưng cùng được nhận biết trong một lúc.",
        "Hai pháp hiện ra riêng biệt và có thể phân chia rõ ràng trong tư duy.",
        "Hai pháp cùng sinh, trụ và diệt nhưng có chất thể hoàn toàn riêng biệt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Theo quan điểm của các nhà luận lý học Phật giáo, nếu hai pháp không hiện ra riêng biệt và không thể phân chia ra được thì gọi là Một. Việc cùng tên, cùng thời gian hoặc cùng một chất thể chưa tự nó quyết định quan hệ Một. Tiêu chí chính là cách các pháp hiển hiện trong âm thanh, nội dung được diễn đạt và tư duy phân biệt.",
      "hint": "Hãy xét hai pháp có hiển hiện thành hai nội dung riêng trong tư duy phân biệt hay không.",
      "memory": "Một là không hiện ra riêng biệt và không thể phân chia trong tư duy phân biệt.",
      "difficulty": "Dễ"
    },
    {
      "id": "w16_2",
      "text": "Theo bài học, dấu hiệu nào xác định hai pháp là Khác?",
      "options": [
        "Chúng cùng thuộc pháp hữu vi và đều có thể được nhận thức trực tiếp một cách rõ ràng.",
        "Chúng không thể tách thành hai vật dù có hai tên gọi riêng.",
        "Chúng hiện ra riêng biệt và có thể phân chia ra được trong tư duy.",
        "Chúng cùng hình thành, tồn tại và hoại diệt trong một thời gian."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hai pháp được gọi là Khác khi chúng hiện ra riêng biệt và có thể phân chia ra được trong tư duy phân biệt. Cùng là pháp hữu vi, cùng thời gian tồn tại hoặc có hai tên gọi chưa đủ để kết luận. Bài nhấn mạnh cách trình hiện trước nhận thức, vì vậy có trường hợp cùng một chất thể nhưng vẫn được phân biệt là Khác.",
      "hint": "Đối chiếu trực tiếp với tiêu chí hiển hiện riêng biệt được nêu ở phần đầu của bài.",
      "memory": "Khác là hiện ra riêng biệt và có thể phân chia rõ ràng trong tư duy phân biệt.",
      "difficulty": "Dễ"
    },
    {
      "id": "w16_3",
      "text": "Cách phân loại nào đúng theo hai ví dụ về tên chị Hải và bì thư với túi sô-cô-la?",
      "options": [
        "Cả hai trường hợp đều là Một vì đều có thể được gọi bằng ngôn từ.",
        "Tên chị Hải là Một; bì thư và túi sô-cô-la là Khác.",
        "Tên chị Hải là Khác; bì thư và túi sô-cô-la là Một.",
        "Cả hai trường hợp đều là Khác vì đều có nhiều âm tiết được phát ra."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Khi gọi tên chị Hải, trong tư duy phân biệt chỉ hiển hiện duy nhất người mang tên đó, nên được gọi là Một. Bì thư và túi sô-cô-la lại hiện ra như hai đối tượng riêng biệt, có thể phân chia, nên là Khác. Số từ hoặc số âm tiết không phải tiêu chí quyết định trong hai ví dụ này.",
      "hint": "So sánh số nội dung hiển hiện khi gọi một người với số vật hiển hiện trong ví dụ còn lại.",
      "memory": "Tên chị Hải hiển hiện một người; bì thư và túi sô-cô-la hiển hiện hai vật.",
      "difficulty": "Dễ"
    },
    {
      "id": "w16_4",
      "text": "Cặp nào được bài học xác định là một chất thể?",
      "options": [
        "Bì thư và túi sô-cô-la vì đều là những vật có thể nhìn thấy.",
        "Con chó và con ngựa vì cả hai đều thuộc về loài vật.",
        "Hạt lúa và mầm lúa vì mầm lúa được sinh ra từ hạt lúa.",
        "Con người và hữu tình vì không thể tách thành hai phần riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Thuộc tính con người và thuộc tính hữu tình cùng hiện hữu nơi một cá thể; không thể tìm một phần là con người và một phần khác là hữu tình, nên chúng là một chất thể. Bì thư với túi sô-cô-la và con chó với con ngựa là các vật riêng. Hạt lúa với mầm lúa chỉ thuộc một loại chất thể.",
      "hint": "Hãy tìm cặp có hai thuộc tính cùng hiện hữu nơi một cá thể và không thể tách rời.",
      "memory": "Con người và hữu tình không thể tách rời nên được gọi là một chất thể.",
      "difficulty": "Dễ"
    },
    {
      "id": "w16_5",
      "text": "Cách dùng “một chất thể” và “một bản thể” nào đúng theo bài?",
      "options": [
        "Một chất thể dùng với pháp vô vi hoặc khái niệm trừu tượng; một bản thể chỉ dùng với vật chất hữu vi.",
        "Một chất thể dùng với pháp hữu vi; một bản thể dùng với pháp vô vi hoặc khái niệm trừu tượng.",
        "Hai thuật ngữ hoàn toàn đồng nghĩa và có thể thay thế trong mọi trường hợp.",
        "Một chất thể dùng cho âm thanh; một bản thể dùng riêng cho tư duy phân biệt."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài dùng “một chất thể” đối với pháp hữu vi và những đối tượng vật chất; “một bản thể” dùng đối với pháp vô vi hoặc các khái niệm trừu tượng. Vì phạm vi khác nhau, hai thuật ngữ không thể tùy ý thay thế. Chẳng hạn, không thể nói hư không là một chất thể hay khác chất thể.",
      "hint": "Đặt pháp hữu vi, vật chất ở một phía và pháp vô vi, trừu tượng ở phía kia.",
      "memory": "Chất thể dùng cho pháp hữu vi; bản thể dùng cho pháp vô vi hoặc trừu tượng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w16_6",
      "text": "Vì sao bình vàng và chất vàng của bình được phân biệt là Khác dù không phải hai chất tách rời?",
      "options": [
        "Vì cái bình được nhận biết trước, chất vàng được nhận biết sau và có hai sự hiển hiện.",
        "Vì chất vàng chỉ xuất hiện sau khi cái bình đã hoàn toàn hoại diệt.",
        "Vì bình vàng là pháp thường hằng còn chất vàng là pháp vô thường.",
        "Vì mọi vật có hai tên gọi đều nhất định là hai chất thể riêng biệt trong tư duy phân biệt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ta có thể nhận biết cái bình trước mà chưa biết nó làm bằng vàng; sau đó mới nhận ra chất liệu là vàng. Do có hai sự hiển hiện khác nhau trong tư duy phân biệt, bình vàng và chất vàng là Khác, dù không phải hai chất tách rời. Ví dụ này cho thấy cùng một chất thể không nhất thiết là Một.",
      "hint": "Hãy chú ý thứ tự nhận biết cái bình và chất liệu của bình trong tư duy phân biệt.",
      "memory": "Bình vàng và chất vàng là Khác do hai sự hiển hiện, dù không tách thành hai chất.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_7",
      "text": "Qua tiến trình nhận diện Sư Cô từ xa, kết luận nào phù hợp nhất với bài?",
      "options": [
        "Mỗi mức nhận diện chỉ một cá thể khác, nên các mức đều khác chất thể.",
        "Chỉ hữu tình và con người là một chất thể; các mức nhận diện còn lại không liên hệ theo khoảng cách.",
        "Mọi mức nhận diện đều là Một vì cuối cùng cùng biết tên Tenzin Yangchen.",
        "Hữu tình, con người, Sư Cô và Tenzin Yangchen cùng một chất thể nhưng hiện ra riêng trong tư duy."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hữu tình, con người, Sư Cô, người Việt Nam và Tenzin Yangchen cùng chỉ một người, không thể tách thành nhiều cá thể, nên cùng một chất thể. Tuy nhiên, từng cách nhận diện xuất hiện riêng biệt theo khoảng cách và mức độ quan sát. Vì vậy, cùng một chất thể không nhất thiết là Một trong nhận thức.",
      "hint": "Một người không biến thành nhiều cá thể, nhưng các nội dung nhận diện có xuất hiện cùng lúc hay không?",
      "memory": "Nhiều mức nhận diện Sư Cô cùng một chất thể nhưng hiện ra riêng trong tư duy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_8",
      "text": "Vì sao cá thể và cơ thể không được xem là Một trong tư duy khái niệm?",
      "options": [
        "Vì cá thể luôn là pháp vô vi còn cơ thể luôn là pháp thường hằng.",
        "Vì cá thể và cơ thể là hai người hoàn toàn không liên quan với nhau.",
        "Vì “tôi” là chủ thể, còn “cái của tôi” hiện ra như những gì thuộc về chủ thể.",
        "Vì cơ thể không bao gồm tay, chân hoặc bất kỳ bộ phận nào thuộc về cá thể đó."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cá thể hay Bổ-đặc-già-la là chủ thể, tương ứng với “tôi”; cơ thể, tay chân và các bộ phận thuộc về chủ thể là “cái của tôi”. Trong tư duy khái niệm, hai nội dung ấy hiện ra khác nhau nên không phải là Một. Bài không nói cá thể là pháp vô vi hoặc cơ thể tách thành một người khác.",
      "hint": "Hãy phân biệt chủ thể với những bộ phận được nhận là thuộc về chủ thể ấy.",
      "memory": "“Tôi” là chủ thể; cơ thể là “cái của tôi”, nên hai nội dung hiện ra khác nhau.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_9",
      "text": "Cách phân loại nào đúng đối với ka wa và bum pa trong phần âm thanh?",
      "options": [
        "Ka wa có hai âm tiết nhưng một nội dung; ka wa và bum pa diễn đạt hai nội dung khác nhau.",
        "Ka wa luôn diễn đạt hai cây cột; bum pa chỉ là âm thanh không mang nội dung.",
        "Ka wa và bum pa là Một vì cả hai đều được phát ra bằng âm thanh.",
        "Ka wa là Khác chỉ vì có hai âm tiết, còn bum pa là Một vì chỉ có một nghĩa."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ka wa gồm hai âm tiết ka và wa nhưng chỉ diễn đạt một nội dung là trụ cột, nên nội dung hiển hiện là Một. Ka wa và bum pa lần lượt diễn đạt trụ cột và cái bình, tức hai nội dung khác nhau, nên là Khác. Số âm tiết tự nó không quyết định quan hệ Một hay Khác.",
      "hint": "Đừng chỉ đếm âm tiết; hãy xét số nội dung được diễn đạt bởi từng âm thanh.",
      "memory": "Âm tiết có thể nhiều nhưng nội dung vẫn Một; nội dung khác nhau thì là Khác.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_10",
      "text": "Từ khyed rang có hai âm tiết nhưng nội dung chỉ một đối tượng là “bạn”. Điều này minh họa nguyên tắc nào?",
      "options": [
        "Hai âm tiết luôn tạo thành hai đối tượng khác chất thể trong tư duy.",
        "Một nội dung chỉ được xác lập khi âm thanh có đúng một âm tiết.",
        "Mọi từ chỉ người đều là một bản thể vì con người là khái niệm trừu tượng.",
        "Số âm tiết không quyết định số đối tượng hiển hiện trong nội dung được diễn đạt."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Khyed rang có hai âm tiết nhưng khi âm thanh được phát ra, ý nghĩa hiện lên trong tư duy chỉ là một đối tượng: “bạn”. Vì vậy, không thể dựa đơn thuần vào số âm tiết để xác định Một hay Khác. Cần xét nội dung được diễn đạt và cách nội dung ấy hiển hiện trong tư duy phân biệt.",
      "hint": "So sánh cấu tạo của âm thanh với số đối tượng thực sự hiện lên trong tư duy.",
      "memory": "Hai âm tiết khyed rang vẫn chỉ làm hiển hiện một đối tượng là “bạn”.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_11",
      "text": "Phát biểu nào đúng về “được làm ra” và “vô thường”?",
      "options": [
        "Chúng là Khác vì một pháp được làm ra vẫn có thể hoàn toàn thường hằng cho đến khi hoại diệt.",
        "Chúng khác chất thể vì mỗi nội dung cần một đối tượng vật chất riêng biệt.",
        "Chúng là Một, nhưng biết pháp được làm ra chưa nhất thiết là hiểu đầy đủ tính vô thường.",
        "Chúng chỉ là Một khi người học đồng thời gọi được chính xác cả hai tên."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Pháp nào được làm ra thì nhất định là vô thường, và pháp nào vô thường thì nhất định là được làm ra; không thể tách chúng thành hai vật riêng nên là Một. Tuy nhiên, nhận biết một pháp được làm ra chưa nhất thiết đồng nghĩa đã nhận biết đầy đủ tính vô thường, vì vô thường là nội dung khó nhận biết hơn.",
      "hint": "Phân biệt quan hệ giữa hai pháp với mức độ nhận biết trọn vẹn của người học.",
      "memory": "Được làm ra và vô thường là Một, nhưng mức độ nhận biết hai nội dung có thể khác.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_12",
      "text": "Cách phân loại nào đúng đối với các ví dụ về hư không?",
      "options": [
        "Hư không và thường hằng là một chất thể; hư không Nam Bắc cũng một chất thể và không thể phân chia.",
        "Hư không và thường hằng là một bản thể; hư không hướng Nam và hướng Bắc khác bản thể.",
        "Hư không và thường hằng khác chất thể; không thể xét hư không theo bản thể.",
        "Hư không và thường hằng khác bản thể; hư không Nam Bắc là một bản thể."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Hư không là pháp vô vi và thường hằng, nên hư không với thường hằng là một bản thể. Hư không ở hướng Nam và hư không ở hướng Bắc lại được nêu là khác bản thể. Không thể gọi hư không là một chất thể hay khác chất thể vì khái niệm chất thể chỉ dùng đối với pháp hữu vi.",
      "hint": "Hư không là pháp vô vi; sau đó xét riêng hai phương hướng được nêu trong bài.",
      "memory": "Hư không với thường hằng một bản thể; hư không Nam và Bắc khác bản thể.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_13",
      "text": "“Cái bình hôm nay” và “cái bình” được phân loại như thế nào?",
      "options": [
        "Là một chất thể mà không thể phân thành trụ vì luôn hiện hữu cùng thời gian ở mọi thời điểm của nó.",
        "Là khác chất thể vì cụm “hôm nay” tạo ra một vật thể hoàn toàn khác.",
        "Là một bản thể vì cả hai chỉ là những khái niệm trừu tượng trong tư duy.",
        "Là một chất thể nhưng không phải một chất thể thành trụ vì không đồng thời sinh, diệt và trụ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Cái bình hôm nay” và “cái bình” không phải hai vật tách biệt nên là một chất thể. Tuy nhiên, phạm vi thời gian của “cái bình” rộng hơn hôm nay; chúng không đồng thời sinh, diệt và trụ. Vì thế, một chất thể không nhất định là một chất thể thành trụ, đúng như ví dụ của bài.",
      "hint": "Kiểm tra lần lượt điều kiện một chất thể và điều kiện đồng thời sinh, diệt, trụ.",
      "memory": "Một chất thể chưa đủ thành một chất thể thành trụ; còn phải đồng thời sinh, diệt, trụ.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_14",
      "text": "Định nghĩa nào đúng về một chất thể thành trụ?",
      "options": [
        "Hai pháp vừa là một chất thể, vừa sinh, trụ và diệt đồng thời với nhau.",
        "Hai pháp khác chất thể nhưng cùng thuộc một loại và phát sinh từ một nhân.",
        "Hai pháp có cùng tên và được một người nghĩ đến trong cùng một lúc.",
        "Hai pháp là pháp vô vi nên không trải qua hình thành, tồn tại và hoại diệt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Một chất thể thành trụ phải vừa là một chất thể, vừa có sự sinh, trụ và diệt đồng thời. Khi một pháp hình thành, tồn tại và hoại diệt, pháp thành trụ với nó cũng trải qua các giai đoạn ấy trong cùng thời gian. Cùng tên, cùng loại chất thể hoặc cùng được nghĩ đến không đáp ứng đầy đủ định nghĩa.",
      "hint": "Định nghĩa kết hợp một điều kiện về chất thể với ba giai đoạn xảy ra cùng thời gian.",
      "memory": "Một chất thể thành trụ gồm một chất thể và sự sinh, trụ, diệt đồng thời.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w16_15",
      "text": "Trụ cột và tám hạt vi trần trong hợp thể của trụ cột minh họa quan hệ nào?",
      "options": [
        "Khác bản thể vì các hạt vi trần là những pháp vô vi thường hằng.",
        "Một chất thể thành trụ vì cùng nền tảng và đồng thời sinh, trụ, diệt.",
        "Một loại chất thể vì trụ cột sinh ra tám hạt vi trần như kết quả.",
        "Một thành trụ nhưng nhất định không có bất kỳ quan hệ nào về chất thể."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bài nêu trụ cột và tám hạt vi trần trong hợp thể của trụ cột như ví dụ về một chất thể thành trụ. Chúng thuộc cùng nền tảng chất thể và đồng thời sinh, trụ, diệt. Ví dụ này không nói trụ cột sinh ra các hạt như quan hệ nhân quả, cũng không xếp các hạt vào pháp vô vi.",
      "hint": "Xét đồng thời nền tảng chất thể và thời gian hình thành, tồn tại, hoại diệt của hợp thể.",
      "memory": "Trụ cột và tám hạt vi trần trong hợp thể là một chất thể thành trụ.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_16",
      "text": "Mô tả nào phản ánh đầy đủ nhất một chất thể mà không thể phân thành trụ?",
      "options": [
        "Hai pháp cùng tên nhưng có thể hình thành và hoại diệt ở hai thời gian khác nhau, dù cùng chỉ một đối tượng.",
        "Hai pháp cùng một loại chất thể dù mỗi pháp vẫn là một chất thể riêng biệt.",
        "Hai pháp cùng đối tượng, thời gian và chất thể; không thể phân chia sự hình thành, tồn tại, hoại diệt.",
        "Hai pháp được nhận biết trong cùng lúc nhưng không cần cùng đối tượng hay chất thể."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một chất thể mà không thể phân thành trụ trước hết phải là một chất thể và một chất thể thành trụ; đồng thời cùng đối tượng, cùng thời gian, cùng chất thể và không thể phân chia sự hình thành, tồn tại, hoại diệt. Chỉ cùng tên, cùng loại chất thể hoặc được nhận biết cùng lúc đều thiếu các điều kiện trọng yếu.",
      "hint": "Tìm phương án hội đủ đối tượng, thời gian, chất thể và tính không thể phân chia thành trụ.",
      "memory": "Không thể phân thành trụ đòi hỏi cùng đối tượng, thời gian, chất thể và không thể tách ba giai đoạn.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_17",
      "text": "Cái bình và tính vô thường của cái bình thuộc quan hệ nào?",
      "options": [
        "Một chất thể mà không thể phân thành trụ vì cùng đối tượng, thời gian và không thể tách rời.",
        "Một loại chất thể vì tính vô thường là kết quả được sinh ra từ cái bình.",
        "Khác chất thể vì một bên là cái bình, một bên là một đặc tính của bình.",
        "Chỉ là một thành trụ vì chất thể của hai pháp luôn hoàn toàn riêng biệt, dù sinh, trụ, diệt cùng lúc."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Khi cái bình hình thành, tính vô thường của nó cũng hình thành; thời gian hình thành, tồn tại và hoại diệt của hai bên không thể tách rời. Cái bình có mặt thì tính vô thường có mặt và ngược lại. Vì cùng đối tượng, cùng thời gian, cùng chất thể, chúng là một chất thể mà không thể phân thành trụ.",
      "hint": "Hãy xét liệu cái bình có thể hình thành, tồn tại hoặc hoại diệt mà thiếu tính vô thường không.",
      "memory": "Cái bình và tính vô thường cùng đối tượng, thời gian, chất thể và không thể phân thành trụ.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_18",
      "text": "Cái bình và hạt gió trong hợp thể của cái bình được hiểu đúng như thế nào?",
      "options": [
        "Chúng khác chất thể hoàn toàn và không đồng thời sinh, trụ, diệt.",
        "Chúng là một bản thể vì hạt gió thuộc về pháp vô vi thường hằng.",
        "Chúng là một loại chất thể vì cái bình làm nhân chính sinh ra hạt gió trong cùng dòng tương tục.",
        "Chúng là một chất thể thành trụ nhưng không phải một chất thể mà không thể phân thành trụ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài dùng cái bình và hạt gió để chứng minh một chất thể thành trụ không nhất định là một chất thể mà không thể phân thành trụ. Chất thể của chúng không riêng biệt và chúng thành trụ cùng nhau, nhưng nhận thức trực tiếp có thể thấy cái bình mà không nhất thiết thấy hạt gió. Vì vậy, quan hệ một chất thể mà không thể phân thành trụ chưa được xác lập.",
      "hint": "Phân biệt việc cùng thành trụ với yêu cầu khi thấy một phương diện phải thấy phương diện kia.",
      "memory": "Bình và hạt gió thành trụ với nhau, nhưng thấy bình chưa nhất thiết thấy hạt gió.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_19",
      "text": "Tám hạt cơ bản trong hợp thể của cái bình minh họa điều gì?",
      "options": [
        "Một bản thể vì tám hạt không thuộc phạm vi của pháp hữu vi.",
        "Một chất thể mà không thể phân thành trụ vì không thể nhận biết từng hạt trong bất kỳ nhận thức nào.",
        "Một thành trụ nhưng không phải một chất thể thành trụ vì chất thể của chúng riêng biệt.",
        "Một loại chất thể vì tất cả đều được sinh trực tiếp từ chính cái bình."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tám hạt cơ bản trong hợp thể của cái bình cùng sinh, diệt và trụ đồng thời nên là một thành trụ. Tuy nhiên, chất thể của chúng riêng biệt, vì vậy không phải là một chất thể thành trụ. Ví dụ này cho thấy một thành trụ không nhất định là một chất thể thành trụ.",
      "hint": "Tách điều kiện đồng thời sinh, diệt, trụ khỏi điều kiện phải cùng một chất thể.",
      "memory": "Tám hạt cơ bản là một thành trụ nhưng có chất thể riêng biệt.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_20",
      "text": "Ghép ba trường hợp: (i) cái bình hôm nay với cái bình; (ii) cái bình với màu sắc; (iii) cái bình với tính vô thường. Chuỗi nào đúng?",
      "options": [
        "(i) khác chất thể; (ii) một loại chất thể; (iii) một bản thể.",
        "(i) một chất thể; (ii) một chất thể thành trụ; (iii) một chất thể mà không thể phân thành trụ.",
        "(i) một loại chất thể; (ii) một chất thể không thành trụ; (iii) khác bản thể.",
        "(i) một bản thể của pháp hữu vi; (ii) khác chất thể nhưng cùng thành trụ; (iii) một thành trụ có chất thể riêng biệt."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cái bình hôm nay với cái bình là một chất thể nhưng không phải một chất thể thành trụ. Cái bình với màu sắc của bình là một chất thể thành trụ. Cái bình với tính vô thường của bình cùng đối tượng, thời gian và chất thể, không thể phân chia sự hình thành, tồn tại, hoại diệt, nên không thể phân thành trụ.",
      "hint": "Sắp xếp ba cặp theo mức ràng buộc tăng dần từ cùng chất thể đến không thể phân chia.",
      "memory": "Ba mức là một chất thể, một chất thể thành trụ và một chất thể mà không thể phân thành trụ.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_21",
      "text": "Điểm khác nhau cốt lõi giữa một chất thể và một loại chất thể là gì?",
      "options": [
        "Một chất thể luôn có nhiều kết quả; một loại chất thể luôn chỉ có một đối tượng duy nhất.",
        "Một chất thể chỉ dùng cho pháp vô vi; một loại chất thể chỉ dùng cho pháp thường hằng.",
        "Một chất thể xét sự hiển hiện không riêng biệt; một loại chất thể xét nhân chính hoặc dòng tương tục.",
        "Hai thuật ngữ cùng nghĩa, chỉ khác cách dịch và không tạo ra sự phân loại nào."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một chất thể được xác định khi trình hiện trực tiếp không có sự riêng biệt mà hiện thành một. Một loại chất thể nói đến các hữu vi pháp khác biệt được sinh ra từ nhân chính hoặc thuộc dòng chất thể lưu chuyển tương tục trước đó. Vì vậy, cùng một loại chất thể không có nghĩa là cùng một chất thể.",
      "hint": "So sánh cách trình hiện trực tiếp với quan hệ giữa những kết quả khác biệt và nhân chính của chúng.",
      "memory": "Một chất thể xét sự không riêng biệt; một loại chất thể xét nhân chính hoặc dòng tương tục.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_22",
      "text": "Một hạt táo có thể sinh cây và cho nhiều quả táo. Cách phân tích nào đúng?",
      "options": [
        "Các kết quả thuộc một loại chất thể với nhân chính, nhưng mỗi quả vẫn là một chất thể riêng biệt.",
        "Các quả táo là Một vì đều có cùng tên và cùng hình dạng tổng quát.",
        "Tất cả quả táo là một chất thể duy nhất vì cùng phát sinh từ một hạt.",
        "Các quả táo khác loại chất thể với nhân vì kết quả luôn khác hoàn toàn nguyên nhân và không thuộc dòng tương tục trước đó."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Một hạt giống có thể làm nhân chính cho nhiều kết quả đồng loại, như một hạt táo cho cây và nhiều quả táo. Các kết quả thuộc một loại chất thể với nhân chính, nhưng không phải một chất; mỗi quả vẫn là một chất thể riêng biệt. Chung nguồn nhân không làm nhiều kết quả trở thành Một.",
      "hint": "Chung nhân chính giải thích sự đồng loại, nhưng có làm mất tính riêng của từng quả không?",
      "memory": "Nhiều quả có thể cùng một loại chất thể với nhân, nhưng mỗi quả có chất thể riêng.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_23",
      "text": "Quan hệ giữa hạt lúa và mầm lúa được trình bày thế nào?",
      "options": [
        "Chúng là một chất thể vì mầm lúa không thể hiện ra riêng trước mắt.",
        "Chúng là một bản thể vì quan hệ nhân quả chỉ tồn tại trong tư duy phân biệt.",
        "Chúng khác loại chất thể vì tên gọi và thời điểm xuất hiện không giống nhau.",
        "Chúng thuộc một loại chất thể nhưng không phải một chất thể và không phải là Một."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hạt lúa làm nhân chính sinh ra mầm lúa nên chúng thuộc một loại chất thể. Tuy nhiên, chúng có tên riêng biệt và mắt nhận thức thấy hiển hiện riêng biệt, vì vậy không phải là một chất thể và cũng không phải là Một. Một loại chất thể biểu thị quan hệ trong dòng tương tục, không xóa sự khác biệt giữa nhân và kết quả.",
      "hint": "Hãy đồng thời xét nhân chính, dòng tương tục và sự hiển hiện riêng biệt trước mắt.",
      "memory": "Hạt lúa và mầm lúa cùng một loại chất thể, nhưng không phải một chất thể hay Một.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_24",
      "text": "Theo phần một pháp có nhiều phản thể, phát biểu nào đúng về thanh sô-cô-la?",
      "options": [
        "Mỗi phản thể là một vật chất riêng nằm bên trong thanh sô-cô-la.",
        "Thanh sô-cô-la cùng một bản thể với các sự phủ định; vô số phản thể được nhận biết tuần tự.",
        "Ý thức có thể nhận biết đồng thời toàn bộ vô số phản thể của thanh sô-cô-la.",
        "Các phản thể khác bản thể với thanh sô-cô-la và không thể cùng tồn tại."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Về mặt bản thể, thanh sô-cô-la và các sự phủ định như không phải ngựa, không phải bò, không phải pháp thường hằng không khác bản thể với chính nó. Tuy nhiên, trên cùng một pháp có vô số phản thể khác nhau. Ý thức không thể nhận biết tất cả cùng một lúc mà phải nhận biết lần lượt theo tuần tự.",
      "hint": "Phân biệt quan hệ bản thể với số lượng phản thể và khả năng nhận biết của ý thức.",
      "memory": "Một pháp có vô số phản thể cùng một bản thể, nhưng ý thức nhận biết lần lượt.",
      "difficulty": "Khó"
    },
    {
      "id": "w16_25",
      "text": "Xét bốn nhận định: (1) Cùng một chất thể không nhất thiết là Một. (2) Các nội dung hiện ra riêng trong tư duy có thể cùng một chất thể. (3) Một chất thể thành trụ luôn không thể phân thành trụ. (4) Một thành trụ luôn là một chất thể thành trụ. Nhóm nào đúng?",
      "options": [
        "(1) và (2).",
        "(1) và (3).",
        "(2) và (4).",
        "(3) và (4)."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nhận diện Sư Cô cho thấy nhiều nội dung hiện ra riêng trong tư duy vẫn có thể cùng một chất thể, nên (1) và (2) đúng. Bình với hạt gió bác bỏ (3): chúng là một chất thể thành trụ nhưng không phải một chất thể mà không thể phân thành trụ. Tám hạt cơ bản bác bỏ (4): chúng là một thành trụ nhưng chất thể riêng biệt.",
      "hint": "Dùng ba ví dụ: nhận diện Sư Cô, bình với hạt gió và tám hạt cơ bản.",
      "memory": "Cùng một chất thể chưa chắc là Một; một thành trụ chưa chắc là một chất thể thành trụ.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w16_26",
      "text": "Ghép lần lượt: (i) hư không và thường hằng; (ii) cái bình và hạt gió; (iii) tám hạt cơ bản trong hợp thể. Chuỗi nào đúng?",
      "options": [
        "(i) một chất thể; (ii) một loại chất thể; (iii) không thành trụ.",
        "(i) khác bản thể; (ii) một chất thể mà không thể phân thành trụ; (iii) một bản thể.",
        "(i) một thành trụ; (ii) khác chất thể; (iii) một chất thể mà không thể phân thành trụ.",
        "(i) một bản thể; (ii) một chất thể thành trụ nhưng không phải một chất thể mà không thể phân thành trụ; (iii) một thành trụ với các chất thể riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hư không và thường hằng là một bản thể vì thuộc phạm vi pháp vô vi. Bình và hạt gió là một chất thể thành trụ nhưng không phải một chất thể mà không thể phân thành trụ, vì thấy bình chưa nhất thiết thấy hạt gió. Tám hạt cơ bản cùng sinh, diệt, trụ nên là một thành trụ, nhưng chất thể của chúng riêng biệt.",
      "hint": "Ba trường hợp lần lượt thuộc phạm vi pháp vô vi, chất thể thành trụ và nhiều chất thể đồng thời.",
      "memory": "Bản thể, chất thể thành trụ và một thành trụ phải được phân biệt theo đúng phạm vi.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w16_27",
      "text": "Một học viên nói: “Hữu tình, con người, Sư Cô và Tenzin Yangchen cùng chỉ một người, nên tất cả nhất định là Một.” Sai lầm chính là gì?",
      "options": [
        "Cho rằng một người có thể được nhận diện ở nhiều khoảng cách khác nhau.",
        "Đồng nhất cùng một chất thể với Một, bỏ qua các nội dung hiển hiện riêng trong tư duy.",
        "Cho rằng Sư Cô có thể đồng thời là hữu tình, con người và người Việt Nam trong cùng một cá thể.",
        "Dùng nhận thức trực tiếp để xác định một người đang di động từ xa."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các cách nhận diện cùng chỉ một người nên cùng một chất thể, nhưng Một được xác định theo việc các nội dung có hiện ra riêng và có thể phân chia trong tư duy hay không. Hữu tình, con người, Sư Cô và Tenzin Yangchen xuất hiện ở các mức nhận diện riêng. Vì vậy, học viên đã xem cùng một chất thể như điều kiện đủ để kết luận Một.",
      "hint": "Kết luận đã chuyển từ việc cùng chỉ một cá thể sang cách các nội dung hiển hiện trong tư duy.",
      "memory": "Cùng một chất thể không đủ kết luận Một nếu các nội dung vẫn hiển hiện riêng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w16_28",
      "text": "Một học viên lập luận: “Bình và hạt gió là một chất thể thành trụ, nên khi thấy bình nhất định phải thấy hạt gió.” Cách sửa nào đúng?",
      "options": [
        "Giữ nguyên vì mọi pháp cùng sinh, trụ, diệt đều bắt buộc hiển hiện cùng nhau.",
        "Đổi thành bình và hạt gió khác chất thể, không có bất kỳ quan hệ thành trụ nào.",
        "Phân biệt một chất thể thành trụ với một chất thể mà không thể phân thành trụ; thấy bình chưa nhất thiết thấy hạt gió.",
        "Đổi thành hạt gió là pháp vô vi nên không thể được nhận thức trực tiếp."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một chất thể thành trụ chỉ xác lập rằng hai pháp cùng một chất thể và đồng thời sinh, trụ, diệt. Muốn khi thấy một phương diện nhất định thấy phương diện kia, còn phải đạt quan hệ một chất thể mà không thể phân thành trụ. Bài nói rõ nhận thức trực tiếp có thể thấy cái bình mà không nhất thiết thấy hạt gió.",
      "hint": "Xác định điều kiện nào mới làm cho thấy một phương diện thì nhất định thấy phương diện kia.",
      "memory": "Thấy bình chưa nhất thiết thấy hạt gió vì một chất thể thành trụ chưa phải quan hệ không thể phân thành trụ.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w16_29",
      "text": "Xét bốn nhận định: (1) Một loại chất thể được xác định theo nhân chính hoặc dòng chất thể tương tục. (2) Một loại chất thể đồng nghĩa với trình hiện không riêng biệt. (3) Hạt lúa và mầm lúa cùng một loại chất thể nhưng không phải một chất thể. (4) Chỉ cần tên khác nhau là đủ kết luận khác loại chất thể. Nhóm nào đúng?",
      "options": [
        "(2) và (4).",
        "(1) và (2).",
        "(1) và (3).",
        "(3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một loại chất thể tùy thuộc vào nhân chính hoặc dòng chất thể lưu chuyển tương tục trước đó, nên (1) đúng. Hạt lúa và mầm lúa cùng một loại chất thể nhưng hiển hiện riêng, không phải một chất thể, nên (3) đúng. (2) đã lấy định nghĩa một chất thể gán cho một loại chất thể; (4) biến tên gọi thành tiêu chí quyết định.",
      "hint": "Tách tiêu chí dòng nhân quả khỏi tiêu chí trình hiện trực tiếp và sự khác nhau của tên gọi.",
      "memory": "Một loại chất thể dựa vào nhân chính hoặc dòng tương tục, không dựa riêng vào tên gọi.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w16_30",
      "text": "Chuỗi kết luận nào tổng hợp đúng ba ví dụ: (i) bình vàng và chất vàng; (ii) được làm ra và vô thường; (iii) thanh sô-cô-la và các phản thể?",
      "options": [
        "(i) Khác dù không tách thành hai chất; (ii) Một; (iii) cùng một bản thể với các phản thể được biết tuần tự.",
        "(i) khác chất thể; (ii) một loại chất thể; (iii) mỗi phản thể là một vật riêng.",
        "(i) Một; (ii) Khác; (iii) các phản thể khác bản thể và được biết đồng thời.",
        "(i) một bản thể; (ii) khác bản thể dù không thể tách thành hai vật; (iii) thanh sô-cô-la không có phản thể."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bình vàng và chất vàng có hai sự hiển hiện nên là Khác, dù không phải hai chất tách rời. Được làm ra và vô thường không thể tách thành hai vật nên là Một, dù mức độ nhận biết có thể khác. Thanh sô-cô-la không khác bản thể với các sự phủ định, nhưng có vô số phản thể và ý thức nhận biết chúng lần lượt.",
      "hint": "Lần lượt xét sự hiển hiện, tính không thể tách thành hai vật và quan hệ giữa pháp với các phủ định.",
      "memory": "Phải xét đúng tiêu chí: sự hiển hiện, khả năng phân chia và quan hệ bản thể với phản thể.",
      "difficulty": "Nâng cao"
    }
  ],
  "week17": [
    {
      "id": "w17_1",
      "text": "Theo bài học, “ngược với là” (yin log) đồng nghĩa với cách nói nào?",
      "options": [
        "Là chính pháp đó.",
        "Không phải là pháp đó.",
        "Là biệt loại của pháp đó.",
        "Cùng bản thể với pháp đó."
      ],
      "correctAnswerIndex": 1,
      "explanation": "“Ngược với là” (yin log) đồng nghĩa với “không phải là”. Vì vậy, “ngược với cái cột” thuộc phạm vi những gì không phải cái cột.",
      "hint": "Nhớ lại cách bài dịch thuật ngữ “ngược với là” (yin log).",
      "memory": "“Ngược với là” (yin log) đồng nghĩa với “không phải là”.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_2",
      "text": "Theo bài học, “ngược với không phải là” (min log) có nghĩa là gì?",
      "options": [
        "Không phải là pháp đó.",
        "Là biệt loại của pháp đó.",
        "Là khái niệm về pháp đó.",
        "Là chính pháp đó."
      ],
      "correctAnswerIndex": 3,
      "explanation": "“Ngược với không phải là” (min log) đồng nghĩa với “là”. Bài cô đọng quy tắc này bằng câu: ngược với cái không phải nó chính là nó.",
      "hint": "Xét điều còn lại khi phủ định cái “không phải nó”.",
      "memory": "“Ngược với không phải là” (min log) đồng nghĩa với “là”.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_3",
      "text": "Cụm “ngược với cái cột” chỉ phạm vi nào?",
      "options": [
        "Những gì không phải cái cột.",
        "Sự hiện hữu của cái cột.",
        "Những bộ phận cấu thành cái cột.",
        "Chính bản thân cái cột."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Ngược với cái cột” có nghĩa là “không phải cái cột”. Phạm vi này bao gồm nhiều đối tượng như cái bình, hư không, con người, con vật, con ngựa và con voi.",
      "hint": "Áp dụng trực tiếp nghĩa của “ngược với là”.",
      "memory": "Ngược với cái cột là toàn bộ phạm vi không phải cái cột.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_4",
      "text": "Cách mô tả nào thuộc mặt thuận chiều – khẳng định khi phân tích cái cột?",
      "options": [
        "Không phải cái bình và con người.",
        "Không phải con ngựa và con voi.",
        "Vô thường và thuộc về sự vật.",
        "Không phải con vật và hư không."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài nêu ở mặt thuận chiều rằng cái cột vô thường, thuộc về sự vật, sinh ra từ nhân, do các thành phần tụ hợp và thuộc hình sắc. Các phương án còn lại đều diễn tả mặt nghịch chiều – phủ định.",
      "hint": "Thuận chiều nêu những phương diện có thể khẳng định về cái cột.",
      "memory": "Thuận chiều khẳng định những phương diện thuộc về pháp đang xét.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_5",
      "text": "Trong Thích Lượng Luận, pháp nào được gọi là cái chung?",
      "options": [
        "Pháp có phạm vi được bao khắp nhỏ hơn.",
        "Pháp có phạm vi bao quát rộng hơn.",
        "Pháp không thuộc một phạm vi nào.",
        "Pháp chỉ có một bộ phận duy nhất."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Pháp có phạm vi bao quát rộng hơn được gọi là cái chung. Những pháp được bao hàm trong phạm vi đó được gọi là cái riêng.",
      "hint": "Đối chiếu phạm vi bao quát với phạm vi được bao hàm.",
      "memory": "Phạm vi bao quát rộng là cái chung; phạm vi được bao khắp nhỏ là cái riêng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_6",
      "text": "Nhóm nào gồm đúng ba dạng cái chung được trình bày trong bài?",
      "options": [
        "Cái chung, cái riêng, biệt loại.",
        "Thuận chiều, nghịch chiều, nghĩa chung.",
        "Loại riêng, tụ hợp riêng, nghĩa riêng.",
        "Loại chung, tụ hợp chung, nghĩa chung."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài chia cái chung thành loại chung, tụ hợp chung và nghĩa chung. Ba dạng này dùng những tiêu chí khác nhau: chủng loại, sự tụ hợp nhiều bộ phận và hình ảnh trong tâm phân biệt.",
      "hint": "Một dạng theo chủng loại, một dạng do tập hợp và một dạng hiện trong tâm.",
      "memory": "Ba dạng cái chung là loại chung, tụ hợp chung và nghĩa chung.",
      "difficulty": "Dễ"
    },
    {
      "id": "w17_7",
      "text": "Nếu lặp phép “ngược với là” (yin log) đối với cái cột ba lần, kết quả thuộc cách diễn đạt nào?",
      "options": [
        "Là sự hiện hữu của cái cột.",
        "Là một bộ phận của cái cột.",
        "Không phải là cái cột.",
        "Là chính bản thân cái cột."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Đối với “ngược với là”, số lần lặp thuộc bội số lẻ thì kết quả là “không phải là pháp đó”. Vì ba là số lẻ, kết quả là không phải cái cột.",
      "hint": "Ba là bội số lẻ trong quy tắc của “ngược với là”.",
      "memory": "“Ngược với là” (yin log) lặp số lẻ lần cho kết quả không phải pháp đó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_8",
      "text": "Nếu lặp phép “ngược với không phải là” (min log) đối với cái bình năm lần, kết quả nào phù hợp bài học?",
      "options": [
        "Không phải cái bình vì năm là số lẻ.",
        "Là tụ hợp chung của nhiều cái bình.",
        "Là hình ảnh của cái bình trong tâm.",
        "Là chính cái bình dù năm là số lẻ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối với “ngược với không phải là”, dù lặp theo bội số chẵn hay lẻ thì vẫn là chính pháp đó. Vì vậy, năm lần vẫn đồng nghĩa với “là cái bình”.",
      "hint": "Quy tắc của “ngược với không phải là” (min log) không thay đổi theo chẵn hay lẻ.",
      "memory": "“Ngược với không phải là” (min log) lặp chẵn hay lẻ đều là chính pháp đó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_9",
      "text": "Cách phân biệt nào đúng giữa khái niệm “ngược với là” (yin log) đối với cái cột và bản thân cái cột?",
      "options": [
        "Cả hai đều là vật chất và vô thường.",
        "Khái niệm thuộc thường hằng; cái cột thuộc vô thường.",
        "Khái niệm thuộc vô thường; cái cột thuộc thường hằng.",
        "Cả hai đều chỉ hiện hữu trong tâm phân biệt."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Khái niệm “ngược với là cái cột” chỉ tồn tại trong khái niệm nên thuộc pháp thường hằng. Bản thân cái cột là vật chất nên thuộc pháp vô thường.",
      "hint": "Phân biệt cái chỉ tồn tại trong khái niệm với vật chất bên ngoài.",
      "memory": "Khái niệm về cái cột không phải chính cái cột.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_10",
      "text": "Theo bài, sự hiện hữu của cái cột và bản thân cái cột được phân biệt thế nào?",
      "options": [
        "Cả hai đều thuộc pháp thường hằng.",
        "Cả hai đều thuộc pháp vô thường.",
        "Sự hiện hữu thuộc thường hằng; cái cột thuộc vô thường.",
        "Sự hiện hữu thuộc vô thường; cái cột thuộc thường hằng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tài liệu nêu sự hiện hữu của cái cột thuộc thường hằng, còn bản thân cái cột thuộc vô thường. Sự phân biệt này tiếp tục nhấn mạnh rằng khái niệm về một sự vật không phải là một với sự vật.",
      "hint": "Bài tách “sự hiện hữu” khỏi vật chất đang hiện hữu.",
      "memory": "Sự hiện hữu của cái cột và bản thân cái cột không phải là một.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_11",
      "text": "Ví dụ một loại thuốc vừa chữa trị bệnh vừa có thể gây tác dụng phụ minh họa điều gì?",
      "options": [
        "Một pháp có thể có mặt lợi ích và mặt tổn hại.",
        "Một pháp chỉ có thể được xác định bằng mặt tổn hại.",
        "Mặt lợi ích và mặt tổn hại luôn loại trừ lẫn nhau.",
        "Thuốc thuộc phạm vi ngược với mọi pháp đang tồn tại."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Một loại thuốc có thể được phân tích ở mặt lợi ích và mặt tổn hại. Khi dùng những thuật ngữ khác nhau, tâm thức nhận biết từng phương diện khác nhau của cùng pháp đó.",
      "hint": "Xét lý do bài đặt mặt lợi ích cạnh mặt tổn hại.",
      "memory": "Phân tích nhiều phương diện giúp nhận biết một pháp tinh tế hơn.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_12",
      "text": "Một người tụng kinh lúc 6 giờ nhưng nổi giận lúc 7 giờ. Kết luận nào sát bài nhất?",
      "options": [
        "Người ấy hoàn toàn tốt vì đã tụng kinh.",
        "Người ấy hoàn toàn xấu vì đã nổi giận.",
        "Hai hành động khiến mọi nhận xét đều vô nghĩa.",
        "Cần phân biệt hành động, lời nói và thời điểm."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nhấn mạnh một người có thể có phần tốt và phần xấu trong những thời điểm khác nhau. Cần phân biệt từng hành động, lời nói và thời điểm, thay vì lấy một phương diện để kết luận về tất cả mọi mặt.",
      "hint": "Không dùng một thời điểm để đồng nhất toàn bộ con người.",
      "memory": "Xấu ở một phương diện không có nghĩa là xấu ở tất cả mọi mặt.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_13",
      "text": "Định nghĩa nào của cái chung được nêu trong bài?",
      "options": [
        "Pháp tách khỏi cái riêng để tồn tại hoàn toàn độc lập.",
        "Pháp đi theo cái riêng để minh họa cụ thể cho nó.",
        "Sắc thô chỉ gồm một bộ phận không thể phân chia.",
        "Hình ảnh bên ngoài được tâm phân biệt tạo thành."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Định nghĩa của cái chung là “pháp đi theo cái riêng để minh họa cụ thể cho nó”. Trong đó, minh họa cụ thể là ý chỉ cho cái riêng của nó.",
      "hint": "Cái chung được giải thích qua quan hệ với minh họa của nó.",
      "memory": "Cái chung đi theo cái riêng để minh họa cụ thể cho nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_14",
      "text": "Cách trình bày nào đúng về loại chung?",
      "options": [
        "Là sắc thô do nhiều bộ phận tụ hợp.",
        "Là hình ảnh tổng quát hiện trong tâm thức.",
        "Là pháp đi theo sau loại riêng của nó.",
        "Là pháp không có bất kỳ loại riêng nào."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Loại chung được định nghĩa là “pháp đi theo sau loại riêng của nó”. Bài cho biết “đi theo sau minh họa của nó” và “đi theo sau loại riêng của nó” là giống nhau, nên chung loại và chung là một nghĩa.",
      "hint": "Phân biệt tiêu chí chủng loại với tiêu chí tập hợp và hình ảnh trong tâm.",
      "memory": "Loại chung đi theo sau loại riêng của nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_15",
      "text": "Trường hợp nào biểu hiện rõ nhất tụ hợp chung?",
      "options": [
        "Tập thể lớp học gồm nhiều thành viên hợp thành.",
        "Hình ảnh cái bình tái hiện trong tâm phân biệt.",
        "Đối tượng được nhận thức bao quát sự vật.",
        "Nước được bao khắp bởi phạm vi của sự vật."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tụ hợp chung là sắc thô thiển tụ hợp nhiều bộ phận của nó. Tập thể lớp học gồm nhiều thành viên hợp lại thành một khối là ví dụ bài dùng để minh họa cách tụ hợp này.",
      "hint": "Tìm trường hợp hình thành do nhiều thành phần tụ hợp.",
      "memory": "Tụ hợp chung hình thành do nhiều bộ phận hoặc thành viên hợp lại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w17_16",
      "text": "Phân tích nào diễn đạt đúng nghĩa chung?",
      "options": [
        "Hình ảnh tổng quát trong tâm, không phải vật thật bên ngoài.",
        "Sắc thô bên ngoài, do nhiều bộ phận tụ hợp thành.",
        "Pháp bao quát rộng, hoàn toàn tách khỏi tâm phân biệt.",
        "Một vật thật bên ngoài, được tâm giữ làm hình ảnh tổng quát về nó."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nghĩa chung là hình ảnh biểu hiện trong tâm phân biệt, không phải vật thật bên ngoài. Tuy không phải là một với sự vật, tâm lại nắm giữ hình ảnh ấy là một với sự vật.",
      "hint": "Xét nơi hình ảnh xuất hiện và quan hệ của nó với sự vật thực tại.",
      "memory": "Nghĩa chung là hình ảnh tổng quát trong tâm, không phải chính sự vật thực tại.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_17",
      "text": "Vì sao cái cột được dùng làm ví dụ cho tụ hợp chung?",
      "options": [
        "Vì cái cột là hình ảnh chỉ tồn tại trong tâm.",
        "Vì sắc thô của nó do nhiều bộ phận tụ hợp.",
        "Vì cái cột không thuộc phạm vi của sự vật.",
        "Vì cái cột chỉ có một thành tố không phân chia."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cái cột gồm nhiều bộ phận và thành tố cấu hợp nên hình sắc của nó. Vì những sắc thô tụ hợp lại thành một cái cột, bài xếp ví dụ này vào tụ hợp chung.",
      "hint": "Tập trung vào cấu tạo của hình sắc thô thiển.",
      "memory": "Cái cột là tụ hợp chung khi xét sự tụ hợp của nhiều bộ phận.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_18",
      "text": "Đã biết “bạn là người Việt Nam” và “có nhiều cái không phải là bạn”. Điều kiện nào còn thiếu để bạn là cái riêng của “người Việt Nam”?",
      "options": [
        "Bạn là tụ hợp chung của người Việt Nam.",
        "Bạn là nghĩa chung của người Việt Nam.",
        "Bạn bao quát mọi người Việt Nam khác.",
        "Bạn cùng bản thể với người Việt Nam."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Ba yếu tố được nêu là: bạn là người Việt Nam; bạn cùng bản thể với người Việt Nam; và có nhiều cái không phải là bạn. Hai yếu tố đã có trong câu hỏi, nên yếu tố còn thiếu là cùng bản thể.",
      "hint": "Ba điều kiện gồm sự thuộc về, quan hệ bản thể và nhiều cái không phải nó.",
      "memory": "Xác định cái riêng phải hội đủ cả ba yếu tố được bài nêu.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_19",
      "text": "Nhóm điều kiện nào đầy đủ để một pháp trở thành cái riêng của đối tượng được nhận thức?",
      "options": [
        "Là sự vật; cùng bản thể với sắc; có một pháp giống nó.",
        "Là đối tượng được nhận thức; tách khỏi đối tượng ấy; hoàn toàn không có cái tương đồng.",
        "Là đối tượng được nhận thức; liên quan đồng tính; nhiều cái tương đồng khác nó.",
        "Là nghĩa chung; thuộc tâm phân biệt; được nắm giữ là vật thật."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một pháp trở thành cái riêng của đối tượng được nhận thức khi nó là đối tượng được nhận thức, có liên quan đồng tính với đối tượng ấy, và có nhiều điểm tương đồng thuộc đối tượng được nhận thức nhưng không phải là nó. Thiếu một trong ba yếu tố thì chưa đúng với cách xác định của bài.",
      "hint": "Đối chiếu đủ ba yếu tố tương ứng với ví dụ “bạn – một người Việt Nam”.",
      "memory": "Cái riêng cần thuộc phạm vi, có liên quan đồng tính và có nhiều cái tương đồng khác nó.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_20",
      "text": "Cặp quan hệ nào đúng theo chuỗi bao hàm trong bài?",
      "options": [
        "Sắc là cái chung của cái bình; cái bình là cái chung của cái bình vàng.",
        "Cái bình là cái chung của sắc; sắc là cái chung của sự vật.",
        "Cái bình vàng là cái chung của cái bình; sự vật là cái riêng của sắc pháp.",
        "Sự vật là cái riêng của cái bình; sắc là cái riêng của cái bình vàng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài trình bày chuỗi: đối tượng được nhận thức, sự vật, sắc, cái bình, cái bình vàng. Trong đó, sắc là cái chung của cái bình và cái bình là cái chung của cái bình vàng.",
      "hint": "Đi từ phạm vi rộng hơn đến pháp được bao hàm hẹp hơn.",
      "memory": "Trong chuỗi bao hàm, pháp rộng hơn là cái chung của pháp hẹp hơn.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_21",
      "text": "Cách ghép nào đúng với các trường hợp về quan hệ Chung – Riêng trong bài?",
      "options": [
        "Sừng thỏ vừa là cái chung vừa là cái riêng.",
        "Hai cái bình là cái chung nhưng không phải cái riêng.",
        "Đối tượng được nhận thức không thuộc cả hai phạm vi.",
        "Trụ cột vừa là cái chung vừa là cái riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nêu trụ cột là ví dụ vừa là cái chung vừa là cái riêng. Đối tượng được nhận thức là cái chung nhưng không phải cái riêng; hai cái bình và trụ cột được nêu ở trường hợp cái riêng nhưng không phải cái chung; sừng thỏ không thuộc cả hai.",
      "hint": "Nhớ ví dụ được bài đặt vào phần giao nhau của hai phạm vi.",
      "memory": "Trụ cột được bài dùng để minh họa trường hợp vừa chung vừa riêng.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_22",
      "text": "Nhận định nào KHÔNG phù hợp với nghĩa chung?",
      "options": [
        "Là hình ảnh tổng quát được tái hiện trong tâm thức.",
        "Là chính vật thật đang tồn tại ở bên ngoài.",
        "Hiện ra trong tâm phân biệt khi nhận biết sự vật.",
        "Được tâm nắm giữ là một với sự vật được nghĩ đến."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nghĩa chung không phải là chính vật thật bên ngoài; nó là hình ảnh tổng quát biểu hiện trong tâm phân biệt. Tâm có thể nắm giữ hình ảnh ấy là một với sự vật, nhưng hai bên không phải là một.",
      "hint": "Đây là câu phủ định; phân biệt hình ảnh trong tâm với vật thật bên ngoài.",
      "memory": "Không đồng nhất nghĩa chung trong tâm với sự vật thực tại bên ngoài.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_23",
      "text": "Một học viên nghe người khác nói một câu khó nghe rồi kết luận người ấy xấu về mọi mặt. Học viên đã nhầm điều gì?",
      "options": [
        "Nhầm cái chung với tụ hợp chung.",
        "Nhầm quy tắc bội số chẵn với quy tắc bội số lẻ.",
        "Lấy một phương diện làm toàn bộ con người.",
        "Đồng nhất sự hiện hữu với nghĩa chung."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Một lời nói khó nghe chỉ phản ánh một phương diện ở một thời điểm, không đủ để kết luận người ấy xấu về mọi mặt. Bài yêu cầu phân biệt từng hành động, lời nói và thời điểm để nhìn nhận đúng như sự thật nó đang là.",
      "hint": "Đối chiếu một lời nói ở một thời điểm với nhiều mặt của một người.",
      "memory": "Không lấy một phương diện để phán đoán toàn bộ một người.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_24",
      "text": "Ví dụ ngôi nhà chỉ có “tôi và bạn” chủ yếu nhắc người học điều gì?",
      "options": [
        "Cái chung đôi khi khó xác định trong thực tế.",
        "Hai người luôn tạo thành một tụ hợp chung hoàn chỉnh.",
        "Trong mọi nhóm hai người đều không tồn tại cái riêng.",
        "Chỉ cần đếm số người là xác định được Chung – Riêng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tài liệu dùng ví dụ ngôi nhà có hai người để cho thấy cái chung không phải lúc nào cũng dễ xác định trên thực tế. Ví dụ không cho phép suy rộng rằng nhóm hai người luôn có hoặc luôn không có một loại quan hệ cố định.",
      "hint": "Giữ kết luận trong đúng phạm vi điều tài liệu trực tiếp nêu.",
      "memory": "Việc xác định Chung – Riêng trong thực tế cần xét đúng quan hệ đang được nói đến.",
      "difficulty": "Khó"
    },
    {
      "id": "w17_25",
      "text": "Xét bốn nhận định về “ngược với là” (yin log) và “ngược với không phải là” (min log): (1) “Ngược với là” lặp theo bội số lẻ lần thì kết quả là không phải pháp đó; (2) “Ngược với là” lặp theo bội số chẵn lần thì kết quả trở về là pháp đó; (3) “Ngược với không phải là” dù lặp theo bội số chẵn hay lẻ đều là chính pháp đó; (4) khái niệm “ngược với là” là vật chất thuộc pháp vô thường. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1), (2) và (4).",
        "Chỉ (1), (2) và (3).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (2) và (3) đúng với quy tắc được trình bày trong bài. Nhận định (4) sai vì khái niệm “ngược với là” chỉ tồn tại trong khái niệm nên thuộc pháp thường hằng, không phải vật chất thuộc pháp vô thường.",
      "hint": "Kiểm tra riêng quy tắc bội số chẵn – lẻ của “ngược với là” và “ngược với không phải là”, sau đó phân biệt khái niệm với vật chất bên ngoài.",
      "memory": "“Ngược với là” (yin log) thay đổi theo bội số chẵn – lẻ; “ngược với không phải là” (min log) dù chẵn hay lẻ đều là chính pháp đó.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w17_26",
      "text": "Một học viên nói: “Đảo ngược hai lần trở lại cái cột, nên khái niệm về cái cột chính là cái cột.” Cách sửa nào đúng nhất?",
      "options": [
        "Đúng, vì mọi khái niệm đều là vật chất vô thường.",
        "Đúng, vì nội dung giống nhau thì hai pháp là một.",
        "Chưa đúng, vì cái cột chỉ là hình ảnh trong tâm.",
        "Chưa đúng, vì khái niệm không phải chính sự vật."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đảo ngược hai lần làm ý nghĩa trở lại cái cột, nhưng không làm khái niệm trở thành chính cái cột. Khái niệm thuộc thường hằng, còn bản thân cái cột là vật chất vô thường.",
      "hint": "Tách kết quả về mặt nội dung khỏi bản chất của khái niệm và sự vật.",
      "memory": "Trở lại cùng ý nghĩa không có nghĩa khái niệm và sự vật là một.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w17_27",
      "text": "Khi hình ảnh tổng quát của cái bình hiện trong tâm phân biệt và tâm nắm giữ nó là một với cái bình, bài gọi hình ảnh ấy là gì?",
      "options": [
        "Loại riêng của cái bình.",
        "Tụ hợp chung của cái bình.",
        "Nghĩa chung của cái bình.",
        "Bản thân vật thật cái bình."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Hình ảnh tổng quát biểu hiện trong tâm phân biệt là nghĩa chung. Nó không phải vật thật bên ngoài, dù tâm nắm giữ nó là một với sự vật đang được nghĩ đến.",
      "hint": "Đây là hình ảnh tái hiện trong tâm, không phải sắc thô bên ngoài.",
      "memory": "Nghĩa chung hiện trong tâm và được nắm giữ như sự vật, nhưng không phải sự vật.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w17_28",
      "text": "Từ chuỗi “sắc → cái bình → cái bình vàng”, vai trò của cái bình được hiểu thế nào?",
      "options": [
        "Là cái riêng của sắc và là cái chung của cái bình vàng.",
        "Là cái chung của sắc và là cái riêng của cái bình vàng.",
        "Là cái chung của cả sắc lẫn cái bình vàng.",
        "Là cái riêng của cả sắc lẫn cái bình vàng."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Sắc có phạm vi rộng hơn và bao hàm cái bình, nên cái bình là cái riêng của sắc. Cái bình lại bao hàm cái bình vàng, nên trong quan hệ kế tiếp nó là cái chung của cái bình vàng.",
      "hint": "Xét cái bình trong hai quan hệ bao hàm khác nhau.",
      "memory": "Một pháp có thể là riêng đối với phạm vi rộng hơn và là chung đối với phạm vi hẹp hơn.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w17_29",
      "text": "Xét bốn cách ghép: (1) đối tượng được nhận thức – chung nhưng không riêng; (2) hai cái bình, trụ cột – riêng nhưng không chung; (3) trụ cột – vừa chung vừa riêng; (4) sừng thỏ – không chung cũng không riêng. Theo bài, nhóm nào đúng?",
      "options": [
        "Các cách ghép (1), (2) và (3) đúng.",
        "Các cách ghép (1), (3) và (4) đúng.",
        "Các cách ghép (2), (3) và (4) đúng.",
        "Cả bốn cách ghép đều đúng theo bài."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Cả bốn cách ghép đều được tài liệu nêu trong phần quan hệ giữa cái chung và cái riêng. Mỗi ví dụ cần được giữ đúng theo trường hợp mà bài dùng để minh họa, không tự đổi vị trí giữa bốn nhóm.",
      "hint": "Đối chiếu lần lượt bốn trường hợp được liệt kê trong phần quan hệ Chung – Riêng.",
      "memory": "Bốn trường hợp của quan hệ Chung – Riêng được minh họa bằng bốn nhóm ví dụ riêng.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w17_30",
      "text": "Một học viên cho rằng cái chung và cái riêng loại trừ nhau, nên trụ cột không thể vừa là cái chung vừa là cái riêng. Cách đáp nào sát bài nhất?",
      "options": [
        "Đúng, vì một pháp chỉ có một vai trò trong mọi quan hệ.",
        "Chưa đúng, vì bài nêu trụ cột vừa chung vừa riêng.",
        "Đúng, vì trụ cột chỉ là sắc thô do nhiều phần tụ hợp.",
        "Chưa đúng, vì mọi cái riêng đều đồng thời là nghĩa chung."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tài liệu trực tiếp nêu trụ cột là ví dụ vừa là cái chung vừa là cái riêng. Chuỗi bao hàm cũng cho thấy vai trò Chung – Riêng phải được xét trong quan hệ với phạm vi rộng hơn hoặc hẹp hơn.",
      "hint": "Nhớ ví dụ được đặt ở phần giao nhau giữa cái chung và cái riêng.",
      "memory": "Vai trò chung hay riêng được xác định trong quan hệ bao hàm đang xét.",
      "difficulty": "Nâng cao"
    }
  ],
  "week18": [
    {
      "id": "w18_1",
      "text": "Theo bài học, hư không được giới thiệu bằng cách nào?",
      "options": [
        "Chỉ trực tiếp vào khoảng trống và xem đó là một vật chất rất nhẹ.",
        "Phủ định tính cản trở và khả năng có thể xúc chạm của vật chất.",
        "Xác định hư không là một cái chung bao khắp mọi vật thể hữu vi.",
        "Dùng một vật cụ thể để giác quan nhận biết trực tiếp hư không."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Hư không là pháp trừu tượng, phi vật chất nên không thể được chỉ ra trực tiếp như cái bình. Bài giới thiệu hư không bằng cách phủ định tính cản trở và khả năng có thể xúc chạm của vật chất.",
      "hint": "Đối chiếu với cảm giác bàn tay bị cản trở khi chạm vào một vật chất.",
      "memory": "Hư không được giới thiệu qua sự phủ định tính cản trở và khả năng xúc chạm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_2",
      "text": "Sự phủ định nào được bài dùng để giới thiệu tính không?",
      "options": [
        "Phủ định rằng ngã có thể được nhận biết bằng tư duy phân biệt.",
        "Phủ định rằng ngã có liên hệ với thân và các kinh nghiệm sống.",
        "Phủ định mọi danh ngôn dùng để nói về ngã và các pháp hữu vi.",
        "Phủ định cách tồn tại độc lập của ngã như một thực thể riêng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Ngã hay cái tôi không thể được thành lập như một thực thể tồn tại độc lập. Vì vậy, tính không được giới thiệu qua sự phủ định chính cách tồn tại độc lập ấy của ngã.",
      "hint": "Hãy xét cách tồn tại nào của ngã không thể được thành lập.",
      "memory": "Tính không được giới thiệu bằng sự phủ định cách tồn tại độc lập của ngã.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_3",
      "text": "Cách phân biệt nào phù hợp với phần Hữu chất và Giả có trong bài?",
      "options": [
        "Hữu chất có chất thể; Giả có được thiết lập do giả lập và tư duy gán đặt.",
        "Hữu chất chỉ là ý niệm thường hằng; Giả có là vật chất được giác quan tiếp nhận.",
        "Hữu chất và Giả có là hai tên gọi đồng nghĩa cho mọi pháp được nhận thức.",
        "Hữu chất do ngôn ngữ tạo ra; Giả có tồn tại độc lập ngoài mọi sự gán đặt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Hữu chất là pháp có chất thể, có thể được nhận biết trực tiếp hoặc được cảm nghiệm qua kinh nghiệm. Giả có là pháp được thiết lập do giả lập và tư duy gán đặt.",
      "hint": "Một bên nhấn mạnh chất thể, bên kia nhấn mạnh sự giả lập và gán đặt.",
      "memory": "Hữu chất nhấn mạnh chất thể; Giả có nhấn mạnh sự giả lập và gán đặt.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_4",
      "text": "Trường hợp nào được tài liệu nêu làm ví dụ về Chất pháp trong Nhiếp Loại học?",
      "options": [
        "Hư không không có tính cản trở và không thể được xúc chạm.",
        "Sừng thỏ không tồn tại và không phải đối tượng của nhận thức.",
        "Cái bình được thành lập, tồn tại và có thể trở thành đối tượng nhận thức.",
        "Cái chung là ý tưởng trừu tượng, thuộc thường hằng và bao khắp cái riêng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cái bình là một ví dụ điển hình về Chất pháp: nó được thành lập, tồn tại và có thể trở thành đối tượng nhận thức. Hư không và cái chung thuộc phạm vi trừu tượng, còn sừng thỏ không tồn tại.",
      "hint": "Chọn pháp cụ thể được thành lập và có thể nhận biết như một vật dụng.",
      "memory": "Cái bình, trụ cột và cá thể là những ví dụ về Chất pháp trong bài.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_5",
      "text": "Theo bài, đặc điểm nào thuộc về Cái chung?",
      "options": [
        "Là một vật chất riêng có thể chỉ ra trực tiếp bằng giác quan.",
        "Là ý tưởng trừu tượng, thuộc thường hằng và bao khắp cái riêng.",
        "Chỉ tồn tại khi đồng nhất với một cá thể cụ thể trong thế giới.",
        "Là tập hợp hai thuộc tính mâu thuẫn cùng nằm trong một thực thể."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Cái chung là một ý tưởng trừu tượng, thuộc thường hằng và có khả năng bao khắp những cái riêng thuộc về nó. Vì vậy, Cái chung không được xác định là một vật chất riêng.",
      "hint": "Hãy xét quan hệ bao khắp và việc Cái chung có phải vật chất hay không.",
      "memory": "Cái chung thuộc thường hằng, không phải vật chất và bao khắp những cái riêng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_6",
      "text": "Vì sao sừng thỏ không được xem là đối tượng của nhận thức trong bài?",
      "options": [
        "Vì sừng thỏ là pháp thường hằng nên chỉ có thể giới thiệu bằng phủ định.",
        "Vì sừng thỏ thuộc cái chung nên không thể đồng nhất với một con thỏ riêng.",
        "Vì sừng thỏ quá vi tế nên giác quan không thể nhận biết trực tiếp.",
        "Vì sừng thỏ không tồn tại nên không phải đối tượng của nhận thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài dùng sừng thỏ để minh họa cái không tồn tại. Vì không được thành lập và không tồn tại, sừng thỏ không thể trở thành đối tượng của nhận thức.",
      "hint": "Phân biệt pháp trừu tượng có tồn tại với một đối tượng hoàn toàn không tồn tại.",
      "memory": "Sừng thỏ không tồn tại nên không phải đối tượng của nhận thức.",
      "difficulty": "Dễ"
    },
    {
      "id": "w18_7",
      "text": "Chuỗi nào trình bày đúng bốn điều kiện mà Phản pháp không phải nó phải thỏa?",
      "options": [
        "(1) Là cơ sở được thành lập cho đối tượng được nhận thức; (2) nó là chính nó; (3) không là nó thì chính là nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái là nó trong trường hợp đang được xét.",
        "(1) Là cơ sở được thành lập cho đối tượng được nhận thức; (2) nó không phải nó; (3) không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó.",
        "(1) Là cơ sở được thành lập cho đối tượng được nhận thức; (2) nó không phải nó; (3) không là nó thì chính là nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó.",
        "(1) Là cơ sở được thành lập cho đối tượng được nhận thức; (2) nó là chính nó; (3) không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Phản pháp không phải nó phải thỏa bốn điều kiện: là cơ sở được thành lập cho đối tượng được nhận thức; nó không phải nó; không là nó thì chẳng phải nó; phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó. Các phương án khác đã trộn vào một hoặc nhiều điều kiện của trường hợp “không phải nó nhưng chính là nó”.",
      "hint": "Kiểm tra kỹ quan hệ với chính nó ở điều kiện (2), kết quả của “không là nó” ở điều kiện (3) và loại Phản pháp được đối chiếu ở điều kiện (4).",
      "memory": "Phản pháp không phải nó: được thành lập; nó không phải nó; không là nó thì chẳng phải nó; phản thể không mâu thuẫn với Phản pháp của cái không phải là nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_8",
      "text": "Ví dụ tên gọi “cái bình” được gán đặt trên cơ sở của cái bình làm rõ điều gì theo Trung Quán?",
      "options": [
        "Các pháp đều được giả lập trên cơ sở; không có chất nào tồn tại thực sự.",
        "Tên gọi nằm sẵn trong vật và được giác quan khám phá một cách trực tiếp.",
        "Cái bình nói chung chính là một cái bình riêng đang được người học sử dụng.",
        "Mọi sự gán đặt đều tạo ra một vật chất mới tồn tại ngoài cơ sở gán đặt."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Theo Trung Quán Ứng Thành phái và Trung Quán Tự Tục phái, không có chất nào tồn tại thực sự; các pháp đều được giả lập. Tên “cái bình” được gán đặt trên cơ sở của cái bình là ví dụ cho cách hiểu này.",
      "hint": "Hãy xét mối quan hệ giữa tên gọi và cơ sở mà tên gọi ấy được gán đặt lên.",
      "memory": "Theo Trung Quán, tên gọi được gán đặt trên cơ sở; các pháp đều được giả lập.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_9",
      "text": "Trong ví dụ đối với thường hằng, hai điều kiện đầu: (1) nó là cơ sở được thành lập cho đối tượng nhận thức và là một pháp tồn tại; (2) nó là chính nó. Cặp nào điền đúng vào điều kiện (3), (4) để dẫn đến mệnh đề “Không phải thường hằng là thường hằng”?",
      "options": [
        "(3) Không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó.",
        "(3) Không là nó thì chính là nó; (4) phản thể của nó không mâu thuẫn với Chất pháp.",
        "(3) Không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái là nó.",
        "(3) Không là nó thì chính là nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái là nó."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối với thường hằng, điều kiện (3) là “không là nó thì chính là nó”; điều kiện (4) là “phản thể của nó không mâu thuẫn với Phản pháp của cái là nó”. Kết hợp với hai điều kiện đầu, bài dùng ví dụ này để cho thấy ý niệm “không phải thường hằng” là một pháp thuộc thường hằng, nên nói “Không phải thường hằng là thường hằng”. Không được thay hai điều kiện này bằng điều kiện của Phản pháp không phải nó.",
      "hint": "Ở điều kiện (3), kiểm tra “không là nó” dẫn về chính nó hay chẳng phải nó; ở điều kiện (4), xác định Phản pháp nào được dùng để đối chiếu.",
      "memory": "Ví dụ thường hằng dùng “không là nó thì chính là nó” và đối chiếu với Phản pháp của cái là nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_10",
      "text": "Khi bàn tay chạm vào bức tường rồi đưa sang khoảng không, cách phân tích nào sát bài nhất?",
      "options": [
        "Cả bức tường và hư không đều cản trở bàn tay, chỉ khác mức độ nặng nhẹ.",
        "Bức tường có tính cản trở và xúc chạm; hư không là sự vắng hai tính ấy.",
        "Hư không là vật chất trong suốt nên bàn tay đi xuyên qua mà không nhận biết được.",
        "Bức tường là Cái chung, còn hư không là một cái riêng thuộc Cái chung ấy."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Bức tường là vật chất nên bàn tay bị cản trở và có thể xúc chạm. Hư không không được trình bày như một vật chất, mà được giới thiệu bằng sự phủ định tính cản trở và khả năng xúc chạm.",
      "hint": "So sánh trực tiếp cảm giác bị cản trở với trường hợp không có sự cản trở.",
      "memory": "Vật chất cản trở và có thể xúc chạm; hư không được giới thiệu bằng phủ định hai tính ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_11",
      "text": "Mệnh đề “Cái bình là cái bình” minh họa đặc tính nào của Chất pháp?",
      "options": [
        "Phản thể của nó không mâu thuẫn với Chất pháp.",
        "Nó là cơ sở được thành lập cho đối tượng nhận thức.",
        "Nó là chính nó, không bị thay bằng một pháp khác.",
        "Không phải nó thì chẳng phải nó trong mọi trường hợp."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Mệnh đề “Cái bình là cái bình” minh họa đặc tính Chất pháp phải là chính nó. Tương tự, trụ cột là trụ cột; pháp được nêu không bị thay bằng một pháp khác.",
      "hint": "Đây là sự đồng nhất trực tiếp giữa một pháp với chính pháp ấy.",
      "memory": "Đặc tính thứ hai của Chất pháp: nó là chính nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_12",
      "text": "Cách hiểu nào đúng về điều kiện “Không phải nó thì chẳng phải nó” của Chất pháp?",
      "options": [
        "Nếu một pháp không phải cái bình thì pháp ấy chẳng phải cái bình.",
        "Bất kỳ câu phủ định nào về cái bình cũng chính là một cái bình cụ thể.",
        "Không phải cái bình luôn đồng nghĩa với trụ cột và chỉ trụ cột mà thôi.",
        "Mọi pháp không phải chính nó đều đương nhiên được xếp vào Chất pháp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Đối với Chất pháp, điều kiện thứ ba được nêu là “Không phải nó thì chẳng phải nó”. Vì vậy, một pháp không phải cái bình thì chẳng phải cái bình; không được biến phủ định ấy thành sự đồng nhất với cái bình.",
      "hint": "Áp dụng trực tiếp điều kiện này vào ví dụ cái bình trong tài liệu.",
      "memory": "Chất pháp thỏa điều kiện: không phải nó thì chẳng phải nó.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_13",
      "text": "Pháp nào sau đây KHÔNG thuộc Chất pháp theo cách trình bày của bài?",
      "options": [
        "Cái bàn được thành lập và có thể trở thành đối tượng nhận thức.",
        "Cá thể hay chủ thể tồn tại và được dùng làm ví dụ trong bài.",
        "Trụ cột được hình thành, tồn tại và có thể được nhận biết.",
        "Hư không là pháp thường hằng, được giới thiệu bằng sự phủ định."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Hư không là pháp thường hằng, không thuộc nhóm vật chất có thể được nhận biết trực tiếp bằng giác quan, nên bài xác định hư không không thuộc Chất pháp. Các phương án còn lại đều là ví dụ về Chất pháp.",
      "hint": "Đây là câu phủ định; hãy tìm pháp trừu tượng không thuộc nhóm vật chất được nêu.",
      "memory": "Hư không không thuộc Chất pháp; muốn giới thiệu hư không phải dùng phủ định.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_14",
      "text": "Vì sao cụm đối tượng “hai cái bình cái trụ” được nói là không phải chính nó?",
      "options": [
        "Vì mọi cái bình và trụ cột đều không thể trở thành đối tượng nhận thức.",
        "Vì không có một thực thể đơn lẻ nào mang đồng thời tên và tính chất ấy.",
        "Vì hai vật thể được đặt cạnh nhau sẽ chuyển thành một pháp thường hằng.",
        "Vì cụm từ này chỉ được dùng để phủ định sự tồn tại của cái bình."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Không có một thực thể đơn lẻ nào mang tên “hai cái bình cái trụ”; cụm ấy cũng không phải cái bình và chẳng phải trụ cột. Ví dụ này buộc người học phân biệt sự ghép từ với một pháp thực sự được thành lập.",
      "hint": "Hãy tìm xem có một pháp đơn lẻ nào vừa là cái bình vừa là trụ cột hay không.",
      "memory": "Ghép các tên gọi không tạo thành một thực thể đơn lẻ mang đồng thời các tính chất ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_15",
      "text": "Vì sao mệnh đề “Không phải thường hằng” lại được nói là chính thường hằng?",
      "options": [
        "Vì ý niệm “không phải thường hằng” là một pháp thuộc về thường hằng.",
        "Vì mọi pháp vô thường sau khi bị phủ định đều biến thành thường hằng.",
        "Vì cụm từ ấy chỉ một vật chất không thay đổi và không bị hủy diệt.",
        "Vì thường hằng và vô thường là hai tên gọi của cùng một pháp cụ thể."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nêu trường hợp “không phải nó nhưng lại chính là nó”: ý niệm “không phải thường hằng” tự nó là một pháp thuộc thường hằng. Điều này không có nghĩa mọi pháp vô thường đều trở thành thường hằng.",
      "hint": "Phân biệt nội dung bị phủ định với bản thân ý niệm đang được tư duy.",
      "memory": "Ý niệm “không phải thường hằng” là một pháp thuộc thường hằng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_16",
      "text": "Vì sao cụm “Không phải là thuật ngữ” lại chính là một thuật ngữ?",
      "options": [
        "Vì bất kỳ câu phủ định nào cũng là một vật chất có thể chỉ ra trực tiếp.",
        "Vì ngôn ngữ luôn phủ định nội dung thật của mọi thuật ngữ đang được dùng.",
        "Vì chính cụm từ ấy đang đóng vai trò như một thuật ngữ.",
        "Vì chỉ những cụm từ không có nghĩa mới được xác định là thuật ngữ."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Mặc dù nội dung của cụm từ phủ định việc là thuật ngữ, bản thân cụm “Không phải là thuật ngữ” đang đóng vai trò như một thuật ngữ. Đây là ví dụ về trường hợp “không phải nó nhưng lại chính là nó”.",
      "hint": "Đừng chỉ nhìn nội dung phủ định; hãy xét chức năng của toàn bộ cụm từ.",
      "memory": "Nội dung phủ định không xóa chức năng thuật ngữ của chính cụm từ ấy.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w18_17",
      "text": "Một học viên chỉ viết: “Con người là cái ngược với cái không phải con người.” Vì sao cách xác định này chưa đủ theo phần hoài nghi về điều kiện thứ tư?",
      "options": [
        "Vì câu ấy chỉ lặp quan hệ phản thể mà chưa nêu đặc tính “có khả năng nói và hiểu nghĩa”.",
        "Vì con người không phải Chất pháp nên không thể xét bằng bốn đặc tính.",
        "Vì mọi định nghĩa về con người phải dựa vào khả năng được giác quan nhận biết trực tiếp.",
        "Vì “con người” chỉ là Cái chung, không có bất kỳ cá thể nào làm cơ sở."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Nói “con người là cái ngược với cái không phải con người” mới chỉ lặp lại quan hệ phản thể, chưa cho biết đặc tính riêng của con người. Bài nêu “có khả năng nói và hiểu nghĩa” để phân biệt con người với loài vật không có khả năng ấy.",
      "hint": "Bài bổ sung một đặc tính giúp phân biệt con người với loài vật.",
      "memory": "Không chỉ nêu phản thể; cần nêu đặc tính riêng giúp phân biệt đối tượng.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_18",
      "text": "Khi áp dụng đặc tính thứ tư của Chất pháp cho cái bình, cách trình bày nào đúng?",
      "options": [
        "Phản thể cái bình là ngược với không phải cái bình; đó chính là cái bình, không mâu thuẫn với Chất pháp.",
        "Phản thể cái bình là hư không; cả hai cùng được giới thiệu bằng phủ định tính cản trở và khả năng xúc chạm.",
        "Phản thể cái bình là cái trụ; hai vật thể khác tên luôn được dùng làm phản thể trực tiếp của nhau.",
        "Phản thể cái bình là ý niệm không có cái bình; vì là ý niệm nên nó không thể thuộc Chất pháp."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Phản thể của cái bình là cái ngược với không phải cái bình, vì vậy chính là cái bình. Cái bình là Chất pháp nên phản thể của nó không mâu thuẫn với Chất pháp. Đây là cách bài minh họa đặc tính thứ tư.",
      "hint": "Lấy cái ngược với “không phải cái bình”, rồi xác định kết quả có thuộc Chất pháp hay không.",
      "memory": "Phản thể của cái bình chính là cái bình và không mâu thuẫn với Chất pháp.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_19",
      "text": "Vì sao cái bình nói chung không thể đồng nhất với bình Tây Tạng hay bình của một người cụ thể?",
      "options": [
        "Vì bình riêng không tồn tại, chỉ có tên gọi cái bình nói chung tồn tại.",
        "Vì mọi bình riêng đều là pháp thường hằng và không có hình dạng riêng.",
        "Vì một bình riêng không thể bao khắp mọi cái bình khác.",
        "Vì cái bình nói chung chỉ bao gồm những bình không thuộc thế giới này."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Cái bình nói chung phải bao khắp mọi cái bình thuộc về nó. Nếu đồng nhất với bình Tây Tạng, bình Ấn Độ hay bình của một người, nó sẽ không thể bao khắp những cái bình còn lại.",
      "hint": "Hãy xét khả năng bao khắp những cái bình còn lại khi chọn một bình riêng làm Cái chung.",
      "memory": "Một cái riêng không thể thay cho Cái chung vì không bao khắp những cái riêng khác.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_20",
      "text": "Cách kết luận nào đúng về bản chất của Cái chung trong bài?",
      "options": [
        "Cái chung thuộc thường hằng, là ý tưởng trừu tượng và không phải vật chất.",
        "Cái chung là vật chất lớn được tạo thành từ tất cả những cái riêng cộng lại.",
        "Cái chung chỉ tồn tại trong một cái riêng được chọn làm đại diện cho toàn thể.",
        "Cái chung vừa thường hằng vừa vật chất nên có thể được giác quan nhận biết."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Cái chung là ý tưởng trừu tượng, thuộc thường hằng và bao khắp những cái riêng. Vì thường hằng không phải vật chất, không thể xem Cái chung là một vật chất lớn hay một cá thể đại diện.",
      "hint": "Đối chiếu tính bao khắp với sự phân chia thường hằng–vô thường và hữu vi–vô vi.",
      "memory": "Cái chung là pháp thường hằng và trừu tượng, không phải vật chất.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_21",
      "text": "Nếu cho rằng cái bình nói chung chính là bình của tôi, lỗi nào sẽ phát sinh?",
      "options": [
        "Bình của tôi sẽ không còn là một vật thể có thể được nhận biết bằng giác quan.",
        "Mọi cái bình khác sẽ lập tức trở thành bình của tôi do Cái chung bao khắp.",
        "Cái bình nói chung sẽ biến thành hư không vì mất tính cản trở và xúc chạm.",
        "Cái chung bị biến thành cái riêng, vừa thường hằng vừa là vật chất."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đồng nhất cái bình nói chung với bình của tôi làm mất tính bao khắp và biến Cái chung thành một cái riêng. Khi ấy, Cái chung vừa bị xem là thường hằng vừa là vật chất, trái với cách phân loại của bài.",
      "hint": "Hãy xét sự mâu thuẫn khi một ý tưởng thường hằng bị đồng nhất với một vật thể riêng.",
      "memory": "Không được đồng nhất Cái chung thường hằng với một cái riêng thuộc vật chất.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_22",
      "text": "So sánh nào đúng giữa cách giới thiệu cái bình và cách giới thiệu hư không?",
      "options": [
        "Cả hai đều phải được giới thiệu bằng một vật chất cụ thể có thể xúc chạm.",
        "Có thể chỉ trực tiếp cái bình; hư không phải được giới thiệu qua sự phủ định.",
        "Cái bình chỉ là khái niệm thường hằng; hư không được giác quan nhận biết trực tiếp.",
        "Cả hai đều không tồn tại nên chỉ có thể xuất hiện trong tư duy phân biệt."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Có thể chỉ vào cái bình và nói “Đây là cái bình” vì nó được nhận thức trực tiếp bằng giác quan. Hư không là pháp trừu tượng, không thể giới thiệu bằng vật cụ thể nên phải dùng phủ định.",
      "hint": "Một pháp có thể được chỉ ra bằng giác quan; pháp kia không thể đưa ra như vật cụ thể.",
      "memory": "Cái bình có thể chỉ trực tiếp; hư không được giới thiệu bằng phủ định.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_23",
      "text": "Mệnh đề “Không là Có” được hiểu đúng nhất như thế nào?",
      "options": [
        "Ý niệm về sự không có vẫn là một pháp được thành lập trong nhận thức.",
        "Mọi đối tượng bị nói là không có đều thật sự tồn tại ở một nơi khác.",
        "Phủ định một vật thể sẽ làm vật thể ấy trở thành pháp thường hằng.",
        "Chữ Có và chữ Không luôn đồng nghĩa, không cần phân biệt trong tranh luận."
      ],
      "correctAnswerIndex": 0,
      "explanation": "“Không là Có” không khẳng định mọi vật không tồn tại đều có thật. Ý nghĩa là khái niệm hay ý niệm về sự không có vẫn được thành lập và có tồn tại trong tư duy nhận thức.",
      "hint": "Phân biệt đối tượng không tồn tại với ý niệm về sự không có trong tư duy.",
      "memory": "Đối tượng có thể không tồn tại, nhưng ý niệm về sự không có vẫn được nhận thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_24",
      "text": "Kết luận nào KHÔNG PHÙ HỢP khi phân biệt “Không là Có” với sừng thỏ?",
      "options": [
        "Sừng thỏ không tồn tại nên không phải đối tượng được thành lập cho nhận thức.",
        "Ý niệm về sự không có có thể tồn tại như một pháp trong tư duy nhận thức.",
        "Ý niệm “không có sừng thỏ” tồn tại nên sừng thỏ cũng tồn tại.",
        "Cần phân biệt đối tượng bị phủ định với khái niệm về sự vắng mặt của nó."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Phương án C không phù hợp. Việc ý niệm “không có sừng thỏ” tồn tại trong nhận thức không làm cho sừng thỏ trở thành một đối tượng có thật; sừng thỏ vẫn không tồn tại.",
      "hint": "Đây là câu phủ định; đừng chuyển sự tồn tại của một ý niệm sang đối tượng bị ý niệm ấy phủ định.",
      "memory": "Sự tồn tại của ý niệm phủ định không làm đối tượng bị phủ định trở thành có thật.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_25",
      "text": "Trong bảng bốn điều kiện của Phản pháp không phải nó, một học viên ghi sai điều kiện (3) và (4). Cách sửa nào đúng theo bài?",
      "options": [
        "(3) Không là nó thì chính là nó; (4) phản thể của nó không mâu thuẫn với Chất pháp của đối tượng đang được nhận thức.",
        "(3) Không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Cái chung bao khắp những cái riêng thuộc về nó.",
        "(3) Nó là chính nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái là nó.",
        "(3) Không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Điều kiện (3) của Phản pháp không phải nó là “Không là nó thì chẳng phải nó”. Điều kiện (4) là “Phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó”. Hai điều kiện này không được thay bằng điều kiện của Chất pháp hoặc của trường hợp “không phải nó nhưng lại chính là nó”.",
      "hint": "Điều kiện thứ ba tiếp tục giữ quan hệ phủ định; điều kiện thứ tư phải đối chiếu đúng loại Phản pháp.",
      "memory": "Phản pháp không phải nó giữ quan hệ phủ định ở điều kiện (3) và đối chiếu đúng Phản pháp ở điều kiện (4).",
      "difficulty": "Khó"
    },
    {
      "id": "w18_26",
      "text": "Vì sao các cặp “thường hằng và vật chất”, “cái bình và cái trụ” không tạo thành một Cái chung?",
      "options": [
        "Vì Cái chung chỉ được lập từ những đối tượng có cùng tên gọi bằng tiếng Tạng.",
        "Vì không có một pháp nào đồng thời mang hai thuộc tính mâu thuẫn ấy.",
        "Vì chỉ những pháp không tồn tại mới có thể được ghép lại thành Cái chung.",
        "Vì mọi cặp đối tượng đều là vật chất nên không thể xuất hiện trong tư duy."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Không có một pháp nào vừa thường hằng vừa vật chất, vừa là cái bình vừa là cái trụ, hay vừa là thiên thần vừa là ác quỷ. Vì không có một đối tượng đơn lẻ thỏa cả hai thuộc tính, các cặp ấy không phải Cái chung.",
      "hint": "Hãy tìm xem trong ba cõi có một pháp vừa thường hằng vừa vật chất hay không.",
      "memory": "Hai thuộc tính mâu thuẫn không cùng tồn tại trong một pháp nên không tạo thành Cái chung.",
      "difficulty": "Khó"
    },
    {
      "id": "w18_27",
      "text": "Một học viên lập bảng so sánh như sau: Chất pháp: (1) được thành lập cho đối tượng được nhận thức; (2) nó là chính nó; (3) không phải nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó. Phản pháp không phải nó: (1) được thành lập cho đối tượng được nhận thức; (2) nó không phải nó; (3) không là nó thì chẳng phải nó; (4) phản thể của nó không mâu thuẫn với Chất pháp. Cần sửa thế nào để toàn bộ bảng đúng?",
      "options": [
        "Chỉ đổi đối tượng đối chiếu ở điều kiện (4) của hai bên cho nhau.",
        "Đổi điều kiện (2) của Chất pháp thành “nó không phải nó” và giữ các phần còn lại.",
        "Đổi điều kiện (3) của Phản pháp không phải nó thành “không là nó thì chính là nó”.",
        "Giữ điều kiện (4), nhưng bỏ điều kiện (1) của cả Chất pháp và Phản pháp không phải nó."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bảng đã ghi đúng ba điều kiện đầu của mỗi trường hợp nhưng đảo đối tượng đối chiếu ở điều kiện thứ tư. Đối với Chất pháp, phản thể của nó không mâu thuẫn với Chất pháp. Đối với Phản pháp không phải nó, phản thể của nó không mâu thuẫn với Phản pháp của cái không phải là nó.",
      "hint": "Ba điều kiện đầu của mỗi bên đã được ghi đúng; hãy kiểm tra phần đứng sau cụm “không mâu thuẫn với”.",
      "memory": "Khi so sánh hai hệ thống, phải kiểm tra cả nội dung điều kiện và đối tượng được đối chiếu ở điều kiện thứ tư.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w18_28",
      "text": "Xét bốn nhận định về Cái chung và Cái riêng: (1) Cái chung bao khắp những cái riêng thuộc về nó; (2) một cái bình riêng không bao khắp mọi cái bình; (3) Cái chung là ý tưởng trừu tượng thuộc thường hằng; (4) một vật riêng có thể vừa thường hằng vừa là vật chất. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (4).",
        "Chỉ (2), (3) và (4).",
        "Chỉ (1), (2) và (3).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các nhận định (1), (2) và (3) phù hợp với bài. Nhận định (4) sai vì thường hằng không phải vật chất; một vật riêng như cái bình không thể đồng thời là pháp thường hằng.",
      "hint": "Kiểm tra nhận định cuối bằng nguyên tắc thường hằng không phải vật chất.",
      "memory": "Cái chung bao khắp và thuộc thường hằng; một cái riêng không bao khắp toàn bộ Cái chung.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w18_29",
      "text": "Khi kiểm tra cái bình theo bốn đặc tính của Chất pháp, chuỗi nào đầy đủ và đúng thứ tự?",
      "options": [
        "(1) Được thành lập cho đối tượng được nhận thức; (2) là chính nó; (3) không phải nó thì chẳng phải nó; (4) phản thể không mâu thuẫn với Phản pháp của cái không phải là nó.",
        "(1) Được thành lập cho đối tượng được nhận thức; (2) không phải nó; (3) không là nó thì chẳng phải nó; (4) phản thể không mâu thuẫn với Phản pháp của cái không phải là nó.",
        "(1) Không cần được thành lập; (2) là chính nó; (3) không phải nó thì chính là nó; (4) phản thể không mâu thuẫn với Cái chung.",
        "(1) Được thành lập cho đối tượng được nhận thức; (2) là chính nó; (3) không phải nó thì chẳng phải nó; (4) phản thể không mâu thuẫn với Chất pháp."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Đối với cái bình, bốn đặc tính của Chất pháp được kiểm tra theo thứ tự: nó là cơ sở được thành lập cho đối tượng được nhận thức; nó là chính nó; không phải nó thì chẳng phải nó; phản thể của nó không mâu thuẫn với Chất pháp. Các phương án khác đã trộn điều kiện của Phản pháp hoặc thay đổi quan hệ phủ định.",
      "hint": "Kiểm tra lần lượt sự được thành lập, quan hệ với chính nó, kết quả khi không phải nó và phạm vi đối chiếu của phản thể.",
      "memory": "Bốn đặc tính Chất pháp phải được giữ đúng thứ tự và không trộn với điều kiện của Phản pháp.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w18_30",
      "text": "Một học viên lấy câu “Không phải thường hằng là thường hằng” rồi dùng nguyên hai điều kiện “nó là chính nó” và “không là nó thì chính là nó” cho Phản pháp không phải nó. Cách sửa nào chính xác?",
      "options": [
        "Giữ nguyên, vì mọi loại Phản pháp đều dùng “nó là chính nó” và “không là nó thì chính là nó”, bất kể đang xét trường hợp nào.",
        "Chỉ thay thường hằng bằng cái bình; hình thức phủ định nào cũng dẫn về chính pháp đó.",
        "Tách hai trường hợp; Phản pháp không phải nó dùng “nó không phải nó” và “không là nó thì chẳng phải nó”.",
        "Bỏ hai điều kiện, vì Phản pháp chỉ cần xuất hiện trong ngôn ngữ và tư duy phân biệt, không cần xét quan hệ với chính nó."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Câu “Không phải thường hằng là thường hằng” minh họa trường hợp hình thức là không phải nó nhưng bản thân ý niệm lại chính là nó. Phản pháp không phải nó được trình bày bằng điều kiện khác: “nó không phải nó” và “không là nó thì chẳng phải nó”. Đồng nhất hai trường hợp sẽ làm sai cấu trúc lập luận của bài.",
      "hint": "Không chuyển điều kiện của trường hợp “không phải nó nhưng lại chính là nó” sang Phản pháp không phải nó.",
      "memory": "Phải phân biệt trường hợp “không phải nó nhưng lại chính là nó” với Phản pháp không phải nó.",
      "difficulty": "Nâng cao"
    }
  ],
  "week19": [
    {
      "id": "w19_1",
      "text": "Theo định nghĩa trong bài, tiêu chí nào xác định hai pháp là tương nghịch?",
      "options": [
        "Hai pháp được gọi bằng hai tên khác nhau trong ngôn ngữ.",
        "Hai pháp khác biệt và không có điểm tương đồng.",
        "Hai pháp không xuất hiện đồng thời trước một người quan sát.",
        "Hai pháp cùng thuộc một nhóm nhưng có công dụng khác nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Tương nghịch được định nghĩa là các pháp khác biệt, không có điểm tương đồng. Nếu vẫn có một trường hợp cùng minh họa cho cả hai pháp thì chưa thể gọi chúng là tương nghịch theo tiêu chí này.",
      "hint": "Định nghĩa nhấn mạnh quan hệ giữa hai pháp, không chỉ dựa vào tên gọi hay thời gian xuất hiện.",
      "memory": "Tương nghịch: khác biệt và không có điểm tương đồng.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_2",
      "text": "Vì sao “con người” và “người Tạng” không tương nghịch với nhau?",
      "options": [
        "Vì hai tên gọi này luôn được dùng thay thế cho nhau trong mọi trường hợp được bài khảo sát.",
        "Vì mọi con người đều được xác định là người Tạng theo dòng giống.",
        "Vì hai pháp chỉ khác âm thanh nên không cần xét đối tượng minh họa.",
        "Vì một người Tạng vừa là người Tạng vừa là con người, nên có điểm tương đồng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Một người Tạng đồng thời là con người. Trường hợp chung này cho thấy “con người” và “người Tạng” có điểm tương đồng, nên chúng có tương quan chứ không tương nghịch.",
      "hint": "Hãy tìm một trường hợp có thể đồng thời minh họa cho cả hai pháp.",
      "memory": "Có trường hợp chung thì hai pháp không tương nghịch.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_3",
      "text": "Theo cách xác định dòng giống được trình bày trong bài, nhận định nào đúng về “người Ấn” và “người Việt”?",
      "options": [
        "Một người được xác định là người Ấn thì không đồng thời là người Việt, và ngược lại.",
        "Hai tên gọi có tương quan vì một người luôn mang đầy đủ dòng giống của cả cha lẫn mẹ.",
        "Chỉ khi cha mẹ cùng quốc tịch thì hai tên gọi mới trở thành tương nghịch.",
        "Hai tên gọi không thể so sánh vì bài chỉ xét đặc điểm sinh học của DNA."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Theo cách tính dòng giống theo cha được bài sử dụng, người con được xác định theo dòng giống và họ của cha. Vì vậy, trong phạm vi cách xác định này, không nói cùng một người vừa là người Ấn vừa là người Việt.",
      "hint": "Bài đang dùng cách tính dòng giống theo người cha trong Lamrim Chenmo và truyền thống Ấn Độ.",
      "memory": "Theo cách tính trong bài, đã xác định là người Ấn thì loại trừ người Việt, và ngược lại.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_4",
      "text": "Cha là người Việt, mẹ là người Ấn. Theo cách tính dòng giống trong Lamrim Chenmo được bài nêu, người con được xác định thế nào?",
      "options": [
        "Là người Ấn vì trí tuệ và dòng giống đều được tính theo người mẹ.",
        "Đồng thời là người Ấn và người Việt vì thừa hưởng DNA của cả hai.",
        "Là người Việt vì dòng giống và họ của người con được tính theo người cha.",
        "Không thể xác định cho đến khi người con tự lựa chọn dòng giống của mình."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Nếu xét theo khoa học thì có thể liên quan đến DNA của cả cha và mẹ. Nhưng trong Lamrim Chenmo và truyền thống Ấn Độ: dòng giống và họ được tính theo người cha. Vì cha là người Việt nên người con được tính là người Việt.",
      "hint": "Phân biệt cách xét của khoa học về DNA với quy ước dòng giống đang được bài sử dụng.",
      "memory": "Trong ví dụ của bài, dòng giống của người con được tính theo người cha.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_5",
      "text": "Yếu tố nào được bài dùng để xác định một hành giả thuộc chủng tính Đại thừa?",
      "options": [
        "Chỉ cần có trí tuệ chứng tính không, không cần xét phương tiện hay sự phát khởi Bồ-đề tâm.",
        "Phương tiện, đặc biệt là sự phát khởi Bồ-đề tâm và tâm rộng lớn.",
        "Chỉ cần thuộc một truyền thống có tên gọi là Đại thừa.",
        "Khả năng phân biệt mọi cặp pháp tương nghịch trong lý luận."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Trí tuệ chứng tính không không phải tiêu chí duy nhất vì là trí tuệ chung cho cả Đại thừa và Tiểu thừa. Bài căn cứ vào phương tiện, đặc biệt là Bồ-đề tâm và tâm rộng lớn, để xác định chủng tính Đại thừa.",
      "hint": "Trí tuệ chứng tính không được bài nói là điểm chung của cả hai thừa.",
      "memory": "Chủng tính Đại thừa được xác định theo phương tiện, đặc biệt là Bồ-đề tâm.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_6",
      "text": "Cách phân loại nào đúng với tương nghịch trong bài?",
      "options": [
        "Tương nghịch giữa các loài hữu tình và tương nghịch giữa những vật chất hình sắc.",
        "Tương nghịch tích cực và tương nghịch tiêu cực.",
        "Tương nghịch thường hằng và tương nghịch vô thường.",
        "Tương nghịch không cùng tồn tại và tương nghịch loại trừ lẫn nhau."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài chia tương nghịch thành tương nghịch không cùng tồn tại và tương nghịch loại trừ lẫn nhau. Trực tiếp và gián tiếp là hai phần được phân tích tiếp trong tương nghịch loại trừ lẫn nhau.",
      "hint": "Một loại nhấn mạnh gây hại, suy giảm; loại kia nhấn mạnh sự xác định trong nhận thức.",
      "memory": "Hai loại chính: không cùng tồn tại; loại trừ lẫn nhau.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_7",
      "text": "Trường hợp nào biểu hiện đúng tương nghịch không cùng tồn tại?",
      "options": [
        "Sự có mặt của một bên khiến bên kia không có mặt hoặc bị suy giảm.",
        "Nhận biết một tên gọi làm người học nhớ thêm một tên gọi gần nghĩa.",
        "Hai pháp khác tên nhưng vẫn có thể cùng hiện diện trên một đối tượng.",
        "Một pháp được xác định mà không gây ảnh hưởng đến pháp đang cùng tồn tại."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tương nghịch không cùng tồn tại là trường hợp sự tồn tại của một bên tạo đủ nhân duyên cho bên kia không có mặt. Hai bên không chỉ khác nhau mà khi gặp còn gây hại, làm suy giảm hoặc loại trừ nhau.",
      "hint": "Hãy chú ý quan hệ gây hại và làm suy giảm lẫn nhau.",
      "memory": "Không cùng tồn tại: một bên hiện diện làm bên kia suy giảm hoặc không có mặt.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_8",
      "text": "Trong ví dụ mèo và chuột, cách xác định chủ thể gây hại và đối tượng bị hại nào phù hợp với bài?",
      "options": [
        "Chuột là chủ thể gây hại vì phải chạy trốn; mèo là đối tượng bị hại vì phải đuổi theo.",
        "Cả hai chỉ là đối tượng bị hại vì không bên nào có khả năng tác động đến bên kia.",
        "Mèo là chủ thể gây hại; chuột là đối tượng bị hại khi chúng ở cùng một chỗ.",
        "Vai trò chỉ được xác định theo kích thước, không liên quan đến việc mèo có thể ăn chuột."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Bài nêu mèo là chủ thể gây hại, còn chuột là đối tượng bị hại vì khi ở cùng một chỗ mèo có thể ăn chuột. Ví dụ làm rõ tính gây hại trong tương nghịch không cùng tồn tại giữa các loài hữu tình.",
      "hint": "Xét bên nào có thể trực tiếp gây tổn hại cho bên còn lại trong ví dụ.",
      "memory": "Mèo–chuột: mèo gây hại, chuột bị hại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_9",
      "text": "Cách ghép nào đúng với ba phương diện của tương nghịch không cùng tồn tại?",
      "options": [
        "Quạ–cú: tâm thức; lửa–nước: hữu tình; nhẫn nhục–sân hận: vật chất hình sắc.",
        "Quạ–cú: hữu tình; lửa–nước: vật chất hình sắc; nhẫn nhục–sân hận: tâm thức.",
        "Quạ–cú: vật chất hình sắc; lửa–nước: tâm thức; nhẫn nhục–sân hận: hữu tình.",
        "Cả ba cặp đều chỉ thuộc tâm thức vì đều được con người nhận biết và đặt tên."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Quạ và cú là ví dụ giữa các loài hữu tình; lửa và nước thuộc những vật chất hình sắc; nhẫn nhục và sân hận là các trạng thái trong tâm thức. Ba nhóm cùng minh họa cơ chế một bên làm bên kia khó tồn tại hoặc suy giảm.",
      "hint": "Đối chiếu lần lượt loài sống, hiện tượng vật chất và trạng thái tâm.",
      "memory": "Hữu tình: quạ–cú; vật chất: lửa–nước; tâm thức: nhẫn nhục–sân hận.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_10",
      "text": "Vì sao các cặp “từ bi và nhẫn nhục–sân hận”, “rộng lượng–keo kiệt” được xếp vào tương nghịch không cùng tồn tại trong tâm thức?",
      "options": [
        "Vì mỗi cặp chỉ là hai cách gọi khác nhau của cùng một trạng thái tâm.",
        "Vì các tâm tích cực chỉ xuất hiện sau khi tâm tiêu cực đã mất hoàn toàn.",
        "Vì các tâm trong mỗi cặp cùng tăng trưởng để giữ dòng tâm thức cân bằng.",
        "Vì một tâm tăng trưởng làm tâm đối nghịch suy giảm trên cùng một dòng tâm thức."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Bài nhấn mạnh các trạng thái tâm tương nghịch không thể cùng tồn tại trong cùng một thời điểm trên cùng một dòng tâm thức. Khi từ bi, nhẫn nhục hoặc tâm rộng lượng được phát triển mạnh, sân hận hoặc tâm keo kiệt tương ứng sẽ suy giảm.",
      "hint": "Xét điều xảy ra cho tâm đối nghịch khi một tâm được chủ động làm cho tăng trưởng.",
      "memory": "Trên cùng một dòng tâm thức, một tâm tăng trưởng thì tâm tương nghịch suy giảm.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_11",
      "text": "Một người nói: “Buổi sáng tôi sân hận, buổi chiều tôi nhẫn nhục; như vậy sân hận và nhẫn nhục vẫn cùng tồn tại.” Cách phân tích nào đúng theo bài?",
      "options": [
        "Nhận định đúng, vì hai tâm xuất hiện trong cùng một ngày nên được xem là cùng tồn tại.",
        "Hai tâm không tương nghịch vì chúng có thể lần lượt xuất hiện ở những thời điểm khác nhau trên cùng một dòng tâm thức.",
        "Hai tâm có thể nối tiếp nhau; điều bị loại trừ là cùng tồn tại trong một thời điểm trên cùng một dòng tâm thức.",
        "Chỉ hành vi bên ngoài mới có thể tương nghịch; các trạng thái tâm nối tiếp nhau thì không."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Sân hận và nhẫn nhục có thể lần lượt xuất hiện ở những thời điểm khác nhau. Điều đó không làm mất tính tương nghịch, vì bài xác định rằng chúng không thể cùng tồn tại trong cùng một thời điểm trên cùng một dòng tâm thức; khi nhẫn nhục tăng trưởng, sân hận giảm dần.",
      "hint": "Phân biệt “cùng một ngày” với “cùng một thời điểm trên cùng một dòng tâm thức”.",
      "memory": "Tương nghịch trong tâm thức được xét tại cùng một thời điểm trên cùng một dòng tâm thức.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_12",
      "text": "Khi biết chắc “đây là cái bình”, nhận thức ấy loại trừ điều nào?",
      "options": [
        "“Đây không phải cái bình”.",
        "“Cái bình là một pháp vô thường”.",
        "“Cái bình có thể chứa được nước”.",
        "“Đây là một vật đang được nhận biết”."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Xác định đối tượng là cái bình thì loại trừ nhận định đối nghịch “đây không phải cái bình”. Đây là ví dụ của tương nghịch loại trừ lẫn nhau trên phương diện nhận thức.",
      "hint": "Chọn phương diện đối nghịch trực tiếp với điều vừa được xác định.",
      "memory": "Biết là cái bình thì loại trừ không phải cái bình.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_13",
      "text": "Một học viên xếp “nóng–lạnh” và “thường hằng–vô thường” đều là tương nghịch trực tiếp. Cách sửa nào đúng?",
      "options": [
        "Cả hai chỉ là tương nghịch gián tiếp vì đều cần quan sát thêm mới biết.",
        "Nóng–lạnh là không cùng tồn tại; thường hằng–vô thường là trực tiếp loại trừ lẫn nhau.",
        "Nóng–lạnh là tương nghịch trực tiếp; thường hằng–vô thường chỉ làm suy giảm lẫn nhau trong mọi trường hợp.",
        "Cả hai chỉ là những pháp khác nhau, không thuộc bất kỳ loại tương nghịch nào."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Nóng và lạnh minh họa tương nghịch không cùng tồn tại: bên này tăng thì bên kia giảm. Thường hằng và vô thường là tương nghịch trực tiếp: xác định một bên thì bên kia lập tức bị loại trừ.",
      "hint": "Phân biệt “làm suy giảm” với “nhận biết một bên thì lập tức loại trừ bên kia”.",
      "memory": "Nóng–lạnh: không cùng tồn tại; thường hằng–vô thường: trực tiếp.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_14",
      "text": "Dấu hiệu nào cho thấy một cặp pháp là tương nghịch trực tiếp?",
      "options": [
        "Hai bên chỉ gây trở ngại cho nhau khi cùng có mặt trong thời gian dài.",
        "Muốn loại trừ một bên phải suy luận qua ít nhất một pháp trung gian.",
        "Hai bên khác nhau nhưng vẫn có thể cùng minh họa trên một đối tượng.",
        "Khi xác định một bên thì bên còn lại lập tức bị loại trừ."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trong tương nghịch trực tiếp, việc xác định một bên đồng thời loại trừ ngay bên còn lại. Thường hằng–vô thường, có–không và có mặt–vắng mặt là những cặp được bài dùng để minh họa.",
      "hint": "Từ khóa của loại này là “lập tức”.",
      "memory": "Trực tiếp: xác định một bên, lập tức loại trừ bên kia.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_15",
      "text": "Vì sao “cái bình” và “trụ cột” được dùng làm ví dụ cho tương nghịch gián tiếp?",
      "options": [
        "Vì cái bình và trụ cột luôn gây hại, làm suy giảm lẫn nhau khi đặt cạnh nhau.",
        "Vì nhận biết trụ cột đồng thời trực tiếp nhận biết đầy đủ rằng mọi vật khác đều không phải cái bình.",
        "Vì biết là trụ cột chưa làm ta nhận biết ngay nó không phải cái bình; cần thêm một bước phân biệt.",
        "Vì hai pháp có điểm tương đồng nên có thể cùng tồn tại trên đúng một vật."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Khi biết một vật là trụ cột bằng gỗ trầm, ta không nhất thiết đồng thời nhận biết rõ ràng “vật ấy không phải cái bình”. Sự loại trừ được nhận biết qua một bước phân biệt nên thuộc tương nghịch gián tiếp.",
      "hint": "Xét nhận thức có lập tức nắm rõ pháp bị loại trừ hay phải qua một bước khác.",
      "memory": "Gián tiếp: sự loại trừ cần đi qua một bước phân biệt khác.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_16",
      "text": "Lập luận nào trình bày đúng sự tương nghịch gián tiếp giữa thường hằng và vật chất?",
      "options": [
        "Vật chất là vô thường; thường hằng loại trừ vô thường; do đó thường hằng loại trừ vật chất.",
        "Vật chất và thường hằng trực tiếp phủ định nhau ngay khi một bên được xác định, nên không cần xét đến vô thường.",
        "Vật chất làm thường hằng suy giảm dần giống như nước làm lửa yếu đi.",
        "Thường hằng và vật chất có điểm tương đồng vì đều có thể được nhận thức."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Vật chất là pháp vô thường, trong khi thường hằng trực tiếp loại trừ vô thường. Vì phải đi qua pháp vô thường để xác định sự loại trừ nên thường hằng và vật chất được trình bày là tương nghịch gián tiếp.",
      "hint": "Tìm bước trung gian mà bài dùng để nối vật chất với thường hằng.",
      "memory": "Thường hằng–vật chất: loại trừ qua bước trung gian “vật chất là vô thường”.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_17",
      "text": "Quan hệ nào đúng giữa tương nghịch trực tiếp và tương nghịch loại trừ lẫn nhau?",
      "options": [
        "Hai phạm vi hoàn toàn đồng nhất, không có trường hợp loại trừ gián tiếp.",
        "Trực tiếp nhất định là loại trừ lẫn nhau; chiều ngược lại không nhất định.",
        "Loại trừ lẫn nhau nhất định là trực tiếp; còn trực tiếp đôi khi không thuộc quan hệ loại trừ lẫn nhau.",
        "Hai loại không liên hệ vì một loại thuộc vật chất, một loại thuộc tâm thức."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Mọi tương nghịch trực tiếp đều thuộc tương nghịch loại trừ lẫn nhau. Chiều ngược lại không đúng vì tương nghịch loại trừ lẫn nhau còn có tương nghịch gián tiếp.",
      "hint": "Tương nghịch loại trừ lẫn nhau còn bao gồm một loại không loại trừ ngay lập tức.",
      "memory": "Trực tiếp nằm trong loại trừ lẫn nhau; loại trừ lẫn nhau còn có gián tiếp.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_18",
      "text": "Nhận định nào KHÔNG PHÙ HỢP với tương nghịch trực tiếp?",
      "options": [
        "Biết cái cột là vô thường thì loại trừ chấp cái cột là thường hằng trong nhận thức.",
        "Xác định có cái bình thì loại trừ không có cái bình.",
        "Xác định không có mặt thì loại trừ có mặt.",
        "Độ lạnh tăng làm sức nóng giảm nên lạnh là sự phủ định trực tiếp của nóng."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Nóng và lạnh là tương nghịch không cùng tồn tại: một bên tăng thì bên kia suy giảm. Bài nhấn mạnh nóng không phải sự phủ định trực tiếp của lạnh, nên không được đồng nhất cặp này với tương nghịch trực tiếp.",
      "hint": "Một cặp trong các phương án được bài xếp vào không cùng tồn tại, không phải phủ định trực tiếp.",
      "memory": "Làm suy giảm nhau chưa đồng nghĩa với phủ định trực tiếp.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_19",
      "text": "Muốn làm suy giảm tâm keo kiệt, cách vận dụng nào phù hợp nhất với nguyên tắc tương nghịch trong bài?",
      "options": [
        "Chỉ nhận diện tâm keo kiệt nhưng không phát triển trạng thái tâm đối nghịch với nó.",
        "Phát triển sự quên lãng để không còn nhớ đến tài vật đang nắm giữ.",
        "Phát triển tâm rộng lượng thích bố thí để tâm keo kiệt dần suy giảm.",
        "Giữ tâm keo kiệt ở mức vừa phải để nó cùng tồn tại ổn định với tâm rộng lượng."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Tâm rộng lượng thích bố thí tương nghịch với tâm keo kiệt. Theo nguyên tắc của bài, khi tâm rộng lượng được chủ động phát triển và tăng trưởng, tâm keo kiệt sẽ suy giảm và có thể bị loại trừ khỏi dòng tâm thức.",
      "hint": "Muốn loại trừ điều không mong muốn, phải làm cho pháp đối trị tương nghịch với nó tăng trưởng.",
      "memory": "Phát triển tâm rộng lượng để làm suy giảm tâm keo kiệt.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_20",
      "text": "Pháp đối trị nào được bài nêu để làm suy giảm tâm ghen tỵ?",
      "options": [
        "Vui theo việc tốt, ca ngợi công đức và phẩm hạnh của người khác.",
        "Chỉ tránh gặp người có thành tựu để tâm không bị kích thích.",
        "So sánh công đức của mình với người khác để giành phần hơn.",
        "Giữ im lặng trước việc tốt của người khác nhưng không thay đổi thái độ."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Ghen tỵ là tâm gây tổn hại. Vui theo việc tốt, ca ngợi công đức và phẩm hạnh của người khác là tâm lợi ích; khi được phát triển, tâm này làm ghen tỵ suy giảm và bị loại trừ.",
      "hint": "Tìm tâm lợi ích đối nghịch với tâm gây tổn hại của ghen tỵ.",
      "memory": "Đối trị ghen tỵ bằng tâm vui theo và ca ngợi công đức người khác.",
      "difficulty": "Dễ"
    },
    {
      "id": "w19_21",
      "text": "Cách thực hành nào ghép đúng tâm tiêu cực với pháp đối trị được bài nêu?",
      "options": [
        "Sân hận–ghi nhớ công đức của mình; tâm gây hại–phân tích dòng giống của người khác.",
        "Sân hận–từ bi và nhẫn nhục; tâm gây hại–tâm muốn làm lợi ích chúng sinh.",
        "Sân hận–tâm keo kiệt; tâm gây hại–sự quên lãng.",
        "Sân hận–trí nhớ; tâm gây hại–chấp ngã."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Lòng từ bi và nhẫn nhục tương nghịch với sân hận. Tâm muốn làm lợi ích chúng sinh tương nghịch với tâm muốn gây hại. Khi các tâm tích cực này tăng trưởng, tâm tiêu cực tương ứng sẽ giảm dần.",
      "hint": "Mỗi pháp đối trị phải đi ngược hướng với tâm cần loại trừ.",
      "memory": "Từ bi, nhẫn nhục đối trị sân hận; lợi ích chúng sinh đối trị tâm gây hại.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_22",
      "text": "Vì sao trí tuệ chứng ngộ tính không được gọi là pháp đối trị đặc biệt trong bài?",
      "options": [
        "Vì trí tuệ này chỉ làm thay đổi tên gọi của phiền não mà không tác động đến chấp ngã.",
        "Vì trí tuệ này giúp mọi tâm tích cực và tiêu cực cùng tồn tại trên một dòng tâm thức.",
        "Vì trí tuệ này chỉ loại trừ sự quên lãng, còn các phiền não khác vẫn giữ nguyên.",
        "Vì trí tuệ này có thể loại trừ chấp ngã, từ đó hỗ trợ loại trừ những phiền não khác."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Trí tuệ chứng ngộ tính không tương nghịch với chấp ngã. Khi trí tuệ này được phát triển, chấp ngã bị loại trừ; từ đó, những phiền não nương vào chấp ngã cũng có cơ sở để được loại trừ.",
      "hint": "Xét pháp nào được bài nêu là gốc bị trí tuệ này đối trị.",
      "memory": "Trí tuệ tính không đối trị chấp ngã và hỗ trợ loại trừ các phiền não khác.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_23",
      "text": "Xét bốn nhận định về việc vận dụng pháp đối trị trong tu tập tâm thức: (1) Sân hận, ghen tỵ, kiêu ngạo và tâm gây hại đều có tâm đối trị tương nghịch. (2) Chỉ cần nhận biết đúng pháp đối trị thì tâm tiêu cực tự suy giảm, dù pháp đối trị chưa được phát triển. (3) Khi tâm tích cực được phát triển mạnh, tâm tiêu cực tương nghịch sẽ suy giảm và có thể bị loại trừ khỏi dòng tâm thức. (4) Trí tuệ chứng ngộ tính không đối trị chấp ngã; từ đó tạo cơ sở để loại trừ những phiền não khác. Nhóm nhận định nào đúng?",
      "options": [
        "Chỉ (1), (2) và (3).",
        "Chỉ (1), (2) và (4).",
        "Chỉ (1), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Các nhận định (1), (3) và (4) phù hợp với bài. Nhận định (2) không đúng vì chỉ nhận biết pháp đối trị chưa đủ làm tâm tiêu cực suy giảm. Pháp đối trị phải được chủ động phát triển và làm cho tăng trưởng; khi đó, tâm tiêu cực tương nghịch mới giảm dần và có thể bị loại trừ khỏi dòng tâm thức.",
      "hint": "Phân biệt việc nhận biết pháp đối trị với việc thực sự phát triển pháp đối trị trên dòng tâm thức.",
      "memory": "Muốn làm suy giảm tâm tiêu cực, phải phát triển và làm tăng trưởng pháp đối trị tương nghịch.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_24",
      "text": "Nguyên tắc thực hành nào diễn đạt đầy đủ nhất cách vận dụng tương nghịch trong tu tập?",
      "options": [
        "Muốn loại trừ điều không mong muốn, phát triển pháp đối trị; muốn tăng điều mong muốn, làm suy yếu pháp đối nghịch.",
        "Muốn loại trừ phiền não, chỉ cần gọi đúng tên và hiểu khái niệm của nó; không cần phát triển tâm đối trị tương nghịch.",
        "Muốn phát triển tâm tích cực, giữ nguyên pháp đối nghịch để hai bên tự cân bằng.",
        "Muốn thay đổi dòng tâm thức, chỉ cần tránh mọi hoàn cảnh bên ngoài có liên quan."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Bài nêu hai chiều bổ sung nhau: muốn loại trừ điều không mong muốn thì phát triển pháp đối trị tương nghịch; muốn phát triển điều mong muốn thì làm suy yếu pháp đối nghịch với nó.",
      "hint": "Nguyên tắc gồm cả hai hướng: giảm điều không muốn và tăng điều mong muốn.",
      "memory": "Tăng pháp đối trị để giảm điều không muốn; làm yếu pháp đối nghịch để tăng điều mong muốn.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_25",
      "text": "Xét bốn nhận định: (1) Tương nghịch trực tiếp nhất định là tương nghịch loại trừ lẫn nhau; (2) Tương nghịch loại trừ lẫn nhau nhất định là trực tiếp; (3) Cái bình và trụ cột là ví dụ gián tiếp; (4) Nóng và lạnh là không cùng tồn tại, không phải phủ định trực tiếp. Nhóm nào đúng?",
      "options": [
        "Chỉ (1) và (2).",
        "Chỉ (1), (3) và (4).",
        "Chỉ (2), (3) và (4).",
        "Cả (1), (2), (3) và (4)."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Các nhận định (1), (3) và (4) đúng. Nhận định (2) sai vì tương nghịch loại trừ lẫn nhau còn gồm tương nghịch gián tiếp; do đó không phải mọi trường hợp loại trừ lẫn nhau đều là trực tiếp.",
      "hint": "Kiểm tra chiều đảo lại của quan hệ giữa trực tiếp và loại trừ lẫn nhau.",
      "memory": "Trực tiếp thuộc loại trừ lẫn nhau; gián tiếp cũng thuộc loại trừ lẫn nhau.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w19_26",
      "text": "Một con cừu bị mất. Người tìm đã kiểm tra khắp phạm vi từ đầu làng đến cuối xóm. Cách kết luận nào phù hợp với bài?",
      "options": [
        "Dù tìm thấy hay không, vẫn phải đồng thời giữ cả hai kết luận có mặt và vắng mặt.",
        "Không thấy thì xác định cừu có mặt ở nơi khác; tìm thấy thì vẫn chưa loại trừ việc cừu vắng mặt trong phạm vi đã tìm.",
        "Chỉ được kết luận khi biết nguyên nhân con cừu rời đàn, không dựa vào việc tìm kiếm.",
        "Tìm khắp mà không thấy thì xác định cừu vắng mặt; tìm thấy thì loại trừ việc cừu vắng mặt."
      ],
      "correctAnswerIndex": 3,
      "explanation": "Khi đã tìm khắp phạm vi nêu trong bài mà không thấy, có thể xác định con cừu không có mặt ở đó. Nếu tìm thấy, sự có mặt được xác định và việc vắng mặt bị loại trừ ngay.",
      "hint": "Áp dụng cặp có mặt–vắng mặt sau khi phạm vi tìm kiếm đã được xác định.",
      "memory": "Xác định có mặt thì loại trừ vắng mặt; xác định vắng mặt thì loại trừ có mặt.",
      "difficulty": "Khó"
    },
    {
      "id": "w19_27",
      "text": "Trong lý luận, vì sao câu trả lời “không biết” hoặc chỉ hỏi ngược lại “tại sao?” chưa giải quyết được câu hỏi “có hay không?”",
      "options": [
        "Vì mọi câu hỏi lý luận đều bắt buộc phải trả lời “có”.",
        "Vì người trả lời phải kể đầy đủ mọi nguyên nhân trước khi nêu kết luận.",
        "Vì chưa xác định có cũng chưa xác định không, nên chưa có kết luận rõ ràng.",
        "Vì “không biết” luôn đồng nghĩa với xác định chắc chắn là không có."
      ],
      "correctAnswerIndex": 2,
      "explanation": "Câu hỏi “có hay không?” đòi hỏi xác định một phương diện để loại trừ phương diện kia. “Không biết” hoặc hỏi ngược lại chưa xác định bên nào, nên trong lý luận chưa tạo được một kết luận rõ ràng.",
      "hint": "Xét xem một trong hai phương diện đối nghịch đã được xác định hay chưa.",
      "memory": "Chưa xác định có hoặc không thì chưa có kết luận rõ ràng.",
      "difficulty": "Trung bình"
    },
    {
      "id": "w19_28",
      "text": "Một người thường ghen tỵ và dễ tức giận muốn vận dụng tương nghịch để tu tập. Kế hoạch nào đúng với cơ chế đối trị trong bài?",
      "options": [
        "Vui theo, ca ngợi công đức đối trị ghen tỵ; từ bi, nhẫn nhục đối trị tức giận.",
        "Chỉ phân tích ghen tỵ và tức giận là hai tên gọi khác nhau, rồi chờ chúng tự suy giảm.",
        "Dùng tâm muốn gây hại để chế ngự ghen tỵ, sau đó dùng tâm keo kiệt để giảm tức giận.",
        "Cố giữ cả tâm tích cực lẫn tâm tiêu cực mạnh như nhau để chúng cùng tồn tại ổn định."
      ],
      "correctAnswerIndex": 0,
      "explanation": "Tâm vui theo và ca ngợi phẩm hạnh của người khác tương nghịch với ghen tỵ; từ bi và nhẫn nhục tương nghịch với sân hận. Phát triển đúng pháp đối trị khiến tâm tiêu cực tương ứng suy giảm trên dòng tâm thức.",
      "hint": "Mỗi phiền não cần một tâm tích cực đi ngược hướng và được chủ động phát triển.",
      "memory": "Chọn đúng pháp đối trị và làm nó tăng trưởng để phiền não tương nghịch suy giảm.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w19_29",
      "text": "Cách ghép nào đúng giữa các tâm tiêu cực và pháp đối trị tương nghịch được trình bày trong bài?",
      "options": [
        "Ghen tỵ–lòng từ bi và nhẫn nhục; sân hận–tâm vui theo và ca ngợi phẩm hạnh; tâm gây hại–trí tuệ chứng ngộ tính không; chấp ngã–tâm muốn làm lợi ích chúng sinh.",
        "Ghen tỵ–tâm vui theo và ca ngợi phẩm hạnh; sân hận–lòng từ bi và nhẫn nhục; tâm gây hại–tâm muốn làm lợi ích chúng sinh; chấp ngã–trí tuệ chứng ngộ tính không.",
        "Ghen tỵ–tâm muốn làm lợi ích chúng sinh; sân hận–trí tuệ chứng ngộ tính không; tâm gây hại–tâm vui theo và ca ngợi phẩm hạnh; chấp ngã–lòng từ bi và nhẫn nhục.",
        "Ghen tỵ–trí tuệ chứng ngộ tính không; sân hận–tâm muốn làm lợi ích chúng sinh; tâm gây hại–lòng từ bi và nhẫn nhục; chấp ngã–tâm vui theo và ca ngợi phẩm hạnh."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Muốn đối trị tâm ghen tỵ, cần phát triển tâm vui theo việc tốt, ca ngợi công đức và phẩm hạnh của người khác. Lòng từ bi và nhẫn nhục tương nghịch với sân hận. Tâm muốn làm lợi ích chúng sinh đối trị tâm gây hại. Trí tuệ chứng ngộ tính không là pháp đối trị đặc biệt đối với chấp ngã; từ đó hỗ trợ loại trừ những phiền não khác.",
      "hint": "Đối chiếu lần lượt các phần đối trị tâm ghen tỵ, sân hận, tâm gây hại và chấp ngã.",
      "memory": "Ghen tỵ–tâm vui theo; sân hận–từ bi và nhẫn nhục; tâm gây hại–lợi ích chúng sinh; chấp ngã–trí tuệ chứng ngộ tính không.",
      "difficulty": "Nâng cao"
    },
    {
      "id": "w19_30",
      "text": "Khi xác định một trụ cột là vật chất, trình tự nào giải thích đúng việc loại trừ “trụ cột là thường hằng”?",
      "options": [
        "Trụ cột khác cái bình, nên sự khác nhau ấy trực tiếp chứng minh trụ cột không thường hằng.",
        "Trụ cột là vật chất nên vô thường; vô thường trực tiếp loại trừ thường hằng.",
        "Trụ cột và thường hằng gây hại lẫn nhau như lửa và nước, nên một bên phải suy giảm.",
        "Trụ cột có thể được nhận biết, còn thường hằng không thể được nhận biết, nên hai bên loại trừ nhau."
      ],
      "correctAnswerIndex": 1,
      "explanation": "Đây là lập luận gián tiếp: trước hết xác định trụ cột là vật chất, tiếp đó xác định vật chất là vô thường, rồi dùng sự đối nghịch trực tiếp giữa vô thường và thường hằng để loại trừ “trụ cột là thường hằng”.",
      "hint": "Sự loại trừ phải đi qua đặc tính vô thường của vật chất.",
      "memory": "Vật chất → vô thường → loại trừ thường hằng.",
      "difficulty": "Nâng cao"
    }
  ]
};
