var numbers = [7, 13, 25, 37, 42];
console.log("Előre meghatározott tömb:", numbers);

function checkNumber() {
  var userNumber = parseInt(document.getElementById("userNumber").value);
  var found = false;
  
  // Ciklussal ellenőrizzük, hogy szerepel-e a tippelt szám a tömbben
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === userNumber) {
      found = true;
      break;
    }
  }
  
  var result = document.getElementById("result");
  if (found) {
    result.textContent = "Gratulálok! A számod (" + userNumber + ") szerepel a tömbben!";
  } else {
    result.textContent = "Sajnálom, a számod (" + userNumber + ") nem szerepel a tömbben.";
  }
}
