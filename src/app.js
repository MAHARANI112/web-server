const express = require('express');
const path = require('path');
const app = express();

// Halaman utama
//ini halaman utama
app.get('', (req, res) => {
    res.render('index', {
    judul: 'Aplikasi Cek Cuaca',
    nama: 'Maharani Safitri'
    })

// Halaman bantuan/FAQ
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
    judul: 'bantuan',
    nama: 'Maharani Safitri'
    })
    })
    

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.json({
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    });
});

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
    judul: 'Tentang Saya',
    nama: 'Maharani Safitri'
    })
})
    

const direktoriPublic = path.join(__dirname, '../public');
app.set('view engine', 'hbs');
//app.use(express.static(direktoriPublic));

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000.');
});
