function jnjn()
    {
        var email= document.getElementsByName("user")[0];
        var pass=document.getElementsByName("pass")[0];
        if( (email.value=='mohamedwael4553@gamil.com'||email.value=='mohamedwael') && (pass.value=='Mohamedwael12@'))
         {
             window.open("Home.html");
         }
        else
        {
            // window.open("Home.html");
            alert("error");
        }
}