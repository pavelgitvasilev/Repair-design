/*document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')


  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

//закрыти при клике вне модального окна
  closeBtn.addEventListener('click', switchModal)
  modal.addEventListener('click', (element) => {
    if (element.target == modal)
      switchModal();
  });

  
 закрытие при нажатии esc
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
  
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
      if (modal.className == 'modal modal--visible')
        switchModal();
    }
  };
});
*/


$(document).ready(function () {
  var modal = $('.modal'),
      success = $('.success')
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');
    closeScc = $('.success__close');
  scrollBtn = $('.scroll-button');

  //переменные названий(имен) для слайдов "6 шагов до цели". начало
  slideOne = $('.steps-name__step--one');
  slideTwo = $('.steps-name__step--two');
  slideThree = $('.steps-name__step--three');
  slideFour = $('.steps-name__step--four');
  slideFive = $('.steps-name__step--five');
  slideSix = $('.steps-name__step--six');
  //конец
  //переменные названий(имен) для слайдов "Cтили". начало
  fashionOne = $('.fashion__name--one');
  fashionTwo = $('.fashion__name--two');
  fashionThree = $('.fashion__name--three');
  fashionFour = $('.fashion__name--four');
  fashionFive = $('.fashion__name--five');
  fashionSix = $('.fashion__name--six');
  fashionSeven = $('.fashion__name--seven');
  fashionEight = $('.fashion__name--eight');
  fashionNine = $('.fashion__name--nine');
  fashionTen = $('.fashion__name--ten');
  fashionEleven = $('.fashion__name--eleven');

  function switchModal() {
    
    modal.removeClass('modal--visible');
    success.removeClass('success--visible');
  }

  textAnimate = $('.control__text');
  
  
  $(modal).on("click", function (event) {
    var $element = $(event.target);
    
    if ($element.is(modal)){
      switchModal();
    }
 });
 $(success).on("click", function (event) {
  var $element = $(event.target);

  
  if ($element.is(success)){
    switchModal();
  }
});



  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });



  //кнопка вверх
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1000) {
      scrollBtn.addClass('show');
    } else {
      scrollBtn.removeClass('show');
    }
  });
  scrollBtn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });



  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
        
    if ("key" in evt) {
      isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEscape = (evt.keyCode === 27);
    }

    if (isEscape) {
      switchModal();
    }
  };
  //слайдер1
  var mySwiper = new Swiper('.swiper1', {
    loop: true,
    pagination: {
      el: '.pagination1',
      type: 'bullets',
      spaceBetween: 30,
      
    },
    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
  });

  var next = $('.next1');
  var prev = $('.prev1');
  var bullets = $('.pagination1');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10);
  
 //слайдер стили
 var Myswiper = new Swiper('.swiper-fashion', {
  navigation: {
    nextEl: '.next-fashion',
    prevEl: '.prev-fashion',
  },
  on: {
    slideChange: function () {
      //1
      if (this.realIndex == 0)          
        fashionOne.addClass('fashion__name--visible');
      else
        fashionOne.removeClass('fashion__name--visible'); 
      //2
      if (this.realIndex == 1)
        fashionTwo.addClass('fashion__name--visible');
      else
        fashionTwo.removeClass('fashion__name--visible');
      //3
      if (this.realIndex == 2)
        fashionThree.addClass('fashion__name--visible');
      else
        fashionThree.removeClass('fashion__name--visible');
      //4
      if (this.realIndex == 3)
        fashionFour.addClass('fashion__name--visible');
      else
        fashionFour.removeClass('fashion__name--visible');
      //5
      if (this.realIndex == 4)
        fashionFive.addClass('fashion__name--visible');
      else
        fashionFive.removeClass('fashion__name--visible');
      //6
      if (this.realIndex == 5)
        fashionSix.addClass('fashion__name--visible');
      else
        fashionSix.removeClass('fashion__name--visible');
      //7
      if (this.realIndex == 6)
        fashionSeven.addClass('fashion__name--visible');
      else
        fashionSeven.removeClass('fashion__name--visible');
      //8
      if (this.realIndex == 7)
        fashionEight.addClass('fashion__name--visible');

      else
        fashionEight.removeClass('fashion__name--visible');
      //9  
      if (this.realIndex == 8)
        fashionNine.addClass('fashion__name--visible');
       else
        fashionNine.removeClass('fashion__name--visible');
      //10
      if (this.realIndex == 9)
        fashionSix.addClass('fashion__name--visible');
      else
        fashionSix.removeClass('fashion__name--visible');
      //11
      if (this.realIndex == 10)
        fashionSix.addClass('fashion__name--visible');
      else
        fashionSix.removeClass('fashion__name--visible');
    },
  },
});

 //слайдер сечтчик
  var Myswiperk = new Swiper('.swiper100', {
    pagination: {
      loop: true,
      el: '.pagination3',
      type: 'fraction',
    }
  });
 
  //слайдер2
  var mySwiper = new Swiper('.swiper2', {
    loop: true,
    pagination: {
      el: '.pagination2',
      type: 'bullets',
      
    },
    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    },

    //переключение имени слайдов над картинками. начало
    on: {
      slideChange: function () {

        var swipe3 = document.querySelector('.swiper100').swiper;
        swipe3.slideTo(this.realIndex,1000);

        //1
        if (this.realIndex == 0)
          slideOne.addClass('steps-name__step--visible');
        else
          slideOne.removeClass('steps-name__step--visible');
        //2
        if (this.realIndex == 1)
          slideTwo.addClass('steps-name__step--visible');
        else
          slideTwo.removeClass('steps-name__step--visible');
        //3
        if (this.realIndex == 2)
          slideThree.addClass('steps-name__step--visible');
        else
          slideThree.removeClass('steps-name__step--visible');
        //4
        if (this.realIndex == 3)
          slideFour.addClass('steps-name__step--visible');
        else
          slideFour.removeClass('steps-name__step--visible');
        //5
        if (this.realIndex == 4)
          slideFive.addClass('steps-name__step--visible');
        else
          slideFive.removeClass('steps-name__step--visible');
        //6
        if (this.realIndex == 5)
          slideSix.addClass('steps-name__step--visible');
        else
          slideSix.removeClass('steps-name__step--visible');
      },
    },
    //конец
  });
  /*
  var swipe3 = document.querySelector('.swiper100').swiper;
  swipe3.slideTo(MySwiper.realIndex,1000);*/
  //переключение слайдов при нажатии на шаги.начало
  var mySwiper0 = document.querySelectorAll('.swiper2')[0].swiper;
  var mySwiper1 = document.querySelectorAll('.swiper2')[1].swiper;
  
  slideOne.on('click', function () {
    mySwiper0.slideTo(1, 1000);
    mySwiper1.slideTo(1, 1000);
  });
  slideTwo.on('click', function () {
    
    mySwiper0.slideTo(2, 1000);
    mySwiper1.slideTo(2, 1000);
  });
  slideThree.on('click', function () {
    
    mySwiper0.slideTo(3, 1000);
    mySwiper1.slideTo(3, 1000);
  });
  slideFour.on('click', function () {

    mySwiper0.slideTo(4, 1000);
    mySwiper1.slideTo(4, 1000);
  });
  slideFive.on('click', function () {

    mySwiper0.slideTo(5, 1000);
    mySwiper1.slideTo(5, 1000);
  });
  slideSix.on('click', function () {

    mySwiper0.slideTo(6, 1000);
    mySwiper1.slideTo(6, 1000);
  });
  //конец
  
  //переключение слайдов при нажатии на стили.начало

  var mySwiperFsh = document.querySelector('.swiper-fashion').swiper;

  fashionOne.on('click', function () {
    mySwiperFsh.slideTo(0, 1000);
  });

  fashionTwo.on('click', function () {
    mySwiperFsh.slideTo(1, 1000);
  });

  fashionThree.on('click', function () {
    mySwiperFsh.slideTo(2, 1000);
  });

  fashionFour.on('click', function () {
    mySwiperFsh.slideTo(3, 1000);
  });

  fashionFive.on('click', function () {
    mySwiperFsh.slideTo(4, 1000);
  });

  fashionSix.on('click', function () {
    mySwiperFsh.slideTo(5, 1000);
  });

  fashionSeven.on('click', function () {
    mySwiperFsh.slideTo(6, 1000);
  });

  fashionEight.on('click', function () {
    mySwiperFsh.slideTo(7, 1000);
  });

  fashionNine.on('click', function () {
    mySwiperFsh.slideTo(8, 1000);
  });

  fashionTen.on('click', function () {
    mySwiperFsh.slideTo(9, 1000);
  });

  fashionEleven.on('click', function () {
    mySwiperFsh.slideTo(10, 1000);
  });

//конец


  var next = $('.next2');
  var prev = $('.prev2');
  var bullets = $('.pagination2');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)


  new WOW().init();
  //анимация тескта под видео
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1300) {
      textAnimate.addClass("control--animate");
    } else {
      textAnimate.removeClass("control--animate");
    }
  });

//checkbox
  var flagModal = new Boolean(true); 
  
  var checkModal = $('.modal__checkbox');
  checkModal.on('click', function () {
  flagModal=!flagModal;
  });
  
  var flagFooter = new Boolean(true); 
  
  var checkFooter = $('.footer__checkbox');
  checkFooter.on('click', function () {
  flagFooter=!flagFooter;
  });

  var flagControl = new Boolean(true); 
  
  var checkControl = $('.control__checkbox');
  checkControl.on('click', function () {
  flagControl=!flagControl;
  });

  var flagMeasurement = new Boolean(true);

  var checkMeasurement = $('.measurement__checkbox');
  checkMeasurement.on('click', function () {
  flagMeasurement=!flagMeasurement;
  });


  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement:"div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16
    },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox:{
        required: true
      }

    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите 10 цифр вашего телефона"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox:{
        required: "Подтвердите согласие"
      }
    },
    // 
    submitHandler: function(form) {  
      if(flagModal==true){
     $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {  
          $(form)[0].reset();
          modal.removeClass('modal--visible'); 
          success.toggleClass('success--visible');
          //$(".modal__dialog").remove()
        }
      });
    }
    }
  });

  $('.measurement__form').validate({
    errorClass: "invalid",
    errorElement:"div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox:{
        required: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите 10 цифр вашего телефона"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      },
      policyCheckbox:{
        required: "Подтвердите согласие"
      }
    },
    // 
    submitHandler: function(form) {  
      if(flagMeasurement==true){
     $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {  
          $(form)[0].reset();
          //$(".measurement__dialog").remove()
          success.toggleClass('success--visible');
        }
      });
    }
    }
  });
  
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement:"div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      userText: {
        required: true
      },
      policyCheckbox:{
        required: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите 10 цифр вашего телефона"
      },
      userText: {
        required: "Заполните поле",
      },
      policyCheckbox:{
        required: "Подтвердите согласие"
      }
    },
    submitHandler: function(form) {  
      if(flagFooter==true) { 
     $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {  
          $(form)[0].reset();
          //$(".footer__wrap").remove()
          //modal.removeClass('modal--visible'); 
          success.toggleClass('success--visible');
        }
      });
    }
  }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement:"div",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      policyCheckbox:{
        required: true
      }
      },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },  
      userPhone: {
        required: "Заполните поле",
        minlength: "Введите 10 цифр вашего телефона"
      },
      policyCheckbox:{
        required: "Подтвердите согласие"
      }
    },
    submitHandler: function(form) {  
      if(flagControl==true) {
     $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {  
          $(form)[0].reset();
          //$(".control__form").remove()

          $(".control__form").removeClass('.valid');
          success.toggleClass('success--visible');
        }
      });
    }
  }
  });

  closeScc.on('click', function () {
    success.toggleClass('success--visible');});

   /* $('phone__mask').on('click', function () {

     
    
    });*/


  //маска для телефона
  $('[type=tel]').mask('+7(000)00-00-000' );

  
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $("#footer__menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $('#low').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
    /*
var scrollLow=$('.hero__scroll-down')
  scrollLow.on('click', function () {
    $('html, body').animate({
      scrollTop: 900
    }, 1500);
  });*/
  //video
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: 'auto',
      width: '100%',
      videoId: 'MZqtJ1IrRNI',
      events: {
        'onReady': videoPlay
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }



 /* $("low").on("click", function (event) {
   // event.preventDefault();
  
   // var id  = $('#menu6'),
   //     top = $(id).offset().top;
   $('html, body').animate({
    scrollTop: 80000
  }, 1500);
    //$('body,html').animate({scrollTop: 3500}, 1500);
});
  */

  
  //яндекс карта



 /* ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.786786, 49.142331],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        
        });

    myMap.geoObjects
        .add(myPlacemark)
       // .add(myPlacemarkWithContent);
});*/
});