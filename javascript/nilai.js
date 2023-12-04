let nilai= parseInt(prompt("masukka nilai"));
if(nilai>= 0 && nilai < 60){
  document.write(`nilai anda ${nilai}, keterangan D <br>`)
}
else if(nilai >= 60 && nilai <70){
  document.write(`nilai anda ${nilai}, keterangan C <br>`)
}
else if(nilai >= 70 && nilai <85){
  document.write(`nilai anda ${nilai}, keterangan B <br>`)
}
else if(nilai >= 80 && nilai <=100){
  document.write(`nilai anda ${nilai}, keterangan A <br>`)
}
else{
  document.write("nilai yang dimasukkan salah <br>")
}
document.write("anda telah keluar")