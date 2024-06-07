let flashcards_init = [
    
   // { question: 'card', options: ['trường đấu, vũ đài', 'thẻ', 'bụng', 'thiết bị, dụng cụ'], correctAnswer: 1, score: 6, conti: false, count: 0 }    
   { question: 'abide', options: ['mua', 'bắt đầu', 'lưu trú, lưu lại', 'chảy máu'], correctAnswer: 2, score: 4, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/a/abi/abide/abide.mp3', ipa: 'əˈbaɪd', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'abode/abided', v3: 'abode/abided', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'arise', options: ['phát sinh', 'bắt đầu', 'phát sinh', 'cắn'], correctAnswer: 2, score: 4, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/a/ari/arise/arise.mp3', ipa: 'əˈraɪz', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'arose', v3: 'arisen', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'eat', options: ['ăn', 'lưu trú, lưu lại', 'mua', 'phát sinh'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/e/eat/eat__/eat.mp3', ipa: 'iːt', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'ate', v3: 'eaten', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'awake', options: ['đánh thức, thức', 'tái phạm', 'lưu trú, lưu lại', 'bẻ cong'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/a/awa/awake/awake.mp3', ipa: 'əˈweɪk', verb: 'nan', noun: 'nan', adjective: 'awake: thức, không ngủ', adverb: 'nan', v2: 'awoke', v3: 'awoken', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'backslide', options: ['mang, chịu đựng', 'ngắm nhìn', 'tái phạm', 'đánh, đập'], correctAnswer: 2, score: 4, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bac/backs/backslide.mp3', ipa: 'ˈbæk.slaɪd', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'backslid', v3: 'backslidden/backslid', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'beat', options: ['đánh, đập', 'trở nên, trở thành', 'trả giá', 'lưu trú, lưu lại'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bea/beat_/beat.mp3', ipa: 'biːt', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'beat', v3: 'beaten/beat', plural_noun: 'othe', uc_noun: 'nan' },
   { question: 'become', options: ['trở nên, trở thành', 'đánh cược, cá cược', 'cắn', 'đánh thức, thức'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bec/becom/become.mp3', ipa: 'bɪˈkʌm', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'became', v3: 'become', plural_noun: 'er', uc_noun: 'nan' },
   { question: 'befall', options: ['đánh, đập', 'xảy đến', 'lưu trú, lưu lại', 'ngắm nhìn'], correctAnswer: 1, score: 4, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/e/eus/eus70/eus70474.mp3', ipa: 'bɪˈfɑːl', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'befell', v3: 'befallen', plural_noun: 're', uc_noun: 'nan' },
   { question: 'begin', options: ['đánh thức, thức', 'xảy đến', 'bắt đầu', 'trả giá'], correctAnswer: 2, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/beg/begin/begin.mp3', ipa: 'bɪˈɡɪn', verb: 'nan', noun: 'beginner: người mới', adjective: 'nan', adverb: 'nan', v2: 'began', v3: 'begun', plural_noun: 'f', uc_noun: 'nan' },
   { question: 'behold', options: ['bẻ cong', 'chảy máu', 'bao vây', 'ngắm nhìn'], correctAnswer: 3, score: 4, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/e/eus/eus70/eus70491.mp3', ipa: 'bɪˈhoʊld', verb: 'nan', noun: 'beholder: người nhìn, ngắm', adjective: 'nan', adverb: 'nan', v2: 'beheld', v3: 'beheld', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'bend', options: ['bẻ cong', 'đánh, đập', 'lưu trú, lưu lại', 'xảy đến'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/ben/bend_/bend.mp3', ipa: 'bend', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'bent', v3: 'bent', plural_noun: 'd', uc_noun: 'nan' },
   { question: 'beset', options: ['bao vây', 'phát sinh', 'mua', 'bao vây'], correctAnswer: 0, score: 4, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bes/beset/beset.mp3', ipa: 'bɪˈset', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'beset', v3: 'beset', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'bespeak', options: ['chứng tỏ', 'tái phạm', 'mang, chịu đựng', 'lưu trú, lưu lại'], correctAnswer: 0, score: 4, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/u/usb/usben/usbendy025.mp3', ipa: 'bɪˈspiːk', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'bespoke', v3: 'bespoken', plural_noun: 'er', uc_noun: 'nan' },
   { question: 'bet', options: ['chứng tỏ', 'mang, chịu đựng', 'đánh cược, cá cược', 'cắn'], correctAnswer: 2, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bet/bet__/bet.mp3', ipa: 'bet', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'bet/betted', v3: 'bet/betted', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'bid', options: ['phát sinh', 'đánh, đập', 'trả giá', 'chứng tỏ'], correctAnswer: 2, score: 4, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bid/bid__/bid.mp3', ipa: 'bɪd', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'bid', v3: 'bid', plural_noun: 'er', uc_noun: 'nan' },
   { question: 'bite', options: ['ăn', 'chứng tỏ', 'cắn', 'tái phạm'], correctAnswer: 2, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bit/bite_/bite.mp3', ipa: 'baɪt', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'bit', v3: 'bitten', plural_noun: 'er', uc_noun: 'nan' },
   { question: 'bleed', options: ['mua', 'phát sinh', 'chảy máu', 'bẻ cong'], correctAnswer: 2, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/ble/bleed/bleed.mp3', ipa: 'bliːd', verb: 'nan', noun: 'blood: máu', adjective: 'bloodless: không đổ máu, xanh xao nhợt nhạt; bloody: có tính máu me', adverb: 'nan', v2: 'bled', v3: 'bled', plural_noun: 'er', uc_noun: 'x' },
   { question: 'blow', options: ['phát sinh', 'lưu trú, lưu lại', 'đánh thức, thức', 'thổi'], correctAnswer: 3, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/blo/blow_/blow.mp3', ipa: 'bloʊ', verb: 'nan', noun: 'nan', adjective: 'nan', adverb: 'nan', v2: 'blew', v3: 'blown', plural_noun: 'er', uc_noun: 'nan' },
   { question: 'bear', options: ['mang, chịu đựng', 'bao vây', 'mua', 'tái phạm'], correctAnswer: 0, score: 2, conti: false, count: 0, example: 'aaa', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/bar/bare_/bare.mp3', ipa: 'ber', verb: 'nan', noun: 'bear: con gấu', adjective: 'bearable: có thể chịu được', adverb: 'nan', v2: 'bore', v3: 'borne', plural_noun: 'nan', uc_noun: 'nan' },
   { question: 'buy', options: ['bao vây', 'mua', 'đánh cược, cá cược', 'đánh thức, thức'], correctAnswer: 1, score: 2, conti: false, count: 0, example: 'bbb', pos: 'v', pron: 'https://dictionary.cambridge.org/media/english/us_pron/b/buy/buy__/buy.mp3', ipa: 'baɪ', verb: 'nan', noun: 'buyer: người mua', adjective: 'nan', adverb: 'nan', v2: 'bought', v3: 'bought', plural_noun: 'nan', uc_noun: 'nan' }
   
];
let totalScore = 0;
for (let i = 0; i < flashcards_init.length; i++){
    totalScore = totalScore + flashcards_init[i].score;
}
let currentCardIndex = 0;
let currentScore = totalScore;
let flashcards = flashcards_init;

function resetLocalStorage() {
    localStorage.setItem("my_flashcards", null);
    localStorage.setItem("my_currentCardIndex", null);
    localStorage.setItem("my_currentScore", totalScore);
    loadingLocalStorage();
    location.reload();
}
//resetLocalStorage();
function loadingLocalStorage() {
    // GET flashcards
    if (JSON.parse(localStorage.getItem("my_flashcards")) === null) {
        flashcards = flashcards_init;
    } else {
        flashcards = JSON.parse(localStorage.getItem("my_flashcards"));
    }
    // GET currentCardIndex
    if (JSON.parse(localStorage.getItem("my_currentCardIndex")) === null) {
        currentCardIndex = 0;
    } else {
        currentCardIndex = JSON.parse(localStorage.getItem("my_currentCardIndex"));
    }
    // GET currentScore
    if (JSON.parse(localStorage.getItem("my_currentScore")) === totalScore) {
        currentScore = totalScore;
    } else {
        currentScore = JSON.parse(localStorage.getItem("my_currentScore"));
    }
}

function playAudio() {
    var audio = document.getElementById("audioPlayer");
    var audioSource = flashcards[currentCardIndex].pron;
    audio.src = audioSource;
    audio.play();
}

loadingLocalStorage();
let avgScore = totalScore / flashcards_init.length;
let interval = 3 * avgScore;
let passPercent = (interval - 3) / interval;
console.log(passPercent);
let counter = 1;


const questionElement = document.getElementById('question');
const meaningElement = document.getElementById('meaning_');
const posElement = document.getElementById('pos_');
const ipaElement = document.getElementById('ipa_');
const exampleElement = document.getElementById('example_');
const plural_nounElement = document.getElementById('pluralnoun_');
const uc_nounElement = document.getElementById('ucnoun_');
const verbElement = document.getElementById('verb_');
const nounElement = document.getElementById('noun_');
const adjectiveElement = document.getElementById('adjective_');
const adverbElement = document.getElementById('adverb_');
const v2Element = document.getElementById('v2_');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const progressBarFill = document.getElementById('progress-bar-fill');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
let percentElement = document.getElementById('percent-finish');

function selectNextIndex(flashcards) {
    let listScoreNOT0 = flashcards.filter(card => card.score > 0);
    if (listScoreNOT0.length > 0) {
        let noConti = listScoreNOT0.filter(card => card.conti === false);
        if (noConti.length == 0) {
            return flashcards.findIndex(card => card.conti === true); 
        } else {
            let randomPercent = (Math.random() * 100)/100;
            if (randomPercent > passPercent) {
                let newwordList = noConti.filter(card => card.count === 0);
                if (newwordList.length > 0) {
                    let randomIndex = Math.floor(Math.random() * newwordList.length);
                    return flashcards.findIndex(card => card === newwordList[randomIndex]); 
                } else {
                    let oldwordList = noConti.filter(card => card.count > 0);
                    let randomIndex = Math.floor(Math.random() * oldwordList.length);
                    return flashcards.findIndex(card => card === oldwordList[randomIndex]); 
                }
            }
            else {
                let oldwordList = noConti.filter(card => card.count > 0);
                if (oldwordList.length > 0) {
                    let randomIndex = Math.floor(Math.random() * oldwordList.length);
                    return flashcards.findIndex(card => card === oldwordList[randomIndex]); 
                } else {
                    let newwordList = noConti.filter(card => card.count === 0);
                    let randomIndex = Math.floor(Math.random() * newwordList.length);
                    return flashcards.findIndex(card => card === newwordList[randomIndex]); 
                }
            }
        }
    }
    else {
        return -100;
    }
}

function showDef(word, meaning, pos, ipa, example, plural, uc, verb, noun, adjective, adverb, v2, v3) {
    playAudio();
    posElement.textContent = "     (" + pos + ")";
    questionElement.textContent = word;
    if (example == 'nan') {
        exampleElement.textContent = '';
    } else {
        exampleElement.textContent = "Example: " + example;
    }
    if (verb == 'nan') {
        verbElement.textContent = "";
    } else {
        verbElement.textContent = "Động từ: " + verb;
    }
    if (noun == 'nan') {
        nounElement.textContent = "";
    } else {
        nounElement.textContent = "Danh từ: " + noun;
    }
    if (adjective == 'nan') {
        adjectiveElement.textContent = "";
    } else {
        adjectiveElement.textContent = "Tính từ: " + adjective;
    }
    if (adverb == 'nan') {
        adverbElement.textContent = "";
    } else {
        adverbElement.textContent = "Trạng từ: " + adverb;
    }
    if (v2 == 'nan') {
        v2Element.textContent = "";
    } else {
        v2Element.textContent = "Động từ bất quy tắc: V2 = " + v2 + "  |  V3 = " + v3;
    }
    
    meaningElement.textContent = meaning;
    if (plural == 'nan') {
        plural_nounElement.textContent = "";
    } else {
        plural_nounElement.textContent = "Số nhiều bất qui tắc: " + plural;
    }
    
    if (uc == 'nan') {
        uc_nounElement.textContent = "";
    } else {
        uc_nounElement.textContent = "Danh từ KHÔNG đếm được";
    }
    if (ipa == 'nan') {
        ipaElement.textContent = "";
    } else {
        ipaElement.textContent = "/ " + ipa + " /";
    }
    
    optionsContainer.innerHTML = '';
    feedbackElement.textContent = "";
}

function showCard(index) {
    const currentCard = flashcards[index];
    if (currentCard.count == 0) {
        showDef(currentCard.question, currentCard.options[currentCard.correctAnswer], currentCard.pos, currentCard.ipa, currentCard.example, 
            currentCard.plural_noun, currentCard.uc_noun, currentCard.verb, currentCard.noun, currentCard.adjective, currentCard.adverb, currentCard.v2, currentCard.v3)
        for (let i = 0; i < flashcards.length; i++){
            flashcards[i].conti = false;
        }
        currentCard.conti = true;
    }
    else {
        questionElement.textContent = currentCard.question;
        posElement.textContent = "    (" + currentCard.pos + ")";
        ipaElement.textContent = "";
        exampleElement.textContent = "";
        meaningElement.textContent = '';
        plural_nounElement.textContent = "";
        uc_nounElement.textContent = "";
        verbElement.textContent = "";
        nounElement.textContent = "";
        adjectiveElement.textContent = "";
        adverbElement.textContent = "";
        v2Element.textContent = "";
        for (let i = 0; i < flashcards.length; i++){
            flashcards[i].conti = false;
        }
        currentCard.conti = true;
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
        currentScore = 0;
        for (let i = 0; i < flashcards.length; i++){
            currentScore = currentScore + flashcards[i].score;
        }
        if (currentScore == 1) {currentScore = 0;}
        const progress = (1 - currentScore / totalScore) * 100;
        
        let totalWord = flashcards.length;
        let learnedWord = (flashcards.filter(card => card.score === 0)).length;
        if (learnedWord == totalWord -1) {learnedWord = totalWord};
        percentElement.innerText = learnedWord.toFixed(0)  + '/' + totalWord.toFixed(0);
        
        // Check if progressBarFill exists before updating its width
        if (progressBarFill) {
            progressBarFill.style.width = progress + '%';
        }
    }
    
    if (currentCard.count == 0) {
        currentCard.count = counter;
    }
    if (currentCard.score > 0) {
        currentCard.score--;
    }
    
    counter++;
    // save to localStorage
    localStorage.setItem("my_flashcards", JSON.stringify(flashcards));
    localStorage.setItem("my_currentScore", JSON.stringify(currentScore));
    localStorage.setItem("my_currentCardIndex", JSON.stringify(currentCardIndex));
}

function showNextCard() {
    let selectIndex = selectNextIndex(flashcards);
    if (selectIndex == -100) {
        feedbackElement.textContent = 'You have reached the end of the quiz.';
    } else {
        currentCardIndex = selectIndex;
        if (flashcards[currentCardIndex].score > 0) {
            showCard(currentCardIndex);
        }
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
        currentCard.score++;
    }
}

function highlightOption(optionIndex, result) {
    const optionButtons = document.querySelectorAll('.option');
    const selectedOptionButton = optionButtons[optionIndex];

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
