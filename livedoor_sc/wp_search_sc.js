// window.addEventListener('DOMContentLoaded', function() {
//         var adine = "<div class='body_koukoku'><ins class='adsbygoogle'style='display:block; text-align:center;'data-ad-layout='in-article'data-ad-format='fluid'data-ad-client='ca-pub-1820058722476319'data-ad-slot='7802009807'></ins></div>";
// 	var adine_top = "<ins class='adsbygoogle'style='display:block; text-align:center;'data-ad-layout='in-article'data-ad-format='fluid'data-ad-client='ca-pub-1820058722476319'data-ad-slot='7802009807'></ins>";
// 	var contentkoukoku = "<ins class='adsbygoogle' style='display:block' data-ad-format='autorelaxed' data-ad-client='ca-pub-1820058722476319' data-ad-slot='7882308349'></ins>";

// //     if(document.getElementById("koukoku_top")!=null){
// //         document.getElementById("koukoku_top").insertAdjacentHTML('beforeend',adine_top);
// //         (adsbygoogle = window.adsbygoogle || []).push({});
// //     }
// //         if(document.getElementById("koukoku_bottom")!=null){
// //             document.getElementById("koukoku_bottom").insertAdjacentHTML('beforeend',adine);
// //             (adsbygoogle = window.adsbygoogle || []).push({});
// //         }
// // if(document.getElementById("contentdiv")!=null){
// //         document.getElementById("contentdiv").insertAdjacentHTML('beforeend',contentkoukoku);
// //         (adsbygoogle = window.adsbygoogle || []).push({});
// //     }
// })    
 
var teamslist = {
        ユニオン:{名前:'ユニオン',フォルダ:'Eagle_Union'},
        ロイヤル:{名前:'ロイヤル',フォルダ:'Royal_Navy'},
        重桜:{名前:'重桜',フォルダ:'Sakura_Empire'},
        鉄血:{名前:'鉄血',フォルダ:'Iron_Blood'},
        アイリス:{名前:'アイリス',フォルダ:'Iris_Libre'},
        ヴィシア:{名前:'ヴィシア',フォルダ:'Vichya_Dominion'},
        サディア:{名前:'サディア',フォルダ:'Sardegna_Empire'},
        東煌:{名前:'東煌',フォルダ:'Dragon_Empery'},
        北連:{名前:'北連',フォルダ:'Northern_Parliament'},
	テンペスタ:{名前:'テンペスタ',フォルダ:'Tempesta'},
        META:{名前:'META',フォルダ:'Universal'},
        ネプテューヌ:{名前:'ネプテューヌ',フォルダ:'Collab_Nations'},
        うたわれるもの:{名前:'うたわれるもの',フォルダ:'Collab_Nations'},
        KizunaAI:{名前:'KizunaAI',フォルダ:'Collab_Nations'},
        ホロライブ:{名前:'ホロライブ',フォルダ:'Collab_Nations'},
        DOAXVV:{名前:'DOAXVV',フォルダ:'Collab_Nations'},
        アイドルマスター:{名前:'アイドルマスター',フォルダ:'Collab_Nations'},
        SSSS:{名前:'SSSS',フォルダ:'Collab_Nations'},
        ライザのアトリエ:{名前:'ライザのアトリエ',フォルダ:'Collab_Nations'},
        //:{名前:'',フォルダ:'Collab_Nations'},
        //:{名前:'',フォルダ:'Collab_Nations'},
        //BILIBILI:{名前:'BILIBILI',フォルダ:'Collab_Nations'},
        その他:{名前:'その他',フォルダ:'Collab_Nations'}
    }

    var typelist = {
        駆逐:{名前:'駆逐',正式名称:'駆逐艦',グループ:'駆逐',ポジション:'前衛'},
        軽巡:{名前:'軽巡',正式名称:'軽巡洋艦',グループ:'軽巡',ポジション:'前衛'},
        重巡:{名前:'重巡',正式名称:'重巡洋艦',グループ:'重巡',ポジション:'前衛'},
        超巡:{名前:'超巡',正式名称:'超甲型巡洋艦',グループ:'重巡',ポジション:'前衛'},
        軽母:{名前:'軽母',正式名称:'軽空母',グループ:'空母',ポジション:'主力'},
        空母:{名前:'空母',正式名称:'航空母艦',グループ:'空母',ポジション:'主力'},
        巡戦:{名前:'巡戦',正式名称:'巡洋戦艦',グループ:'戦艦',ポジション:'主力'},
        戦艦:{名前:'戦艦',正式名称:'戦艦',グループ:'戦艦',ポジション:'主力'},
        航戦:{名前:'航戦',正式名称:'航空戦艦',グループ:'戦艦',ポジション:'主力'},
        砲艦:{名前:'砲艦',正式名称:'砲艦',グループ:'戦艦',ポジション:'主力'},
        潜水:{名前:'潜水',正式名称:'潜水艦',グループ:'潜水',ポジション:'潜水'},
        潜母:{名前:'潜母',正式名称:'潜水空母',グループ:'潜水',ポジション:'潜水'},
        工作:{名前:'工作',正式名称:'工作艦',グループ:'特殊',ポジション:'主力'},
        運送:{名前:'運送',正式名称:'運送艦',グループ:'特殊',ポジション:'前衛'},
        風帆:{名前:'風帆',正式名称:'風帆船',グループ:'潜水',ポジション:'潜水'},
        //:{名前:'',正式名称:'',グループ:'',ポジション:''},
    }

    var realitylist = {
        N:{名前:'N',背景色:'background:#ccc',ボーダー:'border-color:#dbdcdf'},
        R:{名前:'R',背景色:'background:#9fe8ff',ボーダー:'border-color:#1bb7eb'},
        SR:{名前:'SR',背景色:'background:#c4adff',ボーダー:'border-color:#ae90ef'},
        SSR:{名前:'SSR',背景色:'background:#ee9',ボーダー:'border-color:#f9f593'},
        UR:{名前:'UR',背景色:'background: linear-gradient(120deg,#fbffca,#baffbf,#a7efff,#ffabff)',ボーダー:'border-color:linear-gradient(135deg,#6c6,#6ff,#c9f,#c6c)'},
        PR:{名前:'PR',背景色:'background:#ee9',ボーダー:'border-color:#f9f593'},
        DR:{名前:'DR',背景色:'background: linear-gradient(120deg,#fbffca,#baffbf,#a7efff,#ffabff)',ボーダー:'border-color:linear-gradient(45deg,#cc9,#f9f,#9ff,#9c9)'},
	//PR:{名前:'PR',背景色:'background:#a0522d',ボーダー:'border-color:#a0522d'},
        //DR:{名前:'DR',背景色:'background:linear-gradient(45deg,#cc9,#f9f,#9ff,#9c9)',ボーダー:'border-color:linear-gradient(45deg,#cc9,#f9f,#9ff,#9c9)'},
        //META:{名前:'META',背景色:'background:linear-gradient(45deg,#000000,#AD2A02,#D2541B,#000000,#6D2100,#9A2802)',ボーダー:'border-color:linear-gradient(45deg,#000000,#AD2A02,#D2541B,#000000,#6D2100,#9A2802)'},
        //META_SR:{名前:'META_SR',背景色:'background:linear-gradient(45deg,#000000,#8B58AD,#C46FB3,#000000,#8250AB,#5C3B7D)',ボーダー:'border-color:linear-gradient(45deg,#000000,#8B58AD,#C46FB3,#000000,#8250AB,#5C3B7D)'},
    }

    var kan_data = new Object();
    var kensaku_kansen = {除外:{},新規:{},META:{},計画艦:{},コラボ:{},通常:{}};
    var kensaku_list = [];
    var BirthdayList = {noname:[],January:[],February:[],March:[],April:[],May:[],June:[],July:[],August:[],September:[],October:[],November:[],December:[],prkansenn:[],colabo:[]};
    var zepan = [];
    var setid = [
        //insert p div
        ['searchbox','<p id="searcmenue">',' onchange="search_kansen(\'searcmenue\',\'kan_list_div\',\'.character_box\',\'inline_block\')"'],
        ['top_box','<p id="searchsinsui">',' onchange="search_kansen(\'searchsinsui\',\'sinsuisearch\',\'.sinsui_chara\',\'inline_block\')"'],
        ['nostock','<p id="searchnostock">',' onchange="search_kansen(\'searchnostock\',\'nostock_div\',\'.character_box\',\'inline_block\')"'],
        //['kensakuselectarea02','<p id="kensakumenue02">','<div id="kan_list_div02">',' onchange="kensaku_siborikomi(\'kensakumenue02\',\'kan_list_div02\')"'],
    ]
    var obj_menue = function(x){
        //絞り込みメニュー
        var tems = setid[x][1],tenpure = [teamslist,typelist,realitylist],styledeta = ['160px','64px','64px'],textdeta = ['陣営','艦種','レア'];
        for(var y = 0; y<tenpure.length;y++){
            for(var i=0; i<Object.keys(tenpure[y]).length; i++){
                tems += (i==0) ? ('<select style="width:'+styledeta[y]+';height: 46px;padding: 0px;"'+setid[x][2]+'><option value="全て" selected="selected">'+textdeta[y]+'</option>') : '';
                tems += '<option value="'+Object.keys(tenpure[y])[i]+'">'+Object.keys(tenpure[y])[i]+'</option>';
                tems += (i==Object.keys(tenpure[y]).length-1) ? '</select> ' : '';
            }
        }
        return (tems+='</p>');
    }

    window.addEventListener('DOMContentLoaded', function() {
        for(var i=0;i<kan_profile.length; i++){
            kan_data[kan_list[i][2]] = {};

            kan_data[kan_list[i][2]] = {
                陣営:kan_list[i][0],
                艦種:kan_list[i][1],
                正規名:kan_list[i][2],
                レア:kan_profile[i][3],
                装甲:kan_list[i][66],
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
                消費:kan_list[i][77]*1,
                主砲装備:kan_list[i][67],
                主砲補正:kan_list[i][70],
                主砲砲座:kan_list[i][73],
                副砲装備:kan_list[i][68],
                副砲補正:kan_list[i][71],
                副砲砲座:kan_list[i][74],
                対空装備:kan_list[i][69],
                対空補正:kan_list[i][72],
                対空砲座:kan_list[i][75],
                硬直:kan_list[i][76],
                設備:'設備',
                画像:kan_profile[i][10],
                スキル:kan_profile[i][11],
                記事:kan_profile[i][12],
                声優:kan_profile[i][8],
                絵師:kan_profile[i][9],
                入手:kan_profile[i][4],
                実装日:kan_profile[i][5],
                改造日:kan_profile[i][6],
                進水日:kan_profile[i][7],
                起工日:kan_profile[i][13],
                竣工日:kan_profile[i][14],
                艦級:kan_profile[i][15],
                除外:kan_profile[i][16],
                live:kan_profile[i][17],
                評価:kan_profile[i][18],
                建造:kan_profile[i][19],
                突破:kan_profile[i][20],
                表記:kan_profile[i][21],
                接頭辞:kan_profile[i][22],
                リンク:kan_profile[i][23],
                番号:kan_profile[i][24],
                wpurl:kan_profile[i][25]
            };

            if(kan_data[kan_list[i][2]].記事.indexOf('改有り')!= -1){
                rarecolor = kan_data[kan_list[i][2]].レア.substring(kan_data[kan_list[i][2]].レア.indexOf('→')+1);//改造後のレアを表示
            }else if(kan_data[kan_list[i][2]].レア.indexOf('→')!= -1){
                rarecolor = kan_data[kan_list[i][2]].レア.substring(0,kan_data[kan_list[i][2]].レア.indexOf('→')); //初期レアを表示
            }else{
                rarecolor =kan_data[kan_list[i][2]].レア;//初期レアを表示
            }
            kan_data[kan_list[i][2]].修正レア = rarecolor;
            kan_data[kan_list[i][2]].ソート = i;
            kan_data[kan_list[i][2]].正式名称 = kan_data[kan_list[i][2]].記事 === '改有り' ? kan_list[i][2].substring(0,kan_list[i][2].indexOf('改')):kan_list[i][2];

            //検索用
            if(kan_data[kan_list[i][2]].除外[1] === ''){
                kensaku_kansen['通常'][kan_list[i][2]] = kan_data[kan_list[i][2]];
            }else{
                kensaku_kansen[kan_data[kan_list[i][2]]['除外'][1]][kan_list[i][2]] = kan_data[kan_list[i][2]];
            }

            //進水日用
            if(kan_data[kan_list[i][2]].除外[0] === '除外'){
                ;
            }else if(kan_data[kan_list[i][2]].除外[0]  === '未完成'){
                BirthdayList['prkansenn'].push(kan_data[kan_list[i][2]]);
            }else if(kan_data[kan_list[i][2]].除外[0]  === 'コラボ'){
                BirthdayList['colabo'].push(kan_data[kan_list[i][2]]);
            }else{
                if(kan_data[kan_list[i][2]].進水日.indexOf('月') != -1){
                    kan_data[kan_list[i][2]].進水日まとめ = kan_profile[i][7].match(/(\d+)月(\d+)日/),//[0]=月日、[1]=月、[2]=日
                    BirthdayList[Object.keys(BirthdayList)[kan_data[kan_list[i][2]].進水日まとめ[1]]].push(kan_data[kan_list[i][2]]);
                }else{
                    BirthdayList['prkansenn'].push(kan_data[kan_list[i][2]]);
                }
            }

            //絶版
            if(kan_data[kan_list[i][2]].除外[3] === '' || kan_data[kan_list[i][2]].除外[3] === '除外'){
                ;
            }else{
                var str = kan_data[kan_list[i][2]].除外[3].replace( '年', '/' );
                    str = str.replace( '月', '/' );
                    str = str.replace( '日', '' );
                    kan_data[kan_list[i][2]].絶版 = str;
                    zepan.push(kan_data[kan_list[i][2]]);
            }
        }

        result = Object.keys(kensaku_kansen['通常']).map(function(key) {
            return kensaku_kansen['通常'][key];}).sort(function(a, b) {
                return (a['番号']*1 < b['番号']*1) ? -1 : 1;  
        });
        kensaku_list = Object.keys(kensaku_kansen['新規']).map(function(key) {return kensaku_kansen['新規'][key];}).concat(result,Object.keys(kensaku_kansen['計画艦']).map(function(key) {return kensaku_kansen['計画艦'][key];}),Object.keys(kensaku_kansen['META']).map(function(key) {return kensaku_kansen['META'][key];}),Object.keys(kensaku_kansen['コラボ']).map(function(key) {return kensaku_kansen['コラボ'][key];}));
            
        //全キャラ
        if(document.getElementById("searchbox")){
            document.getElementById("searchbox").insertAdjacentHTML("afterbegin",obj_menue(0));
            kansen_kakunouko = "";
            for(var kan=0; kan<kensaku_list.length; kan++){
                urldeta = "https://pasokau.com/"+kensaku_list[kan].wpurl;
                adeta = '<img class="kanpic '+kensaku_list[kan]['修正レア']+'" src="'+("https://pasokau.com/wp-content/uploads/face/"+kensaku_list[kan]['正式名称']+".jpg")+'" alt="'+kensaku_list[kan]['正式名称']+'"/><a href="'+urldeta+'" target="_blank" ><img src="https://pasokau.com/wp-content/uploads/face/透過.png">'+kensaku_list[kan]['正式名称']+'</a>';
                kansen_kakunouko+=('<div class="character_box" data-display="inline_block" data-teams="'+kensaku_list[kan]['陣営']+'" data-type="'+kensaku_list[kan]['艦種']+'" data-reality="'+kensaku_list[kan]['修正レア']+'">'+adeta+'</div>');
            }
            document.getElementById("searchbox").insertAdjacentHTML("beforeend",'<div id="kan_list_div">'+kansen_kakunouko+'</div>');
        }

        //進水日
        if(document.getElementById("top_box")){
            document.getElementById("top_box").insertAdjacentHTML("afterbegin",
            '<b>・月日指定で探す</b>（コラボ除く）'+
            '<p style="display: flex;"><input max="12" min="1" value="1" id="moon" type="number" style="width:80px;height:46px;"> 月 <input max="31" min="1" value="1" id="sun" type="number" style="width:80px;height:46px;"> 日 <button  onclick="macthbirthday()" style="width:80px;height:46px;">探す！</button></p>'+
            '<p id="match_birthday"></p><div id="tweet1"></div><p id="no_matching"></p>'+
            '<b>・絞り込み検索</b>'+
            obj_menue(1));
            var moonsun = new Date(),getmoon = moonsun.getMonth() + 1,getsun = moonsun.getDate();
                document.getElementById("moon").value = getmoon;
                document.getElementById("sun").value = getsun;

            //1~12月
            for(var d=1; d<Object.keys(BirthdayList).length;d++){
                type = (d == Object.keys(BirthdayList).length-1) ? '' : '進水日：';
            
                if(d<13){
                    BirthdayList[Object.keys(BirthdayList)[d]].sort(function(a,b){
                        return (a.進水日まとめ[2]*1 < b.進水日まとめ[2]*1 ? -1 : 1);
                    });
                }
            
                var utuwa = "";
                for(var sun = 0; sun<BirthdayList[Object.keys(BirthdayList)[d]].length; sun++){
                    if(sun == 0){
                        utuwa = '<table class="table_sinsui_box" border="0" cellpadding="0" onmousedown="return false;" onselectstart="return false" oncontextmenu="return false;"><tbody>';
                    }
                    url = ("https://pasokau.com/"+BirthdayList[Object.keys(BirthdayList)[d]][sun].wpurl);
                    utuwa += (
                        '<tr class="sinsui_chara" data-display="inline_block" data-teams="'+BirthdayList[Object.keys(BirthdayList)[d]][sun]['陣営']+'" data-type="'+BirthdayList[Object.keys(BirthdayList)[d]][sun]['艦種']+'" data-reality="'+BirthdayList[Object.keys(BirthdayList)[d]][sun]['修正レア']+'">'+
                            '<td class="character_box"><img class="kanpic '+BirthdayList[Object.keys(BirthdayList)[d]][sun]['修正レア']+'" src="'+("https://pasokau.com/wp-content/uploads/face/"+BirthdayList[Object.keys(BirthdayList)[d]][sun]['正式名称']+".jpg")+'" alt="'+BirthdayList[Object.keys(BirthdayList)[d]][sun]['正式名称']+'"><a href="'+url+'" target="_blank" ><img src="https://pasokau.com/wp-content/uploads/face/透過.png"></a></td>'+
                                '<td>'+BirthdayList[Object.keys(BirthdayList)[d]][sun].陣営+BirthdayList[Object.keys(BirthdayList)[d]][sun].修正レア+BirthdayList[Object.keys(BirthdayList)[d]][sun].艦種+'<br>'+
                                BirthdayList[Object.keys(BirthdayList)[d]][sun].正式名称+'<br>'+type+BirthdayList[Object.keys(BirthdayList)[d]][sun].進水日+'</td></tr>'
                        )

                    if(sun == BirthdayList[Object.keys(BirthdayList)[d]].length-1){
                        utuwa += '</tbody></table>';
                        document.getElementById(Object.keys(BirthdayList)[d]).insertAdjacentHTML("beforeend",utuwa);
                    }
                }
            }
        }

        //絶版
        if(document.getElementById("nostock")){
            document.getElementById("nostock").insertAdjacentHTML("afterbegin",obj_menue(2));
            zepan = [...zepan].sort((a, b) => new Date(a['絶版']) - new Date(b['絶版']));
            kansen_kakunouko = "";
            for(var kan=0; kan<zepan.length; kan++){
                urldeta = "https://pasokau.com/"+zepan[kan].wpurl;
                adeta = '<img class="kanpic '+zepan[kan]['修正レア']+'" src="'+("https://pasokau.com/wp-content/uploads/face/"+zepan[kan].正式名称+".jpg")+'" alt="'+zepan[kan]['正式名称']+'"/><a href="'+urldeta+'" target="_blank" ><img src="https://pasokau.com/wp-content/uploads/face/透過.png">'+zepan[kan]['正式名称']+'</a>';
                kansen_kakunouko+=('<div class="character_box" data-display="inline_block" data-teams="'+zepan[kan]['陣営']+'" data-type="'+zepan[kan]['艦種']+'" data-reality="'+zepan[kan]['修正レア']+'">'+adeta+'</div>');
            }
            document.getElementById("nostock").insertAdjacentHTML("beforeend",'<div id="nostock_div" onmousedown="return false;" onselectstart="return false" oncontextmenu="return false;">'+kansen_kakunouko+'</div>');
        }
    });

    //検索絞り込み
    function search_kansen(pid,divid,open,blocktype){
        var teams = document.getElementById(pid).querySelectorAll('select')[0].value,type = document.getElementById(pid).querySelectorAll('select')[1].value,reality = document.getElementById(pid).querySelectorAll('select')[2].value;
        var div = document.getElementById(divid).querySelectorAll(open);
        for(var i=0;i<div.length;i++){
            div[i].dataset.display = 'none';
            if((teams == '全て' || teams == div[i].dataset.teams) && (type == '全て' || type == div[i].dataset.type) && (reality == '全て' || reality == div[i].dataset.reality)){
                div[i].dataset.display = blocktype;
            }
        }
    }

    var box = {macthng:[],purasu:[],minus:[]},tweetset = {text1:'',text2:'',text3:''};
    var tosi = [0,31,29,31,30,31,30,31,31,30,31,30,31];
function macthbirthday(){
    var moon = document.getElementById("moon").value*1,sun = document.getElementById("sun").value*1;
    box = {macthng:[],purasu:[],minus:[]};
    for(var p=0; p<BirthdayList[Object.keys(BirthdayList)[moon]].length;p++){
        if(BirthdayList[Object.keys(BirthdayList)[moon]][p].進水日まとめ[2] == sun){
            box.macthng.push(BirthdayList[Object.keys(BirthdayList)[moon]][p]);
        }
    }

    var purasu = {月:moon,日:sun},minus = {月:moon,日:sun};
    for(var i=1;i<5;i++){
        purasu.月 = purasu.日+i > tosi[purasu.月] ? (purasu.月+1 == 13) ? 1 : purasu.月+1 : purasu.月;
        purasu.日 = purasu.日+i > tosi[purasu.月] ? 1 : purasu.日+1;

        minus.月 = minus.日-i <= 0 ? (minus.月-1 == 0) ? 12 : minus.月-1 : minus.月;
        minus.日 = minus.日-i <= 0 ? tosi[minus.月] : minus.日-1;

        for(var p=0; p<kensaku_list.length;p++){
            if(kensaku_list[p].進水日まとめ){
                if(kensaku_list[p].進水日まとめ[1] == purasu.月 && kensaku_list[p].進水日まとめ[2] == purasu.日){
                    box.purasu.push(kensaku_list[p]);
                }
                if(kensaku_list[p].進水日まとめ[1] == minus.月 && kensaku_list[p].進水日まとめ[2] == minus.日){
                    box.minus.push(kensaku_list[p]);
                }
            }
        }
    }

    var dammset = {damm0:[],damm1:[],damm2:[]},texta = "",textb = "",textc = "";
    if(box.macthng.length){
        aaa="",twi="",icount=0;
        for(var i=0;i<box.macthng.length;i++){
            dammset.damm0.push(box.macthng[i].正式名称);
            url = ("https://pasokau.com/"+box.macthng[i].wpurl);
            aaa += ('☆<a href="'+url+'" target="_blank" >'+dammset.damm0[i]+'</a><br>');
            if(icount!=2){
                twi += ('☆'+dammset.damm0[i]+'\n');
                icount++;
            }
        }
        texta = '進水日「'+moon+'月'+sun+'日」の艦船は<br>'+aaa+'…です！';
        tweetset.text1 = '【#アズレン進水日】\n「'+moon+'月'+sun+'日」の艦船を探しました！\n'+twi;
    }else{
        texta = '進水日「'+moon+'月'+sun+'日」の艦船は見つかりませんでした…';
        tweetset.text1 = '【#アズレン進水日】\n「'+moon+'月'+sun+'日」の艦船は見つかりませんでした…\n';
    }

    if(box.minus.length){
        box.minus.reverse();
        for(var i=0;i<box.minus.length;i++){
            dammset.damm1.push(box.minus[i].正式名称+'('+box.minus[i].進水日まとめ[0]+')');
            url = ("https://pasokau.com/"+box.minus[i].wpurl);
            textb += ('☆<a href="'+url+'" target="_blank" >'+dammset.damm1[i]+'</a><br>');
        }
    }

    if(box.purasu.length){
        for(var i=0;i<box.purasu.length;i++){
            dammset.damm2.push(box.purasu[i].正式名称+'('+box.purasu[i].進水日まとめ[0]+')');
            url = ("https://pasokau.com/"+box.purasu[i].wpurl);
            textc +=  ('☆<a href="'+url+'" target="_blank" >'+dammset.damm2[i]+'</a><br>');
        }
    }

    document.getElementById("match_birthday").textContent ="";
    document.getElementById("match_birthday").insertAdjacentHTML('beforeend',texta)
    document.getElementById("no_matching").textContent ="";
    document.getElementById("no_matching").insertAdjacentHTML('beforeend',
    '近いところだと、<br>'+textb+textc+'…などがいます！<br>'
    )

        // twttrが使えるようになったらシェアボタンを作る。
        document.getElementById("tweet1").innerHTML = '';
        twttr.widgets.createShareButton(
            shareUrl,
            document.getElementById("tweet1"),{
                count: 'none',
                text: tweetset.text1,
                size: "large",
                hashtags: "",
            });
}

    // Twitterの初期化
    var shareUrl = "https://pasokau.com/kan_sinnsuibi_deta";
    var js, fjs = document.getElementsByTagName('script')[0];
    if (!document.getElementById('twitter-wjs')) {
     js = document.createElement('script');
     js.id = 'twitter-wjs';
     js.src = 'https://platform.twitter.com/widgets.js';
     fjs.parentNode.insertBefore(js, fjs);
    }

