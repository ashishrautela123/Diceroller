let images = ["dice-01.jpeg",
    "dice-02.jpeg",
    "dice-03.jpeg",
    "dice-04.jpeg",
    "dice-05.jpeg",
    "dice-06.jpeg"];
let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue, dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", "/images/" + images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", "/images/" + images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    },
        1000
    );
}
roll();