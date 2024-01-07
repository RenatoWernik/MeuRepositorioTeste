let currentIndex = 0;

function showImage(index) {
  const images = document.querySelectorAll('.image-card');
  const descriptions = document.querySelectorAll('.image-description');

  images.forEach((image, i) => {
    image.style.transform = `translateX(${-index * 100}%)`;
  });

  descriptions.forEach((desc, i) => {
    desc.style.opacity = i === index ? '1' : '0';
  });
}

function prevImage() {
  currentIndex = (currentIndex - 1 + 8) % 8; // 8 é o número total de imagens
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 8; // 8 é o número total de imagens
  showImage(currentIndex);
}

// Inicializa a exibição da primeira imagem
showImage(currentIndex);
