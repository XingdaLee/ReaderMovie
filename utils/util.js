// 组件评分星星的数据，如果是5星[1,1,1,1,1]，如果是3星[1,1,1,0,0]
function covertToStarsArray(stars) {
  var num = stars.toString().substring(0, 1);
  var starsList = [];
  for (var i = 0; i < 5; i++) {
    if (i <= num) {
      starsList.push(1);
    } else {
      starsList.push(0);
    }
  };
  return starsList;
};
// http请求,异步方法必须加callBack
// params是请求时带的参数,类型是Obj
function http(url, params, callBack) {
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'json'
    },
    method: 'GET',
    success: function (res) {
      callBack(res.data)
    },
    fail: function () {

    },
    complete: function () {

    }
  });
};
module.exports = {
  covertToStarsArray: covertToStarsArray,
  http: http
}