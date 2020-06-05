var jinei_deta = {
    ロイヤル:[],
    ユニオン:[],
    重桜:[],
    鉄血:[],
    アイリス:[],
    ヴィシア:[],
    サディア:[],
    東煌:[],
    北連:[],
    ネプテューヌ:[],
    kizunaai:[],
    うたわれるもの:[],
    ホロライブ:[],
    その他:[],
};
var jineikeys = Object.keys(jinei_deta);
var korabo = ['ネプテューヌ','kizunaai','うたわれるもの','ホロライブ','その他'];
var kunilist = [],typelist = [],rarelist = [];
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

window.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < document.getElementsByName("kuni").length; i++) {
        if (document.getElementsByName("kuni")[i].checked) {
            kunilist.push(document.getElementsByName("kuni")[i].value)
        }
    }

    for(var i=0;i<kan_profile.length;i++){
        if(kan_profile[i][12] == "有り" || kan_profile[i][12] == "暫定"){
            if(kan_profile[i][2].indexOf('(半改)')!= -1){
                kan_profile[i][2] = kan_profile[i][2].substring(0,kan_profile[i][2].indexOf('('));
            }
            if(kan_profile[i][3].indexOf('→')!= -1){
                kan_profile[i][3] = kan_profile[i][3].substring(0,kan_profile[i][3].indexOf('→'));
            }
            
            for(var p=0;p<jineikeys.length;p++){
                if(jineikeys[p] == kan_profile[i][0]){
                    kan_profile[i].push('<td style="display: inline-table;"><a href="https://az-royalojisann.hatenablog.com/entry/az-kokosuki-'+kan_profile[i][10]+'" target="_blank" >'+
                    '<img data-src="http://azroyal.bakufu.org/azpicture/'+kingdeta(kan_profile[i][0])+'/'+kan_profile[i][10]+'/'+kan_profile[i][10]+'003.png" class="lozad" alt="'+kan_profile[i][2]+'"/><br>'+
                    kan_profile[i][2]+'</a></td>');
                    jinei_deta[jineikeys[p]].push(kan_profile[i]);
                }
            }
        }
    }
    var tdlist = document.getElementById("kansenn_box").getElementsByTagName("td");
    var tuikayouso = "";
    for(var d=0;d<(jinei_deta[kunilist].length-tdlist.length);d++){
        tuikayouso += (jinei_deta[kunilist][tdlist.length+d][jinei_deta[kunilist][tdlist.length+d].length-1]);
    }
    document.getElementById("kansenn_box").getElementsByTagName("tr")[0].insertAdjacentHTML('beforeend',tuikayouso);

});

function urlset(){
    kunilist = [];
    typelist = [];
    rarelist = [];

    for (var i = 0; i < document.getElementsByName("kuni").length; i++) {
        if (document.getElementsByName("kuni")[i].checked) {
            kunilist.push(document.getElementsByName("kuni")[i].value)
        }
    }
    for (var i = 0; i < document.getElementsByName("type").length; i++) {
        if (document.getElementsByName("type")[i].checked) {
            typelist.push(document.getElementsByName("type")[i].value)
        }
      }
    for (var i = 0; i < document.getElementsByName("rare").length; i++) {
        if (document.getElementsByName("rare")[i].checked) {
            rarelist.push(document.getElementsByName("rare")[i].value)
        }
    }

    var rarehanntei = function(index){    
        if(Object.keys(rarelist).length == 0){
            //rare指定なし
            document.getElementById("kansenn_box").getElementsByTagName("td")[index].style.display="inline-table";
        }else{
            for(var y=0; y<rarelist.length; y++){
                if(jinei_deta[kunilist[0]][i][3] == rarelist[y]){
                    //rare指定
                    document.getElementById("kansenn_box").getElementsByTagName("td")[index].style.display="inline-table";
                }
            }
        }
    }

    for(var i = 0; i<jinei_deta[kunilist[0]].length; i++){
        document.getElementById("kansenn_box").getElementsByTagName("td")[i].style.display="none";
        //陣営
        if(Object.keys(kunilist).length == 0){
            //陣営指定なし
            if(Object.keys(typelist).length == 0){
                //艦種指定なし
                rarehanntei(i);
            }else{
                //艦種指定
                for(var r=0; r<typelist.length; r++){
                    if(typelist[r]==jinei_deta[kunilist[0]][i][1]){
                        rarehanntei(i);
                    }
                }
            }
        }else{
            //陣営指定
            for(var j=0; j<kunilist.length; j++){
                if(kunilist[j]==jinei_deta[kunilist[0]][i][0]){
                    if(Object.keys(typelist).length == 0){
                        //艦種指定なし
                        rarehanntei(i);
                    }else{
                        //艦種指定
                        for(var r=0; r<typelist.length; r++){
                            if(typelist[r]==jinei_deta[kunilist[0]][i][1]){
                                rarehanntei(i);
                            }
                        }
                    }
                }
            }
        }
    }
}
