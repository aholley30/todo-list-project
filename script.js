function updateCount() {
  var num_items = document.getElementsByClassName("todo_list").length - 2;//discount default and item adder
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var num_checked = 0;

  for(var i=1; i<checkboxes.length; i++) { //always skip first item
    if (checkboxes[i].checked) {
      num_checked+=1;
    }
  }
  
  var item = document.getElementById('items_remaining');
  if (num_items == 0 || (num_checked == num_items)) {
    item.innerText = '0 items remaining - Nice Job!';
    return;
  } 
  item.innerText = '' + num_items - num_checked + ' out of ' + num_items + ' remaining - Nice Job!'
}

function enterPressed() {
  let p = document.getElementById("default_item"); //Gets the first todo item
  let j = p.cloneNode(true); //makes a deep copy
  j.removeAttribute('id'); //id value should be unique
  j.setAttribute('class', "row todo_list") //remove the d-none class
  const content = document.getElementById('add_item').value; //Grab the content entered into input field
  document.getElementById('add_item').value = ''; //Clear input field
  j.querySelector('.strike').innerText = content; //Set the content of the todo otem
  j.querySelector('.right').innerText = ''; //Get rid of the streak text
  j.querySelector('.right').className = 'right'; //Get rid of fire icon
  j.querySelector('.inline').checked = false; //uncheck item if checked
  document.getElementById('centerme').appendChild(j); //append whole node to the bottom of the list
  p = document.getElementsByClassName('ta')[0]; //Grab the list item asking for input
  document.getElementById('centerme').appendChild(p); //Move the input list item back to the
}

// Get the input field
var input = document.getElementById("add_item");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  // console.log(event.key)
  if (event.key === "Enter") {
    event.preventDefault();
    enterPressed();
    updateCount();
    console.log('Enter pressed');
  }
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function menuFunc() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const alert = document.querySelector(".alert");
const dismissAlertButton = document.querySelector(".alert button");
 	

if (dismissAlertButton) {
  dismissAlertButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert.classList.add("alert-hidden");
    alert.classList.add("d-none");
  })
}