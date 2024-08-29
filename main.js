const buttons = document.querySelectorAll(".btn");
const func = document.querySelector(".func");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const output = document.getElementById("output");
const form = document.querySelector("form")

form.addEventListener("submit", function(f){
    f.preventDefault()

    buttons.forEach(function (b){
        b.addEventListener("click", function(e){
            if(e.target.id === "*"){
                func.innerHTML = "*"
            }
            else if(e.target.id === "/"){
                func.innerHTML = "/"
            }
            else if(e.target.id === "+"){
                func.innerHTML = "+"
            }
            else if(e.target.id === "-"){
                func.innerHTML = "-"
            }
    })
  })
})