﻿window.addEventListener('DOMContentLoaded', function() {
	var adine_top = "<ins class='adsbygoogle'style='display:block; text-align:center;'data-ad-layout='in-article'data-ad-format='fluid'data-ad-client='ca-pub-1820058722476319'data-ad-slot='1360268148'></ins>";
	 if(document.getElementById("koukoku_top")!=null){
		 document.getElementById("koukoku_top").insertAdjacentHTML('beforeend',adine_top);
		 (adsbygoogle = window.adsbygoogle || []).push({});
	 }
	 if(document.getElementById("koukoku_bottom")!=null){
		 document.getElementById("koukoku_bottom").insertAdjacentHTML('beforeend',adine_top);
		 (adsbygoogle = window.adsbygoogle || []).push({});
	 }
	if(document.getElementById("koukoku_middle")!=null){
		 document.getElementById("koukoku_middle").insertAdjacentHTML('beforeend',adine_top);
		 (adsbygoogle = window.adsbygoogle || []).push({});
	 }
// 	 if(document.getElementById("contentdiv")!=null){
// 		 document.getElementById("contentdiv").insertAdjacentHTML('beforeend',contentkoukoku);
// 		 (adsbygoogle = window.adsbygoogle || []).push({});
// 	 }
})

function switch_table_display(classname,number_data,dis){
for(var i = 0; i<document.getElementsByClassName(classname).length; i++){
document.getElementsByClassName(classname)[i].style.display = 'none';
}
document.getElementsByClassName(classname)[number_data*1].style.display = dis;
}

//汎用タブコントローラー
function tab_ctrl_fanc(access,event){
    var num = Array.prototype.indexOf.call(document.getElementById(access).querySelectorAll('.tab_ctrl_button'),event);
    document.getElementById(access).querySelectorAll('.tab_active')[0].classList.remove('tab_active');
    document.getElementById(access).querySelectorAll('.button_light_on')[0].classList.remove('button_light_on');
    document.getElementById(access).querySelectorAll('.tab_cheng_box')[num].classList.toggle('tab_active');
    document.getElementById(access).querySelectorAll('.tab_ctrl_button')[num].classList.toggle('button_light_on');
}

function button_touch_open(e,get,name,dis){
 	//this,idかclassとか,block種類
	switch(get){
		case 'id':
			document.getElementById(name).style.display = document.getElementById(name).style.display == 'none' ? dis : 'none';
		break;
		case 'next':
			e.nextElementSibling.style.display = e.nextElementSibling.style.display == 'none' ? dis : 'none';
		break;
		case 'class':
			document.getElementsByClassName(name)[1].style.display = document.getElementsByClassName(name)[1].style.display == 'none' ? dis : 'none';
		break;
	}
}

function imgChangeset(parts,iddeta,tagdeta,blo){
imgget =  document.getElementById(iddeta).getElementsByTagName(tagdeta);
for(var up = 0;up<imgget.length;up++){
imgget[up].style.display = "none";
}
imgget[parts.value].style.display = blo || "block";
}

/*! echo-js v1.7.3 | (c) 2016 @toddmotto | https://github.com/toddmotto/echo */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},l=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},i=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,l=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,l),b:s(n.offsetBottom,l),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",i,!1),t.addEventListener("load",i,!1)):(t.attachEvent("onscroll",i),t.attachEvent("onload",i))},a.render=function(n){for(var o,r,d=(n||document).querySelectorAll("[data-echo], [data-echo-background]"),i=d.length,f={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},s=0;i>s;s++)r=d[s],l(r,f)?(c&&r.setAttribute("data-echo-placeholder",r.src),null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+r.getAttribute("data-echo-background")+")":r.src!==(o=r.getAttribute("data-echo"))&&(r.src=o),c||(r.removeAttribute("data-echo"),r.removeAttribute("data-echo-background")),u(r,"load")):c&&(o=r.getAttribute("data-echo-placeholder"))&&(null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+o+")":r.src=o,r.removeAttribute("data-echo-placeholder"),u(r,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",i):t.detachEvent("onscroll",i),clearTimeout(n)},a});
