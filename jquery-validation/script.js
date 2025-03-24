$(document).ready(function (){
    $("#myForm").validate({
      rules: {
        email: {
          required: true,
        },
        password: {
          required: true,
        },
      },
      messages: {
        email: {
          required: "Please enter your email",
        },

        password: {
          required: "Please enter your password",
        },
      },

        submitHandler: function (form) {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
})