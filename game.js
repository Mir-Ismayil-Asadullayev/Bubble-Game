let playerName = document.getElementById("player");
let playerScore = document.getElementById("score");
let playerHighScore = document.getElementById("high-score");
let gameZone = document.querySelector(".game");
let easyButton = document.getElementById("easy");
let mediumButton = document.getElementById("medium");
let hardButton = document.getElementById("hard");
let startButton = document.querySelector("#start");
let stopButton = document.getElementById("stop");
playerName.innerText = localStorage.getItem("ad");
let pop = new Audio("pop.mp3")
easyButton.disabled = true;
mediumButton.disabled = true;
hardButton.disabled = true;
stopButton.disabled = true;
easyButton.removeAttribute("id");
mediumButton.removeAttribute("id");
hardButton.removeAttribute("id");
stopButton.removeAttribute("id");
localStorage.setItem("highscore", 0);

let intervalMedium;
let interval;

startButton.addEventListener("click", () => {

    mediumButton.setAttribute("id", "medium");
    hardButton.setAttribute("id", "hard");
    stopButton.setAttribute("id", "stop");
    startButton.removeAttribute("id");
    mediumButton.disabled = false;
    hardButton.disabled = false;
    stopButton.disabled = false;
    stopButton.disabled = false;
    startButton.disabled = true;
    let counter = 0;

    mediumButton.addEventListener("click", () => {
        mediumButton.disabled = true;
        mediumButton.removeAttribute("id");
        easyButton.disabled = false;
        easyButton.setAttribute("id", "easy");

        intervalMedium = setInterval(() => {
            let bubble = document.createElement("div");
            bubble.style.backgroundColor = "red";
            bubble.style.border = "1px solid white";
            bubble.style.width = "25px";
            bubble.style.height = "25px";
            bubble.style.borderRadius = "50%";
            bubble.style.position = "absolute";
            let place1 = Math.ceil(Math.random() * 245);
            let place2 = Math.ceil(Math.random() * 295);
            bubble.style.top = place1 + "px";
            bubble.style.left = place2 + "px";

            bubble.addEventListener("click", () => {
                bubble.remove();
                pop.play();
                localStorage.setItem("point", counter += 10);
                playerScore.innerText = localStorage.getItem("point");
            });

            gameZone.appendChild(bubble);

            if (gameZone.getElementsByTagName('*').length == 50) {
                gameZone.innerHTML = "";
                startButton.setAttribute("id", "start");
                startButton.disabled = false;
                stopButton.disabled = true;
                stopButton.removeAttribute("id");
                easyButton.disabled = true;
                mediumButton.disabled = true;
                hardButton.disabled = true;
                easyButton.removeAttribute("id");
                mediumButton.removeAttribute("id");
                hardButton.removeAttribute("id");
                clearInterval(interval);
                clearInterval(intervalMedium);
            }

        }, 1000);

    });



    interval = setInterval(() => {
        let bubble = document.createElement("div");
        bubble.style.backgroundColor = "red";
        bubble.style.border = "1px solid white";
        bubble.style.width = "25px";
        bubble.style.height = "25px";
        bubble.style.borderRadius = "50%";
        bubble.style.position = "absolute";
        let place1 = Math.ceil(Math.random() * 245);
        let place2 = Math.ceil(Math.random() * 295);
        bubble.style.top = place1 + "px";
        bubble.style.left = place2 + "px";

        bubble.addEventListener("click", () => {
            bubble.remove();
            pop.play();
            localStorage.setItem("point", counter += 10);
            playerScore.innerText = localStorage.getItem("point");
        });

        gameZone.appendChild(bubble);

        if (gameZone.getElementsByTagName('*').length == 50) {
            gameZone.innerHTML = "";
            startButton.setAttribute("id", "start");
            startButton.disabled = false;
            stopButton.disabled = true;
            stopButton.removeAttribute("id");
            easyButton.disabled = true;
            mediumButton.disabled = true;
            hardButton.disabled = true;
            easyButton.removeAttribute("id");
            mediumButton.removeAttribute("id");
            hardButton.removeAttribute("id");
            clearInterval(interval);
            clearInterval(intervalMedium);
        }

    }, 1000);




    stopButton.addEventListener("click", () => {
        playerScore.innerText = "";
        if (parseInt(localStorage.getItem("point")) >= parseInt(localStorage.getItem("highscore"))) {
            localStorage.setItem("highscore", localStorage.getItem("point"));
            playerHighScore.innerText = localStorage.getItem("highscore");
        }
        gameZone.innerHTML = "";
        startButton.setAttribute("id", "start");
        startButton.disabled = false;
        stopButton.disabled = true;
        stopButton.removeAttribute("id");
        easyButton.disabled = true;
        mediumButton.disabled = true;
        hardButton.disabled = true;
        easyButton.removeAttribute("id");
        mediumButton.removeAttribute("id");
        hardButton.removeAttribute("id");
        clearInterval(interval);
        clearInterval(intervalMedium);
    });





});
