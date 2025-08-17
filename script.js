
let Name = document.getElementById('Name');
let Price = document.getElementById('Price');


function showp(){
Name.value = "Prince";
Price.value = "100";
alert("button")
}

 do {
    // Prompt the user for input and store the value in the 'menu' variable.
    let  menu = prompt("Menu \n Press 1 for add product \n Press 2 for Make Bill \n Press 3 for Exit");

    if (menu === "1") {
        window.location.href = "index2.html";
    } else if (menu === "2") {
        window.location.href = "index.html";
        break; 
    } else if (menu === "3") {
        alert("Exiting menu. Have a great day!");
        break; 
    } else {
        alert("Invalid input. Please enter 1, 2, or 3.");
    }
} while (menu !== "1" && menu !== "2" && menu !== "3");


let pname = document.getElementById('p-name');
let pprice = document.getElementById('p-price');
let pimage = document.getElementById('imageUpload');