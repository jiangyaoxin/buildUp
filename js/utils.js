//判断空对象
function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  };
  return true
};
// 可以将表单中的文本框 下拉框 根据name 属性 序列化成字符串
function serializeObject(){    
  var o = {};    
  var a = this.serializeArray();    
  $.each(a, function() { 
    // $.trim() 去掉字符串首尾空格
    if($.trim(this.value) == "" || this.value == undefined || this.value == null){
      o = {};
      return false;
    }
    if (o[this.name]) {    
      if (!o[this.name].push) {    
        o[this.name] = [o[this.name]];    
      }    
      o[this.name].push(this.value || '');    
      } else {    
        o[this.name] = this.value || '';    
    }    
  });    
  return o;    
}; 
//判断是否数字
function isNumber(str){
 	var n = Number(str);
 	if (!isNaN(n)){
    return true;
 	}else{
    return false;
 	}
}
//判断是否为空
function emptyFun(obj){
  var obj=obj;
  if(obj==""||obj==null||obj==undefined||obj=="null"||obj=="undefined"){
    return true;
  }else{
    return false;
  }
}
//获取地址栏参数
function GetQueryString(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null)return  unescape(r[2]); return null;
}
//阻止冒泡
function stopBubble(e){
	e = e || window.event;
	if(e.stopPropagation){
		e.stopPropagation(); //W3C阻止冒泡方法
	}else {
		e.cancelBubble = true; //IE阻止冒泡方法
	}
}
//生成随机数
function randombetween(min, max){
	return min + (Math.random() * (max-min +1));
}