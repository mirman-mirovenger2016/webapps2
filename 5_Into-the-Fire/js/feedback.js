var ref = new Firebase("https://miles-5ire.firebaseio.com/"); //Use your app's Firebase URL

// Add some event handlers for FB events

$(document).ready(function(){
  console.log("Document loaded");
  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted!");
    // Go grab your info and do something with it.
  });
});

var formAnswers = {
  firstname : $("#firstname").val(),
  lastname : $("#lastname").val(),
  email : $("#email").val(),
  message : $("#message").val()
}


var Tagurl  = "http://x.mirman.org:1031/ground4loor"
$.post(Tagurl, formAnswers, function(req){
  console.log(req);
})

function eraseText() {
    $(".form-item").val(" ");
}
