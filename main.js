const buttons = document.querySelectorAll(".btn");
const func = document.querySelector(".func");
const resultButton = document.getElementById("="); // Renamed for clarity
const form = document.querySelector("form");

let operation = ""; // Store the selected operation

// Adding event listeners for the operator buttons
buttons.forEach(function (b) {
    b.addEventListener("click", function (e) {
        if (e.target.id !== "=") { // Exclude the "=" button
            operation = e.target.id;
            func.innerHTML = operation;
        }
    });
});

// Adding event listener for the form submission
form.addEventListener("submit", function (f) {
    f.preventDefault(); // Prevent form from submitting traditionally

    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    const output = document.getElementById("output");

    let res;

    if (operation === "*") {
        res = input1 * input2;
    } else if (operation === "/") {
        res = input1 / input2;
    } else if (operation === "+") {
        res = input1 + input2;
    } else if (operation === "-") {
        res = input1 - input2;
    }

    output.innerHTML = res;
});
