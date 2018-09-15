    
    // Full screen scroller
    $.scrollify({
        section : ".scrollify",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: false,
        standardScrollElements: "#cover",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {
            var lastScrollTop = 0;
            $(window).scroll(function(){
            var st = $(this).scrollTop();
                if (st > lastScrollTop){
                    $('.title').addClass('animated fadeInDown'); $('.secondary-heading').addClass('animated fadeInDown');
                } else {
                    $('.title').addClass('animated fadeInUp'); $('.secondary-heading').addClass('animated fadeInUp');
                }
                lastScrollTop = st;
            })
            ;
        },
        after:function() {$('.title').removeClass('animated fadeInDown fadeInUp'); $('.secondary-heading').removeClass('animated fadeInDown fadeInUp');},
        afterResize:function() {},
        afterRender:function() {}
    });

    //viewport checker
    var products =  $('.container--products').children('div');

    products.viewportChecker({
        classToAdd:'product',
        removeClassAfterAnimation: true,
        repeat: true
    });

    // setInterval(()=>{
    //     var loopAlternate = anime({
    //         targets: '.product',
    //         scale: 1.5,
    //         duration: 15000,
    //         easing: 'easeInQuad',
    //         loop: true,
    //         direction: 'alternate'
    //     });
    // },200)
   
// BUTTON INTERACTION  

var btnArray1 = ['.btnWrap', '.btnCircle', '.btnLabel', '.btnCircle, .btnLabel'];
var btnArray2 = ['.btnWrap2', '.btnCircle2', '.btnLabel2', '.btnCircle2, .btnLabel2'];
var btnArray3 = ['.btnWrap3', '.btnCircle3', '.btnLabel3', '.btnCircle3, .btnLabel3'];
var btnArray4 = ['.btnWrap4', '.btnCircle4', '.btnLabel4', '.btnCircle4, .btnLabel4'];
var btnArray5 = ['.btnWrap5', '.btnCircle5', '.btnLabel5', '.btnCircle5, .btnLabel5'];
var btnArray6 = ['.btnWrap6', '.btnCircle6', '.btnLabel6', '.btnCircle6, .btnLabel6'];
var btnArray7 = ['.btnWrap7', '.btnCircle7', '.btnLabel7', '.btnCircle7, .btnLabel7'];
var btnArray8 = ['.btnWrap8', '.btnCircle8', '.btnLabel8', '.btnCircle8, .btnLabel8'];
// var buttonsWrapper = [btnArray1, btnArray2, btnArray3, btnArray4, btnArray5, btnArray6, btnArray7, btnArray8];
var buttonsWrapper = [btnArray1, btnArray2, btnArray3, btnArray4, btnArray5, btnArray6, btnArray7, btnArray8];

buttonsWrapper.forEach(function(buttonsWrapper, i) {

  $(buttonsWrapper[0]).mouseleave(function(e){
       TweenMax.to(this, 0.3, {scale: 1});
       TweenMax.to(buttonsWrapper[3], 0.3,{scale:1, x: 0, y: 0});       
  });

  $(buttonsWrapper[0]).mouseenter(function(e){
       TweenMax.to(this, 0.3, {transformOrigin: '0 0', scale: 1});
       TweenMax.to(buttonsWrapper[1], 0.3,{scale: 1.1});
  });

  $(buttonsWrapper[0]).mousemove(function(e){   
    callParallax(e);
  });

  function callParallax(e){
    parallaxIt(e, buttonsWrapper[1], 15);
    parallaxIt(e, buttonsWrapper[2], 20);
  }

  function parallaxIt(e, target, movement){
    var $this = $(buttonsWrapper[0]);
    var boundingRect = $this[0].getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    TweenMax.to(target, 0.3, {
    x: (relX - boundingRect.width/2) / boundingRect.width * movement,
    y: (relY - boundingRect.height/2 - scrollTop) / boundingRect.width * movement,
    ease: Power2.easeOut
    });
  }
});

// Header slider OwlCarousel

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop:true,
//         nav:true
//     });
//   });


// HAMBURGER MENU

var test = anime.timeline();


function init(timeline, easing){
  timeline.add({
  targets:'.top',
  translateY:10,
  duration:400,
  easing: easing
  }).
  add({
    targets:'.bottom',
    translateY:-10,
    duration:400,
    easing: easing,
    offset:400
  })
  .add({
    targets:'.middle',
    opacity:0,
    duration:200,
    offset:400
  }).
  add({
    targets: '.top',
    translateY:10,
    rotate: ['0', '45deg'],
    duration: 400,
    offset:900,
    easing: easing,
    transformOrigin:"50% 50%"
  }).
  add({
    targets: '.bottom',
    translateY:-10,
    rotate: ['0', '-45deg'],
    duration: 400,
    offset:900,
    easing: easing,
    transformOrigin:"50% 50%"
  })
}
    const menu = document.querySelector('.overlay__menu');
    const hamburger = document.querySelector('.hamburger');
//   document.querySelector('.hamburger').onclick = function() {
//     // this.classList.toggle('active');
//     // if(this.classList.contains('active')){   
//     //   test.reverse();
//     // }
//     // test.play();
//     menu.classList.toggle('menu__open');
//     test.reverse();
//     test.play();
//   }

    const easing = 'easeInOutCubic';

    function myFunc(){
        init(test,'easeInOutCubic');
    }

  hamburger.addEventListener('click', myFunc)


// init(test,'easeInBack');
// init(test,'easeInOutCubic');
