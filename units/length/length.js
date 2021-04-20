
//mid unit = meter

var units = ["kilometer","Meter", "Centimeter" ,"Millimeter", "micrometer", "Nanometer", "Mile", "Yard", "Foot", "Inch"];
var unit1box = document.getElementById("unit1");
var unit2box = document.getElementById("unit2");
var unit1Value;
var unit2Value;
var midUnit;


var input1;


var inToMid = [1000, 1, 0.01, 0.001, 1e-6, 1e-9, 1609, 0.9144, 0.3048, 0.0254,];



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

}



function onSelect1() {
    unit1 = document.getElementById("unit1").value;
    input1 = document.getElementById("number1").value;

    compute();


}

function onSelect2() {
    unit2 = document.getElementById("unit2").value;
    input1 = document.getElementById("number1").value;

    compute();
}

function compute() {
    unit1 = document.getElementById("unit1").value;
    unit2 = document.getElementById("unit2").value;
    input1 = document.getElementById("number1").value;

    midUnit = input1 * inToMid[unit1];
    document.getElementById("number2").value = midUnit / inToMid[unit2];

}