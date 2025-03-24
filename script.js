let balance = 0;

function addTransaction() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let type = document.getElementById("type").value;
    
    if (desc === "" || amount === "") {
        alert("Please fill in all fields!");
        return;
    }

    amount = parseFloat(amount);
    
    let table = document.getElementById("transaction-list");
    let row = table.insertRow();
    
    row.insertCell(0).textContent = desc;
    row.insertCell(1).textContent = "₹" + amount;
    row.insertCell(2).textContent = type.charAt(0).toUpperCase() + type.slice(1);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        table.deleteRow(row.rowIndex - 1);
        updateBalance(-amount, type);
    };

    row.insertCell(3).appendChild(deleteBtn);

    updateBalance(amount, type);

    // Clear input fields
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function updateBalance(amount, type) {
    if (type === "income") {
        balance += amount;
    } else {
        balance -= amount;
    }
    document.getElementById("balance").textContent = balance;
}
