document.getElementById('tampil').onclick = function(){
	var nama=document.getElementById ('name').value.trim();
	if(nama===""){
		nama="('Nama Harus diisi')";
	}
	var kelas=document.getElementById('kelas').value.trim();
	if(kelas===""){
		kelas="(kelas harus di isi)";
	}
	
	var ekstra = "";
var radios = document.getElementsByName('| Pilih Ekstrakurikuler(3 pilihan)');

for(var i = 0; i < radios.length; i++){
	if(radios[i].checked){
		ekstra = radios[i].value;
		break;
	}
}

if(ekstra === ""){
	ekstra = "(ekstrakurikuler harus diisi)";
}
var jadwal = "";
var pilihJadwal = document.getElementsByName('| Pilih Jadwal Belajar(wajib pilih salah satu)');

for(var i = 0; i < pilihJadwal.length; i++){
	if(pilihJadwal[i].checked){
		jadwal = pilihJadwal[i].value;
		break;
	}
}

if(jadwal === ""){
	jadwal = "(jadwal harus diisi)";
}
		var setuju=document.getElementById('setuju').checked ? "ya" :"Tidak";
		var hasilText =
						"Nama Lengkap: " + nama +
						"\nKelas: " + kelas +
						"\nEkstrakurikuler: " + ekstra +
						"\nJadwal: " + jadwal +
						"\nSetuju: " + setuju;
		document.getElementById('hasil').innerText= hasilText;
}