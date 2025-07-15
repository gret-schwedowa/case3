  // Массив с URL изображений
  const images = [
    "images/aid1.jpeg",
    "images/aid2.jpg",
    "images/aid3.jpg",
    "images/aid4.jpg",
    "images/aid5.jpeg"
  ];

  let currentIndex = 0;

  const imgElement = document.getElementById('slider-image');
  const counterElement = document.getElementById('counter');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');

  function updateSlider() {
    imgElement.src = images[currentIndex];
    counterElement.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  // Инициализация
  updateSlider();