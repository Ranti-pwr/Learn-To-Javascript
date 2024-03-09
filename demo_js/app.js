const nilai = 90;
const ab = 70 

const tex = nilai > 75;
console.log(tex);
const cd = ab > 75;
console.log(cd);

const lulus = tex && cd;
//document.writeln(lulus);
console.log(lulus);
const coba = Array(1,2,3).includes(2) ? "benar" : "salah";
console.log(coba);
console.warn('ini peringatan');
console.error('ini sedang error');
const nama = 'sofiandi';
const coad = `Nama saya : ${nama}`; //string template
const cos = `nama kamu ${nama}, Lulus : ${nilai > 75}`;
console.log(coad + ' Dwi Aulia Fauzi')
console.log(cos);// exspression string template
const mi = `Lorem ipsum 
nazaki middle lane rasa sayang ku ke kamu ${nama} gak akan habis
hahah wkwkwkwk candaaa bang`; //multipple string template
console.log(mi);
const sb = Number.toString(nilai);
console.log(sb);
const sbb = String(ab);
console.log(sbb);

//komversi string and Number
const sd = 12;//"ass"; //Not a Number jika variabel string yang konversi tidak berbentuk number
const ads = 12; //gunakan fungsi parseInt atau parseFloat untuk mengkonversi dari string menjadi angka
//isNan untuk mengecek apakah number tipe Not a Number

console.log(Number.parseFloat(sd) + ads); //konversi
console.log(String(ads));

//Tipe data array 


//operasi matematika
const angkaA = 4;
const angkaB = 8;


const hasilPerkalian = angkaA * angkaB;
console.log(hasilPerkalian);

const hasilPembagian = angkaA / angkaB;
console.log(hasilPembagian);

const hasilModulo = angkaA % angkaB;
console.log(hasilModulo);

const hasilTambahan = angkaA + angkaB;
console.log(hasilTambahan);

const hasilKurangan = angkaA - angkaB;
console.log(hasilKurangan);

if (nilai >= 90){
    console.log("Selamat Anda LULUS");
} else if (nilai < 90 && nilai > 75) {
    console.log("Selamat Anda TERIMA KASIH");
} else {
    console.log("Maaf, Anda BUKAN MAMPU MENYELESAIKAN SOAL INI")
}

// Setiap data di Array akan di simpan  dalam posisi berurutan, dimana urutan pertama dimulai dari nomor 0
// setiap kita menambahkan data ke Array, otomatis data akan disimpan di urutan terakhir 
// urutan di array, kita sebut dengan index
//Array in JavaScript
let kam  = ['apapun', 'yang', 'terjadi', 'akupun juga tidak bisa'];
console.table(kam[3]);

//menambahkan elemen ke dalam array
kam.push('dengan benar');
console.log(kam);

//menghapus elemen dari array
kam.pop('dengan benar');
console.log(kam);

delete kam[3]; // menghapus element dari array dengan cara memberikan index yang ingin di hapus
console.log(kam);

//memperbarui isi array dengan index tertentu yg sudah ada di arraynya
kam[2] = "tidak terjadi";
console.log(kam);

//menggunakan for of untuk menampilkan semua data pada array
for (let i of kam) {
    console.log(`Data : ${i }`);
} 



//Tipe Data Object  In javaScipt 
// Tipe Data Objecy\t adalah tipe data yang mirip dengan array
// dan dalam pemrograman javascript di array asosiative di support dengan javascript
// Objek merupakan tipe data yang paling banyak digunakan dalam javascript dan memiliki struktur yang lebih kompleks dari pada array
//index di object biasanya disebut attribute atau properties, bukan index

let budi = { // contoh pembuatan object dalam variable
    nama: 'budi',
    umur: 18,
    hobi:['berenang','ngoding','game'],
};

console.log(`nama saya adalah ${budi.nama}`); // cara membaca value dari property nama 

//Menampilkan data object dengan cara normal
console.log(budi.nama);

// Menampilkan data objek dengan cara menggunakan notasi titik
console.log(budi['umur']);

//Membuat object baru dan memecahkan key yang sama dengan objek lainya
let anggota = {
    nama:'Angga',
    umur:20
};

budi = Object.assign({},budi,anggota);
console.log(budi);

// Menghapus Key Dari Objek
delete budi.umur;
console.log(budi);

//Memasukkan Key Baru Ke Dalam Objek
budi.pekerjaan = 'programmer';
console.log(budi);2.

/* Tugas Praktek */
//Buatlah sebuah program javascript yang berfungsi membaca file JSON lalu menyimpannya ke dalam array

//IF Expression in JavaScript [Percabngan]
if (true) {
    console.log('Selamat malam');
} else if (false) {
    console.log('Selamat pagi')
} else {
    console.log('Selamat siang');
}

//Switch Statement [Percabangan]
const hariIni = new Date().getDay();
switch (hariIni) {
    case 0:
        console.log('Hari ini senin');
        break;
    case 1:
        console.log('Hari ini selasa');
        break;
    case 2:
        console.log('Hari ini adalah Rabu');
        break;
    case 3:
        console.log( 'Hari ini Kamis' );
        break;
    case 4:
        console.log( "Hari ini Jumat" );
        break;
    case 5:
        console.log('Hari ini adalah  Sabtu');
        break;
    case 6:
        console.log('hari ini adalah  minggu');
        break;
    default:
        console.log('Hari ini tidak diketahui');
        break;
}


//Loops [Pemulatan]
for (let i=0; i<5; i++) {
    console.log('ini adalah loop number ' + i);
}

let arr = ['A', 'B', 'C'];
for (let key of arr) {
    console.log(`Key : ${key }`);
}

//While Loop [perulangan]
let angka = 1;
while (angka < 6) {
    console.log(`Angka saat ini adalah ${angka}`);
    angka++;
}




//Tugas
/* Buatlah program yang membaca nama dan umur siswa, kemudian menampilkan data tersebut ke layar */
// console.log("Masukkan Nama Siswa");
// nama_siswa = readlineSync.question('Nama Siswa : ');
// console.log(nama_siswa);
// console.log("Masukkan Umur Siswa");
// umur_siswi = Number(readlineSync.question('Umur Siswi : '));
// console.log(`Nama Siswa Adalah ${nama_siswa}, Dan Umurnya Adalah ${umur_siswi}`); 









// function displayLyrics() { 
//     const lyrics = [ 
//     { time: 2000, text: "Girl, you know you're perfect from" }, // 2000 milidetik
//     { time: 3600, text: "your head down to" }, // 3600 milidetik
//     { time: 2300, text: "your heels" }, //2300 milidetik
//     { time: 2170, text: "Don't be confuse by my smile" }, // 2170 milidetik
//     { time: 2280, text: "Cause i ain't never before" }, // 2280 milidetik
//     { time: 2600, text: "For real" }, //2600 milidetik
//     { time: 2500, text: "FOR REAAA" }, //2500 milidetik
//     { time: 600, text: "  AAAA" }, // 600 milidetik
//     { time: 400, text: "  AAAAALLL" }, //  400 milidetik
//     ];

//     let currentIndex = 0;

//     function showLyric() { 
//         console.log(lyrics[currentIndex].text); // Menampilkan teks lirik dari elemen array yang saat ini diindeks oleh currentIndex

//         currentIndex++; 

//         if (currentIndex < lyrics.length) { 
//             setTimeout(showLyric, lyrics[currentIndex].time); 
//         }
//     }
//     setTimeout(showLyric, 1800); // Menetapkan timeout awal untuk memulai menampilkan lirik pertama setelah jeda
// }

// displayLyrics();

