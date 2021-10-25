const input = document.getElementById("checker"),
  form = document.getElementById("checker-form"),
  btn = document.getElementById("checker-btn"),
  word = document.getElementById("pal-word"),
  ans = document.getElementById("pal-ans"),
  green = document.getElementById("bg-green"),
  red = document.getElementById("bg-red");

const isPalindrome = (str) => {
  str = str.replace(/[\W+|_]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // @ts-ignore
  if (input.value.replace(/[\W+|_]/g, "").toLowerCase() == "") {
    word.textContent = "Please enter something";
    ans.textContent = "";
    input.style.boxShadow = "0px 2px 13px -2px rgba(255, 1, 1, 0.6)";
    btn.style.boxShadow = "0px 2px 13px -2px rgba(255, 1, 1, 0.6)";
    return;
  } else {
    // @ts-ignore
    word.textContent = input.value + " ";
    // @ts-ignore
    if (isPalindrome(input.value)) {
      ans.textContent = "‎ ‎is palindrome!";
      // body.style.backgroundImage = linearGreen;
      if (red.classList.contains("opac")) {
        red.classList.remove("opac");
      }
      green.classList.add("opac");
      input.style.boxShadow = "0px 2px 13px -2px rgba(56, 245, 81, 1)";
      btn.style.boxShadow = "0px 2px 13px -2px rgba(56, 245, 81, 1)";
    } else {
      ans.textContent = "‎ ‎is not palindrome!";
      if (green.classList.contains("opac")) {
        green.classList.remove("opac");
      }
      red.classList.add("opac");
      input.style.boxShadow = "0px 2px 13px -2px rgba(255, 1, 1, 0.6)";
      btn.style.boxShadow = "0px 2px 13px -2px rgba(255, 1, 1, 0.6)";
    }
  }
});

setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);
