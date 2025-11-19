// script3.js

function myFunction() {
    alert("kijk voor hint onder het doosje");
}

document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "A3K2D5H6"; // Hier kun je je eigen passcode instellen
    const input = document.getElementById("passcode");
    const button = document.getElementById("submit-code");
    const feedback = document.getElementById("feedback");

    button.addEventListener("click", () => {
        const enteredCode = input.value.trim();

        if(enteredCode === correctCode) {
            feedback.style.color = "green";
            feedback.textContent = "🎉 goedzo je hebt alle levels gehaald!";
            setTimeout(() => {
                window.location.href = "gehaald.html";
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