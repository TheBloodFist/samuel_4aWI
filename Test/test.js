function buttononclick(){


    var ergebnis = (num1.value*1.43)/num2.value-3.4
    var ergebnis2 = ""

    if (ergebnis > 0) {

        var ergebnis = "positiv";
        console.log("positiv")
    }
      
    else if (ergebnis == 0) {

        var ergebnis = "null";
        console.log("null")
    }

    else if (ergebnis <= 0) {

        var ergebnis = "negativ";
        console.log("negativ")
    }

    for (ergebnis2 = 0; ergebnis2 = ergebnis2; ergebnis2++){
    if (ergebnis2 == ergebnis) { break; }
    console.log(ergebnis2)
    }


    document.getElementById("Ausgabe").innerHTML = ergebnis


}