//Pembahasan object javascript 
//Object Literal
let mahasiswa = {
    nama: 'sofiandi',
    energi: 80,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan :)`);
        console.log(`Halo ${this.nama}, energi kamu sekarang bertambah menjadi ${this.energi}`);
    }
    
};
console.log(mahasiswa.makan(15));
//

//object declaration 
const Method  = {
    minum : function(gelas) {
        this.ener += gelas;
        console.log(`Energi anda bertambah setelah minum ${this.minum}`);
    },
    
    makan : function(porsi1) {
        this.ener += porsi1 //ditambah karena makan
        console.log(`Halo ${this.nama}, selamat makan :)`);
        console.log(`Halo ${this.nama}, energi kamu sekarang bertambah menjadi ${this.makan}`);
    },

    tidur : function(jam) {
        this.ener += 2 * jam;
        console.log(`Halo ${this.nama}, Selamat tidur kawan`);
    },
    main : function(jam) {
        this.ener -= jam; //dikurang karena main game
        console.log(`Halo ${this.nama}, energi kamu sekarang berkurang karena kebanyakan main game menjadi ${this.ener} :(`);
    },
}

function Mahasiswa(nam, ener) {
    let maha = Object.create(Method);//implementasi jika menggunakan object.create
    maha.nama = nam;
    maha.ener = ener;
    // maha.makan = function(porsi1) {
    //     this.ener += porsi1 //ditambah karena makan
    //     console.log(`Halo ${this.nama}, selamat makan :)`);
    //     console.log(`Halo ${this.nama}, energi kamu sekarang bertambah menjadi ${this.ener}`);
    // };
    // maha.makan = Method.makan; //memanggil object lain ke dalam object
    // maha.minum = Method.minum; //memanggil object lain ke dalam object
    // maha.tidur = Method.tidur;
    return maha; //kembalikan object lagi
}
// console.log(Mahasiswa.makan(12));

let naza = Mahasiswa("Sutanxo", 15);
console.log(naza);

let men = Mahasiswa("Men", 12);
//

//object constructor
//keyword new
function Menc(nama, lahir) {
    this.nama =  nama;
    this.lahir = lahir;

    this.tahun = function(tahun) {
        this.lahir -= tahun
        console.log(`Halo ${nama} sekarang umur kamu sudah mencapai ${this.lahir} thn. Selamat Yah panjang umur nihh :))`);
    }
}

let cia = new Menc("cia", 2006);


//

//object Object.create()
