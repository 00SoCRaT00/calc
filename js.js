var myChange = document.getElementById('change')

Turn = document.getElementById('turn')

x = 1;

Turn.addEventListener('click', function() {
    "use strick";

    if (x % 2 == 1) {
        myChange.className = "back i-icon-dark sun-dark dark-blue dark-input dark-bottom dark-span i-icon-botton-dark";
        x = 2;
    } else {
        myChange.className = "back i-icon-open sun-open open-blue open-input open-bottom open-span i-icon-botton-open";
        x = 1;
    }

})


var spanone = document.getElementById('one');


var spanone2 = document.getElementById('two')

spanthree = document.getElementById('three')

spanonefour = document.getElementById('four')

spanonefive = document.getElementById('fove')

spanonsex = document.getElementById('sex')

spanoneseven = document.getElementById('seven')

spanoneeight = document.getElementById('eight')

spanonenighn = document.getElementById('nighn')

spanonezero = document.getElementById('zero')

myText = document.getElementById('Mytext')

myValue = document.getElementById('result')

Remove = document.getElementById('remove')

Divide = document.getElementById('divide')

Plus = document.getElementById('plus')

Minus = document.getElementById('minus')

Times = document.getElementById('times')

Equal = document.getElementById('equal')

coma = document.getElementById('coma');
Exit = document.getElementById('exit');


spanone.onclick = function() {
    myText.value += this.textContent;
}

spanone2.onclick = function() {
    myText.value += this.textContent;
}
spanthree.onclick = function() {
    myText.value += this.textContent;
}
spanonefour.onclick = function() {
    myText.value += this.textContent;
}
spanonefive.onclick = function() {
    myText.value += this.textContent;
}
spanonsex.onclick = function() {
    myText.value += this.textContent;
}
spanoneseven.onclick = function() {
    myText.value += this.textContent;
}

coma.onclick = function() {
    myText.value += this.textContent;
}
spanoneeight.onclick = function() {
    myText.value += this.textContent;
}

spanonenighn.onclick = function() {
    myText.value += this.textContent;
}
spanonezero.onclick = function() {
    myText.value += this.textContent;
}

Times.onclick = function() {
    myText.value += '*';
}
Plus.onclick = function() {
    myText.value += '+';
}

Equal.onclick = function() {

    for (let index = 0; index < myText.value.length; index++) {

        if (myText.value[index] == "/") {
            myValue.value = myText.value.slice(0, myText.value.indexOf('/')) / myText.value.slice(myText.value.indexOf('/') + 1, myText.value.length)
            myText.value = "";
        }
        if (myText.value[index] == "+") {
            myValue.value = myText.value.slice(0, myText.value.indexOf('+')) + myText.value.slice(myText.value.indexOf('+') + 1, myText.value.length)
            myText.value = "";
        }
        if (myText.value[index] == "-") {
            myValue.value = myText.value.slice(0, myText.value.indexOf('-')) - myText.value.slice(myText.value.indexOf('-') + 1, myText.value.length)
            myText.value = "";
        }
        if (myText.value[index] == "*") {
            myValue.value = myText.value.slice(0, myText.value.indexOf('*')) * myText.value.slice(myText.value.indexOf('*') + 1, myText.value.length)
            myText.value = "";
        }

    }

}

Minus.onclick = function() {
    myText.value += '-';
}
Divide.onclick = function() {
    myText.value += '/';
}

remove.onclick = function() {
    myText.value = myText.value.substring(0, myText.value.length - 1);
}

z = 1;
Exit.onclick = function() {

    if (z % 2 == 1) {
        this.className = "fas fa-bars"
        z = 2;
        document.getElementById('hide').className = "calc hide";
    } else if (z % 2 == 0) {
        this.className = "fas fa-times"
        document.getElementById('hide').className = "calc";
        z = 1;
    }
}

if (z == 2) {}