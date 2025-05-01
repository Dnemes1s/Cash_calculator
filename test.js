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
    let total = (hundred * 100) + (fifty * 50) + (twenty * 20) + (ten * 10);
    console.log(total);
    document.getElementById("calculation").textContent = `Total amount of cash:$${total}`;

}