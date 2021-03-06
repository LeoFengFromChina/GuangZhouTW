﻿/*********************************************************
------------------首页Controller--------------------
*********************************************************/
var currMinute;
var myDate;
var urlParam;
function IndexCtrl($scope, $http) {
    //判断用户是否登录
    var usre = LocCache.load('user') || null;
    if (!usre) {
        window.location = 'login.html';
    }
    //这里需要请求动态数据
    myDate = new Date();
    if (currMinute == null || myDate.getMinutes() - currMinute > 20) {
        currMinute = myDate.getMinutes();
    }
    var alldata = new Array();
    $http({
        url: 'http://120.24.179.84/json/index.json?timespan=' + currMinute,
        method: 'GET'
    }).success(function(data, header, config, status) {
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
    }).error(function(data, header, config, status) {
        //处理响应失败,请求本地
        $http({
            url: 'json/index.json',
            method: 'GET'
        }).success(function(data, header, config, status) {
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
        }).error(function(data, header, config, status) {
            //处理响应失败,请求本地
            alert('No data reply');

        });

    });

    //按钮事件
    $scope.ngClick = function(item) {
        //根据Item的产品id获取产品的详细内容。
        if (item.pagetype == "html")
            navigateToNewUrl(item.url + ".html");
        else if (item.pagetype == "div") {

            $scope.title = item.title;
            $http({
                url: 'http://120.24.179.84/json/Video.json?timespan=' + currMinute,
                method: 'GET'
            }).success(function(data, header, config, status) {
                //响应成功
                $scope.secondtitle = data[0].date;
                $scope.content = data[0].content;
                fadeDashBoard();
                $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
                //当前窗口的高度，减去(标题的高+margin-top)
                $("#productcontent").height(window.innerHeight - 100 + "px");
                //用直接设置html的方法显示图片
                $("#productcontent").html($scope.content);
            }).error(function(data, header, config, status) {
                //处理响应失败
                $http({
                    url: 'json/Video.json',
                    method: 'GET'
                }).success(function(data, header, config, status) {
                    //响应成功
                    $scope.secondtitle = data[0].date;
                    $scope.content = data[0].content;
                    fadeDashBoard();
                    $('.detail-all').addClass('slidePageInFromLeft').removeClass('slidePageBackLeft');
                    //当前窗口的高度，减去(标题的高+margin-top)
                    $("#productcontent").height(window.innerHeight - 100 + "px");
                    //用直接设置html的方法显示图片
                    $("#productcontent").html($scope.content);
                }).error(function(data, header, config, status) {
                    //处理响应失败
                    alert('No data reply');
                });
            });
        }
    }

   
    $scope.logout = function() {
        var r = confirm("确定退出？");
        if (r == true) {
            LocCache.clear('user');
        window.location = 'login.html';
        } else {
            // alert("You pressed Cancel!");
        }
       
    }
}
