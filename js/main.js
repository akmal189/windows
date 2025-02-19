// AOS.init({
//     acnhorPlacement: 'top-bottom',
//     once: true,
//     duration: 700
// });

$(document).ready(() => {
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    // Модальные окна
    var overlay = $(".overlay"),
        modal = $(".modal"),
        modalClose = $(".modal__close"),
        modalOpen = $(".modal__open");

    overlay.click(function (e) {
        if ($(e.target).closest(".modal").length == 0) {
            $("html, body").removeClass("my-body-noscroll-class");
            document.querySelector("#mobile__menu").classList.remove("active");
            $(this).fadeOut();
            modal.fadeOut();
        }
    });

    modalClose.click(function () {
        $("html, body").removeClass("my-body-noscroll-class");
        document.querySelector("#mobile__menu").classList.remove("active");
        overlay.fadeOut();
        modal.fadeOut();
    });

    modalOpen.each(function () {
        $(this).on("click", function (e) {
            var modalId = $(this).attr("data-modal"),
                EachModal = $('.modal[data-modal="' + modalId + '"]');
            $("html, body").addClass("my-body-noscroll-class");
            document.querySelector("#mobile__menu").classList.remove("active");
            modalTitle = $(this).attr("data-title");
            modal.fadeOut();
            overlay.css("display", "flex");
            EachModal.fadeIn();
        });
    });

    var aDate = new Date();
    // UTC time in msec
    var utc = aDate.getTime() + aDate.getTimezoneOffset() * 60000;
    // Date object for the requested city
    var newdate = new Date(utc + 3600000 * 3);
    var currentHour = newdate.getHours();
    var arr = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    var myTry = 0;
    $.each(arr, function (index, value) {
        if (value == currentHour) {
            myTry = 1;
        }
    });
    if (myTry == 0) {
        $(".header__status .indicator").addClass("offline");
        // $('.header__status span').text('Прием заявок с 10.00 до 21.00');
    }

    /** * Replace all SVG images with inline SVG */
    $("img.img-svg").each(function () {
        var $img = $(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        $.get(
            imgURL,
            function (data) {
                var $svg = $(data).find("svg");
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }
                $svg = $svg.removeAttr("xmlns:a");
                $img.replaceWith($svg);
            },
            "xml"
        );
    });

    // Мобильное меню
    $(".header__mobile-btn").on("click", function (e) {
        $('#mobile__menu').addClass('active')
        $("body").addClass("my-body-noscroll-class");
    });
    $("#mobile__menu-close").on("click", function (e) {
        $('#mobile__menu').removeClass('active')
        $("body").addClass("my-body-noscroll-class");
    });
    $(".case__slider").lightGallery({
        thumbnail: false,
        download: false,
        selector: ".img",
        mode: "lg-fade",
    });

    var now = new Date();
    var textout;
    var month = now.getMonth();
    var date = now.getDate();
    textout = date;
    if (month == 0) textout += " января";
    if (month == 1) textout += " февраля";
    if (month == 2) textout += " марта";
    if (month == 3) textout += " апреля";
    if (month == 4) textout += " мая";
    if (month == 5) textout += " июня";
    if (month == 6) textout += " июля";
    if (month == 7) textout += " августа";
    if (month == 8) textout += " сентября";
    if (month == 9) textout += " октября";
    if (month == 10) textout += " ноября";
    if (month == 11) textout += " декабря";

    $("#date").text(textout);

    $(".messenger-label input").on("change", function () {
        if ($(this).prop("checked")) {
            $(".messenger-label").removeClass("active");
            $(this).parent().addClass("active");
        }
    });

    // quiz
    $(".quiz .left-bottom__next").on("click", function (e) {
        if ($(".quiz").hasClass("step5")) {
            $(".content5 input").each(function () {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("step6");

                    $('.decor1').hide()
                    $('.decor4').hide()
                }
            });
        }

        
        if ($(".quiz").hasClass("step4")) {
            $(".content4 input").each(function () {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("step5");
                    $("span.step").empty().text("5");
                }
            });
        }

        
        if ($(".quiz").hasClass("step3")) {
            $(".content3 input").each(function () {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("step4");
                    $("span.step").empty().text("4");
                }
            });
        }

        if ($(".quiz").hasClass("step2")) {
            $(".content2 input").each(function () {
                if ($(this).prop("checked")) {
                    removeSteps();
                    $(".quiz").addClass("step3");
                    $("span.step").empty().text("3");
                }
            });
        }

        if ($(".quiz").hasClass("step1")) {
            $(".content1 input").each(function () {
                if ($(this).prop("checked")) {

                    // let list = $(this).attr('data-list')
                    // if(list == 'a') {
                    //     $('.input_b').hide()
                    //     $('.input_c').hide()
                    // } else if (list == 'ab') {
                    //     $('.input_c').hide()
                    // }
                    
                    removeSteps();
                    $(".quiz").addClass("step2");
                    $("span.step").empty().text("2");
                }
            });
        }
    });

    $(".quiz .left-bottom__prev").on("click", function (e) {
        if ($(".quiz").hasClass("step2")) {
            removeSteps();
            $(".quiz").addClass("step1");
            $("span.step").empty().text("1");
            // $('.input_b').show()
            // $('.input_c').show()
        }
        if ($(".quiz").hasClass("step3")) {
            removeSteps();
            $(".quiz").addClass("step2");
            $("span.step").empty().text("2");
        }
        if ($(".quiz").hasClass("step4")) {
            removeSteps();
            $(".quiz").addClass("step3");
            $("span.step").empty().text("3");
        }
        if ($(".quiz").hasClass("step5")) {
            removeSteps();
            $(".quiz").addClass("step4");
            $("span.step").empty().text("4");
        }
    });

    function removeSteps() {
        $(".quiz").removeClass("step1").removeClass("step2").removeClass("step3").removeClass("step4").removeClass("step5");
    }


    
   var page_link = window.location;
   $('.input-url').val(page_link);

    // E-mail Ajax Send
    $("form").submit(function (event) {
        event.preventDefault()
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/telegram.php",
            data: th.serialize(),
        }).done(function () {
            var url = "thanks.html";
            $(location).attr("href", url);
        });
    });

    $('.to-top-btn a').on('click', function(){
        $('html, body').delay(300).animate({scrollTop:0}, 1000);
    })

    
    



    $('a[href^="#"]').click(function () {
        $("body, html").removeClass("my-body-noscroll-class");
        let target = $(this).attr("href");
        let targetPosition = $(target).offset().top - 30;
        $("html, body").animate({ scrollTop: targetPosition }, 500);
        return false;
    });

    

    $(".case__slider").slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        centerPadding: "30%",
        arrows: true,
        prevArrow: ".arrow-left",
        nextArrow: ".arrow-right",
        initialSlide: 0,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: "25%",
                },
            },
            {
                breakpoint: 560,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                },
            },
        ],
    });


    
    // Вторая страница "Главная"
    $(".test__slider-inner").slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
    });

    

});






// Снизу фиксированное меню
var panelFix = $(".fixed__menu, .fixed-up");
$('.fixed__menu-trigger').click(function() {
    $('.fixed__menu-inner').toggleClass('active')
})


// Калькулятоо
let a, b;
var pageurl = window.location;
function close_me() {
    "active_but" == a ? $("#call_me_free").arcticmodal("close") : "active" == a && $("#call_me").arcticmodal("close"), (a = ""), (b = "");
}
function ch_img(e) {
    $(".on_1").removeClass("bg_red"),
        $(e).addClass("bg_red"),
        $("#var_1").hasClass("bg_red") &&
            ($("#side_a").css("display", "block"),
            $("#side_b").css("display", "none"),
            $("#side_c").css("display", "none"),
            $("#val_side_a").val(""),
            $("#val_side_b").val(""),
            $("#val_side_n").val(""),
            $("#result_calc").css("display", "none")),
        $("#var_2").hasClass("bg_red") &&
            ($("#side_a").css("display", "block"),
            $("#side_b").css("display", "block"),
            $("#side_c").css("display", "none"),
            $("#val_side_a").val(""),
            $("#val_side_b").val(""),
            $("#val_side_n").val(""),
            $("#result_calc").css("display", "none")),
        $("#var_3").hasClass("bg_red") &&
            ($("#side_a").css("display", "block"),
            $("#side_b").css("display", "block"),
            $("#side_c").css("display", "none"),
            $("#val_side_a").val(""),
            $("#val_side_b").val(""),
            $("#val_side_n").val(""),
            $("#result_calc").css("display", "none")),
        $("#var_4").hasClass("bg_red") &&
            ($("#side_a").css("display", "block"),
            $("#side_b").css("display", "block"),
            $("#side_c").css("display", "block"),
            $("#val_side_a").val(""),
            $("#val_side_b").val(""),
            $("#val_side_n").val(""),
            $("#result_calc").css("display", "none"));
}
function ch_img_2(e) {
    $(".on_1_2").removeClass("bg_red"),
        $(e).addClass("bg_red"),
        $("#var_1-2").hasClass("bg_red") &&
            ($("#side_a-2").css("display", "block"),
            $("#side_b-2").css("display", "none"),
            $("#side_c-2").css("display", "none"),
            $("#val_side_a-2").val(""),
            $("#val_side_b-2").val(""),
            $("#val_side_n-2").val(""),
            $("#result_calc-2").css("display", "none")),
        $("#var_2-2").hasClass("bg_red") &&
            ($("#side_a-2").css("display", "block"),
            $("#side_b-2").css("display", "block"),
            $("#side_c-2").css("display", "none"),
            $("#val_side_a-2").val(""),
            $("#val_side_b-2").val(""),
            $("#val_side_n-2").val(""),
            $("#result_calc-2").css("display", "none")),
        $("#var_3-2").hasClass("bg_red") &&
            ($("#side_a-2").css("display", "block"),
            $("#side_b-2").css("display", "block"),
            $("#side_c-2").css("display", "none"),
            $("#val_side_a-2").val(""),
            $("#val_side_b-2").val(""),
            $("#val_side_n-2").val(""),
            $("#result_calc-2").css("display", "none")),
        $("#var_4-2").hasClass("bg_red") &&
            ($("#side_a-2").css("display", "block"),
            $("#side_b-2").css("display", "block"),
            $("#side_c-2").css("display", "block"),
            $("#val_side_a-2").val(""),
            $("#val_side_b-2").val(""),
            $("#val_side_n-2").val(""),
            $("#result_calc-2").css("display", "none"));
}


var form_factor,
    $top,
    fasad,
    ldsp = 2e4,
    pvh = 23500,
    arpa = 33e3,
    alvik = 4e4,
    massiv = 6e4,
    emal = 4e4,
    ldsp_top = 13e3,
    pvh_top = 16500,
    arpa_top = 33e3,
    alvik_top = 4e4,
    massiv_top = 4e4,
    emal_top = 4e4,
    a_m = "0",
    b_m = "0",
    c_m = "0";
function check_summ_2() {
    var itogPrice = 0;

    var n, a, s
    n = 0
    a = 0
    s = 0

    var materialPrice = $('#ch_mat-2 option:selected').attr('data-price');
    var stolPrice = $('#ch_shk-2 option:selected').attr('data-price');


    if ($("#var_1-2").hasClass("bg_red")) {
        if (((form_factor = "Прямая"), "" == (n = $("#val_side_a-2").val()))) return void alert("Введите сторону A вашей кухни!");
    }


    if ($("#var_2-2").hasClass("bg_red")) {
        form_factor = "Угловая";
        n = $("#val_side_a-2").val(),
            a = $("#val_side_b-2").val();
        if ("" == n) return void alert("Введите сторону A вашей кухни!");
        if ("" == a) return void alert("Введите сторону B вашей кухни!");
    }



    if ($("#var_3-2").hasClass("bg_red")) {
        if (((form_factor = "Двухлинейная"), (n = $("#val_side_a-2").val()), (a = $("#val_side_b-2").val()), "" == n)) return void alert("Введите сторону A вашей кухни!");
        if ("" == a) return void alert("Введите сторону B вашей кухни!");
    }



    if ($("#var_4-2").hasClass("bg_red")) {
        (form_factor = "П-образная"), (n = $("#val_side_a-2").val()), (a = $("#val_side_b-2").val());
        s = $("#val_side_n-2").val();
        if ("" == n) return void alert("Введите сторону A вашей кухни!");
        if ("" == a) return void alert("Введите сторону B вашей кухни!");
        if ("" == s) return void alert("Введите сторону С вашей кухни!");
    }

    n = Number(n)
    a = Number(a)
    s = Number(s)
    materialPrice = Number(materialPrice)
    stolPrice = Number(stolPrice)

    itogPrice = (n + a + s) * (materialPrice + stolPrice)

    $("#show_price-2").text(Math.round(itogPrice) + " рублей "),
    $("#result_calc-2").css("display", "block")
    
    if ($(window).width() < 575) {
        $(".overlay__inner").animate({ scrollTop: 900 }, 500);
    }


}
