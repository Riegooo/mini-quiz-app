const prompt = require("prompt-sync")();

const questions = [
    {
        question: "What is the capital city of Japan?",
        options: ["A. Beijing", "B. Seoul", "C. Tokyo", "D. Bangkok"],
        correctAnswer: "C",
    },
    {
        question: "How many planets are in our Solar System?",
        options: ["A. 7", "B. 8", "C. 9", "D. 10"],
        correctAnswer: "B",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["A. Elephant", "B. Blue whale", "C. Giraffe", "D. Orca"],
        correctAnswer: "B",
    },
    {
        question: "What language do people speak in Brazil?",
        options: ["A. Spanish", "B. Portuguese", "C. English", "D. French"],
        correctAnswer: "B",
    },
    {
        question: "What is 9 × 9?",
        options: ["A. 81", "B. 72", "C. 90", "D. 99"],
        correctAnswer: "A",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
        "A. Pablo Picasso",
        "B. Leonardo da Vinci",
        "C. Vincent van Gogh",
        "D. Michelangelo",
        ],
        correctAnswer: "B",
    },
    {
        question: "What gas do humans breathe in to survive?",
        options: ["A. Carbon dioxide", "B. Hydrogen", "C. Oxygen", "D. Nitrogen"],
        correctAnswer: "C",
    },
    {
        question: "What is the opposite of “cold”?",
        options: ["A. Warm", "B. Wet", "C. Hot", "D. Dry"],
        correctAnswer: "C",
    },
    {
        question: "What is the main color of a banana?",
        options: ["A. Green", "B. Yellow", "C. Red", "D. Orange"],
        correctAnswer: "B",
    },
    {
        question: "In which direction does the sun rise?",
        options: ["A. West", "B. North", "C. East", "D. South"],
        correctAnswer: "C",
    },
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    console.log(`\nQuestion ${i + 1}: ${questions[i].question}`);

    for (let option of questions[i].options) {
        console.log(option);
    }

    let answer = "";
    while (answer === "") {
        answer = prompt("Your answer (A, B, C, or D): ").toUpperCase().trim();
        if (answer === "") {
        console.log("Please enter an answer before continuing.");
        }
    }

    if (answer === questions[i].correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(
        `Wrong! The correct answer is ${questions[i].correctAnswer}.`
        );
    }
}

console.log(`\nYou got ${score} out of ${questions.length} correct!`);
