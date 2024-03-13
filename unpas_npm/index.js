// var nama = prompt("Siapa nama kamu"); //input javascript dengan input dan disimpan ke variabel
// alert("nama kamu adalah " + nama);
// confirm('kamu yakin ini nama kamu? :' + nama); //mengebalikan nilai true atau false


var nax = ['sidu', 'dunia', 'baru'];

nax.splice(1,0,2); //menyatukan nilai antar array
console.log(nax.join(" ")); //menambahkan nilai baru


//foreeach tidak mengembalikan nilai di variabel
var angka = [1,2,3,4,5,6,7,8,9];
// for( var i = 0; i < angka.length; i++ ){
//     console.log(angka[i]);
// }

angka.forEach(function(e) { //function expression 
    console.log(e)
});

//Map
var map = angka.map(function(e) { //mengembalikan nilai di variable
    return e * 2;
});
console.log(map.join(" "));

//sort 
var angka = [1,2,3,4,5,6,7,8,9,100];
angka.sort(function (a,b) {
    return a-b;
}); //mengurutkan nilai dengan kecil ke besar
console.log(angka.join(" "));


//filter & find
var angka = [1,2,3,4,5,6,7,8,9,100];
var angka2 = angka.find(function (e) { //filter banyak nilai dan find satu nilai yang dicari
   // return e == 6 //mencari nilai 6 yang terdapat di array
    return e > 6 //mencari nilai yang lebih besar dari angka 6 di array atau sebaliknya
});
//join bisa di gunakan di bilangan yang hasilnya array bukan dengan satu nilai
console.log(angka2);
//

//latihan function & array JavaScript
//juragan Angkot => pengelolaan penumpang
var penumpang = [];
var tambahPenumpang = function(nama, penumpang) { //function expression
    if(penumpang.length == 0) { //jika penumpang panjangnya == 0
        penumpang.push(nama);
        return penumpang;
    } else {
        for(var i = 0; i < penumpang.length; i++) { //i = 0; i lebih kecil dari pada panjang nilai penupang
            if(penumpang[i] == undefined) { //jiks array index i dari penumpang == tidak ada atau 0
                penumpang[i] = nama;
                return penumpang;
            }
        };
    }
}
tambahPenumpang("Ahmad", penumpang);
//

//object in javaScript//
//object literal
var nama  = {
    nip : 89777,
    kelas : "XIIA"
}
console.log(nama["nip"]);
//

//object function declaration
function objectdec(np, s) { //membuat object dalam Function
    var coba = {}; //object kosong
    coba.np = np;
    coba.s = s;
    return coba;
}
var objdec = objectdec(78978, "nazaki"); //menambah nilai ke object yang telah di buat difunction deklarasi sesuai dengan urutan parameter
console.log(objdec);

var objdec = objectdec(345, "sofiandi"); //menambah nilai ke object yang telah di buat difunction deklarasi sesuai dengan urutan parameter
console.log(objdec);
//

//object function constructor
function Cstr(k, ns) {
    // var coba = {}; perbedaan dengan function declaration
    this.kelompok = k;
    this.namasubject = ns;
    // return coba; perbedaan dengan function declaration
} 
var  cs1 = new Cstr("IPA","Matematika"); //perbedaan dengan adanya tanda kurung () dan keyword new dibandingkan function declaration
console.log(cs1.kelompok + " mempelajari subjek "+ cs1.namasubject);
//

//Latihan function object in javascript

//object literal
var obj = {};
obj.aku = function() {
    console.log('aku sedang makan');
}
obj.aku(); //memanggil object
//

//object construct
function Mk() {
    console.log(this);//this mengembalikan object yang baru dibuat dengan new
    console.log("apa yang terjadi");
}
new Mk(); //memanggil function construct
//

//konsep THIS in Javascript

var op = 100; //this mengembalikan object global
console.log(this.op);  //undefined karena tidak ada properti OP di dalam objek global
console.log(window === this);  //true karena window adalah objek javasript dan this juga merujuk pada window
 
var ni = {}; //pengembalian object pada java script di literal object
ni.b = function() {
    console.log(this)
    console.log('hello')
}
ni.b();
//this mengembalikan object yang bersangkutan








//by AI
var mk = new Mk();
//console.log(this === window); //true karena window adalah objek global dari js
//console.log(mk === window); //false karena mk bukanlah objek global tapi baris code diatas

//membuat fungsi yang menggunakan this
Mk.sayHello = function () {
    console.log('Halo! Saya '+ this.nama +' dan saya berusia '+ this.umur +'.');
};

new Mk.sayHello();

var namaUtama = 'Dika';
//

var c = {};

Object.create(mk).sayMyName = function(){
    console.log("Saya " + this.namaUtama);
}

mk.sayMyName();