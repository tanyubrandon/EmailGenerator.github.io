function generateEmail(){
    var formData=document.getElementById("frm1");
    var firstName=formData.elements[0].value;
    var lastName=formData.elements[1].value;
    // var firstName=info.elements["fname"].value;
    // var lastName=info.elements["lname"].value;
    document.getElementById("demo").innerHTML=firstName +""+lastName+"@gmail.com";
    // document.write(firstName +"."+lastName+"@gmail.com");
    document.getElementById("demo").style.color="blue";
    document.getElementById("demo").style.fontSize=60;
    //document.write(fname +"."+lname+"@gmail.com");
    // form.reset()
    
}