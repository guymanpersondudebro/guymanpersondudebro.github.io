
// JavaScript to handle saving text to local storage
function saveText() {
    // code to save text to local storage
    var text = document.querySelector("textarea").value;
    localStorage.setItem("savedText", text);
}

// JavaScript to handle loading text from local storage
function loadText() {
    // code to load text from local storage
    var savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.querySelector("textarea").value = savedText;
    }
}

// JavaScript to handle undo
function undo() {
    // code to undo the last action
    document.execCommand('undo');
}

// JavaScript to handle redo
function redo() {
    // code to redo the last undone action
    document.execCommand('redo');
}

// JavaScript to handle print
function printText() {
    // code to print the text
    window.print();
}

// JavaScript to handle find and replace
function findAndReplace() {
    // code to find and replace text
    var find = prompt("Enter the text to find:");
    var replace = prompt("Enter the replacement text:");
    var text = document.querySelector("textarea").value;
    var newText = text.replace(new RegExp(find, 'g'), replace);
    document.querySelector("textarea").value = newText;
}

// JavaScript to handle setting changes
function handleSettingChange(event) {
    var setting = event.target.value;
    if (setting === "dark-mode") {
        document.body.classList.toggle("dark-mode");
    } else if (setting === "dyslexia-mode") {
        document.body.classList.toggle("dyslexia-mode");
    } else if (setting === "font-size") {
        var newSize = prompt("Enter the new font size:");
        document.querySelector("textarea").style.fontSize = newSize + "px";
    }
}

// JavaScript to handle dropdown menu
var dropdownBtns = document.querySelectorAll(".dropdown-btn");
for (var i = 0; i < dropdownBtns.length; i++) {
    dropdownBtns[i].addEventListener("click", function(event) {
        var dropdown = event.target.nextElementSibling;
        dropdown.classList.toggle("show");
    });
}

// JavaScript to handle file upload
document.getElementById("file-input").addEventListener("change", function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        var text = reader.result;
        document.querySelector("textarea").value = text;
    }
    reader.readAsText(file);
});

