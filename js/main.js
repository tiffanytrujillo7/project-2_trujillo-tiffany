// Hamburger Menu Code Working with jQuery library//
$(document).ready(function(){

$( ".cross" ).hide();
$( ".mobilemenu" ).hide();
$( ".hamburger" ).click(function() {
$( ".mobilemenu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".mobilemenu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
})

});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// END Hamburger Menu Code //


// Modal JS Code //
var modal = document.getElementById('myModal');

var btn = document.getElementById("signIn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// END Modal JS Code //

// Form JQuery Code //
$(function(){
  $('.input').keyup(function() {

    var empty = false;
    $('.input').each(function(){
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#submit').attr('disabled', 'disabled').hasClass('.button--disabled').removeClass('button--primary');
    } else {
      $('#submit').removeAttr('disabled').addClass('button--primary').removeClass('button--disabled');
    }
  });
})
// END Form JS Code //

// Parsley jQuery form Validation code //
$('#form').parsley(options);
// END Parsley jQuery form Validation code //
