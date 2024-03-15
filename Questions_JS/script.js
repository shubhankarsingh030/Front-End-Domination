let form = document.querySelector("form");
let inp1 = document.querySelector("#inp1")
let inp2 = document.querySelector("#inp2")
let h3   = document.querySelector("h3")

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    if(inp1.value === "" || inp2.value === ""){
        h3.textContent = "error, some fields are still blank";
        h3.style.color = "red";
    }
    else{
        h3.textContent = "";
        h3.style.color = "";
    }
})