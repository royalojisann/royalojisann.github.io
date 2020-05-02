var kunilist = [];
var typelist = [];
var rarelist = [];

//キーワードリンク削除
//addEventListener("DOMContentLoaded",function(){var a=document.getElementsByClassName("entry-content");if(a)for(var i=0;i<a.length;i++)for(var b=a[i].getElementsByClassName("keyword");b.length;)b[0].outerHTML=b[0].textContent},!1);

function urlset(){

    kunilist = [];
    typelist = [];
    rarelist = [];
    var set = document.getElementById("tablewaku");
    set.textContent = "";
    var table =document.createElement("table");
    table.id = "kansenn_box";
    var tr = document.createElement("tr");

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

    var imgurl = function(index){

            var td1 = document.createElement("td");
            var anchor = document.createElement("a");
            anchor.href = "https://az-royalojisann.hatenablog.com/entry/az-kokosuki-"+kan_profile[index][10];//https://az-royalojisann.hatenablog.com/entry/az-kokosuki-
            var image = new Image();
            image.src = 'http://azroyal.bakufu.org/azpicture/'+kingdeta(kan_profile[index][0])+'/'+kan_profile[index][10]+'/'+kan_profile[index][10]+'003.png';
            anchor.appendChild(image);
            var kanname = "";
            if(kan_profile[index][2].indexOf('(半改)')!= -1){
                kanname = kan_profile[index][2].substring(0,kan_profile[index][2].indexOf('('));
            }else{
                kanname =kan_profile[index][2];
            }
            anchor.innerHTML += ('<br>'+kanname);
            anchor.target = "_blank";
            //var td2 = document.createElement("td");
            //td2.textContent = kan_profile[index][2];
            td1.appendChild(anchor);
            //tr.appendChild(td1);
            //tr.appendChild(td2);
            table.appendChild(tr.appendChild(td1));
    }

    var rarehanntei = function(index){
        //改造前のレアリティ
        var res = "";
        if(kan_profile[index][3].indexOf('→')!= -1){
            res = kan_profile[index][3].substring(0,kan_profile[index][3].indexOf('→'));
        }else{
            res =kan_profile[index][3];
        }

        if(Object.keys(rarelist).length == 0){
            //rare指定なし
            imgurl(index);
        }else{
            for(var y=0; y<rarelist.length; y++){
                if(res == rarelist[y]){
                    //rare指定
                    imgurl(index);
                }
            }
        }
    }

    for(var i = 0; i<kan_profile.length; i++){
        if(kan_profile[i][12] == "改有り"){
            ;
        }else{
        //陣営
        if(Object.keys(kunilist).length == 0){
            //陣営指定なし
            if(Object.keys(typelist).length == 0){
                //艦種指定なし
                rarehanntei(i);
            }else{
                //艦種指定
                for(var r=0; r<typelist.length; r++){
                    if(typelist[r]==kan_profile[i][1]){
                        rarehanntei(i);
                    }
                }
            }
        }else{
            //陣営指定
            for(var j=0; j<kunilist.length; j++){
                if(kunilist[j]==kan_profile[i][0]){
                    if(Object.keys(typelist).length == 0){
                        //艦種指定なし
                        rarehanntei(i);
                    }else{
                        //艦種指定
                        for(var r=0; r<typelist.length; r++){
                            if(typelist[r]==kan_profile[i][1]){
                                rarehanntei(i);
                            }
                        }
                    }
                }
            }
        }
        }
    }
    set.appendChild(table);
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
