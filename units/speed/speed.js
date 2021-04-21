//mid unit = Meter
//mid time = minute


var units = ["kilometer","Meter", "Centimeter" ,"Millimeter", "micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch"];
var time = ["Hour","Minute","Second"];
var unit1box = document.getElementById("unit1");
var unit2box = document.getElementById("unit2");
var time1box = document.getElementById("time1");
var time2box = document.getElementById("time2");

var unit1Value;
var unit2Value;

var time1Value
var time2Value

var midUnit;
var midTime;

var inToMid = [1000000, 1000, 1, 0.001, 0.000001, 454,  28.35];
var inToMidTime = [60, 1, 1/60];


loadUnitsinSelect();

function loadUnitsinSelect(){

    for(var i=0; i<units.length ; i++){

        var newOption = document.createElement("option");
       
        newOption.text = units[i];
        newOption.value = i;
        unit1box.add(newOption);

    }

    for(var i=0; i<units.length ; i++){

        var newOption = document.createElement("option");

        newOption.text = units[i];
        newOption.value = i;
        unit2box.add(newOption);

    }

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
    unit1 = document.getElementById("unit1").value;
    unit2 = document.getElementById("unit2").value;

    time1 = document.getElementById("time1").value;
    time2 = document.getElementById("time2").value;

    input1 = document.getElementById("number1").value;

    midUnit = input1 * inToMid[unit1];
    midUnit = midUnit / inToMidTime[time1];

    console.log(midUnit);
    document.getElementById("number2").value = midUnit / inToMid[unit2] * inToMidTime[time2];

}