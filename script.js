const TIME_PER_QUESTION = 15; // 15 giây mỗi câu
const QUESTIONS_PER_QUIZ = 45; // Số câu hỏi mỗi đề bài (tương đương ~7.5 phút)

// State variables
let userInfo = { name: "", phone: "", store: "", position: "" };
let selectedRegion = "";
let testQuestions = []; 
let currentQuestionIndex = 0;
let userAnswers = {}; 
let timerInterval;
let timeLeft = TIME_PER_QUESTION;
let questionBank = [];

// DOM Elements
const regionScreen = document.getElementById('region-screen');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const welcomeTitle = document.getElementById('welcome-title');

const startForm = document.getElementById('start-form');
const timeDisplay = document.getElementById('time-left');
const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnNext = document.getElementById('btn-next');

// === UTILS ===
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// === FLOW ===
function selectRegion(region) {
    selectedRegion = region;
    welcomeTitle.innerText = `HỆ THỐNG KIỂM TRA PHA CHẾ - ${region.toUpperCase()}`;
    regionScreen.classList.remove('active');
    regionScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    welcomeScreen.classList.add('active');
}

startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    userInfo.name = document.getElementById('fullname').value.trim();
    userInfo.phone = document.getElementById('phone').value.trim();
    userInfo.store = document.getElementById('store').value.trim();
    userInfo.position = document.getElementById('position').value.trim();
    
    if(userInfo.name && userInfo.phone && userInfo.store && userInfo.position) {
        startQuiz();
    }
});

function startQuiz() {
    // Nạp kho dữ liệu theo khu vực
    let fullBank = (selectedRegion === 'Hà Nội') ? hanoiBank : hanamBank;
    
    if (fullBank.length === 0) {
        alert("Hệ thống đang cập nhật ngân hàng đề thi. Vui lòng thử lại sau!");
        return;
    }

    // Shuffle the full bank
    let shuffledBank = shuffleArray([...fullBank]);
    testQuestions = shuffledBank.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffledBank.length));
    
    testQuestions = testQuestions.map(q => {
        return {
            ...q,
            options: shuffleArray(q.options)
        };
    });

    document.getElementById('display-name').innerText = userInfo.name;
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');

    currentQuestionIndex = 0;
    userAnswers = {};
    
    renderQuestion();
}

function renderQuestion() {
    const q = testQuestions[currentQuestionIndex];
    
    questionNumber.innerText = `Câu hỏi ${currentQuestionIndex + 1}/${testQuestions.length}`;
    questionText.innerText = q.question;
    progressBar.style.width = `${((currentQuestionIndex) / testQuestions.length) * 100}%`;
    
    if (currentQuestionIndex === testQuestions.length - 1) {
        btnNext.innerText = "NỘP BÀI";
        btnNext.style.background = "linear-gradient(135deg, var(--error) 0%, #cc0000 100%)";
    } else {
        btnNext.innerText = "Câu tiếp theo ➔";
        btnNext.style.background = "var(--coffee-light)";
    }
    
    btnNext.disabled = false;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[currentQuestionIndex] === opt) {
            btn.classList.add('selected');
        }
        btn.innerText = `${String.fromCharCode(65 + index)}. ${opt}`;
        
        btn.onclick = () => selectOption(opt);
        optionsContainer.appendChild(btn);
    });
    
    startTimer();
}

function selectOption(selectedText) {
    userAnswers[currentQuestionIndex] = selectedText;
    
    const btns = optionsContainer.getElementsByClassName('option-btn');
    for (let i=0; i<btns.length; i++) {
        if (btns[i].innerText.substring(3) === selectedText) {
            btns[i].classList.add('selected');
        } else {
            btns[i].classList.remove('selected');
        }
    }
}

btnNext.addEventListener('click', () => {
    nextQuestion();
});

function nextQuestion() {
    clearInterval(timerInterval);
    timeDisplay.parentElement.classList.remove('danger');
    
    if (currentQuestionIndex < testQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        submitQuiz();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    
    // Tính toán thời gian động dựa trên độ dài câu hỏi và đáp án
    const q = testQuestions[currentQuestionIndex];
    const totalLength = q.question.length + q.options.join("").length;
    
    if (totalLength > 150) {
        timeLeft = 25; // Câu rất dài -> 25s
    } else if (totalLength > 80) {
        timeLeft = 20; // Câu vừa -> 20s
    } else {
        timeLeft = TIME_PER_QUESTION; // Câu ngắn -> mặc định 15s
    }
    
    timeDisplay.innerText = timeLeft;
    timeDisplay.parentElement.classList.remove('danger');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
        
        if (timeLeft <= 5) {
            timeDisplay.parentElement.classList.add('danger');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    
    let correctCount = 0;
    let wrongAnswersDetail = [];
    
    testQuestions.forEach((q, index) => {
        const uAns = userAnswers[index];
        if (uAns === q.answer) {
            correctCount++;
        } else {
            wrongAnswersDetail.push(`[Sai] ${q.question}\n- Đáp án đúng: ${q.answer}\n- Đã chọn: ${uAns || "Bỏ qua (Hết giờ)"}`);
        }
    });
    
    const maxScore = 100;
    const scorePerQuestion = maxScore / testQuestions.length;
    const finalScore = parseFloat((correctCount * scorePerQuestion).toFixed(1));
    
    console.log("========== KẾT QUẢ BÀI THI ==========");
    console.log(`Nhân viên: ${userInfo.name} - ${userInfo.phone}`);
    console.log(`Điểm số: ${finalScore}/100`);
    console.log("=====================================");
    
    // Gửi dữ liệu về Google Sheets
    const payload = {
        name: userInfo.name,
        phone: userInfo.phone,
        store: `${userInfo.store} (${selectedRegion})`,
        position: userInfo.position,
        score: finalScore,
        correct_count: `${correctCount}/${testQuestions.length}`,
        wrong_details: wrongAnswersDetail.join("\n\n")
    };

    // Đã thay thế bằng link Webhook thực tế của Google Sheets
    const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyN2Mi3cNpPNv_R_RlO6cREzQkHwUOIZBdLyG7u8ffo8ruiy6QgtUs2Sbew5Av1g6IBmw/exec";
    
    if (WEBHOOK_URL.startsWith("http")) {
        fetch(WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors', // Cần thiết để tránh lỗi CORS khi gọi từ HTML tĩnh
            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
            body: JSON.stringify(payload)
        }).then(() => console.log("Đã phát lệnh gửi điểm!"))
          .catch(err => console.error("Lỗi gửi điểm", err));
    }
    
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    document.getElementById('result-name').innerText = userInfo.name;
    
    // Hien thi diem so
    document.getElementById('final-score-display').innerText = `Điểm số: ${finalScore}/100`;

    // Render xem lai bai lam
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = ''; // clear cu
    
    testQuestions.forEach((q, index) => {
        const uAns = userAnswers[index];
        const isCorrect = (uAns === q.answer);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'review-item';
        
        let html = `<div class="review-question">Câu ${index + 1}: ${q.question}</div>`;
        
        if (isCorrect) {
            html += `<div class="review-answer correct">✔ Đã chọn: ${uAns} (Đúng)</div>`;
        } else {
            const userText = uAns ? uAns : "Bỏ qua (Hết giờ)";
            html += `<div class="review-answer wrong">❌ Đã chọn: ${userText} (Sai)</div>`;
            html += `<div class="review-correct-ans">👉 Đáp án đúng: ${q.answer}</div>`;
        }
        
        itemDiv.innerHTML = html;
        reviewContainer.appendChild(itemDiv);
    });
}

document.getElementById('btn-restart').addEventListener('click', () => {
    // Tải lại toàn bộ trang để quay về màn hình Chọn Khu Vực ban đầu
    location.reload();
});
