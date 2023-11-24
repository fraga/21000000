let currentStage = 1;

const totalStages = 8;
const riddles = [
    "Tenho quatro letras. Vovô me carrega para todo lado, especialmente quando está muito quente. Qual meu nome?",
    "Uso chapéu azul. Meu primo me ama! Qual meu nome?",
    "Quantos carrinhos land rover você vê na foto abaixo?",
    "As pessoas sentam e me usam bastante para apoiar as costas ou apoiar a cabeça ou até mesmo por no colo. Quem sou eu?",
    "Sophia me adora. Perguntam para ela olhar e ela faz charme. Qual é o meu nome?",
    "Vocês usaram o meu pó para cozinhar, mas eu não posso ser cozinhado! Estou em um pote de tampa marrom. Eu sou um pó de...?",
    "Você aperta um botão e me acende. Eu ilumino o ambiente. Quem sou eu?",
    "PARABÉNS! Você completou a caça ao tesouro! O tesouro está escondido dentro do vaso da sala, você precisa encontrar!",
];
const answers = [
    "copo",
    "chase",
    "6", 
    "almofada",
    "relógio",
    "café",
    "luz",
];

function updateStage() {
    document.getElementById("stage-img").src = `images/stage${currentStage}.jpg`;
    document.getElementById("riddle").textContent = riddles[currentStage - 1];
    document.getElementById("answer-input").value = '';
    document.getElementById("answer-input").focus();

    const soundElement = document.getElementById("background-sound");
    soundElement.src = `sounds/stage${currentStage}.wav`;
    soundElement.play();
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value;
    const correctAnswer = answers[currentStage - 1];
    const responseAlert = document.getElementById("response-alert");
    
    // Esconde o alerta de erro se já estiver sendo exibido
    responseAlert.style.display = 'none';
    
    if (userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        if (currentStage < totalStages) {
            currentStage++;
            updateStage();
        } else {
            alert("Parabéns! Você completou a caça ao tesouro!");
            document.getElementById("background-sound").pause();
        }
    } else {
        responseAlert.style.display = 'block';
    }
}

updateStage();
