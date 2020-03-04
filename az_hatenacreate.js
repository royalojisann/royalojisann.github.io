var tabledetalist = [];
var target_kansen = "";
var index_n = 0;
window.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById("target_name") != null){
    target_kansen = document.getElementById("target_name").textContent;
    tabledetalist = [];
    for(index_n = 0; index_n < kan_list.length; index_n++){
        if(kan_list[index_n][2]==target_kansen){
            break;
        }
    }
    if(document.getElementsByClassName('entry-content')[0] != null){
        var getclass = document.getElementsByClassName("table-of-contents");
        getclass[0].insertAdjacentHTML('afterend', '<details><summary>もくじ</summary>'+getclass[0].outerHTML+'</details><br>');
        getclass[0].parentNode.removeChild(getclass[0]);
    }
    status_in();
    profile_in();       
    }
});
    
function status_in(){
    if(document.getElementById("target_name") != null){
    tabledetalist = [];
    var target_area = document.getElementById("target_status");
    target_area.textContent="";
    target_area.insertAdjacentHTML("afterbegin",
    '<div class="maintagu_sute">'+
    '<table class="character_deta" style="background: #fffce4;"><tbody>'+
    '<tr><th><span class="deta_seve"></span></th></tr>'+
    '</tbody></table>'+
    '<table class="character_deta" style="background: #fffce4;"><tbody>'+
    '<tr><td style="width:34%;"><span class="deta_seve"></span></td><td style="width:33%;"><span class="deta_seve"></span></td><td style="width:33%;"><span class="deta_seve"></span></td></tr>'+
    '</tbody></table>'+
    '<table class="character_deta"><tbody>'+
    '<tr class="status_deta"><td>耐久</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>装填</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>回避</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>命中</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td></tr>'+
    '<tr class="status_deta"><td>火力</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>雷装</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>航空</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>対空</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td></tr>'+
    '<tr class="status_deta"><td>対潜</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>速力</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>幸運</td><td><span class="deta_seve"></span><span class="soubi_seve"></span></td><td>燃費</td><td><span class="deta_seve"></span></td></tr>'+
    '</tbody></table>'+
    '<table class="character_deta css_setin" style="border-bottom: 1px solid #ddd;"><tbody>'+
    '<tr>'+
    '<td style="background: #ffdfdf;"><span class="deta_seve"></span>'+'<br>'+'<span class="deta_seve"></span></td><td style="background: #ffdfdf;"><span>最大</span>'+'<br>'+'<span class="deta_seve"></span></td>'+
    '<td style="background: #faebd7;"><span class="deta_seve"></span>'+'<br>'+'<span class="deta_seve"></span></td><td style="background: #faebd7;"><span>最大</span>'+'<br>'+'<span class="deta_seve"></span></td>'+
    '<td style="background: #cfdbff;"><span class="deta_seve"></span>'+'<br>'+'<span class="deta_seve"></span></td><td style="background: #cfdbff;"><span>最大</span>'+'<br>'+'<span class="deta_seve"></span></td>'+            
    '</tr>'+
    '</tbody></table>'+
    '</div>'
    );

    var get_level = document.getElementById("lebel_deta");
    var get_kizuna = document.getElementById("kizuna");
    var seve_list = document.getElementsByClassName("maintagu_sute")[0].getElementsByClassName("deta_seve");
    var hairetudeta = [];
    var rensou_hairetudeta = {};
    for(var dd=0; dd<25; dd++){
        switch(dd){
            case 0:
            //艦船名
            hairetudeta.push(kan_list[index_n][2]);
            seve_list[dd].textContent=kan_list[index_n][2];
            break;
            case 1:
            //陣営
            hairetudeta.push(kan_list[index_n][0]);
            seve_list[dd].textContent=kan_list[index_n][0];
            break;
            case 2:
            //艦種
            hairetudeta.push(kan_list[index_n][1]);
            seve_list[dd].textContent=kan_list[index_n][1];
            break;
            case 3:
            //装甲
            hairetudeta.push(kan_list[index_n][66]);
            seve_list[dd].textContent=kan_list[index_n][66];
            break;
            case 4:
            //耐久
            var keisan = (kan_list[index_n][3]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][4]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][5]*1)/1000;
            keisan=keisan+(kan_list[index_n][57]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][44]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.耐久 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 5:
            //装填
            var keisan = (kan_list[index_n][18]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][19]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][20]*1)/1000;
            keisan=keisan+(kan_list[index_n][43]*1);
            keisan=keisan+(kan_list[index_n][62]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][49]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.装填 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 6:
            //回避
            var keisan = (kan_list[index_n][27]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][28]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][29]*1)/1000;
            keisan=keisan+(kan_list[index_n][64]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][52]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.回避 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 7:
            //命中
            var keisan = (kan_list[index_n][24]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][25]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][26]*1)/1000;
            keisan=keisan+(kan_list[index_n][63]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][51]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.命中 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 8:
            //火力
            var keisan = (kan_list[index_n][6]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][7]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][8]*1)/1000;
            keisan=keisan+(kan_list[index_n][39]*1);
            keisan=keisan+(kan_list[index_n][58]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][45]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.火力 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 9:
            //雷装
            var keisan = (kan_list[index_n][9]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][10]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][11]*1)/1000;
            keisan=keisan+(kan_list[index_n][40]*1);
            keisan=keisan+(kan_list[index_n][59]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][46]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.雷装 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 10:
            //航空
            var keisan = (kan_list[index_n][15]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][16]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][17]*1)/1000;
            keisan=keisan+(kan_list[index_n][42]*1);
            keisan=keisan+(kan_list[index_n][61]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][48]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.航空 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 11:
            //対空
            var keisan = (kan_list[index_n][12]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][13]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][14]*1)/1000;
            keisan=keisan+(kan_list[index_n][41]*1);
            keisan=keisan+(kan_list[index_n][60]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][47]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.対空 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 12:
            //対潜
            var keisan = (kan_list[index_n][36]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][37]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][38]*1)/1000;
            keisan=keisan+(kan_list[index_n][65]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[index_n][55]*1);
            keisan=Math.floor(keisan);
            rensou_hairetudeta.対潜 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 13:
            //速力
            var keisan = (kan_list[index_n][30]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][31]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][32]*1)/1000;
            keisan=keisan+(kan_list[index_n][54]*1);
            rensou_hairetudeta.速力 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 14:
            //幸運
            var keisan = (kan_list[index_n][33]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[index_n][34]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[index_n][35]*1)/1000;
            keisan=keisan+(kan_list[index_n][54]*1);
            rensou_hairetudeta.幸運 = keisan;
            seve_list[dd].textContent=keisan;
            break;
            case 15:
            //消費
            rensou_hairetudeta.消費 = kan_list[index_n][77];
            seve_list[dd].textContent=kan_list[index_n][77];
            rensou_hairetudeta.硬直 = kan_list[index_n][76];
            break;
            case 16:
            //主砲系
            hairetudeta.push(kan_list[index_n][67]);
            seve_list[dd].textContent=kan_list[index_n][67];
            break;
            case 17:
            //主砲系
            hairetudeta.push(kan_list[index_n][70]);
            seve_list[dd].textContent=kan_list[index_n][70]+"%";
            break;
            case 18:
            //主砲系
            hairetudeta.push(kan_list[index_n][73]);
            seve_list[dd].textContent=kan_list[index_n][73];
            break;
            case 19:
            //副砲系
            hairetudeta.push(kan_list[index_n][68]);
            seve_list[dd].textContent=kan_list[index_n][68];
            break;
            case 20:
            //副砲系
            hairetudeta.push(kan_list[index_n][71]);
            seve_list[dd].textContent=kan_list[index_n][71]+"%";
            break;
            case 21:
            //副砲系
            hairetudeta.push(kan_list[index_n][74]);
            seve_list[dd].textContent=kan_list[index_n][74];
            break;
            case 22:
            //対空系
            hairetudeta.push(kan_list[index_n][69]);
            seve_list[dd].textContent=kan_list[index_n][69];
            break;
            case 23:
            //対空系
            hairetudeta.push(kan_list[index_n][72]);
            seve_list[dd].textContent=kan_list[index_n][72]+"%";
            break;
            case 24:
            //対空系
            hairetudeta.push(kan_list[index_n][75]);
            seve_list[dd].textContent=kan_list[index_n][75];
            hairetudeta.push(rensou_hairetudeta);
            tabledetalist.push(hairetudeta);//キープエリア艦船ステータス
            break;
        }
    }
    spec_in();
    }
};

function spec_in(){
    var kan_spec = document.getElementById("target_spec");
    kan_spec.textContent="";
    var kan = tabledetalist[0][13];
    var kan_kaihi =Math.floor((1-(0.1+100/(100+kan.回避+2)+(50-kan.幸運+0)/1000))*10000)/100;
    var kan_hit =Math.floor(((0.1+kan.命中/(kan.命中+100+2)+(kan.幸運-50+0)/1000))*10000)/100;
    var kan_crt = Math.floor((0.05+kan.命中*1/(kan.命中*1+100+2000)+(kan.幸運+50+0)/5000)*10000)/100;
    var kan_body = Math.floor(kan.耐久/(1-kan_kaihi/100));

    var texta = '<ul><li><strong>'+target_kansen+'の性能</strong></li><li><strong>回避率</strong>：<strong>'+kan_kaihi+'%</strong></li>';
    var textb = '<li><strong>命中率</strong>：<strong>'+kan_hit+'%</strong></li>';
    var textc = '<li><strong>ＣＲＴ</strong>：<strong>'+kan_crt+'%</strong></li>';
    var textd = '<li><strong>総耐久</strong>：<strong>'+kan_body+'</strong></li></ul>';
    kan_spec.insertAdjacentHTML("afterbegin",texta+textb+textc+textd);
};

function profile_in(){
    var target_profile =document.getElementById("character_profile").getElementsByTagName("td");
    target_profile[1].textContent = kan_profile[index_n][2];//名前
    target_profile[3].textContent = kan_profile[index_n][1];//艦種
    target_profile[5].textContent = kan_profile[index_n][0];//陣営
    target_profile[7].textContent = kan_profile[index_n][3];//レア
    target_profile[9].textContent = kan_profile[index_n][4];//入手
    target_profile[11].textContent = kan_profile[index_n][5];//実装日
    target_profile[13].textContent = kan_profile[index_n][6];//改造日
    target_profile[15].textContent = kan_profile[index_n][7];//進水日
    target_profile[17].textContent="";//ボイス
    target_profile[17].insertAdjacentHTML("afterbegin",kan_profile[index_n][8]);//ボイス
    target_profile[19].textContent="";//イラスト
    target_profile[19].insertAdjacentHTML("afterbegin",kan_profile[index_n][9]);//イラスト
};

function click_button(getid){
    if(document.getElementById(getid) != null){
        var id_deta = document.getElementById(getid);
        if(id_deta.style.display=="none"){
            id_deta.style.display="block";
        }else{
        id_deta.style.display="none";
        }
    }
};
