function funct() {
    let nama = prompt('Siapa nama?');
    document.getElementById('tajuk').innerText = 'Selamat Datang ' + nama;
}
function validate() {
    let sahkan = confirm('Adakah anda pasti?');
    if (sahkan) {
        return true;
    } else {
        alert('Arahan simpan dibatalkan');
        return false;
    }
}
function fokus() {
    document.getElementById('mesej').innerText = 'Sila klik butang Simpan';
}
function blurx() {
    document.getElementById('mesej').innerText = 'Sila nyatakan keperluan anda';
}