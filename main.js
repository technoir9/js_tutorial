let Phrase = require("mhartl-palindrome");

function palindromeTester(event) {
  event.preventDefault(); // Prevent the submission to the server
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content.bold()}"
                                  is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content.bold()}"
                                  is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
