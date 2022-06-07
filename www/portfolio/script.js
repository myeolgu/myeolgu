$(document).ready(function () {





	var toggle = 0;

    $(".m_header_right").on("click", function () {
        if (toggle == 0) {
            toggle = 1;
            $(".top_line, .bottom_line").css({ top: "50%" });
			$(".m_nav_menu").css({ transform: "scale(1)" });
            setTimeout(function () {
                $(".top_line").css({
                    transform: "rotate(45deg)",
                    transformOrigin: "50% 50%"
                });
                $(".bottom_line").css({ transform: "rotate(-45deg)" });
				
			
				
				
				
            }, 500);

        }




        else {

            toggle = 0;
				$(".m_nav_menu").css({ transform: "scale(0)" });
            $(".top_line").css({
                transform: "rotate(0deg)",
                transformOrigin: "50% 50%"
            });
			
		
            $(".bottom_line").css({ transform: "rotate(0deg)" });
            setTimeout(function () {
                $(".top_line").css({ top: "40%" });
                $(".bottom_line").css({ top: "60%" });
				
			
				
            }, 500);
        };
    });

  




   
    bgSequence6($('.main_img'), 10, 720, 100);


    function bgSequence6(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum;
        var posNum = sqSize;

        function bgAni4() {
            if (idx < total) {
                idx++;
                sqName.css({ 'background-position': 'center ' + (-posNum) + 'px' });
                posNum += sqSize;
            } else {
                idx = 0;
                posNum = sqSize;
            }

            setTimeout(bgAni4, speed);
        }

        bgAni4();
    }

	bgSequence5($('.m_main_img'), 10, 360, 100);


    function bgSequence5(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum;
        var posNum = sqSize;

        function bgAni() {
            if (idx < total) {
                idx++;
                sqName.css({ 'background-position': 'center ' + (-posNum) + 'px' });
                posNum += sqSize;
            } else {
                idx = 0;
                posNum = sqSize;
            }

            setTimeout(bgAni, speed);
        }

        bgAni();
    }


	bgSequence2($('.xl_main_img'), 10, 215, 100);


    function bgSequence2(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum;
        var posNum = sqSize;

        function bgAni1() {
            if (idx < total) {
                idx++;
                sqName.css({ 'background-position': 'center ' + (-posNum) + 'px' });
                posNum += sqSize;
            } else {
                idx = 0;
                posNum = sqSize;
            }

            setTimeout(bgAni1, speed);
        }

        bgAni1();
    }




  
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  spaceBetween: 30,
  loop: true,
  
   
 breakpoints: {

	200 : {
	  slidesPerView: 2,
	  spaceBetween: 5,
		
	},


	 500: {
      slidesPerView: 2,
	  spaceBetween: 5,
	
     },



     980: {
      slidesPerView: 4,
	  spaceBetween: 30,
     },

    },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
	type: 'bullets',
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
   autoplay: {
    delay: 3000,
  },
  
  
});


const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  spaceBetween: 30,
  loop: true,

   
 breakpoints: {

	200 : {
	  slidesPerView: 2,
	  spaceBetween: 5,
		
	},


	 500: {
      slidesPerView: 2,
	  spaceBetween: 5,
	
     },



     980: {
      slidesPerView: 4,
	  spaceBetween: 30,
     },

    },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
	type: 'bullets',
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
   autoplay: {
    delay: 3000,
  },
  
  

});




var jbWidth1 = $( '.swiper_li' ).width();
var img_height = jbWidth1+jbWidth1/5;
var img_width = jbWidth1+100;

$(".swiper_li").css({ "height": img_height  });

$(".swiper_li2").css({ "height": jbWidth1  });


$(".swiper_li2").css({ "width": jbWidth1  });

$(".swiper_li2").css({ "height": img_width  });

$(".swiper_li2 img").css({ "height": jbWidth1  });



var topPos1 = $('.design_box').offset();

$(".nav li:nth-child(2)").on("click", function () {
    $('body,html').animate({ scrollTop: topPos1.top }, 300);
});

var topPos2 = $('.work_box').offset();


$(".nav li:nth-child(3)").on("click", function () {
     $('body,html').animate({ scrollTop: topPos2.top }, 300);
});

var topPos3 = $('.footer').offset();

$(".nav li:nth-child(4)").on("click", function () {
     $('body,html').animate({ scrollTop: topPos3.top }, 300);
});




    $(".m_nav_ul li:nth-child(1)").on("click", function () {
        toggle = 0;
        $(".m_nav_menu").css({ transform: "scale(0)" });
        $(".top_line").css({
            transform: "rotate(0deg)",
            transformOrigin: "50% 50%"
        });

        $(".bottom_line").css({ transform: "rotate(0deg)" });
        setTimeout(function () {
            $(".top_line").css({ top: "40%" });
            $(".bottom_line").css({ top: "60%" });

        }, 500);

        $('body,html').animate({ scrollTop: 0 }, 300);
    });

    $(".m_nav_ul li:nth-child(2)").on("click", function () {
        toggle = 0;
        $(".m_nav_menu").css({ transform: "scale(0)" });
        $(".top_line").css({
            transform: "rotate(0deg)",
            transformOrigin: "50% 50%"
        });

        $(".bottom_line").css({ transform: "rotate(0deg)" });
        setTimeout(function () {
            $(".top_line").css({ top: "40%" });
            $(".bottom_line").css({ top: "60%" });

        }, 500);

        $('body,html').animate({ scrollTop: topPos1.top }, 300);
    });


    $(".m_nav_ul li:nth-child(3)").on("click", function () {
        toggle = 0;
        $(".m_nav_menu").css({ transform: "scale(0)" });
        $(".top_line").css({
            transform: "rotate(0deg)",
            transformOrigin: "50% 50%"
        });

        $(".bottom_line").css({ transform: "rotate(0deg)" });
        setTimeout(function () {
            $(".top_line").css({ top: "40%" });
            $(".bottom_line").css({ top: "60%" });

        }, 500);

        $('body,html').animate({ scrollTop: topPos2.top }, 300);
    });


    $(".m_nav_ul li:nth-child(4)").on("click", function () {
        toggle = 0;
        $(".m_nav_menu").css({ transform: "scale(0)" });
        $(".top_line").css({
            transform: "rotate(0deg)",
            transformOrigin: "50% 50%"
        });

        $(".bottom_line").css({ transform: "rotate(0deg)" });
        setTimeout(function () {
            $(".top_line").css({ top: "40%" });
            $(".bottom_line").css({ top: "60%" });

        }, 500);

        $('body,html').animate({ scrollTop: topPos3.top }, 300);
    });





    // $(window).scroll(function () {
        // var scroll = $(window).scrollTop();
        // if (scroll >= 1200) {
            // $(".event1").css({ "left": "70px" });
        // }

        // if (scroll >= 3400) {
            // $(".event2").css({ "left": "70px" });
        // }
    // });



// 클릭 이벤트


   





});



