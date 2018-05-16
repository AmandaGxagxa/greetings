var inputName = document.querySelector(".inputName");
var getNameElem = document.querySelector(".getName");
var greetMeBtn = document.querySelector(".greetMe");
var resetBtn = document.querySelector(".reset");
var languageRadioBtn = document.querySelector(".languageRadio")
var counterElem = document.querySelector(".counter")

var storedata = localStorage.getItem('StoredNames') ? JSON.parse(localStorage.getItem('StoredNames')) : {};

var greetings = Greetings(storedata);


counterElem.innerHTML = greetings.counter();
  counterElem.style.color = "orange";
resetBtn.addEventListener('click', function() {
  window.localStorage.clear();
  greetings.resetNames();
//  greetings.resetCounter();
  counterElem.innerHTML = greetings.counter();
  //locator.reload();
})
greetMeBtn.addEventListener('click', function() {



  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
  if (checkedRadioBtn) {
    greetings.language(checkedRadioBtn.value)
  }
  else{
    // alert("!")
    getNameElem.innerHTML = "Please Select Language";
    getNameElem.style.color = "maroon";

    return;

  }
  greetings.funcGreet(inputName.value.toUpperCase());
  console.log(inputName.value)
  getNameElem.innerHTML = greetings.msgGet();
  getNameElem.style.color = "maroon";
  counterElem.innerHTML = greetings.counter();
  counterElem.style.color = "orange";
  localStorage.setItem('StoredNames', JSON.stringify(greetings.getMap()));


  if (inputName.value === ""){
    getNameElem.innerHTML = 'Enter name'
  }
  if (isNaN(inputName.value)) {
    getNameElem.innerHTML = greetings.msgGet();
  } else {
    getNameElem.innerHTML = 'Please enter a valid name'
  }
  inputName.value = "";
});
