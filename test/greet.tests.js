describe('the function Greet' , function(){
it("should be able to count names greeted.", function(){
  var greetings = Greetings();
  greetings.funcGreet("Amanda");
  greetings.funcGreet("Babalwa");
  greetings.funcGreet("Andre");
  assert.equal(greetings.counter(),3);
});
it("should not count the name if it is there already.", function(){
  var greetings = Greetings();
  greetings.funcGreet("Amanda");
  greetings.funcGreet("Babalwa");
  greetings.funcGreet("Amanda");
  assert.equal(greetings.counter(),2);
});
it("should not count the name if it is there already.", function(){
  var greetings = Greetings({"Amanda":0 ,"grey":0});
  //greetings.funcGreet("Amanda");
  assert.equal(greetings.counter(), 2);
});

it("should be able to greet the the name of the person in english.", function(){
  var greetings = Greetings();
  greetings.funcGreet("Amanda",greetings.language("english"));
  //greetings.funcGreet('english,');
  assert.equal(greetings.msgGet(),'HELLO, Amanda!',);
});
it("should be able to greet the the name of the person in Xhosa", function(){
  var greetings = Greetings();
  greetings.funcGreet("Amanda",greetings.language("isiXhosa"));
  //greetings.funcGreet('english,');
  assert.equal( greetings.msgGet(),'MOLO, Amanda!',);
});
it("should be able to greet the the name of the person in Afrikaans.", function(){
  var greetings = Greetings();
  greetings.funcGreet("Amanda",greetings.language("afrikaans"));
  //greetings.funcGreet('english,');
  assert.equal( greetings.msgGet(),'HALLO, Amanda!',);
  });

});
