//判断空对象
function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  };
  return true
};
//js获取表单数据
function formser(form){
  var form=document.getElementById(form);
 	var arr={};
 	for (var i = 0; i < form.elements.length; i++) {
 		var feled=form.elements[i];
 		switch(feled.type) {
 			case undefined:
		 	case 'button':
		 	case 'file':
		 	case 'reset':
		 	case 'submit':
 				break;
 			case 'checkbox':
 			case 'radio':
 				if (!feled.checked) {
 					break;
 				}
 			default:
 				if (arr[feled.name]) {
 					arr[feled.name]=arr[feled.name]+','+feled.value;
 				}else{
 					arr[feled.name]=feled.value;
 				} 
 			}
 		}
 	return arr
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
//给a标签添加后缀
function setPostfix(tags) {
	for (var i=0;i<tags.length;i++) {
  	tags[i].href += "?"+Math.random();
	}
}

function isPC(){
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return false;
	} else {
	  return true;
	}
}
//获取屏幕可视区域的宽高
!function() {
  if(window.innerHeight !== undefined) {
    client = function() {
    	return {
        "width": window.innerWidth,
       	"height": window.innerHeight
        }
    }
  }else if(document.compatMode === "CSS1Compat") {
 		client = function() {
     	return {
        "width": document.documentElement.clientWidth,
        "height": document.documentElement.clientHeight
      }
    }
	} else {
    client = function() {
      return {
        "width": document.body.clientWidth,
        "height": document.body.clientHeight
      }
     }
	}
}();

//绑定事件
var addHandler = function(element, type, handler){  
	if (element.addEventListener){  
	    element.addEventListener(type, handler, false);  
	} else if (element.attachEvent){  
	    element.attachEvent("on" + type, handler);  
	} else {  
	    element["on" + type] = handler;  
	}  
}  
