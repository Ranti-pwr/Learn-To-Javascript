// var nama = prompt("Siapa nama kamu"); //input javascript dengan input dan disimpan ke variabel
// alert("nama kamu adalah " + nama);
// confirm('kamu yakin ini nama kamu? :' + nama); //mengebalikan nilai true atau false


var nax = ['sidu', 'dunia', 'baru'];

nax.splice(1,0,2); //menyabukan nilai antar array
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

//latihan function & array JavaScript





