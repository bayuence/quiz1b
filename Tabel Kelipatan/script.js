    const form = document.getElementById("kelipatanForm");

    form.addEventListener("submit", function(e) {
    const input = document.getElementById("kelipatan").value;
    if (input < 0) {
        e.preventDefault();
        alert("Angka tidak boleh negatif!");
    }
    });
