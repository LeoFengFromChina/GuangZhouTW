window.onload = function () {
    showDashBoard();
}
$('#goBack').click(function () {
    fadeDashBoard();
    window.history.go(-1);
});

$('#goBack-detail').click(function () {
    $('.detail-all').addClass('slidePageBackLeft').removeClass('slidePageInFromLeft');
    showDashBoard();
});

function showDashBoard() {
    for (var i = 1; i <= 2; i++) {
        $('.col' + i).each(function () {
            $(this).addClass('fadeInForward-' + i).removeClass('fadeOutback');
        });
    }
    $('.pagerfooter').fadeIn(200);
}
function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r != null) return unescape(r[2]);
    return null;
}
function fadeDashBoard() {
    for (var i = 1; i <= 2; i++) {
        $('.col' + i).addClass('fadeOutback').removeClass('fadeInForward-' + i);
    }
    $('.pagerfooter').fadeOut(200);
}
//显示登录窗体
//$(".lock-thumb").click(function () {
//    fadeDashBoard();
//    $('.login-screen').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
//});



$('.big, .small').each(function () {
    var $this = $(this),
        page = $this.data('page');
    $this.on('click', function () {
        fadeDashBoard();
        $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
    })
});

function getUrlParam(name) {
    //构造一个含有目标参数的正则表达式对象  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //匹配目标参数  
    var r = window.location.search.substr(1).match(reg);
    //返回参数值  
    if (r != null) return unescape(r[2]);
    return null;
}

//隐藏
$('.unlock').click(function () {
    var $this = $(this),
        page = $this.data('page');
    $('.product-'+page).removeClass('slidePageInFromLeft').addClass('slidePageBackLeft');
    showDashBoard();
});