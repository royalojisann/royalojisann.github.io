﻿window.addEventListener('DOMContentLoaded', function() {
        var adine = "<div class='body_koukoku'><ins class='adsbygoogle'style='display:block; text-align:center;'data-ad-layout='in-article'data-ad-format='fluid'data-ad-client='ca-pub-1820058722476319'data-ad-slot='7802009807'></ins></div>";
	var adine_top = "<ins class='adsbygoogle'style='display:block; text-align:center;'data-ad-layout='in-article'data-ad-format='fluid'data-ad-client='ca-pub-1820058722476319'data-ad-slot='7802009807'></ins>";
	var contentkoukoku = "<ins class='adsbygoogle' style='display:block' data-ad-format='autorelaxed' data-ad-client='ca-pub-1820058722476319' data-ad-slot='7882308349'></ins>";

//     if(document.getElementById("koukoku_top")!=null){
//         document.getElementById("koukoku_top").insertAdjacentHTML('beforeend',adine_top);
//         (adsbygoogle = window.adsbygoogle || []).push({});
//     }
//         if(document.getElementById("koukoku_bottom")!=null){
//             document.getElementById("koukoku_bottom").insertAdjacentHTML('beforeend',adine);
//             (adsbygoogle = window.adsbygoogle || []).push({});
//         }

if(document.getElementById("sub_koukoku")!=null){
        document.getElementById("sub_koukoku").insertAdjacentHTML('beforeend',adine);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
if(document.getElementById("sub_koukoku1")!=null){
        document.getElementById("sub_koukoku1").insertAdjacentHTML('beforeend',adine);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
if(document.getElementById("sub_koukoku2")!=null){
        document.getElementById("sub_koukoku2").insertAdjacentHTML('beforeend',adine);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
if(document.getElementById("sub_koukoku3")!=null){
        document.getElementById("sub_koukoku4").insertAdjacentHTML('beforeend',adine);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
if(document.getElementById("contentdiv")!=null){
        document.getElementById("contentdiv").insertAdjacentHTML('beforeend',contentkoukoku);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
kijicreate();
})

index_n = '';
function kijicreate(){
    var taget = document.getElementById("target_name").textContent;
    for(var index_n = 0; index_n < kan_profile.length; index_n++){
        if(kan_profile[index_n][2]==taget){
            break;
        }
    }

    status_deta = {
        陣営:kan_list[index_n][0],
        艦種:kan_list[index_n][1],
        名前:kan_list[index_n][2],
        レア:kan_profile[index_n][3],
        装甲:kan_list[index_n][66],
        耐久:"",
        装填:"",
        回避:"",
        命中:"",
        火力:"",
        雷装:"",
        航空:"",
        対空:"",
        対潜:"",
        速力:"",
        幸運:"",
        消費:kan_list[index_n][77],
        主砲装備:kan_list[index_n][67],
        主砲補正:kan_list[index_n][70],
        主砲砲座:kan_list[index_n][73],
        副砲装備:kan_list[index_n][68],
        副砲補正:kan_list[index_n][71],
        副砲砲座:kan_list[index_n][74],
        対空装備:kan_list[index_n][69],
        対空補正:kan_list[index_n][72],
        対空砲座:kan_list[index_n][75],
        画像:kan_profile[index_n][10],
        スキル:kan_profile[index_n][11],
        記事:kan_profile[index_n][12],
        声優:kan_profile[index_n][8],
        絵師:kan_profile[index_n][9],
        入手:kan_profile[index_n][4],
        実装日:kan_profile[index_n][5],
        改造日:kan_profile[index_n][6],
        進水日:kan_profile[index_n][7],
        起工日:kan_profile[index_n][13],
        竣工日:kan_profile[index_n][14],
        艦級:kan_profile[index_n][15],
        live:kan_profile[index_n][17],
        評価:kan_profile[index_n][18],
        建造:kan_profile[index_n][19],
        突破:kan_profile[index_n][20],
        表記:kan_profile[index_n][21],
	接頭:kan_profile[index_n][22],
	リンク:kan_profile[index_n][23],
        図鑑:kan_profile[index_n][24]
    }
	if(status_deta.記事.indexOf('改有り')!= -1){
            rarecolor = status_deta.レア.substring(status_deta.レア.indexOf('→')+1);
        }else if(status_deta.レア.indexOf('→')!= -1){
            rarecolor = status_deta.レア.substring(0,status_deta.レア.indexOf('→'));
        }else{
            rarecolor =status_deta.レア;
        }
        status_deta.修正レア = rarecolor;
	
	var kannamedeta = "";
    switch(status_deta.記事){
        case '暫定':
        case '無し':
		kannamedeta = status_deta.名前+"(暫定レベル120愛)";
            for(var pr=0; pr<pr_kansenn.length;pr++){
                if(pr_kansenn[pr][2]==status_deta.名前){
                    status_deta.耐久=(pr_kansenn[pr][3]*1);
                    status_deta.火力=(pr_kansenn[pr][4]*1);
                    status_deta.雷装=(pr_kansenn[pr][5]*1);
                    status_deta.対空=(pr_kansenn[pr][6]*1);
                    status_deta.航空=(pr_kansenn[pr][7]*1);
                    status_deta.装填=(pr_kansenn[pr][8]*1);
                    status_deta.命中=(pr_kansenn[pr][9]*1);
                    status_deta.回避=(pr_kansenn[pr][10]*1);
                    status_deta.対潜=(pr_kansenn[pr][11]*1);
                    status_deta.幸運=(pr_kansenn[pr][12]*1);
                    status_deta.速力=(pr_kansenn[pr][13]*1);
                    break;
                }
            }
        break;
        default:
		    kannamedeta = status_deta.名前;
            var get_level = document.getElementById("lebel_deta").value*1;
            var get_kizuna = document.getElementById("kizuna").value*1;
            //耐久
            var keisan = (kan_list[index_n][3]*1);
                keisan+=(get_level-1)*(kan_list[index_n][4]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][5]*1)/1000;
                keisan+=(kan_list[index_n][57]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][44]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][44]*1);
                status_deta.耐久=Math.floor(keisan);
            //装填
            var keisan = (kan_list[index_n][18]*1);
                keisan+=(get_level-1)*(kan_list[index_n][19]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][20]*1)/1000;
                keisan+=(kan_list[index_n][43]*1);
                keisan+=(kan_list[index_n][62]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][49]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][49]*1);
                status_deta.装填=Math.floor(keisan);
            //回避
            var keisan = (kan_list[index_n][27]*1);
                keisan+=(get_level-1)*(kan_list[index_n][28]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][29]*1)/1000;
                keisan+=(kan_list[index_n][64]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][52]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][52]*1);
                status_deta.回避=Math.floor(keisan);
            //命中
            var keisan = (kan_list[index_n][24]*1);
                keisan+=(get_level-1)*(kan_list[index_n][25]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][26]*1)/1000;
                keisan+=(kan_list[index_n][63]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][51]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][51]*1);
                status_deta.命中=Math.floor(keisan);
            //火力
            var keisan = (kan_list[index_n][6]*1);
                keisan+=(get_level-1)*(kan_list[index_n][7]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][8]*1)/1000;
                keisan+=(kan_list[index_n][39]*1);
                keisan+=(kan_list[index_n][58]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][45]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][45]*1);
                status_deta.火力=Math.floor(keisan);
            //雷装
            var keisan = (kan_list[index_n][9]*1);
                keisan+=(get_level-1)*(kan_list[index_n][10]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][11]*1)/1000;
                keisan+=(kan_list[index_n][40]*1);
                keisan+=(kan_list[index_n][59]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][46]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][46]*1);
                status_deta.雷装=Math.floor(keisan);
            //航空
            var keisan = (kan_list[index_n][15]*1);
                keisan+=(get_level-1)*(kan_list[index_n][16]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][17]*1)/1000;
                keisan+=(kan_list[index_n][42]*1);
                keisan+=(kan_list[index_n][61]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][48]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][48]*1);
                status_deta.航空=Math.floor(keisan);
            //対空
            var keisan = (kan_list[index_n][12]*1);
                keisan+=(get_level-1)*(kan_list[index_n][13]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][14]*1)/1000;
                keisan+=(kan_list[index_n][41]*1);
                keisan+=(kan_list[index_n][60]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][47]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][47]*1);
                status_deta.対空=Math.floor(keisan);
            //対潜
            var keisan = (kan_list[index_n][36]*1);
                keisan+=(get_level-1)*(kan_list[index_n][37]*1)/1000;
                keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][38]*1)/1000;
                keisan+=(kan_list[index_n][65]*1);
keisan = (kan_list[index_n][0] == 'META') ? (keisan+kan_list[index_n][55]*1)*get_kizuna : keisan*get_kizuna+(kan_list[index_n][55]*1);
                status_deta.対潜=Math.floor(keisan);
            //速力
            var keisan = (kan_list[index_n][30]*1)+(kan_list[index_n][53]*1);
                status_deta.速力 = keisan;
            //幸運
            var keisan = (kan_list[index_n][33]*1)+(kan_list[index_n][54]*1);
                status_deta.幸運 = keisan;
        break;
    }
	
	var profile = document.getElementById("character_profile_table").getElementsByTagName("td");
	for(var i=1; i<profile.length;i++){
		profile[i].textContent = "";
	}
	profile[1].textContent = kan_profile[index_n][1];
	profile[2].textContent = kan_profile[index_n][0];
	profile[3].textContent = kan_profile[index_n][3];
	profile[4].textContent = kan_profile[index_n][4];
	profile[5].textContent = kan_profile[index_n][5];
	profile[6].textContent = kan_profile[index_n][6];
	profile[7].textContent = kan_profile[index_n][13];
	profile[8].textContent = kan_profile[index_n][7];
	profile[9].insertAdjacentHTML('beforeend' ,kan_profile[index_n][14]);
	profile[10].insertAdjacentHTML('beforeend' ,kan_profile[index_n][8]);
	profile[11].insertAdjacentHTML('beforeend' ,kan_profile[index_n][9]);
	profile[12].insertAdjacentHTML('beforeend' ,'<img style="max-height: 100px;" data-echo="'+status_deta.live[1]+'" class="lozad" alt="'+status_deta.名前+'">');
	
	var kan_kaihi =Math.floor((1-(0.1+100/(100+status_deta.回避+2)+(50-status_deta.幸運+0)/1000))*10000)/100;
    	var kan_hit =Math.floor(((0.1+status_deta.命中/(status_deta.命中+100+2)+(status_deta.幸運-50+0)/1000))*10000)/100;
    	var kan_crt = Math.floor((0.05+status_deta.命中*1/(status_deta.命中*1+100+2000)+(status_deta.幸運-50+0)/5000)*10000)/100;
    	var kan_body = Math.floor(status_deta.耐久/(1-kan_kaihi/100));
	var specdeta = document.getElementById("target_spec").getElementsByTagName("td");
	specdeta[0].textContent = kan_kaihi+'%';
	specdeta[1].textContent = kan_hit+'%';
	specdeta[2].textContent = kan_crt+'%';
	specdeta[3].textContent = kan_body;
	
	function genkaitopa(){
                var topac = 0;
                for(var tp=0; tp<status_deta.突破.length; tp++){
                    if(status_deta.突破[tp] != ''){
                        topac++;
                    }
                }
                switch(topac){
                    case 0:
                        topa = '';
                    break;
                    case 3:
                    case 4:
                        topa = '<tfoot>\n'+
                        '<tr><th colspan="6" style="background:#dfdfdf;">限界突破</th></tr>\n'+
                        '<tr><th>初段</th><td colspan="5">'+status_deta.突破[0]+'</td></tr>\n'+
                        '<tr><th>二段</th><td colspan="5">'+status_deta.突破[1]+'</td></tr>\n'+
                        '<tr><th>三段</th><td colspan="5">'+status_deta.突破[2]+'</td></tr>\n';
                        if(topac == 4){
                            topa += '<tr><th>備考</th><td colspan="5">'+status_deta.突破[3]+'</td></tr>\n';
                        }
                        topa += '</tfoot>';
                    break;
                    case 6:
                    case 7:
                        topa = '<tfoot>\n'+
                        '<tr><th colspan="6" style="background:#dfdfdf;">性能強化</th></tr>\n'+
                        '<tr><th>Lv.5</th><td colspan="5">'+status_deta.突破[0]+'</td></tr>\n'+
                        '<tr><th>Lv.10</th><td colspan="5">'+status_deta.突破[1]+'</td></tr>\n'+
                        '<tr><th>Lv.15</th><td colspan="5">'+status_deta.突破[2]+'</td></tr>\n'+
                        '<tr><th>Lv.20</th><td colspan="5">'+status_deta.突破[3]+'</td></tr>\n'+
                        '<tr><th>Lv.25</th><td colspan="5">'+status_deta.突破[4]+'</td></tr>\n'+
                        '<tr><th>Lv.30</th><td colspan="5">'+status_deta.突破[5]+'</td></tr>\n';
                        if(topac == 7){
                            topa += '<tr><th>備考</th><td colspan="5">'+status_deta.突破[6]+'</td></tr>\n';
                        }
                        topa += '</tfoot>';
                    break;
                }
                return topa;
        }
            
	document.getElementsByClassName("maintagu_sute")[0].textContent = "";
            document.getElementsByClassName("maintagu_sute")[0].insertAdjacentHTML('beforeend',
            '<table class="status_deta" style="border-top: 1px solid #2196F3;border-bottom: 1px solid #2196F3;">\n'+
            '<thead>\n'+
            '<tr style="border-bottom: 1px solid #2196F3;"><td class="picface '+status_deta.修正レア+'"><img src="'+status_deta.live[0]+'"></td><th class="'+status_deta.修正レア+'" colspan="5">'+status_deta.名前+'</th></tr>\n'+
            '</thead>\n'+
            '<tbody>\n'+
            '<tr><th>耐久</th><td>'+status_deta.耐久+'</td><th>装甲</th><td>'+status_deta.装甲+'</td><th>装填</th><td>'+status_deta.装填+'</td></tr>\n'+
            '<tr><th>火力</th><td>'+status_deta.火力+'</td><th>雷装</th><td>'+status_deta.雷装+'</td><th>回避</th><td>'+status_deta.回避+'</td></tr>\n'+
            '<tr><th>対空</th><td>'+status_deta.対空+'</td><th>航空</th><td>'+status_deta.航空+'</td><th>燃費</th><td>'+status_deta.消費+'</td></tr>\n'+
            '<tr><th>対潜</th><td>'+status_deta.対潜+'</td><th>命中</th><td>'+status_deta.命中+'</td><th>速力</th><td>'+status_deta.速力+'</td></tr>\n'+
            '<tr><th>幸運</th><td>'+status_deta.幸運+'</td><th></th><td></td><th></th><td></td></tr>\n'+
            '<tr style="border-top: 1px solid #2196F3;"><th style="background:#dfdfdf;" colspan="6">装備/補正値/最大数</th></tr>\n'+
            '<tr><th colspan="2">'+status_deta.主砲装備+'</th><td colspan="2">'+status_deta.主砲補正+'％</td><td colspan="2">'+status_deta.主砲砲座+'</td></tr>\n'+
            '<tr><th colspan="2">'+status_deta.副砲装備+'</th><td colspan="2">'+status_deta.副砲補正+'％</td><td colspan="2">'+status_deta.副砲砲座+'</td></tr>\n'+
            '<tr style="border-bottom: 1px solid #2196F3;"><th colspan="2">'+status_deta.対空装備+'</th><td colspan="2">'+status_deta.対空補正+'％</td><td colspan="2">'+status_deta.対空砲座+'</td></tr>\n'+
            '</tbody>\n'+
            genkaitopa()+
            '</table>'
	    )
}

//selectbox
function imgChangeset(parts,iddeta,tagdeta){
imgget =  document.getElementById(iddeta).getElementsByTagName(tagdeta);
for(var up = 0;up<imgget.length;up++){
imgget[up].style.display = "none";
}
imgget[parts.value].style.display = "block";
}

/*! echo-js v1.7.3 | (c) 2016 @toddmotto | https://github.com/toddmotto/echo */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},l=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},i=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,l=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,l),b:s(n.offsetBottom,l),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",i,!1),t.addEventListener("load",i,!1)):(t.attachEvent("onscroll",i),t.attachEvent("onload",i))},a.render=function(n){for(var o,r,d=(n||document).querySelectorAll("[data-echo], [data-echo-background]"),i=d.length,f={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},s=0;i>s;s++)r=d[s],l(r,f)?(c&&r.setAttribute("data-echo-placeholder",r.src),null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+r.getAttribute("data-echo-background")+")":r.src!==(o=r.getAttribute("data-echo"))&&(r.src=o),c||(r.removeAttribute("data-echo"),r.removeAttribute("data-echo-background")),u(r,"load")):c&&(o=r.getAttribute("data-echo-placeholder"))&&(null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+o+")":r.src=o,r.removeAttribute("data-echo-placeholder"),u(r,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",i):t.detachEvent("onscroll",i),clearTimeout(n)},a});
