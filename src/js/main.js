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
  const modal_thanks = $('.modal-thanks');
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

  //new WOW().init();

  var wow = new WOW(
    {
      mobile: false
    }
  );0
  wow.init();
    
  // var wow = new WOW(
  //   {
  //     boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
  //     animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
  //     offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
  //     mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
  //     live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
  //     callback:     function(box) {
  //       // функция срабатывает каждый раз при старте анимации
  //       // аргумент box — элемент, для которого была запущена анимация
  //     },
  //     scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
  //   }
  // );
  // wow.init();



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
      },
      policyCheckbox: {
        required: true
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
      },
      policyCheckbox: "Ваше согласие обязательно"
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера:' + response);

          modal_thanks.toggleClass('modal-thanks--visible');
          //alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
          //$('#add--response').html('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button><strong>Well done!</strong> You successfully read this important alert message.</div>');
          //$('#result').html("<h2>demo created successfully!</h2>");
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
        userQuestion: "required",
        policyCheckbox: {
          required: true
        }
      },
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче двух букв"
        },
        userPhone: "Телефон обязательно",
        userQuestion: "Задайте Ваш вопрос",
        policyCheckbox: "Ваше согласие обязательно"
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log('Ajax сработал. Ответ сервера:' + response);
            modal_thanks.toggleClass('modal-thanks--visible');
            // alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
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
          userPhone: "required",
          policyCheckbox: {
            required: true
          }
        },
        messages: {
          userName: {
            required: "Имя обязательно",
            minlength: "Имя не короче двух букв"
          },
          userPhone: "Телефон обязательно",
          policyCheckbox: "Ваше согласие обязательно"
        },
        submitHandler: function(form) {
          $.ajax({
            type: "POST",
            url: "send.php",
            data: $(form).serialize(),
            success: function (response) {
              console.log('Ajax сработал. Ответ сервера:' + response);
              modal_thanks.toggleClass('modal-thanks--visible');
              // alert('Форма отправлена. Мы свяжемся с вами через 10 минут.');
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