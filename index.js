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


  /*
    MODAL
  */

const heroOpenModalBtn = document.querySelector('.short-info__button');
const galleryOpenModalBtn = document.querySelector('.gallery__button');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close');
const modalContent = document.querySelector('.modal__content');
const modalSuccess = document.querySelector('.success__content');
const modalForm =  document.querySelector('.modal__form')
const modalSuccessButton = document.querySelector('.modal__success-button')

function openModal(){
  modal.style.display = 'flex';
  modalContent.style.display = 'block'; // Показываем форму
  modalSuccess.style.display = 'none'; // Прячем сообщение об успехе
}

// Открытие модального окна
heroOpenModalBtn.addEventListener('click', () => {
  openModal()
});

galleryOpenModalBtn.addEventListener('click', () => {
  openModal()
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
modalSuccessButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие окна при клике вне его области
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Обработка отправки формы
modalContent.addEventListener('submit', async(event) => {
  event.preventDefault(); 
  const name = modalContent.querySelector('.input-name').value
  const phone = modalContent.querySelector('.input-phone').value
  if(!phone || phone.includes('_')){
    alert('Введіть номер телефону повністю')
  }else{
    try{
      sendMessage(token, chatId, `Ім'я: ${name}\nТелефон: ${phone}`)
      modalContent.style.display = 'none';
      modalSuccess.style.display = 'block';
    }catch(e){
      console.log(e)
    }
  }
 
});

const orderForm = document.querySelector('.order__form')
orderForm.addEventListener('submit', async(event) => {
  event.preventDefault(); 
  const name = orderForm.querySelector('.input-name').value
  const phone = orderForm.querySelector('.input-phone').value
  if(!phone || phone.includes('_')){
    alert('Введіть номер телефону повністю')
  }else{
    try{
      sendMessage(token, chatId, `Ім'я: ${name}\nТелефон: ${phone}`)
      
      openModal()
      modalContent.style.display = 'none';
      modalSuccess.style.display = 'block';
    }catch(e){
      console.log(e)
    }
  }
 
})

const additionalForm = document.querySelector('.additional__form')
additionalForm.addEventListener('submit', async(event) => {
  event.preventDefault(); 
  
  const name = additionalForm.querySelector('.input-name').value
  const phone = additionalForm.querySelector('.input-phone').value
  if(!phone || phone.includes('_')){
    alert('Введіть номер телефону повністю')
  }else{
    try{
      sendMessage(token, chatId, `Додаткові послуги:\nІм'я: ${name}\nТелефон: ${phone}`)
      openModal()
      modalContent.style.display = 'none';
      modalSuccess.style.display = 'block';
    }catch(e){
      console.log(e)
    }
  }
 
})



const token = '7662713226:AAHKS0OKr0FpRoaMBjGtq5jRHqseedcMcHg';  
const chatId = '-4528761132';

async function sendMessage(token, chatId, message){
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const data = {
      chat_id: chatId,
      text: message
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
           
          },
          body: JSON.stringify(data)
      });

      if (response.ok) {
          const jsonResponse = await response.json();
          console.log('Message sent successfully:', jsonResponse);
      } else {
          console.error('Error sending message:', response.status, response.statusText);
      }
  } catch (error) {
      console.error('Fetch error:', error);
  }
  

}



/*
  MASK
*/
$(document).ready(function(){
  $('.input-phone').inputmask({
     mask: '+380 (99) 999 99 99',
     placeholder: "+380 (__) ___ __ __",
       clearMaskOnLostFocus: false,
      
   });

});