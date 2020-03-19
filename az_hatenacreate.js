var status_deta = {};
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
    status_in();
    profile_in();
    }
});

    if(document.getElementsByClassName('entry-content')[0] != null){
        if(document.getElementsByClassName('table-of-contents')[0] != null){
            var getclass = document.getElementsByClassName("table-of-contents");
            getclass[0].insertAdjacentHTML('afterend', '<details><summary>もくじ</summary>'+getclass[0].outerHTML+'</details><br>');
            getclass[0].parentNode.removeChild(getclass[0]);
        }
    }

function status_in(){
    if(document.getElementById("target_name") != null){
    var target_area = document.getElementById("target_status");
    target_area.textContent="";

    var get_level = document.getElementById("lebel_deta").value*1;
    var get_kizuna = document.getElementById("kizuna").value*1;
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
    };
    //耐久
    var keisan = (kan_list[index_n][3]*1);
        keisan+=(get_level-1)*(kan_list[index_n][4]*1)/1000;
        keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][5]*1)/1000;
        keisan+=(kan_list[index_n][57]*1);
        keisan*=(get_kizuna);
        keisan+=(kan_list[index_n][44]*1);
        status_deta.耐久=Math.floor(keisan);
    //装填
    var keisan = (kan_list[index_n][18]*1);
        keisan+=(get_level-1)*(kan_list[index_n][19]*1)/1000;
        keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][20]*1)/1000;
        keisan+=(kan_list[index_n][43]*1);
        keisan+=(kan_list[index_n][62]*1);
        keisan*=(get_kizuna);
        keisan+=(kan_list[index_n][49]*1);
        status_deta.装填=Math.floor(keisan);
    //回避
    var keisan = (kan_list[index_n][27]*1);
        keisan+=(get_level-1)*(kan_list[index_n][28]*1)/1000;
        keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][29]*1)/1000;
        keisan+=(kan_list[index_n][64]*1);
        keisan*=(get_kizuna);
        keisan+=(kan_list[index_n][52]*1);
        status_deta.回避=Math.floor(keisan);
    //命中
    var keisan = (kan_list[index_n][24]*1);
    keisan+=(get_level-1)*(kan_list[index_n][25]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][26]*1)/1000;
    keisan+=(kan_list[index_n][63]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][51]*1);
    status_deta.命中=Math.floor(keisan);
    //火力
    var keisan = (kan_list[index_n][6]*1);
    keisan+=(get_level-1)*(kan_list[index_n][7]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][8]*1)/1000;
    keisan+=(kan_list[index_n][39]*1);
    keisan+=(kan_list[index_n][58]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][45]*1);
    status_deta.火力=Math.floor(keisan);
    //雷装
    var keisan = (kan_list[index_n][9]*1);
    keisan+=(get_level-1)*(kan_list[index_n][10]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][11]*1)/1000;
    keisan+=(kan_list[index_n][40]*1);
    keisan+=(kan_list[index_n][59]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][46]*1);
    status_deta.雷装=Math.floor(keisan);
    //航空
    var keisan = (kan_list[index_n][15]*1);
    keisan+=(get_level-1)*(kan_list[index_n][16]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][17]*1)/1000;
    keisan+=(kan_list[index_n][42]*1);
    keisan+=(kan_list[index_n][61]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][48]*1);
    status_deta.航空=Math.floor(keisan);
    //対空
    var keisan = (kan_list[index_n][12]*1);
    keisan+=(get_level-1)*(kan_list[index_n][13]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][14]*1)/1000;
    keisan+=(kan_list[index_n][41]*1);
    keisan+=(kan_list[index_n][60]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][47]*1);
    status_deta.対空=Math.floor(keisan);
    //対潜
    var keisan = (kan_list[index_n][36]*1);
    keisan+=(get_level-1)*(kan_list[index_n][37]*1)/1000;
    keisan+=(Math.max(get_level,100)-100)*(kan_list[index_n][38]*1)/1000;
    keisan+=(kan_list[index_n][65]*1);
    keisan*=(get_kizuna);
    keisan+=(kan_list[index_n][55]*1);
    status_deta.対潜=Math.floor(keisan);
    //速力
    var keisan = (kan_list[index_n][30]*1)+(kan_list[index_n][53]*1);
    status_deta.速力 = keisan;
    //幸運
    var keisan = (kan_list[index_n][33]*1)+(kan_list[index_n][54]*1);
    status_deta.幸運 = keisan;
        
    var status_in = 
    '<div class="maintagu_sute" style="font-weight: bold;"><table class="character_deta"><tbody>\n'+
    '<tr><th colspan="3">'+status_deta.名前+'</th></tr>\n'+
    '<tr><th style="width:34%;">'+status_deta.陣営+'</th><th style="width:33%;">'+status_deta.艦種+'</th><th style="width:33%;">'+status_deta.装甲+'</th></tr>\n'+
    '</tbody></table>\n'+
    '<table class="character_deta"><tbody>\n'+
    '<tr class="status_deta"><td>耐久</td><td>'+status_deta.耐久+'</td><td>装填</td><td>'+status_deta.装填+'</td><td>回避</td><td>'+status_deta.回避+'</td><td>命中</td><td>'+status_deta.命中+'</td></tr>\n'+
    '<tr class="status_deta"><td>火力</td><td>'+status_deta.火力+'</td><td>雷装</td><td>'+status_deta.雷装+'</td><td>航空</td><td>'+status_deta.航空+'</td><td>対空</td><td>'+status_deta.対空+'</td></tr>\n'+
    '<tr class="status_deta"><td>対潜</td><td>'+status_deta.対潜+'</td><td>速力</td><td>'+status_deta.速力+'</td><td>幸運</td><td>'+status_deta.幸運+'</td><td>燃費</td><td>'+status_deta.消費+'</td></tr>\n'+
    '</tbody></table>\n'+
    '<table class="character_deta" style="background: #fff0c4; border-bottom: 1px solid #ddd;"><tbody><tr>'+
    '<td>'+status_deta.主砲装備+status_deta.主砲補正+'％<br>最大'+status_deta.主砲砲座+'</td>\n'+
    '<td>'+status_deta.副砲装備+status_deta.副砲補正+'％<br>最大'+status_deta.副砲砲座+'</td>\n'+
    '<td>'+status_deta.対空装備+status_deta.対空補正+'％<br>最大'+status_deta.対空砲座+'</td>\n'+
    '</tr>\n'+
    '</tbody></table></div>';
        
    target_area.insertAdjacentHTML("afterbegin",status_in);
        
    spec_in();
    }
};

function spec_in(){
    var kan_spec = document.getElementById("target_spec");
    kan_spec.textContent="";
    //性能測定
    var kan_kaihi =Math.floor((1-(0.1+100/(100+status_deta.回避+2)+(50-status_deta.幸運+0)/1000))*10000)/100;
    var kan_hit =Math.floor(((0.1+status_deta.命中/(status_deta.命中+100+2)+(status_deta.幸運-50+0)/1000))*10000)/100;
    var kan_crt = Math.floor((0.05+status_deta.命中*1/(status_deta.命中*1+100+2000)+(status_deta.幸運+50+0)/5000)*10000)/100;
    var kan_body = Math.floor(status_deta.耐久/(1-kan_kaihi/100));

    var spec_in = '<ul>'+'\n'+
    '<li><strong>'+status_deta.名前+'の性能</strong></li>'+'\n'+
    '<li><strong>回避率</strong>：<strong>'+kan_kaihi+'%</strong></li>'+'\n'+
    '<li><strong>命中率</strong>：<strong>'+kan_hit+'%</strong></li>'+'\n'+
    '<li><strong>ＣＲＴ</strong>：<strong>'+kan_crt+'%</strong></li>'+'\n'+
    '<li><strong>総耐久</strong>：<strong>'+kan_body+'</strong></li>'+'\n'+
    '</ul>\n';
    kan_spec.insertAdjacentHTML("afterbegin",spec_in);
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
