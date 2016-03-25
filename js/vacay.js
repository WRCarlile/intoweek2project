var add = function(question1, question2, question3, question4, question5) {
 return question1 + question2 + question3 + question4 + question5
}

$(document).ready(function() {
 $("form").submit(function(event) {
   event.preventDefault();

   var question1 = $('#question1').val();
   var question2 = $("#question2").val();
   var question3 = $("#question3").val();
   var question4 = $("#question4").val();
   var question5 = $("#question5").val();
   var result = add(question1, question2, question3, question4, question5);

   var countA = (result.match(/a/g) || []).length;
   var countB = (result.match(/b/g) || []).length;
   var countC = (result.match(/c/g) || []).length;
   var countD = (result.match(/d/g) || []).length;

  if (countA >= 3  ) {
    $(".resultA").show();
  }
  else if (countB >= 3) {
    $(".resultB").show();
  }
  else if (countC >= 3) {
    $(".resultC").show();
  }
  else if (countD >= 3) {
    $(".resultD").show();
  }
  else {
    alert("Maybe you should stay home?")
  }
 });
});
