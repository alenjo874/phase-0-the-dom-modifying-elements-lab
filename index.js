// Write your code here!
let removeMain = document.getElementById("main");
removeMain.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "<p> Alen is the champion </p>";

document.body.append(newHeader);
