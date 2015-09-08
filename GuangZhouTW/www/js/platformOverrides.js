// 平台特定的替代将放置在此文件的合并文件夹版本中
function GetDate() {
    var d = new Date();
    var str = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    return str;
}