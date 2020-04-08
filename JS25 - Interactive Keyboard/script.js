var x = 'x';
let theTextBox = document.getElementById('enteredText');
let allTheKeys = document.getElementById('keyboard');
let changeKeys = document.getElementsByClassName('shifter');
let capsLockKey = document.getElementById('20');
let shiftkey = document.getElementById('16');

var originalShifterArray = [];
for (let i = 0; i < changeKeys.length; i++) {
    originalShifterArray.push(changeKeys[i].innerHTML);
}

var shifterArray = ['-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];

function clearText() {
    theTextBox.innerHTML = '<br>';
}

function highlightAndType(e) {
    var keyPressed = e.keyCode;
    var charPressed = e.key;
    const keys = document.getElementById(keyPressed);

    keys.classList.add('pressed');

    if (!charPressed) {
        theTextBox.innerHTML = "Sorry, this keyboard doesn't work in your browser. :( Try Chrome, FireFox or Opera.";
        return;
    }

    if (charPressed == 'CapsLock' || charPressed == 'Shift') {
        allTheKeys.classList.add('uppercase');
    }

    if (charPressed == "Shift") {
        for (let i = 0; i < changeKeys.length; i++) {
            changeKeys[i].innerHTML = shifterArray[i];
        }
    }

    if (e.key.length <= 1) {
        if (theTextBox.innerHTML.endsWith('<br>')) {
            var newText = theTextBox.innerHTML.slice(0, -4);
            theTextBox.innerHTML = newText;
        }
        theTextBox.innerHTML += e.key;
    } else if (e.key == 'Backspace') {
        if (shiftkey.classList.contains('pressed')) {
            clearText();
        } else {
            var newText = theTextBox.innerHTML.slice(0, -1);
            theTextBox.innerHTML = newText;
        }
    } else if (e.key == 'Enter') {
        theTextBox.innerHTML += '<br><br>';
    }

    if (keyPressed == 9) {
        e.preventDefault();
        theTextBox.innerHTML += '&emsp;&emsp;';
    }
}


function removeKeypress(e) {
    var keyDepressed = e.keyCode;
    const keys = document.getElementById(keyDepressed);

    keys.classList.remove('pressed');

    if (keyDepressed == 20 && !shiftkey.classList.contains('pressed') || keyDepressed == 16 && !capsLockKey.classList.contains('pressed')) {
        allTheKeys.classList.remove('uppercase');
    }

    if (keyDepressed == 16) {
        for (let i = 0; i < changeKeys.length; i++) {
            changeKeys[i].innerHTML = originalShifterArray[i];
        }
    }
}


window.addEventListener('keydown', highlightAndType);
window.addEventListener('keyup', removeKeypress);
window.addEventListener('click', clearText);