let styletag = document.querySelector("style");
let fontsImport = document.querySelector("input");
let code = document.querySelector("textarea");
let heading1 = document.querySelector(".right h1");
let paragraph1 = document.querySelector(".right p");
let task = document.querySelector("h2");
let easteregg = document.querySelector(".easteregg");
let time = setInterval(problem, 13);
let styleinner;

let check1;
let check2;
let check3;
let check4;
let check5;
let check6;
let check7;
let check8;
let check9;
function problem() {
    styleinner = fontsImport.value + code.value;
    styletag.innerHTML = styleinner;
    check1 = window.getComputedStyle(heading1).fontFamily;
    check2 = window.getComputedStyle(paragraph1).fontFamily;
    check3 = window.getComputedStyle(paragraph1).fontWeight;
    check4 = window.getComputedStyle(paragraph1).fontSize;
    check5 = code.value.match(/{/g);
    check6 = code.value.match(/}/g);
    check7 = code.value.match(/;/g);
    check8 = fontsImport.value.match(/Roboto/);
    check9 = fontsImport.value.match(/Pacifico/);
    if (check1=="Pacifico, cursive" && check2=="Roboto, sans-serif" && check3=="400" && check4=="20px" && check5.length>=2 && check6.length>=2 && check7.length>=4 && check8!=null && check9!=null) {
        task.innerHTML = "Benar!";
        easteregg.innerHTML ="<div class='wrap'> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> <div class='firework'> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> <div class='c'></div> </div> </div>";
        clearInterval(time);
    }
}