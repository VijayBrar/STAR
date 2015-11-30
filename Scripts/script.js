$(document).ready(function() {
    /*$("#loginButton").click(function(){
        var username = $('#username').val();
        var password = $('#password').val();
        
        //Empty field check
        if (username == '' || password == ''){
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill in all fields");
        } else {
            $.post("login.php", {username1: username, password1: password},
                  function(data) {
                if (data=='Invalid Username') {
                    $('input[type="text"]').css({"border": "2px solid #00F5FF", "box-shadow":"0 0 5px #00F5FF"});
                    alert(data);
                } else if (data=='Username or Password is incorrect'){
                    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                    alert(data);
                } else if (data=='Successfully logged in'){
                    $("form")[0].reset();
                    $('input[type="text"], input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                    alert(data);
                } else {
                    alert(data);
                }
            });
        }
    });*/
    
        $('#loginForm').submit(function(event) {
            var username = $('#username').val(),
            var password = $('#password').val();
            
            if (!username) {
                $('#usernameError').text('Enter a username').show();
                $('#username').addClass('error');
                $('#username').css('color', 'red');
            }
            
            if (!password) {
                $('#passwordError').text('Enter a password').show();
                $('#password').addClass('error');
                $('#password').css('color', 'red');
            }
            
            if (username && password) {
                return;
            }
            event.preventDefault();
        });
});
