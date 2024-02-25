
var maincategory = "全て";
var subcategory = "全て";
var sutecategory = "無し";
var sutelist = [];//ランキング
var tablecount = 0;
var tabledetalist = [];//キープエリア艦船ステータス
//list: 0 name: "アマゾン" number: "23" soubi01: "主砲" soubi02: "魚雷" soubi03: "対空" soubi04: "設備" soubi05: "設備" type: "駆逐"

var kan_soubi_deta = [];//艦船の詳細設定
var deta_get_seve = [];//kan_soubi_01

var get_level = document.getElementById("lebel_deta");
var get_kizuna = document.getElementById("kizuna");

var soubi_open_now = "";//現在開いている装備枠の要素を取得
var sentaku_index = "";//選択中の装備枠からインデックス番号を取得

//ランキングページ
function list_deta(detaname,root){
    var mainpage = document.getElementById("main_pageon");
    get_level = document.getElementById("lebel_deta");
    get_kizuna = document.getElementById("kizuna");
    mainpage.textContent="";
    sutelist = [];
    switch(root){
        case 1:
        maincategory = detaname.value;
        break;
        case 2:
        subcategory = detaname.value;
        break;
        case 3:
        sutecategory = detaname.value;
        document.getElementById("status_category").textContent = detaname.value;
        break;
        case 10:
        ;
        break;
    }
    var Create_deta = function () {

        for(var tt=0; tt<sutelist.length; tt++){
            if(tt>document.getElementById("kazu_input").value*1-1){
                break;
            }else{
            
            var create_div　= document.createElement("tr");//枠
            //create_div.classList = "kan_div_create";
            var create_span　= document.createElement("td");//数値ランク
            //create_span.classList = "kan_ranku";
            create_span.textContent = tt+1;
            create_div.appendChild(create_span);
            var create_button　= document.createElement("td");//艦船名
            //create_button.type = 'button';
            //create_button.id = sutelist[tt].name;
            //create_button.classList = "kan_namedeta";
            //create_button.value = sutelist[tt].kan_number;
            create_button.textContent = sutelist[tt].name;

            // switch(sutelist[tt].jinei){
            //     case "ロイヤル":
            //     create_button.style.background="rgb(255, 241, 218)";
            //     create_button.style.borderBottom="4px solid rgb(255, 156, 10)";
            //     break;
            //     case "ユニオン":
            //     create_button.style.background="rgb(232, 243, 255)";
            //     create_button.style.borderBottom="4px solid dodgerblue";
            //     break;
            //     case "重桜":
            //     create_button.style.background="rgb(255, 228, 214)";
            //     create_button.style.borderBottom="4px solid tomato";
            //     break;
            //     case "鉄血":
            //     create_button.style.background="#e7e7e7";
            //     create_button.style.borderBottom="4px solid dimgray";
            //     break;
            //     default:
            //     create_button.style.background="#e0e8ff";
            //     create_button.style.borderBottom="4px solid #596899";
            //     break;
            // }

            // create_button.onclick = function() {
            //     soubi_template();//ステータスtable
            //     kan_soubi_deta.push([{page:1},{kan_soubi_01:soubi_list_deta[0]},{kan_soubi_02:soubi_list_deta[0]},{kan_soubi_03:soubi_list_deta[0]},{kan_soubi_04:soubi_list_deta[0]},{kan_soubi_05:soubi_list_deta[0]}]);
            //     deta_get_seve.push([{page:1},[{name:'名前',弾種:'弾種',威力:10,補正:100,軽装甲:100,中装甲:100,重装甲:100,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0,root:0,サブ1:{弾種:'弾種',威力:0,補正:0,軽装甲:0,中装甲:0,重装甲:0,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0}},{Lv差:0,手動:0,武器:0},{メイン合計:0,陣形:{陣形:'陣形無',陣形火力:0,陣形雷装:0,陣形対空:0},陣形効果:"補正無",PS:0,PS設備:0,PS固定:0,メインバフ:0,特別加算:0,修正:100},{弾薬:'弾薬１～３',弾薬補正:0,強化:0,弱体:0,対艦:0,特化:0,防空ボタン:'防空無',防空:50,対空:0},{クリティカル:'CRT無',クリティカル補正:50,自由1:0,自由2:0,自由3:0,自由4:0},{リロード:0,装備前攻速:1,装備後攻速:0,硬直:0,短縮:0}],[{name:'名前',弾種:'弾種',威力:10,補正:100,軽装甲:100,中装甲:100,重装甲:100,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0,root:0,サブ1:{弾種:'弾種',威力:0,補正:0,軽装甲:0,中装甲:0,重装甲:0,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0}},{Lv差:0,手動:0,武器:0},{メイン合計:0,陣形:{陣形:'陣形無',陣形火力:0,陣形雷装:0,陣形対空:0},陣形効果:"補正無",PS:0,PS設備:0,PS固定:0,メインバフ:0,特別加算:0,修正:100},{弾薬:'弾薬１～３',弾薬補正:0,強化:0,弱体:0,対艦:0,特化:0,防空ボタン:'防空無',防空:50,対空:0},{クリティカル:'CRT無',クリティカル補正:50,自由1:0,自由2:0,自由3:0,自由4:0},{リロード:0,装備前攻速:1,装備後攻速:0,硬直:0,短縮:0}],[{name:'名前',弾種:'弾種',威力:10,補正:100,軽装甲:100,中装甲:100,重装甲:100,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0,root:0,サブ1:{弾種:'弾種',威力:0,補正:0,軽装甲:0,中装甲:0,重装甲:0,ヒット:1,軽ヒット:0,中ヒット:0,重ヒット:0,ダメ:1,軽ダメ:0,中ダメ:0,重ダメ:0}},{Lv差:0,手動:0,武器:0},{メイン合計:0,陣形:{陣形:'陣形無',陣形火力:0,陣形雷装:0,陣形対空:0},陣形効果:"補正無",PS:0,PS設備:0,PS固定:0,メインバフ:0,特別加算:0,修正:100},{弾薬:'弾薬１～３',弾薬補正:0,強化:0,弱体:0,対艦:0,特化:0,防空ボタン:'防空無',防空:50,対空:0},{クリティカル:'CRT無',クリティカル補正:50,自由1:0,自由2:0,自由3:0,自由4:0},{リロード:0,装備前攻速:1,装備後攻速:0,硬直:0,短縮:0}],{装填合計:0,装填:0,装填設備:0,装填固定:0,装填バフ:0,},{Lv差おまけ:0,回避合計:0,回避率:0,回避:0,回避設備:0,回避固定:0,回避バフ:0,最終回避:0,命中合計:0,命中率:0,命中:0,命中設備:0,命中固定:0,命中バフ:0,最終命中:0,幸運合計:0,クリティカル率:0,幸運:0,幸運設備:0,幸運固定:0,耐久合計:0,総耐久:0,耐久:0,耐久設備:0,耐久固定:0,回復割合:0,軽減:0,耐久回避:1,}]);

            //     var seve_list = document.getElementsByClassName("maintagu_sute")[tablecount].getElementsByClassName("deta_seve");
            //     tablecount++;
            //     var hairetudeta = [];
            //     var rensou_hairetudeta = {};
            //     var kan_hairetudeta = [];
            //     for(var dd=0; dd<25; dd++){
            //         switch(dd){
            //             case 0:
            //             //艦船名
            //             hairetudeta.push(kan_list[this.value][2]);
            //             kan_hairetudeta.number=this.value;
            //             kan_hairetudeta.name=kan_list[this.value][2];
            //             seve_list[dd].textContent=kan_list[this.value][2];
            //             break;
            //             case 1:
            //             //陣営
            //             hairetudeta.push(kan_list[this.value][0]);
            //             seve_list[dd].textContent=kan_list[this.value][0];
            //             break;
            //             case 2:
            //             //艦種
            //             hairetudeta.push(kan_list[this.value][1]);
            //             kan_hairetudeta.type=kan_list[this.value][1];
            //             seve_list[dd].textContent=kan_list[this.value][1];
            //             break;
            //             case 3:
            //             //装甲
            //             hairetudeta.push(kan_list[this.value][66]);
            //             seve_list[dd].textContent=kan_list[this.value][66];
            //             break;
            //             case 4:
            //             //耐久
            //             var keisan = (kan_list[this.value][3]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][4]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][5]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][57]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][44]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.耐久 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             deta_get_seve[tablecount-1][5].耐久=keisan;
            //             break;
            //             case 5:
            //             //装填
            //             var keisan = (kan_list[this.value][18]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][19]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][20]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][43]*1);
            //             keisan=keisan+(kan_list[this.value][62]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][49]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.装填 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             deta_get_seve[tablecount-1][4].装填=keisan;
            //             break;
            //             case 6:
            //             //回避
            //             var keisan = (kan_list[this.value][27]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][28]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][29]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][64]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][52]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.回避 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             deta_get_seve[tablecount-1][5].回避=keisan;
            //             break;
            //             case 7:
            //             //命中
            //             var keisan = (kan_list[this.value][24]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][25]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][26]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][63]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][51]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.命中 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             deta_get_seve[tablecount-1][5].命中=keisan;
            //             break;
            //             case 8:
            //             //火力
            //             var keisan = (kan_list[this.value][6]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][7]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][8]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][39]*1);
            //             keisan=keisan+(kan_list[this.value][58]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][45]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.火力 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 9:
            //             //雷装
            //             var keisan = (kan_list[this.value][9]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][10]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][11]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][40]*1);
            //             keisan=keisan+(kan_list[this.value][59]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][46]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.雷装 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 10:
            //             //航空
            //             var keisan = (kan_list[this.value][15]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][16]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][17]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][42]*1);
            //             keisan=keisan+(kan_list[this.value][61]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][48]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.航空 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 11:
            //             //対空
            //             var keisan = (kan_list[this.value][12]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][13]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][14]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][41]*1);
            //             keisan=keisan+(kan_list[this.value][60]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][47]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.対空 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 12:
            //             //対潜
            //             var keisan = (kan_list[this.value][36]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][37]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][38]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][65]*1);
            //             keisan=keisan*(get_kizuna.value*1)+(kan_list[this.value][55]*1);
            //             keisan=Math.floor(keisan);
            //             rensou_hairetudeta.対潜 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 13:
            //             //速力
            //             var keisan = (kan_list[this.value][30]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][31]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][32]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][54]*1);
            //             rensou_hairetudeta.速力 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             break;
            //             case 14:
            //             //幸運
            //             var keisan = (kan_list[this.value][33]*1);
            //             keisan=keisan+(get_level.value*1-1)*(kan_list[this.value][34]*1)/1000;
            //             keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[this.value][35]*1)/1000;
            //             keisan=keisan+(kan_list[this.value][54]*1);
            //             rensou_hairetudeta.幸運 = keisan;
            //             seve_list[dd].textContent=keisan;
            //             deta_get_seve[tablecount-1][5].幸運=keisan;
            //             break;
            //             case 15:
            //             //消費
            //             rensou_hairetudeta.消費 = kan_list[this.value][77];
            //             seve_list[dd].textContent=kan_list[this.value][77];

            //             rensou_hairetudeta.硬直 = kan_list[this.value][76];
            //             break;
            //             case 16:
            //             //主砲系
            //             hairetudeta.push(kan_list[this.value][67]);
            //             kan_hairetudeta.soubi01=kan_list[this.value][67];
            //             seve_list[dd].textContent=kan_list[this.value][67];
            //             break;
            //             case 17:
            //             //主砲系
            //             hairetudeta.push(kan_list[this.value][70]);
            //             seve_list[dd].textContent=kan_list[this.value][70]+"%";
            //             break;
            //             case 18:
            //             //主砲系
            //             hairetudeta.push(kan_list[this.value][73]);
            //             seve_list[dd].textContent=kan_list[this.value][73];
            //             break;
            //             case 19:
            //             //副砲系
            //             hairetudeta.push(kan_list[this.value][68]);
            //             kan_hairetudeta.soubi02=kan_list[this.value][68];
            //             seve_list[dd].textContent=kan_list[this.value][68];
            //             break;
            //             case 20:
            //             //副砲系
            //             hairetudeta.push(kan_list[this.value][71]);
            //             seve_list[dd].textContent=kan_list[this.value][71]+"%";
            //             break;
            //             case 21:
            //             //副砲系
            //             hairetudeta.push(kan_list[this.value][74]);
            //             seve_list[dd].textContent=kan_list[this.value][74];
            //             break;
            //             case 22:
            //             //対空系
            //             hairetudeta.push(kan_list[this.value][69]);
            //             kan_hairetudeta.soubi03=kan_list[this.value][69];
            //             seve_list[dd].textContent=kan_list[this.value][69];
            //             break;
            //             case 23:
            //             //対空系
            //             hairetudeta.push(kan_list[this.value][72]);
            //             seve_list[dd].textContent=kan_list[this.value][72]+"%";
            //             break;
            //             case 24:
            //             //対空系
            //             hairetudeta.push(kan_list[this.value][75]);
            //             seve_list[dd].textContent=kan_list[this.value][75];

            //             kan_hairetudeta.soubi04='設備';
            //             kan_hairetudeta.soubi05='設備';
            //             hairetudeta.push(rensou_hairetudeta);
            //             hairetudeta.push(kan_hairetudeta);
            //             tabledetalist.push(hairetudeta);//キープエリア艦船ステータス
            //             break;
            //         }
            //     }
            //     speed_sum(tablecount-1,1);
            //     hitandkaihi(tablecount-1,0);
            //     damage_sum(tablecount-1,1);
            // };
            create_div.appendChild(create_button);

            for(var p=0; p<2; p++){
                //艦種と数値、ループ処理を変えて減らすことができる
                var create_span　= document.createElement("td");
                //create_span.classList = "kan_sutewaku";
                switch(p){
                    case 0:
                    create_span.textContent=sutelist[tt].jinei;//jinei、kantype
                    create_span.style.textAlign= "center";
                    break;
                    case 1:
                    create_span.textContent=sutelist[tt].power;
                    create_span.style.textAlign= "center";
                    break;
                }
                create_div.appendChild(create_span);
            }}
            mainpage.appendChild(create_div);
        }
    }

    var sutecate = function (i){
        switch(sutecategory){
            case "数値":
            case "無し":
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"無し",power:""});
            break;
            case "耐久":
            var keisan = (kan_list[i][3]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][4]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][5]*1)/1000;
            keisan=keisan+(kan_list[i][57]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][44]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"耐久",power:keisan});
            break;
            case "火力":
            var keisan = (kan_list[i][6]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][7]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][8]*1)/1000;
            keisan=keisan+(kan_list[i][39]*1);
            keisan=keisan+(kan_list[i][58]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][45]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"火力",power:keisan});
            break;
            case "雷装":
            var keisan = (kan_list[i][9]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][10]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][11]*1)/1000;
            keisan=keisan+(kan_list[i][40]*1);
            keisan=keisan+(kan_list[i][59]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][46]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"雷装",power:keisan});
            break;
            case "対空":
            var keisan = (kan_list[i][12]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][13]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][14]*1)/1000;
            keisan=keisan+(kan_list[i][41]*1);
            keisan=keisan+(kan_list[i][60]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][47]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"対空",power:keisan});
            break;
            case "航空":
            var keisan = (kan_list[i][15]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][16]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][17]*1)/1000;
            keisan=keisan+(kan_list[i][42]*1);
            keisan=keisan+(kan_list[i][61]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][48]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"航空",power:keisan});
            break;
            case "装填":
            var keisan = (kan_list[i][18]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][19]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][20]*1)/1000;
            keisan=keisan+(kan_list[i][43]*1);
            keisan=keisan+(kan_list[i][62]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][49]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"装填",power:keisan});
            break;
            case "命中":
            var keisan = (kan_list[i][24]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][25]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][26]*1)/1000;
            keisan=keisan+(kan_list[i][63]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][51]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"命中",power:keisan});
            break;
            case "回避":
            var keisan = (kan_list[i][27]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][28]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][29]*1)/1000;
            keisan=keisan+(kan_list[i][64]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][52]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"回避",power:keisan});
            break;
            case "速力":
            var keisan = (kan_list[i][30]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][31]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][32]*1)/1000;
            keisan=keisan+(kan_list[i][53]*1);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"速力",power:keisan});
            break;
            case "幸運":
            var keisan = (kan_list[i][33]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][34]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][35]*1)/1000;
            keisan=keisan+(kan_list[i][54]*1);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"幸運",power:keisan});
            break;
            case "対潜":
            var keisan = (kan_list[i][36]*1);
            keisan=keisan+(get_level.value*1-1)*(kan_list[i][37]*1)/1000;
            keisan=keisan+(Math.max(get_level.value*1,100)-100)*(kan_list[i][38]*1)/1000;
            keisan=keisan+(kan_list[i][65]*1);
            keisan=keisan*(get_kizuna.value*1)+(kan_list[i][55]*1);
            keisan=Math.floor(keisan);
            sutelist.push({kan_number:i,name:kan_list[i][2],jinei:kan_list[i][0],kantype:kan_list[i][1],sute:"対潜",power:keisan});
            break;
        }
    }

    var category_root = function(i,root){
        if(root==1){
            if(subcategory=="艦種"){
                sutecate(i);
            }else if(subcategory=="全て"){
                sutecate(i);
            }else if(subcategory=="前衛"){
                switch(kan_list[i][1]){
                    case "駆逐":
                    case "軽巡":
                    case "重巡":
                    case "超甲巡":
                    case "潜水":
                    sutecate(i);
                break;
                }
            }else if(subcategory=="主力"){
                switch(kan_list[i][1]){
                    case "巡戦":
                    case "戦艦":
                    case "航戦":
                    case "砲艦":
                    case "軽母":
                    case "空母":
                    case "工作":
                    sutecate(i);
                break;
                }
            }else if(subcategory=="戦艦"||"空母"||"その他"){
                if(subcategory=="戦艦"){
                    switch(kan_list[i][1]){
                        case "戦艦":
                        case "巡戦":
                        case "砲艦":
                        case "航戦":
                        sutecate(i);
                        break;
                    }
                }else if(subcategory=="空母"){
                    switch(kan_list[i][1]){
                        case "空母":
                        case "軽母":
                        case "潜母":
                        case "航戦":
                        sutecate(i);
                        break;
                    }
                }else if(subcategory=="潜水"){
                    switch(kan_list[i][1]){
                        case "潜水":
                        case "潜母":
                        sutecate(i);
                        break;
                    }    
                }else if(subcategory=="その他"){
                    switch(kan_list[i][1]){
                        case "工作":
                        case "航戦":
                        sutecate(i);
                        break;
                    }
                }else if(subcategory==kan_list[i][1]){
                    sutecate(i);
                }
            }
        } 
    }
//ランキングsort
    for(var i=0; i<kan_list.length; i++){
        switch(maincategory){
            case "陣営":
            case "全て":
            category_root(i,1);
            break;
            case "その他":
            switch(kan_list[i][0]){
                case "北方連合":
                case "ブリ":
                case "ネプテューヌ":
                case "うたわれるもの":
                case "KizunaAI":
                case "コラボ":
                case "その他":
                category_root(i,1);
                break;
            }
            break;
            case kan_list[i][0]:
            category_root(i,1);
            break;
        }
    }
    switch(sutecategory){
        case "数値":
        case "無し":
        Create_deta();
        break;
        default:
        sutelist.sort(function(a,b){
            if(a.power>b.power) return -1;
            if(a.power<b.power) return 1;
            return 0;
        });
        Create_deta();
        break;
    }
}
