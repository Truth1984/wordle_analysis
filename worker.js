let words = [];
words = window.wordsFull.limit;

let containsArray = (word = "", list = []) => {
  for (let i of list) if (word.indexOf(i) == -1) return false;
  return true;
};

let notContainsArray = (word = "", list = []) => {
  for (let i of list) if (word.indexOf(i) > -1) return false;
  return true;
};

let s = {};

s.searchContain = (include = [], exclude = []) => {
  return words.filter((v) => containsArray(v, include) && notContainsArray(v, exclude));
};

s.searchExact = (ls = [], namePosition = []) => {
  for (let [name, position] of namePosition) ls = ls.filter((v) => v[position] == name);
  return ls;
};

s.clickClear = () => {
  Object.values(document.getElementsByTagName("input")).map((v) => (v.value = ""));
};

s.clickSearch = () => {
  let includeStr = document.getElementById("include").value;
  let excludeStr = document.getElementById("exclude").value;
  let namePosition = [];
  for (let i = 0; i < 5; i++) {
    let char = document.getElementById(`i${i}`).value;
    if (char) namePosition.push([char, i]);
  }

  includeStr = includeStr ? includeStr.split("") : [];
  excludeStr = excludeStr ? excludeStr.split("") : [];

  let result = s.searchExact(s.searchContain(includeStr, excludeStr), namePosition);
  document.getElementById("result").value = result.join("\n");
  document.getElementById("length").value = result.length;
};

s.clickSearchFull = () => {
  words = window.wordsFull.full;
  s.clickSearch();
  words = window.wordsFull.limit;
};

s.clickKeyboardListener = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") s.clickSearch();
    if (e.key == "Escape") s.clickClear();
  });
};
