function myfunction() {
	document.getElementById("subs").style.visibility="visible";
	document.getElementById("n").style.visibility="visible";
	document.getElementById("p").style.visibility="visible";
	document.getElementById("b1").style.visibility="hidden";
	document.getElementById("b2").style.visibility="hidden";
	document.getElementById("b4").style.visibility="visible";
	document.getElementById("table_det").style.visibility="hidden";
	var x = document.getElementById("head");
	if(x.innerHTML === "My Phone Directory"){
		x.innerHTML="Add Subscriber";
	}
}
function changetext() {
	var a=document.getElementById("n").value;
	var b=document.getElementById("p").value;
	document.getElementById('displayname').innerHTML = a;
	document.getElementById('displayphone').innerHTML = b;
}
function myinput() {
	document.getElementById("subs").style.visibility="hidden";
	document.getElementById("n").style.visibility="hidden";
	document.getElementById("p").style.visibility="hidden";
	document.getElementById("b1").style.visibility="visible";
	document.getElementById("b2").style.visibility="visible";
	document.getElementById("b4").style.visibility="hidden";
	document.getElementById("table_det").style.visibility="hidden";
}
function goback() {
	document.getElementById("subs").style.visibility="hidden";
	document.getElementById("n").style.visibility="hidden";
	document.getElementById("p").style.visibility="hidden";
	document.getElementById("b1").style.visibility="visible";
	document.getElementById("b2").style.visibility="visible";
	document.getElementById("b4").style.visibility="hidden";
	document.getElementById("table_det").style.visibility="hidden";
}
function showdetails() {
	document.getElementById("table_det").style.visibility="visible";
}
 function Remove(button) {
    var row = button.parentNode;
    var name = row.getElementsByTagName("td")[0].innerHTML;
    if (confirm("Do you want to delete: " + name)) {
	     var tr = event.target.parentNode; 
		 tr.parentNode.removeChild(tr);
       }
  }
function insertdata(argument) {
	var x=document.getElementById('table_det').insertRow(1);
	var y=x.insertCell(0);
	var z=x.insertCell(1);
	var a=document.getElementById("n").value;
	var b=document.getElementById("p").value;
	y.innerHTML=a;
	z.innerHTML=b;
	var btnRemove = document.createElement("INPUT");
    btnRemove.type = "button";
    btnRemove.value = "Delete";
    btnRemove.setAttribute("onclick", "Remove(this);");
    x.appendChild(btnRemove);
	document.getElementById("n").value="";
	document.getElementById("p").value="";
	document.getElementById('displayname').innerHTML = "";
	document.getElementById('displayphone').innerHTML = " ";
	myinput();
}
