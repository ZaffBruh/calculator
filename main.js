const form = document.querySelector("form")
const button = document.querySelectorAll("button")
const func = document.querySelector(".func")

form.addEventListener("submit", function(e){
    e.preventDefault()

    const in1 = document.querySelector("#input1").value
    const in2 = document.querySelector("#input2").value
    const output = document.querySelector("#output")

    if(e.target.id === "x"){
        func.innerHTML = "x"
    }
    if(e.target.id === "/"){
        func.innerHTML = "/"
    }
})

button.forEach(function (f){
    f.addEventListener("click", function(e){
        if(e.target.id === "x"){
            func.innerHTML = "x"
        }
        if(e.target.id === "/"){
            func.innerHTML = "/"
        }
        if(e.target.id === "+"){
            func.innerHTML = "+"
        }
        if(e.target.id === "-"){
            func.innerHTML = "-"
        }
    })
})