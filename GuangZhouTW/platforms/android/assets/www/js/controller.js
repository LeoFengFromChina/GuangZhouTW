
/*********************************************************
------------------首页Controller--------------------
*********************************************************/
function IndexCtrl($scope) {

    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "pagetype": "html",
          "title": "产品展示",
          "displaytitle": "none",
          "img": "images/chrome.png",
          "url": "product-type",
          "height": "230px",
          "color": "#FF563A",
          "memo": "普通施工升降机"
      },
      {
          "id": 2,
          "pagetype": "html",
          "title": "产品配件",
          "displaytitle": "none",
          "img": "images/firefox.png",
          "url": "component-list",
          "height": "120px",
          "color": "#92D050",
          "memo": "普通施工升降机"
      },
      {
          "id": 3,
          "pagetype": "html",
          "title": "工程案例",
          "displaytitle": "none",
          "img": "images/safari.png",
          "url": "solution",
          "height": "230px",
          "color": "#00B0F0",
          "memo": "普通施工升降机"
      },
      {
          "id": 4,
          "pagetype": "html",
          "title": "关于特威",
          "displaytitle": "none",
          "img": "images/ie.png",
          "url": "about",
          "height": "200px",
          "color": "#FFC000",
          "memo": "普通施工升降机"
      },
      {
          "id": 5,
          "pagetype": "div",
          "title": "视频",
          "displaytitle": "none",
          "img": "images/firefox.png",
          "url": "video",
          "height": "60px",
          "color": "#FA3636",
          "memo": "普通施工升降机"
      },
      {
          "id": 6,
          "pagetype": "html",
          "title": "特威服务",
          "displaytitle": "none",
          "img": "images/safari.png",
          "url": "service",
          "height": "200px",
          "color": "#FF218B",
          "memo": "普通施工升降机"
      }
    ];
    if (alldata != null && alldata.length > 0) {
        //左右两列数据
        var left = new Array();
        var right = new Array();

        //按列平均，如果需要按行平均，则修改这里即可
        for (var i = 0; i < alldata.length; i++) {
            if (i % 2 == 0)
                left.push(alldata[i]);
            else
                right.push(alldata[i]);
        }

        //定义左右两个作用于，用于前端遍历显示
        $scope.leftsideitems = left;
        $scope.rightsideitems = right;
    }

    //按钮事件
    $scope.ngClick = function (item) {
        //根据Item的产品id获取产品的详细内容。
        if (item.pagetype == "html")
            navigateToNewUrl(item.url + ".html");
        else if (item.pagetype == "div") {
            $scope.title = item.title;
            $scope.secondtitle = "2015-09-01";
            $scope.content = " <div class='videocontent'><video src='http://www.w3school.com.cn/i/movie.mp4' width='100%' height='auto' controls='controls'>  Your browser does not support the video tag.</video></div>";
            fadeDashBoard();
            $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
            //当前窗口的高度，减去(标题的高+margin-top)
            $("#productcontent").height(window.innerHeight - 100 + "px");
            //用直接设置html的方法显示图片
            $("#productcontent").html($scope.content);
        }
    }
}

/*********************************************************
------------------产品类型Controller--------------------
*********************************************************/
function ProductTypeCtrl($scope, $http) {

    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "name": "变频电梯",
          "img": "images/chrome.png",
          "memo": "工程电梯"
      },
      {
          "id": 2,
          "name": "普通电梯",
          "img": "images/firefox.png",
          "memo": "工程电梯"
      },
      {
          "id": 3,
          "name": "新型普通电梯",
          "img": "images/ie.png",
          "memo": "商场电梯"
      },
      {
          "id": 4,
          "name": "其他电梯",
          "img": "images/opera.png",
          "memo": "其他电梯"
      }
    ];
    //var alldata = null;
    //myUrl = "http://localhost:58935/DataList.ashx?callback=JSON_CALLBACK";

    //$http.jsonp(myUrl).success(function (data, status, headers, config) {
    //    //加载成功之后做一些事  
    //    alert(data);
    //}).error(function (data, status, headers, config) {
    //    //处理错误  
    //    alert(status);
    //});

    if (alldata != null && alldata.length > 0) {
        //左右两列数据
        var left = new Array();
        var right = new Array();

        //按列平均，如果需要按行平均，则修改这里即可
        for (var i = 0; i < alldata.length; i++) {
            if (i % 2 == 0)
                left.push(alldata[i]);
            else
                right.push(alldata[i]);
        }

        //定义左右两个作用于，用于前端遍历显示
        $scope.leftsideitems = left;
        $scope.rightsideitems = right;
    }
    //导航进入具体类型产品的列表
    $scope.ngClick = function (url, item) {
        navigateToNewUrl(url + ".html" + "?typeid=" + item.id + "&typename=" + item.name);
    }
}

/*********************************************************
------------------产品列表Controller--------------------
*********************************************************/
function ProductListCtrl($scope) {

    //获取得到当前类型的ID，用来查找此类型的产品列表
    var typeid = getUrlParam('typeid');
    var typename = getUrlParam('typename');
    //当前的产品类型
    $scope.tid = typeid;
    $scope.tname = typename;

    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "typeid": 1,
          "title": "变频电梯001",
          "img": "images/chrome.png",
          "memo": "普通施工升降机"
      },
      {
          "id": 2,
          "typeid": 1,
          "title": "变频电梯002",
          "img": "images/firefox.png",
          "memo": "变频施工升降机"
      },
      {
          "id": 3,
          "typeid": 2,
          "title": "普通电梯001",
          "img": "images/ie.png",
          "memo": "工变频两用施工升降机"
      },
      {
          "id": 4,
          "typeid": 2,
          "title": "普通电梯002",
          "img": "images/opera.png",
          "memo": "其他电梯"
      },
      {
          "id": 5,
          "typeid": 3,
          "title": "新型普通电梯001",
          "img": "images/opera.png",
          "memo": "其他电梯"
      },
      {
          "id": 6,
          "typeid": 3,
          "title": "新型普通电梯002",
          "img": "images/opera.png",
          "memo": "其他电梯"
      }
    ];
    if (alldata != null && alldata.length > 0) {
        //左右两列数据
        var left = new Array();
        var right = new Array();

        //按列平均，如果需要按行平均，则修改这里即可
        for (var i = 0; i < alldata.length; i++) {
            if (i % 2 == 0)
                left.push(alldata[i]);
            else
                right.push(alldata[i]);
        }

        //定义左右两个作用于，用于前端遍历显示
        $scope.leftsideitems = left;
        $scope.rightsideitems = right;
    }

    //按钮事件
    $scope.ngClick = function (item) {
        //根据Item的产品id获取产品的详细内容。

        $scope.title = item.title;
        $scope.secondtitle = "2015-09-01";
        $scope.content = "<img src='images/tw01.jpg' />Begin--SC系列普通施工升降机是我们公司主打产品之一，<img src='images/firefox.png' />它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.<img src='images/chrome.png' />SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，<img src='images/safari.png' />并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势.SC系列普通施工升降机是我们公司主打产品之一，它具有直接启动，机构简单等优点，并且相对国内同类产品它具有更明显优势End";
        fadeDashBoard();
        $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
        //当前窗口的高度，减去(标题的高+margin-top)
        $("#productcontent").height(window.innerHeight - 100 + "px");
        //用直接设置html的方法显示图片
        $("#productcontent").html($scope.content);
    }
}

/*********************************************************
------------------产品配件Controller--------------------
*********************************************************/
function ComponentListCtrl($scope) {

    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "title": "镀锌标准节",
          "img": "images/chrome.png",
          "memo": "普通施工升降机"
      },
      {
          "id": 2,
          "title": "镀锌附墙",
          "img": "images/firefox.png",
          "memo": "变频施工升降机"
      },
      {
          "id": 3,
          "title": "镀锌后吊笼结构",
          "img": "images/ie.png",
          "memo": "工变频两用施工升降机"
      },
      {
          "id": 4,
          "title": "二传动机构（国产）",
          "img": "images/opera.png",
          "memo": "其他电梯"
      },
      {
          "id": 5,
          "title": "二传动机构（进口）",
          "img": "images/opera.png",
          "memo": "其他电梯"
      },
      {
          "id": 6,
          "title": "三传动机构（国产）",
          "img": "images/opera.png",
          "memo": "其他电梯"
      },
      {
          "id": 7,
          "title": "三传动机构（进口）",
          "img": "images/opera.png",
          "memo": "其他电梯"
      }
    ];
    //左右两列数据
    var left = new Array();
    var right = new Array();

    for (var i = 0; i < alldata.length; i++) {
        if (i % 2 == 0)
            left.push(alldata[i]);
        else
            right.push(alldata[i]);
    }

    //定义左右两个作用于，用于前端遍历显示
    $scope.leftsideitems = left;
    $scope.rightsideitems = right;
}

/*********************************************************
------------------工程案例Controller--------------------
*********************************************************/
function SolutionListCtrl($scope) {
    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "title": "代表性建筑",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 2,
          "title": "公路大桥项目",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 3,
          "title": "万达广场",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 4,
          "title": "中天建筑集团",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 5,
          "title": "深圳幸福城",
          "city": "甚至",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 6,
          "title": "中铁建设集团",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 7,
          "title": "中建四局海珠半岛花园",
          "city": "广州",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      },
      {
          "id": 8,
          "title": "新鸿基御华园",
          "city": "东莞",
          "img": "images/chrome.png",
          "date": "2015-03-11",
          "memo": "普通施工升降机"
      }];
    //左右两列数据
    var left = new Array();
    var right = new Array();

    for (var i = 0; i < alldata.length; i++) {
        if (i % 2 == 0)
            left.push(alldata[i]);
        else
            right.push(alldata[i]);
    }

    //定义左右两个作用于，用于前端遍历显示
    $scope.leftsideitems = left;
    $scope.rightsideitems = right;


    //按钮事件
    $scope.ngClick = function (item) {
        //根据Item的产品id获取产品的详细内容。
        $scope.title = "代表性建筑";
        $scope.content = "<img src='images/gcal/db001.jpg' /><img src='images/gcal/db002.jpg' />";
        $scope.secondtitle = "2015-09-01";

        fadeDashBoard();
        $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
        //当前窗口的高度，减去(标题的高+margin-top)
        $("#productcontent").height(window.innerHeight - 100 + "px");
        //用直接设置html的方法显示图片
        $("#productcontent").html($scope.content);
    }
}