function getInput() {
  return document.getElementById("input_data").value || "";
}

function setResult(value) {
  document.getElementById("result").value = value;
}

function enter_data() {
  setResult(getInput());
}

function count_upper() {
  const text = getInput();
  const matches = text.match(/[A-Z]/g);
  const count = matches ? matches.length : 0;
  setResult("Number of uppercase letters: " + count);
}

function upper_display() {
  setResult(getInput().toUpperCase());
}

function word_per_line() {
  const words = getInput().trim().split(/\s+/).filter(Boolean);
  setResult(words.join("\n"));
}

function lower_display() {
  setResult(getInput().toLowerCase());
}

function word_count() {
  const words = getInput().trim().split(/\s+/).filter(Boolean);
  setResult("Word count: " + words.length);
}

function count_lower() {
  const text = getInput();
  const matches = text.match(/[a-z]/g);
  const count = matches ? matches.length : 0;
  setResult("Number of lowercase letters: " + count);
}

function print_vowels_consonants() {
  const text = getInput();
  const letters = (text.match(/[A-Za-z]/g) || []).join("");
  const vowels = (letters.match(/[AEIOUaeiou]/g) || []).join("");
  const consonants = (letters.match(/[^AEIOUaeiou]/g) || []).join("");
  setResult("Vowels:\n" + vowels + "\n\nConsonants:\n" + consonants);
}

// Mở trang web W3C
function process_web() {
  window.open("https://www.w3schools.com/js/js_string_methods.asp", "_blank");
}
