document.getElementById('changeNameButton').addEventListener('click', function() {
    let name = "";
    while (name.trim() === "" || name === null) {
        name = prompt("Please enter your name:");
        if (name === null || name.trim() === "") {
            alert("Invalid input. Please enter a valid name.");
        }
    }
    document.body.innerHTML = document.body.innerHTML.replace("{{Replace with your Full Name}}", name);
});