const steps = [
  {
    question: "Hai! Ini BopBop?, kan? 😊",
    yesNext: 1,
    noMessage: "BopBop ga sihh, harusnya ini BopBop yang bukaaa.",
  },
  {
    question: "nah yu nganggur nggak tanggal 19 Juli 2025 jam 20.00? 😏",
    yesNext: 2,
    noMessage: "yeee gimanaa, masa nggak bisa yuu? Coba dipikir lagi deh 😢",
  },
  {
    question: "Yipisss! Hepi Sekaliii. Coba pincit tombol ini ya",
    finalStep: true,
    noMessage: "Langsung aja telfon aku aja yaaa hehe",
  },
];

let currentStep = 0;

function handleAnswer(isYes) {
  const questionEl = document.getElementById("question");
  const buttonsEl = document.getElementById("buttons");
  const step = steps[currentStep];

  if (isYes) {
    if (step.finalStep) {
      questionEl.innerText = step.question;
      buttonsEl.innerHTML = `
        <button onclick="openWhatsApp()">Chat di WhatsApp 💌</button>
      `;
    } else {
      currentStep = step.yesNext;
      fadeStep();
    }
  } else {
    questionEl.innerText = step.noMessage;
    if (step.finalStep && step.noMessage) {
      buttonsEl.innerHTML = `
        <a href="https://wa.me/628117851601?text=Let's%20Go%20Picca" target="_blank">
          <button>Chat di WhatsApp 💌</button>
        </a>
      `;
    }
  }
}

function openWhatsApp() {
  window.open("https://wa.me/628117851601?text=Let%27s%20Go%20Picca", "_blank");
  setTimeout(() => {
    const card = document.getElementById("mainCard");
    card.innerHTML = `<h1>💙 See you soon, Cicilya!</h1>`;
  }, 1000);
}

function fadeStep() {
  const card = document.querySelector('.card');
  card.classList.remove('animate');
  void card.offsetWidth;
  card.classList.add('animate');

  const questionEl = document.getElementById("question");
  const buttonsEl = document.getElementById("buttons");

  const step = steps[currentStep];
  questionEl.innerText = step.question;
  buttonsEl.innerHTML = `
    <button onclick="handleAnswer(true)">Yes</button>
    <button onclick="handleAnswer(false)">No</button>
  `;
}