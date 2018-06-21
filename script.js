const dropdown5w1h = document.querySelector(".nav-5w1h"); 
const dropdownContent = document.querySelectorAll(".dropdown-content");
const dropdownContainer = document.querySelector(" .mouseout");

//Test
console.log(dropdown5w1h);
console.log(toString.call(dropdownContent));
console.log(dropdownContainer);

//Hover the 5W1H, show the hidden dropdown menu.
//Hover the shown dropdown menue, keep showing the menu
//Mouse out from 5W1H and dropdown menu, remove the menu
function show() {
	for(var i = 0; i < dropdownContent.length; i++) {
		if (dropdownContent[i].style.display === "none") {
			dropdownContent[i].style.display = "block";
			//dropdownContainer.classList.remove("mouseout");
			//dropdownContainer.classList.add("mouseover");
		} else {
			dropdownContent[i].style.display = "none";
		}
	}
}
console.log(dropdownContainer);
function hide() {
	for (var i = 0; i < dropdownContent.length; i++) {
		if (dropdownContent[i].style.display === "block" && dropdownContainer === "mouseover"){
			dropdownContent[i].style.display = "none";
		} else {
			dropdownContent[i].style.display = "block";
		}		
	}
}

dropdown5w1h.addEventListener("mouseover", show);
//dropdown5w1h.addEventListener("mouseleave", hide);

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
//test
console.log(greetingList["おはよう"]);
for (var key in greetingList) {
	if (greetingList.hasOwnProperty(key)){
		console.log(key);
	}
}

//Onlick display english-romaji list one word at a time. 
//Hit next, disply next word in the array.
//Hit back, disply the previous word.
const english = document.querySelector(" .english");
const romaji = document.querySelector(" .romaji");
const greetings = document.querySelector(" .greetings");
//test
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
greetings.addEventListener("click",englishList);
greetings.addEventListener("click",romajiList);

console.log(englishList, romajiList);

//Not working
const nextButton = document.querySelector(" .next-button");
function displayNext() {
	for (var i = 0; i < englishList.length; i++) {
		if (typeof nextButton.onclick) {
			return english.innerHTML = englishList[i+1]
		}
	}
}
nextButton.addEventListener("click", displayNext);

//Onclick on the button element, display the value.
const hiraganaInput = document.querySelectorAll(".table-cell button");
//test OMG it works thanks StackOverFlow
function hiraganaOutput() {
	var inputArea = document.querySelector(" .hiraganaOutput");
	inputArea.textContent += this.textContent.trim();
}
buttonArray = Array.prototype.slice.call(hiraganaInput);
buttonArray.forEach(function(button) {
	button.addEventListener("click", hiraganaOutput)
});
console.log(inputArea);

//Hide the message when hiraganaInput
const defaultMessage = document.querySelector(" .default-message");
function hideMessage() {


}
defaultMessage.addEventListener("click", hideMessage);

//Compare the input and greetings keys
//Reset the content
const resetButton = document.getElementById("reset-button");
console.log(resetButton);
function resetInput(e) {
	e.preventDefault();
	defaultMessage.style.display = "block";	
}
resetButton.addEventListener("click", resetInput);

