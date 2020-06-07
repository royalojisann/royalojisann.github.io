var sinnsuibilist = {January:[],February:[],March:[],April:[],May:[],June:[],July:[],August:[],September:[],October:[],November:[],December:[],prkansenn:[],little:[],colabo:[],nodeta:[]};
var checklist = {年1月:[],年2月:[],年3月:[],年4月:[],年5月:[],年6月:[],年7月:[],年8月:[],年9月:[],年10月:[],年11月:[],年12月:[],君が建造:[],同じ:[],誕生日:[],不明:[]};
var valuedata = {jinset:[],rareset:[],kantypeset:[]};
var valuename = ['kuni001','type001','rare001'];
window.addEventListener('DOMContentLoaded', function() {
    for(var i=0; i<kan_profile.length;i++){
        if(kan_profile[i][12] == "有り" || kan_profile[i][12] == "暫定"){
        if(kan_profile[i][2] == 'キズナアイ・エレガント' || kan_profile[i][2] == 'キズナアイ・スーパーゲーマー' || kan_profile[i][2] == 'キズナアイ・アニバーサリー'){
            ;
        }else{
            if(kan_profile[i][2].indexOf('(μ兵装)') != -1){
                ;
            }else{
                for(var p=0; p<Object.keys(sinnsuibilist).length;p++){
                    if(kan_profile[i][7].indexOf(Object.keys(checklist)[p]) != -1){
                        sinsui = kan_profile[i][7].match(/(\d+)日/);
                        kan_profile[i].push(sinsui);
                        if(kan_profile[i][2].indexOf('(半改)') != -1){
                            kan_profile[i][2]=kan_profile[i][2].substring(0,kan_profile[i][2].indexOf('('));
                        }
                        if(kan_profile[i][3].indexOf('→')!= -1){
                            kan_profile[i][3] = kan_profile[i][3].substring(0,kan_profile[i][3].indexOf('→'));
                        }
                        sinnsuibilist[Object.keys(sinnsuibilist)[p]].push(kan_profile[i]);
                        break;
                    }
                }
            }
        }
        }
    }
    for(var d=0; d<Object.keys(sinnsuibilist).length;d++){
        switch(Object.keys(sinnsuibilist)[d]){
            case 'prkansenn':
            case 'little':
            case 'colabo':
            case 'nodeta':
                ;
            break;
            default:
                sinnsuibilist[Object.keys(sinnsuibilist)[d]].sort(function(a,b) {
                    return (a[a.length-1][1]*1 < b[a.length-1][1]*1 ? -1 : 1);
                });
            break;
        }
        var hikaku = sinnsuibilist[Object.keys(sinnsuibilist)[d]].length-document.getElementsByClassName("table_box")[d].getElementsByTagName("tr").length;
        var kakunou = "";
        for(var p=0;p<hikaku;p++){
            var dataindex = sinnsuibilist[Object.keys(sinnsuibilist)[d]][document.getElementsByClassName("table_box")[d].getElementsByTagName("tr").length+p];
            if(dataindex[7].indexOf('誕生日')!= -1){
                sin = dataindex[7].substring(3);
                sinnsuitannjyou = "誕生日";
            }else{
                sin = dataindex[7];
                sinnsuitannjyou = "進水日";
            }
            kakunou += (
                '<tr style="display: table-row;">'+
                '<td style="width: 32%;border: 2px solid #00BCD4;padding: 2px;line-height: 1.5;text-align: center;">'+
                '<a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+dataindex[10]+'" target="_blank"><img src="'+dataindex[16][1]+'" alt="'+dataindex[2]+'" class="lozad" style="height: 80%;"><br>'+dataindex[2]+'</td>'+
                '<td style="border: 2px solid #00BCD4;padding: 2px;line-height: 1.5;padding-left:8px;">'+
                ' 実装日 '+dataindex[5]+'<br>'+
                ' 改造日 '+dataindex[6]+'<br>'+
                ' 起工日 '+dataindex[13]+'<br>'+
                ' <strong>'+sinnsuitannjyou+' '+sin+'</strong><br>'+
                ' 就役日 '+dataindex[14]+
                '</td>'+
                '</tr>'
            );
        }
        document.getElementsByClassName("table_box")[d].insertAdjacentHTML("beforeend",kakunou);
    }
});

var box = [];
var tweetset = {text1:'',text2:'',text3:''};
function macthbirthday(){
    var tosi = [31,31,28,31,30,31,30,31,31,30,31,30,31.31];
    var moon_n = document.getElementById("moon").value*1;
    var sun_n = document.getElementById("sun").value*1;
    box = {macthng:[],purasu:[],mainasu:[]};
    for(var i=0;i<5;i++){
        switch(i){
            case 0:
                for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                    if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p].length-1][1] == sun_n){
                        box.macthng.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                    }
                }
            break;
            default:
                if(sun_n+i > tosi[moon_n]){
                    atari = (moon_n+1 == 13) ? 0 : moon_n;
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[atari]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p][sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p].length-1][1] == i){
                            box.purasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p]);
                        }
                    }
                }else{
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p].length-1][1] == sun_n+i){
                            box.purasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                        }
                    }
                }
                if(sun_n-i <= 0){
                    atari = (moon_n-1 == 0) ? 11 : moon_n-2;
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[atari]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p][sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p].length-1][1] == tosi[atari]-i+1){
                            box.mainasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p]);
                        }
                    }
                }else{
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p].length-1][1] == sun_n-i){
                            box.mainasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                        }
                    }
                }
            break;
        }
    }

    dammset = {damm0:[],damm1:[],damm2:[]};
    texta = "",textb = "",textc = "";
    if(box.macthng.length){
        aaa="",twi="",icount=0;
        for(var i=0;i<box.macthng.length;i++){
            dammset.damm0.push(box.macthng[i][2]);
            aaa += '☆'+dammset.damm0[i]+'<br>';
            if(icount!=2){
                twi += '☆'+dammset.damm0[i]+'\n';
                icount++;
            }
        }
        texta = '進水日「'+moon_n+'月'+sun_n+'日」の艦船は<br>'+aaa+'…です！';
        tweetset.text1 = '進水日「'+moon_n+'月'+sun_n+'日」の艦船を探しました！\n'+twi;
    }else{
        texta = '進水日「'+moon_n+'月'+sun_n+'日」の艦船は見つかりませんでした…';
        tweetset.text1 = '進水日「'+moon_n+'月'+sun_n+'日」の艦船は見つかりませんでした…\n';
    }

    if(box.purasu.length){
        twi="",icount=0;
        for(var i=0;i<box.purasu.length;i++){
            dammset.damm1.push(box.purasu[i][2]+'('+box.purasu[i][7].substring(5)+')');
            textb += '☆'+dammset.damm1[i]+'<br>';
            if(icount!=2){
                twi += '☆'+dammset.damm1[i]+'\n';
                icount++;
            }
        }
        tweetset.text2 = twi;
    }

    if(box.mainasu.length){
        twi="",icount=0;
        for(var i=0;i<box.mainasu.length;i++){
            dammset.damm2.push(box.mainasu[i][2]+'('+box.mainasu[i][7].substring(5)+')');
            textc += '☆'+dammset.damm2[i]+'<br>';
            if(icount!=2){
                twi += '☆'+dammset.damm2[i]+'\n';
                icount++;
            }
        }
        tweetset.text3 = twi;
    }
    document.getElementById("match_birthday").textContent ="";
    document.getElementById("match_birthday").insertAdjacentHTML('beforeend',
    texta+'<br><br>'+'近いところだと、<br>'+textb+textc+'…などがいます<br><br>結果をツイートできます。<br>ボタンが現れない時は⇒<span onclick="twion();"  style="background: #f3a93d;border-radius: 3px;color: white;padding: 2px 8px;font-size: 16px;cursor: pointer;display: inline-block;vertical-align: top;">タッチ</span>'
    )
    twion();
}

var shareUrl = "https://az-royalojisann.hatenablog.com/entry/az-sinnsuibi";
var targetId = "tweet1";
var twitext = "";
var hashtag = "アズールレーン";

// Twitterの初期化
var d = document;
var s = 'script';
var id = 'twitter-wjs';
var js, fjs = d.getElementsByTagName(s)[0];
if (!d.getElementById(id)) {
 js = d.createElement(s);
 js.id = id;
 js.src = 'https://platform.twitter.com/widgets.js';
 fjs.parentNode.insertBefore(js, fjs);
}
function twion(){
// twttrの初期化(platform.twitter.com/widgets.jsの完了)が未だなら待つ。
function callAfterTwitterInitialization(callback){
if(typeof twttr !== "undefined"){
 callback();
} else {
 setTimeout(function(){
     callAfterTwitterInitialization(callback);
 }, 100);
}
}
// twttrが使えるようになったらシェアボタンを作る。
callAfterTwitterInitialization(function(){
    $('#' + targetId).empty();
    twttr.widgets.createShareButton(
     shareUrl,
     document.getElementById(targetId),
     {
       count: 'none',
       text: tweetset.text1+'\n近いところだと…\n'+tweetset.text2+tweetset.text3+'…などがいます\n\n'+'#アズールレーン'+'\n'+'#アズレン進水日'+'\n',
       size: "large",
       hashtags: "",
     });
    });
}

function sinnsuisort(){
    valuedata = {jinset:[],kantypeset:[],rareset:[]};
    for(var i=0;i<Object.keys(valuedata).length;i++){
        for (var d=0; d<document.getElementsByName(valuename[i]).length;d++){
            if (document.getElementsByName(valuename[i])[d].checked) {
                valuedata[Object.keys(valuedata)[i]].push(document.getElementsByName(valuename[i])[d].value);
            }
        }
    }

    for(var i=0; i<document.getElementsByClassName("table_box").length; i++){
        var rarehanntei = function(ideta,pdeta){
            if(valuedata.rareset.length == 0){
                //rare指定なし
                document.getElementsByClassName("table_box")[ideta].getElementsByTagName("tr")[pdeta].style.display="table-row";
            }else{
                for(var y=0; y<valuedata.rareset.length; y++){
                    if(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][3] == valuedata.rareset[y]){
                        //rare指定
                        document.getElementsByClassName("table_box")[ideta].getElementsByTagName("tr")[pdeta].style.display="table-row";
                    }
                }
            }
        }
        for(var p=0;p<sinnsuibilist[Object.keys(sinnsuibilist)[i]].length;p++){
            document.getElementsByClassName("table_box")[i].getElementsByTagName("tr")[p].style.display="none";
            //陣営
            if(valuedata.jinset.length == 0){
                //陣営指定なし
                if(valuedata.kantypeset.length == 0){
                    //艦種指定なし
                    rarehanntei(i,p);
                }else{
                    //艦種指定
                    for(var r=0; r<valuedata.kantypeset.length; r++){
                        if(valuedata.kantypeset[r]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][1]){
                            rarehanntei(i,p);
                        }
                    }
                }
            }else{
                //陣営指定
                for(var j=0; j<valuedata.jinset.length; j++){
                    if(valuedata.jinset[j]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][0]){
                        if(valuedata.kantypeset.length == 0){
                            //艦種指定なし
                            rarehanntei(i,p);
                        }else{
                            //艦種指定
                            for(var r=0; r<valuedata.kantypeset.length; r++){
                                if(valuedata.kantypeset[r]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][1]){
                                    rarehanntei(i,p);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function sinnsuibifanc(){
    valuedata = {jinset:[],kantypeset:[],rareset:[]};
    for(var i=0;i<Object.keys(valuedata).length;i++){
        for (var d=0; d<document.getElementsByName(valuename[i]).length;d++){
            document.getElementsByName(valuename[i])[d].checked = false;
        }
        for(var p=0;p<document.getElementsByClassName("table_box")[i].getElementsByTagName("tr").length;p++){
            document.getElementsByClassName("table_box")[i].getElementsByTagName("tr")[p].style.display="table-row";
        }
    }
}
