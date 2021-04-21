//mid time = minute


var time = ["Hour","Minute","Second"];

var time1box = document.getElementById("time1");
var time2box = document.getElementById("time2");



var time1Value
var time2Value


var midTime;


var inToMidTime = [60, 1, 1/60];


loadUnitsinSelect();

function loadUnitsinSelect(){

    

    for(var i=0; i<time.length ; i++){

        var newOption = document.createElement("option");

        newOption.text = time[i];
        newOption.value = i;
        time1box.add(newOption);

    }

    for(var i=0; i<time.length ; i++){

        var newOption = document.createElement("option");

        newOption.text = time[i];
        newOption.value = i;
        time2box.add(newOption);

    }

}


function compute() {

    time1 = document.getElementById("time1").value;
    time2 = document.getElementById("time2").value;

    input1 = document.getElementById("number1").value;


    midUnit = input1 * inToMidTime[time1];

    console.log(midUnit);
    document.getElementById("number2").value = midUnit / inToMidTime[time2];

}