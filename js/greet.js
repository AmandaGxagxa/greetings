
function Greetings(StoredNames) {
  var counter = 0 ;
  var msg= "";
  var nameMap = StoredNames||  {};
  var lang ="";




  function greetMe(name) {
    if(name != ''){
      if(name != undefined){
        nameMap[name] = 0;
      }
    }

    if (lang == "english") {
      msg = "Hello, "+ name;
    }
    else if (lang == "afrikaans") {
     msg = "Hallo, "+ name;
    }
    else if (lang == "isiXhosa") {
     msg = "Molo, "+ name;
   }

  }

   function setLang(value) {
     lang = value;
   }
   function getMsg() {
     return msg;
   }

   function countNum() {
    return Object.keys(nameMap).length;

   }
   function map(){
     return nameMap;
   }
   function resetData() {
     return nameMap = {} ;
   }
   return {
  funcGreet : greetMe,
  msgGet : getMsg,
  counter : countNum,
  language :setLang,
  getMap   : map,
  resetNames :resetData
 }
}
