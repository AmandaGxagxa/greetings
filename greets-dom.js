var inputName = document.querySelector(".inputName");
var getNameElem = document.querySelector(".getName");
var greetMeBtn = document.querySelector(".greetMe");
var resetBtn = document.querySelector(".reset");
var languageRadioBtn = document.querySelector(".languageRadio")
var counterElem = document.querySelector(".counter")

var storedata = localStorage.getItem('StoredNames') ? JSON.parse(localStorage.getItem('StoredNames')) : {};

var greetings = Greetings(storedata);

counterElem.innerHTML = greetings.counter();

greetMeBtn.addEventListener('click', function() {
  if (inputName.value !== "") {

    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn) {
      greetings.language(checkedRadioBtn.value)
    }
    greetings.funcGreet(inputName.value);
    console.log(inputName.value)
    getNameElem.innerHTML = greetings.msgGet();
    getNameElem.style.color = "blue";
    counterElem.innerHTML = greetings.counter();
    counterElem.style.color = "orange";
    localStorage.setItem('StoredNames', JSON.stringify(greetings.getMap()));
    resetBtn.addEventListener('click', function() {
      localStorage.clear();
      greetings.resetNames();
      //locator.reload();
    })

  } else {
    getNameElem.innerHTML = "this is not valid name!"
    getNameElem.style.color = "red";
  }

});
