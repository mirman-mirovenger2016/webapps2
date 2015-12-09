$(document).ready(function(){
  $("#contact-form").submit(function(event){
    event.preventDefault();
    //Use jQuery to collect the values from the fields and create a
    //JSON object containing them. Then, log the result to the console

    // Secondary Objective: Use the AJAX methods built into jQuery to send
    // The form data to http://x.mirman.org:1031/ground4loor. Write a callback to handle
    // the response.
  })
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


var $input = $('input:text'),
    $register = $('#register');

$register.attr('disabled', true);
$input.keyup(function() {
    var trigger = false;
    $input.each(function() {
        if (!$(this).val()) {
            trigger = true;
        }
    });
    trigger ? $register.attr('disabled', true) : $register.removeAttr('disabled');
});
