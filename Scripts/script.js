$(document).ready(function() {
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
            $('input[type="text"],input[type="password"]').css("border", "2px solid red");
            $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
            alert("Please fill in all fields");
        }
        else{
            $.post("login.php", {username: username, password: password},
                  function(data) {
                  
                if (data=='Username or Password is incorrect'){
                    $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
                    alert(data);
                } else if (data=='Successfully logged in'){
                    $("form")[0].reset();
                    $('input[type="text"], input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
                    alert(data);
                    window.open('welcome.php','_self');
                } 
            });
        }
    });
    
});
