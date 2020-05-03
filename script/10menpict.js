var kunilist = [];
var typelist = [];
var rarelist = [];

var get_pict_index = 0;
var get_sentakuwaku = "清純派";
var get_image = 0;

function pictset(button){
    get_pict_index = $(document.getElementsByClassName("pict_area")).index(button);//インデックス番号を取得
    get_sentakuwaku = document.getElementsByName("sabtitle")[get_pict_index].value;
    document.getElementById("centertxt").value = get_sentakuwaku;
}

function subtitle_in(){
    get_sentakuwaku = document.getElementsByName("sabtitle")[get_pict_index].value = document.getElementById("centertxt").value;

}

function zenngo(atai){
    if(atai == "tugibotann"){
        get_pict_index+=1;
        if(get_pict_index == 10){
            get_pict_index = 0;
        }
    }else{
        get_pict_index -= 1;
        if(get_pict_index == -1){
            get_pict_index = 9;
        }
    }
    get_sentakuwaku = document.getElementsByName("sabtitle")[get_pict_index].value;
    document.getElementById("centertxt").value = get_sentakuwaku;
}

function picget(){
    kunilist = [];
    typelist = [];
    rarelist = [];
    var set = document.getElementById("tablewaku3");
    set.textContent = "";
    var table =document.createElement("table");
    table.id = "kansenn_box3";
    var tr = document.createElement("tr");

    for (var i = 0; i < document.getElementsByName("kuni3").length; i++) {
        if (document.getElementsByName("kuni3")[i].checked) {
            kunilist.push(document.getElementsByName("kuni3")[i].value)
        }
    }
    for (var i = 0; i < document.getElementsByName("type3").length; i++) {
        if (document.getElementsByName("type3")[i].checked) {
            typelist.push(document.getElementsByName("type3")[i].value)
        }
      }
    for (var i = 0; i < document.getElementsByName("rare3").length; i++) {
        if (document.getElementsByName("rare3")[i].checked) {
            rarelist.push(document.getElementsByName("rare3")[i].value)
        }
    }

    var imgurl = function(index){
            var td1 = document.createElement("td");
            //var anchor = document.createElement("a");
            //anchor.href = "https://az-royalojisann.hatenablog.com/entry/az-kokosuki-"+kan_profile[index][10];//https://az-royalojisann.hatenablog.com/entry/az-kokosuki-
            var image = new Image();
            image.src = 'http://azroyal.bakufu.org/azpicture/'+kingdeta(kan_profile[index][0])+'/'+kan_profile[index][10]+'/'+kan_profile[index][10]+'003.png';
            image.classList = "sentaku_pict";
            //anchor.appendChild(image);
            //anchor.innerHTML += ('<br>'+kan_profile[index][2]);
            //anchor.target = "_blank";
            //var td2 = document.createElement("td");
            //td2.textContent = kan_profile[index][2];
            //td1.appendChild(anchor);
            //tr.appendChild(td1);
            //tr.appendChild(td2);

            td1.appendChild(image);
            td1.innerHTML += ('<br>'+kan_profile[index][2]);//非url
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

    set.appendChild(table);
    var imagetag = document.getElementsByClassName("sentaku_pict");
    for(var pp = 0; pp<imagetag.length; pp++){
        imagetag[pp].onclick = function(e){
            get_image = $('.sentaku_pict').index(this);
            clone = document.getElementsByClassName("sentaku_pict")[get_image].cloneNode(true);
            document.getElementsByClassName("pict_area")[get_pict_index].textContent ="";
            document.getElementsByClassName("pict_area")[get_pict_index].appendChild(clone);
        }
    }
}

function loadpic(){
    var picclass = document.getElementsByClassName("pict_area");
    var txtclass = document.getElementsByName("sabtitle");
    var ctx = document.getElementById('canvas3').getContext('2d');
    var ctx2 = document.getElementById('canvas3').getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "rgba("+255+","+255+","+255+",1)";//白背景
    ctx.fillRect(0,0,1280,640);

    // text
    var titleFontFamily = 'YuMincho'; // フォントの指定
    var titleFontSize = 40; //フォントサイズ
    ctx.font = 'bold ' + titleFontSize + 'px ' + titleFontFamily; //太字
    ctx.textAlign = 'center'; //中央揃え
    ctx.fillStyle = "black";

    //枠色を指定
    ctx2.strokeStyle="blue";  //線の色を青に指定

    for(var i=0; i<picclass.length/2; i++){
        if(picclass[i].getElementsByClassName("sentaku_pict")[0] != null ){
            imgtop = picclass[i].getElementsByClassName("sentaku_pict")[0];
            ctx.drawImage(imgtop, (10+(10*i))+(244*i), 10 ,244,244);

            txttop = txtclass[i].value;
            ctx.fillText(txttop, (10+(10*i))+(122+(244*i)), 304, 244, 76);
        }
        ctx2.strokeRect((10+(10*i))+(244*i), 10 ,244,244);

        if(picclass[5+i].getElementsByClassName("sentaku_pict")[0] != null ){
            imgbottom = picclass[5+i].getElementsByClassName("sentaku_pict")[0];
            ctx.drawImage(imgbottom, (10+(10*i))+(244*i), 325,244,244);

            txttop = txtclass[5+i].value;
            ctx.fillText(txttop, (10+(10*i))+(122+(244*i)), 619, 244, 76);
        }
        ctx2.strokeRect((10+(10*i))+(244*i), 325,244,244);
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
