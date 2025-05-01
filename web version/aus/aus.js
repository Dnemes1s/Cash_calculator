let hundred;
let fifty;
let twenty;
let ten;
let five;
let two;
let one;
let fiftyCents;
let twentyCents;
let tenCents;
let fiveCents;

document.getElementById("Calculate").onclick = function () {
    hundred = document.getElementById("100").value;
    fifty = document.getElementById("50").value;
    twenty = document.getElementById("20").value;
    ten = document.getElementById("10").value;
    five = document.getElementById("5").value;
    two = document.getElementById("2").value;
    one = document.getElementById("1").value;
    fiftyCents = document.getElementById(".5").value;
    twentyCents = document.getElementById(".2").value;
    tenCents = document.getElementById(".1").value;
    fiveCents = document.getElementById(".05").value;
    let total = (hundred * 100) + (fifty * 50) + (twenty * 20) + (ten * 10) + (five * 5) + (two * 2) + (one * 1) + (fiftyCents * 0.5) + (twentyCents * 0.2) + (tenCents * 0.1) + (fiveCents * 0.05);
    console.log(total);
    document.getElementById("calculation").textContent = `Total amount of cash:$${total}`;
}