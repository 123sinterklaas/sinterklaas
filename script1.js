// script1.js

function myFunction() {
    alert("je moet naar de auto en daar een mp3 luisteren");
}

document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "Sinterklaas"; // Hier kun je je eigen passcode instellen
    const input = document.getElementById("passcode");
    const button = document.getElementById("submit-code");
    const feedback = document.getElementById("feedback");

    button.addEventListener("click", () => {
        const enteredCode = input.value.trim();

        if(enteredCode === correctCode) {
            feedback.style.color = "green";
            feedback.textContent = "🎉 goedzo op naar het volgende level!";
            setTimeout(() => {
                window.location.href = "opdracht2.html";
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
