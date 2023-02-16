// DOM selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "here i am";

// document.getElementsByTagName() -> HTMLCollections
// const p = document.getElementsByTagName("p");
// //  *agar tidak mengulang-ulang like this. use loop
// // p[0].style.backgroundColor = "salmon";
// // p[1].style.backgroundColor = "salmon";
// // p[2].style.backgroundColor = "salmon";
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "salmon";
// }

// // bukan cuma get yang jamak tapi bisa juga satu tag, e.g :
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

// // document.getElementsByClassName -> HTMLCollections
// // const p1 = document.getElementsByClassName("p");
// // p[0].style.color = "white";

// // document.querySelector( isinya like css ) -> element
// let li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "lightblue";

// // jika ada banyak elementnya akan diambil yang paling atas. e.g :
// const pExe = document.querySelector("p");
// pExe.innerHTML = "ini dirubah lewat JS selector";

// // document.querySelectorAll
// const pAll = document.querySelectorAll("p");
// for (let i = 0; i < pAll.length; i++) {
//   pAll[i].style.backgroundColor = "salmon";
// }

// merubah Node root
// const sectionB = document.getElementById("b");
// const p = sectionB.getElementsByTagName("p")[0];
// p.style.backgroundColor = "green";

// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.querySelectorAll("p")[0];
// p4.style.backgroundColor = "green";


// suwit jawa v.1

var tanya = true;
while( tanya ) {
    // menangkap pilihan player
    var p = prompt('pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // menentukan rules
    var hasil = '';
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'gajah' ) {
        hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
    } else {
        hasil = 'memasukkan pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

    tanya = confirm('lagi?');
}

alert('terimakasih sudah bermain.');
