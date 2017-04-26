function formatDate(str) {
  function twoString(num) {
    return ("0"+num).slice(-2)
  }
  var date = new Date(str)
  return [date.getFullYear(),twoString(date.getMonth()),twoString(date.getDay())].join("")
}
 //删除左右两端的空格
function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

exports.formatDate =  formatDate;
exports.trim =  trim;