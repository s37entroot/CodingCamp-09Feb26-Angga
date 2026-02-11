// Fungsi untuk memproses form
const form = document.getElementById('message-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai dari input
    const nama = document.getElementById('input-nama').value;
    const tgl = document.getElementById('input-tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('input-pesan').value;
    
    // Mengambil waktu saat ini
    const currentTime = new Date();

    // Menampilkan hasil ke kotak sebelah kanan
    document.getElementById('current-time').innerText = currentTime.toString();
    document.getElementById('res-nama').innerText = nama;
    document.getElementById('res-tgl').innerText = tgl;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-pesan').innerText = pesan;

    // Opsional: Ganti teks welcome di atas
    document.getElementById('welcome-text').innerText = `Hi ${nama}, Welcome To Website`;
});