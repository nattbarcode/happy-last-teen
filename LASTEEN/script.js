document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        checkPassword();
        document.getElementById("bgMusic").play(); // Memulai musik saat tombol diklik
    });
});

function checkPassword() {
    let input = document.getElementById("passcode").value;
    let correctPassword = "gelattouu";

    if (input === correctPassword) {
        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("countdownScreen").classList.remove("hidden");
    } else {
        alert("salah huuuu! cemenn");
    }
}

function showLetter() {
    document.getElementById("countdownScreen").classList.add("hidden");
    document.getElementById("letterScreen").classList.remove("hidden");
}

function closeLetter() {
    document.getElementById("letterScreen").classList.add("hidden");
    document.getElementById("passwordScreen").classList.remove("hidden");
}

function showPhotoContainer() {
    document.getElementById("letterScreen").classList.add("hidden"); // Sembunyikan layar surat
    document.getElementById("photoContainer").classList.remove("hidden"); // Tampilkan kontainer foto
}

function closePhotoContainer() {
    document.getElementById("photoContainer").classList.add("hidden"); // Sembunyikan kontainer foto
    document.getElementById("letterScreen").classList.remove("hidden"); // Tampilkan layar surat
}

function closePhotoContainer() {
    document.getElementById("photoContainer").classList.add("hidden"); // Sembunyikan kontainer foto
    document.getElementById("finalMessage").classList.remove("hidden"); // Tampilkan pesan akhir
}