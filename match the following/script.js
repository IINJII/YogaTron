document.addEventListener('DOMContentLoaded', function () {
    const data = [
        { Yoga: "DHANURASANA", answer: "BOW POSE" },
        { Yoga: "DHRUVASANA", answer: "TREE POSE" },
        { Yoga: "EAGLE POSE", answer: "GARUDASANA" },
        { Yoga: "SAVASANA", answer: "CORPSE POSE" }
    ];

    const questionsList = document.getElementById('questions-list');
    const answersList = document.getElementById('answers-list');
    const textBoxesContainer = document.querySelector('.text-boxes');
    const scoreValue = document.getElementById('score-value');
    const checkAnswersButton = document.getElementById('check-answers');

    let score = 0;

    // Shuffle the data array to randomize questions and answers
    shuffle(data);

    // Populate the questions, answers, and textboxes
    data.forEach((item, index) => {
        const questionItem = document.createElement('li');
        questionItem.textContent = `${index + 1}. ${item.Yoga}`;
        questionsList.appendChild(questionItem);

        const answerItem = document.createElement('li');
        answerItem.textContent = `${String.fromCharCode(97 + index)}. ${item.answer}`;
        answersList.appendChild(answerItem);

        const textBox = document.createElement('input');
        textBox.type = 'text';
        textBox.placeholder = 'Enter answer (a, b, c, d)';
        textBox.id = `textbox-${index}`;
        textBoxesContainer.appendChild(textBox);
    });

    checkAnswersButton.addEventListener('click', () => {
        score = 0;

        data.forEach((item, index) => {
            const userAnswer = document.getElementById(`textbox-${index}`).value.trim().toLowerCase();
            const currentAnswer = item.answer.toLowerCase();

            if (userAnswer === currentAnswer[0]) {
                score += 10;
            }
        });

        scoreValue.textContent = score;
    });

    // Shuffle function to randomize array elements
    function shuffle(array) {
        let currentIndex = array.length, randomIndex, tempValue;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }
    }
});