var kansen_nouryoku = [];
var kensaku_kansen = {除外:[],新規:[],META:[],計画艦:[],コラボ:[],通常:[]};
var kensaku_list = [];

window.addEventListener('DOMContentLoaded', function() {
    for(var i=0;i<kan_profile.length; i++){
        var inputstatus_deta = {
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
        };
        kansen_nouryoku.push(inputstatus_deta);        

        if(kansen_nouryoku[i].記事.indexOf('改有り')!= -1){
            //改造後のレアを表示
            rarecolor = kansen_nouryoku[i].レア.substring(kansen_nouryoku[i].レア.indexOf('→')+1);
        }else if(kansen_nouryoku[i].レア.indexOf('→')!= -1){
            //初期レアを表示
            rarecolor = kansen_nouryoku[i].レア.substring(0,kansen_nouryoku[i].レア.indexOf('→'));
        }else{
            rarecolor =kansen_nouryoku[i].レア;
        }
        kansen_nouryoku[i].修正レア = rarecolor;
        kansen_nouryoku[i].ソート = i;
        kansen_nouryoku[i].正式名称 = kan_profile[i][12] === '改有り' ? kan_list[i][2].substring(0,kan_list[i][2].indexOf('改')):kan_list[i][2];

        if(kansen_nouryoku[i].除外[1] === '除外'){
            kensaku_kansen.除外.push(kansen_nouryoku[i]);
        }else if(kansen_nouryoku[i].除外[1] === '新規'){
            kensaku_kansen.新規.push(kansen_nouryoku[i]);
        }else if(kansen_nouryoku[i].除外[1] === 'META'){
            kensaku_kansen['META'].push(kansen_nouryoku[i]);
        }else if(kansen_nouryoku[i].除外[1] === '計画艦'){
            kensaku_kansen.計画艦.push(kansen_nouryoku[i]);
        }else if(kansen_nouryoku[i].除外[1] === 'コラボ'){
            kensaku_kansen.コラボ.push(kansen_nouryoku[i]);
        }else{
            kensaku_kansen.通常.push(kansen_nouryoku[i]);
        }
    }

    kensaku_kansen.通常.sort(function(a,b){
        if( a['番号']*1 < b['番号']*1 ) return -1;
        if( a['番号']*1 > b['番号']*1 ) return 1;
        return 0;
    });

    kensaku_list = kensaku_kansen.新規.concat(kensaku_kansen.通常,kensaku_kansen.計画艦,kensaku_kansen['META'],kensaku_kansen.コラボ);

    kansen_kakunouko = "";
    for(var kan=0; kan<kensaku_list.length; kan++){
        urldeta = "https://pasokau.com/"+kensaku_list[kan].接頭辞+'_'+kensaku_list[kan].リンク;
        adeta = '<img class="kanpic '+kensaku_list[kan]['修正レア']+'" src="'+kensaku_list[kan]['live'][2]+'" alt="'+kensaku_list[kan]['正式名称']+'"/><a href="'+urldeta+'" target="_blank" ><img src="https://livedoor.blogimg.jp/kojinn00home/imgs/c/5/c5d69403.png"/>'+kensaku_list[kan]['正式名称']+'</a>';
        kansen_kakunouko+=('<div style="display: inline-block;">'+adeta+'</div>');
    }
    document.getElementById("kan_list_div").insertAdjacentHTML("beforeend",kansen_kakunouko);
    
    //広告
    var contentkoukoku = "<ins class='adsbygoogle' style='display:block' data-ad-format='autorelaxed' data-ad-client='ca-pub-1820058722476319' data-ad-slot='7882308349'></ins>";
if(document.getElementById("contentdiv")!=null){
        document.getElementById("contentdiv").insertAdjacentHTML('beforeend',contentkoukoku);
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
});

function kanlist_setbutton(){
    kensaku_kunilist = [];
    kensaku_typelist = [];
    kensaku_rarelist = [];

    for (var i = 0; i < document.getElementsByName("kensaku_kuni").length; i++) {
        if (document.getElementsByName("kensaku_kuni")[i].checked) {
            kensaku_kunilist.push(document.getElementsByName("kensaku_kuni")[i].value);
        }
    }
    for (var i = 0; i < document.getElementsByName("kensaku_type").length; i++) {
        if (document.getElementsByName("kensaku_type")[i].checked) {
            kensaku_typelist.push(document.getElementsByName("kensaku_type")[i].value);
        }
      }
    for (var i = 0; i < document.getElementsByName("kensaku_rare").length; i++) {
        if (document.getElementsByName("kensaku_rare")[i].checked) {
            kensaku_rarelist.push(document.getElementsByName("kensaku_rare")[i].value);
        }
    }

    var rarehanntei = function(i){    
        if(Object.keys(kensaku_rarelist).length == 0){
            //rare指定なし
            document.getElementById('kan_list_div').getElementsByTagName('div')[i].style.display = "inline-block";
        }else{
            for(var y=0; y<kensaku_rarelist.length; y++){
                if(kensaku_rarelist[y] == kensaku_list[i].修正レア){
                    //rare指定
                    document.getElementById('kan_list_div').getElementsByTagName('div')[i].style.display = "inline-block";
                }
            }
        }
    }

    var typehantei = function(i){
        if(Object.keys(kensaku_typelist).length == 0){
            //艦種指定なし
            rarehanntei(i);
        }else{
            //艦種指定
            for(var r=0; r<kensaku_typelist.length; r++){
                if(kensaku_typelist[r]==kensaku_list[i].艦種){
                    rarehanntei(i);
                }
            }
        }
    }

    for(var i = 0; i<kensaku_list.length; i++){
        document.getElementById('kan_list_div').getElementsByTagName('div')[i].style.display = "none";
        //陣営
        if(Object.keys(kensaku_kunilist).length == 0){
            //陣営指定なし
            typehantei(i);
        }else{
            //陣営指定
            for(var j=0; j<kensaku_kunilist.length; j++){
                if(kensaku_kunilist[j]==kensaku_list[i].陣営){
                    typehantei(i);
                }
            }
        }
    }
}
