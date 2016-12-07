/**
 * Created by wall on 2016/10/27.
 */
$(function(){
    /*左侧导航切换*/
    $(".nav-left li").click(function(){
        $(this).addClass("red").siblings().removeClass("red"); //切换选中的按钮高亮状态
        var index=$(this).index(); //获取被按下按钮的索引值，需要注意index是从0开始的
        $(".center-box > div").eq(index).show().siblings().hide(); //在按钮选中时在下面显示相应的内容，同时隐藏不需要的框架内容
    });
    /*隔行变色*/
    $('dd:even').css("background-color","#C3F2E9");
    $('dd:odd').css("background-color","#EFFAF8");


    /*显示隐藏记录*/

    /*典贷通金融*/
    $('#help-list-1').click(function () {
        $("#help-icon-1").css('background-position', '-236px -429px')
        if ($('#help-text-1').is(":visible") == false) {
            $('#help-text-1').slideDown();
        } else {
            $("#help-icon-1").css('background-position', '-236px -440px')
            $('#help-text-1').slideUp();
        }
    })
    $('#help-list-2').click(function () {
        $("#help-icon-2").css('background-position', '-236px -429px')
        if ($('#help-text-2').is(":visible") == false) {
            $('#help-text-2').slideDown();
        } else {
            $("#help-icon-2").css('background-position', '-236px -440px')
            $('#help-text-2').slideUp();
        }
    })
    $('#help-list-3').click(function () {
        $("#help-icon-3").css('background-position', '-236px -429px')
        if ($('#help-text-3').is(":visible") == false) {
            $('#help-text-3').slideDown();
        } else {
            $("#help-icon-3").css('background-position', '-236px -440px')
            $('#help-text-3').slideUp();
        }
    })



    /*注册与登陆*/
    $('#help-list-a1').click(function () {
        $("#help-icon-a1").css('background-position', '-236px -429px')
        if ($('#help-text-a1').is(":visible") == false) {
            $('#help-text-a1').slideDown();
        } else {
            $("#help-icon-a1").css('background-position', '-236px -440px')
            $('#help-text-a1').slideUp();
        }
    })
    $('#help-list-b1').click(function () {
        $("#help-icon-b1").css('background-position', '-236px -429px')
        if ($('#help-text-b1').is(":visible") == false) {
            $('#help-text-b1').slideDown();
        } else {
            $("#help-icon-b1").css('background-position', '-236px -440px')
            $('#help-text-b1').slideUp();
        }
    })
    $('#help-list-c1').click(function () {
        $("#help-icon-c1").css('background-position', '-236px -429px')
        if ($('#help-text-c1').is(":visible") == false) {
            $('#help-text-c1').slideDown();
        } else {
            $("#help-icon-c1").css('background-position', '-236px -440px')
            $('#help-text-c1').slideUp();
        }
    })
    $('#help-list-d1').click(function () {
        $("#help-icon-d1").css('background-position', '-236px -429px')
        if ($('#help-text-d1').is(":visible") == false) {
            $('#help-text-d1').slideDown();
        } else {
            $("#help-icon-d1").css('background-position', '-236px -440px')
            $('#help-text-d1').slideUp();
        }
    })
    $('#help-list-e1').click(function () {
        $("#help-icon-e1").css('background-position', '-236px -429px')
        if ($('#help-text-e1').is(":visible") == false) {
            $('#help-text-e1').slideDown();
        } else {
            $("#help-icon-e1").css('background-position', '-236px -440px')
            $('#help-text-e1').slideUp();
        }
    })
    $('#help-list-f1').click(function () {
        $("#help-icon-f1").css('background-position', '-236px -429px')
        if ($('#help-text-f1').is(":visible") == false) {
            $('#help-text-f1').slideDown();
        } else {
            $("#help-icon-f1").css('background-position', '-236px -440px')
            $('#help-text-f1').slideUp();
        }
    })

    /*充值与提现*/
    $('#help-list-1s').click(function () {
        $("#help-icon-1s").css('background-position', '-236px -429px')
        if ($('#help-text-1s').is(":visible") == false) {
            $('#help-text-1s').slideDown();
        } else {
            $("#help-icon-1s").css('background-position', '-236px -440px')
            $('#help-text-1s').slideUp();
        }
    })
    $('#help-list-2s').click(function () {
        $("#help-icon-2s").css('background-position', '-236px -429px')
        if ($('#help-text-2s').is(":visible") == false) {
            $('#help-text-2s').slideDown();
        } else {
            $("#help-icon-2s").css('background-position', '-236px -440px')
            $('#help-text-2s').slideUp();
        }
    })
    $('#help-list-3s').click(function () {
        $("#help-icon-3s").css('background-position', '-236px -429px')
        if ($('#help-text-3s').is(":visible") == false) {
            $('#help-text-3s').slideDown();
        } else {
            $("#help-icon-3s").css('background-position', '-236px -440px')
            $('#help-text-3s').slideUp();
        }
    })
    $('#help-list-4s').click(function () {
        $("#help-icon-4s").css('background-position', '-236px -429px')
        if ($('#help-text-4s').is(":visible") == false) {
            $('#help-text-4s').slideDown();
        } else {
            $("#help-icon-4s").css('background-position', '-236px -440px')
            $('#help-text-4s').slideUp();
        }
    })


    /*我要贷款*/
    $('#help-list-a').click(function () {
        $("#help-icon-a").css('background-position', '-236px -429px')
        if ($('#help-text-a').is(":visible") == false) {
            $('#help-text-a').slideDown();
        } else {
            $("#help-icon-a").css('background-position', '-236px -440px')
            $('#help-text-a').slideUp();
        }
    })
    $('#help-list-b').click(function () {
        $("#help-icon-b").css('background-position', '-236px -429px')
        if ($('#help-text-b').is(":visible") == false) {
            $('#help-text-b').slideDown();
        } else {
            $("#help-icon-b").css('background-position', '-236px -440px')
            $('#help-text-b').slideUp();
        }
    })
    $('#help-list-c').click(function () {
        $("#help-icon-c").css('background-position', '-236px -429px')
        if ($('#help-text-c').is(":visible") == false) {
            $('#help-text-c').slideDown();
        } else {
            $("#help-icon-c").css('background-position', '-236px -440px')
            $('#help-text-c').slideUp();
        }
    })
    $('#help-list-d').click(function () {
        $("#help-icon-d").css('background-position', '-236px -429px')
        if ($('#help-text-d').is(":visible") == false) {
            $('#help-text-d').slideDown();
        } else {
            $("#help-icon-d").css('background-position', '-236px -440px')
            $('#help-text-d').slideUp();
        }
    })
    $('#help-list-e').click(function () {
        $("#help-icon-e").css('background-position', '-236px -429px')
        if ($('#help-text-e').is(":visible") == false) {
            $('#help-text-e').slideDown();
        } else {
            $("#help-icon-e").css('background-position', '-236px -440px')
            $('#help-text-e').slideUp();
        }
    })
    $('#help-list-f').click(function () {
        $("#help-icon-f").css('background-position', '-236px -429px')
        if ($('#help-text-f').is(":visible") == false) {
            $('#help-text-f').slideDown();
        } else {
            $("#help-icon-f").css('background-position', '-236px -440px')
            $('#help-text-f').slideUp();
        }
    })
    $('#help-list-g').click(function () {
        $("#help-icon-g").css('background-position', '-236px -429px')
        if ($('#help-text-g').is(":visible") == false) {
            $('#help-text-g').slideDown();
        } else {
            $("#help-icon-g").css('background-position', '-236px -440px')
            $('#help-text-g').slideUp();
        }
    })
    $('#help-list-h').click(function () {
        $("#help-icon-h").css('background-position', '-236px -429px')
        if ($('#help-text-h').is(":visible") == false) {
            $('#help-text-h').slideDown();
        } else {
            $("#help-icon-h").css('background-position', '-236px -440px')
            $('#help-text-h').slideUp();
        }
    })
    $('#help-list-i').click(function () {
        $("#help-icon-i").css('background-position', '-236px -429px')
        if ($('#help-text-i').is(":visible") == false) {
            $('#help-text-i').slideDown();
        } else {
            $("#help-icon-i").css('background-position', '-236px -440px')
            $('#help-text-i').slideUp();
        }
    });


});