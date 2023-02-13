var score = 0;
var clickAmnt = 1;
var upgradeAmnt = 20;
var clickUpgrd = 0;
var clickerPower = 0;
var clickerPrice = 15;
var dblPrice = 50;
var clickerAddAmnt = 1;
setInterval(autoClick,250);
function autoClick () {
    score = score + (clickerPower / 4)
    updateScore()
}
function addClicker () {
    if (score >= clickerPrice) {
        clickerPower = clickerPower + clickerAddAmnt
        score = score - clickerPrice
        clickerPrice = Math.trunc(clickerPrice * 1.40)
        updateScore()
    }
}
function dblClick() {
    if (score >= dblPrice) {
        clickerPower = clickerPower * 2
        clickerAddAmnt = clickerAddAmnt * 2
        score = score - dblPrice
        dblPrice = Math.trunc(dblPrice * 2.5)
        updateScore()
    }
}
function scorePlus1() {
    score = score + clickAmnt
    updateScore()
}
function upgrade() {
    if (score >= upgradeAmnt) {
        clickAmnt = clickAmnt + 2
        score = score - upgradeAmnt
        upgradeAmnt = Math.trunc(upgradeAmnt * 1.30);
        clickUpgrd = clickUpgrd + 1
        if (clickUpgrd = 10 || 25 || 50 || 100) {
            clickAmnt = clickAmnt + 3
        }
        updateScore()
    }
}
function cheatScore(amnt) {
    score = amnt
}
function updateScore() {
    document.getElementById("score").innerHTML = score;
    document.getElementById("clickAmnt").innerHTML = upgradeAmnt;
    document.getElementById("clickerAmnt").innerHTML = clickerPower;
    document.getElementById("clickTxt").innerHTML = "Buy clicker for " + clickerPrice + " score";
    document.getElementById("clickDblTxt").innerHTML = "Double clicker power for " + dblPrice + " score"
}