const canvas = document.getElementById('alx');
const ctx = canvas.getContext('2d');

// Sesuaikan ukuran canvas dengan ukuran jendela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fungsi untuk menggambar hati
function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size * 0.5);
  ctx.bezierCurveTo(x - size * 0.2, y - size * 0.7, x - size * 0.6, y + size * 0.2, x, y + size * 0.5);
  ctx.bezierCurveTo(x + size * 0.6, y + size * 0.2, x + size * 0.2, y - size * 0.7, x, y - size * 0.5);
  ctx.fillStyle = 'red';
  ctx.fill();
}

// Fungsi untuk menulis teks
function writeText(text, x, y, fontSize) {
  ctx.font = `${fontSize}px sans-serif`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
}

// Gambar hati di tengah canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const heartSize = 200;
drawHeart(centerX, centerY, heartSize);

// Tulis teks "For Lia" di tengah hati
const text = 'For Lia';
const textSize = 40;
writeText(text, centerX, centerY, textSize);
