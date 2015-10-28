$(document).ready(function(){
//swal({   title: "Error!",   text: "Here's my error message!",   type: "error",   confirmButtonText: "Cool" });
  var currentUsername = getCookie("username");
  var signedinasText = "Signed in as "+ currentUsername;

  $("#usernameLabel").text(signedinasText);
  getFruits();
});

var getFruits = function (){
  showProgress();
  var cUserId = getCookie("userId");
  var cToken = getCookie("sessionId");
    //get the credentials
  var jsonCredentials = {userId:cUserId, token:cToken};

  $.ajax({
     type: "POST",
     url: "/api/fruits",
     data: jsonCredentials,
     beforeSend: function(){
     },

       //success case
     success: function (data) {

       hideProgress();
         //pass data to JSON
       data = JSON.parse(data);
       realoadTable(data);
      },
       //Error case
      error: function (jqXHR, textStatus, errorThrown) {
       hideProgress();
         //pass to JSON
       var error = JSON.stringify(eval('('+jqXHR.responseText+')'));
       error = JSON.parse(error);
       sweetAlert("Oops", error.message, "error");
        //alert(error.message);
     }
  });
};

var reloadTable = function(json)
{

}
