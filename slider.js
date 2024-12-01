document.addEventListener("DOMContentLoaded", () => {
    const bannerSection = document.querySelector(".banner-section");
    const images = ["img/banner/1.jpg", "img/banner/2.jpg", "img/banner/3.jpg", "img/banner/4.jpg", "img/banner/5.jpg", "img/banner/6.jpg"]; // Burada slider için resimlerin listesi
    let currentIndex = 0;

    if (images.length > 1) { // Sadece birden fazla resim varsa slider çalıştır
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; // Resimleri sırayla değiştir
            bannerSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        }, 7000); // 2 saniyede bir değişim
    } else {
        // Eğer tek bir resim varsa, o resim arka plan olarak kalır
        bannerSection.style.backgroundImage = `url('${images[0]}')`;
    }
});
