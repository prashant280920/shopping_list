var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var all_li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function addClassDone(){
	this.classList.toggle('done');
}

//funaction to create Remove Button
function createRemoveBtn(li){
	var btn=document.createElement("button");
	btn.innerHTML = "Remove";
	li.appendChild(btn);
	btn.addEventListener("click",function(){
		this.parentNode.remove()
	});
}
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	createRemoveBtn(li); 
	
	li.addEventListener("click",addClassDone);  //adding "done" class to the new input
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

/*--------adding "remove" button and "done" class to all the first 6 elements---------*/
for (var i=0; i<all_li.length; i++){
	createRemoveBtn(all_li[i]);
	all_li[i].addEventListener("click",addClassDone);
}