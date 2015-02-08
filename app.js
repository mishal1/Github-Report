function addProfile(username) {
  $.get('http://api.github.com/users/'+ username + '?' + 'client_id=' + client_id + '&client_secret=' + client_secret, function(user){
    var newProfile = Mustache.render($('#profile-template').html(), user);
    $(newProfile).appendTo('.profile-container').slideDown();
  }).error(function(){
    var errorMessage = "Sorry, there's no user with the username: " + username
    var message = Mustache.render($('#error-template').html(),{error: errorMessage})
    $(message).appendTo('.error-container').slideDown("slow", function(){
    });
  }).always(function(){
    $('#username').val('');
  })
};

$(document).ready(function(){
  $(".load-profile").on('click',function(event){
    event.preventDefault();
    addProfile($('#username').val());
    });
  $('.profile-container').on('click', '.close', function(){
    $(this).closest('.profile').slideUp(function(){
      $(this).remove();
    });
  });
  $('.error-container').on('click', '.error-message', function(){
    $(this).slideUp(1000, function() {
      $(this).remove();
    });
  });
});