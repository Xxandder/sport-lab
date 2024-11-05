const gallerySwiper = new Swiper('.gallery__swiper', {
    loop: true, 
    spaceBetween: 20,
    pagination: {
      el: '.gallery__swiper-pagination',
      clickable: true,
    },
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    loop: true, 
    spaceBetween: 25,
    autoHeight: true,
    navigation: {
      nextEl: '.reviews__swiper-button-next', 
      prevEl: '.reviews__swiper-button-prev', 
    },
  });

  document.querySelector('.characteristics__button').addEventListener('click', function () {
    const content = document.querySelector('.characteristics__details');
    content.classList.toggle('open'); // Добавляем/удаляем класс 'open'
    if (content.classList.contains('open')) {
      document.querySelector('.characteristics__button span').textContent = 'Згорнути';
    } else {
      document.querySelector('.characteristics__button span').textContent = 'Детальніше';
    }
  });