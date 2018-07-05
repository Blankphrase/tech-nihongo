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
const greetingList = {
		"おはよう" : ["good morning", "ohayou"],
		"こんにちは": ["hello", "konnichiha"],
		"こんばんは": ["good evening", "konbanha"],
		"おやすみ": ["good night", "oyasumi"], 
		"さようなら": ["good bye", "sayounara"],
		"ばいばい": ["bye", "baibai"],
		"またあとで": ["see you later", "mataatode"]
}
const greetingListTest = {
		"おはよう" : {"good morning":"ohayou"},
		"こんにちは": {"hello":"konnichiha"},
		"こんばんは": {"good evening":"konbanha"},
		"おやすみ": {"good night":"oyasumi"}, 
		"さようなら": {"good bye":"sayounara"},
		"ばいばい": {"bye":"baibai"},
		"またあとで": {"see you later":"mataatode"}
}
console.log(greetingList["おはよう"]);
for (var key in greetingList) {
	if (greetingList.hasOwnProperty(key)){
		console.log(key);
	}
}

//Onlick display english-romaji list one word at a time. 
const english = document.querySelector(" .english");
const romaji = document.querySelector(" .romaji");
const greetings = document.querySelector(" #greetings");
console.log(english, romaji, greetings);

var englishList = function () {
	let englishList = [];
	for (var key in greetingList) {
		englishList.push(greetingList[key][0]);
	}
	return english.innerHTML = englishList;
}
var romajiList = function () {
	let romajiList = [];
	for (var key in greetingList) {
		romajiList.push(greetingList[key][1]);
	}
	return romaji.innerHTML = romajiList;
};
console.log(englishList(), romajiList());

function showQuestion(){
	console.log(englishList());
}
console.log(showQuestion());
greetings.addEventListener("click",showQuestion());
//Hit next, disply next word in the array.
//Hit back, disply the previous word.
//Not working
const nextButton = document.querySelector(" .next-button");
function showNext() {
	englishList();
	for (var i = 0; i < englishList.length; i++) {
		if (typeof nextButton.onclick) {
			return english.innerHTML = englishList[i+1]
		}
	}
}
nextButton.addEventListener("click", showNext);

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
	//Get keys in String of hiragana ojbects
	//convert them toString
	//Store in an array variable.
	//Get current user input.
	//Compare the two Strings.
	//If true, show in blue color, else in red.
} 

//show the correct hiragana spelling.
const answerButton = document.getElementById("answer-button");
function showAnswer(){
 //Get keys in String of hiragana ojbects
 //Check which key is displayed on the screen
 //Display it
answerButton.addEventListener("click", showAnswer);
