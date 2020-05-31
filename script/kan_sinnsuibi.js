var sinnsuibilist = {年1月:[],年2月:[],年3月:[],年4月:[],年5月:[],年6月:[],年7月:[],年8月:[],年9月:[],年10月:[],年11月:[],年12月:[],誕生日:[],同じ:[],君が建造:[],不明:[]};
var sinnsuibikeys = Object.keys(sinnsuibilist);
var jinset = [];
var rareset = [];
var kantypeset = [];
var sinsuikakunou0 = "";
var sinsuikakunou1 = "";
window.addEventListener('DOMContentLoaded', function() {
    for(var i=0; i<kan_profile.length;i++){
        if(kan_profile[i][12] == "有り" || kan_profile[i][12] == "暫定"){
            for(var p=0; p<Object.keys(sinnsuibilist).length;p++){
                if(kan_profile[i][7].indexOf(Object.keys(sinnsuibilist)[p]) != -1){
                    sinsui = kan_profile[i][7].match(/(\d+)日/);
                    kan_profile[i].push(sinsui);
                    sinnsuibilist[Object.keys(sinnsuibilist)[p]].push(kan_profile[i]);
                    break;
                }
            }
        }
    }
    for(var d=0; d<sinnsuibikeys.length;d++){
        switch(sinnsuibikeys[d]){
            case '誕生日':
            case '同じ':
            case '君が建造':
            case '不明':
                ;
            break;
            default:
                sinnsuibilist[Object.keys(sinnsuibilist)[d]].sort(function(a,b) {
                    return (a[15][1]*1 < b[15][1]*1 ? -1 : 1);
                });
            break;
        }
    }
});
var box = [];
var tweetset = {
    text1:'',
    text2:'',
    text3:''
};
function macthbirthday(){
    var tosi = [31,31,28,31,30,31,30,31,31,30,31,30,31.31];
    var moon_n = document.getElementById("moon").value*1;
    var sun_n = document.getElementById("sun").value*1;
    box = {
        macthng:[],
        purasu:[],
        mainasu:[]
    }
    for(var i=0;i<5;i++){
        switch(i){
            case 0:
                for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                    if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][15][1] == sun_n){
                        box.macthng.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                    }
                }
            break;
            default:
                if(sun_n+i > tosi[moon_n]){
                    atari = (moon_n+1 == 13) ? 0 : moon_n;
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[atari]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p][15][1] == i){
                            box.purasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p]);
                        }
                    }
                }else{
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][15][1] == sun_n+i){
                            box.purasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                        }
                    }
                }

                if(sun_n-i <= 0){
                    atari = (moon_n-1 == 0) ? 11 : moon_n-2;

                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[atari]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p][15][1] == tosi[atari]-i+1){
                            box.mainasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[atari]][p]);
                        }
                    }
                }else{
                    for(var p=0; p<sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]].length;p++){
                        if(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p][15][1] == sun_n-i){
                            box.mainasu.push(sinnsuibilist[Object.keys(sinnsuibilist)[moon_n-1]][p]);
                        }
                    }
                }
            break;
        }
    }

    dammset = {
        damm0:[],
        damm1:[],
        damm2:[]
    }
    texta = "";
    textb = "";
    textc = "";
    if(box.macthng.length){
        aaa="";
        twi="";
        icount=0;
        for(var i=0;i<box.macthng.length;i++){
            if(box.macthng[i][2].indexOf('(半改)') != -1){
                dammset.damm0.push(box.macthng[i][2].substring(0,box.macthng[i][2].indexOf('(')));
            }else{
                dammset.damm0.push(box.macthng[i][2]);
            }
            aaa += '☆'+dammset.damm0[i]+'<br>';
            if(icount!=2){
                twi += '☆'+dammset.damm0[i]+'\n';
                icount++;
            }
        }
        texta = '進水日「'+moon_n+'月'+sun_n+'日」の艦船は<br>'+aaa+'…です！';
        tweetset.text1 = '私と同じ誕生日の艦船を探しました！\n\n進水日「'+moon_n+'月'+sun_n+'日」の艦船は…\n'+twi;
    }else{
        texta = '進水日「'+moon_n+'月'+sun_n+'日」の艦船は見つかりませんでした…';
        tweetset.text1 = '私と同じ誕生日の艦船を探しました！\n\n進水日「'+moon_n+'月'+sun_n+'日」の艦船は見つかりませんでした…\n';
    }

    if(box.purasu.length){
        twi="";
        icount=0;
        for(var i=0;i<box.purasu.length;i++){
            if(box.purasu[i][2].indexOf('(半改)') != -1){
                dammset.damm1.push(box.purasu[i][2].substring(0,box.purasu[i][2].indexOf('('))+'('+box.purasu[i][7].substring(5)+')');
            }else{
                dammset.damm1.push(box.purasu[i][2]+'('+box.purasu[i][7].substring(5)+')');
            }
            textb += '☆'+dammset.damm1[i]+'<br>';
            if(icount!=2){
                twi += '☆'+dammset.damm1[i]+'\n';
                icount++;
            }
        }
        tweetset.text2 = twi;
    }

    if(box.mainasu.length){
        twi="";
        icount=0;
        for(var i=0;i<box.mainasu.length;i++){
            if(box.mainasu[i][2].indexOf('(半改)') != -1){
                dammset.damm2.push(box.mainasu[i][2].substring(0,box.mainasu[i][2].indexOf('('))+'('+box.mainasu[i][7].substring(5)+')');
            }else{
                dammset.damm2.push(box.mainasu[i][2]+'('+box.mainasu[i][7].substring(5)+')');
            }
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
    texta+'<br><br>'+'近い艦船だと、<br>'+textb+textc+'…などがいます<br><br>結果をツイートできます。<br>ボタンが現れない時は⇒<span class="retry_b" onclick="twion();">タッチ</span>'
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
       text: tweetset.text1+'\n近いところだと…\n'+tweetset.text2+tweetset.text3+'…などがいます\n\n'+'#アズールレーン'+'\n'+'#アズレン進水日検索'+'\n',
       size: "large",
       hashtags: "",
     });
    });
    }

function sinnsuisort(){
    var settable = document.getElementById("sinnsuibitable");
    settable.textContent = "";
    sinsuikakunou1 = "";
    jinset = [];
    rareset = [];
    kantypeset = [];

    for (var i = 0; i < document.getElementsByName("kuni001").length; i++) {
        if (document.getElementsByName("kuni001")[i].checked) {
            jinset.push(document.getElementsByName("kuni001")[i].value);
        }
    }
    for (var i = 0; i < document.getElementsByName("type001").length; i++) {
        if (document.getElementsByName("type001")[i].checked) {
            kantypeset.push(document.getElementsByName("type001")[i].value);
        }
    }
    for (var i = 0; i < document.getElementsByName("rare001").length; i++) {
        if (document.getElementsByName("rare001")[i].checked) {
            rareset.push(document.getElementsByName("rare001")[i].value);
        }
    }

    for(var i=0; i<sinnsuibikeys.length;i++){
        var sinnsuitannjyou = "進水日";
        switch(sinnsuibikeys[i]){
            case '誕生日':
                sinnsuitannjyou ="誕生日";
                atag1 = 'コラボ艦船の誕生日';
            break;
            case '同じ':
                atag1 = "リトル＆ちゃんズ";
            break;
            case '君が建造':
                atag1 = "未成艦";
            break;
            case '不明':
                atag1 = sinnsuibikeys[i];
            break;
            default:
                atag1 = sinnsuibikeys[i].match(/(\d+)月/)[1]+'月進水の艦船';
            break;
        }

        hako0 = "";
        var template = function(ideta,pdeta){
            if(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][2].indexOf('(半改)')!= -1){
                kanname = sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][2].substring(0,sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][2].indexOf('('));
            }else{
                kanname =sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][2];
            }
            if(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][7].indexOf('誕生日')!= -1){
                sin = sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][7].substring(3);
            }else{
                sin =sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][7];
            }
            
            hako0 += (
                '<tr><td>'+'<a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][10]+'" target="_blank" >'+
                '<img src="http://azroyal.bakufu.org/azpicture/'+kingdeta(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][0])+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][10]+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][10]+'002.png"><br>'+kanname+'</a></td>'+
                '<td>'+
                ' 実装日 '+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][5]+'<br>'+
                ' 改造日 '+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][6]+'<br>'+
                ' 起工日 '+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][13]+'<br>'+
                ' <strong>'+sinnsuitannjyou+' '+sin+'</strong><br>'+
                ' 就役日 '+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][14]+'</td>'+
                '</tr>'
            );
        }

        var rarehanntei = function(ideta,pdeta){
            //改造前のレアリティ
            var res = "";
            if(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][3].indexOf('→')!= -1){
                res = sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][3].substring(0,sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][3].indexOf('→'));
            }else{
                res =sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][3];
            }
    
            if(Object.keys(rareset).length == 0){
                //rare指定なし
                template(ideta,pdeta);
            }else{
                for(var y=0; y<rareset.length; y++){
                    if(res == rareset[y]){
                        //rare指定
                        template(ideta,pdeta);
                    }
                }
            }
        }

        for(var p=0;p<sinnsuibilist[Object.keys(sinnsuibilist)[i]].length;p++){
            //陣営
            if(Object.keys(jinset).length == 0){
                //陣営指定なし
                if(Object.keys(kantypeset).length == 0){
                    //艦種指定なし
                    rarehanntei(i,p);
                }else{
                    //艦種指定
                    for(var r=0; r<kantypeset.length; r++){
                        if(kantypeset[r]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][1]){
                            rarehanntei(i,p);
                        }
                    }
                }
            }else{
                //陣営指定
                for(var j=0; j<jinset.length; j++){
                    if(jinset[j]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][0]){
                        if(Object.keys(kantypeset).length == 0){
                            //艦種指定なし
                            rarehanntei(i,p);
                        }else{
                            //艦種指定
                            for(var r=0; r<kantypeset.length; r++){
                                if(kantypeset[r]==sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][1]){
                                    rarehanntei(i,p);
                                }
                            }
                        }
                    }
                }
            }
        }
        sinsuikakunou1 += (
            '<h2 id="'+sinnsuibikeys[i]+'"><a href="#kan_kensaku">'+atag1+'</a></h2>'+
            '<table id="'+sinnsuibikeys[i]+'table">'+
            hako0+
            '</table>'
        )
    }
    settable.insertAdjacentHTML('beforeend',sinsuikakunou1);
}
function sinnsuibifanc(){
    var settable = document.getElementById("sinnsuibitable");
    settable.textContent = "";
    jinset = [];
    rareset = [];
    kantypeset = [];

    for (var i = 0; i < document.getElementsByName("kuni001").length; i++) {
        document.getElementsByName("kuni001")[i].checked= false;
    }
    for (var i = 0; i < document.getElementsByName("type001").length; i++) {
        document.getElementsByName("type001")[i].checked= false;
    }
    for (var i = 0; i < document.getElementsByName("rare001").length; i++) {
        document.getElementsByName("rare001")[i].checked= false;
    }

    if(sinsuikakunou0 == ""){
        for(var i=0; i<sinnsuibikeys.length;i++){
            var sinnsuitannjyou = "進水日";
            switch(sinnsuibikeys[i]){
                case '誕生日':
                    sinnsuitannjyou ="誕生日";
                    atag1 = 'コラボ艦船の誕生日';
                break;
                case '同じ':
                    atag1 = "リトル＆ちゃんズ";
                break;
                case '君が建造':
                    atag1 = "未成艦";
                break;
                case '不明':
                    atag1 = sinnsuibikeys[i];
                break;
                default:
                    atag1 = sinnsuibikeys[i].match(/(\d+)月/)[1]+'月進水の艦船';
                break;
            }

            hako0 = "";
            for(var p=0;p<sinnsuibilist[Object.keys(sinnsuibilist)[i]].length;p++){
                if(sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].indexOf('(半改)')!= -1){
                    kanname = sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].substring(0,sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].indexOf('('));
                }else{
                    kanname =sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2];
                }
                if(sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][7].indexOf('誕生日')!= -1){
                    sin = sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][7].substring(3);
                }else{
                    sin =sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][7];
                }
                hako0 += (
                    '<tr><td>'+'<a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][10]+'" target="_blank" >'+
                    '<img src="http://azroyal.bakufu.org/azpicture/'+kingdeta(sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][0])+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][10]+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][10]+'002.png"><br>'+kanname+'</a></td>'+
                    '<td>'+
                    ' 実装日 '+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][5]+'<br>'+
                    ' 改造日 '+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][6]+'<br>'+
                    ' 起工日 '+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][13]+'<br>'+
                    ' <strong>'+sinnsuitannjyou+' '+sin+'</strong><br>'+
                    ' 就役日 '+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][14]+
                    '</td></tr>'
                );
            }
            sinsuikakunou0 += (
                '<h2 id="'+sinnsuibikeys[i]+'"><a href="#kan_kensaku">'+atag1+'</a></h2>'+
                '<table id="'+sinnsuibikeys[i]+'table">'+
                hako0+
                '</table>'
            )
        }
    }
    settable.insertAdjacentHTML('beforeend',sinsuikakunou0);
}
var kingdeta = function(jin){
    switch(jin){
        case "ユニオン":
            return "unionset";
        break;
        case "ロイヤル":
            return "royalset";
        break;
        case "重桜":
            return "sakuraempire";
        break;
        case "鉄血":
            return "ironset";
        break;
        default:
            return "allset";
        break;
    }
}
