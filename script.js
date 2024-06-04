
const flashcards = [
    /*
    { question: 'Abundant', options: ['Phong phú', 'Hiếm hoi', 'Chật chội', 'Bí mật'], correctAnswer: 0 },
    { question: 'Conscientious', options: ['Nhanh nhẹn', 'Tận tụy', 'Tự tin', 'Lạc quan'], correctAnswer: 1 },
    { question: 'Resilient', options: ['Linh hoạt', 'Mạnh mẽ', 'Dễ bị tổn thương', 'Không chắc chắn'], correctAnswer: 1 },
    { question: 'Exquisite', options: ['Chói lọi', 'Rất lớn', 'Tinh xảo', 'Buồn bã'], correctAnswer: 2 },
    { question: 'Ubiquitous', options: ['Quá khứ', 'Tự do', 'Đi khắp nơi', 'Lừa dối'], correctAnswer: 2 },
    { question: 'Ephemeral', options: ['Dài hạn', 'Ngắn hạn', 'Thường xuyên', 'Cổ điển'], correctAnswer: 1 },
    { question: 'Impeccable', options: ['Hoàn hảo', 'Bình thường', 'Nhanh chóng', 'Không chắc chắn'], correctAnswer: 0 },
    { question: 'Ineffable', options: ['Khó tả', 'Dễ hiểu', 'Buồn bã', 'Vui vẻ'], correctAnswer: 0 },
    { question: 'Nonchalant', options: ['Hứng thú', 'Hời hợt', 'Nghiêm túc', 'Nổi loạn'], correctAnswer: 1 },
    { question: 'Sycophant', options: ['Người nô lệ', 'Người nịnh hót', 'Người tự do', 'Người hiền lành'], correctAnswer: 1 }
    */
    { question: 'ankle', options: ['thắt lưng', 'mắt cá chân', 'phản xã hội', 'căn hộ; phòng sang trọng'], correctAnswer: 1 },
{ question: 'anniversary', options: ['sự ác cảm', 'cái chăn', 'thẻ', 'ngày kỉ niệm'], correctAnswer: 3 },
{ question: 'annotate', options: ['cái chăn', 'chú dẫn, dẫn giải', 'mũi tên', 'kho vũ khí đạn dược'], correctAnswer: 1 },
{ question: 'anomaly', options: ['ở giữa', 'con linh dương', 'chú dẫn, dẫn giải', 'điều bất thường'], correctAnswer: 3 },
{ question: 'anorexia', options: ['(y học) chứng chán ăn', 'quả táo', 'thẻ', 'kháng thể'], correctAnswer: 0 },
{ question: 'antelope', options: ['nhấp nháy, chớp mắt', 'con linh dương', 'thẻ', 'con linh dương'], correctAnswer: 1 },
{ question: 'anthem', options: ['quốc ca, thánh ca', 'nhấp nháy, chớp mắt', 'thí sinh, ứng cử viên', 'thuốc kháng sinh'], correctAnswer: 0 },
{ question: 'antibiotic', options: ['kỳ quái, kì dị', 'thuốc kháng sinh', '(toán) số học', 'ghệ (người yêu)'], correctAnswer: 1 },
{ question: 'antibody', options: ['ở dưới', 'kháng thể', 'kẹo', 'lớn'], correctAnswer: 1 },
{ question: 'antipathy', options: ['xuồng, ca nô', 'trống', 'sự ác cảm', '(y học) chứng chán ăn'], correctAnswer: 2 },
{ question: 'antisocial', options: ['ngọn lửa cháy rực', 'phản xã hội', 'vượt xa', 'thí sinh, ứng cử viên'], correctAnswer: 1 },
{ question: 'antonym', options: ['ghệ (người yêu)', 'thắt lưng', 'từ trái nghĩa', 'mắt cá chân'], correctAnswer: 2 },
{ question: 'apart', options: ['ngày kỉ niệm', 'vượt xa', 'xa cách, cách biệt', 'ngọn lửa cháy rực'], correctAnswer: 2 },
{ question: 'apartment', options: ['kinh thánh', 'căn hộ; phòng sang trọng', 'cái chuông', 'áo blouse'], correctAnswer: 1 },
{ question: 'append', options: ['đổ lỗi, trách mắng', 'động mạch; đường giao thông chính', 'thêm vào cuối', 'kho vũ khí đạn dược'], correctAnswer: 2 },
{ question: 'appetite', options: ['bắt giữ', 'chú dẫn, dẫn giải', 'buồn ngủ', 'sự khao khát, sự ngon miệng'], correctAnswer: 3 },
{ question: 'appetizer', options: ['mũi tên', 'món khai vị', 'kháng thể', 'ghệ (người yêu)'], correctAnswer: 1 },
{ question: 'apple', options: ['sang một bên', 'quả mơ, cây mơ', 'quả táo', 'thiên kiến, thiên vị'], correctAnswer: 2 },
{ question: 'appliance', options: ['thiết bị, dụng cụ', 'xuồng, ca nô', 'xương', 'kỳ quái, kì dị'], correctAnswer: 0 },
{ question: 'apricot', options: ['quả mơ, cây mơ', 'căn hộ; phòng sang trọng', 'bắt giữ', '(toán) số học'], correctAnswer: 0 },
{ question: 'area', options: ['sự ác cảm', 'khu vực, diện tích', 'đằng sau', 'chịu trách nhiệm, phải giải thích'], correctAnswer: 1 },
{ question: 'arena', options: ['yêu quý', 'kinh thánh', 'trường đấu, vũ đài', 'mắt cá chân'], correctAnswer: 2 },
{ question: 'arithmetic', options: ['(toán) số học', '(y học) chứng chán ăn', 'kinh thánh', 'trống'], correctAnswer: 0 },
{ question: 'array', options: ['(y học) chứng chán ăn', 'dãy, mảng', 'chịu trách nhiệm, phải giải thích', 'trống'], correctAnswer: 1 },
{ question: 'arrest', options: ['bắt giữ', 'thắt lưng', 'thí sinh, ứng cử viên', 'thí sinh, ứng cử viên'], correctAnswer: 0 },
{ question: 'arrogant', options: ['thẻ', 'chịu trách nhiệm, phải giải thích', 'ngạo mạn', 'quả táo'], correctAnswer: 2 },
{ question: 'arrow', options: ['mũi tên', 'lưỡi dao', 'xấu hổ', 'yêu quý'], correctAnswer: 0 },
{ question: 'arsenal', options: ['phản xã hội', 'kinh thánh', 'kho vũ khí đạn dược', 'phản xã hội'], correctAnswer: 2 },
{ question: 'artery', options: ['sự ác cảm', 'sự tồn tại, sinh vật', 'động mạch; đường giao thông chính', 'kinh thánh'], correctAnswer: 2 },
{ question: 'article', options: ['thuốc kháng sinh', 'bài báo; mạo từ; điều khoản; món hàng;', 'vượt xa', 'thuyền'], correctAnswer: 1 },
{ question: 'ashamed', options: ['ghệ (người yêu)', 'căn tin', 'xấu hổ', 'động mạch; đường giao thông chính'], correctAnswer: 2 },
{ question: 'aside', options: ['sang một bên', 'vượt xa', 'từ trái nghĩa', 'trường đấu, vũ đài'], correctAnswer: 0 },
{ question: 'asleep', options: ['buồn ngủ', 'thiên kiến, thiên vị', 'thuyền', 'quả táo'], correctAnswer: 0 },
{ question: 'account', options: ['Tài khoản', 'xương', 'chịu trách nhiệm, phải giải thích', 'sang một bên'], correctAnswer: 0 },
{ question: 'accountable', options: ['trường đấu, vũ đài', 'chịu trách nhiệm, phải giải thích', 'phản xã hội', 'xe hơi'], correctAnswer: 1 },
{ question: 'beetroot', options: ['lưỡi dao', 'ở giữa', 'ghệ (người yêu)', 'củ cải đỏ'], correctAnswer: 3 },
{ question: 'behind', options: ['khu vực, diện tích', 'đằng sau', 'khu vực, diện tích', 'quả mơ, cây mơ'], correctAnswer: 1 },
{ question: 'beige', options: ['buồn ngủ', 'căn tin', 'màu be', 'xuồng, ca nô'], correctAnswer: 2 },
{ question: 'beings', options: ['bài báo; mạo từ; điều khoản; món hàng;', 'mắt cá chân', 'Tài khoản', 'sự tồn tại, sinh vật'], correctAnswer: 3 },
{ question: 'bell', options: ['kho vũ khí đạn dược', 'mũi tên', 'cái chuông', 'kỳ quái, kì dị'], correctAnswer: 2 },
{ question: 'belly', options: ['mắt cá chân', 'sự ác cảm', 'bụng', 'con linh dương'], correctAnswer: 2 },
{ question: 'beloved', options: ['khu vực, diện tích', 'yêu quý', 'xa cách, cách biệt', 'kháng thể'], correctAnswer: 1 },
{ question: 'below', options: ['kháng thể', 'xe đạp', 'ở dưới', 'xe đạp'], correctAnswer: 2 },
{ question: 'belt', options: ['xấu hổ', 'ngạo mạn', 'thắt lưng', 'sự tồn tại, sinh vật'], correctAnswer: 2 },
{ question: 'bench', options: ['ghế dài, ghế bành', 'trống', 'sự tồn tại, sinh vật', 'mắt cá chân'], correctAnswer: 0 },
{ question: 'between', options: ['ở giữa', 'lớn', 'trường đấu, vũ đài', 'căn hộ; phòng sang trọng'], correctAnswer: 0 },
{ question: 'beyond', options: ['vượt xa', 'từ trái nghĩa', 'chịu trách nhiệm, phải giải thích', 'quả mơ, cây mơ'], correctAnswer: 0 },
{ question: 'bias', options: ['thí sinh, ứng cử viên', 'quả mơ, cây mơ', 'thiên kiến, thiên vị', 'chịu trách nhiệm, phải giải thích'], correctAnswer: 2 },
{ question: 'bible', options: ['kinh thánh', 'từ trái nghĩa', '(toán) số học', 'cái chuông'], correctAnswer: 0 },
{ question: 'bicycle', options: ['xe đạp', 'kho vũ khí đạn dược', 'khu vực, diện tích', 'thiên kiến, thiên vị'], correctAnswer: 0 },
{ question: 'big', options: ['phản xã hội', 'sự tồn tại, sinh vật', 'lớn', 'cái chuông'], correctAnswer: 2 },
{ question: 'bizarre', options: ['ở giữa', 'chú dẫn, dẫn giải', 'màu be', 'kỳ quái, kì dị'], correctAnswer: 3 },
{ question: 'blade', options: ['lưỡi dao', 'quả mơ, cây mơ', 'thiết bị, dụng cụ', 'áo blouse'], correctAnswer: 0 },
{ question: 'blame', options: ['đổ lỗi, trách mắng', 'ngạo mạn', 'điều bất thường', 'buồn ngủ'], correctAnswer: 0 },
{ question: 'blank', options: ['thêm vào cuối', 'chịu trách nhiệm, phải giải thích', 'trống', 'màu be'], correctAnswer: 2 },
{ question: 'blanket', options: ['thẻ', 'nhấp nháy, chớp mắt', 'cái chăn', 'căn hộ; phòng sang trọng'], correctAnswer: 2 },
{ question: 'blaze', options: ['bài báo; mạo từ; điều khoản; món hàng;', 'yêu quý', 'ngày kỉ niệm', 'ngọn lửa cháy rực'], correctAnswer: 3 },
{ question: 'blink', options: ['ngọn nến', 'căn hộ; phòng sang trọng', 'nhấp nháy, chớp mắt', 'quả mơ, cây mơ'], correctAnswer: 2 },
{ question: 'blouse', options: ['sang một bên', 'đổ lỗi, trách mắng', 'áo blouse', 'ngọn lửa cháy rực'], correctAnswer: 2 },
{ question: 'boat', options: ['nhấp nháy, chớp mắt', 'thuyền', 'phản xã hội', 'thuyền'], correctAnswer: 1 },
{ question: 'body', options: ['xe đạp', 'cơ thể', 'ngọn nến', 'ngọn nến'], correctAnswer: 1 },
{ question: 'bone', options: ['ngạo mạn', 'sự tồn tại, sinh vật', 'xương', 'ghế dài, ghế bành'], correctAnswer: 2 },
{ question: 'boo', options: ['mũi tên', 'ghệ (người yêu)', '(y học) chứng chán ăn', 'cơ thể'], correctAnswer: 1 },
{ question: 'candidate', options: ['buồn ngủ', 'ghế dài, ghế bành', '(y học) chứng chán ăn', 'thí sinh, ứng cử viên'], correctAnswer: 3 },
{ question: 'candle', options: ['ngày kỉ niệm', 'ngọn nến', 'thí sinh, ứng cử viên', 'xe hơi'], correctAnswer: 1 },
{ question: 'candy', options: ['con linh dương', 'kẹo', 'chịu trách nhiệm, phải giải thích', 'động mạch; đường giao thông chính'], correctAnswer: 1 },
{ question: 'canoe', options: ['Tài khoản', 'xuồng, ca nô', 'mũi tên', 'trống'], correctAnswer: 1 },
{ question: 'canteen', options: ['điều bất thường', 'căn tin', 'ghế dài, ghế bành', 'kho vũ khí đạn dược'], correctAnswer: 1 },
{ question: 'car', options: ['xe hơi', 'lưỡi dao', 'xe đạp', 'món khai vị'], correctAnswer: 0 },
{ question: 'card', options: ['thẻ', 'kinh thánh', 'màu be', 'xấu hổ'], correctAnswer: 0 }
];



let currentCardIndex = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const progressBarFill = document.getElementById('progress-bar-fill');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

function showCard(index) {
    const currentCard = flashcards[index];
    questionElement.textContent = currentCard.question;

    // Display options
    optionsContainer.innerHTML = '';
    for (let i = 0; i < currentCard.options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = currentCard.options[i];
        optionButton.onclick = function() {
            checkAnswer(i);
        };
        optionsContainer.appendChild(optionButton);
    }

    // Clear previous feedback
    feedbackElement.textContent = '';
    feedbackElement.classList.remove('incorrect');

    // Update progress bar
    const progress = ((index + 1) / flashcards.length) * 100;

    // Check if progressBarFill exists before updating its width
    if (progressBarFill) {
        progressBarFill.style.width = progress + '%';
    }
}

function showNextCard() {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        showCard(currentCardIndex);
    } else {
        feedbackElement.textContent = 'You have reached the end of the quiz.';
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard(currentCardIndex);
    } else {
        feedbackElement.textContent = 'This is the first card.';
    }
}

function checkAnswer(selectedOption) {
    const currentCard = flashcards[currentCardIndex];

    // Display feedback with colors
    if (selectedOption === currentCard.correctAnswer) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.remove('incorrect');
        highlightOption(selectedOption, 'correct');
    } else {
        feedbackElement.textContent = 'Incorrect. The correct answer is: ' + currentCard.options[currentCard.correctAnswer];
        feedbackElement.classList.add('incorrect');
        highlightOption(selectedOption, 'incorrect');
        highlightOption(currentCard.correctAnswer, 'correct');
    }
}
function highlightOption(optionIndex, result) {
    const optionButtons = document.querySelectorAll('.option');
    const selectedOptionButton = optionButtons[optionIndex];

        /*
    // Remove any existing highlights
    optionButtons.forEach(button => {
        button.style.backgroundColor = '';
    }); */

    // Highlight the selected option with the specified color
    if (result === 'correct') {
        selectedOptionButton.style.backgroundColor = 'blue';
        selectedOptionButton.style.color = 'white';
    } else if (result === 'incorrect') {
        selectedOptionButton.style.backgroundColor = 'red';
        selectedOptionButton.style.color = 'white';
        // optionButtons[flashcards[currentCardIndex].correctAnswer].style.backgroundColor = 'blue';
    }
}




// Show the first card initially
showCard(currentCardIndex);
