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
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns an array of URLs including urlified elements names
function fullUrls(elements) {
  return elements.map(element => `https://example.com/${urlify(element)}`);
}

// Filter
// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(element => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Returns an array of strings which include the substring 'Dakota'
function includesDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(includesDakota(states));

// doubles: Functional version
// Returns an array of strings which by splitting on whitespace turn into
// arrays of two elements
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubles(states));
