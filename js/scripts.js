//back End Code
var beepBoop = function(userNumber,nameInput){

  numbersLoop = [];

  for(x = 0; x <= userNumber; x++) {
    numbersLoop.push(x.toString());
  }

  var newArray = numbersLoop.map(function(index) {
    if (index % 3 == 0 && index != 0){
      return "I'm sorry " + nameInput + ",I'm afraid I can't do that...";
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

//Front End Code
$(document).ready(function(){
  $("#speakTo").submit(function(event){
    var nameInput = $("#nameInput").val();
    var input = $("#userInput").val();
    $(input).hide();
    $("#reply").text(beepBoop(input,nameInput));

  event.preventDefault();
  });
});
