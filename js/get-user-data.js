$(document).ready(function() {
  $('#email-form a').click(function () {
    var myRootRef = new Firebase('https://groo.firebaseio.com/');
    var userEmail = $('#user-email').val();
    if( userEmail !== '' ) {
      myRootRef.push(userEmail);
    }
    $('#user-email').val('');
  });
});
