function compute() {
    feet = document.getElementById("number1").value;
    inches = document.getElementById("number2").value;

    var centimeter = (feet*12 + parseInt(inches))*2.54;

    document.getElementById("number3").value = centimeter;

}



function compute2() {
    var centimeter = document.getElementById("number3").value;

    var inches = centimeter /2.54;

    var feet = Math.floor(inches/12);
    inches = inches - feet*12;

 document.getElementById("number1").value = feet;
 document.getElementById("number2").value = inches;
}