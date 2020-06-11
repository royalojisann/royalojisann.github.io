var status_deta = {};
var target_kansen = "";
var index_n = 0;
window.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById("target_name") != null){
      target_kansen = document.getElementById("target_name").textContent;
      for(index_n = 0; index_n < kan_list.length; index_n++){
        if(kan_list[index_n][2]==target_kansen){
          var areatd = document.getElementById("character_profile_table").getElementsByTagName("td");
          areatd[3].textContent = kan_profile[index_n][1];
          areatd[5].textContent = kan_profile[index_n][0];
          areatd[7].textContent = kan_profile[index_n][3];
          areatd[9].textContent = kan_profile[index_n][4];
          areatd[11].textContent = kan_profile[index_n][5];
          areatd[13].textContent = kan_profile[index_n][6];
          areatd[15].textContent = kan_profile[index_n][13];
          areatd[17].textContent = kan_profile[index_n][7];
          areatd[19].textContent = kan_profile[index_n][14];
            
          areatd[21].textContent = "";
          areatd[23].textContent = "";
          areatd[21].insertAdjacentHTML("beforeend",kan_profile[index_n][8]);
          areatd[23].insertAdjacentHTML("beforeend",kan_profile[index_n][9]);
          status_in();
          break;
        }
      }
    }
});

function status_in(){
if(document.getElementById("target_name") != null){
    var target_area = document.getElementById("target_status");
    
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
        はてな:kan_profile[index_n][16],
    };

    switch(status_deta.記事){
        case '暫定':
        case '無し':
            for(var pr=0; pr<pr_kansenn.length;pr++){
                if(pr_kansenn[pr][2]==status_deta.名前){
                    status_deta.名前=kan_list[index_n][2]+'(暫定120愛)';
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
            var get_level = document.getElementById("lebel_deta").value*1;
            var get_kizuna = document.getElementById("kizuna").value*1;
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
        break;
    }
    var thget = document.getElementById("target_status").getElementsByTagName("th");
    var tdget = document.getElementById("target_status").getElementsByTagName("td");
    thget[0].getElementsByTagName("img")[0].src=status_deta.はてな[1];
    thget[1].textContent = status_deta.名前;
    thget[2].textContent = status_deta.レア;
    thget[3].textContent = status_deta.艦種;
    thget[4].textContent = status_deta.陣営;
    thget[5].textContent = status_deta.装甲;
    
    tdget[1].textContent = status_deta.耐久;
    tdget[3].textContent = status_deta.装填;
    tdget[5].textContent = status_deta.回避;
    tdget[7].textContent = status_deta.命中;
    tdget[9].textContent = status_deta.火力;
    tdget[11].textContent = status_deta.雷装;
    tdget[13].textContent = status_deta.航空;
    tdget[15].textContent = status_deta.対空;
    if(status_deta.艦種 == "潜水" || status_deta.艦種 == "潜母"){
      tdget[16].textContent = "潜航";
    }
    tdget[17].textContent = status_deta.対潜;
    tdget[19].textContent = status_deta.速力;
    tdget[21].textContent = status_deta.幸運;
    tdget[23].textContent = status_deta.消費;
    
    tdget[24].textContent = "";
    tdget[25].textContent = "";
    tdget[26].textContent = "";
    
    tdget[24].insertAdjacentHTML("beforeend",status_deta.主砲装備+status_deta.主砲補正+'％<br>最大'+status_deta.主砲砲座);
    tdget[25].insertAdjacentHTML("beforeend",status_deta.副砲装備+status_deta.副砲補正+'％<br>最大'+status_deta.副砲砲座);
    tdget[26].insertAdjacentHTML("beforeend",status_deta.対空装備+status_deta.対空補正+'％<br>最大'+status_deta.対空砲座);
        
    var kan_kaihi =Math.floor((1-(0.1+100/(100+status_deta.回避+2)+(50-status_deta.幸運+0)/1000))*10000)/100;
    var kan_hit =Math.floor(((0.1+status_deta.命中/(status_deta.命中+100+2)+(status_deta.幸運-50+0)/1000))*10000)/100;
    var kan_crt = Math.floor((0.05+status_deta.命中*1/(status_deta.命中*1+100+2000)+(status_deta.幸運+50+0)/5000)*10000)/100;
    var kan_body = Math.floor(status_deta.耐久/(1-kan_kaihi/100));
        
    var kan_spec = document.getElementById("specdeta").getElementsByTagName("td");
    kan_spec[1].textContent = kan_kaihi+'%';
    kan_spec[3].textContent = kan_hit+'%';
    kan_spec[5].textContent = kan_crt+'%';
    kan_spec[7].textContent = kan_body;
}
};
