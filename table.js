//add Row
function addTableRow() {
	//get all elements
	var lastName = document.getElementById("lastName");
	var firstName = document.getElementById("firstName");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");

    //check if input is empty before add
    if (
    	!lastName.value.trim() ||
    	!firstName.value.trim() ||
    	!email.value.trim() ||
    	!contact.value.trim()
    ) {
    	alert('Please input information!');
    	return;
	}

	//check if button use is to add or to save
	if (document.querySelector("#add").value === "Save") {
		const row = document.querySelector("#edited");
	    const edit = row.querySelector("input.edit");

	    row.querySelector("td:nth-child(1)").innerHTML = lastName.value;
	    row.querySelector("td:nth-child(2)").innerHTML = firstName.value;
	   	row.querySelector("td:nth-child(3)").innerHTML = email.value;
	   	row.querySelector("td:nth-child(4)").innerHTML = contact.value;

	    // restore add button label	  
	    document.querySelector("#add").value = 'Add';
	    
	    // display edit btn
	    edit.parentElement.style.display = 'block';

	    // remove previously added edited id to edited row
	    row.removeAttribute('id');

	} else {
	    var table = document.getElementById("tabData");

	    var rowCount = table.rows.length;
	    var row = table.insertRow(rowCount);

	    row.insertCell(0).innerHTML= lastName.value;
	    row.insertCell(1).innerHTML= firstName.value;
	    row.insertCell(2).innerHTML= email.value;
	    row.insertCell(3).innerHTML= contact.value;
	    row.insertCell(4).innerHTML= '<input type="button" value="Edit" class="edit" onclick="editRow(this)"> <input type="button" value="Delete" class="delete" onclick="Javascript:deleteRow(this)">';
	}

	//clear input values
    document.getElementById("lastName").value = '';
    document.getElementById("firstName").value = ' ';
    document.getElementById("email").value = ' ';
    document.getElementById("contact").value = ' ';
}

//add table
function addTable() {
	var myTable = document.getElementById("tabData");

	var table = document.createElement('TABLE');
    table.border='1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i=0; i<4; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
}

//delete row
function deleteRow(val) {
	var index = val.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tabData");
    table.deleteRow(index);
}

//edit row
function editRow(val) {
	const row = val.parentElement.parentElement;

	//take value and place in input
	document.getElementById("lastName").value = row.querySelector("td:nth-child(1)").innerText;
    document.getElementById("firstName").value = row.querySelector("td:nth-child(2)").innerText;
    document.getElementById("email").value = row.querySelector("td:nth-child(3)").innerText;
    document.getElementById("contact").value = row.querySelector("td:nth-child(4)").innerText;	

    //eplace add button label to save
    document.querySelector("#add").value = 'Save';
    
    //hide edit btn
    val.parentElement.style.display = 'none';

    //assign id to row to access later during saving
    row.setAttribute('id', 'edited');
}

//attach click to add button
document.querySelector("#add").addEventListener("click", addTableRow);