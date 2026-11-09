let passwordBox = document.getElementById("password");
let verdict = document.getElementById("verdict");

passwordBox.addEventListener("input", function () {
  let pw = passwordBox.value;
  let score = 0;

    for(let i=8;i<pw.length;i++) {
      score += 1;
    }
  
//gives score only when minimum length is met
  verdict.textContent = "Score: " + score;
  verdict.textContent = "Strength: " + (score>=4 ? "strong" : score>=1 ? "medium" : "weak");
}); //nested if condtion