$(function() {
    $( '#navbarNav .navbar-nav a' ).on( 'click', function () {
    $( '#navbarNav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
    });
});



$(document).ready(function() {

    $(window).on('resize', function() {
        $('.gallery-img-holder').height( $('.gallery-img-holder').width() );
    }).trigger('resize');
    $(window).on('resize', function() {
        $('.my-image-carousel').height( $('.my-image-carousel').width() / 2);
    }).trigger('resize');
    if($(window).width() >= 768){
        $(window).on('resize', function() {
            $('.my-carousel').height( $('.my-image-carousel').width() / 2);
        }).trigger('resize');
    } else if($(window).width() <= 767 && $(window).width() > 600){
        $(window).on('resize', function() {
            $('.my-carousel').height( $('.my-image-carousel').width() * 1.2);
        }).trigger('resize');
    } else if($(window).width() <= 600){
        $(window).on('resize', function() {
            $('.my-carousel').height( $('.my-image-carousel').width() * 1.3);
        }).trigger('resize');
    }
    if($(window).width() <= 767 && $(window).width() > 640){
        $(window).on('resize', function() {
            $('.my-text-carousel').height( $('.my-image-carousel').width() * 0.6);
        }).trigger('resize');
    } else if($(window).width() <= 640 && $(window).width() > 400) {
        $(window).on('resize', function() {
            $('.my-text-carousel').height( $('.my-image-carousel').width() * 0.7);
        }).trigger('resize');
    } else if($(window).width() <= 400){
        $(window).on('resize', function() {
            $('.my-text-carousel').height( $('.my-image-carousel').width() * 0.9);
        }).trigger('resize');
    }



    // $(window).on('resize', function() {
    //     $('.active.nav-line').width( $('#text').width() );
    // }).trigger('resize');

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel': ""
    })

    $(".navbar-toggler").on("click", function(){
        if ($(".navbar-toggler").find(".navbar-toggler-active").length == 1) {
            $(".navbar-toggler").find(".navbar-toggler-icon").removeClass(" navbar-toggler-active");
        } else {
            $(".navbar-toggler").find(".navbar-toggler-icon").addClass(" navbar-toggler-active");
        }
    });

    $(".navbar-toggler").on("click", function(){
        if ($(".navbar-collapse").find(".navbar-active").length == 1) {
            $(".navbar-collapse").find(".navbar-active").removeClass(" navbar-active");
        } else {
            $(".navbar-collapse").find(".navbar-nav").addClass(" navbar-active");
        }
    });

    if($(window).width() >= 992){
            $(document).ready(function(){
                var didScroll;
                var lastScrollTop = 0;
                var delta = 5;
                var navbarHeight = $('.topnav').outerHeight();
                $(window).scroll(function(event){
                    didScroll = true;
                });
                setInterval(function() {
                    if (didScroll) {
                        hasScrolled();
                        didScroll = false;
                    }
                }, 250);
                function hasScrolled() {
                    var st = $(this).scrollTop(); 
                    console.log('st', st)
                    if(Math.abs(lastScrollTop - st) <= delta)
                    return;
                    if (st > lastScrollTop && st > navbarHeight){
                        $('.topnav').removeClass('nav-top').addClass('nav-up');
                    } 
                    else {
                        if(st <= 60) {
                            $('.topnav').removeClass('nav-up').removeClass('nav-top');
                        } 
                        else {
                            $('.topnav').removeClass('nav-up').addClass('nav-top');
                        }
                    }
                    lastScrollTop = st;
                }
            }); 
            }
        });
    //FORM SUBMIT BINDING
//     $("#contact_form").on('submit', function(event) {
//         event.preventDefault();
//         // console.log(event.target)
//        sendMail(event.target);

//     });

//     $('.carousel').carousel({
//       pause: "false"
//     })

// });

// const slideTransition = (direction, shouldFade) => ({
//   prevStart: '',
//   currentStart: `transform: translateX(${direction ? 100 : -100}%)`,
//   prevEnd: `transition: transform 1.5s ease, opacity .2s ease; transform: translateX(${direction ? -100 : 100}%); opacity: ${shouldFade ? 0 : 1};`,
//   currentEnd: 'transition: transform 1.5s ease',
// });

// class Carousel {
//     constructor(element, cycleDir, shouldFade) {
//         this.wrapper = element;
//         this.cycleDir = cycleDir;
//         this.items = Array.from(element.children);
//         this.itemCount = this.items.length;
//         this.currentIndex = 0;
//         this.transitions = slideTransition(cycleDir, shouldFade);
//         this.init();
//     }

//     init() {
//         this.items.forEach((item) => {
//             item.setAttribute('style', this.transitions.currentStart);
//         });
//         this.items[this.currentIndex].setAttribute('style', this.transitions.prevStart);
//     }

//     step(dir) {
//         this.prevIndex = this.currentIndex;
//         if (dir) {
//             this.currentIndex = (this.currentIndex + 1) % this.itemCount;
//         } else {
//             this.currentIndex = (this.currentIndex + this.itemCount - 1) % this.itemCount;
//         }
//         this.items[this.prevIndex].setAttribute('style', this.transitions.prevStart);
//         this.items[this.currentIndex].setAttribute('style', this.transitions.currentStart);
//         setTimeout(() => {
//             this.items[this.prevIndex].setAttribute('style', this.transitions.prevEnd);
//             this.items[this.currentIndex].setAttribute('style', this.transitions.currentEnd);  
//         }, 200);
//         console.log(this.currentIndex);
//     }
// }

// let carousels;
// let indicator;

// const initMyCarousel = () => {
//     carousels = Array.from(document.querySelectorAll('[data-auto-carousel]'))
//         .map((carousel) => {
//             return new Carousel(
//                 carousel, 
//                 carousel.getAttribute('data-auto-carousel') === "true",
//                 carousel.getAttribute('data-auto-carousel-fade') === "true"
//                 )
//         });
//     indicator = document.querySelector('[data-auto-carousel-indicator]');
//     setInterval(stepCarousels, 5000);
// }

// const stepCarousels = () => {
//     carousels.forEach((c) => c.step(true), 5000);
//     indicator.children[carousels[0].prevIndex].classList.remove('active');
//     indicator.children[carousels[0].currentIndex].classList.add('active');
// }


// if($(window).width() >= 992){
//     const initBlockScroll = () => {
//         Array.from(document.querySelectorAll('[data-block-scroll]')).forEach((el) => {
//             el.addEventListener('wheel', (e) => { e.stopPropagation() });
//         })
//     }

//     const onLoad = () => {

//         const wrapper = document.getElementById('wrapperElement');
//         var currentIndex = 0;
//         try {
//             currentIndex = (parseInt(sessionStorage.hajlitottfa_index, 10) || 0);
//         } catch (e) {
//             console.warn(e);
//         }
//         wrapper.setAttribute('style', `transform: translateX(${-currentIndex * 100}%); transition: none;`);
//         document.querySelector('main').classList.add('main-visible');
//         const length = wrapper.querySelectorAll('.element').length;
//         const transitionDuration = 300;
//         let isInTransition = false;
//         let transitionStart = 0;
//         let isDragging = false;
//         let touchStartX;
//         initBlockScroll();


//         Array.from(document.querySelectorAll('[data-nav-wrapper]')).forEach((el) => {
//             el.addEventListener('click', (e) => {
//                 const index = el.getAttribute('data-nav-wrapper');
//                 currentIndex = index;
//                 wrapper.setAttribute('style', `transform: translateX(${-index * 100}%)`);
//             });

//         })

//         const scrollWrapper = (direction) => {
//             console.log(direction, currentIndex);
//             if (direction > 0) {
//                 currentIndex = Math.min(currentIndex + 1, length - 1);
//             } else if (direction < 0) {
//                 currentIndex = Math.max(currentIndex - 1, 0);
//             }
//             sessionStorage.hajlitottfa_index = currentIndex;
//             wrapper.setAttribute('style', `transform: translateX(${-currentIndex * 100}%)`);
//         };


//         const onTouchStart = (e) => {
//             isDragging = true;
//             touchStartX = e.changedTouches[0].clientX;
//         }

//         const onTouchEnd = (e) => {
//             isDragging = false;
//             if (touchStartX - e.changedTouches[0].clientX > 100) {
//                 scrollWrapper(1);
//             } else if (touchStartX - e.changedTouches[0].clientX < -100) {
//                 scrollWrapper(-1);
//             };
//         }

//         const onWheel = (e) => {
//             const threshold = e.mozInputSource === undefined ? 50 : 3;
            
//             if (!isInTransition) {
//                 isInTransition = true;
//                 transitionStart = Date.now();
//                 scrollWrapper(e.deltaY);
//             } else {
//                 if (Math.abs(e.deltaY) >= threshold && Date.now() > transitionStart + transitionDuration) {
//                   isInTransition = false;
//                   onWheel(e);
//                 }
//             }
//         };
//         window.addEventListener('wheel', onWheel);
//         window.addEventListener('touchstart', onTouchStart);
//         window.addEventListener('touchend', onTouchEnd);
//         initMyCarousel();
//     };

//     window.addEventListener('load', onLoad);
// }








// //fORM
// function sendMail(form){
//     $.ajax({
//         type: 'POST',
//         url: form.action,
//         data: $(form).serialize()
// })
//   .done(function( data ) {
//     // console.log(data);
//     if (data.success) {
//         alert('sikeresen elküldve')
//     }else{
//         //ha hiba tortent
//         $.each(data, function (key, data) {

//             $('input[name="'+key+'"]').css('border-color','red');
//             $('input[name="'+key+'"]').css('color','red');
//         });
        
//     }
//     alert(data)
//   });


// }