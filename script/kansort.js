var kunilist = [];
var typelist = [];
var rarelist = [];
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
                if(kan_profile[i][3] == rarelist[y]){
                    //rare指定
                    document.getElementById("kansenn_box").getElementsByTagName("td")[index].style.display="inline-table";
                }
            }
        }
    }
    for(var i = 0; i<kan_profile.length; i++){
        document.getElementById("kansenn_box").getElementsByTagName("td")[i].style.display="none";
        if(kan_profile[i][12] == "有り"||"暫定"){
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
}
