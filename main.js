// variables
var submitBtn=document.getElementById('submit')
var deleteBtn=document.getElementById('delete')
let inputText=document.getElementById('userText')
var ul=document.getElementById('mylist')
var index=0;
var icon=document.getElementsByTagName('i')


function addItem() {

    var li = document.createElement("li");
    var text=inputText.value;
    console.log(text);
    li.innerHTML= text +'<i  class="fa-solid fa-trash" onclick="deleteItem(this)"></i>';  
    ul.appendChild(li);
    inputText.value="";
    index++;
}

function deleteAll()
{
    ul.innerHTML="";
}
function deleteItem(icon) {
    var li = icon.parentElement;
    li.remove();
}





