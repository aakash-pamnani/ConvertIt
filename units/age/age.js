
today = document.getElementById("number2");

var d = new Date();
today.value = d.getFullYear() + "-" + ((d.getMonth() + 1 < 10) ? "0" + parseInt(d.getMonth() + 1) : d.getMonth() + 1) + "-" + d.getDate();

function compute() {

    birthdate = document.getElementById("number1").value;
    today = document.getElementById("number2").value;



    var date = new Date(birthdate.substring(0,4),birthdate.substring(5,7)-1,birthdate.substring(8,10),0,0,0,0);
    var date2 = new Date(today.substring(0,4),today.substring(6,7)-1,today.substring(8,10),0,0,0,0);


    

    var diffrence = date2.getTime() - date.getTime()
    
    var newDate = new Date(diffrence);
    




    document.getElementById("number3").value = newDate.getFullYear() - 1970;
    document.getElementById("number4").value = newDate.getMonth();
    document.getElementById("number5").value = newDate.getDate()-1;

}