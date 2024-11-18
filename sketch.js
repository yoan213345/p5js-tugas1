function setup() {
  createCanvas(600, 400, WEBGL); // Mode 3D
  noStroke(); // Hilangkan garis tepi
}

function draw() {
  background(30); // Latar belakang gelap

  // Tambahkan pencahayaan
  ambientLight(150); // Cahaya umum
  directionalLight(255, 255, 255, 0, -1, -1); // Cahaya arah putih

  // Rotasi kamera untuk tampilan dinamis
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // Segitiga pertama
  push();
  fill(255, 0, 0); // Warna merah
  translate(-100, 0, 0); // Geser posisi ke kiri
  drawTriangle3D(100); // Gambar segitiga
  pop();

  // Segitiga kedua
  push();
  fill(0, 255, 0); // Warna hijau
  translate(100, 0, 0); // Geser posisi ke kanan
  rotateZ(PI / 3); // Rotasi segitiga
  drawTriangle3D(100); // Gambar segitiga
  pop();

  // Segitiga ketiga
  push();
  fill(0, 0, 255); // Warna biru
  translate(0, 100, 0); // Geser posisi ke bawah
  rotateX(PI / 3); // Rotasi segitiga
  drawTriangle3D(100); // Gambar segitiga
  pop();
}

// Fungsi untuk menggambar segitiga 3D
function drawTriangle3D(size) {
  beginShape();
  vertex(-size / 2, size / 2, 0); // Kiri bawah
  vertex(size / 2, size / 2, 0);  // Kanan bawah
  vertex(0, -size / 2, 0);        // Atas
  endShape(CLOSE);
}
