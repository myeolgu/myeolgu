$(document).ready(function () {

    var toggle = 0;


    $(".center_nav").on("click", function () {
        if (toggle == 0) {
            toggle = 1;
            $(".hidden_top").css({ top: 0 });
            $(".top_center").css({ top: "201px" });
        } else {
            toggle = 0;
            $(".hidden_top").css({ top: "-201px" });
            $(".top_center").css({ top: 0 });
        }
    });


    $('.page2_nav > li:nth-child(2)').on("click", function () {
        $(".page2_nav1").css({ left: "-700px" });
        $(".page2_nav2").css({ left: 0 });
        $(".page2_right").css({ display: "block" });
        $('.img_nav > li:nth-child(1)').css({ marginTop: "-350px" });
        $('.img_nav > li:nth-child(2)').css({ marginTop: 0 });
        $('.img_nav > li:nth-child(3)').css({ marginTop: "350px" });
        $('.page2_nav > li:nth-child(3)').css({ color: "white" });
        $('.page2_nav > li:nth-child(1)').css({ color: "white" });
        $('.page2_nav > li:nth-child(2)').css({ color: "#f0302d" });
        $(".page2_right > img").css({ display: "inline" });
        $(".page2_left > img").css({ display: "none" });
        $(".page2_nav2").css({ display: "inline-block" });
        $(".page2_nav3").css({ display: "none" });
        $(".page2_nav1").css({ display: "none" });
        $(".page2_nav2 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".page2_nav3 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(2)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(3)").css({ marginLeft: 0 });

    });

   

    $('.page2_nav > li:nth-child(1)').on("click", function () {
        $(".page2_nav1").css({ left: 0 });
        $(".page2_nav2").css({ left: "700px" });
        $('.img_nav > li:nth-child(1)').css({ marginTop: 0 });
        $('.img_nav > li:nth-child(2)').css({ marginTop: 0 });
        $('.img_nav > li:nth-child(3)').css({ marginTop: 0 });
        $('.page2_nav > li:nth-child(3)').css({ color: "white" });
        $('.page2_nav > li:nth-child(2)').css({ color: "white" });
        $('.page2_nav > li:nth-child(1)').css({ color: "#f0302d" });
        $(".page2_right > img").css({ display: "none" });
        $(".page2_left > img").css({ display: "none" });
        $(".page2_nav1").css({ display: "inline-block" });
        $(".page2_nav2").css({ display: "none" });
        $(".page2_nav3").css({ display: "none" });
        $(".page2_nav2 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".page2_nav3 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(2)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(3)").css({ marginLeft: 0 });
    });

    $('.page2_nav > li:nth-child(3)').on("click", function () {
        $(".page2_right").css({ display: "block" });
        $('.page2_nav > li:nth-child(2)').css({ color: "white" });
        $('.page2_nav > li:nth-child(1)').css({ color: "white" });
        $('.page2_nav > li:nth-child(3)').css({ color: "#f0302d" });
        $(".page2_nav1").css({ display: "none" });
        $(".page2_nav2").css({ display: "none" });
        $(".page2_nav3").css({ display: "inline-block" });
        $(".page2_right > img").css({ display: "inline" });
        $(".page2_left > img").css({ display: "none" });
        $('.img_nav > li:nth-child(1)').css({ marginTop: "-350px" });
        $('.img_nav > li:nth-child(2)').css({ marginTop: "-350px" });
        $('.img_nav > li:nth-child(3)').css({ marginTop: 0 });
        $(".page2_nav2 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".page2_nav3 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(2)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(3)").css({ marginLeft: 0 });
    });




    $('.page2_right').on("click", function () {
        $(".page2_nav2 > li:nth-child(1)").css({ marginLeft: "-700px" });
        $(".page2_nav3 > li:nth-child(1)").css({ marginLeft: "-700px" });
        $(".page2_left > img").css({ display: "inline" });
        $(".page2_right > img").css({ display: "none" });
        $(".img_nav > li:nth-child(2)").css({ marginLeft: "-800px" });
        $(".img_nav > li:nth-child(3)").css({ marginLeft: "-800px" });
    });

    $('.page2_left').on("click", function () {
        $(".page2_nav2 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".page2_nav3 > li:nth-child(1)").css({ marginLeft: 0 });
        $(".page2_left > img").css({ display: "none" });
        $(".page2_right > img").css({ display: "inline" });
        $(".img_nav > li:nth-child(2)").css({ marginLeft: 0 });
        $(".img_nav > li:nth-child(3)").css({ marginLeft: 0 });
    });



    $('.picture_1 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_1 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_2 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_2 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_3 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_3 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_4 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_4 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_5 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_5 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_6 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_6 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_7 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_7 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_8 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_8 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_9 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_9 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_10 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_10 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_11 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_11 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });

    $('.picture_12 > ul > li').on("mouseover", function () {
        $(this).find(".dark_box").css({ opacity: "100" });
        $(this).find(".picture_sub").css({ marginTop: "-520px" });
    });

    $('.picture_12 > ul > li').on("mouseleave", function () {
        $(this).find(".dark_box").css({ opacity: 0 });
        $(this).find(".picture_sub").css({ marginTop: "-120px" });
    });


    $('.page3_nav > li:nth-child(2)').on("click", function () {
        $(".picture_1").css({ display: "none" });
        $(".picture_2").css({ display: "none" });
        $(".picture_3").css({ display: "block" });
        $(".picture_4").css({ display: "block" });
        $(".picture_5").css({ display: "block" });
        $(".picture_6").css({ display: "block" });
        $(".picture_7").css({ display: "none" });
        $(".picture_8").css({ display: "none" }); 
        $(".picture_9").css({ display: "none" });
        $(".picture_10").css({ display: "none" });
        $(".picture_11").css({ display: "none" });
        $(".picture_12").css({ display: "none" });
        $(".picture_7").css({ marginLeft: 0 });
        $(".picture_8").css({ marginLeft: 1400 });
        $(".picture_9").css({ marginLeft: 2800 });
        $(".picture_10").css({ marginLeft: 0 });
        $(".picture_11").css({ marginLeft: 1400 });
        $(".picture_12").css({ marginLeft: 2800 });
        $('.page3_nav > li:nth-child(1)').css({ color: "white" });
        $('.page3_nav > li:nth-child(2)').css({ color: "#fa332e" });
        $('.page3_nav > li:nth-child(3)').css({ color: "white" });
        $('.page3_nav > li:nth-child(4)').css({ color: "white" });
        $('.picture_left > img:nth-child(1)').css({ display: "none" });
        $('.picture_left > img:nth-child(2)').css({ display: "none" });
        $('.picture_left > img:nth-child(3)').css({ display: "none" });
        $('.picture_left > img:nth-child(4)').css({ display: "none" });
        $('.picture_right > img:nth-child(1)').css({ display: "none" });
        $('.picture_right > img:nth-child(2)').css({ display: "inline" });
        $('.picture_right > img:nth-child(3)').css({ display: "none" });
        $('.picture_right > img:nth-child(4)').css({ display: "none" });
        img_position2 = 1;
        img_position3 = 1;
        img_position4 = 1;
    });

    $('.page3_nav > li:nth-child(1)').on("click", function () {
        $(".picture_1").css({ display: "block" });
        $(".picture_2").css({ display: "block" });
        $(".picture_3").css({ display: "none" });
        $(".picture_4").css({ display: "none" });
        $(".picture_5").css({ display: "none" });
        $(".picture_6").css({ display: "none" });
        $(".picture_7").css({ display: "none" });
        $(".picture_8").css({ display: "none" });
        $(".picture_9").css({ display: "none" });
        $(".picture_10").css({ display: "none" });
        $(".picture_11").css({ display: "none" });
        $(".picture_12").css({ display: "none" });
        $(".picture_1").css({ marginLeft: 0 });
        $(".picture_2").css({ marginLeft: 1400 });
        $(".picture_3").css({ marginLeft: 0 });
        $(".picture_4").css({ marginLeft: 1400 });
        $(".picture_5").css({ marginLeft: 2800 });
        $(".picture_6").css({ marginLeft: 4200 });
        $(".picture_7").css({ marginLeft: 0 });
        $(".picture_8").css({ marginLeft: 1400 });
        $(".picture_9").css({ marginLeft: 2800 });
        $(".picture_10").css({ marginLeft: 0 });
        $(".picture_11").css({ marginLeft: 1400 });
        $(".picture_12").css({ marginLeft: 2800 });
        $('.page3_nav > li:nth-child(1)').css({ color: "#fa332e" });
        $('.page3_nav > li:nth-child(2)').css({ color: "white" });
        $('.page3_nav > li:nth-child(3)').css({ color: "white" });
        $('.page3_nav > li:nth-child(4)').css({ color: "white" });
        $('.picture_left > img:nth-child(1)').css({ display: "none" });
        $('.picture_left > img:nth-child(2)').css({ display: "none" });
        $('.picture_left > img:nth-child(3)').css({ display: "none" });
        $('.picture_left > img:nth-child(4)').css({ display: "none" });
        $('.picture_right > img:nth-child(1)').css({ display: "inline" });
        $('.picture_right > img:nth-child(2)').css({ display: "none" });
        $('.picture_right > img:nth-child(3)').css({ display: "none" });
        $('.picture_right > img:nth-child(4)').css({ display: "none" });
        img_position2 = 1;
        img_position3 = 1;
        img_position4 = 1;
    });

    $('.page3_nav > li:nth-child(3)').on("click", function () {
        $(".picture_1").css({ display: "none" });
        $(".picture_2").css({ display: "none" });
        $(".picture_3").css({ display: "none" });
        $(".picture_4").css({ display: "none" });
        $(".picture_5").css({ display: "none" });
        $(".picture_6").css({ display: "none" });
        $(".picture_7").css({ display: "block" });
        $(".picture_8").css({ display: "block" });
        $(".picture_9").css({ display: "block" });
        $(".picture_10").css({ display: "none" });
        $(".picture_11").css({ display: "none" });
        $(".picture_12").css({ display: "none" });
        $(".picture_3").css({ marginLeft: 0 });
        $(".picture_4").css({ marginLeft: 1400 });
        $(".picture_5").css({ marginLeft: 2800 });
        $(".picture_6").css({ marginLeft: 4200 });
        $(".picture_10").css({ marginLeft: 0 });
        $(".picture_11").css({ marginLeft: 1400 });
        $(".picture_12").css({ marginLeft: 2800 });
        $('.page3_nav > li:nth-child(1)').css({ color: "white" });
        $('.page3_nav > li:nth-child(2)').css({ color: "white" });
        $('.page3_nav > li:nth-child(3)').css({ color: "#fa332e" });
        $('.page3_nav > li:nth-child(4)').css({ color: "white" });
        $('.picture_left > img:nth-child(1)').css({ display: "none" });
        $('.picture_left > img:nth-child(2)').css({ display: "none" });
        $('.picture_left > img:nth-child(3)').css({ display: "none" });
        $('.picture_left > img:nth-child(4)').css({ display: "none" });
        $('.picture_right > img:nth-child(1)').css({ display: "none" });
        $('.picture_right > img:nth-child(2)').css({ display: "none" });
        $('.picture_right > img:nth-child(3)').css({ display: "inline" });
        $('.picture_right > img:nth-child(4)').css({ display: "none" });
        img_position2 = 1;
        img_position3 = 1;
        img_position4 = 1;
    });

    $('.page3_nav > li:nth-child(4)').on("click", function () {
        $(".picture_1").css({ display: "none" });
        $(".picture_2").css({ display: "none" });
        $(".picture_3").css({ display: "none" });
        $(".picture_4").css({ display: "none" });
        $(".picture_5").css({ display: "none" });
        $(".picture_6").css({ display: "none" });
        $(".picture_7").css({ display: "none" });
        $(".picture_8").css({ display: "none" });
        $(".picture_9").css({ display: "none" });
        $(".picture_10").css({ display: "block" });
        $(".picture_11").css({ display: "block" });
        $(".picture_12").css({ display: "block" });
        $(".picture_3").css({ marginLeft: 0 });
        $(".picture_4").css({ marginLeft: 1400 });
        $(".picture_5").css({ marginLeft: 2800 });
        $(".picture_6").css({ marginLeft: 4200 });
        $(".picture_7").css({ marginLeft: 0 });
        $(".picture_8").css({ marginLeft: 1400 });
        $(".picture_9").css({ marginLeft: 2800 });
        $('.page3_nav > li:nth-child(1)').css({ color: "white" });
        $('.page3_nav > li:nth-child(2)').css({ color: "white" });
        $('.page3_nav > li:nth-child(3)').css({ color: "white" });
        $('.page3_nav > li:nth-child(4)').css({ color: "#fa332e" });
        $('.picture_left > img:nth-child(1)').css({ display: "none" });
        $('.picture_left > img:nth-child(2)').css({ display: "none" });
        $('.picture_left > img:nth-child(3)').css({ display: "none" });
        $('.picture_left > img:nth-child(4)').css({ display: "none" });
        $('.picture_right > img:nth-child(1)').css({ display: "none" });
        $('.picture_right > img:nth-child(2)').css({ display: "none" });
        $('.picture_right > img:nth-child(3)').css({ display: "none" });
        $('.picture_right > img:nth-child(4)').css({ display: "inline" });
        img_position2 = 1;
        img_position3 = 1;
        img_position4 = 1;
    });


    $('.picture_right > img:nth-child(1)').on("click", function () {
        $(".picture_2").css({ marginLeft: 0 });
        $(".picture_1").css({ marginLeft: "-1400px" });
        $('.picture_left > img:nth-child(1)').css({ display: "inline" });
        $('.picture_right > img:nth-child(1)').css({ display: "none" });
    });

    $('.picture_left > img:nth-child(1)').on("click", function () {
        $(".picture_1").css({ marginLeft: 0 });
        $(".picture_2").css({ marginLeft: "1400px" });
        $('.picture_right > img:nth-child(1)').css({ display: "inline" });
        $('.picture_left > img:nth-child(1)').css({ display: "none" });
    });




    //$('.picture_sub').on("mouseover", function () {
    //    $(this).css({ marginTop: "-540px"  })
    //});




    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".hidden_menu");
    img_count = imgs.children().length;


    $('.hidden_left').click(function () {
        back();
    });
    $('.hidden_right').click(function () {
        next();
    });

    function next() {
        if (1 < img_position) {
            imgs.animate({
                right: '+=900px'
            });
            $(".hidden_right").css({ display: "none" });
            img_position--;
        }
    }
    function back() {
        if (img_count > img_position) {
            imgs.animate({
                right: '-=900px'
            });
            $(".hidden_right").css({ display: "block" });

            img_position++;
        }
    }

    var imgs1;
    var img_count1 = 3;
    var img_position1 = 1;

    imgs1 = $(".page4_center_box");



    $('.page4_right').click(function () {
        back1();
    });
    $('.page4_left').click(function () {
        next1();
    });

    function next1() {
        if (1 < img_position1) {
            imgs1.animate({
                marginLeft: '+=412px'
            });
            img_position1--;
        }
    }
    function back1() {
        if (img_count1 > img_position1) {
            imgs1.animate({
                marginLeft: '-=412px'
            });

            img_position1++;
        }
    }

    var imgs2;
    var img_count2 = 4;
    var img_position2 = 1;

    imgs2 = $(".picture_3");
    imgs3 = $(".picture_4");
    imgs4 = $(".picture_5");
    imgs5 = $(".picture_6");



    $('.picture_right > img:nth-child(2)').click(function () {
        back2();
    });
    $('.picture_left > img:nth-child(2)').click(function () {
        next2();
    });

    function next2() {
        if (1 < img_position2) {
            imgs2.animate({
                marginLeft: '+=1400px'
            });
            imgs3.animate({
                marginLeft: '+=1400px'
            });
            imgs4.animate({
                marginLeft: '+=1400px'
            });
            imgs5.animate({
                marginLeft: '+=1400px'
            });
            $(".picture_right > img:nth-child(2)").css({ display: "inline" });
            img_position2--;
            if (1 == img_position2) {
                $(".picture_left > img:nth-child(2)").css({ display: "none" });
            }
        }
    }

    function back2() {
        if (img_count2 > img_position2) {
            imgs2.animate({
                marginLeft: '-=1400px'
            });
            imgs3.animate({
                marginLeft: '-=1400px'
            });
            imgs4.animate({
                marginLeft: '-=1400px'
            });
            imgs5.animate({
                marginLeft: '-=1400px'
            });
            $(".picture_left > img:nth-child(2)").css({ display: "inline" });
            img_position2++;
            if (4 == img_position2) {
                $(".picture_right > img:nth-child(2)").css({ display: "none" });
            }
        }
    }



    var imgs7;
    var img_count3 = 3;
    var img_position3 = 1;

    imgs7 = $(".picture_7");
    imgs8 = $(".picture_8");
    imgs9 = $(".picture_9");
  



    $('.picture_right > img:nth-child(3)').click(function () {
        back3();
    });
    $('.picture_left > img:nth-child(3)').click(function () {
        next3();
    });

    function next3() {
        if (1 < img_position3) {
            imgs7.animate({
                marginLeft: '+=1400px'
            });
            imgs8.animate({
                marginLeft: '+=1400px'
            });
            imgs9.animate({
                marginLeft: '+=1400px'
            });
            $(".picture_right > img:nth-child(3)").css({ display: "inline" });
            img_position3--;
            if (1 == img_position3) {
                $(".picture_left > img:nth-child(3)").css({ display: "none" });
            }
        }
    }

    function back3() {
        if (img_count3 > img_position3) {
            imgs7.animate({
                marginLeft: '-=1400px'
            });
            imgs8.animate({
                marginLeft: '-=1400px'
            });
            imgs9.animate({
                marginLeft: '-=1400px'
            });
            $(".picture_left > img:nth-child(3)").css({ display: "inline" });
            img_position3++;
            if (3 == img_position3) {
                $(".picture_right > img:nth-child(3)").css({ display: "none" });
            }
        }
    }


    var imgs10;
    var img_count4 = 3;
    var img_position4 = 1;

    imgs10 = $(".picture_10");
    imgs11 = $(".picture_11");
    imgs12 = $(".picture_12");




    $('.picture_right > img:nth-child(4)').click(function () {
        back4();
    });
    $('.picture_left > img:nth-child(4)').click(function () {
        next4();
    });

    function next4() {
        if (1 < img_position4) {
            imgs10.animate({
                marginLeft: '+=1400px'
            });
            imgs11.animate({
                marginLeft: '+=1400px'
            });
            imgs12.animate({
                marginLeft: '+=1400px'
            });
            $(".picture_right > img:nth-child(4)").css({ display: "inline" });
            img_position4--;
            if (1 == img_position4) {
                $(".picture_left > img:nth-child(4)").css({ display: "none" });
            }
        }
    }

    function back4() {
        if (img_count4 > img_position4) {
            imgs10.animate({
                marginLeft: '-=1400px'
            });
            imgs11.animate({
                marginLeft: '-=1400px'
            });
            imgs12.animate({
                marginLeft: '-=1400px'
            });
            $(".picture_left > img:nth-child(4)").css({ display: "inline" });
            img_position4++;
            if (3 == img_position4) {
                $(".picture_right > img:nth-child(4)").css({ display: "none" });
            }
        }
    }



   

    //$('.picture_right > img:nth-child(2)').on("click", function () {
    //    $(".picture_3").css({ marginLeft: "-=1400px" });
    //    $(".picture_4").css({ marginLeft: "-=1400px" });
    //    $(".picture_5").css({ marginLeft: "-=1400px" });
    //    $(".picture_6").css({ marginLeft: "-=1400px" });
    //});

    //$('.picture_left > img:nth-child(2)').on("click", function () {
    //    $(".picture_3").css({ marginLeft: "+=1400px" });
    //    $(".picture_4").css({ marginLeft: "+=1400px" });
    //    $(".picture_5").css({ marginLeft: "+=1400px" });
    //    $(".picture_6").css({ marginLeft: "+=1400px" });
    //});





});