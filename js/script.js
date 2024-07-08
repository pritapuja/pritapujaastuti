function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Mendapatkan elemen dengan ID 'copyright'
var copyrightElement = document.getElementById('copyright');

// Mendapatkan tahun saat ini
var currentYear = new Date().getFullYear();

// Mengganti tahun dalam teks hak cipta dengan tahun saat ini
copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2023', currentYear);

