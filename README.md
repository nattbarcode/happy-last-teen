<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday Yayah!</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="passwordScreen" class="screen">
        <h2>Enter Passcode</h2>
        <input type="password" id="passcode" placeholder="Enter Passcode">
        <button id="submitBtn">Submit</button>
    </div>
    
    <div id="countdownScreen" class="screen hidden">
        <h2>enjoy your last teen year!</h2>
        <p id="countdown"></p>
        <button onclick="showLetter()">I have something for you</button>
    </div>
    
    <div id="letterScreen" class="screen hidden">
        <h2>Hi Yayah</h2>
        <p id="loveLetter">
            Selamat ulang tahun untuk si pemilik senyum manis, si gadis asing yang kehadirannya tak pernah kuduga, si cantik penyuka pink, dan si princess dari pelosok.
            Hari ini adalah hari spesial, hari di mana kamu lahir ke dunia, membawa cahaya dan makna bagi banyak orang, termasuk aku.  
            Aku bersyukur bisa mengenalmu, seseorang yang bahkan lewat hal-hal kecil bisa membuat hari-hariku lebih berarti. 
            Dari warna pink yang kini selalu mengingatkanku padamu, hingga refleksku yang langsung teringat Besakih setiap mendengar Karangasem. 
            Dari momen konyol nebak menu Solaria sampai panggilan larut malam yang selalu membawa ketenangan. 
            Bahkan yapping kecilmu yang random pun jadi sesuatu yang aku tunggu.  
            Di usiamu yang baru ini, aku berdoa semoga kebahagiaan selalu menyertaimu, impianmu tercapai satu per satu, dan apa pun yang kamu harapkan bisa terwujud. 
            Jangan pernah merasa sendiri, karena aku selalu ada di belakangmu, mendukungmu dalam setiap langkah yang kamu ambil. 
            Selamat ulang tahun, semoga hari ini dan seterusnya penuh kebahagiaan!
        </p>
        <button onclick="showPhotoContainer()">Click Here!</button>
    </div>

    <div id="photoContainer" class="screen hidden">
        <h2>your special photo</h2>
        <img id="specialPhoto" src="you.jpg" alt="Special Photo" style="width: 100%; border-radius: 10px; margin-bottom: 10px;">
        <p id="photoText">Pada hari Rabu itu, untuk pertama kalinya kita bertemu. Dengan sengaja, aku mengabadikan sebuah gambar yang begitu indah. Dalam gambar itu, ada dua keindahan ciptaan Tuhan yang terpampang di mataku yaitu kamu dan sang surya yang perlahan tenggelam di ufuk barat. Sang surya redup seiring tenggelamnya, tapi cahayamu? Tidak pernah meredup sedikit pun di mataku.</p>
        <p>If I had a super power, I would want to give you the opportunity to see yourself through my eyes. Only then will you understand how special you are to me.</p>
        <button onclick="closePhotoContainer()">Close</button>
    </div>

    <div id="finalMessage" class="screen hidden">
        <h2>now and always</h2>
        <p>if no one listens to you, i will listen to you</p>
        <p>if no one believes in you, i will believe in you</p>
        <p>if no one is proud of you, i will be proud of you</p>
        <p>if you're struggling, i'll be here to comfort you</p>
        <p>if you ever feel like you don't have anyone, you have me</p>
        <p>no matter how bad you think of yourself, i'll always see the good in you</p>
        <p>no matter how bad you think of yourself, i'll always see the good in you</p>
    </div>

    <audio id="bgMusic" autoplay loop>
        <source src="your-song.mp3" type="audio/mp3">
    </audio>

    <script src="script.js" defer></script>
</body>
</html>

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

@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
    background-color: #FFD1DC;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: 'Pacifico', cursive;
}

.screen {
    background: #FFECF3;
    padding: 30px; /* Memberikan ruang 30px di semua sisi kontainer */
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 400px; /* Meningkatkan lebar kontainer */
    height: auto; /* Mengatur tinggi otomatis untuk menampung konten */
}

.hidden {
    display: none;
}

h2 {
    color: #FF69B4;
}

input {
    padding: 10px; /* Memberikan ruang 10px di dalam input */
    border: 2px solid #FF69B4;
    border-radius: 10px;
    width: 80%;
    margin-bottom: 10px;
}

button {
    background: #FF69B4;
    color: white;
    padding: 10px 15px; /* Memberikan ruang 10px di atas dan bawah, 15px di kiri dan kanan */
}
