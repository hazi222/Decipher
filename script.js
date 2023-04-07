// Get the input element and the encode and decode buttons
const inputElement = document.getElementById("input");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");

// Get the output elements
const encodedElement = document.getElementById("encoded");
const decodedElement = document.getElementById("decoded");

// Function to encode the message
function encodeMessage(message) {
  let encodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      encodedMessage += String.fromCharCode(((charCode - 97 + 3) % 26) + 97);
    } else if (charCode >= 65 && charCode <= 90) {
      encodedMessage += String.fromCharCode(((charCode - 65 + 3) % 26) + 65);
    } else {
      encodedMessage += message.charAt(i);
    }
  }
  return encodedMessage;
}

// Function to decode the message
function decodeMessage(message) {
  let decodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      decodedMessage += String.fromCharCode(((charCode - 97 - 3 + 26) % 26) + 97);
    } else if (charCode >= 65 && charCode <= 90) {
      decodedMessage += String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
    } else {
      decodedMessage += message.charAt(i);
    }
  }
  return decodedMessage;
}

// Add click event listeners to the encode and decode buttons
encodeBtn.addEventListener("click", function() {
  let message = inputElement.value;
  let encodedMessage = encodeMessage(message);
  encodedElement.textContent = encodedMessage;
});

decodeBtn.addEventListener("click", function() {
  let message = inputElement.value;
  let decodedMessage = decodeMessage(message);
  decodedElement.textContent = decodedMessage;
});
