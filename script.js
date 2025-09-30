function checkAnswers() {
    const correctAnswers = {
        q1: "C",
        q2: "C",
        q3: "B",
        q4: "B",
        q5: "B",
        q6: "C",
        q7: "D",
        q8: "C",
        q9: "C",
        q10: "B"
    };

    let score = 0;
    let total = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        let answer = document.querySelector(`input[name="${key}"]:checked`);
        if (answer && answer.value === correctAnswers[key]) {
            score++;
        }
    }

    let percentage = (score / total) * 10; // nota de 0 a 10
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerHTML =
        `Você acertou <strong>${score}</strong> de ${total} questões.<br>Sua nota foi: <strong>${percentage.toFixed(1)}</strong>`;
}