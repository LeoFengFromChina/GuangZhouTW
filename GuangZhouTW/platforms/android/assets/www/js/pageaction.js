window.onload = function () {
    showDashBoard();
    
}
$('#goBack').click(function () {
    fadeDashBoard();
    setTimeout(function () {
        window.history.go(-1);
    }, 200);
});

function showDashBoard() {
    //    $('#companyid').fadeIn(200);
    for (var i = 1; i <= 3; i++) {
        $('.col' + i).each(function () {
            $(this).addClass('fadeInForward-' + i).removeClass('fadeOutback');
        });
    }
}

function fadeDashBoard() {
    for (var i = 1; i <= 3; i++) {
        $('.col' + i).addClass('fadeOutback').removeClass('fadeInForward-' + i);
    }
    //    $('#companyid').fadeOut(200);
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