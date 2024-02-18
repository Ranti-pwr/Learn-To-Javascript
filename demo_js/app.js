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
console.log(hasilKurangan)

if (nilai >= 90){
    console.log("Selamat Anda LULUS");
} else if (nilai < 90 && nilai > 75) {
    console.log("Selamat Anda TERIMA KASIH");
} else {
    console.log("Maaf, Anda BUKAN MAMPU MENYELESAIKAN SOAL INI")
}




function displayLyrics() { 
    const lyrics = [ 
    { time: 2000, text: "Girl, you know you're perfect from" }, // 2000 milidetik
    { time: 3600, text: "your head down to" }, // 3600 milidetik
    { time: 2300, text: "your heels" }, //2300 milidetik
    { time: 2170, text: "Don't be confuse by my smile" }, // 2170 milidetik
    { time: 2280, text: "Cause i ain't never before" }, // 2280 milidetik
    { time: 2600, text: "For real" }, //2600 milidetik
    { time: 2500, text: "FOR REAAA" }, //2500 milidetik
    { time: 600, text: "  AAAA" }, // 600 milidetik
    { time: 400, text: "  AAAAALLL" }, //  400 milidetik
    ];

    let currentIndex = 0;

    function showLyric() { 
        console.log(lyrics[currentIndex].text); // Menampilkan teks lirik dari elemen array yang saat ini diindeks oleh currentIndex

        currentIndex++; 

        if (currentIndex < lyrics.length) { 
            setTimeout(showLyric, lyrics[currentIndex].time); 
        }
    }
    setTimeout(showLyric, 1800); // Menetapkan timeout awal untuk memulai menampilkan lirik pertama setelah jeda
}

displayLyrics();
