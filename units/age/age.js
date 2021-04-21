
today = document.getElementById("number2");

var d = new Date();
today.value = d.getFullYear() + "-" + ((d.getMonth() + 1 < 10) ? "0" + parseInt(d.getMonth() + 1) : d.getMonth() + 1) + "-" + d.getDate();

function compute() {

    birthdate = document.getElementById("number2").value;
    today = document.getElementById("number2").value;



    var date = new Date(birthdate.substring(0,4),birthdate.substring(5,7),birthdate.substring(8,10)).getMilliseconds();
    var date2 = new Date(today.substring(0,4),today.substring(6,7),today.substring(9,10));



    var diffrence = date2 - date;

    console.log(date2.getFullYear());
    var newDate = new Date(diffrence);




    // document.getElementById("number3").value = todayyear - birthyear;
    // document.getElementById("number4").value = todaymonth - birthmonth;
    // document.getElementById("number5").value = 

}