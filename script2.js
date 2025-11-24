// script1.js

function myFunction() {
    alert("Zet de radio aan en zoek naar Sint & Piet FM. De eerste letter is een hoofdletter de rest zijn kleine letters.");
}

document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "Pepernoot"; // Hier kun je je eigen passcode instellen
    const input = document.getElementById("passcode");
    const button = document.getElementById("submit-code");
    const feedback = document.getElementById("feedback");

    button.addEventListener("click", () => {
        const enteredCode = input.value.trim();

        if(enteredCode === correctCode) {
            feedback.style.color = "green";
            feedback.textContent = "🎉 goedzo op naar het laatste level!";
            setTimeout(() => {
                window.location.href = "opdracht3.html";
            }, 1000);
        } else {
            feedback.style.color = "red";
            feedback.textContent = "❌ Foute code! Probeer opnieuw.";
            input.value = "";
        }
    });

    // Enter toets functie
    input.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            button.click();
        }
    });
});