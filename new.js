
var msg=document.getElementById("message");
var str=document.getElementById("strenght");
var pass = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

pass.addEventListener('input',()=> {
    if(pass.value.length>0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor="#ff5925";
        msg.style.color = "#ff5925";
    } else  if (pass.value.length >=4  && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor="yellow";
        msg.style.color = "yellow";
    }
else if(pass.value.length >= 8){
    str.innerHTML = "strong";
    pass.style.borderColor="#26d730";
        msg.style.color = "#26d730";
}
})




// When the user clicks on the password field, show the message box
pass.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
pass.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
pass.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(pass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(pass.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(pass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(pass.value.length <= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}


// pass