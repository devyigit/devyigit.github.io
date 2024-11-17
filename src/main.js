// Tema Değiştirme İşlevselliği
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('fa-sun');
  themeIcon.classList.toggle('fa-moon');
});

// Çeviri İşlevselliği
const translateIcon = document.querySelector('.translate-icon');
const textsToTranslate = {
  en: {
    heading: "Yiğit KABAK",
    description:
      "Hi, I have been developing projects as a full-stack developer for 6 years now. I have 2 big projects, and both of them were very loved by the community.",
    followMe: "FOLLOW ME ON",
    likeMyWork: "LIKE MY WORK",
    hireMe: "Hire Me",
  },
  tr: {
    heading: "Yiğit KABAK",
    description:
      "Merhaba, 6 yıldır full-stack geliştirici olarak projeler geliştiriyorum. 2 büyük projem var ve her ikisi de topluluk tarafından çok sevildi.",
    followMe: "BENİ TAKİP ET",
    likeMyWork: "ÇALIŞMALARIMI BEĞEN",
    hireMe: "Beni İşe Al",
  },
  zh: {
    heading: "Yiğit KABAK",
    description:
      "你好，我是一名全栈开发人员，已经开发项目6年。我有两个大型项目，它们都深受社区喜爱。",
    followMe: "关注我",
    likeMyWork: "喜欢我的工作",
    hireMe: "雇用我",
  },
  de: {
    heading: "Yiğit KABAK",
    description:
      "Hallo, ich bin seit 6 Jahren als Full-Stack-Entwickler tätig. Ich habe 2 große Projekte und beide wurden von der Community sehr geschätzt.",
    followMe: "FOLGE MIR AUF",
    likeMyWork: "MAGST DU MEINE ARBEIT",
    hireMe: "Stell mich ein",
  },
  fr: {
    heading: "Yiğit KABAK",
    description:
      "Bonjour, je développe des projets en tant que développeur full-stack depuis 6 ans. J'ai 2 grands projets, et les deux ont été très appréciés par la communauté.",
    followMe: "SUIVEZ MOI SUR",
    likeMyWork: "AIMEZ MON TRAVAIL",
    hireMe: "Embauchez-moi",
  },
  la: {
    heading: "Yiğit KABAK",
    description:
      "Salve, per sex annos proiectiones sicut Full-Stack Developer excolui. Duae magnae projectiones meae sunt, et utramque communitas valde dilexit.",
    followMe: "ME SEQUERE IN",
    likeMyWork: "MEUM LABOREM AMA",
    hireMe: "Me Conducere",
  },
};

let currentLang = "en";

const updateIcon = () => {
  const flagUrls = {
    en: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    tr: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    zh: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    de: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    fr: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    la: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  };

  translateIcon.style.backgroundImage = `url('${flagUrls[currentLang]}')`;
  translateIcon.style.backgroundSize = "cover";
  translateIcon.style.backgroundPosition = "center";
  translateIcon.style.width = "50px";
  translateIcon.style.height = "50px";
  translateIcon.style.borderRadius = "50%";
};

// Başlangıçta İngiliz bayrağını göster
updateIcon();

translateIcon.addEventListener("click", () => {
  // Diller sırasıyla değişecek
  const languages = ["en", "tr", "zh", "de", "fr", "la"];
  const currentIndex = languages.indexOf(currentLang);
  currentLang = languages[(currentIndex + 1) % languages.length];

  // Metinleri Güncelle
  document.querySelector("h1").textContent = textsToTranslate[currentLang].heading;
  document.querySelector(".description").textContent = textsToTranslate[currentLang].description;

  const smallHeadings = document.querySelectorAll(".small-heading");
  smallHeadings[0].textContent = textsToTranslate[currentLang].followMe;
  smallHeadings[1].textContent = textsToTranslate[currentLang].likeMyWork;

  document.querySelector(".hire-me").textContent = textsToTranslate[currentLang].hireMe;

  // Simgeyi Güncelle
  updateIcon();
});