    const canvas = document.getElementById("grafikCanvas");
    const ctx = canvas.getContext("2d");

    let labels = ["January", "February", "March", "April", "May"];
    let data = [10, 20, 15, 25, 30];

    const form = document.getElementById("dataForm");
    form.addEventListener("submit", function(e) {
    e.preventDefault();

    const label = document.getElementById("labelInput").value;
    const value = parseInt(document.getElementById("valueInput").value);

    if (!label || isNaN(value)) {
        alert("Label dan nilai harus diisi!");
        return;
    }

    labels.push(label);
    data.push(value);

    drawGraph();
    });

    function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Sumbu X dan Y
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(650, 350); // X
    ctx.moveTo(50, 350);
    ctx.lineTo(50, 50); // Y
    ctx.stroke();

    // Gambar garis grafik
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
        const x = 50 + (i * 100);
        const y = 350 - data[i] * 5;
        if (i === 0) {
        ctx.moveTo(x, y);
        } else {
        ctx.lineTo(x, y);
        }
        // Label di bawah
        ctx.fillStyle = "black";
        ctx.fillText(labels[i], x, 370);
    }
    ctx.stroke();
    }

    drawGraph();
