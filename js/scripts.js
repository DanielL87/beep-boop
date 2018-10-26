//back End Code
var beepBoop = function(userNumber){

  numbersLoop = [];

  for(x = 0; x <= userNumber; x++) {
    numbersLoop.push(x.toString());
  }

  var newArray = numbersLoop.map(function(index) {
    if (index % 3 == 0){
      return "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (index.includes('1')){
      return "Boop!";
    } else if (index.includes('0')){
      return "Beep!";
    } else {
      return index;
    }
});

return newArray
}

alert(beepBoop(10))

//Front End Code
$(document).ready(function(){
  $("#speakto").submit(function(event){
    var input = $("#userInput").val();
    $("#reply").text(beepBoop(input));

  event.preventDefault();
  });
});
