$(document).ready(function(){
//swal({   title: "Error!",   text: "Here's my error message!",   type: "error",   confirmButtonText: "Cool" });

});

$('#btnLogin').click(function(event){
  //fnOpenSidebar();
    event.preventDefault();
    //console.log("login");
    login();
});
   var login = function (){
     //if all fields are filled
     if (validateFields())
     {
       showProgress();
       //get the credentials
       var jsonCredentials = {username:$('#username').val(), password: $('#password').val()};

       $.ajax({
          type: "POST",
          url: "/api/login",
          data: jsonCredentials,
          beforeSend: function(){
          },

          //success case
          success: function (data) {

            hideProgress();
            //pass data to JSON
            data = JSON.parse(data);

            console.log(data);
            createCookie("username", $('#username').val());
            createCookie("userId",data.userId,2);
            createCookie("sessionId", data.token,2);

             //check the role and redirect depending on it
             if (data.role == 2)
             {
               window.location = "/fruits.html";
             }
             else if (data.role == 1){
               window.location = "google.com";
             }
          },
          //Error case
          error: function (jqXHR, textStatus, errorThrown) {
            hideProgress();
            //pass to JSON
           var error = JSON.stringify(eval('('+jqXHR.responseText+')'));
           error = JSON.parse(error);
           sweetAlert("Unathorized", error.message, "error");
           //alert(error.message);
          }
       });
     }

   };

  //Validation methods
   function validateFields()
   {
     var returnValue = true;
     if (!$('#username').val())
     {
       returnValue = false;
       sweetAlert("Oops...", "Username is required", "error");
       //alert("Username is required");
     }
     else
     if (!$('#password').val())
     {
       returnValue = false;
       sweetAlert("Oops...", "Password is required", "error");
      // alert("Password is required");
     }
     return returnValue;
   }
   //UI Methods
   function showProgress()
   {
     $(".container").fadeOut(0, function() {
       $(".preload").fadeIn(0);
     });
   }

   function hideProgress()
   {
     $(".preload").fadeOut(0, function() {
       $(".container").fadeIn(0);
     });
   }
