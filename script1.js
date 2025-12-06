// script1.js

function myFunction() {
    alert("De volgorde is frans, duits, engels. Tel het aantal letters op en zet het achter elkaar. Dit geeft de code!!");
}

const typedNumbers = document.getElementById('typedNumbers');
const feedback = document.getElementById('feedback');
const keys = document.querySelectorAll('.key');
const clearBtn = document.getElementById('clear');
const enterBtn = document.getElementById('enter');

let code = '';
const correctCode = '10165';

function updateDisplay() {
  typedNumbers.textContent = code.padEnd(5, '-');
}

keys.forEach(btn => {
  const val = btn.dataset.key;
  if (val) {
    btn.addEventListener('click', () => {
      if (code.length < 5) {
        code += val;
        updateDisplay();
      }
    });
  }
});

clearBtn.addEventListener('click', () => {
  code = '';
  feedback.textContent = '';
  updateDisplay();
});

enterBtn.addEventListener('click', () => {
  if (code === correctCode) {
    feedback.innerHTML = '<div class=\"success\">🎉 goedzo op naar het volgende level!</div>';
    setTimeout(() => {
      window.location.href = 'opdracht2.html';
    }, 1500);
  } else {
    feedback.innerHTML = '<div class=\"error\">❌ Foute code! Probeer opnieuw.</div>';
  }
  code = '';
  updateDisplay();
});

updateDisplay();