function biggerButton() {
    document.getElementById("textField").style.fontSize = '24px';
}
function mooButton() {
    var input = document.getElementById("textField").value.split(' ');
    var words = input.map(word => word + "-Moo");
    var string = words.join(' ');
    document.getElementById("textField").value = string;
    document.getElementById("textField").style.textTransform = 'uppercase';
}
function radioSwitched() {
    if (document.getElementById("fancy").checked) {
        document.getElementById("textField").style.fontWeight = 'bold';
        document.getElementById("textField").style.color = 'blue';
        document.getElementById("textField").style.textDecoration = 'underline';
    }
    if(document.getElementById("boring").checked) {
        document.getElementById("textField").style.fontWeight = 'normal';
        document.getElementById("textField").style.color = 'black';
        document.getElementById("textField").style.textDecoration = 'none';
    }
}
