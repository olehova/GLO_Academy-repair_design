/*jshint esversion: 6 */
/*
document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
        modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  });
    
  closeBtn.addEventListener('click', switchModal);

  // modal.addEventListener('keydown', (ev) => {
  //   if(ev.keyCode == 27) {
  //     switchModal();
  //   }
  // });
});
*/

$(document).ready(function() {
  const modal = $('.modal');
  const modalBtn = $('[data-toggle=modal]');
  const closeBtn = $('.modal__close');
  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  //Валидация формы
  
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Телефон обязательно",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);
          alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса' + response);
        }
      });
    }
    });

    $('.footer__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2
        },
        userPhone: "required",
        userQuestion: "required"
      },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв"
        },
        userPhone: "Телефон обязательно",
        userQuestion: "Задайте Ваш вопрос"
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера:' + response);
            alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
            $(form)[0].reset();
          },
          error: function (response) {
            console.error('Ошибка запроса' + response);
          }
        });
      }
    });

    $('.control__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },
          userPhone: "required"
        },
        messages: {
          userName: {
            required: "Имя обязательно",
            minlength: "Имя не короче двух букв"
          },
          userPhone: "Телефон обязательно"
        },
        submitHandler: function(form) {
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $(form).serialize(),
            success: function (response) {
              console.log('Ajax сработал. Ответ сервера:' + response);
              alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
              $(form)[0].reset();
            },
            error: function (response) {
              console.error('Ошибка запроса' + response);
            }
          });
        }
  
  });
  
  // Маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

  // // Создание yandex  карты
  // ymaps.ready(init);
  //   function init(){
  //       // Создание карты.
  //       var myMap = new ymaps.Map("map", {
  //           // Координаты центра карты.
  //           // Порядок по умолчанию: «широта, долгота».
  //           // Чтобы не определять координаты центра карты вручную,
  //           // воспользуйтесь инструментом Определение координат.
  //           center: [55.76, 37.64],
  //           // Уровень масштабирования. Допустимые значения:
  //           // от 0 (весь мир) до 19.
  //           zoom: 7
  //       });
  //   }
});