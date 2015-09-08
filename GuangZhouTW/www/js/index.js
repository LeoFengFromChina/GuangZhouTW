// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

        //alert("onDeviceReady");

        // 处理 Cordova 暂停并恢复事件
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        document.addEventListener("backbutton", onBackKeyDown, false);
    };


    function onBackKeyDown() {
        //navigator.toast.showlong("再点击一次退出");
        document.removeEventListener("backbutton", onBackKeyDown, false); // 注销返回键  
        document.addEventListener("backbutton", exitApp, false);//绑定退出事件  
        // 3秒后重新注册  
        var intervalID = window.setInterval(function () {
            window.clearInterval(intervalID);
            document.removeEventListener("backbutton", exitApp, false); // 注销返回键  
            document.addEventListener("backbutton", onBackKeyDown, false); // 返回键  
        }, 1000);
    }
    function exitApp() {
        navigator.notification.confirm(
        '是否确认要退出?', // message
         onConfirm,            // callback to invoke with index of button pressed
        '87Studio',           // title
        ['是', '否']     // buttonLabels
    );
    }

    function onConfirm(buttonIndex) {
        if (buttonIndex == 1) {
            navigator.app.exitApp();
        }
    }


    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。

    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。

    };
})();