    const canvas = document.getElementById("calendarCanvas");
    const ctx = canvas.getContext("2d");
    const monthTitle = document.getElementById("monthTitle");
    const prevBtn = document.getElementById("prevMonth");
    const nextBtn = document.getElementById("nextMonth");

    let currentDate = new Date();
    const today = new Date(); // tetap untuk referensi tanggal hari ini

    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    function drawCalendar(date) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Judul bulan
    monthTitle.textContent = `${monthNames[month]} ${year}`;

    // Nama hari
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    dayNames.forEach((day, i) => {
        ctx.fillStyle = "black";
        ctx.fillText(day, 100 + i * 80, 50);
    });

    // Gambar tanggal
    let row = 0;
    for (let dateNum = 1; dateNum <= lastDate; dateNum++) {
        let col = (firstDay + dateNum - 1) % 7;
        row = Math.floor((firstDay + dateNum - 1) / 7);

        let x = 100 + col * 80;
        let y = 90 + row * 50;

        // Kondisi untuk menandai tanggal hari ini dan tanggal yang sama
        let isToday =
        dateNum === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear();

        let isSameDate = dateNum === today.getDate();

        if (isToday || isSameDate) {
        ctx.fillStyle = "red";
        ctx.fillRect(x - 25, y - 20, 40, 30);
        ctx.fillStyle = "white";
        } else {
        ctx.fillStyle = "black";
        }

        ctx.fillText(dateNum, x, y);
    }
    }

    prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    drawCalendar(currentDate);
    });

    nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    drawCalendar(currentDate);
    });

    drawCalendar(currentDate);
