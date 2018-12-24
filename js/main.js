

function validateForm() {
    var array = new Array();
    var x = document.querySelector("name").value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    array[0] = document.querySelector("#email").value;
    if (array[0] == "") {
        alert("Email must be filled out");
        return false;
    }
    array[1] = document.querySelector("#sayisal").value;
    if (array[1] == "" && isNaN(array[1])) {


    }
    array[2] = document.querySelector("#basamakli").value;
    var y = array[2];
    var z = y.toString().length;
    if (array[2] == "" && z != 12 && isNaN(y) ) {
        alert("error");
        return false;

    }


    
    
       array[4] = document.querySelector("#alfa").value;
   if (array[4] == "" && allLetters(array[4]) == false) {


    }
    array[5] = document.querySelector("#max30").value;
    if (array[5] == "") {



    }
    array[6] = document.querySelector("#uckelime").value;
    if (array[6] == "") {

    }
    array[7] = document.querySelector("#password").value;
    if (array[7] == "") {

   }
    
}
function allLetters(input2) {
    var letters = /^[A-Za-z]+$/;
    if (input2.value.match(letters)) {

        return true;
    }
    else {

        return false;
    }
}
    
