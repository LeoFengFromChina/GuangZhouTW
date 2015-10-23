/*********************************************************
------------------关于特威Controller--------------------
*********************************************************/
var currMinute;
var myDate;
var urlParam;
function LoginCtrl($scope, $http) {
    //判断用户是否登录
    var usre = LocCache.load('user') || null;
    if(usre){
        window.location = '/index.html';
    }
    $scope.loginUser={};   
    //按钮事件
    $scope.login = function (item) {
       
        var _url = 'json/index.json';
        //http请求
        $http({
            url: _url,
            method: 'GET'
        }).success(function (data, header, config, status) {
            LocCache.save('user',data);
            window.location = '/index.html';

        }).error(function (data, header, config, status) {
            //处理响应失败
            alert('获取数据失败.');
        });
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