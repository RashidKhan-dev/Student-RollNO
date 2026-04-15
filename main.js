var list = [["Rashid", 814293], ["Nowshad", 814242]];

var name = prompt("Name:");
var roll = Number(prompt("Roll:"));

var found = false;

for (var i = 0; i < list.length; i++) {
    if (
        list[i][0].toLowerCase() == name.toLowerCase() &&
        list[i][1] == roll
    ) {
        alert("Verify: done!");
        found = true;
        break;
    }
}

if (!found) {
    alert("Verify: Not found!");
}