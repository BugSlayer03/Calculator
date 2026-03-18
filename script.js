const resultField = document.querySelector('.result');

const buttons = document.querySelectorAll('.button');
const cancelButton = document.querySelector('.cancel');

const mode = document.querySelector('.Mode');

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.value);
        if (e.target.value != '=' && e.target.value != 'X') {
            resultField.value += e.target.value;
        }
        else if (e.target.value == 'X') {
            resultField.value += '*';
        }
        else {
            resultField.value = eval(resultField.value);
        }
    });
});

cancelButton.addEventListener("click", (e) => {
    resultField.value = "";
});

mode.src = document.body.classList.contains("light")
    ? "moon-solid.png"
    : "sun-solid.png";

mode.addEventListener("click", () => {
    document.body.classList.toggle("light");

    mode.src = document.body.classList.contains("light")
        ? "moon-solid.png"
        : "sun-solid.png";
})
