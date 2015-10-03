window.onload = function () {
    showDashBoard();

}
$('#goBack').click(function () {
    //    fadeDashBoard();
    //    window.history.go(-1);
    //    setTimeout(function () {
    //        window.history.go(-1);
    //    }, 200);
    fadeDashBoard();
    window.history.go(-1);
});
$('#goBack-detail').click(function () {
    $('.detail-all').addClass('slidePageBackLeft').removeClass('slidePageInFromLeft');
    showDashBoard();
});

$('#more-detail').click(function () {

    alert('more detail');
});

function showDashBoard() {
    for (var i = 1; i <= 2; i++) {
        $('.col' + i).each(function () {
            $(this).addClass('fadeInForward-' + i).removeClass('fadeOutback');
            //$(this).fadeIn(300);
        });
        //setTimeout(function () {
        //    $('.col' + i).css("opacity", "1");
        //}, 500);
    }
}

function fadeDashBoard() {
    for (var i = 1; i <= 2; i++) {
        $('.col' + i).addClass('fadeOutback').removeClass('fadeInForward-' + i);
        //$('.col' + i).fadeOut(300);
    }
    $('.pagerfooter').fadeOut(200);

    //        $('.columns').addClass('fadeOutback').removeClass('fadeInForward');
}

function navigateToNewUrl(url) {
    fadeDashBoard();
    setTimeout(function () {
        window.location = url;
    }, 300);
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

$('.big, .small').each(function () {
    var $this = $(this),
        page = $this.data('page');
    $this.on('click', function () {
        navigateToNewUrl(page + ".html");
    })
});
$('.close-button').click(function () {
    $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
              $(this).removeClass('slidePageLeft').removeClass('openpage');
          });
    showDashBoard();
});
$('.view-demo-button').click(function () {
    $(this).parent().addClass('slideDemoOverlayUp');
    showDashBoard();
});