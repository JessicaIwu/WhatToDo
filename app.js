//Algorithm

// 1. store the item in a var
// 2. create an event on the add inputBtn
// 3. let the call back be to append the new item in an li
// 4 -- create the li


const data = [
	{
		name : "play",
		done : false
	},
	{
		name : "Dance",
		done : false
	}
]


let renderItem = (data_)=>{

	let container = document.getElementById("myList");
	for (var i = 0; i < data_.length; i++) {
		
		let newRow 		= document.createElement("LI");
		let newText 	= document.createTextNode(data_[i].name);
		newRow.appendChild(newText);

		container.appendChild(newRow);
	}
}


renderItem(data);


function showItem(){

var addButton = document.getElementById("inputBtn");
	function addItem(event){
	        let item = document.getElementById("inputId").value;
	        	if(item === ""){
	        		alert("An item should be entered");
	        	}
	        	else{   		
				let node = document.createElement("LI");
				let textNode = document.createTextNode(item);
				    node.appendChild(textNode);
				let ul_ = document.getElementById("myList");
			    return ul_.appendChild(node);
	        	}
	}

	addButton.addEventListener("click", addItem);

	function addCheckBox(){
	var item = document.getElementById("inputId").value;
	 //console.log("yes"+item);

	}

	addButton.addEventListener("click", addCheckBox);
}

showItem();

//Algorithm

// 1. create a checkbox
// 2. Append a checkbox to each list using a loop

