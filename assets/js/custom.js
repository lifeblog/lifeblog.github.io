
// Contact Form Script
$(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: "//formspree.io/lifeblog0114@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json",
            success: function(data){
                // Success message
                $('#success').html("<div class='alert-box success'>");
                $('#success > .alert-box')
                    .append("<strong>Your message has been sent. </strong>");
                $('#success > .alert-box')
                    .append('</div>');

                $('#success').show();

                $('#success').delay(3000).fadeOut(1000);

                //clear all fields
                $('#contactForm').trigger("reset");
            },
            error: function(){
                // Fail message
                $('#success').html("<div class='alert-box alert radius'>");
                $('#success > .alert-box').append("<strong>Sorry it seems that my mail server is not responding. Please try again later!");
                $('#success > .alert-box').append('</div>');
                $('#success').show();

                $('#success').delay(3000).fadeOut(1000);
                //clear all fields
                $('#contactForm').trigger("reset");
            }
        });
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

//function closeMessage(){
//    $('#closeMessageButton').parent().html('<div id="success"></div>');
//}

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});
