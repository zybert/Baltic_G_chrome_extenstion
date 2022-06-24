//in Latvia new personal codes have "32" and random numbers.
function generateLVPerCode () {
  const twoFirstNumbers = "32";
  let nineLastNumbers = String(Math.random() * (999999999 - 111111111) + 111111111);
  nineLastNumbers = nineLastNumbers.substring(0,9);
  lvPersonalCode = twoFirstNumbers + "-" + nineLastNumbers;

  return lvPersonalCode;
}

function generateLtPerCode (age, gender)  {
//Convert age to birth year. Current year minus age minus 1day. 
let today = new Date();
birthYear = String(today.getFullYear() - age);
birthMonth = String(today.getMonth() + 1).padStart(2, '0');
birthDay = String(today.getDate()).padStart(2, '0');

let birthData = (birthYear + birthMonth + birthDay);
    
//Adding a gender number.
let century = birthData.substring(0, 2);
genderNumber = century * 2 -34 - gender;
genderNumber = String(genderNumber);

personalCode = genderNumber.substring(0) + birthData.substring(2,10);


let serialNumber = String(Math.floor(Math.random() * 999));
serialNumber = serialNumber.padStart(3, '0');

personalCode = personalCode +serialNumber;

//Check sum number. - from wikipedia
function lt_nin_checksum(code) {
    var b = 1, c = 3, d = 0, e = 0, i, digit;
    for (i = 0; i < 10; i++) {
      digit = parseInt(code[i]);
      d += digit * b;
      e += digit * c;
      b++; if (b == 10) b = 1;
      c++; if (c == 10) c = 1;
    }
    d = d % 11;
    e = e % 11;
    if (d < 10)
      return d;
    else if (e < 10)
      return e;
    else
      return 0;
  }
  
personalCode = personalCode + lt_nin_checksum(personalCode); //adding 11 checksum digit.

return personalCode;

}

form.addEventListener('submit',(e) => {
  e.preventDefault()

  const age = document.getElementById("age").value
  
  if (document.getElementById('LT').checked)
  {

  if(document.getElementById('female').checked) {
    gender = 0;
  }else if(document.getElementById('male').checked) {
    gender = 1;
  }
  
  personalCode = generateLtPerCode(age, gender);
  let perCodeText = document.getElementById("perCodeText")
  perCodeText.innerHTML = personalCode;
  }
  else if (document.getElementById('LV').checked){
  personalCode = generateLVPerCode();;
  let perCodeText = document.getElementById("perCodeText")
  perCodeText.innerHTML = personalCode;
  }
})




form.addEventListener('submit',(e) => {
  e.preventDefault()

  const age = document.getElementById("age").value
  
  if (document.getElementById('LT').checked)
  {

  if(document.getElementById('female').checked) {
    gender = 0;
  }else if(document.getElementById('male').checked) {
    gender = 1;
  }
  
  personalCode = generateLtPerCode(age, gender);
  let perCodeText = document.getElementById("perCodeText")
  perCodeText.innerHTML = personalCode;
  }
  else if (document.getElementById('LV').checked){
  personalCode = generateLVPerCode();;
  let perCodeText = document.getElementById("perCodeText")
  perCodeText.innerHTML = personalCode;
  }
})
