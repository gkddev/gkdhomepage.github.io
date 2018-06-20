var button = document.getElementById("button");
var input = document.getElementById("userinput");
button.addEventListener("click", addListAfterClick);
var ul = document.querySelector("ul");
var count=0;
var nooflist=4;
function inputLength() {
	return input.value.length;
}

function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function() {
		// creates a boolean that toggles the done class on li:
		// if the list item is clicked this toggles the done class
		var finished = this.classList.toggle("done");
		// creates a remove button for the finished item:
		var removeButton = document.createElement("button");
		removeButton.classList.add("deleteButton");

		// if the list item is clicked (li add event listener ) then 
		// finished is true
		if (finished) {
			removeButton.appendChild(document.createTextNode("remove"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
				count=count-1;

			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
			count=count-1;
		}
	})
	// revert input value back to nothing
	input.value = "";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
	count++;	
	if(count<nooflist)	
		{createListElement();}else{
			alert("complete the previous task");
			input.value="";
		}
	}
}

function addListAfterKeypress(event) {
		if (inputLength() > 0 && event.keyCode === 13) {count++;
			if(count<nooflist){
		createListElement();}
		else{
			alert("complete the previous task");
			input.value="";
		}
	}
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);