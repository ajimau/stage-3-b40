// console.log('Hallo Semuanya');
// document.write('hello world!');
// alert('Selamat Pagi')

// var
// let
// const

// var bisa didleklarasi ulang
// var gelas = "Air Putih"
// var gelas = "Kopi"
// console.log(gelas);

// let tidak bisa dideklarasi ulang tapi bisa diubah
// let mangkok = "Bakso"
// mangkok = "Mie Ayam"
// console.log(mangkok);

// const tidak bisa diubah
// const piring = "Nasi Goreng"
// piring = "Bubur"
// console.log(piring);

// type data
// let nama = "Aji"
// let umur = 21
// let suksesSelalu = true

// nama saya Aji umur saya 15 tahun
// console.log(`nama saya ${nama} umur saya ${umur} tahun`);
// console.log("nama saya", nama, "umur saya", umur, "tahun");
// console.log("nama saya " + nama + " umur saya " + umur + " tahun");

// operator
// let bilanganSatu = 50
// let bilanganDua = 20
// let result = bilanganSatu + bilanganDua
// console.log(result);

// condition
// jika nilai lebih dari 75 maka lulus
// let nilai = 75
// if (nilai < 75 ) {
//     console.log("lulus");
// } else {
//     console.log("tidak lulus");
// }

// function
// function Hello (bilanganSatu = 50, bilanganDua = 60) {
//    let result = bilanganSatu + bilanganDua
//    console.log(result);
// }
// Hello ()

// membuat function dengan namaSaya, dengan parameter name
// function namaSaya(nama) {
//     console.log(nama);
// }
// namaSaya ("aji")

function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name == "") {
       return alert("name harus diisi")
    } else  if (email == "") {
       return alert("email harus diisi")
    } else  if (phone == "") {
       return alert("phone harus diisi")
    } else  if (subject == "") {
       return alert("subject harus diisi")
    } else  if (message == "") {
       return alert("message harus diisi")
    }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    let a = document.createElement('a')
    a.href = `mailto:${email}?subject=${subject}&body=hello my name ${name}, ${message}, silakan kontak ke nomor ${phone}`

    a.click()
}