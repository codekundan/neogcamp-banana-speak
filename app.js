var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")



btnTranslate.addEventListener("click", function clickEventHandler() {
    outputDiv.innerText = "banana translation " + inputText.value;
})


