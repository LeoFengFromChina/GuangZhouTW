/*********************************************************
------------------特威服务Controller--------------------
*********************************************************/

function ServiceCtrl($scope, $http) {
   
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