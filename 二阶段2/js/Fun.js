/*函数功能：存cookie 
参数：key:键名
参数：value:键值
参数：date:存取期限
返回值：存
*/
function setCookie(key, value, date) {
  document.cookie = key + '=' + value + ';expires=' + date;
}
/*函数功能：取cookie 
参数：key:键名
返回值：键值
*/
function getCookie(key) {
  var str = document.cookie.split('; ');
  for (let i = 0; i < str.length; i++) {
    let newStr = str[i].split('=');
    if (newStr[0] == key) {
      return newStr[1];
    }
  }
}