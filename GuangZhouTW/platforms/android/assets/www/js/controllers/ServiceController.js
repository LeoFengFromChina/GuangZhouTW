/*********************************************************
------------------特威服务Controller--------------------
*********************************************************/

function ServiceCtrl($scope, $http) {
   //判断用户是否登录
    var usre = LocCache.load('user') || null;
    if(!usre){
        window.location = 'login.html';
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