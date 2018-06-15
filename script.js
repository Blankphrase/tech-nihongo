//TODO create a dropdown function for a navigate bar
const dropdown5w1h = document.querySelector(".nav-5w1h"); 
const dropdownContent = document.querySelectorAll(".dropdown-content");
const dropdownContainer = document.querySelector(" .mouseout");

//Test
console.log(dropdown5w1h);
console.log(toString.call(dropdownContent));
console.log(dropdownContainer);

//When a mouse is over the 5W1H, show the hidden dropdown menu.
//When a mouse is over the shown dropdown menue, keep showing the menu
//when a mouse is out from both 5W1H and the dropdown menu, remove the menu
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


