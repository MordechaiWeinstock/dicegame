const dice = document.querySelector("img"),
    button = document.querySelector("button"),
    scoreCounter = document.querySelector("#score"),
    instructions = document.querySelector("h3"),
    play = () => {
        roll = Math.floor(Math.random() * 6) + 1;
        dice.src = `images/dice${roll}.png`;
        if (roll === 1) {
            gameRunning = false;
            instructions.textContent = "You're out! Click 'roll' to start again."
        } else {
            score += roll;
            scoreCounter.textContent = score;
            if (score >= 20) {
                gameRunning = false;
                instructions.textContent = "Reached 20. YOU'RE A WINNER! Click 'roll' to start a new game."
            }
        }
    },
    app = () => {
        button.addEventListener("click", () => {
            if (gameRunning === false) {
                gameRunning = true;
                score = 0;
                scoreCounter.textContent = score;
                instructions.textContent = "";
                play();
            } else {
                play();
            }
        })
    };

let roll,
    score = 0,
    gameRunning = true;

app();