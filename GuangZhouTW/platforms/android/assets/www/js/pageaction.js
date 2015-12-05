window.onload = function() {
    var myDate = new Date();

    //测试版本，控制版本的使用期限。正式版本需要删除此段语句。add by frde 2015-10-09
    var alertText = "该版本已过期，请获取最新版本。";
    if (myDate.getFullYear() > 2015) {
        alert(alertText);
    } else {
        if (myDate.getMonth() != 11) {

            alert(alertText);
        }
    }
    showDashBoard();

}
$('#goBack').click(function() {
    //    fadeDashBoard();
    //    window.history.go(-1);
    //    setTimeout(function () {
    //        window.history.go(-1);
    //    }, 200);
    fadeDashBoard();
    window.history.go(-1);
});
$('#goBack-detail').click(function() {
    $('.detail-all').addClass('slidePageBackLeft').removeClass('slidePageInFromLeft');
    showDashBoard();
});

$('#more-detail').click(function() {

    //alert('more detail');
});

function showDashBoard() {
    for (var i = 1; i <= 2; i++) {
        $('.col' + i).each(function() {
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
    setTimeout(function() {
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

$('.big, .small').each(function() {
    var $this = $(this),
        page = $this.data('page');
    $this.on('click', function() {
        navigateToNewUrl(page + ".html");
    })
});
$('.close-button').click(function() {
    $(this).parent().addClass('slidePageLeft')
        .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            $(this).removeClass('slidePageLeft').removeClass('openpage');
        });
    showDashBoard();
});
$('.view-demo-button').click(function() {
    $(this).parent().addClass('slideDemoOverlayUp');
    showDashBoard();
});

var LocCache = function() {
    var data = {};
    var conn = {};
    conn.save = function(key, val) {
        try {
            key = ('&' == key.substring(0, 1)) ? key : '~' + key;
            data[key] = {
                'ttl': Date.now(),
                'val': val
            };
            window.localStorage.setItem(key, window.JSON.stringify(data[key]));
            return data[key];
        } catch (e) {
            return false;
        }
    }
    conn.load = function(key, ttl) {
        try {
            key = ('&' == key.substring(0, 1)) ? key : '~' + key;
            data[key] = window.JSON.parse(window.localStorage.getItem(key));;
            return (data[key] && (data[key].ttl > Date.now() - (ttl || 60 * 60 * 24 * 365) * 1000)) ? data[key].val : false;
        } catch (e) {
            return false;
        }
    }
    conn.clear = function(clear_key, prefix) {
        prefix = prefix || '~';
        Object.keys(localStorage).forEach(function(key) {
            if (typeof(clear_key) == 'undefined') {
                if (key.substring(0, 1) == prefix) {
                    window.localStorage.removeItem(key);
                }
            } else {
                if (key == prefix + clear_key) {
                    window.localStorage.removeItem(key);
                }
            }

        });
    }
    return conn;
}();
