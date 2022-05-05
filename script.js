/* Do work here */

const primaryButton = document.getElementsByClassName("primary-button");
const secondaryButton = document.getElementById("secondary-button");



for (const button of primaryButton) {
    button.addEventListener('click', function onClick() {
        button.style.color = "blue";
    });
}

document.getElementById("secondary-button").addEventListener('click', function onclick() {
    secondaryButton.style.color = "red";
});


