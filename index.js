document.getElementById(`button`).onclick = function () {
  const input = document.getElementById(`input`).value;
  const output = document.getElementById(`output`);
  const images = [];
  const num = [];
  let generatednum;
  if (input > 6) {
    window.alert(`Enter a number between 1 to 6.`);
  } else {
    for (i = 1; i <= input; i++) {
      generatednum = Math.floor(Math.random() * 6 + 1);
      console.log(generatednum);
      num.push(generatednum);
      images.push(`<img src="images/dice-six-faces-${generatednum}.svg">`);
    }
    document.getElementById(`number`).textContent = num;
    output.innerHTML = images;
  }
};
