$(document).ready(function () {


    bgSequence($('.move_box1'), 6, 235, 100);


   


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

    bgSequence1($('.blog_box1'), 6, 544, 100);


    function bgSequence1(bgName, maxNum, sqSize, speed) {
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




    bgSequence2($('.move_box3'), 6, 315.57, 100);


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


    bgSequence3($('.move_box4'), 6, 422, 100);


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






    
    var talkNum = 0;

    function talkList() {
        if (talkNum < 5) {
            var imgH = $('.talkList li').eq(talkNum).innerHeight();
            talkNum++;
            $('.talkList').stop().animate({ 'top': '-=' + imgH }, 500);
            setTimeout(talkList, 1000);
        }
    }




    $(window).scroll(function () {

        var scrollTop = $(document).scrollTop(); 

        if (scrollTop < 2500) {
            $('.mouse>img').stop().animate({
                'margin-left': ((scrollTop + 100) * 0.6),
                'margin-top': ((scrollTop + 700) * 0.30)
            }, 1000)
        } 
        

    });


    $(window).scroll(function () {

        $(".downanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();


            if (pos < winTop + 700) {
                $(this).addClass("down");
            }
        });


        $(".upanim").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();


            if (pos < winTop + 700) {
                $(this).addClass("up");
            }
        });



    });




});
