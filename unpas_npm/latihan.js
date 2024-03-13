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

return tambahPenumpang("Ahmad", penumpang);