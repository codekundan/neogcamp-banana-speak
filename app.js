var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#txt-input")

console.log(inputText);

console.log(btnTranslate);

btnTranslate.addEventListener("click", function clickEventHandler() {
    console.log("Clicked");
    console.log(inputText.value);
})


