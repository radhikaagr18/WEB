

function validate_form(){
    var email=getElementById("email").value;
    var fname=getElementById("fname").value;
    var lname=getElementById("lname").value;
    var psw=getElementById("psw").value;
    var psw_repeat=getElementById("psw-repeat").value;

    var email_id=(/^([a-z A-Z 0-9/.-_]+)@([a-z A-Z 0-9/-]+).([a-z]{2,20})(.[a-z]{2,8})?$/);
    if(email_id.test(email))
    {
        document.getElementById("res").innerHTML="Valid";
        document.getElementById("res").style.visibility="visible";
        document.getElementById("res").style.color="green";

    }
    else{
        document.getElementById("res").style.visibility="visible";
    }
    if(psw==psw_repeat)
    {
        document.getElementById("psw_match").innerHTML="Repeat Password matches";
        document.getElementById("psw_match").style.visibility="visible";
        document.getElementById("psw_match").style.color="green";
    }
    else{
        document.getElementById("psw_match").style.visibility="visible";
    }


            
}
function validation(){
    var uname=getElementById("uname").value;
    var usrname= /^([a-z A-Z 0-9/.-_]+)$/;
    var len=getElementById("len").length;
    if(len<8)
    {
        document.getElementById("in_psw").style.visibility="visible";
    }
    if(usrname.test(uname))
    {
        document.getElementById("in_uname").innerHTML="Valid user name";
        document.getElementById("in_uname").style.visibility= "visible";
        document.getElementById("in_uname").style.color="green";
    }
    else{
        document.getElementById("in_uname").innerHTML="Invalid user name";
        document.getElementById("in_uname").style.visibility= "visible";
        document.getElementById("in_uname").style.color="red";
    }
    if(len>=8 && usrname.test(uname))
    return true;
    else return false;
}
function open_tab(evt,opt)
{

    var i,signform,tab_link;
    
    signform=document.getElementsByClassName("signform");
    for(i=0;i<signform.length;i++)
    {
        signform[i].style.display="none";
    }
    
    tab_link=document.getElementsByClassName("tab_link");
    for(i=0;i<tab_link.length;i++)
    {
        tab_link[i].className=tab_link[i].className.replace("active","");
        
    }
    document.getElementById(opt).style.display = "block";
    evt.currentTarget.className += " active";
}    
    document.getElementById("default_open").click();
    document.getElementsByClassName("tabs").style.cursor="pointer";
    $("#dob").datepicker();
    function cancel(){
        document.getElementById("frm2").reset();
    }