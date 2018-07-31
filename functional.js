let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach((element) => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return states.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns an array of URLs including urlified elements names
function fullUrls(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}
