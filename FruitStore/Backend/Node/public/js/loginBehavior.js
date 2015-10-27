$(document).ready(function(){


});

$('#btnLogin').click(function(event){
  //fnOpenSidebar();
    event.preventDefault();
    console.log("login");
    login();
});
   var login = function (){
      //var frm = $("#form-login");
      //var dataInput = JSON.stringify(frm.serializeArray());
      var jsonCredentials = {username:$('#username').val(), password: $('#password').val()};
      //console.log(jsonCredentials);
      //var stringify = JSON.stringify(jsonCredentials);
      //console.log(stringify);
      $.ajax({
         type: "POST",
         url: "/api/login",
         data: jsonCredentials,
         beforeSend: function(){
           //console.log({"username":$('#username').val(), "password": $('#password').val()});
            //_loading("Autenticando Usuario");
         },
         success: function (data) {
            //_unloading();
            //console.log(data);
            console.log("success");
            console.log(data);
            window.location = data.redirect;
         },
         error: function (jqXHR, textStatus, errorThrown) {
           console.log("error");
           console.log(textStatus);
            // _notification('',jqXHR.responseJSON._error.message,'error');
            // _unloading();
         }
      });
   };
