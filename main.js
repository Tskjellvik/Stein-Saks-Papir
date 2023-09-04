let botans = ""
let brukerans = 0
let stein = 1
let saks = 2
let papir = 3

const selectionStart = document.querySelector("#start")
const selectionStein = document.querySelector("#Stein")
const selectionSaks = document.querySelector("#Saks")
const selectionPapir = document.querySelector("#Papir")
const TimerCount = document.querySelector(".timer")
const aiValgPick = document.querySelector("#imgAi")
const robovalg = getRandomInt(1, 4);
const aiValg = Math.random();

//Eventlistner til start knapp
function handleClicks() {
    console.log("Spillet starter nå!")
    selectionStart.style.display = "none";
    Countdown(5)
}

selectionStart.addEventListener("click", handleClicks)

//Eventlistner til stein
function handleClick() {
    console.log("Bruker valgte stein");
    brukerans = 1
    //console.log(brukerans);
}

selectionStein.addEventListener("click", handleClick)

//Eventlistner til saks
function handleClicke() {
    console.log("Bruker valgte saks")
    brukerans = 2
    //console.log(brukerans);
}

selectionSaks.addEventListener("click", handleClicke)

//Eventlistner til papir
function handleClicker() {
    console.log("Bruker valgte papir")
    brukerans = 3
    //console.log(brukerans);
}

selectionPapir.addEventListener("click", handleClicker)

//Countdown
function Countdown(arg) {
     if(arg >= 1){
        setTimeout(() => {
            console.log(arg);
            arg--;
            Countdown(arg)
            TimerCount.textContent = `${arg}`
            multiRoll()
        }, 1000);
    }
    if (arg == 0) {
        console.log("Checking Answer");
        choiceCheckPapir()
        choiceCheckSaks()
        choiceCheckStein()
        botSvar()
        console.log("Bot answer er ", botans)
    }
};

//Ai sitt valg av stein saks papir
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//console.log(robovalg);


function choiceCheckStein(){
    // robot valg stein
    if (robovalg == stein) {
        if (stein == brukerans) {
            console.log("Tie");
        } else if(papir == brukerans) {
            console.log("Victory");
        } else if(saks == brukerans){
            console.log("Loss");
        }
    }
}

function choiceCheckSaks(){
    //robot valg saks
    if (robovalg == saks) {
        if (stein == brukerans) {
            console.log("Victory");
        } else if(papir == brukerans) {
            console.log("Loss");
        } else if(saks == brukerans){
            console.log("Tie");
        }
    }
}

function choiceCheckPapir(){
    //robot valg papir
    if (robovalg == papir) {
        if (stein == brukerans) {
            console.log("Loss");
        } else if(papir == brukerans) {
            console.log("Tie");
        } else if(saks == brukerans){
            console.log("Victory");
        }
    }
}

//skjekker og git output hva boten svarer
function botSvar(){
    if (robovalg == papir) {
        botans = "papir"
    } else if(robovalg == saks){
        botans = "saks"
    } else if(robovalg == stein){
        botans = "stein"
    }
}


//botsvar rollong bilder

function botRoll(){
    let x = Math.floor(Math.random() *3)

    if(x == 1){
        aiValgPick.src = "./Imeges/Stein.jpg"
    }
    if(x == 2){
        aiValgPick.src = "./Imeges/Saks.jpg"
    }
    if(x == 3){
        aiValgPick.src = "./Imeges/Papir.jpg"
    }
}

//roll mange ganger funksjon
function multiRoll(){
    
}