    <?php
    $kelipatan = isset($_POST["kelipatan"]) ? intval($_POST["kelipatan"]) : 0;
    ?>

    <!DOCTYPE html>
    <html lang="id">
    <head>
    <meta charset="UTF-8">
    <title>Hasil Kelipatan</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="container">
        <form method="POST" action="proses.php">
        <label>Masukkan kelipatan:</label>
        <input type="number" name="kelipatan" value="<?= $kelipatan ?>">
        <button type="submit">Kirim</button>
        </form>

        <canvas id="kelipatanCanvas" width="700" height="600"></canvas>
    </div>

    <script>
        const canvas = document.getElementById("kelipatanCanvas");
        const ctx = canvas.getContext("2d");

        ctx.font = "16px Arial";
        ctx.textAlign = "center";

        // Judul
        ctx.fillStyle = "black";
        ctx.fillText("Kelipatan <?= $kelipatan ?>", 350, 30);

        // Header Tabel
        ctx.fillText("Angka", 200, 60);
        ctx.fillText("Kelipatan", 500, 60);

        let y = 90;

        for (let i = 1; i <= 40; i++) {
        ctx.fillStyle = "black";
        ctx.fillText(i, 200, y);

        let isKelipatan = <?= $kelipatan ?> > 0 ? i % <?= $kelipatan ?> === 0 : true;

        if (isKelipatan) {
            ctx.fillStyle = "green";
            ctx.fillRect(470, y - 15, 60, 20);
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = "black";
        }

        ctx.fillText(i, 500, y);
        y += 25;
        }
    </script>
    </body>
    </html>
    <?php