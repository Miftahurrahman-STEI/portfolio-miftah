// document.getElementById('toggleBtn').addEventListener('click', () => {
//     let sidebar = document.getElementById('sidebar');
//     if (sidebar.style.left === '-250px') {
//       sidebar.style.left = '0';
//     }else if(!sidebar.style.left === '0'){
//         return sidebar.style.left = '-250px'
//     }else{
//         sidebar.style.left = '-250px';
//     }
//   });
  

let animationText = document.querySelector('#animation-text');

animationText.addEventListener('animationend', () => {
    animationText.classList.remove('animation-text');
    void animationText.offsetWidth;
    animationText.classList.add('animation-text');
});


function downloadFile() {
        // Buat data yang ingin diunduh (misalnya teks)
        var data = "teks";
    
        // Buat elemen tautan (anchor) baru
        var downloadLink = document.createElement("a");
        
        // Tetapkan data yang ingin diunduh ke properti href
        downloadLink.href = "data:img/http://4.bp.blogspot.com/-0iewOUteV-8/VMHJst2-VjI/AAAAAAAAKXw/iIfhIo6fJPU/s1600/Gambar%2BKura-Kura.Zoozon.blogspot%2B(14).jpg;charset=utf-8," + encodeURIComponent(data);
        
        // Tetapkan nama file yang diinginkan
        downloadLink.download = "miftahcv.jpg";
    
        // Tambahkan elemen tautan ke dalam dokumen
        document.body.appendChild(downloadLink);
    
        // Klik tombol secara otomatis
        downloadLink.click();
    
        // Hapus elemen tautan setelah selesai
        document.body.removeChild(downloadLink);
  }
  
  // Tambahkan event listener ke tombol
  var button = document.getElementById("donwload-cv");
  button.addEventListener("click", downloadFile);
  