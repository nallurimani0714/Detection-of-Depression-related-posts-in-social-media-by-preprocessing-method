 function Register() {
     console.log("validate = " + validate())
     if (validate()) {
         $.ajax({

             url: "/Register",
             type: "POST",
             data: $('form').serialize(),
             dataType: "text",
             processData: false, // tell jQuery not to process the data
             contentType: "application/x-www-form-urlencoded; charset=UTF-8"

         }).done(function(data) {

             console.log(data);
             if (data == 1) {
                 alertify.success('Register Success');
             } else if (data == 0) {
                 alertify.error('Register Failed');
             } else {
                 alertify.error('Error Occurred');
             }


         });


     } else {
         alertify.error('Empty Fields');
     }

 }

 function validate() {
     var user = $("#user").val();
     var pass = $("#pass").val();
     if (user == "" && pass == "") {
         return false;
     }
     return true;
 }