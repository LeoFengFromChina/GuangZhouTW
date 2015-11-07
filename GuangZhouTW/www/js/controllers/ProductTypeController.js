
/*********************************************************
------------------产品类型Controller--------------------
*********************************************************/
var currMinute;
var myDate;
var urlParam;
function ProductTypeCtrl($scope, $http,$timeout) {
    //判断用户是否登录
    var usre = LocCache.load('user') || null;
    if(!usre){
        window.location = 'login.html';
    }
    myDate = new Date();
    if (currMinute == null || myDate.getMinutes() - currMinute > 20) {
        currMinute = myDate.getMinutes();
    }
    //这里需要请求动态数据
    var alldata = new Array();
    //http请求
    $http({
        url: 'http://120.24.179.84/json/ProductType.json?timespan=' + currMinute,
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
        //处理响应失败,请求本地
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
            //处理响应失败,请求本地
            alert('No data reply');

        });
    });

    //导航进入具体类型产品的列表
    $scope.ngClick = function (url, item) {
        navigateToNewUrl(url + ".html" + "?typeid=" + item.id + "&typename=" + item.title);
    }
   
    $scope.isShowEasyList=false;
    $scope.showEasyList = function(){
        if($scope.isShowEasyList){
            $scope.isShowEasyList=false;
             // $scope.isShow="hide";
        }else{
            $scope.isShowEasyList=true;
             $scope.isShow="show";
        }
    }
}
