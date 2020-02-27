const about = document.getElementById("modalAbout");

// Get the button that opens the modal
const buttons = document.getElementById("aboutMe");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    about.style.display = "none";
  }

// When the user clicks on the button, open the modal
buttons.onclick = function() {
  about.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == about) {
    about.style.display = "none";
  }
}
