// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns the username and domain of an email address
function emailParts(email) {
  return email.split('@');
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function() {
    return this.processedContent() === reverse(this.processedContent());
  }

  // Returns all-caps version of the content
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

    // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
