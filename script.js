const navGrammer = document.querySelector(".nav-grammar");
const dropdownContentGrammar = document.querySelector(".dropdown-content-grammar");
const nav5w1h = document.querySelector(".nav-5w1h");
const dropdownContent5w1h = document.querySelector(".dropdown-content-5w1h");
console.count(nav5w1h, navGrammer, dropdownContentGrammar, dropdownContent5w1h);

function showGrammar(){
	dropdownContentGrammar.style.display = "block";	
}
function hideGrammar(){
	dropdownContentGrammar.style.display = "none";
}
navGrammer.addEventListener("mouseover", showGrammar);
dropdownContentGrammar.addEventListener("mouseover", showGrammar);
navGrammer.addEventListener("mouseleave", hideGrammar);
dropdownContentGrammar.addEventListener("mouseleave", hideGrammar);

function show5w1h(){
	dropdownContent5w1h.style.display = "block";
}
function hide5w1h(){
		dropdownContent5w1h.style.display = "none";
}
nav5w1h.addEventListener("mouseover", show5w1h);
dropdownContent5w1h.addEventListener("mouseover", show5w1h);
dropdownContent5w1h.addEventListener("mouseleave", hide5w1h);
nav5w1h.addEventListener("mouseleave", hide5w1h);

//test
const greetingListTest = {
		"おはよう" : {"good morning":"ohayou"},
		"こんにちは": {"hello":"konnichiha"},
		"こんばんは": {"good evening":"konbanha"},
		"おやすみ": {"good night":"oyasumi"}, 
		"さようなら": {"good bye":"sayounara"},
		"ばいばい": {"bye":"baibai"},
		"またあとで": {"see you later":"mataatode"}
}
for(var key in greetingListTest.おはよう){
	console.log(key);
}

//Onlick display english-romaji list one word at a time. 
const english = document.querySelector(" .english");
const romaji = document.querySelector(" .romaji");
const greetings = document.querySelector(" #greetings");
console.log(english, romaji, greetings);


//Create a function to load list of words
const COMPLETED = 4;
const OK = 200;
function loadWord() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState == COMPLETED && 
			this.status == OK){
			//show the first word
			
		}
		xhrequest.open("GET", "/greetings");
		xhrequest.send();
	}
}
greetings.addEventListener("click", loadWord);

//Create a slide function that is fired when clicking next and back
const nextButton = document.querySelector(" .next-button");
const backButton = document.querySelector(" .back-button");
function slideWord() {

}
nextButton.addEventListener("click", slideWord);
backButton.addEventListener("click", slideWord);

//Onclick on the button element, display the value.
const hiraganaInput = document.querySelectorAll(".table-cell button");
const outputArea = document.querySelector(" .output-area");
function outputChar() {
	if (outputArea.innerHTML === "Your Output Here!"){
		outputArea.innerHTML = "";
	}
	outputArea.textContent += this.textContent.trim();
}
buttonArray = Array.prototype.slice.call(hiraganaInput);
buttonArray.forEach(function(button) {
	button.addEventListener("click", outputChar)
});

//Reset user's answer
const resetButton = document.getElementById("reset-button");
function resetOutput() {
	outputArea.innerHTML = "Your Output Here!"	
}
resetButton.addEventListener("click", resetOutput);

//check user answer and displayed hiragana is same.
function checkAnswer(){
	//Get hiragana
	//Get current user input.
	//Compare the two Strings.
	//If true, show in blue color, else in red.
}

//show the correct hiragana spelling.
const answerButton = document.getElementById("answer-button");
function showAnswer(){
 // Get keys in String of hiragana ojbects
 // Check which key is displayed on the screen
 // Display it
}
answerButton.addEventListener("click", showAnswer);