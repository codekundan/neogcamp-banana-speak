var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
   return serverUrl + "?text=" + text; 
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server. Please try some other time");
}



btnTranslate.addEventListener("click", function clickEventHandler() {
    // outputDiv.innerText = "banana translation " + inputText.value;

    var inputText = txtInput.value; 

    fetch(getTranslationUrl(inputText))
    .then(response => response.json()).then(json => { outputDiv.innerText = json.contents.translated}).catch(errorHandler);

    
})


