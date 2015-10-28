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

             //check the role and redirect depending on it
             if (data.role == 2)
             {
               window.location = "/index.html";
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
           sweetAlert("Unathorized", "error.message", "error");
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
     $(".container").fadeOut(2000, function() {
       $(".preload").fadeIn(1000);
     });
   }

   function hideProgress()
   {
     $(".preload").fadeOut(2000, function() {
       $(".container").fadeIn(1000);
     });
   }
