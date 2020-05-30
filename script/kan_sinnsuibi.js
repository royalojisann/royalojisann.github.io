var sinnsuibilist = {年1月:[],年2月:[],年3月:[],年4月:[],年5月:[],年6月:[],年7月:[],年8月:[],年9月:[],年10月:[],年11月:[],年12月:[],誕生日:[],同じ:[],君が建造:[],不明:[]};
var sinnsuibikeys = Object.keys(sinnsuibilist);
var jinset = [];
var rareset = [];
var kantypeset = [];
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
function sinnsuisort(){
    var settable = document.getElementById("sinnsuibitable");
    settable.textContent = "";
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
        var h3deta = document.createElement("h3");
        h3deta.id = sinnsuibikeys[i];
        var atag1 = document.createElement("a");
        atag1.href = "#sinnsuibitable";
        var sinnsuitannjyou = "進水日";
        switch(sinnsuibikeys[i]){
            case '誕生日':
                sinnsuitannjyou ="誕生日";
                atag1.textContent = 'コラボ艦船の誕生日';
            break;
            case '同じ':
                atag1.textContent = "リトル＆ちゃんズ";
            break;
            case '君が建造':
                atag1.textContent = "未成艦";
            break;
            case '不明':
                atag1.textContent = sinnsuibikeys[i];
            break;
            default:
                atag1.textContent = sinnsuibikeys[i].match(/(\d+)月/)[1]+'月進水の艦船';
            break;
        }
        h3deta.appendChild(atag1)
        settable.appendChild(h3deta);
        var cretable = document.createElement("table");
        cretable.id= sinnsuibikeys[i]+"table";
        settable.appendChild(cretable);
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
            document.getElementById(sinnsuibikeys[ideta]+"table").insertAdjacentHTML('beforeend','<tr>'+
            '<td>'+'<a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][12]+'" target="_blank" >'+
            '<img src="http://azroyal.bakufu.org/azpicture/'+kingdeta(sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][0])+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][10]+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][10]+'002.png"><br>'+kanname+'</a>'+
            '</td>'+
            '<td>'+
            ' 実装日　'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][5]+'<br>'+
            ' 改造日　'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][6]+'<br>'+
            ' 起工日　'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][13]+'<br>'+
            ' <strong>'+sinnsuitannjyou+'　'+sin+'</strong><br>'+
            ' 就役日　'+sinnsuibilist[Object.keys(sinnsuibilist)[ideta]][pdeta][14]+'</td>'+
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
    }
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

    for(var i=0; i<sinnsuibikeys.length;i++){
        var h3deta = document.createElement("h3");
        h3deta.id = sinnsuibikeys[i];
        var atag1 = document.createElement("a");
        atag1.href = "#sinnsuibitable";

        var sinnsuitannjyou = "進水日";
        switch(sinnsuibikeys[i]){
            case '誕生日':
                sinnsuitannjyou ="誕生日";
                atag1.textContent = sinnsuibikeys[i];
            break;
            case '同じ':
                atag1.textContent = "リトル＆ちゃんズ";
            break;
            case '君が建造':
                atag1.textContent = "未成艦";
                atag1.textContent = sinnsuibikeys[i];
            break;
            case '不明':
                atag1.textContent = sinnsuibikeys[i];
            break;
            default:
                atag1.textContent = sinnsuibikeys[i].match(/(\d+)月/)[1]+'月進水の艦船';
            break;
        }

        h3deta.appendChild(atag1)
        settable.appendChild(h3deta);
        var cretable = document.createElement("table");
        cretable.id= sinnsuibikeys[i]+"table";
        settable.appendChild(cretable);
        for(var p=0;p<sinnsuibilist[Object.keys(sinnsuibilist)[i]].length;p++){
            if(sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].indexOf('(半改)')!= -1){
                kanname = sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].substring(0,sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2].indexOf('('));
            }else{
                kanname =sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][2];
            }
            document.getElementById(sinnsuibikeys[i]+"table").insertAdjacentHTML('beforeend','<tr>'+
            '<td>'+'<a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][12]+'" target="_blank" >'+
            '<img src="http://azroyal.bakufu.org/azpicture/'+kingdeta(sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][0])+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][10]+'/'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][10]+'002.png"><br>'+kanname+'</a>'+
            '</td>'+
            '<td>'+
            ' 実装日　'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][5]+'<br>'+
            ' 改造日　'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][6]+'<br>'+
            ' 起工日　'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][13]+'<br>'+
            ' <strong>'+sinnsuitannjyou+'　'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][7]+'</strong><br>'+
            ' 就役日　'+sinnsuibilist[Object.keys(sinnsuibilist)[i]][p][14]+'</td>'+
            '</tr>'
            );
        }
    }
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
