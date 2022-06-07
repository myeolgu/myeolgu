$(document).ready(function () {




    $('.click9').click(function () {
        $('.black_box').css({ display: "block" });
        $('.spao').css({ display: "block" });
        $('.spao >img:last-child').css({ display: "block" });
    });

    $('.spao >img:last-child').click(function () {
        $('.black_box').css({ display: "none" });
        $('.spao').css({ display: "none" });
        $('.spao >img:last-child').css({ display: "none" });
    });


    $('.black_box').click(function () {
        $('.black_box').css({ display: "none" });
        $('.spao').css({ display: "none" });
        $('.spao >img:last-child').css({ display: "none" });
        $('.men').css({ display: "none" });
        $('.women').css({ display: "none" });
        $('.bag').css({ display: "none" });
        $('.event_page1').css({ display: "none" });
        $('.event_page2').css({ display: "none" });
        $('.event_page3').css({ display: "none" });
        $('.event_page4').css({ display: "none" });
        $('html').css({ overflow: "auto" });
    });



    $('.click1').click(function () {
        $('.black_box').css({ display: "block" });
        $('.men').css({ display: "block" });
    });

    $('.click2').click(function () {
        $('.black_box').css({ display: "block" });
        $('.women').css({ display: "block" });
    });

    $('.click6').click(function () {
        $('.black_box').css({ display: "block" });
        $('.bag').css({ display: "block" });
    });

    $('.click8').click(function () {
        $('.black_box').css({ display: "block" });
        $('.event_page2').css({ display: "block" });
        $('html').css({ overflow: "hidden" });
    });

    $('.click7').click(function () {
        $('.black_box').css({ display: "block" });
        $('.event_page3').css({ display: "block" });
        $('html').css({ overflow: "hidden" });
    });

    $('.click4').click(function () {
        $('.black_box').css({ display: "block" });
        $('.event_page1').css({ display: "block" });
        $('html').css({ overflow: "hidden" });
    });

    $('.click5').click(function () {
        $('.black_box').css({ display: "block" });
        $('.event_page4').css({ display: "block" });
        $('html').css({ overflow: "hidden" });
    });




    $('.close').click(function () {
        $('.black_box').css({ display: "none" });
        $('.men').css({ display: "none" });
        $('.women').css({ display: "none" });
        $('.bag').css({ display: "none" });
        $('html').css({ overflow: "auto" });
    });




    start();
    var imgs = 2;
    var now = 0;
    function start() {
        $(".men>.men_box>.img_slide>.nav>li").eq(0).siblings().css({ "margin-left": "-400px" });
        $(".men>.men_box>.number_1 > ul > li").eq(0).siblings().css({ "display": "none" });
        $(".men>.men_box>.circle > ul > li").eq(0).siblings().css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });
        setInterval(function () { slide(); }, 2000);
    }

    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".men>.men_box>.img_slide>.nav>li").eq(now - 1).css({ "margin-left": "-400px" });
        $(".men>.men_box>.img_slide>.nav>li").eq(now).css({ "margin-left": "0px" });



        $(".men>.men_box>.number_1 > ul > li").eq(now - 1).css({ "display": "none" });
        $(".men>.men_box>.number_1 > ul > li").eq(now).css({ "display": "block" });

        $(".men>.men_box>.circle > ul > li").eq(now - 1).css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });

        $(".men>.men_box>.circle > ul > li").eq(now).css({
            "backgroundColor": "black",
            "width": "12px",
            "height": "12px",
            "border": "none"
        });

    }


    start2();
    var imgs2 = 2;
    var now2 = 0;
    function start2() {
        $(".women>.men_box>.img_slide>.nav>li").eq(0).siblings().css({ "margin-left": "-400px" });
        $(".women>.men_box>.number_1 > ul > li").eq(0).siblings().css({ "display": "none" });
        $(".women>.men_box>.circle > ul > li").eq(0).siblings().css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });
        setInterval(function () { slide2(); }, 2000);
    }

    function slide2() {
        now2 = now2 == imgs2 ? 0 : now2 += 1;
        $(".women>.men_box>.img_slide>.nav>li").eq(now2 - 1).css({ "margin-left": "-400px" });
        $(".women>.men_box>.img_slide>.nav>li").eq(now2).css({ "margin-left": "0px" });



        $(".women>.men_box>.number_1 > ul > li").eq(now2 - 1).css({ "display": "none" });
        $(".women>.men_box>.number_1 > ul > li").eq(now2).css({ "display": "block" });

        $(".women>.men_box>.circle > ul > li").eq(now2 - 1).css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });

        $(".women>.men_box>.circle > ul > li").eq(now2).css({
            "backgroundColor": "black",
            "width": "12px",
            "height": "12px",
            "border": "none"
        });

    }



    start3();
    var imgs3 = 2;
    var now3 = 0;
    function start3() {
        $(".bag>.men_box>.img_slide>.nav>li").eq(0).siblings().css({ "margin-left": "-400px" });
        $(".bag>.men_box>.number_1 > ul > li").eq(0).siblings().css({ "display": "none" });
        $(".bag>.men_box>.circle > ul > li").eq(0).siblings().css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });
        setInterval(function () { slide3(); }, 2000);
    }

    function slide3() {
        now3 = now3 == imgs3 ? 0 : now3 += 1;
        $(".bag>.men_box>.img_slide>.nav>li").eq(now3 - 1).css({ "margin-left": "-400px" });
        $(".bag>.men_box>.img_slide>.nav>li").eq(now3).css({ "margin-left": "0px" });



        $(".bag>.men_box>.number_1 > ul > li").eq(now3 - 1).css({ "display": "none" });
        $(".bag>.men_box>.number_1 > ul > li").eq(now3).css({ "display": "block" });

        $(".bag>.men_box>.circle > ul > li").eq(now3 - 1).css({
            "backgroundColor": "#eaeaea",
            "width": "11px",
            "height": "11px",
            "border": "1px solid #c1c1c1"
        });

        $(".bag>.men_box>.circle > ul > li").eq(now3).css({
            "backgroundColor": "black",
            "width": "12px",
            "height": "12px",
            "border": "none"
        });

    }










    bgSequence($('.poeple1_24'), 8, 216, 100);


    function bgSequence(bgName, maxNum, sqSize, speed) {
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

    bgSequence2($('.people2'), 8, 218, 100);


    function bgSequence2(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum;
        var posNum = sqSize;

        function bgAni2() {
            if (idx < total) {
                idx++;
                sqName.css({ 'background-position': 'center ' + (-posNum) + 'px' });
                posNum += sqSize;
            } else {
                idx = 0;
                posNum = sqSize;
            }

            setTimeout(bgAni2, speed);
        }

        bgAni2();
    }

    bgSequence3($('.people3'), 6, 241.7, 100);


    function bgSequence3(bgName, maxNum, sqSize, speed) {
        var sqName = bgName;
        var total = maxNum;
        var posNum = sqSize;

        var idx = 0;
        var total = maxNum;
        var posNum = sqSize;

        function bgAni3() {
            if (idx < total) {
                idx++;
                sqName.css({ 'background-position': 'center ' + (-posNum) + 'px' });
                posNum += sqSize;
            } else {
                idx = 0;
                posNum = sqSize;
            }

            setTimeout(bgAni3, speed);
        }

        bgAni3();
    }


    bgSequence3($('.people4'), 6, 241.7, 100);


    function bgSequence3(bgName, maxNum, sqSize, speed) {
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


    bgSequence4($('.people1'), 6, 241.7, 100);


    function bgSequence4(bgName, maxNum, sqSize, speed) {
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


    bgSequence5($('.boy'), 6, 297, 100);


    function bgSequence5(bgName, maxNum, sqSize, speed) {
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

    bgSequence5($('.people5'), 6, 309.7, 100);


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

    bgSequence6($('.people6'), 6, 309.7, 100);


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



    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1200) {
            $(".event1").css({ "left": "70px" });
        }

        if (scroll >= 3400) {
            $(".event2").css({ "left": "70px" });
        }
    });









});



