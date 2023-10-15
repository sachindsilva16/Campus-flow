import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";


ReactDOM.render(<App />, document.getElementById("root"));



var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }


    this.el.innerHTML = '<span class="wrap">' + this.txt + '| </span>';

    var that = this;
    var delta = 100 - Math.random() * 50;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// ------------------------------------------------------------

// var p = document.getElementById('text');
// p.innerHTML = '';
// var n = 0;
// var str = 'Hello There! How may i help you..?';
// var typeTimer = setInterval(function() {
//   n = n + 1;
//   p.innerHTML = "> " + str.slice(0, n);
//   if (n === str.length) {
//     clearInterval(typeTimer);
//     p.innerHTML = "> " + str;
//     n = 0;
//     setInterval(function() {

//       if (n === 0) {
//         p.innerHTML = "> " + str + "|"
//         n = 1;
//       } else {
//         p.innerHTML = "> " + str
//         n = 0;
//       };
//     }, 500);
//   };
// }, 60)

// ----------------------------------------------

const typeWriter = document.getElementById('firstText');
let index = 0;
let text = 'Hello There! How may i help you..?'
function Type() {
    if (index < text.length) {
        typeWriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor"></span>';
        index++;
        setTimeout(Type, Math.random() * 150 + 50);
    } else {
        typeWriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor"></span>';
    }
}
Type();

// const typeWriterForOutput = document.getElementById('textOutput');
// let indexForOutput = 0;
// let textForOutput = "What are you looking for...?"
// function TypeForOutput() {
//     if (indexForOutput < textForOutput.length) {
//         typeWriterForOutput.innerHTML = textForOutput.slice(0, indexForOutput) + '<span class="blinking-cursor">|</span>';
//         indexForOutput++;
//         setTimeout(TypeForOutput, Math.random() * 150 + 50);
//     } else {
//         typeWriterForOutput.innerHTML = textForOutput.slice(0, indexForOutput) + '<span class="blinking-cursor">|</span>';
//     }
// }
// TypeForOutput();