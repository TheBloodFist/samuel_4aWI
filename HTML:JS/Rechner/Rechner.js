function buttononclick(){


    var auswahlOption = auswahl.options[auswahl.selectedIndex].text;
    var ergebnis = ""

    if (num1.value == "") {
        document.getElementById("Ausgabe").innerHTML = "Bitte Zahl eigegeben"; 
    }
      
    else if (auswahlOption == plus.value) {
        var ergebnis = parseFloat(num1.value)+parseFloat(num2.value)
    }
    
    else if (auswahlOption == minus.innerHTML) {
        var ergebnis = num1.value-num2.value
    }
    
    else if (auswahlOption == mal.innerHTML) {
        var ergebnis = num1.value*num2.value
    }

    else if (auswahlOption == geteilt.innerHTML) {
        var ergebnis = num1.value/num2.value
    }

    document.getElementById("Ausgabe").innerHTML = ergebnis


}