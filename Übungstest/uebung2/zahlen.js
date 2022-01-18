document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

function buttononclick(){

ergebnis = "";


for (var i=num1; i<=num2; i++){

    ergebnis += "nummer" + i + "<br>";
}
console.log(ergebnis);

}

document.getElementById("ausgabe").innerHTML = ergebnis;