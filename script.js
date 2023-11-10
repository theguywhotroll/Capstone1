
// JavaScript function to type a heading letter by letter
function typeHeading(text, element, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Function to initiate the typing animation
function startTyping() {
  const headingText = `Elevate your Style with Libaas. Your One Stop for Fashion.`;
  const typingElement = document.getElementById("heading")
  const typingSpeed = 50;

  typeHeading(headingText, typingElement, typingSpeed);
}

// Call startTyping when the page loads
window.onload = startTyping;



    // login validation 

    function validation() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (username === "admin" && password === "admin") {
          alert("Login successful!");
      } else {
          alert("Wrong credentials. Please try again.");
      }
  }