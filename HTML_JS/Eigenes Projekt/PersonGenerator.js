var Paul = "Paul der Asoziale wurde gewählt!";
var Florian = "Florian der wurde gewählt!";
var Lucas = "Lucas der Shrekliebhaber wurde gewählt!";
var Brian = "Brian der Starke wurde gewählt!";

function ausgewaehlt(){

    AuswahlOption = document.querySelector("#auswahl").value;

    var Ergebnis;

    if (AuswahlOption == 1){
        Ergebnis = Paul;
    }
    else if (AuswahlOption == 2){
        Ergebnis = Florian;
    }
    else if (AuswahlOption == 3){
        Ergebnis = Lucas;
    }
    else if (AuswahlOption == 4){
        Ergebnis = Brian;
    }
    document.getElementById("Ausgabe").innerHTML = Ergebnis; 
}


