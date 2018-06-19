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
console.log(greetings)
function load() {
	let english = [], romaji = [];	
	for (var key in greetingList) {
		english.push(greetingList[key][0]);
		romaji.push(greetingList[key][1]);
	}
}
greetings.addEventListener("click", load);

//Onclick on the button element, display the value.
const hiragana = document.querySelectorAll(" .table-cell");
console.log(hiragana);
function display(){

}
for (var i = 0; i < hiragana.length; i++) {
	hiragana[i].addEventListener("click", display);	
}
document.onselectionchange = function() {
 
}