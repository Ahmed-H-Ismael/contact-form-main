const btn = document.querySelector(".btn")
const myinput = document.querySelectorAll('input[type="text"]')
const myRadio1 = document.querySelector(".myradio1")
const myRadio2 = document.querySelector(".myradio2")
const myemail = document.querySelector('input[type="email"]')
const mytextarea = document.getElementById("Message")
const mycheckbox = document.getElementById("checkbox");
const model = document.querySelector(".model");
let message = true
btn.addEventListener("click",function(e){

    e.preventDefault()
    checkEmpty()
    checkemail()
    textempty()
    checkRadio()
    if(message){  
        model.style.display = "block" 
}

})
function checkEmpty(){
    myinput.forEach(function(input){
        const inputValue = input.value
        if(inputValue.trim() == ""){
            input.nextElementSibling.classList.add("active")
            input.classList.add("nonactive");
            message = false
        }
    })
}
function textempty(){
        const textValue = mytextarea.value
        if(textValue.trim() == ""){
            mytextarea.nextElementSibling.classList.add("active")
            mytextarea.classList.add("nonactive")
            message = false
        }
        if(!mycheckbox.checked){
            mycheckbox.nextElementSibling.classList.add("active")
            message = false
        }

}
function checkemail(){
    const check = new Set([...myemail.value]);
    if(!check.has("@")){
        myemail.nextElementSibling.classList.add("active")
        myemail.classList.add("nonactive")
        message = false
    }
}
function checkRadio(){
        const radiovalue1 = myRadio1.checked;
        const radiovalue2 = myRadio2.checked;
        if(!radiovalue1 && !radiovalue2){
            document.querySelector(".radio-content").nextElementSibling.classList.add("active")
            message = false
        }
    }
