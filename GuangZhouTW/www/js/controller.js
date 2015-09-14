
/*********************************************************
------------------首页Controller--------------------
*********************************************************/
function IndexCtrl($scope,$http) {
    var alldata = new Array();
    $http({
        url: 'http://localhost/datainterface/index.json',
        method: 'get'
    }).success(function (data, header, config, status) {
        //响应成功
        alldata = data;
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
    }).error(function (data, header, config, status) {
        //处理响应失败
        alert('error');
    });


    

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
    var alldata = new Array();
    //http请求
    $http({
        url: 'json/ProductType.json',
        method: 'GET'
    }).success(function (data, header, config, status) {
        //响应成功
        alldata = data;
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
    }).error(function (data, header, config, status) {
        //处理响应失败
        alert('error');
    });

    //导航进入具体类型产品的列表
    $scope.ngClick = function (url, item) {
        navigateToNewUrl(url + ".html" + "?typeid=" + item.id + "&typename=" + item.name);
    }
}

/*********************************************************
------------------产品列表Controller--------------------
*********************************************************/
function ProductListCtrl($scope,$http) {

    //获取得到当前类型的ID，用来查找此类型的产品列表
    var typeid = getUrlParam('typeid');
    var typename = getUrlParam('typename');
    //当前的产品类型
    $scope.tid = typeid;
    $scope.tname = typename;

    //这里需要请求动态数据
    var alldata = new Array();
      //http请求
      $http({
          url: 'json/ProductList.json',
          method: 'GET'
      }).success(function (data, header, config, status) {
          //响应成功
          alldata = data;
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
      }).error(function (data, header, config, status) {
          //处理响应失败
          alert('error');
      });

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
function ComponentListCtrl($scope,$http) {

    //这里需要请求动态数据
    var alldata = new Array();
    //http请求
    $http({
        url: 'json/ComponentList.json',
        method: 'GET'
    }).success(function (data, header, config, status) {
        //响应成功
        alldata = data;
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
    }).error(function (data, header, config, status) {
        //处理响应失败
        alert('error');
    });
}

/*********************************************************
------------------工程案例Controller--------------------
*********************************************************/
function SolutionListCtrl($scope,$http) {
    //这里需要请求动态数据
    var alldata = new Array();
    //http请求
    $http({
        url: 'json/ComponentList.json',
        method: 'GET'
    }).success(function (data, header, config, status) {
        //响应成功
        alldata = data;
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
    }).error(function (data, header, config, status) {
        //处理响应失败
        alert('error');
    });


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


/*********************************************************
------------------关于特威Controller--------------------
*********************************************************/
function AboutCtrl($scope) {
    //这里需要请求动态数据
    var alldata = [
      {
          "id": 1,
          "title": "公司简介",
          "img": "images/chrome.png",
          "memo": "工程电梯"
      },
      {
          "id": 2,
          "title": "企业文化",
          "img": "images/firefox.png",
          "memo": "工程电梯"
      },
      {
          "id": 3,
          "title": "组织架构",
          "img": "images/ie.png",
          "memo": "商场电梯"
      },
      {
          "id": 4,
          "title": "荣誉资质",
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


        //按钮事件
        $scope.ngClick = function (item) {
            var title = item.title;
            var secondtitle = GetDate();
            var content;
            switch (item.id) {
                case 1:
                    {
                        content = "<div>&nbsp&nbsp&nbsp&nbsp广州市特威工程机械有限公司地处广州市白云区神山镇,广清高速神山出口附近，是一家施工升降机的专业生产厂家。公司成立于2011年，占地100000多平方米，注册资金1060万元，现有员工300余人，其中工程技术人员33人，高级技术人员52人。</div>";
                        content += "<div>&nbsp&nbsp&nbsp&nbspSC200/200型施工升降机是特威公司的主导产品，是一种靠齿轮齿条传动的电梯。具有广泛的用途，不仅可用于一般的高层建筑施工的人、货运输，还可用于工业、电力、矿井、石油、化工等领域的人货运输。整机的工作级别为A8。</div>";
                        content += "<div>&nbsp&nbsp&nbsp&nbsp公司产品严格执行行业标准并进行大量人性化处理，在吊笼内饰、电控箱、驾驶室等部位进行优化改进，使用起来更为方便、安全。</div>";
                        content += "</br>";
                        content += "<video src='http://www.w3school.com.cn/i/movie.mp4' width='100%' height='auto' controls='controls'>Your browser does not support the video tag.</video>";
                        content += "</br>";
                        content += "</br>";
                    } break;
                case 2:
                    {
                        content = "<div>&nbsp&nbsp&nbsp&nbsp企业文化：团结、创新、分享</div>";
                        content += "<div>&nbsp&nbsp&nbsp&nbsp团结：业务重组，实现经营目标需要高效展开工作，需要团结一致的力量。</div>";
                        content += "<div>&nbsp&nbsp&nbsp&nbsp公司产品严格执行行业标准并进行大量人性化处理，在吊笼内饰、电控箱、驾驶室等部位进行优化改进，使用起来更为方便、安全。</div>";
                        content += "<div>&nbsp&nbsp&nbsp&nbsp分享：公司发展是合作伙伴和员工的努力带来的，对有公司发展需的贡献者有好的分享机制。</div>";
                        content += "<img src='images/gcal/qywh001.png' />";
                        content += "</br>";
                        content += "</br>";
                    } break;
                case 3:
                    {
                        content = "<center>资料正在整理中...!</center>";
                        content += "</br>";
                        content += "</br>";
                    } break;
                case 4:
                    {
                        content = "<img src='images/gcal/ryzz001.jpg' /><img src='images/gcal/ryzz002.jpg' /><img src='images/gcal/ryzz003.jpg' />";
                        content += "</br>";
                        content += "</br>";
                    } break;
                default:

            }
            //根据Item的产品id获取产品的详细内容。
            $scope.title = title;
            $scope.content = content;// "<img src='images/gcal/db001.jpg' /><img src='images/gcal/db002.jpg' />";
            $scope.secondtitle = secondtitle;

            fadeDashBoard();
            $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
            //当前窗口的高度，减去(标题的高+margin-top)
            $("#productcontent").height(window.innerHeight - 100 + "px");
            //用直接设置html的方法显示图片
            $("#productcontent").html($scope.content);
        }
    }
}