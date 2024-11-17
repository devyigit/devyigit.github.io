// Çeviri İşlevselliği
const translateIcon = document.querySelector('.translate-icon i');
const textsToTranslate = {
  en: {
    heading: "Yiğit KABAK",
    description: "Hi, I have been developing projects as a full-stack developer for 6 years now. I have 2 big projects, and both of them were very loved by the community.",
    followMe: "FOLLOW ME ON",
    likeMyWork: "LIKE MY WORK",
    hireMe: "Hire Me"
  },
  tr: {
    heading: "Yiğit KABAK",
    description: "Merhaba, 6 yıldır full-stack geliştirici olarak projeler geliştiriyorum. 2 büyük projem var ve her ikisi de topluluk tarafından çok sevildi.",
    followMe: "BENİ TAKİP ET",
    likeMyWork: "ÇALIŞMALARIMI BEĞEN",
    hireMe: "Beni İşe Al"
  }
};

let currentLang = 'en';

const updateIcon = () => {
  if (currentLang === 'tr') {
    translateIcon.className = ''; // Tüm eski sınıfları kaldır
    translateIcon.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg')";
    translateIcon.style.backgroundSize = "cover";
    translateIcon.style.backgroundPosition = "center";
    translateIcon.style.width = "32px";
    translateIcon.style.height = "32px";
    translateIcon.style.borderRadius = "50%";
  } else {
    translateIcon.className = ''; // Tüm eski sınıfları kaldır
    translateIcon.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg')";
    translateIcon.style.backgroundSize = "cover";
    translateIcon.style.backgroundPosition = "center";
    translateIcon.style.width = "32px";
    translateIcon.style.height = "32px";
    translateIcon.style.borderRadius = "50%";
  }
};

// Başlangıçta İngiliz bayrağını göster
updateIcon();

translateIcon.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'tr' : 'en';

  // Metinleri Güncelle
  document.querySelector('h1').textContent = textsToTranslate[currentLang].heading;
  document.querySelector('.description').textContent = textsToTranslate[currentLang].description;

  const smallHeadings = document.querySelectorAll('.small-heading');
  smallHeadings[0].textContent = textsToTranslate[currentLang].followMe;
  smallHeadings[1].textContent = textsToTranslate[currentLang].likeMyWork;

  document.querySelector('.hire-me').textContent = textsToTranslate[currentLang].hireMe;

  // Simgeyi Güncelle
  updateIcon();
});

// Tema Değiştirme İşlevselliği
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('fa-sun');
  themeIcon.classList.toggle('fa-moon');
});