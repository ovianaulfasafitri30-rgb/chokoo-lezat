document.getElementById("formKontak").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;

  alert("Terima kasih, " + nama + ", pesan kamu sudah diterima");
});
