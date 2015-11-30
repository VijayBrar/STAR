$(document).ready(function() {
    $('#')
    $('#username, #password').keyup(function() {        
        if ($('#username').val().length != 0) {
            $('#usernameError').removeClass('error');
            $('#usernameError').hide();
            $('#username').removeClass('inputerror');
        }
            
        if ($('#password').val().length !=0) {
            $('#passwordError').removeClass('error');
            $('#passwordError').hide();
            $('#password').removeClass('inputerror');
        }
    });
    
    $("#loginButton").click(function(e){
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        
        if (!username) {
                $('#usernameError').text('Enter a username').show();
                $('#usernameError').addClass('error');
                $('#usernameError').css('color', 'red');
        }
        
        if (!password) {
            $('#passwordError').text('Enter a password').show();
            $('#passwordError').addClass('error');
            $('#passwordError').css('color', 'red');
        }
    
        if (username == '' || password == ''){
            $('input[type="text"],input[type="password"]').addClass('inputerror');
            $('input[type="text"],input[type="password"]').addClass('inputerror');
            alert("Please fill in all fields");
        }
        else{
            $.post("login.php", {username: username, password: password},
                  function(data) {
                  
                if (data=='Username or Password is incorrect'){
                    $('input[type="text"],input[type="password"]').addClass('inputerror');
                    alert(data);
                } else if (data=='Successfully logged in'){
                    $("form")[0].reset();
                    $('input[type="text"], input[type="password"]').addClass('inputsuccess');
                    alert(data);
                    window.open('welcome.php','_self');
                }
            });
        }
    });
    
});
