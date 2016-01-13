
(function($,W,D)
{
    form =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    agree: "required"
                },
                messages: {
                    firstname: "  firstname!",
                    lastname: "  lastname!",
                    password: {
                        required: "  password!",
                        minlength: "  at least 5 characters long!"
                    },
                    email: "  valid email!",
                    
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }


    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        form.setupFormValidation();
    });

})(jQuery, window, document);