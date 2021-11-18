function generate(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;

    let randomamountofnumbers = parseInt(number2) - parseInt(number1) + 1;
    console.log(number2 + "  :  " + number1);

    let randomnumber = Math.floor(Math.random() * randomamountofnumbers) + parseInt(number1);
    console.log(randomnumber);
}