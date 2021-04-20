
// 0-kg
// 1-g
// 2-mg
// 3-lb
//mid unit = gram

var units = ["KiloGram KG", "Gram G", "Mili Gram mG", "Pound lb"];
var unit1box = document.getElementById("unit1");
var unit2box = document.getElementById("unit2");
var unit1Value;
var unit2Value;
var midUnit;


var input1;


var inToGram = [1000, 1, 0.001];
var outFromGram = [0.001, 1, 1000];


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

    midUnit = input1 * inToGram[unit1];
    console.log(midUnit);
    document.getElementById("number2").value = midUnit * outFromGram[unit2];

}